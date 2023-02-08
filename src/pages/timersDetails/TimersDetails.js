import "./TimersDetails.css";
import TopBarTimersDetails from "../../components/topBarTimersDetails/TopBarTimersDetails";
import MainTimer from "../../components/mainTimer/MainTimer";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const TimersDetails = () => {
  return (
    <div className="content">
      <TopBarTimersDetails />
      <div className="flex-container">
        <div className="flex-item"></div>
        <div className="timerContainer">
          <MainTimer />
        </div>
      </div>
      <Form.Label className="subtitleTimerConfig">
        Tabs con el titulo de cada timer
      </Form.Label>
      <div className="d-grid gap-2">
        <Button variant="success" size="lg">
          Play / Stop
        </Button>
      </div>
    </div>
  );
};

export default TimersDetails;
