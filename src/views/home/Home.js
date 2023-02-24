import styles from "./Home.module.scss";
import mainStyles from "../../styles/main.module.scss";
import Button from "react-bootstrap/Button";
import HeaderApp from "../../components/headerApp/HeaderApp.js";
import { useContext } from "react";
import ListTimersPreview from "../../components/listTimersPreview/ListTimersPreview";
import NewTimerModalContext from "../../context/newTimerModal/NewTimerModalContext";
import NewTimerModal from "../../components/newTimerModal/NewTimerModal.js";

function Home() {
  const { showModal } = useContext(NewTimerModalContext);

  return (
    <div className={styles.home}>
      <HeaderApp />
      <div className={styles.home_main}>
        <ListTimersPreview />
      </div>
      <Button
        onClick={showModal}
        className={`${styles.home_createTimerButton} ${mainStyles.specialButton}`}
        variant="success"
        size="lg"
      >
        <i className="bi bi-plus-lg"></i>
      </Button>
      <NewTimerModal />
    </div>
  );
}

export default Home;
