import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Button from "react-bootstrap/Button";

const MenuButton = () => {
  return (
    <Button variant="link" className="button tabButton">
      <i className="bi bi-three-dots-vertical"></i>
    </Button>
  );
};

export default MenuButton;
