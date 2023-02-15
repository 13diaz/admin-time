import "./Home.css";
import Button from "react-bootstrap/Button";
import HeaderApp from "../../components/headerApp/HeaderApp.js";
import { useContext } from "react";
import ListTimersPreview from "../../components/listTimersPreview/ListTimersPreview";
import NewTimerModalContext from "../../context/newTimerModal/NewTimerModalContext";
import NewTimerModal from "../../components/newTimerModal/NewTimerModal.js";

// refactor in more components AND USE CSS GRID FOR CHANGE REACSTRAP AND FLEXBOX OF ALL COMPONENTS FOR IMPROVE EFICENT
function Home() {
  const { showModal } = useContext(NewTimerModalContext);

  return (
    <div className="main">
      <HeaderApp />
      <ListTimersPreview />
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
