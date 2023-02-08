import BackButton from "../../components/backButton/BackButton";
import MenuButton from "../../components/menuButton/MenuButton";
import "./TopBarTimersDetails.css";

const TopBarTimersDetails = () => {
  return (
    <div className="topBarTimersDetails">
      <BackButton />
      <div className="titlePage container">Timers Details</div>
      <MenuButton />
    </div>
  );
};

export default TopBarTimersDetails;
