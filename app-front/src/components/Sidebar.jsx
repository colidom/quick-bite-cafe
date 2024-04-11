import { categories } from "../data/categories";

export default function Sidebar() {
    return (
        <aside className="md:w-72">
            <div className="p-4">
                <img src="img/logo.svg" alt="imagen logotipo" className="w-40" />
            </div>

            <div className="mt-10">
                {categories.map((category) => (
                    <p> {category.name}</p>
                ))}
            </div>
        </aside>
    );
}
