import styles from "./ItemSlider.module.css";
import { Link } from "react-router-dom";
const SliderItem = ({ icon, text, rute = "#" }) => {
  return (
    <>
      <div className={styles.navbar_item}>
        <Link to={rute}>
          <div>           
            <span>{text}</span>
          </div>
          {icon ? icon : ""}
        </Link>
      </div>
    </>
  );
};

export default SliderItem;
