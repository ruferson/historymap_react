import React, { useEffect, useState } from 'react';
import './styles.css';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import mockmapa1 from '../../mocks/map-1.json';
import Evento from '../Evento';

function Mapa(props) {

    //const [id, setID] = useState(props.id);
    const [eventoID, setEventoID] = useState(1);

    function LocationMarker(marcador, key) {
        console.log(marcador[0])
        const [position, setPosition] = useState(marcador[0])
        
        console.log(position === null)
        return position === null ? null : (
          <div id={key} onClick={cambiarEvento}>
          <Marker key={key} position={position}>
            <Popup>
                <h1>{marcador[2]}</h1>
                <br></br>
                {marcador[1]}
            </Popup>
          </Marker>
          </div>
        )
      }

      function cambiarEvento(event){
          setEventoID(event.target.id);
      }

      function mapeoMarcadores() {
          console.log(Object.keys(mockmapa1).length)
          let array = [];
          for(let i=0; i<Object.keys(mockmapa1).length;i++){
            array.push([mockmapa1[i+1].position, mockmapa1[i+1].description, mockmapa1[i+1].type])
          }
          console.log(array)
          return array.map(LocationMarker);
      }

    const position = [40.193795, -3.851789]

    return (
        <div>
            <MapContainer center={position} zoom={5}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {mapeoMarcadores()}
            </MapContainer>
            <Evento id={eventoID} titulo={mockmapa1[eventoID].description}></Evento>
        </div>

    );
}

export default Mapa;
