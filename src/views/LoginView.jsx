import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { loginUser } from "../services/auth";
import { AuthContext } from "../context/AuthContext";

const LoginView = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
        <section className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-white/90">
                Iniciar sesión
            </h1>

            <form className="space-y-4" onSubmit={handleSubmit}>
                {error && (
                    <p className="text-sm text-red-400 bg-red-950/40 border border-red-700/70 rounded px-3 py-2">
                        {error}
                    </p>
                )}

                <div>
                    <label
                        htmlFor="email"
                        className="block mb-1 text-sm text-white/80"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="w-full rounded-lg border border-white/30 bg-black/20 px-3 py-2 text-white/90 placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                    />
                </div>

                <div>
                    <label
                        htmlFor="password"
                        className="block mb-1 text-sm text-white/80"
                    >
                        Contraseña
                    </label>
                    <input
                        id="password"
                        type="password"
                        className="w-full rounded-lg border border-white/30 bg-black/20 px-3 py-2 text-white/90 placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-lg bg-white/20 hover:bg:white/40 active:bg-white/30 text-white/90 font-medium py-2 transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    {loading ? 'Ingresando...' : 'Iniciar sesión'}
                </button>

                <p className="text-sm text-white/70">
                    ¿No tenés cuenta?{" "}
                    <Link
                        to="/registrarse"
                        className="underline hover:text-white"
                    >
                        Registrate acá
                    </Link>
                </p>
            </form>
        </section>
    );
};

export default LoginView;
