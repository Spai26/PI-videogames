import { useDispatch, useSelector } from "react-redux";
import filterGenres from "../../../../../services/redux/actions/filterGenres";
/* import originVideogame from "../../../../../services/redux/actions/originVideogame";
import orderVideogames from "../../../../../services/redux/actions/orderVideogames"; */
import { dataOrigin } from "../../../../../utils/utils";
import styles from "./Filters.module.css";

const Filters = () => {
  const dispatch = useDispatch();
  const genresOpts = useSelector((state) => state.genres);
  const genresSelected = useSelector((state) => state.filterGenres);

  function handleSelected(e) {
    if (e.target.name === "genres") {
      genresSelected.includes(`${e.target.value}`) === true
        ? alert("genero ya seleccionado")
        : dispatch(filterGenres(`${e.target.value}`));
    }
  }

  return (
    <>
      <div className={styles.filters}>
        <div>
          Genres:
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

        <div>
          <select name="origin" defaultValue={"DEFAULT"}>
            <option value="DEFAULT" disabled>
              Origin
            </option>
            {dataOrigin.map((opt) => (
              <option key={opt.id} value={opt.name}>
                {opt.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default Filters;
