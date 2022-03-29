import { useEffect, useState } from "react";
import { getCoctailById } from "../servicios/getCoctailById";

const useCoctailByID = ({id} = {id:null}) =>  {  // CUSTOM HOOK. Recibe un id de un COCTAIL y devuelve la información completa (un array) de dicho COCTAIL

    // Estado con la lista de datos que recuperamos de la REST API
    const [datos, setCoctail] = useState([]);

    // Estado para controlar si estamos cargando los datos o hemos finalizado
    // de cargarlos
    const [buscando, setBuscando] = useState(true);

    function obtenerCoctail(){


        // Usamos el servicio de obtención de datos que hemos creado
        getCoctailById(id).then(datos => {

            //Cargamos los datos de los datos en el estado del componente
            setCoctail(datos);

            //Indicamos que hemos terminado de cargar los datos
            setBuscando(false);
        });                    
    }

    // Llamamos a la función de extracción de datos con un useEffect
    // para que solo se ejecute una vez
    useEffect(obtenerCoctail, [id]);

    return {buscando, datos}
}
export default useCoctailByID;