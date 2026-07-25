import { useEffect, useState } from 'react';
import { Plus, Edit3, Trash2, QrCode, FileText, HelpCircle, Users } from 'lucide-react';

interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation: string;
}

interface Question {
  id: string;
  text: string;
  type: 'single' | 'multiple';
  options: Option[];
}

interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

interface CreatorDashboardProps {
  quizzes: Quiz[];
  onEdit: (quiz: Quiz) => void;
  onDelete: (quizId: string) => void;
  onCreateNew: () => void;
  onViewResults: (quiz: Quiz) => void;
  onShowQR: (quizId: string, quizTitle: string) => void;
}

// Inner helper component for QuizCard to handle dynamic counts and loading
function QuizCard({ 
  quiz, 
  onEdit, 
  onDelete, 
  onViewResults, 
  onShowQR 
}: { 
  quiz: Quiz;
  onEdit: (quiz: Quiz) => void;
  onDelete: (quizId: string) => void;
  onViewResults: (quiz: Quiz) => void;
  onShowQR: (quizId: string, quizTitle: string) => void;
}) {
  const [submissionCount, setSubmissionCount] = useState<number>(0);

  useEffect(() => {
    fetch(`/api/quizzes/${quiz.id}/results`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setSubmissionCount(data.length);
        }
      })
      .catch(err => console.error('Failed to load results count:', err));
  }, [quiz.id]);

  return (
    <div className="quiz-card glass-panel">
      <div className="quiz-card-header">
        <h3 className="quiz-card-title">{quiz.title}</h3>
        <p className="quiz-card-desc">{quiz.description || '無描述內容。'}</p>
      </div>

      <div>
        <div className="quiz-card-stats">
          <div className="stat-item" title="問題數量">
            <HelpCircle size={14} />
            <span>{quiz.questions.length} 個題目</span>
          </div>
          <div className="stat-item" title="已完成學員人數">
            <Users size={14} />
            <span>{submissionCount} 人已作答</span>
          </div>
        </div>

        <div className="quiz-card-actions">
          <button 
            className="btn btn-secondary btn-icon-only" 
            onClick={() => onShowQR(quiz.id, quiz.title)}
            title="發布與顯示二維碼"
            style={{ color: '#818cf8' }}
          >
            <QrCode size={16} />
          </button>
          
          <button 
            className="btn btn-secondary btn-icon-only" 
            onClick={() => onViewResults(quiz)}
            title="查看測驗結果與學員狀況"
            style={{ color: '#34d399' }}
          >
            <FileText size={16} />
          </button>

          <button 
            className="btn btn-secondary btn-icon-only" 
            onClick={() => onEdit(quiz)}
            title="編輯測驗題目"
          >
            <Edit3 size={16} />
          </button>

          <button 
            className="btn btn-danger btn-icon-only" 
            onClick={() => onDelete(quiz.id)}
            title="刪除測驗"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CreatorDashboard({
  quizzes,
  onEdit,
  onDelete,
  onCreateNew,
  onViewResults,
  onShowQR
}: CreatorDashboardProps) {
  return (
    <div className="dashboard-container">
      <div className="d-flex justify-between align-center mb-6">
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>測驗管理控制台</h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            建立、發布與分析您的測驗卡片。學員掃描 QR 碼即可線上作答。
          </p>
        </div>
        <button className="btn btn-primary" onClick={onCreateNew}>
          <Plus size={18} />
          建立新測驗
        </button>
      </div>

      {quizzes.length === 0 ? (
        <div className="glass-panel text-center" style={{ padding: '4rem 2rem', marginTop: '2rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>尚無測驗卡片</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', maxWidth: '400px', margin: '0 auto 1.5rem' }}>
            點擊右上角的「建立新測驗」按鈕，開始製作您的第一份測驗題目吧！
          </p>
          <button className="btn btn-primary" onClick={onCreateNew}>
            <Plus size={18} />
            建立第一個測驗
          </button>
        </div>
      ) : (
        <div className="dashboard-grid">
          {quizzes.map(quiz => (
            <QuizCard 
              key={quiz.id}
              quiz={quiz}
              onEdit={onEdit}
              onDelete={onDelete}
              onViewResults={onViewResults}
              onShowQR={onShowQR}
            />
          ))}
        </div>
      )}
    </div>
  );
}
