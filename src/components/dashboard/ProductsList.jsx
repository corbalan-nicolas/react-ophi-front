import ProductCard from "./ProductCard.jsx";
import {useState} from "react";
import ProductConfirmDelete from "./ProductConfirmDelete.jsx";

const ProductsList = ({products}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [modalProduct, setModalProduct] = useState({})

    console.log('[ProductList.jsx] Productos:', products)
    return (
        <>
            <ul className='grid gap-4 grid-cols-2'>
                {products.map((product) => (
                    <li>
                        <ProductCard key={product.id} product={product} setModalProduct={setModalProduct} setIsOpen={setIsOpen} />
                    </li>
                ))}
            </ul>

            <ProductConfirmDelete isOpen={isOpen} setIsOpen={setIsOpen} modalProduct={modalProduct}/>
        </>
    )
}

export default ProductsList