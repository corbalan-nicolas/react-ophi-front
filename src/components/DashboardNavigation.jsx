import {NavLink, useNavigate} from "react-router";
import HomeIcon from "./icons/HomeIcon.jsx";
import { AuthContext } from "../context/AuthContext";
import ProductIcon from "./icons/ProductIcon.jsx";
import ArrowLeftIcon from "./icons/ArrowLeftIcon.jsx";
import UserIcon from "./icons/UserIcon.jsx";
import LogoutIcon from "./icons/LogoutIcon.jsx";
import {useContext} from "react";

const navLinkClassName = 'block py-2 px-4 rounded-lg bg-white/20 hover:bg-white/40 [.active]:bg-black/60 [.active]:hover:bg-black/50 [.active]:active:bg-black/70 [.active]:text-white/80 active:bg-white/30 transition flex items-center gap-4 mb-2'

const DashboardNavigation = ({handleClick = () => null}) => {
    const {logout} =  useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            // Intentamos cerrar sesión en el back
            // await logoutUser();
        } catch (err) {
            console.error("Error cerrando sesión en el back:", err);
            // acá podrías mostrar un toast/alert si querés
        } finally {
            // Siempre limpiamos el estado del front
            logout();
            navigate("/iniciar-sesion");
        }
    };

    return (
        <nav className='p-4'>
            <ul className=''>
                <li>
                    <NavLink className={navLinkClassName} to="/dashboard/home" onClick={handleClick}>
                        <HomeIcon/>
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink className={navLinkClassName} to="/dashboard/productos" onClick={handleClick}>
                        <ProductIcon/>
                        Productos
                    </NavLink>
                </li>
                <li>
                    <NavLink className={navLinkClassName} to="/dashboard/usuarios" onClick={handleClick}>
                        <UserIcon/>
                        Usuarios
                    </NavLink>
                </li>
                <li>
                    <NavLink className={navLinkClassName} to="/" onClick={handleClick}>
                        <ArrowLeftIcon/>
                        Salir
                    </NavLink>
                </li>
                <li>
                    <button className={navLinkClassName} onClick={handleLogout}>
                        <LogoutIcon/>
                        Cerrar sesión
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default DashboardNavigation