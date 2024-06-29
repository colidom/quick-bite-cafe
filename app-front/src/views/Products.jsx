import useSWR from "swr";
import axiosClient from "../config/axios";
import Product from "../components/Product";

export default function Products() {
    const token = localStorage.getItem("AUTH_TOKEN");
    const fetcher = () =>
        axiosClient("/api/products", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((data) => data.data);

    const { data, error, isLoading } = useSWR("/api/products", fetcher, {
        refreshInterval: 6000,
    });

    if (isLoading) return "Cargando...";
    console.log(data.data);

    return (
        <>
            <div>
                <h1 className="text-4xl font-black">Productos</h1>
                <p className="text-2xl my-10">Desde aquí puedes administrar los productos.</p>
            </div>
            <div className="grid gap-4 grid-cold-1 md:grid-cols-2 xl:grid-cols-3">
                {data.data.map((product) => (
                    <Product key={product.id} product={product} availableButton={true} />
                ))}
            </div>
        </>
    );
}
