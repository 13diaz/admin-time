import "./App.css";
import Home from "./pages/Home/Home.js";
import CountersTabs from "./pages/CountersTabs/CountersTabs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Admin Time App</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countersTabs" element={<CountersTabs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
