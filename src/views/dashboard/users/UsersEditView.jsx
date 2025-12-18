import { useLoaderData } from "react-router";
import { useEffect, useState } from "react";
import { getUserAllergy } from "../../../services/User";
import UserEditForm from "../../../components/dashboard/UserEditForm";


const UserEditView = () => {
    const { user } = useLoaderData();
    const [allergy, setAllergy] = useState(null);
    useEffect(() => {
        async function getAllergy() {
            try {
                const result = await getUserAllergy(user.allergy);
                if(result) {
                    setAllergy(result);
                }
            } catch (error) {
                console.log('[UserInfoView] -> Error al traer la alergia', error);
            }
        }

        getAllergy()
    }, [])

    return (
        <>
            <h2 className='text-6xl mb-6'>Editar a {user.email}</h2>

            <UserEditForm/>
        </>
    )
}

export default UserEditView