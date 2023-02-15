import { GET_TIMERS } from "./types";
import { SET_TIMERS } from "./types";

const TimerReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_TIMERS:
      return {
        ...state,
        timers: payload,
      };
    case SET_TIMERS:
      return {
        ...state,
        timers: payload,
      };
    default:
      return state;
  }
};

export default TimerReducer;