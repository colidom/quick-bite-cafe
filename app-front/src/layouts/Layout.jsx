import { Outlet } from "react-router-dom";
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../components/Sidebar";
import Summery from "../components/Summery";
import ModalProduct from "../components/ModalProduct";
import useKiosk from "../hooks/useKiosk";
import { useAuth } from "../hooks/useAuth";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

Modal.setAppElement("#root");

export default function Layout() {
    const { user, error } = useAuth({ middleware: "auth" });
    const { modal } = useKiosk();

    console.log(user);
    console.log(error);

    return (
        <>
            <div className="md:flex">
                <Sidebar />

                <main className="flex-1 h-screen overflow-y-scroll bg-gray-100">
                    <Outlet />
                </main>

                <Summery />
            </div>

            <Modal isOpen={modal} style={customStyles}>
                <ModalProduct />
            </Modal>

            <ToastContainer />
        </>
    );
}
