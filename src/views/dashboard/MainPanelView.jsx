import { NavLink } from "react-router"
import ProductIcon from "../../components/icons/ProductIcon"
import UserIcon from "../../components/icons/UserIcon.jsx";
import ArrowLeftIcon from "../../components/icons/ArrowLeftIcon.jsx";

const MainPanelView = () => {
    return (
        <>
            <h1 className='text-6xl mb-6'>Panel principal</h1>

            <h2 className="text-4xl mb-6">¿Que deseás administrar?</h2>
            
            <div className="grid gap-4 grid-cols-2">
                <NavLink className=" border glass rounded-lg glass--events px-3 py-2 flex gap-2 items-center text-2xl" to="/dashboard/productos">
                    <ProductIcon/>
                    <h3 className='grow'>Productos</h3>
                    <ArrowLeftIcon className='rotate-180' />
                </NavLink>
                <NavLink className="border glass rounded-lg glass--events px-3 py-2 flex gap-2 items-center text-2xl" to="/dashboard/usuarios">
                    <UserIcon />
                    <h3 className='grow'>Usuarios</h3>
                    <ArrowLeftIcon className='rotate-180' />
                </NavLink>
            </div>
        </>
    )
}

export default MainPanelView