import "./TimersTabs.css";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useLocalStorage } from "../../utils/hooks/useLocalStorage";

const TimersTabs = () => {
  const [timers] = useLocalStorage("timers", []);

  // USAR LO GUARDADO DE REACTSTRAP DE CHECK BUTTON

  return (
    <div className="timersTabsBar">
      {timers.map((timer) => (
        <Button variant="link" size="lg" className="tabButton timerLinkButton" key={timer.id}>
          <NavLink to={`/timersDetails/${timer.id}`} className="timerLink">
            {timer.title}
          </NavLink>
        </Button>
      ))}
    </div>
  );
};

export default TimersTabs;
