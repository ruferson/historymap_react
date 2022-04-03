import { useEffect, useState } from "react";
import { getMarkers } from "../servicios/getMarkers";

const useMarkers = ({ keyword } = { keyword: 'a' }) => { // CUSTOM HOOK. Recibe un keyword y devuelve la información (un array) de todos los Markers que cumplen dicho keyword

    // Estado con la lista de Markers que recuperamos de la REST API
    const [listaMarkers, setListaMarkers] = useState([]);

    // Estado para controlar si estamos cargando los datos o hemos finalizado
    // de cargarlos
    const [buscando, setBuscando] = useState(true);

    function obtenerMarkers() {


        // Usamos el servicio de obtención de posts que hemos creado
        getMarkers({ keyword }).then(nextMarkers => {

            //Cargamos los Markers en el estado del componente
            setListaMarkers(nextMarkers);


            //Indicamos que hemos terminado de cargar los datos
            setBuscando(false)

            localStorage.setItem("lastKeyword", keyword); //Guardamos la letra en el localStorage de lastKeyword
        });
    }

    // Llamamos a la función de extracción de datos con un useEffect
    // para que solo se ejecute una vez
    useEffect(obtenerMarkers, [keyword]);

    return { buscando, listaMarkers }
}
export default useMarkers;