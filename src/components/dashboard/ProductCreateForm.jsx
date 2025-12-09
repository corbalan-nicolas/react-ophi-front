import ProductForm from "./ProductForm.jsx";
import {postNewFood} from "../../services/Product.js";

const ProductCreateForm = () => {
    async function handleSubmit(formData) {
        try {
            await postNewFood(formData);
        } catch (error) {
            console.error('[ProductCreateForm handleSubmit] Error creando el producto', error)
        }
    }

    return (
        <ProductForm handleSubmit={handleSubmit} />
    )
}

export default ProductCreateForm