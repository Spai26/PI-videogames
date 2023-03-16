import styles from "./NavBar.module.css";

import ButtonWithURL from "../../Partials/Button/ButtonWithURL";
import HomeSVG from "../../../assets/icons/ihome";
import Search from "../Search/Search";
import { useLocation } from "react-router-dom";
import { Fragment } from "react";
const Navigation = () => {
  const location = useLocation();
  return (
    <>
      <div className={styles.sliderbar}>
        <div className={styles.container}>
          {location.pathname !== "/" ? (
            <Fragment>
              <Search />

              <div className={styles.home}>
                <ButtonWithURL
                  style={styles.btn_navbar}
                  rute="/home"
                  icon={<HomeSVG fill="#d54e69" />}
                />
              </div>
            </Fragment>
          ) : (
            <>
              <div className={styles.socials}></div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navigation;
