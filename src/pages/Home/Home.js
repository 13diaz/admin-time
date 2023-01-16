import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
// import { useLocalStorage } from "../../hooks/useLocalStorage";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import { Link } from "react-router-dom";

function Home() {
  // const [counters, setCounters] = useLocalStorage("numOfCounters", 1);

  return (
    <div className="Home">
      <p>Select the number of counters you want to have:</p>

      <p className="text-muted">You can go back in this configuration</p>
    </div>
  );
}

export default Home;
