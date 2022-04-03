import React, {  } from 'react';
import './styles.css'
import { Button, Input, Label } from 'reactstrap';

function CrearPaso1(props) {

    function sendMapa(){
        let nombre = document.getElementById("nombre").value
        if (nombre!==null) {
            let XHRdelMAPA = new XMLHttpRequest();
            let url = "enviarMapa";
        
            // open a connection
            XHRdelMAPA.open("POST", url, true);

            // Set the request header i.e. which type of content you are sending
            XHRdelMAPA.setRequestHeader("Content-Type", "application/json");

            // Converting JSON data to string
            let data = JSON.stringify({ "nombre":nombre, "usuario_id":JSON.parse(localStorage.getItem("userData")).user_id});

            console.log(data);  

            // Sending data with the request
            XHRdelMAPA.send(data);
            console.log("hola")
            props.setPaso(2)
        } else {
            alert("¡Pon un nombre!")
        }
    }

   return (
        <div className="centrado text-center">
            <Label for="nombre"><h2>Nombre del mapa:</h2></Label>
                <Input
                    type="text"
                    name="nombre"
                    id="nombre"
                    placeholder="nombre"
                /> <br/>
            <Button className="float-left btn-success" onClick={sendMapa}>Continuar</Button>
        </div>
    );
}

export default CrearPaso1;
