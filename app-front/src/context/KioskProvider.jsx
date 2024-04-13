import { createContext } from "react";

const KioskContext = createContext();
const autenticado = true;

const KioskProvider = ({ children }) => {
    return <KioskContext.Provider value={{ autenticado }}>{children}</KioskContext.Provider>;
};

export { KioskProvider };
export default KioskContext;
