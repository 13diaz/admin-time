import { useReducer } from "react";
import TimerReducer from "./TimerReducer";
import TimerContext from "./TimerContext";
import { useLocalStorage } from "../../utils/hooks/useLocalStorage";

const TimerState = (props) => {
  const initialState = {
    timers: [],
  };

  const [state, dispatch] = useReducer(TimerReducer, initialState);
  const [storagedTimers, setStoragedTimers] = useLocalStorage("timers", []);

  const getTimers = () => {
    dispatch({
      type: "GET_TIMERS",
      payload: storagedTimers,
    });
  };

  const setTimers = (newTimersArray) => {
    // console.log("el nuevo array se guarda en LS:");
    // console.log(newTimersArray);
    dispatch({
      type: "SET_TIMERS",
      payload: setStoragedTimers(newTimersArray),
    });
  };

  return (
    <TimerContext.Provider
      value={{
        timers: state.timers,
        getTimers,
        setTimers,
      }}
    >
      {props.children}
    </TimerContext.Provider>
  );
};

export default TimerState;
