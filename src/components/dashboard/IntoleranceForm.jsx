import React, {useState} from "react";
import DangerIcon from "../icons/DangerIcon.jsx";

const defaultFormData = {
    name: '',
    description: '',
    type: '',
    symptoms: '',
    severity: '',
    restrictedIngredients: ''
}

const IntoleranceForm = ({handleSubmit, initialState = {}, submitLabel = "Añadir intolerancia"}) => {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({...defaultFormData, ...initialState})
    const [error, setError] = useState('')

    function handleChange(e) {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    async function validate(event) {
        event.preventDefault()

        setLoading(true)
        setError('')

        const doesntHaveAllRequiredValues = !formData.name || !formData.description || !formData.type || !formData.symptoms || !formData.severity || !formData.restrictedIngredients

        if (doesntHaveAllRequiredValues) {
            setLoading(false)
            setError('Todos los campos son obligatorios')
            console.log({formData})
            return
        }

        // Validar que type sea 1 o 2
        if (formData.type !== '1' && formData.type !== '2') {
            setLoading(false)
            setError('El tipo debe ser 1 (intolerancia) o 2 (alergia)')
            return
        }

        // Validar que severity sea 1, 2, 3 o 4
        if (!['1', '2', '3', '4'].includes(formData.severity)) {
            setLoading(false)
            setError('La severidad debe ser 1 (leve), 2 (moderado), 3 (severo) o 4 (muy severo)')
            return
        }

        try {
            console.log('[validate()] Execute handleSubmit', formData)
            await handleSubmit({
                ...formData,
                // Convertir type y severity a números
                type: parseInt(formData.type),
                severity: parseInt(formData.severity)
            })
        } catch (error) {
            setError(error.message || '¡Ups! Error desconocido. Por favor inténtelo más tarde')
            console.log('[IntoleranceForm] Error:', {error})
        }

        setLoading(false)
    }

    return (
        <form action="#" method='post' onSubmit={validate}>
            {error && (
                <div className='border rounded-lg p-4 glass flex justify-center gap-2 animate-highlight glass--danger mb-4'>
                    <DangerIcon />
                    <p>{error}</p>
                </div>
            )}

            <div className="mb-4">
                <label className="mb-1 inline-block linear-to-r" htmlFor="name">Nombre</label>
                <input
                    className='block w-full border-white/30 border bg-black/20 focus-visible:bg-black/30 text-white/80 rounded-lg py-2 px-3 grow'
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Ej: Intolerancia a la lactosa"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={loading}
                    autoFocus
                />
            </div>

            <div className="mb-4">
                <label className="mb-1 inline-block linear-to-r" htmlFor="description">Descripción</label>
                <textarea
                    className='block w-full border-white/30 border bg-black/20 focus-visible:bg-black/30 text-white/80 rounded-lg py-2 px-3 grow'
                    id="description"
                    name="description"
                    rows="3"
                    placeholder="Descripción detallada de la intolerancia o alergia"
                    value={formData.description}
                    onChange={handleChange}
                    disabled={loading}
                />
            </div>

            <div className="mb-4">
                <label className="mb-1 inline-block linear-to-r" htmlFor="type">Tipo</label>
                <select
                    className='block w-full border-white/30 border bg-black/20 focus-visible:bg-black/30 text-white/80 rounded-lg py-2 px-3 grow'
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    disabled={loading}
                >
                    <option value="">Seleccione un tipo</option>
                    <option value="1">Intolerancia</option>
                    <option value="2">Alergia</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="mb-1 inline-block linear-to-r" htmlFor="symptoms">Síntomas (separados por comas)</label>
                <input
                    className='block w-full border-white/30 border bg-black/20 focus-visible:bg-black/30 text-white/80 rounded-lg py-2 px-3 grow'
                    id="symptoms"
                    name="symptoms"
                    type="text"
                    placeholder="Ej: Dolor abdominal, hinchazón, diarrea"
                    value={formData.symptoms}
                    onChange={handleChange}
                    disabled={loading}
                />
            </div>

            <div className="mb-4">
                <label className="mb-1 inline-block linear-to-r" htmlFor="severity">Severidad</label>
                <select
                    className='block w-full border-white/30 border bg-black/20 focus-visible:bg-black/30 text-white/80 rounded-lg py-2 px-3 grow'
                    id="severity"
                    name="severity"
                    value={formData.severity}
                    onChange={handleChange}
                    disabled={loading}
                >
                    <option value="">Seleccione la severidad</option>
                    <option value="1">Leve</option>
                    <option value="2">Moderado</option>
                    <option value="3">Severo</option>
                    <option value="4">Muy severo</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="mb-1 inline-block linear-to-r" htmlFor="restrictedIngredients">Ingredientes restringidos (separados por comas)</label>
                <input
                    className='block w-full border-white/30 border bg-black/20 focus-visible:bg-black/30 text-white/80 rounded-lg py-2 px-3 grow'
                    id="restrictedIngredients"
                    name="restrictedIngredients"
                    type="text"
                    placeholder="Ej: Lactosa, leche, crema, queso"
                    value={formData.restrictedIngredients}
                    onChange={handleChange}
                    disabled={loading}
                />
            </div>

            <button
                className='py-2 px-4 glass glass--events w-full col-span-full'
                type="submit"
                disabled={loading}
            >{submitLabel}</button>
        </form>
    )
}

export default IntoleranceForm

