import TimerState from "../context/timer/TimerState";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/home/Home.js";
import NewTimerModalState from "../context/newTimerModal/NewTimerModalState.js";
import TimersDetails from "../views/timersDetails/TimersDetails.js";
import NotFound from "../views/notFound/NotFound";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <TimerState>
              <NewTimerModalState>
                <Home />
              </NewTimerModalState>
            </TimerState>
          }
        />
        <Route path="/timersDetails/:timerId" element={<TimersDetails />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
