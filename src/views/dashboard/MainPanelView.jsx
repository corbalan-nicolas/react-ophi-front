import { NavLink } from "react-router"
import ProductIcon from "../../components/icons/ProductIcon"
import UserIcon from "../../components/icons/UserIcon"

const MainPanelView = () => {
    return (
        <>
            <h1 className='text-6xl mb-6'>Panel principal</h1>

            <h2 className="text-4xl mb-6">¿Que deseás administrar?</h2>
            
            <div className="flex gap-4 text-white">
                <NavLink to="/dashboard/productos" className="bg-amber-950 w-80 border-2 border-gray-600 rounded-2xl p-5 text-2xl flex flex-col transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-xl hover:bg-amber-900 hover:border-white">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-semibold text-right">
                            Productos
                        </h3>
                        <ProductIcon className="w-10 h-10" />
                    </div>

                    <p className="mt-auto text-sm text-white/80">
                        Gestioná el listado de alimentos.
                    </p>
                </NavLink>

                <NavLink to="/dashboard/usuarios" className="bg-amber-950 w-80 border-2 border-gray-600 rounded-2xl p-5 text-2xl flex flex-col transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-xl hover:bg-amber-900 hover:border-white">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-semibold text-right">
                            Usuarios
                        </h3>
                        <UserIcon className="w-10 h-10" />
                    </div>

                    <p className="mt-auto text-sm text-white/80">
                        Administrá cuentas y alergias.
                    </p>
                </NavLink>
            </div>
        </>
    )
}

export default MainPanelView