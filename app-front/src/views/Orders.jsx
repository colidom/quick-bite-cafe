import useSWR from "swr";
import useKiosk from "../hooks/useKiosk";
import axiosClient from "../config/axios";
import { formatCurrency } from "../helpers";

export default function Orders() {
    const token = localStorage.getItem("AUTH_TOKEN");
    const fetcher = () =>
        axiosClient("/api/order", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

    const { data, isLoading } = useSWR("/api/order", fetcher, { refreshInterval: 1000 });
    const { handleClickCompleteOrder } = useKiosk();

    if (isLoading) return "Cargando pedidos...";

    return (
        <>
            <div>
                <h1 className="text-4xl font-black">Pedidos</h1>
                <p className="text-2xl my-10">Desde aquí puedes administrar los pedidos.</p>
            </div>
            <div className="grid grid-cols-2 gap-5">
                {data.data.data.map((order) => (
                    <div key={order.id} className="p-5 bg-white shadow space-y-2 border-b">
                        <p className="text-xl font-bold text-slate-600">Contenido del pedido:</p>
                        {order.products.map((product) => (
                            <div key={product.id} className="border-b border-b-slate-200 last-of-type:border-none py-4">
                                <p className="text-sm">Id producto: {product.id}</p>
                                <p>{product.name}</p>
                                <p>
                                    Cantidad: {""}
                                    <span className="font-bold">{product.pivot.qty}</span>
                                </p>
                            </div>
                        ))}
                        <p className="text-lg font-bold text-slate-600">
                            Cliente: {""}
                            <span className="font-normal">
                                {order.user.name} {order.user.surname}
                            </span>
                        </p>
                        <p className="text-lg font-bold text-amber-500">
                            Total a pagar: {""}
                            <span className="font-normal text-slate-600">{formatCurrency(order.total)}</span>
                        </p>
                        <button
                            type="button"
                            className="bg-indigo-600 hover:bg-indigo-800 cursor-pointer px-5 py-2 rounded uppercase font-bold text-white text-center w-full"
                            onClick={() => handleClickCompleteOrder(order.id)}
                        >
                            Completar{" "}
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}
