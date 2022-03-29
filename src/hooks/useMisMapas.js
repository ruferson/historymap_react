import { useEffect, useState } from "react";
import { getMisMapas } from "../servicios/getMisMapas";

const useMisMapas = ({ keyword } = { keyword: 'a' }) => { // CUSTOM HOOK. Recibe un keyword y devuelve la información (un array) de todos los MisMapas que cumplen dicho keyword

    // Estado con la lista de MisMapas que recuperamos de la REST API
    const [listaMisMapas, setListaMisMapas] = useState([]);

    // Estado para controlar si estamos cargando los datos o hemos finalizado
    // de cargarlos
    const [buscando, setBuscando] = useState(true);

    function obtenerMisMapas() {


        // Usamos el servicio de obtención de posts que hemos creado
        getMisMapas({ keyword }).then(nextMisMapas => {

            //Cargamos los MisMapas en el estado del componente
            setListaMisMapas(nextMisMapas);


            //Indicamos que hemos terminado de cargar los datos
            setBuscando(false)

            localStorage.setItem("lastKeyword", keyword); //Guardamos la letra en el localStorage de lastKeyword
        });
    }

    // Llamamos a la función de extracción de datos con un useEffect
    // para que solo se ejecute una vez
    useEffect(obtenerMisMapas, [keyword]);

    return { buscando, listaMisMapas }
}
export default useMisMapas;