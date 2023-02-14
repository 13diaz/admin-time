import "./Home.css";
import Button from "react-bootstrap/Button";
import HeaderApp from "../../components/headerApp/HeaderApp.js";
import { useLocalStorage } from "../../utils/hooks/useLocalStorage";
import ListTimersPreview from "../../components/listTimersPreview/ListTimersPreview";
import NewTimerModal from "../../components/newTimerModal/NewTimerModal.js";
import { useContext } from "react";
import NewTimerModalContext from "../../context/newTimerModal/NewTimerModalContext";

// refactor in more components AND USE CSS GRID FOR CHANGE REACSTRAP AND FLEXBOX OF ALL COMPONENTS FOR IMPROVE EFICENT

function Home() {
  const { showModal } = useContext(NewTimerModalContext);

  // CREAR EL CONTEXTO TAMBIEN PARA LOS TIMERS
  const [timers, setTimers] = useLocalStorage("timers", []);

  return (
    <div className="main">
      <HeaderApp />
      <ListTimersPreview props={timers} />
      {/* Button for create new timer */}
      <Button
        onClick={showModal}
        className="createTimerButton"
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
