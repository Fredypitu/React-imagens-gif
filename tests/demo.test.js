describe('Demo inicial --> Dir ./test', () => {
    test('Test Hola mundo!', () => {

        const msj1 = 'Hola mundo';
    
        const msj2 = msj1.trim();
    
        expect(msj2).toBe(msj1);
     })
})
