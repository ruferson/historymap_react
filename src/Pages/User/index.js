import React, { useState } from 'react';
import './styles.css';
import { useLocation } from 'wouter';
import CerrarSesion from '../../components/CerrarSesion';
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
                break;
            case "configUsuario":
                return <ConfigUsuario />
                break;
            default: break;
        }
    }

    return (
        <div className="wrapper">
            <h1>PANEL DE CONTROL</h1>
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