import "./ResetButton.css";
import { Button } from "react-bootstrap";
const ResetButton = () => {
  return (
    <div className="resetButton-container">
      <div className="flex-item-button"></div>
      <Button variant="link" className="button resetButton">
        <i className="bi bi-arrow-counterclockwise"></i>
      </Button>
    </div>
  );
};

export default ResetButton;
