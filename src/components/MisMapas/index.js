import { Button } from "reactstrap";
import { useLocation } from "wouter";

function MisMapas () {
    
    const [location, setLocation] = useLocation();

    function action() {
        setLocation("/nuevomapa")
    }
    
    return (
        <>
        <h1>Mis Mapas</h1>
        <Button onClick={()=>action()}>Crear Mapa Nuevo</Button>
        </>
    );

   }

   export default MisMapas;