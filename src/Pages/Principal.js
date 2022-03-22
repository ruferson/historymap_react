import React, { useState } from 'react';
import './styles.css';
import mockmapa1 from '../mocks/map-1.json';
import Evento from '../components/Evento';
import Mapa from '../components/Mapa';

function Principal() {

    //const [id, setID] = useState(props.id);
    const [eventoID, setEventoID] = useState(1);

    function cambiarEvento(event){
        setEventoID(event.target.options.id);
    }

    function anyadirAlDom(texto, elementoId){
        document.getElementById(elementoId).innerHTML=texto;
    }

    const position = [40.193795, -3.851789]

    return (
        <div>
            <div className="mapa">
                <Mapa cambiarEvento={cambiarEvento}></Mapa>
            </div>
            <Evento anyadirAlDom={anyadirAlDom} id={eventoID} titulo={mockmapa1[eventoID].description}></Evento>
        </div>

    );
}

export default Principal;