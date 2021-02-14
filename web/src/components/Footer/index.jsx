import { FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";
import sendEmail from '../../services/mail'

import "./styles.css";

export default function Footer() {

  

  return (
    <footer className="footer">
      <h2>ENTRE EM CONTATO</h2>
      <div className="container">
        <form className="sendEmailForm" onSubmit={sendEmail}>
          <div className="inputGroup">
            <input type="text" placeholder="Nome *" name="user_name" />

            <input type="email" placeholder="E-mail *" name="user_email" />
          </div>

          <textarea
            cols="5"
            placeholder="Deixe sua mensagem *"
            name="message"
          />

          <button type="submit" className="button">
            Enviar
          </button>
        </form>
        <span className="or">OU</span>
        <div className="contacts">
          <div className="contact">
            <FaEnvelope color="#ffffff" fontSize={25} />
            <span>feskskateboard@gmail.com</span>
          </div>
          <div className="contact">
            <FaWhatsapp color="#ffffff" fontSize={25} />
            <span>(85) 99701-0039</span>
          </div>
          <div className="contact">
            <FaInstagram color="#ffffff" fontSize={25} />
            <span>@fesk_skateboard</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
