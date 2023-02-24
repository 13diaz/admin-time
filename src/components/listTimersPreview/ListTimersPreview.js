import ListGroup from "react-bootstrap/ListGroup";
import styles from "./ListTimersPreview.module.scss";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import TimerContext from "../../context/timer/TimerContext";

const ListTimersPreview = () => {
  const { timers, getTimers } = useContext(TimerContext);

  useEffect(() => {
    getTimers();
  }, []);

  // HERE WILL HAVE A COMPONENT TO SHOW THAT HAVE NOT TIMERS YET
  if (!timers || timers.length === 0) {
    return (
      <ListGroup>
        <h1>You don't have timers yet</h1>
      </ListGroup>
    );
  }

  if (timers.length > 0) {
    const contentList = timers.map((timer) => (
      <Link
        to={`/timersDetails/${timer.id}`}
        className={styles.timerLink}
        key={timer.id}
      >
        <ListGroup.Item className={styles.timerLink_listItem}>
          <div className={styles.timerLink_listItem_title}>{timer.title}</div>
          <div className={styles.timerLink_listItem_timerPreview}>
            {timer.hours} : {timer.minutes} : {timer.seconds}
          </div>
        </ListGroup.Item>
      </Link>
    ));
    return <ListGroup>{contentList}</ListGroup>;
  }
};

export default ListTimersPreview;
