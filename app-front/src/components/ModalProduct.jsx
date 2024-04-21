import { useState, useEffect } from "react";
import useKiosk from "../hooks/useKiosk";
import { formatCurrency } from "../helpers";

export default function ModalProduct() {
    const { product, handleClickModal, handleAddOrder, order } = useKiosk();
    const [qty, setQty] = useState(1);
    const [edition, setEdition] = useState(false);

    useEffect(() => {
        if (order.some((orderState) => orderState.id === product.id)) {
            const productEdit = order.filter((orderState) => orderState.id === product.id)[0];
            setQty(productEdit.qty);
            setEdition(true);
        }
    }, [order, product.id]);

    return (
        <div className="md:flex gap-10">
            <div className="md:w-1/3">
                <img src={`/img/${product.image}.jpg`} alt={`Imagen producto ${product.name}`} />
            </div>
            <div className="md:w-2/3">
                <div className="flex justify-end">
                    <button onClick={handleClickModal}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                    </button>
                </div>
                <h1 className="text-3xl font-bold mt-5">{product.name}</h1>
                <p className="mt-5 font-black text-5xl text-amber-500">
                    Precio: <span>{formatCurrency(product.price)}</span>
                </p>
                <hr className="my-5" />

                <div className="flex gap-4 mt-5">
                    <button
                        type="button"
                        onClick={() => {
                            if (qty <= 1) return;
                            setQty(qty - 1);
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                    <div className="text-3xl">{qty}</div>
                    <button
                        type="button"
                        onClick={() => {
                            if (qty >= 5) return;
                            setQty(qty + 1);
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </div>
                <button
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded"
                    onClick={() => {
                        handleAddOrder({ ...product, qty });
                        handleClickModal();
                    }}
                >
                    {edition ? "Guardar cambios" : "Añadir al pedido"}
                </button>
            </div>
        </div>
    );
}
