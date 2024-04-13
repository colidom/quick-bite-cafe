import PropTypes from "prop-types";
import useKiosk from "../hooks/useKiosk";

export default function Category({ category }) {
    const { handleClickCategory } = useKiosk();
    const { icono, id, name } = category;

    return (
        <div className="flex items-center gap-4 border w-full py-3 hover:bg-amber-400 cursor-pointer">
            <img src={`/img/icono_${icono}.svg`} alt="Imagen icono" className="w-12" />
            <button className="text-lg font-bold cursor-pointer truncate" type="button" onClick={handleClickCategory}>
                {name}
            </button>
        </div>
    );
}

Category.propTypes = {
    category: PropTypes.shape({
        icono: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
};
