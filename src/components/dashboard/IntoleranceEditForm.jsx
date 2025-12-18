import IntoleranceForm from "./IntoleranceForm.jsx";
import { useLoaderData, useNavigate } from "react-router";
import { updateIntolerance } from "../../services/Intolerances.js";

const IntoleranceEditForm = () => {
    const { intolerance } = useLoaderData();
    const navigate = useNavigate();

    if (!intolerance) {
        return <p>No se pudo cargar la intolerancia para editar.</p>;
    }

    const initialState = {
        ...intolerance,
        // symptoms viene como array de la API, el input espera string
        symptoms: Array.isArray(intolerance.symptoms) ? intolerance.symptoms.join(", ") : intolerance.symptoms || "",
        // restrictedIngredients viene como array de la API, el input espera string
        restrictedIngredients: Array.isArray(intolerance.restrictedIngredients) ? intolerance.restrictedIngredients.join(", ") : intolerance.restrictedIngredients || "",
        // Convertir type y severity a string para el select
        type: intolerance.type?.toString() || "",
        severity: intolerance.severity?.toString() || ""
    };

    async function handleSubmit(formData) {
        try {
            await updateIntolerance(intolerance._id, formData);
            navigate("/dashboard/intolerancias");
        } catch (error) {
            console.error("[IntoleranceEditForm handleSubmit] Error editando la intolerancia", error);
            throw error;
        }
    }

    return (
        <IntoleranceForm
            handleSubmit={handleSubmit}
            initialState={initialState}
            submitLabel="Guardar cambios"
        />
    );
};

export default IntoleranceEditForm;

