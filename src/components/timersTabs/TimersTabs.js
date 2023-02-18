import "./TimersTabs.css";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

// CONTEXT
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import TimerContext from "../../context/timer/TimerContext";

const TimersTabs = () => {
  let { timerId } = useParams();

  const { timers, getTimers, selectedTimer, getSelectedTimer } =
    useContext(TimerContext);

  useEffect(() => {
    getTimers();
    getSelectedTimer(timerId);
  }, []);
  // USAR LO GUARDADO DE REACTSTRAP DE CHECK BUTTON

  return (
    <div className="timersTabsBar">
      {timers.map((timer) => (
        <Button
          variant="link"
          size="lg"
          className="tabButton timerLinkButton"
          key={timer.id}
        >
          <NavLink to={`/timersDetails/${timer.id}`} className="timerLink">
            {timer.title}
          </NavLink>
        </Button>
      ))}
    </div>
  );
};

export default TimersTabs;
