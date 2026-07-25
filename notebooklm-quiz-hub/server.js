import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_PATH = path.join(__dirname, 'db.json');
const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());

// Helper to get local network IP address (LAN IP)
function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const devName in interfaces) {
    const iface = interfaces[devName];
    if (!iface) continue;
    for (let i = 0; i < iface.length; i++) {
      const alias = iface[i];
      if (alias.family === 'IPv4' && !alias.internal) {
        return alias.address;
      }
    }
  }
  return 'localhost';
}

// Database helper functions
async function readDB() {
  try {
    const data = await fs.readFile(DB_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return { quizzes: [], submissions: [] };
  }
}

async function writeDB(data) {
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), 'utf8');
}

// API Endpoints

// 1. Get LAN IP and server port
app.get('/api/ip', (req, res) => {
  res.json({ ip: getLocalIP(), port: PORT });
});

// 2. Get all quizzes
app.get('/api/quizzes', async (req, res) => {
  try {
    const db = await readDB();
    res.json(db.quizzes || []);
  } catch (error) {
    res.status(500).json({ error: '無法讀取測驗列表' });
  }
});

// 3. Get a specific quiz
app.get('/api/quizzes/:id', async (req, res) => {
  try {
    const db = await readDB();
    const quiz = db.quizzes.find(q => q.id === req.params.id);
    if (!quiz) {
      return res.status(404).json({ error: '找不到該測驗' });
    }
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ error: '無法讀取測驗內容' });
  }
});

// 4. Create a new quiz
app.post('/api/quizzes', async (req, res) => {
  try {
    const { title, description, questions } = req.body;
    if (!title || !questions || !Array.isArray(questions) || questions.length === 0) {
      return res.status(400).json({ error: '請提供完整的標題與題目內容' });
    }

    const db = await readDB();
    const newQuiz = {
      id: 'quiz-' + crypto.randomUUID(),
      title,
      description: description || '',
      createdAt: new Date().toISOString(),
      questions: questions.map((q, idx) => ({
        id: q.id || `q-${idx}-${Date.now()}`,
        text: q.text,
        type: q.type || 'single', // 'single' or 'multiple'
        options: q.options.map((o, oidx) => ({
          id: o.id || `o-${oidx}-${Date.now()}`,
          text: o.text,
          isCorrect: !!o.isCorrect,
          explanation: o.explanation || ''
        }))
      }))
    };

    db.quizzes.push(newQuiz);
    await writeDB(db);
    res.status(201).json(newQuiz);
  } catch (error) {
    res.status(500).json({ error: '儲存測驗失敗' });
  }
});

// 5. Update a quiz
app.put('/api/quizzes/:id', async (req, res) => {
  try {
    const { title, description, questions } = req.body;
    if (!title || !questions || !Array.isArray(questions) || questions.length === 0) {
      return res.status(400).json({ error: '請提供完整的標題與題目內容' });
    }

    const db = await readDB();
    const quizIndex = db.quizzes.findIndex(q => q.id === req.params.id);
    if (quizIndex === -1) {
      return res.status(404).json({ error: '找不到該測驗' });
    }

    const updatedQuiz = {
      ...db.quizzes[quizIndex],
      title,
      description: description || '',
      questions: questions.map((q, idx) => ({
        id: q.id || `q-${idx}-${Date.now()}`,
        text: q.text,
        type: q.type || 'single',
        options: q.options.map((o, oidx) => ({
          id: o.id || `o-${oidx}-${Date.now()}`,
          text: o.text,
          isCorrect: !!o.isCorrect,
          explanation: o.explanation || ''
        }))
      }))
    };

    db.quizzes[quizIndex] = updatedQuiz;
    await writeDB(db);
    res.json(updatedQuiz);
  } catch (error) {
    res.status(500).json({ error: '更新測驗失敗' });
  }
});

// 6. Delete a quiz
app.delete('/api/quizzes/:id', async (req, res) => {
  try {
    const db = await readDB();
    db.quizzes = db.quizzes.filter(q => q.id !== req.params.id);
    db.submissions = db.submissions.filter(s => s.quizId !== req.params.id);
    await writeDB(db);
    res.json({ success: true, message: '測驗與相關紀錄已成功刪除' });
  } catch (error) {
    res.status(500).json({ error: '刪除測驗失敗' });
  }
});

// 7. Submit student responses and compute score
app.post('/api/quizzes/:id/submit', async (req, res) => {
  try {
    const { studentName, answers } = req.body;
    if (!studentName) {
      return res.status(400).json({ error: '請輸入學員姓名以進行測驗提交' });
    }

    const db = await readDB();
    const quiz = db.quizzes.find(q => q.id === req.params.id);
    if (!quiz) {
      return res.status(404).json({ error: '找不到該測驗' });
    }

    let correctCount = 0;
    const scoredAnswers = quiz.questions.map(q => {
      const studentAnswer = answers.find(a => a.questionId === q.id);
      const studentSelectedOptionIds = studentAnswer ? studentAnswer.selectedOptionIds || [] : [];
      
      // Get all correct option IDs for this question
      const correctOptionIds = q.options.filter(o => o.isCorrect).map(o => o.id);
      
      // Check if student answers match correct answers exactly
      const isCorrect = 
        studentSelectedOptionIds.length === correctOptionIds.length &&
        studentSelectedOptionIds.every(id => correctOptionIds.includes(id));
      
      if (isCorrect) {
        correctCount++;
      }

      return {
        questionId: q.id,
        selectedOptionIds: studentSelectedOptionIds,
        isCorrect
      };
    });

    const score = Math.round((correctCount / quiz.questions.length) * 100);

    const submission = {
      id: 'sub-' + crypto.randomUUID(),
      quizId: req.params.id,
      studentName,
      score,
      submittedAt: new Date().toISOString(),
      answers: scoredAnswers
    };

    db.submissions = db.submissions || [];
    db.submissions.push(submission);
    await writeDB(db);

    res.json({ success: true, score, submissionId: submission.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: '送出測驗答案失敗' });
  }
});

// 8. Get submissions for a specific quiz
app.get('/api/quizzes/:id/results', async (req, res) => {
  try {
    const db = await readDB();
    const quizSubmissions = (db.submissions || []).filter(s => s.quizId === req.params.id);
    // Sort by submit time, newest first
    quizSubmissions.sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
    res.json(quizSubmissions);
  } catch (error) {
    res.status(500).json({ error: '無法讀取測驗作答紀錄' });
  }
});

// Serve frontend static files in production
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// For routing, fall back to index.html (SPA)
app.get('*', (req, res, next) => {
  // If request is for /api, skip to default error handler
  if (req.path.startsWith('/api')) {
    return next();
  }
  res.sendFile(path.join(distPath, 'index.html'), { headers: { 'Content-Type': 'text/html' } }, (err) => {
    if (err) {
      res.status(404).send('Frontend not built yet. Please build with npm run build.');
    }
  });
});

app.listen(PORT, () => {
  console.log(`[NotebookLM Quiz Hub] Server running at http://localhost:${PORT}`);
  console.log(`[NotebookLM Quiz Hub] LAN Access at http://${getLocalIP()}:${PORT}`);
});
