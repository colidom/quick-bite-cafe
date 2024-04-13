import PropTypes from "prop-types";
import useKiosk from "../hooks/useKiosk";

export default function Category({ category }) {
    const { handleClickCategory, currentCategory } = useKiosk();
    const { icono, id, name } = category;

    const highlightCurrentCategory = () => (currentCategory.id === id ? "bg-amber-400" : "bg-white");

    return (
        <button
            className={`${highlightCurrentCategory()} flex items-center gap-4 border w-full py-3 hover:bg-amber-400 cursor-pointer`}
            type="button"
            onClick={() => handleClickCategory(id)}
        >
            <img src={`/img/icono_${icono}.svg`} alt="Imagen icono" className="w-12" />
            <span className="text-lg font-bold truncate">{name}</span>
        </button>
    );
}

Category.propTypes = {
    category: PropTypes.shape({
        icono: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
};
