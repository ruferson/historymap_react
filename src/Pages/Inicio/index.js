import React, {  } from "react";
import { Button } from "reactstrap";
import { useLocation } from "wouter";
import "./styles.css";

function Inicio () {

    const [location, setLocation] = useLocation();


    return (
        <div className="wrapper container p-3 my-3 bg-dark text-white">
            <h1>HistoryMap <Button className="float-right btn-warning" onClick={()=>{setLocation("/dashboard")}}>Panel de control</Button></h1>
            
        </div>
    );
  }

  export default Inicio;