import styles from "./Search.module.css";
import { useEffect, useRef, useState } from "react";
import getNameByName from "../../../services/redux/actions/getGameByName";
import { useDispatch } from "react-redux";
import SearchSVG from "../../../assets/icons/search/SearchSvg";

const Search = () => {
  const dispatch = useDispatch();
  const [showSearch, setShowSearch] = useState(false);
  const [values, setValues] = useState("");

  function ShowSearchForm() {
    setShowSearch(!showSearch);
  }

  function handleOnChange(e) {
    setValues(e.target.value);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(getNameByName(values));
    setValues("");
  };

  return (
    console.log(showSearch),
    (
      <div className={styles.navsearch}>
        <div
          className={styles.form_button}
          onClick={ShowSearchForm}
          serach={showSearch.toString()}
        >
          <SearchSVG fill="#2a2a2a" width="20px" height="20px" stroke="3px" />
        </div>

        <form onSubmit={handleOnSubmit} className={styles.search_form}>
          <input
            type="text"
            name="name"
            autoComplete="off"
            placeholder="search anything game"
            onChange={handleOnChange}
            value={values}
          />
          <button type="submit" className={styles.btn_search}>
            <SearchSVG fill="white" width="20px" height="20px" />
          </button>
        </form>
      </div>
    )
  );
};

export default Search;
