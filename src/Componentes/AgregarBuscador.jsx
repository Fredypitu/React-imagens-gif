import { useState } from "react"

export const AgregarBuscador = ({onNewValor})=>{

    const [valorText, setValorText] = useState('');

    const onValorIngresado = ({target:{value}})=>{
        setValorText(value);
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        if (valorText.trim().length<=1) {
            alert('Debe ingresar un valor mayor a 1');
            return;
        };
        // setContArray(cont=>[...cont,valorText]);
        onNewValor(valorText.trim());
        setValorText('');
    }
    return(
        <form onSubmit={(event) => onSubmit(event)}>
            <div>
                <label>
                    Buscar:
                    <input value={valorText} onChange={onValorIngresado} placeholder='Ingrese valor y presione Enter'/>
                </label>
            </div>
    
        </form>

    )
}