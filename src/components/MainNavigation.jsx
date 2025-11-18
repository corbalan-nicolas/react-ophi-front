import { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";

const MainNavigation = () => {
    const {user} = useContext(AuthContext);

    return (
        <>
            <nav>
                <ul className="flex items-center justify-end gap-4 p-2">
                    <li>
                        <NavLink className={'block py-2 px-4 rounded-lg bg-white/20 hover:bg-white/40 [.active]:bg-black/60 [.active]:hover:bg-black/50 [.active]:active:bg-black/70 [.active]:text-white/80 active:bg-white/30 transition'} to="/">Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink className={'block py-2 px-4 rounded-lg bg-white/20 hover:bg-white/40 [.active]:bg-black/60 [.active]:hover:bg-black/50 [.active]:active:bg-black/70 [.active]:text-white/80 active:bg-white/30 transition'} to="/perfil">{user.name}</NavLink>
                    </li>
                    <li>
                        <button className={'block py-2 px-4 rounded-lg bg-white/20 hover:bg-white/40 [.active]:bg-black/60 [.active]:hover:bg-black/50 [.active]:active:bg-black/70 [.active]:text-white/80 active:bg-white/30 transition'}>Logout</button>
                    </li>
                    <li>
                        <NavLink className={'block py-2 px-4 rounded-lg bg-white/20 hover:bg-white/40 [.active]:bg-black/60 [.active]:hover:bg-black/50 [.active]:active:bg-black/70 [.active]:text-white/80 active:bg-white/30 transition'} to="/iniciar-sesion">Iniciar sesión</NavLink>
                    </li>
                    <li>
                        <NavLink className={"block py-2 px-4 rounded-lg bg-white/20 hover:bg-white/40 [.active]:bg-black/60 [.active]:hover:bg-black/50 [.active]:active:bg-black/70 [.active]:text-white/80 active:bg-white/30 transition"} to="/registrarse">Registrarse</NavLink>
                    </li>
                    {/* { user.name ?
                        <>
                            <li>
                                <NavLink className={'block py-2 px-4 rounded-lg bg-white/20 hover:bg-white/40 [.active]:bg-black/60 [.active]:hover:bg-black/50 [.active]:active:bg-black/70 [.active]:text-white/80 active:bg-white/30 transition'} to="/perfil">{user.name}</NavLink>
                            </li>
                            <li>
                                <button className={'block py-2 px-4 rounded-lg bg-white/20 hover:bg-white/40 [.active]:bg-black/60 [.active]:hover:bg-black/50 [.active]:active:bg-black/70 [.active]:text-white/80 active:bg-white/30 transition'}>Logout</button>
                            </li>
                        </>
                    :
                        <>
                            <li>
                                <NavLink className={'block py-2 px-4 rounded-lg bg-white/20 hover:bg-white/40 [.active]:bg-black/60 [.active]:hover:bg-black/50 [.active]:active:bg-black/70 [.active]:text-white/80 active:bg-white/30 transition'} to="/iniciar-sesion">Iniciar sesión</NavLink>
                            </li>
                            <li>
                                <NavLink className={"block py-2 px-4 rounded-lg bg-white/20 hover:bg-white/40 [.active]:bg-black/60 [.active]:hover:bg-black/50 [.active]:active:bg-black/70 [.active]:text-white/80 active:bg-white/30 transition"} to="/registrarse">Registrarse</NavLink>
                            </li>
                        </>
                    } */}

                    {/* TODO: Panel de accesibilidad (más contraste, menos animaciones, background plano, lo que sea) */}
                </ul>
            </nav>
        </>
    )
}

export default MainNavigation