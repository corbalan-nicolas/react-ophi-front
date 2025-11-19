import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from "react-router";
import { getUserAllergy } from "../services/User";

const UserProfileView = () => {
    const {user} = useContext(AuthContext);
    const [userAllergy, setUserAllergy] = useState('');
    useEffect(() => {
        async function getAllergy () {
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
    }, []);
    return (
        <>
            <h1 className='text-6xl mb-6 text-center'>{user.name}</h1>
            <div>
                <h2>Mi alergia</h2>
                <span className="block">{userAllergy.name}</span>
                <NavLink to="/editar-perfil">Editar alergia</NavLink>
            </div>
        </>
    )
}

export default UserProfileView;