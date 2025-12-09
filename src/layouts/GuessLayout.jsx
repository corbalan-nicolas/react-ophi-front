import MainNavigation from "../components/MainNavigation.jsx";
import {NavLink, Outlet} from "react-router";

const GuessLayout = () => {
    const baseClasses ='block py-2 px-4 rounded-lg bg-white/20 hover:bg-white/40 [.active]:bg-black/60 [.active]:hover:bg-black/50 [.active]:active:bg-black/70 [.active]:text-white/80 active:bg-white/30 transition';

    return (
        <div className="min-h-dvh flex flex-col items-center">
            <header className="glass border border-t-0 rounded-b-lg container">
                <nav>
                    <ul className='flex items-center justify-end gap-4 p-2'>
                        <li>
                            <NavLink className={baseClasses} to="/iniciar-sesion">
                                Iniciar sesión
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={baseClasses} to="/registrarse">
                                Registrarse
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>

            <main className="container  grow glass rounded-lg my-4 border p-4">
                <Outlet />
            </main>

            <footer className="container  text-center py-2 glass border border-b-0 rounded-t-lg">
                &copy; Corbalan Nicolas, Espassandin Gonzalo, Gamero Facundo, Gamero Gustavo | 2025
            </footer>
        </div>
    )
}

export default GuessLayout