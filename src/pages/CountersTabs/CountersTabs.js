import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import "./CountersTabs.css";
import React, { useState, useEffect } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

function CountersTabs() {

  const [numOfCounters] = useLocalStorage("numOfCounters", 1);
  
  const [tab, setTab] = useState([]);
  
  function createTabs () {
    for (let i=0; i = numOfCounters; i++) { setTab([i]) }
  } 
  
  useEffect(() => {
    createTabs();
  }, []);

  console.log(tab);
  
  // USAR EL EFECTO Y MANDARLE UN PROP PARA QUE CAMBIE EL ESTADO SEGUN LA PESTAÑA
  /* CONSULTAR AL STORAGE LA CANTIDAD DE CONTADORES QUE SE HAN CREADO
 PARA CREAR LAS PESTAÑAS Y PAGINAS DEPENDIENDO DE ESO */
  return (
    <Nav
      className="nav"
      variant="pills"
      defaultActiveKey={tab}
      onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link eventKey={tab}>Active</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default CountersTabs;
