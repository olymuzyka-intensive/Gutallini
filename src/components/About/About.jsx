export const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__row">
          <h2 className="about__row-title">О нас</h2>
          <div className="about__row-content">
            <p className="about__row-text">
              <div className="about__row-text--title">Премиальный сервис</div>
              <strong>Gutallini</strong> — первый в Гомеле премиальный сервис
              ручной чистки и реставрации обуви и изделий из кожи.
            </p>

            <p className="about__row-text">
              <div className="about__row-text--title">Опыт и мастерство</div>
              Мастерская входит в десятку лучших в категории обувного сервиса.
              Наши сотрудники совершенствуют свои знания и умения в
              сертифицированном центре обучения
            </p>

            <p className="about__row-text">
              <div className="about__row-text--title">Деликатный подход</div>
              Мы работаем деликатно, поэтому наши клиенты доверяют нам
              аксессуары, обувь и сумки известных мировых брендов.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
