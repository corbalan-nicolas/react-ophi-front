import DashboardNavigation from "../components/DashboardNavigation.jsx";
import {Outlet} from "react-router";

const DashboardLayout = () => {
    return (
        <div className='min-h-dvh border max-w-[1680px] mx-auto grid grid-cols-[auto_1fr]'>
            <header className='glass border border-s-0 rounded-e-lg'>
                <h1 className='sr-only'>Panel de administración</h1>
                <DashboardNavigation />
            </header>

            <main className='glass border rounded-lg m-4 p-4'>
                <Outlet />
            </main>
        </div>
    )
}

export default DashboardLayout;