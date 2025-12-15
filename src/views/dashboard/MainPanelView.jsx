import { NavLink } from "react-router"
import ProductIcon from "../../components/icons/ProductIcon"

const MainPanelView = () => {
    return (
        <>
            <h1 className='text-6xl mb-6'>Panel principal</h1>

            <h2 className="text-4xl mb-6">¿Que deseás administrar?</h2>
            
            <div className="flex gap-4 text-white">
                <NavLink className=" bg-amber-950 w-80 h-80 border-2 rounded-2xl p-5 text-2xl" to="/dashboard/productos">
                    <h3>Productos</h3>
                    <ProductIcon/>
                </NavLink>
                <NavLink className="bg-amber-950 w-80 h-80 border-2 rounded-2xl p-5 text-2xl" to="/dashboard/usuarios">
                    <h3>Usuarios</h3>
                </NavLink>
            </div>
        </>
    )
}

export default MainPanelView