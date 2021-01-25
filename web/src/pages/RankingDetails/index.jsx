import Header from "../../components/Header";
import Card from "../../components/Card";
import Footer from "../../components/Footer";

import CJASThumb from "../../assets/CJASThumb.png";

import "./styles.css";
import { Link } from "react-router-dom";

export default function RankingDetails() {
  return (
    <div className="rankingDetailsPage">
      <Header />
      <main>
        <Card cardStyle="gray">
          <div className="container">
            <div className="eventApresentations">
              <h1>Circuito Juventude Ativa de Skate 2020</h1>
              <img src={CJASThumb} alt="CJAS" />
            </div>
            <div className="eventStages">
              <h2>Etapas</h2>
              <div className="buttons">
                <Link to="/ranking" className="button stageButton">
                  1ª Etapa - Rede Cuca Barra
                </Link>

                <Link to="/ranking" className="button stageButton">
                  2ª Etapa - Rede Cuca Monbuim
                </Link>

                <Link to="/ranking" className="button stageButton">
                  3ª Etapa - Rede Cuca Jangurussu
                </Link>

                <Link to="/ranking" className="button stageButton">
                  Areninha do Pirambu
                </Link>

                <Link to="/ranking" className="button stageButton">
                  Polo de Lazer Av. Sargento Hermínio
                </Link>

                <Link to="/ranking" className="button stageButton">
                  Praça da Messejana
                </Link>

                <Link to="/ranking" className="button stageButton">
                  Praça da Juventude (Gentilândia)
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
