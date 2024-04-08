import { Link } from "react-router-dom";

export default function Register() {
    return (
        <>
            <h1 className="text-4xl front-black">Crea tu cuenta</h1>
            <p>Introduce tus datos para crear una cuenta</p>

            <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
                <form action="">
                    <div className="mb-4">
                        <label className="text-slate-800" htmlFor="name">
                            Nombre:
                        </label>
                        <input type="text" 
                            id="name" 
                            className="mt-2 w-full p-3 bg-gray-100" 
                            name="name" 
                            placeholder="Tu nombre" />
                    </div>
                    <div className="mb-4">
                        <label className="text-slate-800" htmlFor="surname">
                            Apellido:
                        </label>
                        <input type="text" 
                            id="surname" 
                            className="mt-2 w-full p-3 bg-gray-100" 
                            name="surname" 
                            placeholder="Tu apellido" />
                    </div>
                    <div className="mb-4">
                        <label className="text-slate-800" htmlFor="email">
                            Email:
                        </label>
                        <input type="email" 
                            id="email" 
                            className="mt-2 w-full p-3 bg-gray-100" 
                            name="email" 
                            placeholder="Tu email" 
                            formNoValidate
                        />
                    </div>
                    <div className="mb-4">
                        <label className="text-slate-800" htmlFor="email">
                            Contraseña:
                        </label>
                        <input type="password" 
                            id="password" 
                            className="mt-2 w-full p-3 bg-gray-100" 
                            name="password" 
                            placeholder="Tu contraseña" 
                            formNoValidate
                        />
                    </div>
                    <div className="mb-4">
                        <label className="text-slate-800" htmlFor="email">
                            Repetir contraseña:
                        </label>
                        <input type="password" 
                            id="password_confirmation" 
                            className="mt-2 w-full p-3 bg-gray-100" 
                            name="password_confirmation" 
                            placeholder="Repite tu contraseña" 
                            formNoValidate
                        />
                    </div>
                    <input type="submit" 
                        value="Crear cuenta"
                        className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                    />
                </form>
            </div>
            <nav className="mt-5">
                <Link to="/auth/login">
                    ¿Ya tienes una cuenta? ¡Iniciar sesión!
                </Link>
            </nav>
        </>
    );
}
