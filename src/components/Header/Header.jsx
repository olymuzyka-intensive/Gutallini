import { Link } from "react-router-dom"
export const Header = () => {
    return (
        <header className="header">
        <div className="container">
          <div className="header__row">
            <nav>
              <ul className="header__nav">
                <div className="header__nav-logo"><Link to="/"><img src="/img/favicon.png" alt="logo" /></Link></div>

                <li className="header__nav-item"><Link to="/#about">О нас</Link></li>
                <li className="header__nav-item"><Link to="/#contacts">Контакты</Link></li>
                <li className="header__nav-item"><Link to="/#services">Услуги</Link></li>
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