import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./styles.css";
import Login from '../../components/Login'
import Singup from "../../components/Singup";

function Session () {

  
  const [modo, setModo] = useState("login")

  function sesiones(mode){
      if (mode==="login"){
          return <Login></Login>
      } else  {
          return <Singup></Singup>
      }
  }

    return (
        <div className="wrapper">
            <h1>Sesión
                <Button
                className="text-center mb-4"
                color="success"
                onClick={()=>setModo("login")}
                >
                Iniciar sesión
                </Button>
                <Button
                className="text-center mb-4"
                color="success"
                onClick={()=>setModo("singup")}
                >
                Registrarse
                </Button>
            </h1>
            {sesiones(modo)}
        </div>
    );
  }

  export default Session;