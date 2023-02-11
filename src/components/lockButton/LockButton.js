import "./LockButton.css";
import { Button } from "react-bootstrap";

const LockButton = () => {
  /* <i class="bi bi-unlock"></i> */
  // ICONO PARA CAMBIAR CUANDO ESTE ACTIVO

  return (
    <div className="lockButton-container">
      <div className="flex-item-button"></div>
      <Button variant="link" className="button lockButton">
        <i className="bi bi-lock"></i>
      </Button>
    </div>
  );
};

export default LockButton;
