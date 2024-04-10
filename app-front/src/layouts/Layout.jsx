import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Summery from "../components/Summery";

export default function Layout() {
    return (
        <div className="md:flex">
            <Sidebar />

            <main className="flex-1">
                <Outlet />
            </main>

            <Summery />
        </div>
    );
}
