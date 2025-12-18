import { useEffect, useRef } from "react";

const ProductConfirmDelete = ({ modalProduct, isOpen, setIsOpen, onConfirm, entityLabel = "producto" }) => {
    const dialog = useRef(null);

    useEffect(() => {
        if (!dialog.current) return;

        if (isOpen) {
            dialog.current.showModal();
        } else {
            dialog.current.close();
        }
    }, [isOpen]);

    function handleCancel() {
        setIsOpen(false);
    }

    async function handleConfirm() {
        try {
            await onConfirm();
        } catch (error) {
            console.log('[ProductConfirmDelete] Unknown error', { error });
        }
    }

    if (!modalProduct) return null;

    return (
        <dialog
            ref={dialog}
            onClose={handleCancel}
            className='m-auto glass border p-4'
        >
            <p>¿Estás seguro de que quieres eliminar este {entityLabel}?</p>

            <p className="font-semibold mb-2">{modalProduct.name}</p>

            <button
                className='py-1 px-3 border mr-2 rounded-md cursor-pointer transition-colors duration-200  hover:bg-zinc-700 hover:text-white'
                type='button'
                onClick={handleCancel}
            >
                Cancelar
            </button>

            <button
                className='py-1 px-3 border mr-2 rounded-md cursor-pointer transition-colors duration-200  hover:bg-zinc-700 hover:text-white'
                type='button'
                onClick={handleConfirm}
            >
                Eliminar
            </button>
        </dialog>
    );
};

export default ProductConfirmDelete;