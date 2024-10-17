import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__row">
          <div className="footer__row-logo">
            <Link to="/">
              <img src="/img/logo-footer.png" alt="logo" />
            </Link>
          </div>
          {/* <nav>
            <ul className="footer__nav">
              <li className="footer__nav-item">
                <Link to="/#about">О нас</Link>
              </li>
              <li className="footer__nav-item">
                <Link to="/#contacts">Контакты</Link>
              </li>
              <li className="footer__nav-item">
                <Link to="/#services">Услуги</Link>
              </li>
            </ul>
          </nav> */}
          <div className="footer__row-details">
            <Link to="/">
              <h4 className="footer__row-title">Gutallini</h4>
            </Link>
            <p className="footer__row-text">hello@gutallini.ru</p>
            <p className="footer__row-text">Беларусь, г. Гомель</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
