import { useEffect, useState } from 'react';
import { ArrowLeft, User, Calendar, Award, CheckCircle, XCircle } from 'lucide-react';

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
  isCorrect: boolean;
}

interface Submission {
  id: string;
  quizId: string;
  studentName: string;
  score: number;
  submittedAt: string;
  answers: StudentAnswer[];
}

interface QuizResultsViewProps {
  quiz: Quiz;
  onBack: () => void;
}

export default function QuizResultsView({ quiz, onBack }: QuizResultsViewProps) {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSub, setSelectedSub] = useState<Submission | null>(null);

  useEffect(() => {
    fetch(`/api/quizzes/${quiz.id}/results`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to load results');
        return res.json();
      })
      .then(data => {
        setSubmissions(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [quiz.id]);

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleString('zh-TW', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getScoreClass = (score: number) => {
    if (score >= 80) return 'score-badge high';
    if (score >= 60) return 'score-badge medium';
    return 'score-badge low';
  };

  return (
    <div className="results-container">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <button className="btn btn-secondary btn-icon-only" onClick={onBack} title="返回儀表板">
          <ArrowLeft size={18} />
        </button>
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>測驗結果分析</h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{quiz.title}</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: selectedSub ? '1fr 1.2fr' : '1fr', gap: '2rem', alignItems: 'start' }}>
        
        {/* Submissions List */}
        <div className="glass-panel" style={{ padding: '1.5rem', overflow: 'hidden' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Award size={18} color="var(--accent-color)" />
            學員繳交清單 ({submissions.length})
          </h3>

          {loading ? (
            <p className="text-center" style={{ color: 'var(--text-secondary)', padding: '2rem' }}>載入作答資料中...</p>
          ) : submissions.length === 0 ? (
            <p className="text-center" style={{ color: 'var(--text-secondary)', padding: '2rem' }}>目前尚無學員提交此測驗。</p>
          ) : (
            <div className="results-table-container">
              <table className="results-table">
                <thead>
                  <tr>
                    <th>學員姓名</th>
                    <th>分數</th>
                    <th>完成時間</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map(sub => (
                    <tr 
                      key={sub.id} 
                      onClick={() => setSelectedSub(sub)}
                      style={{ 
                        background: selectedSub?.id === sub.id ? 'rgba(99, 102, 241, 0.08)' : '',
                        borderLeft: selectedSub?.id === sub.id ? '3px solid var(--accent-color)' : '3px solid transparent'
                      }}
                    >
                      <td style={{ fontWeight: 500 }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <User size={14} color="var(--text-secondary)" />
                          {sub.studentName}
                        </span>
                      </td>
                      <td>
                        <span className={getScoreClass(sub.score)}>{sub.score} 分</span>
                      </td>
                      <td style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        {formatDate(sub.submittedAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Selected Submission Detailed View */}
        {selectedSub && (
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <div className="d-flex justify-between align-center" style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <User size={20} color="var(--accent-color)" />
                  {selectedSub.studentName} 的答題狀況
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Calendar size={12} />
                  交卷時間：{formatDate(selectedSub.submittedAt)}
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span className={getScoreClass(selectedSub.score)} style={{ fontSize: '1.25rem', padding: '0.4rem 1rem', borderRadius: '20px' }}>
                  {selectedSub.score} 分
                </span>
              </div>
            </div>

            <div className="student-detail-sheet">
              {quiz.questions.map((q, qidx) => {
                const studentAns = selectedSub.answers.find(a => a.questionId === q.id);
                const selectedOptionIds = studentAns ? studentAns.selectedOptionIds : [];
                const isCorrect = studentAns ? studentAns.isCorrect : false;

                return (
                  <div key={q.id} className="detail-question-item">
                    <div className="d-flex justify-between align-center" style={{ marginBottom: '0.75rem' }}>
                      <div className="detail-question-text">
                        {qidx + 1}. {q.text}
                      </div>
                      <div>
                        {isCorrect ? (
                          <span style={{ color: 'var(--success-color)', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.85rem', fontWeight: 600 }}>
                            <CheckCircle size={16} /> 答對
                          </span>
                        ) : (
                          <span style={{ color: 'var(--error-color)', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.85rem', fontWeight: 600 }}>
                            <XCircle size={16} /> 答錯
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="detail-options-list">
                      {q.options.map(opt => {
                        const isSelected = selectedOptionIds.includes(opt.id);
                        
                        let itemClass = 'detail-option-item normal';
                        let icon = null;

                        if (opt.isCorrect && isSelected) {
                          itemClass = 'detail-option-item correct-chosen';
                          icon = <CheckCircle size={14} color="var(--success-color)" />;
                        } else if (!opt.isCorrect && isSelected) {
                          itemClass = 'detail-option-item incorrect-chosen';
                          icon = <XCircle size={14} color="var(--error-color)" />;
                        } else if (opt.isCorrect && !isSelected) {
                          itemClass = 'detail-option-item correct-not-chosen';
                          icon = <CheckCircle size={14} color="var(--success-color)" style={{ opacity: 0.7 }} />;
                        }

                        return (
                          <div key={opt.id} className={itemClass}>
                            <div>
                              <span style={{ marginRight: '0.5rem', opacity: isSelected ? 1 : 0.5, fontWeight: isSelected ? 'bold' : 'normal' }}>
                                [{isSelected ? '✓' : ' '}]
                              </span>
                              <span>{opt.text}</span>
                            </div>
                            {icon}
                          </div>
                        );
                      })}
                    </div>

                    <div style={{ marginTop: '0.75rem', fontSize: '0.8rem', background: 'rgba(255,255,255,0.02)', padding: '0.6rem 0.8rem', borderRadius: '4px', borderLeft: '3px solid rgba(255,255,255,0.1)' }}>
                      <strong style={{ display: 'block', marginBottom: '0.2rem', color: 'var(--text-secondary)' }}>題目解析：</strong>
                      {q.options.map(opt => (
                        <div key={opt.id} style={{ marginBottom: '0.25rem', opacity: opt.explanation ? 1 : 0.5 }}>
                          <span style={{ color: opt.isCorrect ? 'var(--success-color)' : 'var(--error-color)', fontWeight: 500 }}>
                            選項 ({opt.text.substring(0, 15)}{opt.text.length > 15 ? '...' : ''})：
                          </span>
                          <span style={{ color: 'var(--text-secondary)' }}>
                            {opt.explanation || '無說明'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
