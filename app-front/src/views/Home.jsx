import useSWR from "swr";
import Product from "../components/Product";
import useKiosk from "../hooks/useKiosk";
import axiosClient from "../config/axios";

export default function Home() {
    const { currentCategory } = useKiosk();
    const token = localStorage.getItem("AUTH_TOKEN");

    // Consulta SWR
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

    const products = data.data.filter((product) => product.category_id === currentCategory.id);

    return (
        <>
            <h1 className="text-4xl font-black">{currentCategory.name}</h1>
            <p className="text-2xl my-10">Elige y personaliza tu pedido a continuación.</p>
            <div className="grid gap-4 grid-cold-1 md:grid-cols-2 xl:grid-cols-3">
                {products.map((product) => (
                    <Product key={product.id} product={product} addButton={true} />
                ))}
            </div>
        </>
    );
}
