import { Key } from "../Key/Key";

export const About = () => {
  return (
    <section className="about" id="about">
    <Key/>
      <div className="container">
        <div className="about__row">
          <h2 className="about__row-title">Почему мы?</h2>
          <div className="about__row-content">
            <div className="about__row-text">
              <div className="about__row-text--title">Премиальный сервис</div>
              <strong>Gutallini</strong> — первый в Гомеле премиальный сервис
              ручной чистки и реставрации обуви и изделий из кожи.
            </div>

            <div className="about__row-text">
              <div className="about__row-text--title">Мастерство</div>
              Мастерская входит в десятку лучших в категории обувного сервиса.
              Наши сотрудники совершенствуют свои знания и умения в
              сертифицированном центре обучения
            </div>

            <div className="about__row-text">
              <div className="about__row-text--title">Деликатность</div>
              Мы работаем деликатно, поэтому наши клиенты доверяют нам
              аксессуары, обувь и сумки известных мировых брендов.
            </div>
          </div>
        </div>
      </div>
      

    </section>
  );
};
