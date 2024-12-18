import { Link } from "react-router-dom"
import Links from "../Links/Links"

import { useState } from "react";


export const Header = () => {
  const [isActive, setIsActive] = useState(false)

  const openMenu = () => {
    setIsActive(!isActive)
  }

  const closeMenu = () => {
    setIsActive(false)
  }
    return (
        <header className="header">
        <div className="container">
          <div className="header__row">
            <div className="header__logo"><Link to="/"><img src="/img/favicon.png" alt="logo" /></Link></div>

            <nav>
              <ul className={`header__nav ${isActive ? "open" : ""}`}>

                <li className="header__nav-item"><Link to="/#about" onClick={closeMenu}>О нас</Link></li>
                <li className="header__nav-item"><Link to="/#contacts" onClick={closeMenu}>Контакты</Link></li>
                <li className="header__nav-item"><Link to="/#services" onClick={closeMenu}>Услуги</Link></li>
                <li className="header__nav-item">
                  <a href="https://franch.gutallini.ru/">Франшиза</a>
                </li>
              </ul>
              <Links/>

            <button className={`header__nav-burger ${isActive ? "open" : ""}`} onClick={openMenu}>
              <span></span>
            </button>
            </nav>
            
          </div>
        </div>
      </header>

    )
}