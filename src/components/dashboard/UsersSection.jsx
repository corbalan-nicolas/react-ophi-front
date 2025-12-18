import {useEffect, useState} from "react";
import {deleteUser, getAllUsers} from "../../services/User.js";
import InlineLoader from "../loaders/InlineLoader.jsx";
import {Link} from "react-router";
import PlusIcon from "../icons/PlusIcon.jsx";
import ProductConfirmDelete from "./ProductConfirmDelete.jsx";
import UsersList from "./UsersList.jsx";

const UsersSection = () => {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([])
    const [isOpen, setIsOpen] = useState(false);
    const [modalUser, setModalUser] = useState(null);

    useEffect(() => {
        async function getUsers() {
            setLoading(true);

            try {
                const result = await getAllUsers();
                setUsers(result);
                console.log(result);
            } catch (error) {
                console.error('[UsersSection.jsx getUsers()] Error al obtener los productos', error)
            }

            setLoading(false);
        }

        getUsers();
    }, [])

    async function handleConfirmDelete() {
        if (!modalUser) return;

        try {
            await deleteUser(modalUser._id);
            setUsers(prev => prev.filter(p => p._id !== modalUser._id));
            setIsOpen(false);
            setModalUser(null);
        } catch (error) {
            console.error('[UsersSection handleConfirmDelete] Error borrando usuario', error);
        }
    }

    return (
        <>
            <div className='flex justify-end mb-4'>
                <Link
                    to="/dashboard/usuarios/crear"
                    className='p-2 flex gap-2 glass glass--events'
                >
                    <PlusIcon />
                    Agregar nuevo usuario
                </Link>
            </div>

            {/* Modal de confirmación de borrado */}
            {isOpen && modalUser && (
                <ProductConfirmDelete
                    product={modalUser}
                    onCancel={handleCancelDelete}
                    onConfirm={handleConfirmDelete}
                />
            )}

            { loading ? <InlineLoader /> : <UsersList users={users} setUsers={setUsers} /> }
        </>
    );
};

export default UsersSection;