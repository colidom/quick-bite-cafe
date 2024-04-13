import { createContext, useState } from "react";
import { categories as dbCategories } from "../data/categories";

const KioskContext = createContext();

const KioskProvider = ({ children }) => {
    const [categories, setCategories] = useState(dbCategories);
    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    // Convención evento clic
    const handleClickCategory = (category) => {
        // setCurrentCategory(category);
        console.log("haciendo clic en categoría");
    };

    return <KioskContext.Provider value={{ categories, currentCategory, handleClickCategory }}>{children}</KioskContext.Provider>;
};

export { KioskProvider };
export default KioskContext;
