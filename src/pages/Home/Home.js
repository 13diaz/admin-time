import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Home.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
// import { useLocalStorage } from "../../hooks/useLocalStorage";
// import { Link } from "react-router-dom";

function Home() {
  // const [counters, setCounters] = useLocalStorage("numOfCounters", 1);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /* Icons that when rotated 90 ° will be to modify the layout
  <Button className="changeLayout" variant="link" size="lg">
    <i className="bi bi-layout-three-columns"></i>
    <i className="bi bi-layout-split"></i>
    <i className="bi bi-grid-3x3"></i>
  </Button>
  
  estilos para posicionar el boton que cambiara el layout, pero falta crear las querys que roten y condicionen que icono y como mostrarlo
  .changeLayout{
  margin: 0% auto;
  padding: 0% auto;
  font-size: xx-large; 
  text-decoration: none;
  position: absolute;
  right: 3%;
  top: 3%;
}
  La manera de hacer el cambio de layout es cambiar la direccion del componente "ListGroup" de horizontal a vertical o crear varios para simular una grilla
  */

  /* LO SIGUIENTE ES CREAR UNA FUNCION QUE RECIBA EL CONTADOR DEL MODAL,
  LO MUESTRE EN LA SECTION DEL MAIN ORGANIZADOS PREFERIBLEMENTE COMO LISTOFGRUPS */

  return (
    <div className="home">
      <p>Select the number of counters you want to have:</p>
      <div className="main">

        {/* Modal for configurate counters */}
        <Modal className="modalCounterConfiguration"
          show={show}
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <Form.Group className="mb-3" controlId="formTitle">
                <Form.Control type="text" plaintext placeholder="Counter title" />
              </Form.Group>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>AQUI VA EL FORM PARA INGRESAR EL TIEMPO DEL CONTADOR</Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleClose}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Button for create new counter */}
        <Button
          onClick={handleShow}
          className="createCounterButton"
          variant="success"
          size="lg"
        >
          <i className="bi bi-plus-lg"></i>
        </Button>
      </div>
      <p className="text-muted">You can go back in this configuration</p>
    </div>
  );
}

export default Home;
