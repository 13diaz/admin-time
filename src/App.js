import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./styles/main.module.scss";
import RoutesApp from "./routes/RoutesApp";

function App() {
  return (
    <div className={styles.App}>
      <RoutesApp />
    </div>
  );
}

export default App;
