import "./TimersTabs.css"
// import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

const TimersTabs = () => {
  // SIMPLEMENTE CREAR BOTONES LINK QUE CAMBIEN EL PARAMETRO DE LA URL PARA CADA TIMER
  return (
    <div className="timersTabs">
    <Button variant="link" size="lg" className="tabButton">
        <strong>Title Timer</strong>
      </Button>
      </div>
  )
}

export default TimersTabs