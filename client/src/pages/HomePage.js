import React from 'react'
import { Carousel } from 'antd';
import axios from 'axios';
import { useEffect, useState,useContext } from 'react';
import ProductsItem from '../components/ProductsItem';
import { AppContext } from '../providers/Index';

const HomePage = () => {
    const useAppContext = useContext(AppContext)
    const { products, activeCat } = useAppContext;
    const [bestPrice, setbestPrice] = useState([]);
    const [topnews, settopnews] = useState([]);
    const [banners, setbanners] = useState([]);
    
    useEffect(() => {
        var config = {
            method: 'get',
            url: '/api/products/top-sale',
        };
        axios(config)
            .then(function (response) {
                setbestPrice(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        var config = {
            method: 'get',
            url: '/api/products/top-new',
        };
        axios(config)
            .then(function (response) {
                settopnews(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    // banners
    useEffect(() => {
        var config = {
            method: 'get',
            url: '/api/banners',
        };
        axios(config)
            .then(function (response) {
                setbanners(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
   

    return (
        <>
            <div className='ant-row CarouselBanner__BannerSliderRow-sc-45hni4-1 cPLAsG'>
                <div className='CarouselBanner__BannerSliderWrapper-sc-45hni4-0 fSVfiM'>
                    <Carousel autoplay>
                        {
                            banners && banners.map(banner => <div className='slider' key={banner.key}>
                                <a href={banner.link} target="_blank">
                                    <img src={banner.imageUrl}></img>
                                </a>
                            </div>)
                        }
                    </Carousel>
                </div>
            </div>
            <div className="ShowcaseWidget__WidgetWrapper-jbddbf-1 kAkMuC">

                <div className="ShowcaseWidget__SectionTitle-jbddbf-0 cMedBm">
                    <h4 className="ant-typography">Gi???m Gi??</h4>
                    <a href="/market?tags=NEW_PRODUCTS"><span>Xem t???t c???</span></a>
                </div>
                <div className="ShowcaseWidget__List-jbddbf-2 eYhdLP">
                    {products.length !== 0 ? products.map(item => <div className="ShowcaseWidget__Item-jbddbf-3 enmLXv" key={item.id}>
                        <article title="" className="Card-gwofcb-0 MarketItem__Container-rr0c4s-0 gpLETI">
                            <div className="CardLink__Container-dqor2y-0 jRvebg">
                                <div className="MarketItem__CardLinkContent-rr0c4s-3 dzitPw">
                                    <ProductsItem product={item}></ProductsItem>
                                </div>
                            </div>
                        </article>
                    </div>) : 'Khong co san pham nao'}
                </div>
            </div>
            <div className='ShowcaseWidget__WidgetWrapper-jbddbf-1 kAkMuC'>
                <div className="ShowcaseWidget__SectionTitle-jbddbf-0 cMedBm">
                    <h4 className="ant-typography">S???n Ph???m M???i</h4>
                    <a href="/market?tags=BEST_DEALS"><span>Xem t???t c???</span></a>
                </div>
                <div className="ShowcaseWidget__List-jbddbf-2 eYhdLP">
                    {topnews.length !== 0 ? topnews.map(item => <div className="ShowcaseWidget__Item-jbddbf-3 enmLXv" key={item.id}>
                        <article title="" className="Card-gwofcb-0 MarketItem__Container-rr0c4s-0 gpLETI">
                            <div className="CardLink__Container-dqor2y-0 jRvebg">
                                <div className="MarketItem__CardLinkContent-rr0c4s-3 dzitPw">
                                <ProductsItem product={item}></ProductsItem>
                                </div>
                            </div>
                        </article>
                    </div>) : 'Khong co san pham nao'}


                </div>
            </div>


        </>
    )
}


export default HomePage;