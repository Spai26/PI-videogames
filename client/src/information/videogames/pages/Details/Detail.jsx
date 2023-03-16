import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import getGameDetail from "../../../services/redux/actions/getGameDetail";
import Rating from "../../../components/Partials/Rating/Rating";
import Button from "../../../components/Partials/Button/ButtonWithImage";
import styles from "./Details.module.css";
const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useHistory();
  const d = useSelector((state) => state.videogameDetail);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getGameDetail(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={styles.container}>
      {d && (
        <>
          <div className={styles.data}>
            <h1>{d.name}</h1>
            <div className={styles.ratings_data}>
              <span>{d.rating}</span>
              <p>
                <Rating rating={d.rating} color="red" />
              </p>
            </div>
            <div className={styles.thumbnail}>
              <img src={d.image} alt={d.name} />
              <div className={styles.details}>
                <div className={styles.items}>
                  <h3>Date</h3>
                  <p>{d.released}</p>
                </div>
                <div className={styles.items}>
                  <h3>Platforms</h3>
                  <p>{d.platforms && d.platforms.split(",").join("  ")}</p>
                </div>
                <div className={styles.items}>
                  <h3>Generos </h3>
                  <p>{d.genres?.replace(",", " - ")}</p>
                </div>
              </div>
            </div>
            <div className={styles.memo}>
              <p>{d.description}</p>
            </div>
          </div>

          <div className={styles.return}>
            <Button
              fnOnClick={() => navigate.push("/home")}
              text="Back to Home"
              style={`btn`}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
/* 
 
        <div>2</div>
        <div>3</div>
<div>
          <h1>{d.name}</h1>
         
        </div>
        <img src={d.image} alt={d.name} />

        <div className={styles.des}>
          <div>
            <span>Date : </span>
            <p>{d.released}</p>
          </div>
          <div className={styles.title}>
            <span>Platforms :</span>
            <p>{d.platforms && d.platforms.split(",").join("  ")}</p>
          </div>

          
        </div>

       

        <p>{d.platform}</p> */
