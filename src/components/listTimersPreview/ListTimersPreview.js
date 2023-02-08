import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ListGroup from "react-bootstrap/ListGroup";
import "./ListTimersPreview.css";
import { Link } from "react-router-dom";

const ListTimersPreview = ({ props }) => {
  let contentList;
  if (props.length === 0) {
    // HERE WILL HAVE A COMPONENT TO SHOW THAT HAVE NOT TIMERS YET
    contentList = <h1>You don't have timers yet</h1>;
  } else {
    contentList = props.map((timer) => (
      <Link to={`/timersDetails/${timer.id}`} className="timerLink" key={timer.id} >
        <ListGroup.Item className="listItem">
          <p className="titleTimer">{timer.title}</p>
          <p className="timerPreview">{timer.hours} : {timer.minutes} : {timer.seconds}</p>
        </ListGroup.Item>
      </Link>
    ));
  }

  return <ListGroup className="listTimersPreview">{contentList}</ListGroup>;
};

export default ListTimersPreview;
