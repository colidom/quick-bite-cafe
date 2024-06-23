import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import axiosClient from "../config/axios";

const KioskContext = createContext();

const KioskProvider = ({ children }) => {
    const [categories, setCategory] = useState([]);
    const [currentCategory, setCurrentCategory] = useState({});
    const [modal, setModal] = useState(false);
    const [product, setProduct] = useState({});
    const [order, setOrder] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const newTotal = order.reduce((total, product) => product.price * product.qty + total, 0);
        setTotal(newTotal);
    }, [order]);

    const getCategories = async () => {
        try {
            const { data } = await axiosClient("/api/categories");
            setCategory(data.data);
            setCurrentCategory(data.data[0]);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCategories();
    }, []);

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

    // Quitar lo de la izquierda del objeto producto
    // eslint-disable-next-line no-unused-vars
    const handleAddOrder = ({ category_id, ...product }) => {
        if (order.some((orderState) => orderState.id === product.id)) {
            const updatedOrder = order.map((orderState) => (orderState.id === product.id ? product : orderState));
            setOrder(updatedOrder);
            toast.success("Pedido actualizado correctamente");
        } else {
            setOrder([...order, product]);
            toast.success(product.name + " agregado al pedido");
        }
    };

    const handleEditQty = (id) => {
        const updateProduct = order.filter((product) => product.id === id)[0];
        setProduct(updateProduct);
        setModal(!modal);
    };

    const handleDeleteOrderProduct = (id) => {
        const updatedProduct = order.filter((product) => product.id !== id);
        setOrder(updatedProduct);
        toast.success(product.name + " eliminado correctamente del pedido!");
    };

    const handleSubmitNewOrder = async () => {
        const token = localStorage.getItem("AUTH_TOKEN");

        try {
            await axiosClient.post(
                "/api/order",
                { total },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
        } catch (error) {
            console.log(error);
        }
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
                handleAddOrder,
                handleEditQty,
                handleDeleteOrderProduct,
                total,
                handleSubmitNewOrder,
            }}
        >
            {children}
        </KioskContext.Provider>
    );
};

KioskProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { KioskProvider };
export default KioskContext;
