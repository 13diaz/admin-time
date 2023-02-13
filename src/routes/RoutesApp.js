import Home from "../views/home/Home.js";
import TimersDetails from "../views/timersDetails/TimersDetails.js";
import NotFound from "../views/notFound/NotFound";
import TestContextInTimerDetails from "../views/timersDetails/TestContextInTimerDetails.js";
import NewTimerModalState from "../context/newTimerModal/NewTimerModalState.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <NewTimerModalState>
              <Home />
            </NewTimerModalState>
          }
        />
        <Route
          path="/home"
          element={
            <NewTimerModalState>
              <Home />
            </NewTimerModalState>
          }
        />
        <Route path="/timersDetails/:timerId" element={<TimersDetails />} />
        <Route path="/*" element={<NotFound />} />
        <Route
          path="/testContextInTimerDetails"
          element={<TestContextInTimerDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
