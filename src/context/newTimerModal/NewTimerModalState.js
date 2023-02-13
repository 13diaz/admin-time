import { useReducer } from "react";
import NewTimerModalReducer from "./NewTimerModalReducer";
import NewTimerModalContext from "./NewTimerModalContext";

const NewTimerModalState = (props) => {
  const initialState = {
    show: false,
  };

  // EXAMPLE WITH USESTATE
  // const [show, setShow] = useState(false);

  const [state, dispatch] = useReducer(NewTimerModalReducer, initialState);

  const getHandle = () => {
    // const res = timers;
    console.log("res");
  };

  return (
    <NewTimerModalContext.Provider
      value={{
        show: state.show,
        getHandle,
      }}
    >
      {props.children}
    </NewTimerModalContext.Provider>
  );
};

export default NewTimerModalState;
