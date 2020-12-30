import { FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";

import "./styles.css";

export default function Footer() {
  return (
    <footer className="footer">
      <h2>ENTRE EM CONTATO</h2>
      <div className="container">
        <form className="sendEmailForm">
          <div className="inputGroup">
            <input
              type="text"
              placeholder="Nome *"
              //    value={}
              //     onChange={}
            />

            <input
              type="email"
              placeholder="E-mail *"
              //    value={}
              //     onChange={}
            />
          </div>
          <input
            type="text"
            placeholder="Assunto *"
            //    value={}
            //     onChange={}
          />
          <textarea
            cols="5"
            placeholder="Deixe sua mensagem *"
            //    value={}
            //     onChange={}
          />
          <button type="submit">Enviar</button>
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
