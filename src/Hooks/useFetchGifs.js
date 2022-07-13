import { useEffect, useState } from "react"
import { GetGifs } from "../helper/getGifs";

export const useFetchGifs = (categoria) =>{

    const [imagenes, setImagenes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImagenes = async() =>{
        const datos = await GetGifs(categoria);
        {
            //Puse un delay de 2 segundo para que se vea el mjs cargando...
            setTimeout( () => {
               console.log('Pasaron 2 segundo!!!');
               setImagenes(datos)
               setIsLoading(false);
            }, 2000);
        }

    }

    useEffect(()=>{
        getImagenes();
    }, []);

    return(
        {
            imagenes,
            isLoading
        }
    )

    
}