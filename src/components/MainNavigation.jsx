import { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import HomeIcon from "./icons/HomeIcon.jsx";
import UserIcon from "./icons/UserIcon.jsx";
import DashboardIcon from "./icons/DashboardIcon.jsx";

const MainNavigation = () => {
    const {user} = useContext(AuthContext);

    const baseClasses ='inline-flex gap-2 p-2 rounded-lg bg-white/20 hover:bg-white/40 [.active]:bg-black/60 [.active]:hover:bg-black/50 [.active]:active:bg-black/70 [.active]:text-white/80 active:bg-white/30 transition';

    return (
        <nav>
            <ul className="flex items-center justify-end gap-4 p-2">
                <li className='w-full'>
                    <NavLink className={baseClasses} to="/">
                        <HomeIcon />
                        Inicio
                    </NavLink>
                </li>
                { user.role === 'admin' &&
                    <li>
                        <NavLink className={baseClasses} to="/dashboard/home">
                            <DashboardIcon />
                            Dashboard
                        </NavLink>
                    </li>
                }
                <li>
                    <NavLink className={baseClasses} to="/perfil">
                        <UserIcon />
                        <span className="sr-only">Perfil</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
    };


export default MainNavigation