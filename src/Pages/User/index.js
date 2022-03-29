import React, { useState } from 'react';
import './styles.css';
import { useLocation } from 'wouter';
import { Button } from 'reactstrap';
import MisMapas from '../../components/MisMapas'
import ConfigUsuario from '../../components/ConfigUsuario'

function User() {

    const [location, setLocation] = useLocation();
    const [modo, setModo] = useState("misMapas");


    localStorage.setItem("userData", JSON.stringify({ "name":"ruben", "edad":"19", "isLogged":true}));
   
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

    return (
        <div className="wrapper">
            <div className="wrapper container p-3 my-3 bg-dark text-white">
                <h1>Panel de Control <Button className="float-right btn-warning" onClick={()=>{setLocation("/")}}>Inicio</Button></h1>
            </div>
            <div>
                <p>¡Bienvenido, {JSON.parse(localStorage.getItem("userData")).name}!</p>
                <Button onClick={()=>setModo("misMapas")}>Mis Mapas</Button>
                <Button onClick={()=>setModo("configUsuario")}>Configuración de Usuario</Button>
                {segunModo()}
            </div>
        </div>
    );
}

export default User;