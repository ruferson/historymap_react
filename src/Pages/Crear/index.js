import React, { useState } from 'react';
import './styles.css';
import { Button } from 'reactstrap';
import { useLocation } from 'wouter';
import CrearPaso1 from '../../components/CrearPaso1';
import CrearPaso2 from '../../components/CrearPaso2';

function Crear() {

    const [location, setLocation] = useLocation();
    const [mapaID, setMapaID] = useState(1)
    const [paso, setPaso] = useState(1);

    if (localStorage.getItem("userData")!==null && JSON.parse(localStorage.getItem("userData")).rol==="profesor"){

        //const [id, setID] = useState(props.id);
        
        function segunPasos(){
            switch (paso) {
                case 1:
                    return (
                        <CrearPaso1 setPaso={setPaso}/>
                    )
                case 2:
                    return ( 
                        <CrearPaso2
                            setPaso={setPaso}
                            mapaID={mapaID}
                            />
                    )
            }
        }

        return (
            <div className="wrapper">
                <div className="container p-3 my-3 bg-dark text-white">
                    <h1>Crear <Button className="float-right btn-warning" onClick={()=>{setLocation("/dashboard")}}>Panel de Control</Button></h1>
                </div>
                {segunPasos()}
            </div>
        );
    } else {
        return (
            <>
            <div className="jumbotron">¡No tienes permiso para entrar aquí!</div>
            <Button onClick={()=>{setLocation("/")}}>Volver al inicio.</Button>
            </>
        )
    }
}

export default Crear;