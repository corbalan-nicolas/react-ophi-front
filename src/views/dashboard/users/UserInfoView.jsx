import { useLoaderData } from "react-router";
import { useEffect, useState } from "react";
import { getUserAllergy } from "../../../services/User";
import UserInfo from "../../../components/dashboard/UserInfo";

const UserInfoView = () => {
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
            <h2 className='text-6xl mb-6'>Información de {user.name}</h2>

            <UserInfo user={user} allergy={allergy} />
        </>
    )
}

export default UserInfoView