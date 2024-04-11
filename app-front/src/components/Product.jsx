export default function Product({ product }) {
    const { name, image, price } = product;

    return (
        <div className="border p-3 shaow bg-white">
            <img src={`/img/${image}.jpg`} alt={`Imagen ${name}`} />
            <div className="py-5">
                <h3 className="text-2xl font-bold">{name}</h3>
                <p className="mt-5 font-black text-4xl text-amber-500">{price}</p>
            </div>
        </div>
    );
}
