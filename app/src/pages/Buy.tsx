import { useState, useEffect } from 'react'
import { backButton } from '@telegram-apps/sdk-react';

function Buy() {
  
  const [selectedPlan, setSelectedPlan] = useState({ months: 6, price: 720 })

  const plans = [
    { months: 1, price: 150, monthlyPrice: 150 },
    { months: 3, price: 390, monthlyPrice: 130 },
    { months: 6, price: 720, monthlyPrice: 120, popular: true },
    { months: 12, price: 1320, monthlyPrice: 110 },
  ]

  const handleSelectPlan = (months: number, price: number) => {
    setSelectedPlan({ months, price })
  }

  const handlePayment = () => {
    console.log(`Оплата за ${selectedPlan.months} месяцев: ${selectedPlan.price} ₽`)
    alert(`Оплата за ${selectedPlan.months} месяцев: ${selectedPlan.price} ₽`)
  }

  useEffect(() => {
    backButton.show();


    return () => {
      backButton.hide();
    };
  }, []);

  return (
    <div className="screen" id="purchase-screen">
      {/* Экран покупки подписки */}
      <div className="content">
        <div className="purchase-card">
          <h2 className="purchase-title">Покупка подписки</h2>
          <p className="purchase-subtitle">Выберите интересующий тариф</p>

          <div className="plans-list">
            {plans.map((plan) => (
              <div
                key={plan.months}
                className={`plan-box ${selectedPlan.months === plan.months ? 'active' : ''} ${plan.popular ? 'popular' : ''}`}
                onClick={() => handleSelectPlan(plan.months, plan.price)}
              >
                {plan.popular && <div className="plan-badge">ПОПУЛЯРНЫЙ</div>}
                <div className="plan-info">
                  <div className="plan-period">
                    {plan.months === 12 ? '1 год' : `${plan.months} ${plan.months === 1 ? 'месяц' : plan.months < 5 ? 'месяца' : 'месяцев'}`}
                  </div>
                  {plan.months === 1 ? (
                    <div className="plan-price">{plan.price} ₽</div>
                  ) : (
                    <div className="plan-price-wrapper">
                      <div className="plan-price">{plan.price} ₽</div>
                      <div className="plan-monthly">{plan.monthlyPrice}₽ в месяц</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button className="btn-pay" onClick={handlePayment}>
            Оплатить <span>{selectedPlan.price}</span> ₽
          </button>
        </div>
      </div>
    </div>
  )
}

export default Buy

