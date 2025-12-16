import {useEffect, useState} from "react";
import {getAllProducts} from "../../services/Product.js";
import InlineLoader from "../loaders/InlineLoader.jsx";
import ProductsList from "./ProductsList.jsx";
import {Link} from "react-router";
import PlusIcon from "../icons/PlusIcon.jsx";
import ProductConfirmDelete from "./ProductConfirmDelete.jsx";

const ProductsSection = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([])
    const [isOpen, setIsOpen] = useState(false);
    const [modalProduct, setModalProduct] = useState(null);

    useEffect(() => {
        async function getProducts() {
            setLoading(true);

            try {
                const result = await getAllProducts();
                setProducts(result);
            } catch (error) {
                console.error('[ProductsSection.jsx getProducts()] Error al obtener los productos', error)
            }

            setLoading(false);
        }

        getProducts();
    }, [])

    async function handleConfirmDelete() {
        if (!modalProduct) return;

        try {
            await deleteFood(modalProduct._id);
            setProducts(prev => prev.filter(p => p._id !== modalProduct._id));
            setIsOpen(false);
            setModalProduct(null);
        } catch (error) {
            console.error('[ProductsSection handleConfirmDelete] Error borrando producto', error);
        }
    }

    return (
        <>
            <div className='flex justify-end mb-4'>
                <Link
                    to="/dashboard/productos/crear"
                    className='p-2 flex gap-2 glass glass--events'
                >
                    <PlusIcon />
                    Agregar nuevo producto
                </Link>
            </div>

            {/* Modal de confirmación de borrado */}
            {isOpen && modalProduct && (
                <ProductConfirmDelete
                    product={modalProduct}
                    onCancel={handleCancelDelete}
                    onConfirm={handleConfirmDelete}
                    entityLabel="producto"
                />
            )}

            { loading ? <InlineLoader /> : <ProductsList products={products} setProducts={setProducts} /> }
        </>
    );
};

export default ProductsSection;