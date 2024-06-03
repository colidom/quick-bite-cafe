import { createRef, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../config/axios";
import Alert from "../components/Alert";

export default function Register() {
    const nameRef = createRef();
    const surnameRef = createRef();
    const emailRef = createRef();
    const passwordRef = createRef();
    const passwordConfirmationRef = createRef();

    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            name: nameRef.current.value,
            surname: surnameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
        };

        try {
            const response = await axiosClient.post("/api/register", formData);
            console.log(response.data.token);
        } catch (error) {
            console.log(error);
            setErrors(Object.values(error.response.data.errors));
        }
    };
    return (
        <>
            <h1 className="text-4xl front-black">Crea tu cuenta</h1>
            <p>Introduce tus datos para crear una cuenta</p>

            <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
                <form onSubmit={handleSubmit} noValidate>
                    {errors ? errors.map((error, index) => <Alert key={index}>{error}</Alert>) : null}
                    <div className="mb-4">
                        <label className="text-slate-800" htmlFor="name">
                            Nombre:
                        </label>
                        <input type="text" id="name" className="mt-2 w-full p-3 bg-gray-100" name="name" placeholder="Tu nombre" ref={nameRef} />
                    </div>
                    <div className="mb-4">
                        <label className="text-slate-800" htmlFor="surname">
                            Apellido:
                        </label>
                        <input
                            type="text"
                            id="surname"
                            className="mt-2 w-full p-3 bg-gray-100"
                            name="surname"
                            placeholder="Tu apellido"
                            ref={surnameRef}
                        />
                    </div>
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
                    <div className="mb-4">
                        <label className="text-slate-800" htmlFor="email">
                            Repetir contraseña:
                        </label>
                        <input
                            type="password"
                            id="password_confirmation"
                            className="mt-2 w-full p-3 bg-gray-100"
                            name="password_confirmation"
                            placeholder="Repite tu contraseña"
                            formNoValidate
                            ref={passwordConfirmationRef}
                        />
                    </div>
                    <input
                        type="submit"
                        value="Crear cuenta"
                        className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                    />
                </form>
            </div>
            <nav className="mt-5">
                <Link to="/auth/login">¿Ya tienes una cuenta? ¡Iniciar sesión!</Link>
            </nav>
        </>
    );
}
