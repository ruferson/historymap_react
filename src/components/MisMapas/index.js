import { Button } from "reactstrap";
import { useLocation } from "wouter";

function CerrarSesion () {
    
    const [location, setLocation] = useLocation();

    function action() {
    }
    
    return (
        <>
        <h1>Mis Mapas</h1>
        <Button onClick={()=>action()}>Crear Mapa Nuevo</Button>
        </>
    );

   }

   export default CerrarSesion;