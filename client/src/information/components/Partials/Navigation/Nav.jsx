import NavMovile from "../NavigationMovile/NavMovile";
import styles from "./Nav.module.css";

const Navigation = () => {
  return (
    <header className={styles.nav_container}>
      <div className={styles.nav_content}>
        <div>Logo</div>
        <NavMovile />
      </div>
    </header>
  );
};

export default Navigation;
