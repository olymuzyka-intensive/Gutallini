export const Header = () => {
    return (
        <header className="header">
        <div className="container">
          <div className="header__row">
            <nav>
              <ul className="header__nav">
                <div className="header__nav-logo"><a href="#"><img src="/img/favicon.png" alt="logo" /></a></div>

                <li className="header__nav-item"><a href="#about">О нас</a></li>
                <li className="header__nav-item"><a href="#contacts">Контакты</a></li>
                <li className="header__nav-item"><a href="#services">Услуги</a></li>
                {/* <li className="header__nav-item"><a href="">Прайс</a></li> */}
                <li className="header__nav-item">
                  <a href="https://franch.gutallini.ru/">Франшиза</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

    )
}