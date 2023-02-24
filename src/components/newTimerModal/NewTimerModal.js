import styles from "./NewTimerModal.module.scss";
import mainStyles from "../../styles/main.module.scss";
import { FormGroup } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useContext, useEffect, useState } from "react";
import TimerContext from "../../context/timer/TimerContext";
import NewTimerModalContext from "../../context/newTimerModal/NewTimerModalContext";

const NewTimerModal = () => {
  const { show, closeModal } = useContext(NewTimerModalContext);

  const { timers, getTimers, setTimers } = useContext(TimerContext);

  useEffect(() => {
    getTimers();
  }, [timers]);

  const [titleTimer, setTitleTimer] = useState("");
  const [hoursTimer, setHoursTimer] = useState("");
  const [minutesTimer, setMinutesTimer] = useState("");
  const [secondsTimer, setSecondsTimer] = useState("");

  const saveTimer = (e) => {
    const newIdTimer =
      timers.length === 0 ? 1 : timers[timers.length - 1].id + 1;
    const newTitleTimer = titleTimer || "Timer" + newIdTimer;
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

    e.preventDefault();
    closeModal();
  };

  return (
    <Modal
      show={show}
      onHide={closeModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={styles.modalTimerConfig}
    >
      <Form onSubmit={saveTimer}>
        <Modal.Header closeButton>
          <Modal.Title>
            <FormGroup role="form">
              <Form.Control
                type="text"
                autoFocus
                plaintext
                placeholder="Timer Title"
                value={titleTimer}
                onChange={(e) => {
                  setTitleTimer(e.target.value);
                  e.target.value = "";
                }}
              />
            </FormGroup>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalTimerConfig_body}>
          <Form.Label>
            Here config your timer
          </Form.Label>
          <FormGroup role="form" className={styles.modalTimerConfig_body_inputsContainer}>
            <InputGroup className={styles.modalTimerConfig_body_inputsContainer_input}>
              <Form.Control
                type="number"
                max="9999"
                placeholder="00"
                aria-label="timerHours"
                aria-describedby="timerHours"
                value={hoursTimer}
                onChange={(e) => setHoursTimer(e.target.value)}
              />
              <InputGroup.Text id="timerHours">H</InputGroup.Text>
            </InputGroup>
            <InputGroup className={styles.modalTimerConfig_body_inputsContainer_input}>
              <Form.Control
                type="number"
                max="9999"
                placeholder="00"
                aria-label="timerMinutes"
                aria-describedby="timerMinutes"
                value={minutesTimer}
                onChange={(e) => setMinutesTimer(e.target.value)}
              />
              <InputGroup.Text>M</InputGroup.Text>
            </InputGroup>
            <InputGroup
              className={styles.modalTimerConfig_body_inputsContainer_input}
            >
              <Form.Control
                type="number"
                max="9999"
                placeholder="00"
                aria-label="timerSeconds"
                aria-describedby="timerSeconds"
                value={secondsTimer}
                onChange={(e) => setSecondsTimer(e.target.value)}
              />
              <InputGroup.Text>S</InputGroup.Text>
            </InputGroup>
          </FormGroup>
        </Modal.Body>
        <Modal.Footer className={styles.modalTimerConfig_footer}>
          <div className="text-muted">
            You can go back in this configuration
          </div>
          <FormGroup
            role="form"
            className={styles.modalTimerConfig_footer_saveButtonContainer}
          >
            <Button
              type="submit"
              variant="success"
              size="lg"
              className={mainStyles.specialButton}
            >
              Save
            </Button>
          </FormGroup>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default NewTimerModal;
