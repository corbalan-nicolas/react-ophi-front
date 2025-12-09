import {useEffect, useState} from "react";
import {getAllProducts} from "../../services/Product.js";
import InlineLoader from "../loaders/InlineLoader.jsx";
import ProductsList from "./ProductsList.jsx";
import {Link} from "react-router";
import PlusIcon from "../icons/PlusIcon.jsx";

const ProductsSection = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([])

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

            { loading ? <InlineLoader /> : <ProductsList products={products} /> }
        </>
    )
}

export default ProductsSection;