import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../../../assets/logo.png";

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
