import React from 'react';
import Sidebar from './Sidebar';
import ListCategories from "./ListCategories";

const LayoutProducts = ({children}) => {
    return (
        <>
            <Sidebar></Sidebar>
            <section className="MainLayout__Content-sc-1yxvn5u-0 bulZNJ">
                <div className="ProductListingLayout__Main-sc-8jubye-0 gBILlt">
                    <div className="desktop__CategoryContainer-sc-1ligtl5-9 fFdwTQ">
                        <div className="desktop__CategorySpacer-sc-1ligtl5-7 gADwkc" />
                        <ListCategories/>
                    </div>
                    <div className="ProductListingLayout__MainContainer-sc-8jubye-1 jZGjvL" style={{}}>
                        <div className="MarketPage__ProductListContainer-x35qcj-5 ftYIQd">
                            {children}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default LayoutProducts;
