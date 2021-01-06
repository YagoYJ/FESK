import { FaUserAlt } from "react-icons/fa";

import logo from "../../assets/logo.png";

import "./styles.css";

export default function DesktopHeader() {
  return (
    <header className="header desktopHeader">
      <div className="container">
        <img src={logo} alt="Logo da FESK" />
        <div className="title">
          <h1>FESK - Federação Cearense de Skateboard</h1>
          <h2>Faça parte da família skateboard</h2>
        </div>
      </div>
      <div className="menu">
        <div className="container">
          <nav>
            <ul>
              <li>Início</li>
              <li>Institucional</li>
              <li>Eventos</li>
              <li>Galeria</li>
              <li>Filiadas</li>
              <li>Ranking</li>
            </ul>

            <FaUserAlt
              color="#ffffff"
              fontSize={25}
              className="userLoginIcon"
            />
          </nav>
        </div>
      </div>
    </header>
  );
}
