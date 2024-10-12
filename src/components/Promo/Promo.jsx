import { Send } from '../Send/Send'

export const Promo = () => {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__row">
          <a href="tel:+375445090525">
            <img className="call" src="/img/icons/phone.svg" alt="customer" />
          </a>
          <div className="promo__row-main">
            <div className="logo">
              <img src="/img/logo.png" alt="logo" />
            </div>
            <h1 className="promo__row-title">
              Ручная чистка и реставрация обуви и сумок
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};
