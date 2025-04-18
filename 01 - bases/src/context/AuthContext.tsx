import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
enum AuthStatus {
    'checking',
    'authenticated',
    'unauthenticated'
}
interface AuthState {
    status: AuthStatus,
    token?: string,
    user?: User,
    isChecking: boolean,
    isAuthenticated: boolean,
    loginWithEmailPassword: (email: string, password: string) => void,
    logout: () => void
}

interface User {
    name: string,
    email: string
}

export const AuthContext = createContext({} as AuthState);
export const useAuthContext = () => useContext(AuthContext);
export const AuthProvider = ({ children }: PropsWithChildren) => {
    const [status, setStatus] = useState(AuthStatus.checking);
    const [user, setUser] = useState<User>()
    useEffect(() => {
        setTimeout(() => {
            setStatus(AuthStatus.unauthenticated)
        }, 1500);
    }, [])

    const loginWithEmailPassword = (email: string, password: string) => {
        setUser({
            name: 'Wesley Mendoza',
            email: email
        });
        setStatus(AuthStatus.authenticated)
    }

    const logout = () => {
        setUser(undefined);
        setStatus(AuthStatus.unauthenticated)
    }

    return (
        <AuthContext.Provider value={{
            status: status,
            user: user,
            isChecking: status == AuthStatus.checking,
            isAuthenticated: status == AuthStatus.authenticated,
            loginWithEmailPassword,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}