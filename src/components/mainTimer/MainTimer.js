import "./MainTimer.css";
import Form from "react-bootstrap/Form";
import { FormGroup } from "react-bootstrap";

// CONTEXT
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import TimerContext from "../../context/timer/TimerContext";
import { useNavigate } from "react-router-dom";

const MainTimer = () => {
  let { timerId } = useParams();

  const {
    selectedTimer,
    getSelectedTimer,
    setHoursSelectedTimers,
    setMinutesSelectedTimers,
    setSecondsSelectedTimers,
  } = useContext(TimerContext);

  // CREAR MÉTODO PARA GUARDAR LOS CAMBIOS QUE SE HAGAN DESDE EL MAIN TIMER A EL localStorage
  // PARA ESTO CREAR UNA FUNCIÓN QUE SE EJECUTE EN EL ONCHANGE DE LOS INPUTS QUE TOME EL ID DEL TIMER ACTUAL Y GUARDE LO MODIFICADO POR EJEMPLO EL TITLE TENIENDO EN CUENTA LA ESTRUCTURA E INDICE DEL OBJETO TIMERS, PARA ESTO ULTIMO PROBA SEPARAR EL ARRAY TIMERS DEL localStorage O CADA VEZ QUE SE HAGA UN SETTIMERS SE ENVÍEN TODOS LOS INPUTS DEL MAINTIMER, BUSCAR MEJOR SOLUCIÓN
  // PARA FINALIZAR ESTO TOMAR EL SELECTED TIMER ACTUALIZARLO EN EL CONTEXTO Y YA DESDE ALLÍ MANDARLO TAMBIÉN AL LOCAL STORAGE CON EL HOOK DEL TIMER STATE, PERO ANTES DE ESO CREAR LOS MÉTODOS PARA MANEJAR LOS INPUTS DE MANERA CONTROLADA ES DECIR PROBAR A CAMBIAR LOS MÉTODOS QUE ESTÁN EL FORMULARIO POR MÉTODOS QUE VALLAN DIRECTO AL CONTEXTO DE SELECTEDTIMER Y LO ACTUALICEN DIRECTAMENTE

  /* CREAR ESTO DEL COMMENT PARA CONTINUAR REVISAR ESTOS ARCHIVOS EN ESTE ORDEN:
  - TIMER STATE
  - TIMER REDUCER 
  - ESTE ARCHIVO */

  let navigate = useNavigate();

  useEffect(() => {
    getSelectedTimer(timerId);
    // REDIRECTION FOR INVALID PARAM FOR THE URL AND UNREGISTERED TIMER
    if (selectedTimer.existence === false) {
      navigate("/notFound:" + timerId);
    }
  }, []);

  return (
    <FormGroup role="form" className="formGroup">
      <Form.Control
        plaintext
        type="number"
        max="9999"
        placeholder="00"
        aria-label="timerHours"
        aria-describedby="timerHours"
        value={selectedTimer.hours}
        onChange={(e) => setHoursSelectedTimers(e.target.value)}
        className="formControl"
      />
      :
      <Form.Control
        type="number"
        plaintext
        max="9999"
        placeholder="00"
        aria-label="timerMinutes"
        aria-describedby="timerMinutes"
        value={selectedTimer.minutes}
        onChange={(e) => setMinutesSelectedTimers(e.target.value)}
        className="formControl"
      />
      :
      <Form.Control
        type="number"
        plaintext
        max="9999"
        placeholder="00"
        aria-label="timerSeconds"
        aria-describedby="timerSeconds"
        value={selectedTimer.seconds}
        onChange={(e) => setSecondsSelectedTimers(e.target.value)}
        className="formControl"
      />
    </FormGroup>
  );
};

export default MainTimer;
