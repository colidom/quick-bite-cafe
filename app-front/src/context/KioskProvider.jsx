import { Profiler, createContext, useState } from "react";
import { categories as dbCategories } from "../data/categories";

const KioskContext = createContext();

const KioskProvider = ({ children }) => {
    const [categories, setCategories] = useState(dbCategories);
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
            }}
        >
            {children}
        </KioskContext.Provider>
    );
};

export { KioskProvider };
export default KioskContext;
