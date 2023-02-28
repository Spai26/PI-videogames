import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.land_main}>
      <div>
        <Link to="/home">Home Page</Link>
      </div>
    </div>
  );
};

export default Landing;
