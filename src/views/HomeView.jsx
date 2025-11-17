import { useContext, useEffect } from "react";
import Search from "../components/Search.jsx";
import {getAllUsers} from "../services/auth.js";
import { useState } from "react";
import Products from "../components/Products.jsx";
import { getAllSafeFood } from "../services/Product.js";
import { AuthContext } from "../context/AuthContext.jsx";


const HomeView = () => {

    const [food, setFood] = useState([]);

    const {user} = useContext(AuthContext);
    console.log(user);

    const [nutritionalDanger, setNutritionalDanger] = useState(false);

    async function handleClick() {
        const users = await getAllUsers()
        console.log(users);
    }

    useEffect(() => {
            async function getFood() {
                try {
                    const result = await getAllSafeFood(user.allergy.name);
                    if(result) {
                        setFood(result);
                    }
                } catch (error) {   
                    console.error('No se pudo obtener los alimentos SEGUROS', error);
                }
            }
            getFood();
        },
        []
    )

    return (
        <>
            <h1 className='sr-only'>Inicio</h1>
            <h2 className='text-6xl mb-6 text-center'>Buscar productos</h2>
            <Search></Search>

            {/* Solo para probar el servicio y la petición, esto lo voy a eliminar después lógicamente */}
            <h2 className='text-4xl mb-3 mt-6'>Productos recomendados para vos</h2>
            <Products products={food}></Products>
            <button onClick={handleClick}>Traer a todos los usuarios</button>
        </>
    )
}

export default HomeView