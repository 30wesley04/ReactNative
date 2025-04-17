export const BasicTypes = () => {
    const name: string = 'Wesley';
    const age: number = 23;
    const isActive: boolean = true;
    const powers: string[] = ['Velocidad', 'Fuerza', 'Inteligencia'];
    return (
        <>
            <h3>Tipos basicos</h3>
            {name} - {age} - {isActive ? 'Activo' : 'No activo'}

            <p>{powers.join(', ')}</p>
        </>
    )
}
