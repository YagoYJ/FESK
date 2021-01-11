import Header from "../../components/Header";
import Card from "../../components/Card";
import Footer from "../../components/Footer";

import eventImage from "../../assets/exampleImg.png";

import "./styles.css";
import { Link } from "react-router-dom";

export default function Events() {
  return (
    <div className="eventsPage">
      <Header />
      <h1 className="pageTitle">Eventos</h1>
      <Card cardStyle="gray">
        <div className="container">
          <div className="event">
            <img src={eventImage} alt="example" />
            <Link to="#">Ver detalhes</Link>
          </div>
        </div>
      </Card>
      <Footer />
    </div>
  );
}
