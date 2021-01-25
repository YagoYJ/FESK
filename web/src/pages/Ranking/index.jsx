import Header from "../../components/Header";
import Card from "../../components/Card";
import Footer from "../../components/Footer";

import CJASThumb from "../../assets/CJASThumb.png";

import "./styles.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Ranking() {
  // eslint-disable-next-line
  const [rankings, setRankings] = useState([
    {
      id: 1,
      name: "CJAS 2020",
    },
  ]);

  return (
    <div className="rankingPage">
      <Header />
      <main>
        <h1>Rankings</h1>
        <Card cardStyle="gray">
          <div className="container">
            {rankings.map((ranking) => (
              <div className="championship">
                <div className="thumb">
                  <h2>Circuito Juventude Ativa de Skate 2020</h2>
                  <img src={CJASThumb} alt="Imagem do campeonato" />
                </div>
                <Link
                  to={`/ranking/details/${ranking.id}`}
                  className="button detailsButton"
                >
                  Ver detalhes
                </Link>
              </div>
            ))}
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
