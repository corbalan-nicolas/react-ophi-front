import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { registerUser } from "../services/auth.js"
import { getAllIntolerances } from "../services/Intolerances.js"
import EyeIcon from "../components/icons/EyeIcon.jsx";
import EyeClosedIcon from "../components/icons/EyeClosedIcon.jsx";

const RegisterView = () => {
    const navigate = useNavigate()
    const [passwordType, setPasswordType] = useState('password')
    const [intolerances, setIntolerances] = useState([])
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        allergy: ''
    })
    const [status, setStatus] = useState({
        loading: false,
        error: null,
        success: null
    })

    useEffect(() => {
        async function getIntolerances() {
            try {
                const result = await getAllIntolerances();
                if(result) {
                    setIntolerances(result);
                }
            } catch (error) {
                console.error('Error al obtener las intolerancias', error);
                setStatus(prev => ({ ...prev, error: 'Error al cargar las intolerancias' }));
            }
        }
        getIntolerances();
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!formData.name || !formData.email || !formData.password || !formData.allergy) {
            setStatus({ loading: false, error: 'Todos los campos son obligatorios', success: null })
            return
        }

        if (!formData.email.includes('@')) {
            setStatus({ loading: false, error: 'El email debe ser válido', success: null })
            return
        }

        setStatus({ loading: true, error: null, success: null })

        try {
            const result = await registerUser(formData)
            setStatus({ loading: false, error: null, success: result.msg })

            navigate('/iniciar-sesion')
        } catch (error) {
            setStatus({ loading: false, error: error.message, success: null })
        }
    }

    return (
        <>
            <h1 className='text-6xl mb-6'>Registrarse</h1>
            <div className='md:grid grid-cols-2 gap-4'>
                <div>
                    {status.error && (
                        <div style={{ color: 'red' }}>
                            <p>{status.error}</p>
                        </div>
                    )}

                    {status.success && (
                        <div style={{ color: 'green' }}>
                            <p>{status.success}</p>
                        </div>
                    )}
                    <form className='lg:grid grid-cols-2 gap-4' onSubmit={handleSubmit}>
                        <div className='mb-4'>
                            <label className='mb-1 inline-block linear-to-r' htmlFor="name">Nombre</label>
                            <input
                                id="name"
                                className='block w-full border-white/30 border-1 bg-black/20 focus-visible:bg-black/30 text-white/80 rounded-lg py-2 px-3'
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                disabled={status.loading}
                                autoFocus
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='mb-1 inline-block linear-to-r' htmlFor="email">Email</label>
                            <input
                                id="email"
                                className='block w-full border-white/30 border-1 bg-black/20 focus-visible:bg-black/30 text-white/80 rounded-lg py-2 px-3'
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                disabled={status.loading}
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='mb-1 inline-block linear-to-r' htmlFor="password">Contraseña</label>
                            <div className="flex gap-4">
                                <input
                                    id="password"
                                    className='block w-full border-white/30 border-1 bg-black/20 focus-visible:bg-black/30 text-white/80 rounded-lg py-2 px-3 grow'
                                    name="password"
                                    type={passwordType}
                                    value={formData.password}
                                    onChange={handleChange}
                                    disabled={status.loading}
                                />
                                <button type='button'
                                        className='text-black/60 p-2 glass glass--events'
                                        onClick={() => setPasswordType(passwordType === 'text' ? 'password' : 'text')}
                                >
                                    {passwordType === 'text' ? <EyeIcon /> : <EyeClosedIcon />}
                                </button>
                            </div>
                        </div>

                        <div className='mb-4'>
                            <label className='mb-1 inline-block linear-to-r' htmlFor="allergy">Alergia</label>
                            <select
                                id="allergy"
                                className='block w-full border-white/30 border-1 bg-black/20 focus-visible:bg-black/30 text-white/80 rounded-lg py-2 px-3'
                                name="allergy"
                                value={formData.allergy}
                                onChange={handleChange}
                                disabled={status.loading}
                            >
                                <option value="">Seleccione una intolerancia</option>
                                {intolerances.map((intolerance) => (
                                    <option key={intolerance._id} value={intolerance._id}>
                                        {intolerance.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button
                            className='py-2 px-4 glass glass--events w-full col-span-full'
                            type="submit"
                            disabled={status.loading}
                        >
                            {status.loading ? 'Registrando...' : 'Registrarse'}
                        </button>
                    </form>
                </div>
                <div className='glass rounded-lg p-4'>
                    <h2 className='text-2xl'>Por tu paz mental</h2>
                    <p>Este texto va a ser reemplazado porque ahora mismo no tiene ningún significado, está acá para que ocupe espacio pero realmente no aporta absolutamente nada más que eso, espacio.</p>
                </div>
            </div>
        </>
    );
}

export default RegisterView

