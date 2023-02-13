import { useEffect, useContext } from "react";
import TimerContext from "../../context/timer/TimerContext";

// CONTEXT
// import TimerState from "../../context/timer/TimerState";
// import TestContextInTimerDetails from "./TestContextInTimerDetails";

const TestContextInTimerDetails = () => {
  const { getTimers, getTimer } =
    useContext(TimerContext);

  useEffect(() => {
    getTimers();
    getTimer(1);
  }, []);

  // return <TimerState></TimerState>;
};

export default TestContextInTimerDetails;
