import { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";

const MainNavigation = () => {
    const {user} = useContext(AuthContext);

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/registrarse">Registrarse</NavLink>
                    </li>
                    <li>
                        <NavLink to="/iniciar-sesion">Iniciar sesión</NavLink>
                    </li>
                    { user.name ?
                        <li>
                            <NavLink to="/perfil">{user.name}</NavLink>
                        </li>
                    :
                        ''
                    }
                </ul>
            </nav>
        </>
    )
}

export default MainNavigation