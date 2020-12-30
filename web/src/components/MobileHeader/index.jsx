import { useState } from "react";
import { FaBars, FaTimes, FaUserAlt } from "react-icons/fa";

import logo from "../../assets/logo.png";

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
            <FaUserAlt color="#830719" fontSize={35} />
          </button>
          <button className="iconButton" onClick={handleOpenMenu}>
            <FaBars color="#830719" fontSize={35} />
          </button>
        </div>
      </div>
      {menuVisible && (
        <nav className="menu">
          <button className="iconButton closeButton" onClick={handleCloseMenu}>
            <FaTimes color="#ffffff" fontSize={35} />
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
