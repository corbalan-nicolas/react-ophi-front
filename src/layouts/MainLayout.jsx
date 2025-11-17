import MainNavigation from "../components/MainNavigation.jsx";
import { Outlet } from "react-router";

const MainLayout = () => {
    return (
        <>
            <header className="glass border border-t-0 rounded-b-lg container">
                <MainNavigation />
            </header>

            <main className="container  grow glass rounded-lg my-4 border p-4">
                <Outlet />
            </main>

            <footer className="container  text-center py-2 glass border border-b-0 rounded-t-lg">
                &copy; Corbalan Nicolas, Espassandin Gonzalo, Gamero Facundo, Gamero Gustavo | 2025
            </footer>
        </>
    )
}

export default MainLayout