import EyeIcon from "../icons/EyeIcon.jsx";
import PencilIcon from "../icons/PencilIcon.jsx";
import TrashIcon from "../icons/TrashIcon.jsx";
import {Link} from "react-router";

const ProductCard = ({product, setModalProduct, setIsOpen}) => {
    function handleDelete() {
        setModalProduct(product)
        setIsOpen(true)
    }

    return (
        <article className="grid grid-rows-3 grid-cols-[1fr_auto] gap-4">
            <div className="col-span-1 row-span-full border glass rounded-lg p-2">
                <h2 className='text-2xl'>{product.name}</h2>
                <p className='text-sm text-black/50 hover:text-black transition'
                >{product.brand} · {product.category} · {product.barcode}
                </p>
            </div>

            <Link
                to={`/producto/${product.normalizedName}`}
                className='text-black/60 p-2 glass glass--events'
                title='Ver detalle'
            ><EyeIcon /></Link>

            <Link
                to={`/dashboard/productos/${product._id}/editar`}
                className='text-black/60 p-2 glass glass--events'
                title='Editar producto'
            ><PencilIcon /></Link>

            <button
                className='text-black/60 p-2 glass glass--events'
                onClick={handleDelete}
                title='Eliminar producto'
            ><TrashIcon /></button>
        </article>
    )
}

export default ProductCard