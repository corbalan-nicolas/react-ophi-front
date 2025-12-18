import IntoleranceCard from "./IntoleranceCard.jsx";
import { useState } from "react";
import ProductConfirmDelete from "./ProductConfirmDelete.jsx";
import { deleteIntolerance } from "../../services/Intolerances.js";

const IntolerancesList = ({ intolerances, setIntolerances }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalIntolerance, setModalIntolerance] = useState(null);

    console.log('[IntolerancesList.jsx] Intolerancias:', intolerances);

    async function handleConfirmDelete() {
        if (!modalIntolerance) return;

        try {
            // 1) borrar en la API
            await deleteIntolerance(modalIntolerance._id);

            // 2) actualizar el estado de la lista
            setIntolerances(prev =>
                prev.filter(i => i._id !== modalIntolerance._id)
            );

            // 3) cerrar modal y limpiar
            setIsOpen(false);
            setModalIntolerance(null);
        } catch (error) {
            console.error('[IntolerancesList handleConfirmDelete] Error borrando la intolerancia', error);
        }
    }

    return (
        <>
            <ul className='grid gap-4 md:grid-cols-2'>
                {intolerances.map((intolerance) => (
                    <li key={intolerance._id}>
                        <IntoleranceCard
                            intolerance={intolerance}
                            setModalIntolerance={setModalIntolerance}
                            setIsOpen={setIsOpen}
                        />
                    </li>
                ))}
            </ul>

            <ProductConfirmDelete
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                modalProduct={modalIntolerance}
                onConfirm={handleConfirmDelete}
                entityLabel="intolerancia/alergia"
            />
        </>
    );
};

export default IntolerancesList;

