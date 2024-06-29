import PropTypes from "prop-types";
import { formatCurrency } from "../helpers";
import useKiosk from "../hooks/useKiosk";

export default function Product({ product, addButton = false, availableButton = false }) {
    const { handleClickModal, handleSetProduct } = useKiosk();
    const { name, image, price } = product;

    return (
        <div className="border p-3 shadow bg-white">
            <img src={`/img/${image}.jpg`} alt={`Imagen ${name}`} />
            <div className="py-5">
                <h3 className="text-2xl font-bold">{name}</h3>
                <p className="mt-5 font-black text-4xl text-amber-500">{formatCurrency(price)}</p>
                {addButton && (
                    <button
                        type="button"
                        className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
                        onClick={() => {
                            handleClickModal();
                            handleSetProduct(product);
                        }}
                    >
                        Agregar
                    </button>
                )}
                {availableButton && (
                    <button
                        type="button"
                        className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
                        onClick={() => {}}
                    >
                        Producto agotado
                    </button>
                )}
            </div>
        </div>
    );
}

Product.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        category_id: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired,
    addButton: PropTypes.bool,
    availableButton: PropTypes.bool,
};
