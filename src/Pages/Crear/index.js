import React, { useState } from 'react';
import './styles.css';
import Mapa from '../../components/Mapa';
import Escribir from '../../components/Escribir';
import { Button } from 'reactstrap';

function Principal() {

    //const [id, setID] = useState(props.id);
    const [eventoID, setEventoID] = useState(null);
    const [crear, setCrear] = useState(false);

    function cambiarEvento(event){
        let id = event.target.options.id;
        if (id>2){
            id=2;
        }  
        setEventoID(id);
    }

    function sendHTML(html){
        if (eventoID===null){
            alert("¡NO has selecionnado un marcador!")
        } else {
            // Creating a XHR object
            let xhr = new XMLHttpRequest();
            let url = "https://google.es";
        
            // open a connection
            xhr.open("POST", url, true);

            // Set the request header i.e. which type of content you are sending
            xhr.setRequestHeader("Content-Type", "application/json");

            // Converting JSON data to string
            let data = JSON.stringify({ "titulo": "hola", "html": html, "marcador_id": eventoID });

            console.log(data);

            // Sending data with the request
            xhr.send(data);
        }
    }

    function cambiarCrear(){
        setCrear(!crear)
        console.log(crear)
    }

    return (
        <div>
            <h1>CREAR</h1>
            <Button onClick={cambiarCrear}>AÑADIR MARCADOR</Button>
            <div className="mapa">
                <Mapa cambiarEvento={cambiarEvento} crear={crear} setCrear={setCrear}></Mapa>
            </div>
            <div className="escribir">
                <Escribir sendHTML={sendHTML}></Escribir>
            </div>
        </div>
    );
}

export default Principal;