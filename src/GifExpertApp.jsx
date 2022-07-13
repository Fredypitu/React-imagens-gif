import { useState } from "react"
import {AgregarBuscador, GifGird} from './Componentes'



export const GifExportApp = ()=>{
    const [categorias, setcategorias] = useState(['One Punch']);

    const actualizarBusqueda = (event) =>{
        if (categorias.includes(event)) return;

        const newCategorias = [event,...categorias]
        setcategorias(newCategorias);
    }
    return(
        <>
            <h1>GitExpertApp</h1>
                <AgregarBuscador onNewValor={actualizarBusqueda}/>
            <div>          
                {
                    categorias.map(cat =>(<GifGird key={cat} categoria = {cat}/> ))
                }    
            </div>
        </>
    )
}