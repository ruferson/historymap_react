import { Button } from "reactstrap";
import { useLocation } from "wouter";
import CambiarDatosSesion from '../CambiarDatosSesion'

function ConfigUsuario () {
    
    const [location, setLocation] = useLocation();

    function action() {
        localStorage.setItem('userData', JSON.stringify({"isLogged":false}))
        setLocation("/session")
    }
    
    return (
        <>
        <h1>Configuración de Usuario</h1>
        <CambiarDatosSesion></CambiarDatosSesion>
        <br></br>
        <Button onClick={()=>action()}>Cerrar sesión</Button>
        </>
    );

   }

   export default ConfigUsuario;