import useKiosk from "../hooks/useKiosk";
import Category from "./Category";
import { useAuth } from "../hooks/useAuth";

export default function Sidebar() {
    // Custom hook
    const { categories } = useKiosk();
    const { logout } = useAuth({ middleware: "auth" });

    return (
        <aside className="md:w-72">
            <div className="p-4">
                <img src="img/logo.svg" alt="Imagen logotipo" className="w-40" />
            </div>

            <div className="mt-10">
                {categories.map((category) => (
                    <Category key={category.id} category={category} />
                ))}
            </div>

            <div className="my-5 px-5">
                <button type="button" className="text-center bg-red-500 w-full p-3 font-bold text-white truncate" onClick={logout}>
                    Cancelar Orden
                </button>
            </div>
        </aside>
    );
}
