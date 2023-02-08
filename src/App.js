import "./App.css";
import Home from "./pages/home/Home.js";
import TimersDetails from "./pages/timersDetails/TimersDetails.js";
import NotFound from "./pages/notFound/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/timersDetails/:timerId" element={<TimersDetails />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
