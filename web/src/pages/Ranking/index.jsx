import Header from "../../components/Header";
import Card from "../../components/Card";
import Footer from "../../components/Footer";

import CJASThumb from "../../assets/CJASThumb.png";

import "./styles.css";
import { useState } from "react";
import Thumbnail from "../../components/Thumbnail";

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
                <Thumbnail
                  title="Circuito Juventude Ativa de Skate 2020"
                  imageLink={CJASThumb}
                  imageAlt="Imagem do campeonato"
                  buttonLink={`/ranking/details/${ranking.id}`}
                  buttonText="Ver detalhes"
                />
              </div>
            ))}
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
