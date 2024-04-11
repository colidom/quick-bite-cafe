import PropTypes from "prop-types";

export default function Category({ category }) {
    const { icono, id, name } = category;

    return (
        <div className="flex items-center gap-4 border w-full py-3 hover:bg-amber-400 cursor-pointer">
            <img src={`/img/icono_${icono}.svg`} alt="Imagen icono" className="w-12" />
            <p className="text-lg font-bold cursor-pointer truncate">{name}</p>
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
