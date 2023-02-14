import { useReducer } from "react";
import NewTimerModalReducer from "./NewTimerModalReducer";
import NewTimerModalContext from "./NewTimerModalContext";

const NewTimerModalState = (props) => {
  const initialState = {
    show: false,
  };

  const [state, dispatch] = useReducer(NewTimerModalReducer, initialState);

  const showModal = () => {
    dispatch({
      type: "SHOW_MODAL",
      payload: true,
    });
  };

  const closeModal = () => {
    dispatch({
      type: "CLOSE_MODAL",
      payload: false,
    });
  };

  return (
    <NewTimerModalContext.Provider
      value={{
        show: state.show,
        showModal,
        closeModal,
      }}
    >
      {props.children}
    </NewTimerModalContext.Provider>
  );
};

export default NewTimerModalState;
