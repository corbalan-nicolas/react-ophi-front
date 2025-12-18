import IntoleranceForm from "./IntoleranceForm.jsx";
import {postNewIntolerance} from "../../services/Intolerances.js";
import { useNavigate } from "react-router";

const IntoleranceCreateForm = () => {
    const navigate = useNavigate();

    async function handleSubmit(formData) {
        try {
            await postNewIntolerance(formData);
            navigate('/dashboard/intolerancias');
        } catch (error) {
            console.error('[IntoleranceCreateForm handleSubmit] Error creando la intolerancia', error);
            // Relanzar el error para que IntoleranceForm lo capture y muestre
            throw error;
        }
    }

    return (
        <IntoleranceForm handleSubmit={handleSubmit} />
    )
}

export default IntoleranceCreateForm

