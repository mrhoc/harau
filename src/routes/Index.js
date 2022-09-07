import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage";
import Market from "../pages/Market";

import Sidebar from '../layout/Sidebar';
import ListCategories from "../layout/ListCategories";

const RouteApp = () => {
    return (
        <div className="MainLayout__MainContent-sc-1yxvn5u-1 ehqzmb">
            <Sidebar></Sidebar>
            <section className="MainLayout__Content-sc-1yxvn5u-0 bulZNJ">
                <div className="ProductListingLayout__Main-sc-8jubye-0 gBILlt">
                    <div className="desktop__CategoryContainer-sc-1ligtl5-9 fFdwTQ">
                        <div className="desktop__CategorySpacer-sc-1ligtl5-7 gADwkc" />
                        <ListCategories/>
                    </div>
                    <div className="ProductListingLayout__MainContainer-sc-8jubye-1 jZGjvL" style={{}}>
                        <div className="MarketPage__ProductListContainer-x35qcj-5 ftYIQd">
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/market" element={<Market />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}
export default RouteApp;