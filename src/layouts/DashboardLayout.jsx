import DashboardNavigation from "../components/DashboardNavigation.jsx";
import {Outlet} from "react-router";
import MenuIcon from "../components/icons/MenuIcon.jsx";
import {createPortal} from "react-dom";
import DashboardNavigationMobile from "../components/DashboardNavigationMobile.jsx";
import {useState} from "react";

const DashboardLayout = () => {
    const [isOpen, setIsOpen] = useState(false);



    return (
        <div className='min-h-dvh border max-w-[1680px] max-md:grid-rows-[auto_1fr] mx-auto grid md:grid-cols-[auto_1fr]'>
            {/* MOBILE HEADER */}
            <header className='md:hidden glass border border-t-0 rounded-b-lg p-2 mx-4'>
                <button
                    className='text-black/60 p-2 glass glass--events'
                    onClick={() => setIsOpen(true)}
                >
                    <MenuIcon />
                </button>

                {createPortal(
                    <DashboardNavigationMobile isOpen={isOpen} setIsOpen={setIsOpen} />,
                    document.getElementById('modal-root')
                )}
            </header>

            {/* PC HEADER */}
            <header className='max-md:hidden glass border border-s-0 rounded-e-lg'>
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