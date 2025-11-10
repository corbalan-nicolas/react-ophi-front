import { useState } from 'react'
import { useNavigate } from 'react-router'
import { registerUser } from "../services/auth.js"

const RegisterView = () => {
    const navigate = useNavigate()
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


        } catch (error) {
            setStatus({ loading: false, error: error.message, success: null })
        }
    }

    return (
        <>
            <h1>Registrarse</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={status.loading}
                    />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={status.loading}
                    />
                </div>

                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        disabled={status.loading}
                    />
                </div>

                <div>
                    <label htmlFor="allergy">Alergia</label>
                    <input
                        id="allergy"
                        name="allergy"
                        type="text"
                        value={formData.allergy}
                        onChange={handleChange}
                        disabled={status.loading}
                    />
                </div>

                <button type="submit" disabled={status.loading}>
                    {status.loading ? 'Registrando...' : 'Registrarse'}
                </button>
            </form>

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
        </>
    );
}

export default RegisterView

