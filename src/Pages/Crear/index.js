import React, { useState } from 'react';
import './styles.css';
import Mapa from '../../components/Mapa';
import Escribir from '../../components/Escribir';
import { Button } from 'reactstrap';
import { useLocation } from 'wouter';

function Crear() {

    const [location, setLocation] = useLocation();
    const [eventoID, setEventoID] = useState(null);
    const [crear, setCrear] = useState(false);
    const [mapaID, setMapaID] = useState(1)

    if (JSON.parse(localStorage.getItem("userData")).rol==="profesor"){

        //const [id, setID] = useState(props.id);
        
        function cambiarEvento(event){
            let id = event.target.options.id;
            if (id>2){
                id=2;
            }  
            setEventoID(id);
        }

        function sendMarcador(x, y){
            let XHRdelTIPO = new XMLHttpRequest();
            let url = "enviarHTML";
        
            // open a connection
            XHRdelTIPO.open("POST", url, true);

            // Set the request header i.e. which type of content you are sending
            XHRdelTIPO.setRequestHeader("Content-Type", "application/json");

            // Converting JSON data to string
            let data = JSON.stringify({ "x":x, "y":y, "mapa_id": mapaID });

            console.log(data);  

            // Sending data with the request
            XHRdelTIPO.send(data);
        }

        function sendHTML(titulo, html, tipo){
            if (eventoID===null){
                alert("¡NO has selecionnado un marcador!")
            } else if (html=== null || titulo==="") {
                alert("¡Has dejado un campo VACÍO!")
            } else {

                // Creating a XHRdelHTML object
                let XHRdelHTML = new XMLHttpRequest();
                let url = "enviarHTML";
            
                // open a connection
                XHRdelHTML.open("POST", url, true);

                // Set the request header i.e. which type of content you are sending
                XHRdelHTML.setRequestHeader("Content-Type", "application/json");

                // Converting JSON data to string
                let data = JSON.stringify({ "titulo": titulo, "html": html, "tipo": tipo, "marcador_id": eventoID });

                console.log(data);

                // Sending data with the request
                XHRdelHTML.send(data);
            }
        }

        function cambiarCrear(){
            setCrear(!crear)
            console.log(crear)
        }

        return (
            <div className="wrapper">
                <div className="container p-3 my-3 bg-dark text-white">
                    <h1>Crear <Button className="float-right btn-warning" onClick={()=>{setLocation("/dashboard")}}>Panel de Control</Button></h1>
                </div>
                <Button className="float-left btn-success" onClick={cambiarCrear}>Añadir Marcador</Button>
                <br/><br/><br/>
                <div className="mapa">
                    <Mapa sendMarcador={sendMarcador} cambiarEvento={cambiarEvento} crear={crear} setCrear={setCrear}></Mapa>
                </div> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <div className="escribir">
                    <Escribir sendHTML={sendHTML}></Escribir>
                </div><br/><br/>
            </div>
        );
    } else {
        return (
            <>
            <div className="jumbotron">¡No tienes permiso para entrar aquí!</div>
            <Button onClick={()=>{setLocation("/dashboard")}}>Volver al Panel de Usuario.</Button>
            </>
        )
    }
}

export default Crear;