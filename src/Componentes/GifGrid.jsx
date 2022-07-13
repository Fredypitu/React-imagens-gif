import { useFetchGifs } from "../Hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGird = ({categoria}) => {
  
 const {imagenes, isLoading} = useFetchGifs(categoria);

 console.log(isLoading);

    return(
        <div>
            <h2>{categoria}</h2>
            {
                    isLoading && (<h2>cargando...</h2>)
            }
     
            {
                imagenes.map((imagen) => (
                    <GifItem key={imagen.id} {...imagen} />
                ))
            }

        </div> 

    )
}