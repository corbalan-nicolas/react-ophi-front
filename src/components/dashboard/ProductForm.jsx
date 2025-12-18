import React, {useState} from "react";
import DangerIcon from "../icons/DangerIcon.jsx";

const defaultFormData = {
    name: '',
    barcode: '',
    ingredients: '',
    traces: '',
    brand: '',
    category: '',
    origin: '',
    /* Nutritional information */
    calories: '',
    fats: '',
    sugar: '',
    protein: ''
}

const ProductForm = ({handleSubmit, initialState = {}, submitLabel = "Añadir producto"}) => {
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

        const doesntHaveAllRequiredValues = !formData.name || !formData.barcode || !formData.ingredients || !formData.traces || !formData.brand || !formData.category || !formData.origin

        if (doesntHaveAllRequiredValues) {
            setLoading(false)
            setError('Todos los campos son obligatorios')
            console.log({formData})
            return
        }

        if (formData.barcode.length !== 13) {
            setLoading(false)
            setError('El código de barras debe tener exactamente 13 dígitos')
            return
        }

        try {
            console.log('[validate()] Execute handleSubmit', formData)
            await handleSubmit({
                ...formData,
                // TODO: Información nutricional (no sé si necesita llegar como un objeto o qué, pero no creo que sea como lo tenemos en el formData) --> R: Viajan dentro del formData
            })
        } catch (error) {
            setError(error.message || '¡Ups! Error desconocido. Por favor inténtelo más tarde')
            console.log('[ProductForm] Error:', {error})
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
                <label className="mb-1 inline-block linear-to-r" htmlFor="name">Nombre del producto</label>
                <input
                    className='block w-full border-white/30 border bg-black/20 focus-visible:bg-black/30 text-white/80 rounded-lg py-2 px-3 grow'
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={loading}
                    autoFocus
                />
            </div>

            <div className="mb-4">
                <label className="mb-1 inline-block linear-to-r" htmlFor="barcode">Código de barras</label>
                <input
                    className='block w-full border-white/30 border bg-black/20 focus-visible:bg-black/30 text-white/80 rounded-lg py-2 px-3 grow'
                    id="barcode"
                    name="barcode"
                    type="text"
                    value={formData.barcode}
                    onChange={handleChange}
                    disabled={loading}
                />
            </div>

            <div className="mb-4">
                <label className="mb-1 inline-block linear-to-r" htmlFor="ingredients">Ingredientes</label>
                <input
                    className='block w-full border-white/30 border bg-black/20 focus-visible:bg-black/30 text-white/80 rounded-lg py-2 px-3 grow'
                    id="ingredients"
                    name="ingredients"
                    type="text"
                    value={formData.ingredients}
                    onChange={handleChange}
                    disabled={loading}
                />
            </div>

            <div className="mb-4">
                <label className="mb-1 inline-block linear-to-r" htmlFor="traces">Trazas</label>
                <input
                    className='block w-full border-white/30 border bg-black/20 focus-visible:bg-black/30 text-white/80 rounded-lg py-2 px-3 grow'
                    id="traces"
                    name="traces"
                    type="text"
                    value={formData.traces}
                    onChange={handleChange}
                    disabled={loading}
                />
            </div>

            <div className="mb-4">
                <label className="mb-1 inline-block linear-to-r" htmlFor="brand">Marca</label>
                <input
                    className='block w-full border-white/30 border bg-black/20 focus-visible:bg-black/30 text-white/80 rounded-lg py-2 px-3 grow'
                    id="brand"
                    name="brand"
                    type="text"
                    value={formData.brand}
                    onChange={handleChange}
                    disabled={loading}
                />
            </div>

            <div className="mb-4">
                <label className="mb-1 inline-block linear-to-r" htmlFor="category">Categoría</label>
                <input
                    className='block w-full border-white/30 border bg-black/20 focus-visible:bg-black/30 text-white/80 rounded-lg py-2 px-3 grow'
                    id="category"
                    name="category"
                    type="text"
                    value={formData.category}
                    onChange={handleChange}
                    disabled={loading}
                />
            </div>

            <div className="mb-4">
                <label className="mb-1 inline-block linear-to-r" htmlFor="origin">Origen</label>
                <input
                    className='block w-full border-white/30 border bg-black/20 focus-visible:bg-black/30 text-white/80 rounded-lg py-2 px-3 grow'
                    id="origin"
                    name="origin"
                    type="text"
                    value={formData.origin}
                    onChange={handleChange}
                    disabled={loading}
                />
            </div>

            <div className="mb-4">
                <p className="mb-1 inline-block linear-to-r">
                    Información nutricional (por 100g / por porción)
                </p>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="mb-1 block text-sm" htmlFor="calories">
                            Calorías (kcal)
                        </label>
                        <input
                            className='block w-full border-white/30 border bg-black/20 focus-visible:bg-black/30 text-white/80 rounded-lg py-2 px-3 grow'
                            id="calories"
                            name="calories"
                            type="number"
                            min="0"
                            value={formData.calories}
                            onChange={handleChange}
                            disabled={loading}
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm" htmlFor="fats">
                            Grasas (g)
                        </label>
                        <input
                            className='block w-full border-white/30 border bg-black/20 focus-visible:bg-black/30 text-white/80 rounded-lg py-2 px-3 grow'
                            id="fats"
                            name="fats"
                            type="number"
                            min="0"
                            step="0.1"
                            value={formData.fats}
                            onChange={handleChange}
                            disabled={loading}
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm" htmlFor="sugar">
                            Azúcar (g)
                        </label>
                        <input
                            className='block w-full border-white/30 border bg-black/20 focus-visible:bg-black/30 text-white/80 rounded-lg py-2 px-3 grow'
                            id="sugar"
                            name="sugar"
                            type="number"
                            min="0"
                            step="0.1"
                            value={formData.sugar}
                            onChange={handleChange}
                            disabled={loading}
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm" htmlFor="protein">
                            Proteínas (g)
                        </label>
                        <input
                            className='block w-full border-white/30 border bg-black/20 focus-visible:bg-black/30 text-white/80 rounded-lg py-2 px-3 grow'
                            id="protein"
                            name="protein"
                            type="number"
                            min="0"
                            step="0.1"
                            value={formData.protein}
                            onChange={handleChange}
                            disabled={loading}
                        />
                    </div>
                </div>
            </div>

            {/*
            <div className="mb-4">
                <label className="mb-1 inline-block linear-to-r" htmlFor="nutritional">Información nutricional</label>
                {/* Calorías, grasas, azúcar, proteína /}
            <input
                className='block w-full border-white/30 border bg-black/20 focus-visible:bg-black/30 text-white/80 rounded-lg py-2 px-3 grow'
                id="nutritional"
                name="nutritional"
                type="text"
                value={formData.nutritional}
                onChange={handleChange}
                disabled={loading}
            />
        </div>
            */}

            <button
                className='py-2 px-4 glass glass--events w-full col-span-full'
                type="submit"
                disabled={loading}
            >{submitLabel}</button>
        </form>
    )
}

export default ProductForm