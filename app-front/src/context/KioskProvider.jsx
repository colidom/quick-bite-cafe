import { createContext, useState } from "react";
import { categories as dbCategories } from "../data/categories";

const KioskContext = createContext();

const KioskProvider = ({ children }) => {
    const [categories, setCategories] = useState(dbCategories);

    return <KioskContext.Provider value={{ categories }}>{children}</KioskContext.Provider>;
};

export { KioskProvider };
export default KioskContext;
