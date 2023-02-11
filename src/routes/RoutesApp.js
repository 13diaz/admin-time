import Home from "../views/home/Home.js";
import TimersDetails from "../views/timersDetails/TimersDetails.js";
import NotFound from "../views/notFound/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/timersDetails/:timerId" element={<TimersDetails />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
