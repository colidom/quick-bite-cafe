import { Outlet } from "react-router-dom";
import Modal from "react-modal";
import Sidebar from "../components/Sidebar";
import Summery from "../components/Summery";
import useKiosk from "../hooks/useKiosk";

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

export default function Layout() {
    const { modal, handleClickModal } = useKiosk();

    console.log(modal);

    return (
        <>
            <div className="md:flex">
                <Sidebar />

                <main className="flex-1 h-screen overflow-y-scroll bg-gray-100">
                    <Outlet />
                </main>

                <Summery />
            </div>
            {modal && (
                <Modal isOpen={modal} style={customStyles}>
                    <p>Desde Modal</p>
                    <button onClick={handleClickModal}>Cerrar</button>
                </Modal>
            )}
        </>
    );
}
