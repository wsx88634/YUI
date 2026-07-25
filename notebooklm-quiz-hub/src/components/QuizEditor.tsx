import React, { useState } from 'react';
import { Plus, Trash2, ArrowLeft, Save } from 'lucide-react';

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
  id?: string;
  title: string;
  description: string;
  questions: Question[];
}

interface QuizEditorProps {
  quiz: Quiz | null;
  onSave: () => void;
  onCancel: () => void;
}

export default function QuizEditor({ quiz, onSave, onCancel }: QuizEditorProps) {
  const [title, setTitle] = useState(quiz ? quiz.title : '');
  const [description, setDescription] = useState(quiz ? quiz.description : '');
  const [questions, setQuestions] = useState<Question[]>(
    quiz
      ? quiz.questions
      : [
          {
            id: 'q-' + Date.now(),
            text: '',
            type: 'single',
            options: [
              { id: 'o-1-' + Date.now(), text: '', isCorrect: false, explanation: '' },
              { id: 'o-2-' + Date.now(), text: '', isCorrect: false, explanation: '' }
            ]
          }
        ]
  );
  const [error, setError] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        id: 'q-' + Date.now(),
        text: '',
        type: 'single',
        options: [
          { id: 'o-1-' + Date.now(), text: '', isCorrect: false, explanation: '' },
          { id: 'o-2-' + Date.now(), text: '', isCorrect: false, explanation: '' }
        ]
      }
    ]);
  };

  const removeQuestion = (qId: string) => {
    if (questions.length <= 1) {
      setError('測驗必須包含至少一個問題。');
      return;
    }
    setQuestions(questions.filter(q => q.id !== qId));
    setError('');
  };

  const updateQuestionText = (qId: string, text: string) => {
    setQuestions(
      questions.map(q => (q.id === qId ? { ...q, text } : q))
    );
  };

  const updateQuestionType = (qId: string, type: 'single' | 'multiple') => {
    setQuestions(
      questions.map(q => {
        if (q.id !== qId) return q;
        
        // If switching to single-select, make sure at most one option is correct
        let options = [...q.options];
        if (type === 'single') {
          let foundCorrect = false;
          options = options.map(o => {
            if (o.isCorrect && !foundCorrect) {
              foundCorrect = true;
              return o;
            }
            return { ...o, isCorrect: false };
          });
        }
        return { ...q, type, options };
      })
    );
  };

  const addOption = (qId: string) => {
    setQuestions(
      questions.map(q => {
        if (q.id !== qId) return q;
        return {
          ...q,
          options: [
            ...q.options,
            { id: 'o-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4), text: '', isCorrect: false, explanation: '' }
          ]
        };
      })
    );
  };

  const removeOption = (qId: string, oId: string) => {
    setQuestions(
      questions.map(q => {
        if (q.id !== qId) return q;
        if (q.options.length <= 2) {
          setError('每個題目必須包含至少兩個選項。');
          return q;
        }
        setError('');
        return {
          ...q,
          options: q.options.filter(o => o.id !== oId)
        };
      })
    );
  };

  const updateOptionText = (qId: string, oId: string, text: string) => {
    setQuestions(
      questions.map(q => {
        if (q.id !== qId) return q;
        return {
          ...q,
          options: q.options.map(o => (o.id === oId ? { ...o, text } : o))
        };
      })
    );
  };

  const updateOptionCorrect = (qId: string, oId: string, isCorrect: boolean) => {
    setQuestions(
      questions.map(q => {
        if (q.id !== qId) return q;
        
        const options = q.options.map(o => {
          if (q.type === 'single') {
            // For single select, check target, uncheck others
            return { ...o, isCorrect: o.id === oId ? isCorrect : false };
          } else {
            // For multiple select, toggle target
            return o.id === oId ? { ...o, isCorrect } : o;
          }
        });
        return { ...q, options };
      })
    );
  };

  const updateOptionExplanation = (qId: string, oId: string, explanation: string) => {
    setQuestions(
      questions.map(q => {
        if (q.id !== qId) return q;
        return {
          ...q,
          options: q.options.map(o => (o.id === oId ? { ...o, explanation } : o))
        };
      })
    );
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validations
    if (!title.trim()) {
      setError('請輸入測驗標題。');
      return;
    }

    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      if (!q.text.trim()) {
        setError(`第 ${i + 1} 題問題內容不能為空。`);
        return;
      }
      if (q.options.some(o => !o.text.trim())) {
        setError(`第 ${i + 1} 題存在空白的選項，請填寫或刪除。`);
        return;
      }
      if (!q.options.some(o => o.isCorrect)) {
        setError(`第 ${i + 1} 題必須設定至少一個正確答案。`);
        return;
      }
    }

    setError('');
    setIsSaving(true);

    try {
      const payload = { title, description, questions };
      const url = quiz ? `/api/quizzes/${quiz.id}` : '/api/quizzes';
      const method = quiz ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || '儲存測驗失敗');
      }

      onSave();
    } catch (err: any) {
      setError(err.message || '儲存測驗時發生錯誤');
      setIsSaving(false);
    }
  };

  return (
    <form className="editor-container" onSubmit={handleSave}>
      <div className="editor-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button type="button" className="btn btn-secondary btn-icon-only" onClick={onCancel}>
            <ArrowLeft size={18} />
          </button>
          <h2 className="editor-title">{quiz ? '重新編輯測驗' : '建立全新測驗'}</h2>
        </div>
        <button type="submit" className="btn btn-primary" disabled={isSaving}>
          <Save size={18} />
          {isSaving ? '儲存中...' : '儲存測驗'}
        </button>
      </div>

      {error && (
        <div className="glass-panel" style={{ background: 'var(--error-bg)', borderColor: 'var(--error-border)', padding: '1rem', color: '#f87171', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
          {error}
        </div>
      )}

      {/* Quiz Details Panel */}
      <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>測驗基本資訊</h3>
        
        <div className="form-group">
          <label className="form-label">測驗標題 *</label>
          <input 
            type="text" 
            className="form-input" 
            placeholder="例如：JavaScript 基礎與核心概念測驗"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="form-label">測驗描述</label>
          <textarea 
            className="form-textarea" 
            placeholder="對該測驗進行簡單的描述，幫助學員了解背景..."
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
      </div>

      {/* Questions Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '2.5rem 0 1rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>題目設計區</h3>
        <button type="button" className="btn btn-secondary" onClick={addQuestion}>
          <Plus size={16} />
          新增題目
        </button>
      </div>

      <div className="questions-list">
        {questions.map((q, idx) => (
          <div key={q.id} className="question-block glass-panel">
            <div className="question-block-header">
              <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--accent-color)', marginRight: '0.75rem' }}>
                第 {idx + 1} 題
              </span>
              <input
                type="text"
                className="form-input question-title-input"
                placeholder="請輸入題目內容..."
                value={q.text}
                onChange={e => updateQuestionText(q.id, e.target.value)}
              />

              <div className="question-meta">
                <div style={{ display: 'flex', background: 'rgba(15, 23, 42, 0.6)', borderRadius: '6px', border: '1px solid var(--border-color)', overflow: 'hidden' }}>
                  <button
                    type="button"
                    onClick={() => updateQuestionType(q.id, 'single')}
                    style={{
                      border: 'none',
                      background: q.type === 'single' ? 'var(--accent-color)' : 'transparent',
                      color: 'white',
                      padding: '0.4rem 0.8rem',
                      cursor: 'pointer',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      transition: 'var(--transition)'
                    }}
                  >
                    單選
                  </button>
                  <button
                    type="button"
                    onClick={() => updateQuestionType(q.id, 'multiple')}
                    style={{
                      border: 'none',
                      background: q.type === 'multiple' ? 'var(--accent-color)' : 'transparent',
                      color: 'white',
                      padding: '0.4rem 0.8rem',
                      cursor: 'pointer',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      transition: 'var(--transition)'
                    }}
                  >
                    複選
                  </button>
                </div>

                <button
                  type="button"
                  className="btn btn-danger btn-icon-only"
                  onClick={() => removeQuestion(q.id)}
                  title="刪除此題目"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            <div className="options-editor">
              <div style={{ display: 'grid', gridTemplateColumns: '40px 1.5fr 2.5fr 40px', gap: '1rem', padding: '0.25rem 0.75rem', fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                <span style={{ textAlign: 'center' }}>正確</span>
                <span>選項內容</span>
                <span>選中時的回饋解析（註解）</span>
                <span></span>
              </div>

              {q.options.map((opt, oidx) => (
                <div key={opt.id} className="option-row">
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <input
                      type={q.type === 'single' ? 'radio' : 'checkbox'}
                      name={`correct-${q.id}`}
                      className={q.type === 'single' ? 'custom-radio' : 'custom-checkbox'}
                      checked={opt.isCorrect}
                      onChange={e => updateOptionCorrect(q.id, opt.id, e.target.checked)}
                      title="設定為正確答案"
                    />
                  </div>
                  <input
                    type="text"
                    className="form-input"
                    placeholder={`選項 ${oidx + 1}...`}
                    value={opt.text}
                    onChange={e => updateOptionText(q.id, opt.id, e.target.value)}
                  />
                  <input
                    type="text"
                    className="form-input"
                    placeholder="說明該選項為何對/錯（答題後即時顯示）"
                    value={opt.explanation}
                    onChange={e => updateOptionExplanation(q.id, opt.id, e.target.value)}
                  />
                  <button
                    type="button"
                    className="btn btn-danger btn-icon-only"
                    onClick={() => removeOption(q.id, opt.id)}
                    title="刪除此選項"
                    style={{ padding: '0.4rem' }}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}

              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => addOption(q.id)}
                style={{ alignSelf: 'flex-start', marginTop: '0.5rem', padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
              >
                <Plus size={14} />
                新增選項
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '2rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
        <button type="button" className="btn btn-secondary" onClick={onCancel}>取消</button>
        <button type="submit" className="btn btn-primary" disabled={isSaving}>
          <Save size={18} />
          {isSaving ? '儲存中...' : '儲存測驗'}
        </button>
      </div>
    </form>
  );
}
