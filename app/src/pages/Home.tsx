import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="screen active" id="home-screen">
        <div className="content">
            <div className="shield-icon">
                <div className="concentric-circles">
                    <div className="circle circle-1"></div>
                    <div className="circle circle-2"></div>
                    <div className="circle circle-3"></div>
                </div>
                <div className="shield">
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <ellipse cx="12" cy="16" rx="3" ry="4"/>
                        {/* Голова */}
                        <circle cx="12" cy="8" r="2.5"/>
                        {/* Клюв */}
                        <path d="M12 6l1-2"/>
                        {/* Левое крыло */}
                        <path d="M9 10C7 8 4 7 2 9c-1 2 0 4 2 5"/>
                        <path d="M7 12c-1-1-2-2-1-3"/>
                        {/* Правое крыло */}
                        <path d="M15 10c2-2 5-3 7-1 1 2 0 4-2 5"/>
                        <path d="M17 12c1-1 2-2 1-3"/>
                        {/* Хвост */}
                        <path d="M9 18c-2 2-4 4-3 6 1 1 3 0 5-2"/>
                        <path d="M12 20c0 2 2 3 4 2"/>
                        <path d="M15 18c2 2 4 4 3 6-1 1-3 0-5-2"/>
                        {/* Пламя на хвосте */}
                        <path d="M6 20c-1-1-2-3-1-4" strokeWidth="1.2"/>
                        <path d="M18 20c1-1 2-3 1-4" strokeWidth="1.2"/>
                        {/* Глаз */}
                        <circle cx="12" cy="8" r="0.8" fill="currentColor"/>
                    </svg>
                </div>
            </div>

            <div className="status-section">
                <div className="status-left">
                    <div className="vpn-name">ultima</div>
                    <div className="vpn-status">offline</div>
                </div>
                <div className="status-right">
                    <div className="subscription-date">до 18 января 2025</div>
                    <div className="subscription-status expired">подписка истекла</div>
                </div>
            </div>

            <div className="action-buttons">
                <button className="btn-primary" onClick={() => navigate('/buy')}>
                    <span className="btn-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                        </svg>
                    </span>
                    <span>Купить подписку</span>
                    <span className="btn-price">от 150 р</span>
                </button>
                <button className="btn-secondary" onClick={() => navigate('/settings')}>
                    <span className="btn-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="3"/>
                            <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24"/>
                        </svg>
                    </span>
                    <span>Установка и настройка</span>
                    <span className="btn-platform">Android</span>
                </button>
            </div>

            <div className="bottom-nav">
                <button className="nav-btn" onClick={() => navigate('/account')}>
                    <span className="nav-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                            <circle cx="12" cy="7" r="4"/>
                        </svg>
                    </span>
                    <span>Профиль</span>
                </button>
                <button className="nav-btn" onClick={() => navigate('/support')}>
                    <span className="nav-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                        </svg>
                    </span>
                    <span>Поддержка</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home

