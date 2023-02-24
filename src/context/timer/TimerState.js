// REQUIRED FOR CONTEXT STATE
import { useReducer } from "react";
import TimerReducer from "./TimerReducer";
import TimerContext from "./TimerContext";

// REQUIRED FOR ADDITIONAL PROCESS
import { useLocalStorage } from "../../utils/hooks/useLocalStorage";

const TimerState = (props) => {
  const defaultSelectedTimer = {
    existence: null,
    id: "",
    title: "",
    hours: "",
    minutes: "",
    seconds: "",
  };

  const initialState = {
    timers: [],
    selectedTimer: defaultSelectedTimer,
  };

  const [state, dispatch] = useReducer(TimerReducer, initialState);
  // CREAR UNOS MÉTODOS O UNA FORMA PARA ENVIAR EL ID O UN ARRAY CON LOS IDS DE LOS CONTADOR QUE SE QUIERAN MODIFICAR Y GUARDAR LOS CAMBIOS
  const [storagedTimers, setStoragedTimers] = useLocalStorage("timers", []);

  const setTimers = (newTimersArray) => {
    try {
      dispatch({
        type: "SET_TIMERS",
        payload: setStoragedTimers(newTimersArray),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const getTimers = () => {
    try {
      dispatch({
        type: "GET_TIMERS",
        payload: storagedTimers,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const getSelectedTimer = (timerId) => {
    const newTimerId = parseInt(timerId);

    let currentTimer = null;

    currentTimer = storagedTimers.find((timer) => timer.id === newTimerId);

    const existence = storagedTimers.some((timer) => timer.id === newTimerId);

    // IF THESE TIMER DOESN'T EXIST
    if (existence === false) {
      defaultSelectedTimer.existence = false;
      currentTimer = defaultSelectedTimer;
    }

    try {
      dispatch({
        type: "GET_SELECTEDTIMER",
        payload: currentTimer,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const setHoursSelectedTimers = (hours) => {
    try {
      dispatch({
        type: "SET_HOURSSELECTEDTIMER",
        payload: props,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const setMinutesSelectedTimers = (minutes) => {
    try {
      dispatch({
        type: "SET_MINUTESSELECTEDTIMER",
        payload: props,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const setSecondsSelectedTimers = (seconds) => {
    try {
      dispatch({
        type: "SET_SECONDSSELECTEDTIMER",
        payload: props,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TimerContext.Provider
      value={{
        timers: state.timers,
        setTimers,
        getTimers,
        selectedTimer: state.selectedTimer,
        getSelectedTimer,
        setHoursSelectedTimers,
        setMinutesSelectedTimers,
        setSecondsSelectedTimers,
      }}
    >
      {props.children}
    </TimerContext.Provider>
  );
};

export default TimerState;
