import { createContext } from "react";

const KioskContext = createContext();

const hola = "Hola Mundo!";

const KioskProvider = ({ children }) => {
    return <KioskContext.Provider value={{ hola }}>{children}</KioskContext.Provider>;
};

export { KioskContext };
export default KioskContext;
