import styles from "./Viewcreate.module.css";
import Rating from "../../../components/Partials/Rating/Rating";

/**
 * !FIXME: falta generos y platforms
 * @param {*} genres, platforms
 * @returns
 */
const Viewcreate = ({ values }) => {
  return (
    <div className={styles.preview}>
      {values.image ? <img src={values.image} alt={values.name} /> : ""}

      <div className={styles.data}>
        <div className={styles.content}>
          <h1>{values.name}</h1>
          <div className={styles.s_r}>
            <div>
              {values.rating ? <Rating rating={values.rating} /> : ""}
              <p>{values.rating}</p>
            </div>

            <p>{values.date_up}</p>
          </div>
        </div>
        <div></div>
        <div className={styles.des_d}>
          <div>
            <p>{values.platform}</p>
          </div>
          <div className="filterButton">
            {values.genres && values.genres.map((p) => p + " ")}
          </div>
          <div>
            <p>{values.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewcreate;
