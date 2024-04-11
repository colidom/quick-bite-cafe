import { products } from "../data/products";
import Product from "../components/Product";

console.log(products);
export default function Home() {
    return (
        <>
            <h1 className="text-4l font-black">Inicio</h1>
            <p className="text-2xl my-10">Elige y personaliza tu pedido a continuación.</p>

            <div className="grid gap-4 grid-cold-1 md:grid-cols-2 xl:grid-cols-3">
                {products.map((product) => (
                    <Product 
                        key={product.id} 
                        product={product}
                    />
                ))}
            </div>
        </>
    );
}
