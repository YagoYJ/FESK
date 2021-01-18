import Header from "../../components/Header";
import Card from "../../components/Card";
import Footer from "../../components/Footer";

import exampleImg from "../../assets/exampleImg.png";

import "./styles.css";

export default function Ranking() {
  return (
    <div className="rakingPage">
      <Header />
      <main>
        <h1>Rankings</h1>
        <Card cardStyle="gray">
          <div className="container">
            <div className="championship">
              <a href="#">Nome do campeonato</a>
              <img src={exampleImg} alt="Imagem do campeonato" />
            </div>
            <div className="championship">
              <a href="#">Nome do campeonato</a>
              <img src={exampleImg} alt="Imagem do campeonato" />
            </div>
            <div className="championship">
              <a href="#">Nome do campeonato</a>
              <img src={exampleImg} alt="Imagem do campeonato" />
            </div>
            <div className="championship">
              <a href="#">Nome do campeonato</a>
              <img src={exampleImg} alt="Imagem do campeonato" />
            </div>
            <div className="championship">
              <a href="#">Nome do campeonato</a>
              <img src={exampleImg} alt="Imagem do campeonato" />
            </div>
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
