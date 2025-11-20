import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode"

const AuthContext = createContext();

const STORAGE_TOKEN_KEY = 'ophi_token';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [token, setToken] = useState(localStorage.getItem('ophi_token'));

    // localStorage
    useEffect(() => {
        console.log('Cargar el usuario')
        if (token) {
            
            try {
                const tokenDecoded = jwtDecode(token);
                setUser(tokenDecoded);
            } catch (error) {
                console.error('Error al parsear usuario guardado', error);
                setUser(null);
            }
        }
    }, [token]);

    const login = (jwtToken) => {
        localStorage.setItem(STORAGE_TOKEN_KEY, jwtToken);
        setToken(jwtToken);
    };

    const logout = () => {
        setUser({});
        setToken(null);

        localStorage.removeItem(STORAGE_TOKEN_KEY);
    };

    const value = {
        user,
        token,
        isAuthenticated: !!user,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, AuthContext, useAuth };