import ProductForm from "./ProductForm.jsx";
import {useLoaderData} from "react-router";

const ProductEditForm = () => {
    const loaderData = useLoaderData()

    async function handleSubmit(formData) {
        try {
            // await putFood(formData);
        } catch (error) {
            console.error('[ProductEditForm handleSubmit] Error editando el producto', error)
        }
    }

    return (
        <ProductForm handleSubmit={handleSubmit} initialState={loaderData.product} />
    )
}

export default ProductEditForm