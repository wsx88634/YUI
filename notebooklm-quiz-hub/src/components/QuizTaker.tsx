import React, { useEffect, useState } from 'react';
import { User, Play, ArrowRight, XCircle, Award, Check, Circle, Square } from 'lucide-react';

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

interface StudentAnswer {
  questionId: string;
  selectedOptionIds: string[];
}

interface QuizTakerProps {
  quizId: string;
}

export default function QuizTaker({ quizId }: QuizTakerProps) {
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Student flow states
  const [studentName, setStudentName] = useState('');
  const [isStarted, setIsStarted] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOptionIds, setSelectedOptionIds] = useState<string[]>([]);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [accumulatedAnswers, setAccumulatedAnswers] = useState<StudentAnswer[]>([]);
  
  // Submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [finalScore, setFinalScore] = useState<number | null>(null);

  useEffect(() => {
    fetch(`/api/quizzes/${quizId}`)
      .then(res => {
        if (!res.ok) throw new Error('找不到該測驗，請確認連結是否正確。');
        return res.json();
      })
      .then(data => {
        setQuiz(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [quizId]);

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim()) {
      setError('請輸入您的姓名以開始測驗。');
      return;
    }
    setError(null);
    setIsStarted(true);
  };

  const toggleOption = (optionId: string) => {
    if (isAnswerChecked) return; // Locked once checked
    
    if (!quiz) return;
    const currentQuestion = quiz.questions[currentIdx];

    if (currentQuestion.type === 'single') {
      setSelectedOptionIds([optionId]);
    } else {
      if (selectedOptionIds.includes(optionId)) {
        setSelectedOptionIds(selectedOptionIds.filter(id => id !== optionId));
      } else {
        setSelectedOptionIds([...selectedOptionIds, optionId]);
      }
    }
  };

  const handleCheckAnswer = () => {
    if (selectedOptionIds.length === 0) {
      alert('請先選擇答案。');
      return;
    }
    setIsAnswerChecked(true);
  };

  const handleNext = () => {
    if (!quiz) return;
    
    const newAnswer: StudentAnswer = {
      questionId: quiz.questions[currentIdx].id,
      selectedOptionIds
    };
    
    const updatedAnswers = [...accumulatedAnswers, newAnswer];
    setAccumulatedAnswers(updatedAnswers);

    if (currentIdx < quiz.questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOptionIds([]);
      setIsAnswerChecked(false);
    } else {
      // Last question completed, now auto-submit answers to calculate final score
      submitQuiz(updatedAnswers);
    }
  };

  const submitQuiz = async (answers: StudentAnswer[]) => {
    setIsSubmitting(true);
    try {
      const res = await fetch(`/api/quizzes/${quizId}/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentName,
          answers
        })
      });

      if (!res.ok) throw new Error('送出答案失敗，請重新嘗試。');
      const data = await res.json();
      setFinalScore(data.score);
      setIsSubmitted(true);
    } catch (err: any) {
      alert(err.message || '連線錯誤');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="student-layout text-center">
        <div className="glass-panel student-card">
          <p style={{ color: 'var(--text-secondary)' }}>載入測驗中，請稍候...</p>
        </div>
      </div>
    );
  }

  if (error || !quiz) {
    return (
      <div className="student-layout text-center">
        <div className="glass-panel student-card" style={{ borderColor: 'var(--error-color)' }}>
          <h2 style={{ color: '#f87171', marginBottom: '1rem' }}>載入失敗</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{error || '無效的測驗連結'}</p>
          <button className="btn btn-secondary" onClick={() => window.location.reload()}>重新載入</button>
        </div>
      </div>
    );
  }

  // 1. Welcome Screen / Name Input
  if (!isStarted) {
    return (
      <div className="student-layout">
        <div className="glass-panel student-card">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.8rem', background: 'rgba(99,102,241,0.15)', color: '#a5b4fc', padding: '0.3rem 0.8rem', borderRadius: '20px', border: '1px solid rgba(99,102,241,0.2)' }}>
              ONLINE QUIZ
            </span>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 700, marginTop: '1rem', color: 'var(--text-primary)' }}>
              {quiz.title}
            </h1>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '0.75rem' }}>
              {quiz.description || '歡迎參加本次測驗，請在下方輸入姓名後開始。'}
            </p>
          </div>

          <form onSubmit={handleStart}>
            <div className="form-group" style={{ marginBottom: '2rem' }}>
              <label className="form-label">
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <User size={14} /> 學員姓名 *
                </span>
              </label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="請輸入您的真實姓名" 
                value={studentName}
                onChange={e => setStudentName(e.target.value)}
                autoFocus
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.9rem' }}>
              <Play size={18} fill="currentColor" />
              開始測驗
            </button>
          </form>
        </div>
      </div>
    );
  }

  // 3. Quiz Complete / Score Screen
  if (isSubmitted) {
    return (
      <div className="student-layout text-center">
        <div className="glass-panel student-card">
          <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1rem', borderRadius: '50%', display: 'inline-flex', marginBottom: '1.5rem', color: 'var(--success-color)' }}>
            <Award size={48} />
          </div>
          
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>測驗完成！</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            做得好，{studentName}！您的測驗答案已成功上傳給講師。
          </p>

          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '2rem', marginBottom: '2rem', display: 'inline-block', minWidth: '200px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              最終得分
            </span>
            <span style={{ fontSize: '3.5rem', fontWeight: 800, color: finalScore && finalScore >= 60 ? 'var(--success-color)' : '#f87171' }}>
              {finalScore} <span style={{ fontSize: '1.25rem', fontWeight: 500 }}>分</span>
            </span>
          </div>

          <div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              您可以直接關閉此網頁。
            </p>
          </div>
        </div>
      </div>
    );
  }

  // 2. Quiz Active Screen
  const currentQuestion = quiz.questions[currentIdx];
  const progressPercent = ((currentIdx) / quiz.questions.length) * 100;
  
  // Calculate if student current selection matches correct answer (for instant feedback display)
  const correctOptionIds = currentQuestion.options.filter(o => o.isCorrect).map(o => o.id);
  const isCurrentlyCorrect = 
    selectedOptionIds.length === correctOptionIds.length &&
    selectedOptionIds.every(id => correctOptionIds.includes(id));

  return (
    <div className="student-layout">
      <div className="glass-panel student-card">
        {/* Progress header */}
        <div className="d-flex justify-between align-center" style={{ marginBottom: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          <span>題目 {currentIdx + 1} / {quiz.questions.length}</span>
          <span>已完成 {Math.round(progressPercent)}%</span>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progressPercent}%` }}></div>
        </div>

        {/* Question Text */}
        <div className="taker-type-badge">
          {currentQuestion.type === 'single' ? '單選題' : '複選題'}
        </div>
        <h2 className="taker-question-text">{currentQuestion.text}</h2>

        {/* Options grid */}
        <div className="taker-options">
          {currentQuestion.options.map(opt => {
            const isSelected = selectedOptionIds.includes(opt.id);
            
            // Build option state classes
            let btnClass = 'taker-option-btn';
            if (isSelected) btnClass += ' selected';
            if (isAnswerChecked) {
              btnClass += ' locked';
              if (opt.isCorrect) {
                btnClass += ' feedback-correct';
              } else if (isSelected && !opt.isCorrect) {
                btnClass += ' feedback-incorrect';
              }
            }

            return (
              <button 
                key={opt.id} 
                className={btnClass}
                onClick={() => toggleOption(opt.id)}
                disabled={isAnswerChecked}
                type="button"
              >
                <div className="option-main">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ display: 'flex', color: isSelected ? 'var(--accent-color)' : 'var(--text-secondary)' }}>
                      {currentQuestion.type === 'single' ? (
                        <Circle size={16} fill={isSelected ? 'currentColor' : 'none'} />
                      ) : (
                        <Square size={16} fill={isSelected ? 'currentColor' : 'none'} />
                      )}
                    </div>
                    <span className="option-text">{opt.text}</span>
                  </div>

                  {/* Feedback icons */}
                  {isAnswerChecked && (
                    <span className="option-feedback-icon">
                      {opt.isCorrect ? (
                        <Check size={18} color="var(--success-color)" strokeWidth={3} />
                      ) : isSelected ? (
                        <XCircle size={18} color="var(--error-color)" />
                      ) : null}
                    </span>
                  )}
                </div>

                {/* Instant Feedback Annotations */}
                {isAnswerChecked && opt.explanation && (
                  <div className="explanation-box">
                    <strong>說明：</strong> {opt.explanation}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Submitting response or moving to next */}
        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          <div>
            {isAnswerChecked && (
              <span style={{ 
                fontSize: '0.9rem', 
                fontWeight: 600, 
                color: isCurrentlyCorrect ? 'var(--success-color)' : 'var(--error-color)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem'
              }}>
                {isCurrentlyCorrect ? '✓ 答對了！' : '✗ 答錯了，請看選項解析。'}
              </span>
            )}
          </div>

          {!isAnswerChecked ? (
            <button 
              className="btn btn-primary" 
              onClick={handleCheckAnswer}
              disabled={selectedOptionIds.length === 0}
            >
              送出答案
            </button>
          ) : (
            <button 
              className="btn btn-primary" 
              onClick={handleNext}
              disabled={isSubmitting}
            >
              {isSubmitting ? '提交中...' : currentIdx < quiz.questions.length - 1 ? '下一題' : '完成並交卷'}
              <ArrowRight size={16} />
            </button>
          )}

        </div>
      </div>
    </div>
  );
}
