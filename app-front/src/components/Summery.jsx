import useKiosk from "../hooks/useKiosk";

export default function Summery() {
    const { order } = useKiosk();
    return (
        <asside className="md:w-72 h-screen overflow-y-scroll p-5">
            <h1 className="text-4xl font-black">Mi pedido</h1>
            <p className="text-lg my-5">Aquí podrás ver el resumen total de tu pedido.</p>

            <div className="py-10">
                {order.length === 0 ? <p className="text-center text-2xl">Aún no has añadido productos a tu pedido.</p> : <p>Si hay pedido</p>}
            </div>

            <p className="text-xl mt-10">Total: </p>

            <form className="w-full">
                <div className="mt-5">
                    <input
                        type="submit"
                        className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 rounded uppercase font-bold text-white text-center w-full cursor-pointer"
                        value="Confirmar pedido"
                    />
                </div>
            </form>
        </asside>
    );
}
