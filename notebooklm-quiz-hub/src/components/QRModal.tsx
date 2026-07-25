import { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import { X, Copy, Check, QrCode } from 'lucide-react';

interface QRModalProps {
  isOpen: boolean;
  onClose: () => void;
  quizId: string;
  quizTitle: string;
}

export default function QRModal({ isOpen, onClose, quizId, quizTitle }: QRModalProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [copied, setCopied] = useState(false);
  const [quizUrl, setQuizUrl] = useState('');

  useEffect(() => {
    if (!isOpen) return;

    fetch('/api/ip')
      .then(res => res.json())
      .then(data => {
        // Build URL using server LAN IP so student devices can connect
        const url = `${window.location.protocol}//${data.ip}:${data.port}/?quizId=${quizId}`;
        setQuizUrl(url);
        
        if (canvasRef.current) {
          QRCode.toCanvas(
            canvasRef.current,
            url,
            {
              width: 220,
              margin: 1.5,
              color: {
                dark: '#0f172a', // Deep slate to contrast white
                light: '#ffffff'
              }
            },
            (error) => {
              if (error) console.error('QR code generation failed:', error);
            }
          );
        }
      })
      .catch(err => {
        console.error('Failed to fetch server IP, falling back to window.location.origin:', err);
        const url = `${window.location.origin}/?quizId=${quizId}`;
        setQuizUrl(url);
        
        if (canvasRef.current) {
          QRCode.toCanvas(canvasRef.current, url, { width: 220, margin: 1.5 }, (error) => {
            if (error) console.error(error);
          });
        }
      });
  }, [isOpen, quizId]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(quizUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-panel" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '0.75rem', borderRadius: '50%', marginBottom: '1rem', color: 'var(--accent-color)' }}>
            <QrCode size={28} />
          </div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>發布測驗</h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', maxWidth: '280px', margin: '0 auto 1rem' }}>
            請學員使用手機掃描下方二維碼，或複製連結分享給學員進行測驗。
          </p>
          
          <h3 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 500, background: 'rgba(255, 255, 255, 0.04)', padding: '0.4rem 0.8rem', borderRadius: '4px', maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {quizTitle}
          </h3>

          <div className="qr-code-canvas-container">
            <canvas ref={canvasRef} style={{ display: 'block' }}></canvas>
          </div>

          <div className="qr-link-copy" style={{ width: '100%' }}>
            <span className="qr-link-text">{quizUrl}</span>
            <button className="btn btn-secondary btn-icon-only" onClick={copyToClipboard} title="複製連結">
              {copied ? <Check size={16} color="var(--success-color)" /> : <Copy size={16} />}
            </button>
          </div>
          {copied && <span style={{ fontSize: '0.75rem', color: 'var(--success-color)', marginTop: '0.5rem', display: 'block' }}>連結已複製到剪貼簿！</span>}
        </div>
      </div>
    </div>
  );
}
