import Footer from "../../components/Footer";
import Header from "../../components/Header";

import exampleImg from "../../assets/exampleImg.png";

import "./styles.css";
import Thumbnail from "../../components/Thumbnail";

export default function Galery() {
  return (
    <div className="galeryPage">
      <Header />
      <main className="galery">
        <div className="container">
          <Thumbnail
            title="Nome do álbum"
            imageLink={exampleImg}
            imageAlt="albumImage"
            buttonLink="#"
            buttonText="Ver imagens"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
