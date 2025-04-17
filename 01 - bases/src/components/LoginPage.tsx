import { useAuthContext } from "../context/AuthContext"

export const LoginPage = () => {
    const { isChecking, isAuthenticated, loginWithEmailPassword, user, logout } = useAuthContext();

    if (isChecking) {
        return (
            <h1>Verificando usuario</h1>
        )
    }
    return (
        <>

            {
                isAuthenticated ? (<>
                    <h3>Bienvenido</h3>
                    <pre>{JSON.stringify(user, null, 2)}</pre>
                    <button onClick={() => logout()} className="bg-blue-500 p-2 text-white rounded-xl mt-2 hover:bg-blue-600">Salir</button>
                </>)
                    : (<>
                        <h3>Ingresar a la aplicacion</h3>
                        <button onClick={() => loginWithEmailPassword('wesleymendoza710@gmail.com', '1234567')} className="bg-blue-500 p-2 text-white rounded-xl mt-2 hover:bg-blue-600">Ingresar</button>
                    </>)
            }
        </>
    )
}
