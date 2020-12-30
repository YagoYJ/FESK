import { useState } from "react";

import logo from "../../assets/logo.png";
import iconUserLoginMobile from "../../assets/icon-user-login-mobile.png";
import iconMenuBars from "../../assets/icon-menu-bars.png";
import iconClose from "../../assets/icon-close.png";

import "./styles.css";

export default function MobileHeader() {
  const [menuVisible, setMenuVisible] = useState(false);

  function handleOpenMenu() {
    setMenuVisible(true);
    console.log(menuVisible);
  }

  function handleCloseMenu() {
    setMenuVisible(false);
  }

  return (
    <header className="header mobileHeader">
      <div className="options">
        <img src={logo} alt="Logo da FESK" />
        <div className="optionsButtons">
          <button className="iconButton">
            <img src={iconUserLoginMobile} alt="Login de usuário" />
          </button>
          <button className="iconButton" onClick={handleOpenMenu}>
            <img src={iconMenuBars} alt="Barras de menu" />
          </button>
        </div>
      </div>
      {menuVisible && (
        <nav className="menu">
          <button className="iconButton closeButton" onClick={handleCloseMenu}>
            <img src={iconClose} alt="Botão para fechar o menu" />
          </button>
          <ul>
            <li>Início</li>
            <li>Institucional</li>
            <li>Eventos</li>
            <li>Galeria</li>
            <li>Filiadas</li>
            <li>Ranking</li>
          </ul>
        </nav>
      )}
    </header>
  );
}
