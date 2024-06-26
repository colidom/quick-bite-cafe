import useSWR from "swr";
import axiosClient from "../config/axios";

export default function Orders() {
    const token = localStorage.getItem("AUTH_TOKEN");
    const fetcher = () =>
        axiosClient("/api/order", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

    const { data, error, isLoading } = useSWR("/api/order", fetcher);

    if (isLoading) return "Cargando pedidos...";

    return (
        <>
            <div>
                <h1 className="text-4xl font-black">Pedidos</h1>
                <p className="text-2xl my-10">Desde aquí puedes administrar los pedidos.</p>
            </div>
            <div>
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
                    </div>
                ))}
            </div>
        </>
    );
}
