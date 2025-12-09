import {NavLink} from "react-router";
import HomeIcon from "./icons/HomeIcon.jsx";
import ProductIcon from "./icons/ProductIcon.jsx";
import ArrowLeftIcon from "./icons/ArrowLeftIcon.jsx";

const navLinkClassName = 'block py-2 px-4 rounded-lg bg-white/20 hover:bg-white/40 [.active]:bg-black/60 [.active]:hover:bg-black/50 [.active]:active:bg-black/70 [.active]:text-white/80 active:bg-white/30 transition flex items-center gap-4 mb-2'

const DashboardNavigation = () => (
    <nav className='p-4'>
        <ul>
            <li>
                <NavLink className={navLinkClassName} to="/dashboard/home">
                    <HomeIcon />
                    Inicio
                </NavLink>
            </li>
            <li>
                <NavLink className={navLinkClassName} to="/dashboard/productos">
                    <ProductIcon />
                    Productos
                </NavLink>
            </li>
            <li>
                <NavLink className={navLinkClassName} to="/">
                    <ArrowLeftIcon />
                    Salir
                </NavLink>
            </li>
        </ul>
    </nav>
)

export default DashboardNavigation