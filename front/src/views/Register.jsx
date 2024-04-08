export default function Register() {
    return (
        <>
            <h1 className="text-4xl front-black">Crea tu cuenta</h1>
            <p>Introduce tus datos para crear una cuenta</p>

            <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
                <form action="">
                    <div className="mb-4">
                        <label className="text-slate-800" htmlFor="name">
                            Nombre:{" "}
                        </label>
                        <input type="text" 
                        id="name" 
                        className="mt-2 blck p-3 bg-gray-100" 
                        name="name" 
                        placeholder="Tu nombre" />
                    </div>
                </form>
            </div>
        </>
    );
}
