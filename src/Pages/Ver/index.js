import React, { useState } from 'react';
import './styles.css';
import mockmapa1 from '../../mocks/map-1.json';
import Evento from '../../components/Evento';
import Mapa from '../../components/Mapa';

function Principal() {

    //const [id, setID] = useState(props.id);
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
        <div>
            <h1>VER</h1>
            <div className="mapa">
                <Mapa cambiarEvento={cambiarEvento} crear={false}></Mapa>
            </div>
            <Evento anyadirAlDom={anyadirAlDom} id={eventoID} titulo={mockmapa1[eventoID].description}></Evento>
        </div>

    );
}

export default Principal;