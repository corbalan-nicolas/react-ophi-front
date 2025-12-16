import { useContext } from "react";
import EyeIcon from "../icons/EyeIcon.jsx";
import PencilIcon from "../icons/PencilIcon.jsx";
import TrashIcon from "../icons/TrashIcon.jsx";
import {Link} from "react-router";
import { AuthContext } from "../../context/AuthContext.jsx";

const UserCard = ({userL, setModalUser, setIsOpen}) => {
    const {user} = useContext(AuthContext);
    function handleDelete() {
        setModalUser(userL)
        setIsOpen(true)
    }

    return (
        <article className="grid grid-cols-[1fr_auto_auto_auto] gap-4">
            <div className="col-span-1 row-span-full border glass rounded-lg">
                <h2>{userL.name}</h2>
            </div>

            <Link
                to={`/dashboard/usuarios/${userL._id}/informacion`}
                className='text-black/60 p-2 glass glass--events'
                title='Ver detalle'
            ><EyeIcon /></Link>

            <Link
                to={`/dashboard/usuarios/${userL._id}/editar`}
                className='text-black/60 p-2 glass glass--events'
                title='Editar Usuario'
            ><PencilIcon /></Link>

            
            {user.id !== userL._id
                ?
                    <button
                        className='text-black/60 p-2 glass glass--events'
                        onClick={handleDelete}
                        title='Eliminar Usuario'
                    ><TrashIcon /></button>
                :
                ''
            }

        </article>
    )
}

export default UserCard;