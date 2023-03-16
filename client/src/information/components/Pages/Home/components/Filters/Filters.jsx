import { useDispatch, useSelector } from "react-redux";
import filterGenres from "../../../../../services/redux/actions/filterGenres";
import resetFilterArray from "../../../../../services/redux/actions/resetFilter";
import orderOriginGame from "../../../../../services/redux/actions/originGames";
import orderByRatingVideogames from "../../../../../services/redux/actions/orderVideogames";
import orderByNameVideogames from "../../../../../services/redux/actions/orderNameVideogames";
import setError from "../../../../../services/redux/actions/setError";
import ButtonWithURL from "../../../../Partials/Button/ButtonWithURL";
import { dataOrigin, orderData, nameOrder } from "../../../../../utils/utils";
import styles from "./Filters.module.css";
import AddSVG from "../../../../../assets/icons/iadd";

const Filters = () => {
  const dispatch = useDispatch();
  const genresOpts = useSelector((state) => state.genres);
  const genresSelected = useSelector((state) => state.filterGenres);

  function handleSelected(e) {
    const { name, value } = e.target;
    if (name === "genres") {
      if (genresSelected.length > 2) {
        dispatch(resetFilterArray());
      }
      genresSelected.includes(value) === true
        ? dispatch(setError("genero ya seleccionado"))
        : dispatch(filterGenres(value));
    }

    if (name === "origin") {
      dispatch(orderOriginGame(value));
    }

    if (name === "order") {
      dispatch(orderByRatingVideogames(value));
    }

    if (name === "alpha") {
      dispatch(orderByNameVideogames(value));
    }
  }

  return (
    <>
      <div className={styles.filters}>
        <div className={styles.items}>
          <div className={styles.nt}>
            <div className={styles.item}>
              <p>Genres</p>
              <select
                name="genres"
                defaultValue={"DEFAULT"}
                onChange={handleSelected}
              >
                <option value="DEFAULT" disabled>
                  Genres
                </option>
                {genresOpts.map((opt) => (
                  <option key={opt.id} value={opt.name}>
                    {opt.name}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.item}>
              <p>Origin</p>
              <select
                name="origin"
                defaultValue={"all"}
                onChange={handleSelected}
              >
                <option value="all">all</option>
                {dataOrigin.map((opt) => (
                  <option key={opt.id} value={opt.name}>
                    {opt.name}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.item}>
              <p>Rating</p>
              <select
                name="order"
                defaultValue={"reset"}
                onChange={handleSelected}
              >
                <option value="reset" disabled>
                  rating
                </option>
                {orderData.map((opt) => (
                  <option key={opt.id} value={opt.name}>
                    {opt.name}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.item}>
              <p>alphabetic</p>
              <select
                name="alpha"
                defaultValue={"reset"}
                onChange={handleSelected}
              >
                <option value="reset" disabled>
                  alpha
                </option>
                {nameOrder.map((opt) => (
                  <option key={opt.id} value={opt.name}>
                    {opt.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <ButtonWithURL
              rute="/create"
              text="new game"
              icon={<AddSVG fill="white" />}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
