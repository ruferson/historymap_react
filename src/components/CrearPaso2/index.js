import React, { useEffect, useState } from 'react';
import Mapa from '../Mapa';
import Escribir from '../Escribir';
import { Button } from 'reactstrap';

function CrearPaso2(props) {

    const [crear, setCrear] = useState(false);
    const [eventoID, setEventoID] = useState(null);

    function cambiarEvento(event){
        let id = event.target.options.id;
        if (!id<2){
            id=2;
        }  
        setEventoID(id);
    }

    function cambiarCrear(){
        setCrear(!crear)
        console.log(crear)
    }

    function sendMarcador(x, y){
        let XHRdelMARKER = new XMLHttpRequest();
        let url = "enviarHTML";
    
        // open a connection
        XHRdelMARKER.open("POST", url, true);

        // Set the request header i.e. which type of content you are sending
        XHRdelMARKER.setRequestHeader("Content-Type", "application/json");

        // Converting JSON data to string
        let data = JSON.stringify({ "x":x, "y":y, "mapa_id": props.mapaID });

        console.log(data);  

        // Sending data with the request
        XHRdelMARKER.send(data);
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

            console.log(eventoID)
            console.log(data);

            // Sending data with the request
            XHRdelHTML.send(data);
        }
    }

   return (
        <>
            <Button className="float-left btn-success" onClick={cambiarCrear}>Añadir Marcador</Button>
            <br/><br/><br/>
            <div className="mapa">
                <Mapa sendMarcador={sendMarcador} cambiarEvento={cambiarEvento} crear={crear} setCrear={setCrear}></Mapa>
            </div> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div className="escribir">
                <Escribir sendHTML={sendHTML}></Escribir>
            </div><br/><br/>
        </>
    );
}

export default CrearPaso2;
