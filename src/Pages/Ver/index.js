import React, { useState } from 'react';
import './styles.css';
import mockmapa1 from '../../mocks/map-1.json';
import mocktexto from '../../mocks/texto-1.json'
import Evento from '../../components/Evento';
import Mapa from '../../components/Mapa';
import { Button } from 'reactstrap';
import { useLocation } from 'wouter';
import Compartir from '../../components/Compartir';
import useEsPropietario from '../../hooks/useEsPropietario';

function Ver(props) {

    const [mapaID, setMapaID] = useState(props.params.id)
    //const [mapName, setMapName] = useMapName(mapaID);
    const [mapName, setMapName] = useState("Aztecas")
    const [location, setLocation] = useLocation();
    const [eventoID, setEventoID] = useState(1);
    //const [propietario, setPropietario] = useEsPropietario(JSON.parse(localStorage.getItem("userData")).user_id, mapaID)
    const [propietario, setPropietario] = useState(true)

    function cambiarEvento(event){
        let id = event.target.options.id;
        if (id>Object.keys(mocktexto.records).length-1){
            id=Object.keys(mocktexto.records).length-1;
        }  
        setEventoID(id);
    }

    function anyadirAlDom(texto, elementoId){
        document.getElementById(elementoId).innerHTML=texto;
    }

    console.log(mapaID)

    return (
        <div className="wrapper">
            <div className="container p-3 my-3 bg-dark text-white">
                <h1>Ver <Button className="float-right btn-warning" onClick={()=>{setLocation("/dashboard")}}>Panel de Control</Button></h1>
            </div>
            <div className="">
                {propietario && <Compartir mapName={mapName} mapaID={mapaID}></Compartir>}
                <h1>{mapName}</h1> <br />
                <div className="">
                    <Mapa cambiarEvento={cambiarEvento} crear={false} id={mapaID}></Mapa>
                </div> <br/>
                <div className="">
                    <Evento anyadirAlDom={anyadirAlDom} id={eventoID} titulo={mockmapa1.records[eventoID].description}></Evento>
                </div>
            </div>
            <br/><br/>
        </div>

    );
}

export default Ver;