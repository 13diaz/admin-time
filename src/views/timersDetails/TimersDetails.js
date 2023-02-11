import "./TimersDetails.css";
import TopBarTimersDetails from "../../components/topBarTimersDetails/TopBarTimersDetails";
import MainTimer from "../../components/mainTimer/MainTimer";
import TimersTabs from "../../components/timersTabs/TimersTabs";
import Button from "react-bootstrap/Button";
import ResetButton from "../../components/resetButton/ResetButton";
import LockButton from "../../components/lockButton/LockButton";

const TimersDetails = () => {
  return (
    <div>
      <div className="content col-sm-12">
        <TopBarTimersDetails />
        <div className="mainCirclesContainer">
          <div className="mainTimerContainer">
            <div className="flex-container">
              <div className="flex-item"></div>
              <div className="timerContainer">
                <MainTimer />
              </div>
            </div>
          </div>
          <LockButton />
          <ResetButton />
        </div>
        <TimersTabs />
        <Button variant="success" size="lg" className="buttonPlayStop">
          <strong>PLAY / STOP</strong>
        </Button>
      </div>
    </div>
  );
};

export default TimersDetails;
