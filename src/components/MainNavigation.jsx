import {NavLink} from "react-router";

const MainNavigation = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/iniciar-sesion">Iniciar sesión</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default MainNavigation