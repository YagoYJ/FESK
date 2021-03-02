import Header from "../../components/Header";
import Card from "../../components/Card";
import Footer from "../../components/Footer";

import CJASThumb from "../../assets/CJASThumb.png";

import "./styles.css";
import CategoryList from "./components/CategoryList";

const mirim = [
  "Kauan Silva - 5.564 pontos",
  "Wanderson Silva - 5.491 pontos",
  "João Victor - 5.305 pontos",
  "Kauan Araújo - 5.181 pontos",
  "Felipe Maracajá - 4.740 pontos",
  "Wrick Santiago - 4.077 pontos",
  "Caio Vieira - 3.954 pontos",
  "Marcos Aurélio - 3.679 pontos",
  "Ricardo de Oliveira - 3.162 pontos",
  "Felipe Yan - 2.302 pontos",
];

const iniciante = [
  "Alexandre Vieira - 5.357 pontos",
  "Juliano Prado - 5.244 pontos",
  "Lincoln Ueda - 4.537 pontos",
  "",
  "José Rodrigues - 4.194 pontos",
  "Nicolas Tavares - 3.519 pontos",
  "Ermerson Santos - 3.430 pontos",
  "Riquelme Sousa - 2.669 pontos",
  "Adriel Pereira - 2.528 pontos",
  "Lucas Teixeira - 2.460 pontos",
];

const feminino = [
  "Tati Almeida - 5.385 pontos",
  "Karol Lima - 5.000 pontos",
  "Edilândia Pepeta - 4.703 pontos",
  "Gisele Galvão - 4.303 pontos",
  "Carol Negreiros - 4.251 pontos",
  "Aisia Abreu - 2.866 pontos",
  "Paloma Paz - 2.627 pontos",
  "Brenda Gomes - 2.485 pontos",
  "Emanuely Ciano - 2.244 pontos",
  "Esmirna Melo - 2.071 pontos",
];

const amador = [
  "Thiago Vilar - 4.889 pontos",
  "Kevin Silva - 4.488 pontos",
  "Everton Lima - 4.445 pontos",
  "Henrique Muskito - 4.420 pontos",
  "João Luca - 4.330 pontos",
  "Carlos Lucas - 4.241 pontos",
  "Anderson Monte - 4.002 pontos",
  "Big Black - 3.963 pontos",
  "João Halyson - 3.831 pontos",
  "Daniel Rodrigues - 3.762 pontos",
];

export default function RankingDetails() {
  return (
    <div className="rankingDetailsPage">
      <Header />
      <main>
        <Card cardStyle="gray">
          <div className="container">
            <div className="eventApresentations">
              <h1>Circuito Juventude Ativa de Skate 2019</h1>
              <img src={CJASThumb} alt="CJAS" />
            </div>
            <div className="results">
              <h2>Resultados</h2>
              <CategoryList categoryName="Mirim" items={mirim} />
              <CategoryList categoryName="Iniciante" items={iniciante} />
              <CategoryList categoryName="Feminino" items={feminino} />
              <CategoryList categoryName="Amador" items={amador} />
            </div>
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
