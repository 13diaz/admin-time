import "./Home.css";
import Button from "react-bootstrap/Button";
import HeaderApp from "../../components/headerApp/HeaderApp.js";
import { useLocalStorage } from "../../utils/hooks/useLocalStorage";
import NewTimerModalState from "../../context/newTimerModal/NewTimerModalState";
import ListTimersPreview from "../../components/listTimersPreview/ListTimersPreview";
import NewTimerModal from "../../components/newTimerModal/NewTimerModal.js";
import { useEffect, useContext } from "react";
import NewTimerModalContext from "../../context/newTimerModal/NewTimerModalContext";

// refactor in more components AND USE CSS GRID FOR CHANGE REACSTRAP AND FLEXBOX OF ALL COMPONENTS FOR IMPROVE EFICENT

function Home() {
  const { show, getHandle } = useContext(NewTimerModalContext);

  useEffect(() => {
    getHandle();
  }, []);

  // CLOSE MODAL function: necesita el context del set show
  // const handleClose = () => setShow(false);// Para ejecutar este setShow crearlo en el context
  // OPEN MODAL function: necesita el context del set show
  // const handleShow = () => setShow(true);
  const handleShow = () => getHandle();

  const [timers, setTimers] = useLocalStorage("timers", []);

  return (
    <NewTimerModalState>
    <div className="main">
      <HeaderApp />
      <ListTimersPreview props={timers} />
      {/* Button for create new timer */}
      <Button
        onClick={handleShow}
        className="createTimerButton"
        variant="success"
        size="lg"
      >
        <i className="bi bi-plus-lg"></i>
      </Button>
      <NewTimerModal />
    </div>
    </NewTimerModalState>
  );
}

export default Home;
