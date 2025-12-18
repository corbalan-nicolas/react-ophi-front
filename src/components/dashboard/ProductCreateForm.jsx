import ProductForm from "./ProductForm.jsx";
import {postNewFood} from "../../services/Product.js";
import { useNavigate } from "react-router";

const ProductCreateForm = () => {
    const navigate = useNavigate();

    async function handleSubmit(formData) {
        try {
            await postNewFood(formData);
            navigate('/dashboard/productos');
        } catch (error) {
            console.error('[ProductCreateForm handleSubmit] Error creando el producto', error);
            // Relanzar el error para que ProductForm lo capture y muestre
            throw error;
        }
    }

    return (
        <ProductForm handleSubmit={handleSubmit} />
    )
}

export default ProductCreateForm