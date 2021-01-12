import Header from "../../components/Header";
import Card from "../../components/Card";
import Footer from "../../components/Footer";

import "./styles.css";

export default function Ranking() {
  return (
    <div className="rakingPage">
      <Header />
      <main>
        <h1>Rankings</h1>
        <Card cardStyle="gray">
          <div className="container">
            <ul>
              <li>Campeonato 1</li>
              <li>Campeonato 2</li>
              <li>Campeonato 3</li>
            </ul>
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
