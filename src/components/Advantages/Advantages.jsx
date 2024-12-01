export const Advantages = () => {
  return (
    <section className="advantages">
      <div className="container">
        <h2 className="advantages__title">Преимущества Gutallini</h2>
        <div className="advantages__row">
          <div className="advantages__row-img">
            <img src="/img/advantages.jpg" alt="img" />
          </div>
          <ol className="advantages__row-content">
            <li className="advantages__row-text">
              <div className="advantages__row-text--title">Качество</div>
              Мы используем только высококачественные материалы и инструменты.
            </li>

            <li className="advantages__row-text">
              <div className="advantages__row-text--title">Опыт</div>
              Наши мастера имеют богатый опыт работы с различными видами кожи и
              материалов.
            </li>

            <li className="advantages__row-text">
              <div className="advantages__row-text--title">
                Индивидуальный подход
              </div>
              Мы предлагаем индивидуальный подход к каждому клиенту и его
              изделию.
            </li>

            <li className="advantages__row-text">
              <div className="advantages__row-text--title">Удобство</div>
              Мы предлагаем бесплатную доставку и забор изделий.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};
