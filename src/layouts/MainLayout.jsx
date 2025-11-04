import MainNavigation from "../components/MainNavigation.jsx";
import { Outlet } from "react-router";

const MainLayout = () => {
    return (
        <>
            <header>
                <h1>¿Puedo consumir este alimento?</h1>
                <MainNavigation />
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                &copy; Corbalan Nicolas, Espassandin Gonzalo, Gamero Facundo, Gamero Gustavo | 2025
            </footer>
        </>
    )
}

export default MainLayout