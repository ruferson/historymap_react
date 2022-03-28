import React from 'react';
import './styles.css';
import { useLocation } from 'wouter';
import CerrarSesion from '../../components/CerrarSesion';

function User() {

    const [location, setLocation] = useLocation();


    localStorage.setItem("userData", JSON.stringify({ "name":"ruben", "edad":"19", "isLogged":false}));
   
    if (!JSON.parse(localStorage.getItem("userData")).isLogged){
        setLocation("/login")
    }


    return (
        <div>
            <h1>PANEL DE CONTROL</h1>
            <div>
                <p>¡Bienvenido, {JSON.parse(localStorage.getItem("userData")).name}! <CerrarSesion/> </p>
                <button onClick={() => setLocation("/Escribir")}>CREAR</button>
                <button onClick={() => setLocation("/Ver")}>VER</button>
                
            </div>
        </div>
    );
}

export default User;