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
            <div className="col-span-1 row-span-full border glass rounded-lg">
                <h2>{product.name}</h2>
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