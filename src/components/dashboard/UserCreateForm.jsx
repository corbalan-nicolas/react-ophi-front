import { useNavigate } from "react-router";
import { addUser } from "../../services/User.js";
import UserForm from "./UserForm.jsx";


const UserCreateForm = () => {
    const navigate = useNavigate();
    async function handleSubmit(formData) {
        try {
            await addUser(formData);
            navigate('/dashboard/usuarios');
        } catch (error) {
            console.error('[UserCreateForm handleSubmit] Error creando el producto', error)
        }
    }

    return (
        <UserForm handleSubmit={handleSubmit}/>
    )
}

export default UserCreateForm