import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import {NavLink, useNavigate} from "react-router";
import { getUserAllergy } from "../services/User";
import PencilIcon from "../components/icons/PencilIcon.jsx";

const UserProfileView = () => {
    const {user, logout} = useContext(AuthContext);
    const [userAllergy, setUserAllergy] = useState('');
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            // Intentamos cerrar sesión en el back
            // await logoutUser();
        } catch (err) {
            console.error("Error cerrando sesión en el back:", err);
            // acá podrías mostrar un toast/alert si querés
        } finally {
            // Siempre limpiamos el estado del front
            logout();
            navigate("/iniciar-sesion");
        }
    };

    useEffect(() => {
        async function getAllergy () {
            if (!user.allergy) {
                console.log('[UserProfileView.jsx getAllergy()] No user found')
                return;
            }

            try {
                const result = await getUserAllergy(user.allergy);
                console.log(result);
                if(result) {
                    setUserAllergy(result);
                }
            } catch(error) {
                console.error('Error al obtener la alergia del usuario', error);
            }
        }
        getAllergy();
    }, [user]);
    return (
        <>
            <h1 className='text-6xl mb-6 text-center'>{user.name}</h1>
            <div className='flex items-end gap-4'>
                <h2 className='text-3xl'>Mi alergia</h2>
                <NavLink
                    className=' inline-block text-black/60 p-2 glass glass--events'
                    to="/editar-perfil"
                >
                    <PencilIcon />
                </NavLink>
            </div>
                <span className="">{userAllergy.name}</span>

            <button
                type="button"
                onClick={handleLogout}
                className='block w-full mt-12 text-black/60 p-2 glass glass--events'
            >Cerrar sesión</button>
        </>
    )
}

export default UserProfileView;