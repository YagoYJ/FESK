import logo from "../../assets/logo.png";
import iconUserLoginDesktop from "../../assets/icon-user-login-desktop.png";

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
                <a href="#">Início</a>
              </li>
              <li>
                <a href="#">Institucional</a>
              </li>
              <li>
                <a href="#">Eventos</a>
              </li>
              <li>
                <a href="#">Galeria</a>
              </li>
              <li>
                <a href="#">Filiadas</a>
              </li>
              <li>
                <a href="#">Ranking</a>
              </li>
            </ul>
            <a href="#">
              <img src={iconUserLoginDesktop} alt="Login de usuário" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
