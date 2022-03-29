import React, { useState } from "react";
import { Button } from "reactstrap";
import "./styles.css";
import IniciarSesion from '../../components/IniciarSesion'
import Registrarse from "../../components/Registrarse";
import { useLocation } from "wouter";

function Session () {

  const [location, setLocation] = useLocation();
  const [modo, setModo] = useState("login")

  function sesiones(mode){
      if (mode==="login"){
          return <IniciarSesion></IniciarSesion>
      } else  {
          return <Registrarse></Registrarse>
      }
  }

    return (
        <div className="wrapper">
            <div className="container p-3 my-3 bg-dark text-white">
                <div className="row">
                    <div className="col-8">
                        <h1>Sesión</h1>
                    </div>
                    <div className="col-4">
                        <Button className="float-right" onClick={()=>{setLocation("/")}}>Inicio</Button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8"/>
                    <div className="col-4">
                        <Button className="text-center mb-4 float-right" color="success" onClick={()=>setModo("login")}>Iniciar sesión</Button>
                        <Button className="text-center mb-4 float-right mr-3" color="success" onClick={()=>setModo("singup")}>Registrarse</Button>
                    </div>
                </div>
            </div>           
            {sesiones(modo)}
        </div>
    );
  }

  export default Session;