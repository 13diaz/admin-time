import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Button variant="link" className="tabButton button">
      <Link to="/" className="labelButton">
        <i className="bi bi-arrow-left"></i>
      </Link>
    </Button>
  );
};

export default BackButton;
