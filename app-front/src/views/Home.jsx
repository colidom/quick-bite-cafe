import { products } from "../data/products";
import Product from "../components/Product";
import useKiosk from "../hooks/useKiosk";

export default function Home() {
    const { currentCategory } = useKiosk();

    console.log(currentCategory);
    return (
        <>
            <h1 className="text-4l font-black">{currentCategory.name}</h1>
            <p className="text-2xl my-10">Elige y personaliza tu pedido a continuación.</p>

            <div className="grid gap-4 grid-cold-1 md:grid-cols-2 xl:grid-cols-3">
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </>
    );
}
