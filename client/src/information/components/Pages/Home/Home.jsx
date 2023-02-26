import styles from "./Home.module.css";
import Search from "../../Partials/Search/Search";
const Home = () => {
  return (
    <div className={styles.start}>
      <Search />
    </div>
  );
};

export default Home;
