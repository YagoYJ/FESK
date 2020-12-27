import logo from "../../assets/logo.png";
import iconUserLogin from "../../assets/icon-user-login.png";
import iconMenuBars from "../../assets/icon-menu-bars.png";
import iconClose from "../../assets/icon-close.png";

import "./styles.css";
import { useState } from "react";

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
    <div className="header mobileHeader">
      <div className="options">
        <img src={logo} alt="Logo da FESK" />
        <div className="optionsButtons">
          <button className="iconButton">
            <img src={iconUserLogin} alt="Login de usuário" />
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
    </div>
  );
}
