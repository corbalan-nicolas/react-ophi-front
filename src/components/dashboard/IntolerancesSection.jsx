import {useEffect, useState} from "react";
import {getAllIntolerances} from "../../services/Intolerances.js";
import InlineLoader from "../loaders/InlineLoader.jsx";
import IntolerancesList from "./IntolerancesList.jsx";
import {Link} from "react-router";
import PlusIcon from "../icons/PlusIcon.jsx";

const IntolerancesSection = () => {
    const [loading, setLoading] = useState(false);
    const [intolerances, setIntolerances] = useState([])

    useEffect(() => {
        async function getIntolerances() {
            setLoading(true);

            try {
                const result = await getAllIntolerances();
                setIntolerances(result);
            } catch (error) {
                console.error('[IntolerancesSection.jsx getIntolerances()] Error al obtener las intolerancias', error)
            }

            setLoading(false);
        }

        getIntolerances();
    }, [])

    return (
        <>
            <div className='flex justify-end mb-4'>
                <Link
                    to="/dashboard/intolerancias/crear"
                    className='p-2 flex gap-2 glass glass--events'
                >
                    <PlusIcon />
                    Agregar nueva intolerancia/alergia
                </Link>
            </div>

            { loading ? <InlineLoader /> : <IntolerancesList intolerances={intolerances} setIntolerances={setIntolerances} /> }
        </>
    );
};

export default IntolerancesSection;

