import styles from "./Card.module.css";
import RatingStart from "../../../components/Partials/Rating/Rating";
import ButtonWithURL from "../../../components/Partials/Button/ButtonWithURL";
/**
 *
 * @param {*} id
 * @param {*} name
 * @param {*} image
 * @param {*} rating
 * @param {*}released
 * @param {*} origin
 * @param {*} genres
 * @returns
 */

const Card = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.image} alt={props.name} />

      <div className={styles.info}>
        <h1>{props.name}</h1>
        <div className={styles.info_rating}>
          <RatingStart rating={props.rating} color="#d54e69" />
        </div>

        <p>{props.released}</p>
        <p>{props.genres?.join(" - ")}</p>
        {/* <p>{props.origin}</p> */}
      </div>

      <div className={styles.btnContent}>
        <ButtonWithURL
          style={styles.btn}
          rute={`/detail/${props.id}`}
          text="view details..."
        />
      </div>
    </div>
  );
};

export default Card;
