import UserCard from "./UserCard.jsx";
import { useState } from "react";
import ProductConfirmDelete from "./ProductConfirmDelete.jsx";
import { deleteUser } from "../../services/User.js";


const UsersList = ({ users, setUsers }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalUser, setModalUser] = useState(null);

    console.log('[UsersList.jsx] Usuarios:', users);

    async function handleConfirmDelete() {
        if (!modalUser) return;

        try {
            // 1) borrar en la API
            await deleteUser(modalUser._id);

            // 2) actualizar el estado de la lista
            setUsers(prev =>
                prev.filter(p => p._id !== modalUser._id)
            );

            // 3) cerrar modal y limpiar
            setIsOpen(false);
            setModalUser(null);
        } catch (error) {
            console.error('[UsersList handleConfirmDelete] Error borrando el usuario', error);
        }
    }

    return (
        <>
            <ul className='grid gap-4 grid-cols-2'>
                {users.map((user) => (
                    <li key={user._id}>
                        <UserCard
                            userL={user}
                            setModalUser={setModalUser}
                            setIsOpen={setIsOpen}
                        />
                    </li>
                ))}
            </ul>

            <ProductConfirmDelete
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                modalProduct={modalUser}
                onConfirm={handleConfirmDelete}
            />
        </>
    );
};

export default UsersList;
