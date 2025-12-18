import EyeIcon from "../icons/EyeIcon.jsx";
import PencilIcon from "../icons/PencilIcon.jsx";
import TrashIcon from "../icons/TrashIcon.jsx";
import { Link } from "react-router";

const ProductCard = ({ product, setModalProduct, setIsOpen }) => {
    function handleDelete() {
        setModalProduct(product);
        setIsOpen(true);
    }

    return (
        <article className="grid grid-rows-3 grid-cols-[1fr_auto] gap-2">
            <div className="col-span-1 row-span-full border glass rounded-lg p-3">
                <div className="flex flex-col gap-0 mb-4">
                <h2 className="font-semibold text-lg leading-tight">
                    {product.name}
                </h2>
                <p className="text-[11px] leading-tight text-zinc-500">
                    <span className="font-medium">Código:</span> {product.barcode}
                </p>
                </div>
                
                <div className="mt-2 flex flex-col gap-1">
                <p className="text-sm text-zinc-500">
                    <span className="font-medium">Marca:</span> {product.brand}
                </p>

                <p className="text-sm text-zinc-500">
                    <span className="font-medium">Categoría:</span> {product.category}
                </p>
                </div>
            </div>

            <Link
                to={`/producto/${product.normalizedName}`}
                className="text-black/60 p-2 glass glass--events content-center"
                title="Ver detalle"
            >
                <EyeIcon />
            </Link>

            <Link
                to={`/dashboard/productos/${product._id}/editar`}
                className="text-black/60 p-2 glass glass--events content-center"
                title="Editar producto"
            >
                <PencilIcon />
            </Link>

            <button
                className="text-black/60 p-2 glass glass--events content-center"
                onClick={handleDelete}
                title="Eliminar producto"
            >
                <TrashIcon />
            </button>
        </article>
    );
};

export default ProductCard;
