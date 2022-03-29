import React, { useState } from 'react';
import './styles.css';
import mockmapa1 from '../../mocks/map-1.json';
import Evento from '../../components/Evento';
import Mapa from '../../components/Mapa';
import { Button } from 'reactstrap';
import { useLocation } from 'wouter';

function Principal() {

    //const [id, setID] = useState(props.id);
    const [location, setLocation] = useLocation();
    const [eventoID, setEventoID] = useState(1);

    function cambiarEvento(event){
        let id = event.target.options.id;
        if (id>2){
            id=2;
        }  
        setEventoID(id);
    }

    function anyadirAlDom(texto, elementoId){
        document.getElementById(elementoId).innerHTML=texto;
    }

    return (
        <div className="wrapper">
            <div className="container p-3 my-3 bg-dark text-white">
                <h1>Ver <Button className="float-right btn-warning" onClick={()=>{setLocation("/dashboard")}}>Panel de Control</Button></h1>
            </div>
            <div className="">
                <div className="">
                    <Mapa cambiarEvento={cambiarEvento} crear={false}></Mapa>
                </div> <br/>
                <div className="">
                    <Evento anyadirAlDom={anyadirAlDom} id={eventoID} titulo={mockmapa1[eventoID].description}></Evento>
                </div>
            </div>
            <br/><br/>
        </div>

    );
}

export default Principal;