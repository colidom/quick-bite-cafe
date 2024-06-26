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

    console.log(data?.data);
    console.log(error);
    console.log(isLoading);

    return (
        <div>
            <h1 className="text-4xl font-black">Pedidos</h1>
            <p className="text-2xl my-10">Desde aquí puedes administrar los pedidos.</p>
        </div>
    );
}
