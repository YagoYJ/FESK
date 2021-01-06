import "./styles.css";

export default function Card({ children, cardStyle }) {
  return <div className={`card ${cardStyle}`}>{children}</div>;
}
