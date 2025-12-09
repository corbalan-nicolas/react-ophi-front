import { useEffect, useRef } from "react";

const ProductConfirmDelete = ({ modalProduct, isOpen, setIsOpen }) => {
    const dialog = useRef(null)

    useEffect(() => {
        if (isOpen) {
            dialog.current.showModal()
        } else {
            dialog.current.close()
        }
    }, [isOpen])

    function handleConfirm() {
        try {
            // TODO: Fetch to delete
        } catch (error) {
            console.log('[ProductConfirmDelete] Unknown error', {error})
        }
    }

    return (
        <dialog ref={dialog} onClose={() => setIsOpen(false)} className='m-auto glass border p-4'>
            <p>¿Estás seguro de que quieres eliminar este producto?</p>

            <p>{modalProduct.name}</p>

            <button
                className='py-1 px-3 border'
                type='button'
                onClick={() => dialog.current.close()}
            >
                Cancelar
            </button>

            <button
                className='py-1 px-3 border'
                onClick={handleConfirm}
            >
                Eliminar
            </button>
        </dialog>
    )
}

export default ProductConfirmDelete