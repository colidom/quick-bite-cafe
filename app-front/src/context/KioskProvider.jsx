import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { categories as dbCategories } from "../data/categories";

const KioskContext = createContext();

const KioskProvider = ({ children }) => {
    const [categories] = useState(dbCategories);
    const [currentCategory, setCurrentCategory] = useState(categories[0]);
    const [modal, setModal] = useState(false);
    const [product, setProduct] = useState({});
    const [order, setOrder] = useState([]);

    // Convención evento clic
    const handleClickCategory = (id) => {
        const category = categories.filter((category) => category.id === id)[0];
        setCurrentCategory(category);
    };

    const handleClickModal = () => {
        setModal(!modal);
    };

    const handleSetProduct = (product) => {
        setProduct(product);
    };

    // Quitar lo de la izquierda del objeto producto
    // eslint-disable-next-line no-unused-vars
    const handleAddOrder = ({ category_id, image, ...product }) => {
        if (order.some((orderState) => orderState.id === product.id)) {
            const updatedOrder = order.map((orderState) => (orderState.id === product.id ? product : orderState));
            setOrder(updatedOrder);
        } else {
            setOrder([...order, product]);
        }
    };

    return (
        <KioskContext.Provider
            value={{
                categories,
                currentCategory,
                handleClickCategory,
                modal,
                handleClickModal,
                product,
                handleSetProduct,
                order,
                handleAddOrder,
            }}
        >
            {children}
        </KioskContext.Provider>
    );
};

KioskProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { KioskProvider };
export default KioskContext;
