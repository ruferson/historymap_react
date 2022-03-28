import { useLocation } from "wouter";

function CerrarSesion () {
    
    const [location, setLocation] = useLocation();

    function action() {
        localStorage.setItem('userData', JSON.stringify({"isLogged":false}))
        setLocation("/login")
    }
    
    return (
        <button onClick={()=>action()}>Cerrar sesión</button>
    );

   }

   export default CerrarSesion;