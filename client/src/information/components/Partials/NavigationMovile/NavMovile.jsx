import styles from "./NavMovile.module.css";
import { icons } from "../../../utils/utils";
import { useState } from "react";

const NavMovile = () => {
  const { hamburger, cross } = icons;
  const [click, setClick] = useState(false);

  function handleOnCliked() {
    setClick(!click);
  }
  return (
    <div className={styles.nav_movile} onClick={handleOnCliked}>
      {!click ? (
        <img src={hamburger} alt="hamburger" />
      ) : (
        <img src={cross} alt="hamburger" />
      )}
    </div>
  );
};

export default NavMovile;
