/* // import { useReducer } from "react";
// import TimerReducer from "./TimerReducer";
import TimerContext from "./TimerContext";
// import GetTimers from "../../components/getTimers/GetTimers";
// import { useLocalStorage } from "../../utils/hooks/useLocalStorage";

const TimerState = (props) => {
  const initialState = {
    timers: [],
    timerSelected: null,
  };

  // REQUEST TO LOCAL STORAGE WIDTH SERVER FOR EXAMPLE
  // const [timers, setTimers] = useLocalStorage("timers", []);

  // const [state, dispatch] = useReducer(TimerReducer, initialState);

  // USE ASYNC AWAIT IF YOU NEED HAS A HTTP Request IN AXIOS O FETCH
  // const itemName = "timers";
  // const initialValue = [];
  const getTimers = () => {
    // const res = <GetTimers props={itemName, initialValue} />
    // const res = timers;
    console.log("res");
  };

  // USE ASYNC AWAIT IF YOU NEED HAS A HTTP Request IN AXIOS O FETCH
  const getTimer = (id) => {
    // const res = timers[id];
    console.log("res");
  };

  return (
    <TimerContext.Provider
      value={{
        timers: state.timers,
        timerSelected: state.timerSelected,
        getTimers,
        getTimer,
      }}
    >
      {props.children}
    </TimerContext.Provider>
  );
};

export default TimerState; */
