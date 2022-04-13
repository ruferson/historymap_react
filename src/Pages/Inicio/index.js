import React, {  } from "react";
import { Button } from "reactstrap";
import { useLocation } from "wouter";
import "./styles.css";

function Inicio () {

    const [location, setLocation] = useLocation();
    localStorage.setItem("userData", JSON.stringify({ "name":"Rubén", "edad":"19", "rol": "alumno", "user_id":1,  "isLogged":true}));


    return (
        <div className="text-white">
            <h1>Mapas públicos</h1>
            {/**Aquí iría un mapeo de los mapas públicos pero no todos, unos 15 o así. */}
            
        </div>
    );
  }

  export default Inicio;