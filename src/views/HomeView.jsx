import Search from "../components/Search.jsx";
import {getAllUsers} from "../services/auth.js";


const HomeView = () => {

    async function handleClick() {
        const users = await getAllUsers()
        console.log(users);
    }

    return (
        <>
            <h1>Inicio</h1>
            <Search></Search>
            {/* Solo para probar el servicio y la petición, esto lo voy a eliminar después lógicamente */}
            <button onClick={handleClick}>Traer a todos los usuarios</button>
        </>
    )
}

export default HomeView