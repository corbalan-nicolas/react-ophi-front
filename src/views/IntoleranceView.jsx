import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Intolerance from "../components/Intolerance";
import { getIntoleranceById } from "../services/Intolerances";

const IntoleranceView = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [intolerance, setIntolerance] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getIntolerance() {
            try {
                setLoading(true);
                const result = await getIntoleranceById(params.id);
                console.log('Intolerancia obtenida:', result);
                if (result) {
                    setIntolerance(result);
                } else {
                    setIntolerance(null);
                }
            } catch (error) {
                console.error('Error al buscar intolerancia por ID', error);
                setIntolerance(null);
            } finally {
                setLoading(false);
            }
        }

        getIntolerance();
    }, [params.id])
    
    if (loading) {
        return <h2>Cargando...</h2>;
    }

    return (
        <>
            {intolerance ? 
                <Intolerance intolerance={intolerance} />
            :
                <h2>Intolerancia no encontrada</h2>
            }
        </>
    );
}

export default IntoleranceView;

