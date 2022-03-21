import React, { useEffect, useState } from 'react';
import './styles.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

function Mapa(props) {

    //const [id, setID] = useState(props.id);

    const position = [40.193795, -3.851789]

    return (
            <MapContainer center={position} zoom={5}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
            </MapContainer>

    );
}

export default Mapa;
