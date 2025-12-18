import React from "react";

const Intolerance = ({ intolerance }) => {
    const typeLabel = intolerance.type === 1 ? 'Intolerancia' : intolerance.type === 2 ? 'Alergia' : 'N/A';
    const severityLabel = 
        intolerance.severity === 1 ? 'Leve' : 
        intolerance.severity === 2 ? 'Moderado' : 
        intolerance.severity === 3 ? 'Severo' : 
        intolerance.severity === 4 ? 'Muy severo' : 'N/A';

    const severityColor = 
        intolerance.severity === 1 ? 'text-green-400' : 
        intolerance.severity === 2 ? 'text-yellow-400' : 
        intolerance.severity === 3 ? 'text-orange-400' : 
        intolerance.severity === 4 ? 'text-red-400' : 'text-gray-400';

    return (
        <>
            <h1 className='text-6xl mb-6'>{intolerance.name}</h1>

            <div className='mb-6 flex gap-4 items-center'>
                <span className='glass px-4 py-2 rounded-lg text-sm font-medium'>
                    {typeLabel}
                </span>
                <span className={`glass px-4 py-2 rounded-lg text-sm font-medium ${severityColor}`}>
                    Severidad: {severityLabel}
                </span>
            </div>

            <div className='md:grid grid-cols-2 gap-6'>
                <div>
                    <h3 className='text-4xl mb-3 mt-6'>Descripción</h3>
                    <p className="glass rounded-lg p-4">{intolerance.description}</p>
                </div>

                <div>
                    <h3 className='text-4xl mb-3 mt-6'>Síntomas</h3>
                    <ul className="glass rounded-lg p-4 list-disc list-inside space-y-2">
                        {Array.isArray(intolerance.symptoms) ? (
                            intolerance.symptoms.map((symptom, index) => (
                                <li key={index}>{symptom}</li>
                            ))
                        ) : (
                            <li>{intolerance.symptoms}</li>
                        )}
                    </ul>
                </div>

                <div className='col-span-2'>
                    <h3 className='text-4xl mb-3 mt-6'>Ingredientes restringidos</h3>
                    <div className="glass rounded-lg p-4">
                        <p className="mb-2 text-sm text-zinc-400">
                            Estos ingredientes deben ser evitados por personas con esta condición:
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {Array.isArray(intolerance.restrictedIngredients) ? (
                                intolerance.restrictedIngredients.map((ingredient, index) => (
                                    <span 
                                        key={index} 
                                        className="glass px-3 py-1 rounded-full text-sm border border-red-400/30"
                                    >
                                        {ingredient}
                                    </span>
                                ))
                            ) : (
                                <span className="glass px-3 py-1 rounded-full text-sm border border-red-400/30">
                                    {intolerance.restrictedIngredients}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intolerance;

