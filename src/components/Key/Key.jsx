export const Key = () => {
  return (
    <section className="key">
      <div className="container">
        <div className="key__row">
          <div className="key__row-img">
            <img src="/img/key.png" alt="key" />
          </div>
          <div className="key__row-impotant">
            <div className="key__row-title">Доверьте нам свои любимые вещи</div>
            <div className="key__row-text">
              Gutallini - ваш надежный партнер по уходу за обувью и сумками
            </div>
            <div className="key__row-offers">
              <div className="key__row-title">Наши услуги</div>
              <ul className="key__row-list">
                <ul className="key__row-items">
                  <h4 className="key__row-items--title">Чистка и обновление</h4>
                  <li className="key__row-item">Замша</li>
                  <li className="key__row-item">Кожа</li>
                  <li className="key__row-item">Текстиль</li>
                  <li className="key__row-item">Нубук</li>
                </ul>
                <ul className="key__row-items">
                  <h4 className="key__row-items--title">Реставрация</h4>
                  <li className="key__row-item">
                    Устранение потертостей и царапин
                  </li>
                  <li className="key__row-item">Восстановление цвета</li>
                  <li className="key__row-item">Перекрашивание</li>
                  <li className="key__row-item">Ремонт повреждений</li>
                </ul>
                <ul className="key__row-items">
                  <h4 className="key__row-items--title">Дополнительные услуги</h4>
                  <li className="key__row-item">Выведение реагентов</li>
                  <li className="key__row-item">Покраска подошвы</li>
                  <li className="key__row-item">Восстановление сумок</li>
                  <li className="key__row-item">Патинирование</li>
                </ul>
              </ul>
            </div>
          </div>          
        </div>
      </div>
    </section>
  );
};
