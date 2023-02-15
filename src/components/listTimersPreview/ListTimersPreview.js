import ListGroup from "react-bootstrap/ListGroup";
import "./ListTimersPreview.css";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import TimerContext from "../../context/timer/TimerContext";

const ListTimersPreview = () => {
  const { timers, getTimers } = useContext(TimerContext);

  useEffect(() => {
    getTimers();
  }, [timers]);

  // HERE WILL HAVE A COMPONENT TO SHOW THAT HAVE NOT TIMERS YET
  if (!timers || timers.length === 0) {
    return (
      <ListGroup className="listTimersPreview">
        <h1>You don't have timers yet</h1>
      </ListGroup>
    );
  }

  if (timers.length > 0) {
    const contentList = timers.map((timer) => (
      <Link
        to={`/timersDetails/${timer.id}`}
        className="timerLink"
        key={timer.id}
      >
        <ListGroup.Item className="listItem">
          <p className="titleTimer">{timer.title}</p>
          <p className="timerPreview">
            {timer.hours} : {timer.minutes} : {timer.seconds}
          </p>
        </ListGroup.Item>
      </Link>
    ));
    return <ListGroup className="listTimersPreview">{contentList}</ListGroup>;
  }
};

export default ListTimersPreview;
