import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Input, Label, Button, Submit} from 'reactstrap';

function Compartir(props) {

    const [show, setShow] = useState(false)
    //let transporter = nodemailer.createTransport(transport,[defaults]);


    function validateUsername(name){
        let reNombre = /^[a-z0-9_-]{3,15}$/;
        if (reNombre.test(name)){
            return true;
        } else {
            return false;
        }
      }
      function validateEmail(email){
        let reEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
        if (reEmail.test(email)){
            return true;
        } else {
            return false;
        }
      }

    function enviarEmail(e){
        e.preventDefault();
        let existe=true;
        let username=document.getElementById("username").value
        if (validateEmail(username)){
            //Validar que existe el correo.
            console.log("Es un correo electrónico")
        } else if (validateUsername(username)){
            //Validar que existe el usuario
            //Devolver el correo
            username="correo@gmail.com"
            console.log("Es un nombre de usuario")
        } else {
            existe=false;
            alert("¡Nombre o e-mail no válido!")
        }

        if (existe){
            let message = {
                from: "historymap.web@gmail.com",
                to: username,
                subject: "¡Te han invitado a ver un mapa en HistoryMap!",
                text: "¡Has sido invitado para ver el mapa de (CREADOR DEL MAPA), titulado '(TITULO DEL MAPA)'! ¡Haz click en el enlace para verlo! Enlace",
                html: "<p>¡Has sido invitado para ver el mapa de (CREADOR DEL MAPA), titulado '(TITULO DEL MAPA)'!</p><p>¡Haz click en el enlace para verlo!</p><a source=(ENLACE)>Haz click aquí</a>",
            }
            //transporter.sendMail(data, [callback])
        }


    }

    function elegirPersonita() {
        return (
            <div>
                <Form>
                <Label for="nombre"><strong>Nombre de usuario / Correo electrónico</strong></Label>
                <Input
                    type="text"
                    name="username"
                    id="username"
                    placeholder=""
                /> <br/>
                <Button className="float-right btn-alert" onClick={enviarEmail}>Enviar invitación</Button>
                </Form><br/><br/><br/>
            </div>
        )
    }

    return (<>
        <Button className="float-left btn-success" onClick={() => {setShow(!show)}} dataTo>Compartir</Button><br/><br/><br/>
        {show && elegirPersonita()}
        
        </>
    );
}

export default Compartir;
