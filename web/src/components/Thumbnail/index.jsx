import { Link } from "react-router-dom";
import "./styles.css";

export default function Thumbnail({
  title,
  imageLink,
  imageAlt,
  buttonText,
  buttonLink,
}) {
  return (
    <div className="thumbContainer">
      <div className="thumb">
        <h2>{title}</h2>
        <img src={imageLink} alt={imageAlt} />
      </div>
      <Link to={buttonLink} className="button ">
        {buttonText}
      </Link>
    </div>
  );
}
