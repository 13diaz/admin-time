import { FormGroup } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState, useEffect, useContext } from "react";
import { useLocalStorage } from "../../utils/hooks/useLocalStorage";
import NewTimerModalContext from "../../context/newTimerModal/NewTimerModalContext";

const NewTimerModal = () => {
  const { show, getHandle } = useContext(NewTimerModalContext);

  useEffect(() => {
    getHandle();
  }, []);

  // CLOSE MODAL function: necesita el context del set show
  // const handleClose = () => setShow(false);// Para ejecutar este setShow crearlo en el context
  const handleClose = () => getHandle();


  const [timers, setTimers] = useLocalStorage("timers", []);
  const [titleTimer, setTitleTimer] = useState("");
  const [hoursTimer, setHoursTimer] = useState("");
  const [minutesTimer, setMinutesTimer] = useState("");
  const [secondsTimer, setSecondsTimer] = useState("");

  const saveTimer = (e) => {
    const newIdTimer =
      timers.length === 0 ? 1 : timers[timers.length - 1].id + 1;
    const newTitleTimer = parseInt(titleTimer) || "Timer" + newIdTimer;
    const newHoursTimer = parseInt(hoursTimer) || "00";
    const newMinutesTimer = parseInt(minutesTimer) || "00";
    const newSecondsTimer = parseInt(secondsTimer) || "00";
    const newTimer = {
      id: newIdTimer,
      title: newTitleTimer,
      hours: newHoursTimer,
      minutes: newMinutesTimer,
      seconds: newSecondsTimer,
    };
    setTimers([...timers, newTimer]);
    setTitleTimer("");
    setHoursTimer("");
    setMinutesTimer("");
    setSecondsTimer("");

    handleClose();
    e.preventDefault();
  };
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form onSubmit={saveTimer}>
        <Modal.Header closeButton className="headerModalTimerConfig">
          <Modal.Title className="modalTitle">
            <FormGroup role="form">
              <Form.Control
                type="text"
                autoFocus
                plaintext
                placeholder="Timer Title"
                className="inputTimerTitle"
                value={titleTimer}
                onChange={(e) => {
                  setTitleTimer(e.target.value);
                  e.target.value = "";
                }}
              />
            </FormGroup>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bodyModalTimerConfig">
          <Form.Label className="subtitleTimerConfig">
            Here config your timer
          </Form.Label>
          <Row className="rowTimerInputs">
            <Col sm={12}>
              <FormGroup role="form">
                <InputGroup>
                  <Form.Control
                    type="number"
                    max="9999"
                    placeholder="00"
                    aria-label="timerHours"
                    aria-describedby="timerHours"
                    value={hoursTimer}
                    onChange={(e) => setHoursTimer(e.target.value)}
                  />
                  <InputGroup.Text id="timerHours">Hrs</InputGroup.Text>
                  <Form.Control
                    type="number"
                    max="9999"
                    placeholder="00"
                    aria-label="timerMinutes"
                    aria-describedby="timerMinutes"
                    value={minutesTimer}
                    onChange={(e) => setMinutesTimer(e.target.value)}
                  />
                  <InputGroup.Text id="timerMinutes">Min</InputGroup.Text>
                </InputGroup>
              </FormGroup>
            </Col>
            <Col sm={4} className="colSecondsInput">
              <FormGroup role="form">
                <InputGroup>
                  <Form.Control
                    type="number"
                    max="9999"
                    placeholder="00"
                    aria-label="timerSeconds"
                    aria-describedby="timerSeconds"
                    value={secondsTimer}
                    onChange={(e) => setSecondsTimer(e.target.value)}
                  />
                  <InputGroup.Text id="timerSeconds">Sec</InputGroup.Text>
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="footerModalTimerConfig">
          <Row className="rowFooter">
            <Col sm={10} className="colTextFooter">
              <p className="text-muted textFooter">
                You can go back in this configuration
              </p>
            </Col>
            <Col sm={2} className="colSaveButtonFooter">
              <FormGroup role="form">
                <Button
                  type="submit"
                  variant="success"
                  className="saveTimerButton"
                >
                  Save
                </Button>
              </FormGroup>
            </Col>
          </Row>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default NewTimerModal;
