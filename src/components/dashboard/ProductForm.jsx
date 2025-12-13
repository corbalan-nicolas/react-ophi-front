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

const ProductForm = ({handleSubmit, initialState = {}}) => {
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

        try {
            console.log('[validate()] Execute handleSubmit', formData)
            await handleSubmit({
                ...formData,
                // TODO: Información nutricional (no sé si necesita llegar como un objeto o qué, pero no creo que sea como lo tenemos en el formData)
            })
        } catch (error) {
            setError('¡Ups! Error desconocido. Por favor inténtelo más tarde')
            console.log('[ProductForm] Unknown error', {error})
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
                    className='block w-full border-white/30 border-1 bg-black/20 focus-visible:bg-black/30 text-white/80 rounded-lg py-2 px-3 grow'
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
                    className='block w-full border-white/30 border-1 bg-black/20 focus-visible:bg-black/30 text-white/80 rounded-lg py-2 px-3 grow'
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
                    className='block w-full border-white/30 border-1 bg-black/20 focus-visible:bg-black/30 text-white/80 rounded-lg py-2 px-3 grow'
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
                    className='block w-full border-white/30 border-1 bg-black/20 focus-visible:bg-black/30 text-white/80 rounded-lg py-2 px-3 grow'
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
                    className='block w-full border-white/30 border-1 bg-black/20 focus-visible:bg-black/30 text-white/80 rounded-lg py-2 px-3 grow'
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
                    className='block w-full border-white/30 border-1 bg-black/20 focus-visible:bg-black/30 text-white/80 rounded-lg py-2 px-3 grow'
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
                    className='block w-full border-white/30 border-1 bg-black/20 focus-visible:bg-black/30 text-white/80 rounded-lg py-2 px-3 grow'
                    id="origin"
                    name="origin"
                    type="text"
                    value={formData.origin}
                    onChange={handleChange}
                    disabled={loading}
                />
            </div>

            {/*
            <div className="mb-4">
                <label className="mb-1 inline-block linear-to-r" htmlFor="nutritional">Información nutricional</label>
                {/* Calorías, grasas, azúcar, proteína /}
            <input
                className='block w-full border-white/30 border-1 bg-black/20 focus-visible:bg-black/30 text-white/80 rounded-lg py-2 px-3 grow'
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
            >Añadir producto</button>
        </form>
    )
}

export default ProductForm