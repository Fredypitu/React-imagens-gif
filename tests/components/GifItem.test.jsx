import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/Componentes/GifItem";

describe('Prueba del componente ---> GifItem', () =>{

    const title = 'Prueba';
    const url = 'http://sitema/prueba/imagen.jpga';

    test('Debe recibir los parametros "url" y "title"', () => {
        render(<GifItem title={title} url = {url}/>);
        
        // usando Destructuring
        const {src,alt} = screen.getByRole('img'); // Otra fora ---> screen.getByRole('img').src;  
        expect(src).toBe(url);        
     })

     test('Debe contener el titulo', () => { 
        render(<GifItem title={title} url = {url}/>);
        expect(screen.getByText(title)).toBeTruthy();
      })
})