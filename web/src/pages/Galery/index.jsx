import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import exampleImg from "../../assets/exampleImg.png";

import "./styles.css";

export default function Galery() {
  return (
    <div className="galeryPage">
      <Header />
      <main className="galery">
        <div className="container">
          <div className="album">
            <img src={exampleImg} alt="albumImage" />
            <Link to="#">Nome do álbum</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
