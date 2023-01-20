import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import Tab from "react-bootstrap/Tab";
import "./Home.css";
import { useState } from "react";
// import { useLocalStorage } from "../../hooks/useLocalStorage";
// import { Link } from "react-router-dom";

function Home() {  
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

  const [counters, setCounters] = useState([]);

  const saveCounter = () => {
    // AQUI RECOGER CADA UNO DE LOS VALUES DE LOS INPUTS Y UNIRLOS PARA PUSHEARLOS EN EL ARRAY DE COUNTERS
    console.log("saveFree");
  };

  return (
    <div className="home">
      <p>Select the number of counters you want to have:</p>
      <div className="main">
        {/* Modal for configurate counters */}
        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton className="headerModalCounterConfig">
            <Modal.Title className="modalTitle">
              <Form.Control
                type="text"
                autoFocus
                plaintext
                placeholder="Counter Title"
                className="inputCounterTitle"
              />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="bodyModalCounterConfig">
            <Form.Label className="subtitleCounterConfig">
              Config your timer
            </Form.Label>
            <Row className="rowTimerInputs">
              <Col sm={12}>
                <InputGroup>
                  <Form.Control
                    type="number"
                    max="9999"
                    placeholder="00"
                    aria-label="counterHours"
                    aria-describedby="counterHours"
                  />
                  <InputGroup.Text id="counterHours">Hrs</InputGroup.Text>
                  <Form.Control
                    type="number"
                    max="9999"
                    placeholder="00"
                    aria-label="counterMinutes"
                    aria-describedby="counterMinutes"
                  />
                  <InputGroup.Text id="counterMinutes">Min</InputGroup.Text>
                </InputGroup>
              </Col>
              <Col sm={4} className="colSecondsInput">
                <InputGroup>
                  <Form.Control
                    type="number"
                    max="9999"
                    placeholder="00"
                    aria-label="counterSeconds"
                    aria-describedby="counterSeconds"
                  />
                  <InputGroup.Text id="counterSeconds">Sec</InputGroup.Text>
                </InputGroup>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer className="footerModalCounterConfig">
            <Row className="rowFooter">
              <Col sm={10} className="colTextFooter">
                <p className="text-muted textFooter">
                  You can go back in this configuration
                </p>
              </Col>
              <Col sm={2} className="colSaveButtonFooter">
                <Button
                  variant="success"
                  onClick={saveCounter}
                  className="saveCounterButton"
                >
                  Save
                </Button>
              </Col>
            </Row>
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
    </div>
  );
}

export default Home;
