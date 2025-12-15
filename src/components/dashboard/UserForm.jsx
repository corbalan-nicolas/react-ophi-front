import React, {useEffect, useState} from "react";
import DangerIcon from "../icons/DangerIcon.jsx";
import { getAllIntolerances } from "../../services/Intolerances.js";

const defaultFormData = {
    name: '',
    email: '',
    password: '',
    role: '',
    allergy: '',
}

const UserForm = ({handleSubmit, initialState = {}}) => {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({...defaultFormData, ...initialState})
    const [error, setError] = useState('');
    const [intolerances, setIntolerances] = useState([]);

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

        const doesntHaveAllRequiredValues = !formData.name || !formData.email || !formData.allergy || !formData.password;

        if (doesntHaveAllRequiredValues) {
            setLoading(false)
            setError('Todos los campos son obligatorios')
            // console.log({formData})
            return
        }

        try {
            console.log('[validate()] Execute handleSubmit', formData)
            await handleSubmit({
                ...formData,
            })
        } catch (error) {
            setError('¡Ups! Error desconocido. Por favor inténtelo más tarde')
            console.log('[UserForm] Unknown error', {error})
        }

        setLoading(false)
    }

    useEffect(() => {
        async function getIntolerances() {
            try {
                    const result = await getAllIntolerances();
                
                    if(result) {
                        setIntolerances(result);
                    }
                    console.log(intolerances);
                } catch (error) {
                    console.error('Error al obtener las intolerancias');
                }
            }
        
        getIntolerances();
    }, [])

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
                <label className="mb-1 inline-block linear-to-r" htmlFor="email">Email</label>
                <input
                    className='block w-full border-white/30 border-1 bg-black/20 focus-visible:bg-black/30 text-white/80 rounded-lg py-2 px-3 grow'
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={loading}
                />
            </div>

            {Object.keys(initialState).length === 0
                ?
            
                <div className="mb-4">
                    <label className="mb-1 inline-block linear-to-r" htmlFor="password">Contraseña</label>
                    <input
                        className='block w-full border-white/30 border-1 bg-black/20 focus-visible:bg-black/30 text-white/80 rounded-lg py-2 px-3 grow'
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        disabled={loading}
                />
                </div>
                : 
                ''
            } 
            

            <div className="mb-4">
                <label className="mb-1 inline-block linear-to-r" htmlFor="role">Rol</label>
                <select
                    className='block w-full border-white/30 border-1 bg-black/20 focus-visible:bg-black/30 text-white/80 rounded-lg py-2 px-3 grow'
                    id="role"
                    name="role"
                    type="text"
                    value={formData.role}
                    onChange={handleChange}
                    disabled={loading}
                >
                    {Object.keys(initialState).length === 0 ?
                        <option value="">Selecciona un rol...</option>
                        :
                        ''
                    }
                    <option value="admin">Admin</option>
                    <option value="user">Usuario</option>
                </select>
            </div>

            <div className="mb-4">
                <label
                    className='mb-1 inline-block linear-to-r'
                    htmlFor="allergy"
                >Alergia</label>

                <select
                    id="allergy"
                    name="allergy"
                    className='block w-full border-white/30 border-1 bg-black/20 focus-visible:bg-black/30 text-white/80 rounded-lg py-2 px-3'
                    value={formData.allergy}
                    onChange={handleChange}
                    disabled={loading}
                >
                    <option value="">Selecciona una alergia...</option>
                    {intolerances.map((intolerance, index) => <option key={index}  value={intolerance._id}>{intolerance.name}</option>)}
                </select>
            </div>

    

            <button
                className='py-2 px-4 glass glass--events w-full col-span-full'
                type="submit"
                disabled={loading}
            >Enviar</button>
        </form>
    )
}

export default UserForm