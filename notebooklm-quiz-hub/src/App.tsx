import { useEffect, useState } from 'react';
import CreatorDashboard from './components/CreatorDashboard';
import QuizEditor from './components/QuizEditor';
import QuizTaker from './components/QuizTaker';
import QuizResultsView from './components/QuizResultsView';
import QRModal from './components/QRModal';
import { BrainCircuit } from 'lucide-react';
import './App.css';

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

type ViewState = 'dashboard' | 'editor' | 'results' | 'taker';

export default function App() {
  const [view, setView] = useState<ViewState>('dashboard');
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [activeQR, setActiveQR] = useState<{ id: string; title: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [studentQuizId, setStudentQuizId] = useState<string | null>(null);

  // Initialize view: check for quizId query parameter (student mode)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const quizId = params.get('quizId');
    if (quizId) {
      setStudentQuizId(quizId);
      setView('taker');
      setLoading(false);
    } else {
      fetchQuizzes();
    }
  }, []);

  const fetchQuizzes = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/quizzes');
      if (!res.ok) throw new Error('Failed to fetch quizzes');
      const data = await res.json();
      setQuizzes(data);
    } catch (error) {
      console.error('Error fetching quizzes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
    setView('editor');
  };

  const handleCreateNew = () => {
    setSelectedQuiz(null);
    setView('editor');
  };

  const handleDelete = async (quizId: string) => {
    if (!confirm('您確定要刪除此測驗卡片與所有相關學員的作答紀錄嗎？此動作無法復原。')) {
      return;
    }

    try {
      const res = await fetch(`/api/quizzes/${quizId}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Delete failed');
      fetchQuizzes();
    } catch (error) {
      console.error('Failed to delete quiz:', error);
      alert('刪除失敗，請重試。');
    }
  };

  const handleViewResults = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
    setView('results');
  };

  const handleSaveComplete = () => {
    setView('dashboard');
    fetchQuizzes();
  };

  return (
    <div className="app-container">
      {/* 1. Header (Only show for Creator mode, hide for Student taker to focus) */}
      {view !== 'taker' && (
        <header>
          <div className="brand-section">
            <BrainCircuit size={28} className="logo-icon" />
            <div>
              <span className="brand-name">NotebookLM Quiz Hub</span>
              <span className="brand-badge" style={{ marginLeft: '0.5rem' }}>智慧測驗卡</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              講師管理後台
            </span>
          </div>
        </header>
      )}

      {/* 2. Main Content Views */}
      <main>
        {loading ? (
          <div className="glass-panel text-center" style={{ padding: '4rem 2rem' }}>
            <p style={{ color: 'var(--text-secondary)' }}>正在載入系統資料...</p>
          </div>
        ) : (
          <>
            {view === 'dashboard' && (
              <CreatorDashboard
                quizzes={quizzes}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onCreateNew={handleCreateNew}
                onViewResults={handleViewResults}
                onShowQR={(id, title) => setActiveQR({ id, title })}
              />
            )}

            {view === 'editor' && (
              <QuizEditor
                quiz={selectedQuiz}
                onSave={handleSaveComplete}
                onCancel={() => setView('dashboard')}
              />
            )}

            {view === 'results' && (
              <QuizResultsView
                quiz={selectedQuiz!}
                onBack={() => setView('dashboard')}
              />
            )}

            {view === 'taker' && studentQuizId && (
              <QuizTaker quizId={studentQuizId} />
            )}
          </>
        )}
      </main>

      {/* 3. Modals */}
      {activeQR && (
        <QRModal
          isOpen={!!activeQR}
          onClose={() => setActiveQR(null)}
          quizId={activeQR.id}
          quizTitle={activeQR.title}
        />
      )}
    </div>
  );
}
