import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { backButton, useLaunchParams } from '@telegram-apps/sdk-react';

function Account() {
  const navigate = useNavigate()
  const { tgWebAppData } = useLaunchParams(true);
  const user = tgWebAppData?.user;


  const fullName = [user?.firstName, user?.lastName].filter(Boolean).join(' ');

  const displayName =
  fullName ||
  (user?.username ? `@${user.username}` : 'Неизвестный пользователь');

  const userId = user?.id;


  const handleCopyLink = () => {
    const link = 'https://'
    navigator.clipboard.writeText(link).then(() => {
      alert('Ссылка скопирована в буфер обмена')
    })
  }

  useEffect(() => {
    if (!backButton.isSupported()) return;

    backButton.show();

    const offClick = backButton.onClick(() => {
      navigate(-1);
    });

    return () => {
      backButton.hide();
      offClick();
    };
  }, [navigate]);

  return (
    <div className="screen" id="profile-screen">
      <div className="content">
        <div className="user-info">
          <div className="user-name">{displayName}</div>
          <div className="user-id">
            <span>id: {userId}</span>
            <button className="copy-btn" onClick={handleCopyLink}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="menu-list">
          <div className="menu-item" onClick={() => navigate('/buy')}>
            <span className="menu-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                <line x1="1" y1="10" x2="23" y2="10"/>
              </svg>
            </span>
            <span>Оплата</span>
          </div>
          <div className="menu-item">
            <span className="menu-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"/>
                <line x1="12" y1="20" x2="12" y2="4"/>
                <line x1="6" y1="20" x2="6" y2="14"/>
              </svg>
            </span>
            <span>Мои транзакции</span>
          </div>
          <div className="menu-item" onClick={() => navigate('/support')}>
            <span className="menu-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </span>
            <span>Связаться с поддержкой</span>
          </div>
          <div className="menu-item">
            <span className="menu-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
            </span>
            <span>Пользовательское соглашение</span>
          </div>
        </div>

        <div className="subscription-link-section">
          <div className="link-title">Ссылка на подписку для ручного ввода:</div>
          <div className="link-box">
            <span className="link-url">https://</span>
            <button className="copy-btn" onClick={handleCopyLink}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="instruction-btn">
          <span className="instruction-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
          </span>
          <span>Инструкция для всех платформ</span>
        </div>
      </div>
    </div>
  )
}

export default Account

