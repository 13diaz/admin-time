import { SHOW_MODAL, CLOSE_MODAL } from "./types";

const NewTimerModalReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case SHOW_MODAL:
      return {
        ...state,
        show: payload,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        show: payload,
      };
    default:
      return state;
  }
};

export default NewTimerModalReducer;
