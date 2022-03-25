import React, { useEffect, useState } from 'react';
import './styles.css';
import {L} from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from 'react-leaflet';
import mockmapa1 from '../../mocks/map-1.json';
import { popup } from 'leaflet';

function Mapa(props) {

    const [creando, setCreando] = useState(props.crear);
    const [myMarkers, setMyMarkers] = useState([])
    const [selectedPosition, setSelectedPosition] = useState("hola");

    function aniadirMarcador() {
        let marcadores=myMarkers;
        marcadores.push([selectedPosition, "Hola", "Caracola"])
        setMyMarkers(marcadores)
        console.log("añadimos")
    }
    useEffect(aniadirMarcador, [selectedPosition])

    function cambiarCreando(){
        setCreando(props.crear)
    }
    useEffect(cambiarCreando, [props.crear])

    function ponerMarcadores() {
        let marcadores=[];
        for(let i=0; i<Object.keys(mockmapa1).length;i++){
            let array = [mockmapa1[i].position, mockmapa1[i].description, mockmapa1[i].type]
            marcadores.push(array);
        }
        setMyMarkers(marcadores);
    }
    useEffect(ponerMarcadores, []);

    const Markers = () => {
        const map = useMapEvents({
            click(e) {      
                if (creando){                          
                    setSelectedPosition([
                        e.latlng.lat,
                        e.latlng.lng
                    ]);
                    props.setCrear(false);
                }
            },          
        })
        
        return null
    }

    function LocationMarker(marcador, key) {
        let position = marcador[0];
        console.log("mapeando"+position)
        return position === null ? null : (
          <div>
            <Marker id={key} eventHandlers={{ click: props.cambiarEvento }} key={key} position={position}>
                <Popup>
                    <h1>{marcador[2]}</h1>
                    <br></br>
                    {marcador[1]}
                </Popup>
            </Marker>
          </div>
        )
      }

      function mapeoMarcadores() {
          return myMarkers.map(LocationMarker)
      }

    const position = [40.193795, -3.851789]

    return (
        <MapContainer center={position} zoom={2} >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Markers/>
            {mapeoMarcadores()}
        </MapContainer>
    );
}

export default Mapa;
