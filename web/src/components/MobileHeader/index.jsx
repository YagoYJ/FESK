import logo from "../../assets/logo.png";
import iconUserLogin from "../../assets/icon-user-login.png";
import iconMenuBars from "../../assets/icon-menu-bars.png";

import "./styles.css";

export default function MobileHeader() {
  return (
    <div className="header mobileHeader">
      <div className="options">
        <img src={logo} alt="Logo da FESK" />
        <div className="optionsButtons">
          <button className="iconButton">
            <img src={iconUserLogin} alt="Login de usuário" />
          </button>
          <button className="iconButton">
            <img src={iconMenuBars} alt="Barras de menu" />
          </button>
        </div>
      </div>
    </div>
  );
}
