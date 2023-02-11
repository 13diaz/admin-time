import "./MainTimer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Form from "react-bootstrap/Form";
import { FormGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocalStorage } from "../../utils/hooks/useLocalStorage";

const MainTimer = () => {
  let { timerId } = useParams();
  let newTimerId = parseInt(timerId);
  const [timers, setTimers] = useLocalStorage("timers", []);
  // CREAR METODO PARA GUARDAR LOS CAMBIOS QUE SE HAGAN DESDE EL MAIN TIMER A EL localStorage

  // PARA ESTO CREAR UNA FUNCION QUE SE EJECUTE EN EL ONCHANGE DE LOS INPUTS QUE TOME EL ID DEL TIMER ACTUAL Y GUARDE LO MODIFICADO POR EJEMPLO EL TITLE TENIENDO EN CUENTA LA EXTRUCTURA E INDICE DEL OBJETO TIMERS, PARA ESTO ULTIMO PROBA SEPARAR EL ARRAY TIMERS DEL localStorage O CADA VEZ QUE SE HAGA UN SETTIMERS SE ENVIEN TODOS LOS INPUTS DEL MAINTIMER, BUSCAR MEJOR SOLUCION

  useEffect(() => {
    const currentTimer = timers.find((timer) => {
      if (timer.id === newTimerId) {
        return timer; // stop searching
      }
    });
    setTitleTimer(currentTimer.title);
    setHoursTimer(currentTimer.hours);
    setMinutesTimer(currentTimer.minutes);
    setSecondsTimer(currentTimer.seconds);
  }, []);

  const [titleTimer, setTitleTimer] = useState("");
  const [hoursTimer, setHoursTimer] = useState("");
  const [minutesTimer, setMinutesTimer] = useState("");
  const [secondsTimer, setSecondsTimer] = useState("");

  /* AQUI PONER LOS INPUTS DE LOS CONTADORES ACTUALES, PARA VISUALIZARLOS Y PODER MODIFICARLOS, ES DECIR PONER LOS INPUTS TAL CUAL COMO SE MUESTRAN PARA LA CREACION PERMITIENDO LO ANTERIORMENTE MENCIONADO,PERO , TENIENDO EN CUENTA ALGUNA PRECAUCION POR SI ACASO OCASIONARA ALGUN ERROR */
  return (
    <FormGroup role="form" className="formGroup">
      <Form.Control
        plaintext
        type="number"
        max="9999"
        placeholder="00"
        aria-label="timerHours"
        aria-describedby="timerHours"
        value={hoursTimer}
        onChange={(e) => setHoursTimer(e.target.value)}
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
        value={minutesTimer}
        onChange={(e) => setMinutesTimer(e.target.value)}
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
        value={secondsTimer}
        onChange={(e) => setSecondsTimer(e.target.value)}
        className="formControl"
      />
    </FormGroup>
  );
};

export default MainTimer;
