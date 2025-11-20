import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { loginUser } from "../services/auth";
import { AuthContext } from "../context/AuthContext";
import EyeIcon from "../components/icons/EyeIcon.jsx";
import EyeClosedIcon from "../components/icons/EyeClosedIcon.jsx";
import DangerIcon from "../components/icons/DangerIcon.jsx";

const LoginView = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordType, setPasswordType] = useState('password')
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError('Completá email y contraseña.');
            return;
        }

        try {
            setLoading(true);
            const data = await loginUser({ email, password });

            // data solo devuelve el token.
            const token  = data;
            console.log(token);
            login(token);

            // lleva al inicio
            navigate('/');
        } catch (err) {
            setError(err.message || 'Error al iniciar sesión');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section>
            <h1 className='text-6xl text-right mb-6'>
                Iniciar sesión
            </h1>

            <p className="text-sm mb-4 text-black/70 text-right">
                ¿No tenés cuenta?{" "}
                <Link
                    to="/registrarse"
                    className="underline hover:text-blue-800 transition"
                >
                    Registrate acá
                </Link>
            </p>

            <div className='md:grid grid-cols-2 gap-4'>

                <div className='glass rounded-lg p-4'>
                    <h2 className='text-2xl'>Por tu paz mental</h2>
                    <p>Este texto va a ser reemplazado porque ahora mismo no tiene ningún significado, está acá para que ocupe espacio pero realmente no aporta absolutamente nada más que eso, espacio.</p>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    {error && (
                        <div className='border rounded-lg p-4 glass flex justify-center gap-2 animate-highlight glass--danger'>
                            <DangerIcon />
                            <p>{error}</p>
                        </div>
                    )}

                    <div className='mb-4'>
                        <label
                            htmlFor="email"
                            className='mb-1 inline-block linear-to-r'
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            className='block w-full border-white/30 border-1 bg-black/20 focus-visible:bg-black/30 text-white/80 rounded-lg py-2 px-3'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="email"
                            autoFocus
                        />
                    </div>

                    <div className='mb-4'>
                        <label
                            htmlFor="password"
                            className='mb-1 inline-block linear-to-r'
                        >
                            Contraseña
                        </label>

                        <div className="flex gap-4">
                            <input
                                id="password"
                                className='block w-full border-white/30 border-1 bg-black/20 focus-visible:bg-black/30 text-white/80 rounded-lg py-2 px-3'
                                type={passwordType}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="current-password"
                            />
                            <button type='button'
                                    className='text-black/60 p-2 glass glass--events'
                                    onClick={() => setPasswordType(passwordType === 'text' ? 'password' : 'text')}
                            >
                                {passwordType === 'text' ? <EyeIcon /> : <EyeClosedIcon />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="py-2 px-4 glass glass--events w-full col-span-full"
                    >
                        {loading ? 'Ingresando...' : 'Iniciar sesión'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default LoginView;
