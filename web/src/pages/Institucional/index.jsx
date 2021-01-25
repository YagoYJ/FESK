import Card from "../../components/Card";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import exampleImg from "../../assets/exampleImg.png";
import ticketsImage from "../../assets/ticketsImage.png";
import skateParkImage1 from "../../assets/skateParkImage1.png";
import skateParkImage2 from "../../assets/skateParkImage2.png";

import "./styles.css";
import { FaFilePdf } from "react-icons/fa";

export default function Institucional() {
  return (
    <div className="institucionalPage">
      <Header />
      <h1 className="pageTitle">Institucional</h1>
      <Card cardStyle="gray">
        <div className="container">
          <img src={ticketsImage} alt="Atletas Recebendo passagens" />
          <h2>PASSAGENS E EVENTOS</h2>
          <p>
            Requerimentos e solicitações são efetuadas diáriamente pela
            diretoria, sendo que as requisições de apoio, passagens e outros que
            demandem recursos devem ser efetuadas com no mínimo 45 dias antes do
            evento. As requeisições serão encaminhadas e cabe ao poder público o
            aceite das mesmas. Para ajudar a união de todos é essencial.
          </p>
          <div className="linksToTickets">
            <a
              href="https://juventude.fortaleza.ce.gov.br/concessao-de-passagens"
              target="_blank"
              rel="noreferrer"
              className="button ticketLink"
            >
              Quero minhas passagens!
            </a>
            <div className="documents">
              <a
                href="https://juventude.fortaleza.ce.gov.br/images/editais/ANEXO%20I%20-%20PORTARIA_XX-2019_PASSAGENS%20-%20SOLICITA%C3%87%C3%83O.doc"
                target="_blank"
                rel="noreferrer"
                className="button documentLink"
              >
                <FaFilePdf size={40} />
                Anexo 1
              </a>
              <a
                href="https://juventude.fortaleza.ce.gov.br/images/editais/ANEXO%20II%20-%20PORTARIA_XX-2019_PASSAGENS%20%20-%20TERMO%20DE%20COMPROMISSO.docx"
                target="_blank"
                rel="noreferrer"
                className="button documentLink"
              >
                <FaFilePdf size={40} />
                Anexo 2
              </a>
            </div>
          </div>
        </div>
      </Card>
      <Card cardStyle="dark">
        <div className="container">
          <img src={exampleImg} alt="" />
          <h2>FORMA DE ADMINISTRAÇÃO</h2>
          <p>
            A forma de administração da federação é deliberativa, sendo que o
            Presidente somente realiza ou cumpre o que o Conselho da entidade
            definir. O conselho é composto por 5 membros atualmente e será
            ampliado para 11 em até 12 meses. Ao conselho cabe decidir os rumos
            da fereração, as ações bem como o gasto de recursos desta, alem de
            escolherem a diretoria da entidade sendo o cargo de presidente em
            votação na assembléia. Transparência para o esporte.
          </p>
        </div>
      </Card>
      <Card cardStyle="gray">
        <div className="container">
          <div className="skateParkImages">
            <img src={skateParkImage1} alt="Pista de skate" />
            <img src={skateParkImage2} alt="Pista de skate" />
          </div>
          <h2>PISTAS COM PROBLEMAS</h2>
          <p>
            Todos sabemos que várias pistas utilizadas hoje pela família
            Skateboard estão com problemas. Já realizamos requerimentos e
            protocolos para a correção de algumas e tambem a construção de
            outras novas pelo estado. Quando um atleta encontrar um problema em
            alguma pista solicitamos que evidencie com fotos nítidas, de
            preferencia evidenciando bem o problema. Envie por meio do
            formulário de contatos do site ou por email as fotos com o local,
            nome da pessoa de contato para dúvidas. Iremos fazer o protocolo
            para a correção e postar na página para acompanhamento de todos.
          </p>
        </div>
      </Card>
      <Footer />
    </div>
  );
}
