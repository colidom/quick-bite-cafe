import { createRef, useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../components/Alert";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
    const emailRef = createRef();
    const passwordRef = createRef();

    const [errors, setErrors] = useState([]);
    const { login } = useAuth({
        middleware: "guest",
        url: "/",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };

        login(formData, setErrors);
    };

    return (
        <>
            <h1 className="text-4xl front-black">Iniciar sesión</h1>
            <p>Antes de crear un pedido, primero inicia sesión con tu cuenta</p>

            <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
                <form onSubmit={handleSubmit} noValidate>
                    {errors ? errors.map((error, index) => <Alert key={index}>{error}</Alert>) : null}
                    <div className="mb-4">
                        <label className="text-slate-800" htmlFor="email">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="mt-2 w-full p-3 bg-gray-100"
                            name="email"
                            placeholder="Tu email"
                            formNoValidate
                            ref={emailRef}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="text-slate-800" htmlFor="email">
                            Contraseña:
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="mt-2 w-full p-3 bg-gray-100"
                            name="password"
                            placeholder="Tu contraseña"
                            formNoValidate
                            ref={passwordRef}
                        />
                    </div>
                    <input
                        type="submit"
                        value="Iniciar sesión"
                        className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                    />
                </form>
            </div>
            <nav className="mt-5">
                <Link to="/auth/register">¿Aún no tienes una cuenta? ¡Crea una, es gratis!</Link>
            </nav>
        </>
    );
}
