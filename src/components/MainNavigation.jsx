import { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const MainNavigation = () => {
    const {user, logout} = useContext(AuthContext);
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

    const baseClasses ='block py-2 px-4 rounded-lg bg-white/20 hover:bg-white/40 [.active]:bg-black/60 [.active]:hover:bg-black/50 [.active]:active:bg-black/70 [.active]:text-white/80 active:bg-white/30 transition';

    return (
        <nav>
            <ul className="flex items-center justify-end gap-4 p-2">
                <li>
                    <NavLink className={baseClasses} to="/">
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink className={baseClasses} to="/perfil">
                        {user.name}
                    </NavLink>
                </li>
                <li>
                    <button
                        type="button"
                        onClick={handleLogout}
                        className={baseClasses}
                    >Cerrar sesión</button>
                </li>
            </ul>
        </nav>
    );
    };


export default MainNavigation