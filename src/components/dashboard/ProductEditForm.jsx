import ProductForm from "./ProductForm.jsx";
import { useLoaderData, useNavigate } from "react-router";
import { updateFood } from "../../services/Product.js";

const ProductEditForm = () => {
    const { product } = useLoaderData();
    const navigate = useNavigate();

    if (!product) {
        return <p>No se pudo cargar el producto para editar.</p>;
    }

    const initialState = {
        ...product,
        // ingredients viene como array de la API, el input espera string
        ingredients: Array.isArray(product.ingredients) ? product.ingredients.join(", ") : product.ingredients || "",
        // datos nutricionales desde nutritionalInfo viene como array, los input esperan strings por separado
        calories: product.nutritionalInfo?.calories?.toString() ?? "",
        fats: product.nutritionalInfo?.fat?.toString() ?? "",
        sugar: product.nutritionalInfo?.sugar?.toString() ?? "",
        protein: product.nutritionalInfo?.protein?.toString() ?? "",
    };

    async function handleSubmit(formData) {
        try {
            await updateFood(product._id, formData);
            navigate("/dashboard/productos");
        } catch (error) {
            console.error("[ProductEditForm handleSubmit] Error editando el producto", error);
        }
    }

    return (
        <ProductForm
            handleSubmit={handleSubmit}
            initialState={initialState}
        />
    );
};

export default ProductEditForm;
