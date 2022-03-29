import React from 'react';
import './styles.css';
import { useLocation } from 'wouter';
import CerrarSesion from '../../components/CerrarSesion';
import { Button } from 'reactstrap';

function User() {

    const [location, setLocation] = useLocation();


    localStorage.setItem("userData", JSON.stringify({ "name":"ruben", "edad":"19", "isLogged":true}));
   
    if (!JSON.parse(localStorage.getItem("userData")).isLogged){
        setLocation("/session")
    }


    return (
        <div>
            <h1>PANEL DE CONTROL</h1>
            <div>
                <p>¡Bienvenido, {JSON.parse(localStorage.getItem("userData")).name}! <CerrarSesion/> </p>
                <Button onClick={() => setLocation("/crear")}>CREAR</Button>
                <Button onClick={() => setLocation("/ver")}>VER</Button>
                
            </div>
        </div>
    );
}

export default User;