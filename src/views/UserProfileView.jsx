import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from "react-router";

const UserProfileView = () => {
    const {user} = useContext(AuthContext);

    return (
        <>
            <h1 className='text-6xl mb-6 text-center'>{user.name}</h1>
            <div>
                <h2>Mi alergia</h2>
                <span>{user.allergy.name}</span>
                <NavLink to="/editar-perfil">Editar alergia</NavLink>
            </div>
        </>
    )
}

export default UserProfileView;