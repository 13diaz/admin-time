import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ListGroup from "react-bootstrap/ListGroup";

const ListTimersPreview = ({ props }) => {
  let contentList;
  if (props.length === 0) {
    // HERE WILL HAVE A COMPONENT TO SHOW THAT HAVE NOT TIMERS YET
    contentList = <h1>You don't have timers yet</h1>;
  } else {
    contentList = props.map((timer) => (
      <ListGroup.Item key={timer.id}>{timer.title}</ListGroup.Item>
    ));
  }

  return <ListGroup className="listTimersPreview">{contentList}</ListGroup>;
};

export default ListTimersPreview;
