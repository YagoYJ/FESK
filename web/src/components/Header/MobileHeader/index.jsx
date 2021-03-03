import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../../../assets/logo.png";

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
          {/* <button className="iconButton">
            <FaUserAlt color="#830719" fontSize={35} />
          </button> */}
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
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/institucional">Institucional</Link>
            </li>
            <li>
              <Link to="/events">Eventos</Link>
            </li>
            <li>
              <Link to="/galery">Galeria</Link>
            </li>
            <li>
              <Link to="/affiliated">Filiadas</Link>
            </li>
            <li>
              <Link to="/ranking">Ranking</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
