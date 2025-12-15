import UserForm from "./UserForm.jsx";
import { useLoaderData, useNavigate } from "react-router";
import { updateUser } from "../../services/User.js";

const UserEditForm = () => {
    const { user } = useLoaderData();
    const navigate = useNavigate();

    if (!user) {
        return <p>No se pudo cargar el usuario para editar.</p>;
    }

    const initialState = {
        ...user,
    };

    async function handleSubmit(formData) {
        try {
            await updateUser(user._id, formData);
            navigate("/dashboard/usuarios");
        } catch (error) {
            console.error("[UserEditForm handleSubmit] Error editando el usuario", error);
        }
    }

    return (
        <UserForm
            handleSubmit={handleSubmit}
            initialState={initialState}
        />
    );
};

export default UserEditForm;
