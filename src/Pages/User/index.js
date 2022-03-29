import React, { useState } from 'react';
import './styles.css';
import { useLocation } from 'wouter';
import { Button } from 'reactstrap';
import MisMapas from '../../components/MisMapas'
import ConfigUsuario from '../../components/ConfigUsuario'

function User() {

    const [location, setLocation] = useLocation();
    const [modo, setModo] = useState("misMapas");
   
    if (!JSON.parse(localStorage.getItem("userData")).isLogged){
        setLocation("/session")
    }

    function segunModo(){
        switch (modo) {
            case "misMapas":
                return <MisMapas />
            case "configUsuario":
                return <ConfigUsuario />
            default: break;
        }
    }

    function serAlumno(){
        localStorage.setItem("userData", JSON.stringify({ "name":"Rubén", "edad":"19", "rol": "alumno", "isLogged":true}));
    }

    function serProfesor(){
        localStorage.setItem("userData", JSON.stringify({ "name":"Rubén", "edad":"19", "rol": "profesor", "isLogged":true}));
    }

    return (
        <div className="wrapper">
            <div className="container p-3 my-3 bg-dark text-white">
                <h1>Panel de Control <Button className="float-right btn-warning" onClick={()=>{setLocation("/")}}>Inicio</Button></h1>
            </div>
            <Button onClick={serAlumno}>Ser alumno</Button>
            <Button onClick={serProfesor}>Ser profesor</Button>
            <div className="row">
                <div className="col-12">
                    <p>¡Bienvenido, {JSON.parse(localStorage.getItem("userData")).name}!</p>
                </div>
                <div className="ml-3">
                    <Button onClick={()=>setModo("misMapas")}>Mis Mapas</Button>
                </div>
                <div className="ml-3">
                    <Button onClick={()=>setModo("configUsuario")}>Configuración de Usuario</Button>
                </div>
                <div className="col-6" />
            </div>
                <br /><br />
                {segunModo()}
        </div>
    );
}

export default User;