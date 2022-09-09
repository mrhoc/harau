import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage";
import Market from "../pages/Market";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Search from "../pages/Search";
import LayoutProducts from "../layout/Layout-products";

const RouteApp = () => {
    return (
        <div className="MainLayout__MainContent-sc-1yxvn5u-1 ehqzmb">
            <Routes>
                <Route path="/" element={<LayoutProducts children={<HomePage />} />} />
                <Route path="/market" element={<LayoutProducts children={<Market />} />} />
                <Route path="/search-result" element={<LayoutProducts children={<Search />} />} />
                <Route path="/signin" element={<Login />} />
                <Route path="/contact-us" element={<Register />} />
            </Routes>
        </div>
    )

}
export default RouteApp;