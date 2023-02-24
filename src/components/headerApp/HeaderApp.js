import { Link } from "react-router-dom";
import styles from "./HeaderApp.module.scss";

const HeaderApp = () => {
  return (
    <Link className={styles.titleApp} to="/">
      <h1>Admin Time App</h1>
    </Link>
  );
};

export default HeaderApp;
