import React, { useEffect, useState } from 'react';
import './styles.css';
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import mockmapa1 from '../../mocks/map-1.json';

function Mapa(props) {

    //const [id, setID] = useState(props.id);
    const [eventoID, setEventoID] = useState(1);
    const [selectedPosition, setSelectedPosition] = useState([0,0]);
    const [markers, setMarkers] = useState([])


    /*const Markers = () => {

        const map = useMapEvents({
            click(e) {                                
                setSelectedPosition([
                    e.latlng.lat,
                    e.latlng.lng
                ]);                
            },            
        })


        //setMarkers(markers.concat([selectedPosition, "Hola", "Caracola"])) 
        
    }*/

    function LocationMarker(marcador, key) {
        const [position, setPosition] = useState(marcador[0])
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
          let marcadores=[];
          for(let i=0; i<Object.keys(mockmapa1).length;i++){
            let array = [mockmapa1[i].position, mockmapa1[i].description, mockmapa1[i].type]
            marcadores.push(array);
          }
          console.log(marcadores)
          return marcadores.map(LocationMarker)
      }

    const position = [40.193795, -3.851789]

    return (
        <MapContainer center={position} zoom={5} >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
               
            />
            {/*}<Markers/>{*/}
            {mapeoMarcadores()}
        </MapContainer>
    );
}

export default Mapa;
