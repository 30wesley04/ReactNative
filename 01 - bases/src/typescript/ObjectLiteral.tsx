interface Person {
    age: number,
    firstName: string,
    lastName: string,
    address: Address;
} //reglas que establecen a los objetos 


interface Address {
    country: string,
    houseNo: string
}
export const ObjectLiteral = () => {

    const person: Person = {
        age: 38,
        firstName: 'Wesley',
        lastName: 'Mendoza',
        address: {
            country: 'Canada',
            houseNo: '320'
        }
    }
    return (
        <>
            <h3>Objetos literales</h3>
            <pre>{JSON.stringify(person, null, 2)}</pre>
        </>
    )
}
