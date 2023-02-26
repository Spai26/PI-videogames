import styles from "./Search.module.css";
import { icons } from "../../../utils/utils";
import { Fragment, useState } from "react";

const Search = () => {
  const [value, setValue] = useState("");

  function handleOnChange(e) {
    setValue(e.target.value);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    if (Object.keys(value).length) {
      e.target.reset();
    }
  }

  return (
    console.log(value),
    (
      <Fragment>
        <form onSubmit={handleOnSubmit} className={styles.search_bar}>
          <input
            type="text"
            name={value}
            autoComplete="off"
            placeholder="search anything game"
            onChange={handleOnChange}
          />
          <button type="submit">
            <img src={icons.search} alt="" />
          </button>
        </form>
      </Fragment>
    )
  );
};

export default Search;
