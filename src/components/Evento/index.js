import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';

function Evento(props) {

    return (
            <h1>{props.titulo}</h1>
    );
}

export default Evento;
