import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.image} alt={props.name} />

      <div className={styles.info}>
        <h1>{props.name}</h1>

        <h3>{props.rating}</h3>
        <p>{props.released}</p>
        <p>{props.genres?.join(" ")}</p>
        {/* <p>{props.origin}</p> */}
        <Link className={styles.btn} to={`/detail/${props.id}`}>
          Ver más...
        </Link>
      </div>
    </div>
  );
};

export default Card;
