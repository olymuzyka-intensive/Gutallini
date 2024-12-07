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
          <nav className="footer__nav">
          <div className="footer__nav-item">
                <a href="#top">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_41_4)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16 6C16.5303 6.00047 17.0386 6.21149 17.4133 6.58667L24.08 13.2533C24.4333 13.6325 24.6256 14.1339 24.6165 14.6521C24.6073 15.1702 24.3974 15.6646 24.031 16.031C23.6646 16.3974 23.1702 16.6073 22.6521 16.6165C22.1339 16.6256 21.6325 16.4333 21.2533 16.08L16 10.8293L10.7467 16.0827C10.3693 16.4468 9.86399 16.6482 9.3396 16.6434C8.8152 16.6386 8.31367 16.428 7.94303 16.057C7.57239 15.686 7.36229 15.1843 7.35798 14.6599C7.35367 14.1355 7.5555 13.6304 7.92 13.2533L14.5867 6.58667C14.9614 6.21149 15.4697 6.00047 16 6ZM16 14C16.5303 14.0005 17.0386 14.2115 17.4133 14.5867L24.08 21.2533C24.4333 21.6325 24.6256 22.1339 24.6165 22.6521C24.6073 23.1702 24.3974 23.6646 24.031 24.031C23.6646 24.3974 23.1702 24.6073 22.6521 24.6165C22.1339 24.6256 21.6325 24.4333 21.2533 24.08L16 18.8293L10.7467 24.0827C10.3693 24.4468 9.86399 24.6482 9.3396 24.6434C8.8152 24.6386 8.31367 24.428 7.94303 24.057C7.57239 23.686 7.36229 23.1843 7.35798 22.6599C7.35367 22.1355 7.5555 21.6304 7.92 21.2533L14.5867 14.5867C14.9614 14.2115 15.4697 14.0005 16 14Z"
                        fill="#D99B3F"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_41_4">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
            </div>

            {/* <ul className="footer__nav">
              <li className="footer__nav-item">
                <Link to="/#about">О нас</Link>
              </li>
              <li className="footer__nav-item">
                <Link to="/#contacts">Контакты</Link>
              </li>
              <li className="footer__nav-item">
                <Link to="/#services">Услуги</Link>
              </li>
            </ul> */}
          </nav>
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
