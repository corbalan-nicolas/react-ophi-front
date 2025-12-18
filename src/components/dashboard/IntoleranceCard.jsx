import EyeIcon from "../icons/EyeIcon.jsx";
import PencilIcon from "../icons/PencilIcon.jsx";
import TrashIcon from "../icons/TrashIcon.jsx";
import { Link } from "react-router";

const IntoleranceCard = ({ intolerance, setModalIntolerance, setIsOpen }) => {
    function handleDelete() {
        setModalIntolerance(intolerance);
        setIsOpen(true);
    }

    const typeLabel = intolerance.type === 1 ? 'Intolerancia' : intolerance.type === 2 ? 'Alergia' : 'N/A';
    const severityLabel = 
        intolerance.severity === 1 ? 'Leve' : 
        intolerance.severity === 2 ? 'Moderado' : 
        intolerance.severity === 3 ? 'Severo' : 
        intolerance.severity === 4 ? 'Muy severo' : 'N/A';

    return (
        <article className="grid grid-rows-3 grid-cols-[1fr_auto] gap-2">
            <div className="col-span-1 row-span-full border glass rounded-lg p-3">
                <div className="flex flex-col gap-0 mb-4">
                    <h2 className="font-semibold text-lg leading-tight">
                        {intolerance.name}
                    </h2>
                    <p className="text-[11px] leading-tight text-zinc-500">
                        <span className="font-medium">Tipo:</span> {typeLabel}
                    </p>
                </div>
                
                <div className="mt-2 flex flex-col gap-1">
                    <p className="text-sm text-zinc-500 line-clamp-2">
                        {intolerance.description}
                    </p>

                    <p className="text-sm text-zinc-500 mt-2">
                        <span className="font-medium">Severidad:</span> {severityLabel}
                    </p>

                    <p className="text-sm text-zinc-500">
                        <span className="font-medium">Síntomas:</span> {
                            Array.isArray(intolerance.symptoms) 
                                ? intolerance.symptoms.slice(0, 3).join(', ') + (intolerance.symptoms.length > 3 ? '...' : '')
                                : intolerance.symptoms
                        }
                    </p>
                </div>
            </div>

            <Link
                to={`/intolerancia/${intolerance._id}`}
                className="text-black/60 p-2 glass glass--events content-center"
                title="Ver detalle"
            >
                <EyeIcon />
            </Link>

            <Link
                to={`/dashboard/intolerancias/${intolerance._id}/editar`}
                className="text-black/60 p-2 glass glass--events content-center"
                title="Editar intolerancia"
            >
                <PencilIcon />
            </Link>

            <button
                className="text-black/60 p-2 glass glass--events content-center"
                onClick={handleDelete}
                title="Eliminar intolerancia"
            >
                <TrashIcon />
            </button>
        </article>
    );
};

export default IntoleranceCard;

