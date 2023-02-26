import styles from "./Home.module.css";
import Search from "../../Partials/Search/Search";
import Cards from "../../../videogames/components/Cards/Cards";
const Home = () => {
  return (
    <div className={styles.start}>
      <Search />
      <Cards />
    </div>
  );
};

export default Home;
