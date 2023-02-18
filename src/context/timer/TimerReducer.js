import { SET_TIMERS } from "./types";
import { GET_TIMERS } from "./types";
import { GET_SELECTEDTIMER } from "./types";
import { SET_HOURSSELECTEDTIMER } from "./types";
import { SET_MINUTESSELECTEDTIMER } from "./types";
import { SET_SECONDSSELECTEDTIMER } from "./types";


const TimerReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_TIMERS:
      return {
        ...state,
        timers: payload,
      };
    case GET_TIMERS:
      return {
        ...state,
        timers: payload,
      };
    case GET_SELECTEDTIMER:
      return {
        ...state,
        selectedTimer: payload,
      };
    case SET_HOURSSELECTEDTIMER:
      return {
        ...state,
        selectedTimer: payload,
      };
    case SET_MINUTESSELECTEDTIMER:
      return {
        ...state,
        selectedTimer: payload,
      };
    case SET_SECONDSSELECTEDTIMER:
      return {
        ...state,
        selectedTimer: payload,
      };
    default:
      return state;
  }
};

export default TimerReducer;