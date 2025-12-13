import ProductCard from "./ProductCard.jsx";
import { useState } from "react";
import ProductConfirmDelete from "./ProductConfirmDelete.jsx";
import { deleteFood } from "../../services/Product.js";

const ProductsList = ({ products, setProducts }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalProduct, setModalProduct] = useState(null);

    console.log('[ProductList.jsx] Productos:', products);

    async function handleConfirmDelete() {
        if (!modalProduct) return;

        try {
            // 1) borrar en la API
            await deleteFood(modalProduct._id);

            // 2) actualizar el estado de la lista
            setProducts(prev =>
                prev.filter(p => p._id !== modalProduct._id)
            );

            // 3) cerrar modal y limpiar
            setIsOpen(false);
            setModalProduct(null);
        } catch (error) {
            console.error('[ProductsList handleConfirmDelete] Error borrando el producto', error);
        }
    }

    return (
        <>
            <ul className='grid gap-4 grid-cols-2'>
                {products.map((product) => (
                    <li key={product._id}>
                        <ProductCard
                            product={product}
                            setModalProduct={setModalProduct}
                            setIsOpen={setIsOpen}
                        />
                    </li>
                ))}
            </ul>

            <ProductConfirmDelete
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                modalProduct={modalProduct}
                onConfirm={handleConfirmDelete}
            />
        </>
    );
};

export default ProductsList;
