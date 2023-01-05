import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Home.css";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Link } from "react-router-dom";

function Home() {
  const [count, setCount] = useLocalStorage("numOfCounters", 1);

  return (
    <div className="Home">
      <p>Select the number of counters you want to have:</p>
      <Button
        onClick={() => {
          if (count < 9) {
            setCount(count + 1);
          }
        }}
        className="buttons"
        variant="primary"
        size="lg"
      >
        Up
      </Button>
      <br />
      <Form>
        <Form.Group>
          <Form.Control
            readOnly
            type="number"
            className="countersInput"
            value={count}
          />
        </Form.Group>
      </Form>
      <br />
      <Button
        onClick={() => {
          if (count > 1) {
            setCount(count - 1);
          }
        }}
        className="buttons"
        variant="primary"
        size="lg"
      >
        Down
      </Button>
      <br />
      <Link to={"/countersTabs"}>
        <Button className="btnStart" variant="outline-dark" size="lg">
          Start
        </Button>
      </Link>
      <br />
      <p className="text-muted">You can go back in this configuration</p>
    </div>
  );
}

export default Home;
