import { Carousel } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';

const HomePage = () => {
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
                    <h4 className="ant-typography">Giảm Giá</h4>
                    <a href="/market?tags=NEW_PRODUCTS"><span>Xem tất cả</span></a>
                </div>
                <div className="ShowcaseWidget__List-jbddbf-2 eYhdLP">
                    {bestPrice.length !== 0 ? bestPrice.map(item => <div className="ShowcaseWidget__Item-jbddbf-3 enmLXv" key={item.id}>
                        <article title="" className="Card-gwofcb-0 MarketItem__Container-rr0c4s-0 gpLETI">
                            <div className="CardLink__Container-dqor2y-0 jRvebg">
                                <div className="MarketItem__CardLinkContent-rr0c4s-3 dzitPw">
                                    <button type="button" className="ant-btn Button-jgr7l8-0 Favorite-tn0i37-1 hrXIPJ ant-btn-secondary ant-btn-circle">
                                        <a href="/signin">
                                            <div className="SVGIcon-uyvh4z-0 Favorite__FavoriteIcon-tn0i37-0 cCZxdL">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={14} viewBox="0 0 16 14" fill="none" className="injected-svg" data-src="/static/media/Heart.1a86ac9b.svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                        <path d="M8.00003 14C7.79014 14 7.58135 13.9704 7.38013 13.9123L7.35855 13.9057C5.65191 13.2769 4.10892 12.2883 2.83992 11.0107C1.95714 10.177 1.25188 9.18174 0.764572 8.08191C0.277267 6.98207 0.0174974 5.79933 0.000154771 4.60148C-0.0074049 3.6951 0.262127 2.80706 0.774401 2.05051C1.28668 1.29397 2.01849 0.703185 2.8766 0.353453C3.7347 0.0037204 4.68022 -0.0891243 5.59267 0.0867511C6.50512 0.262627 7.34317 0.699257 8.00003 1.341C8.65791 0.701233 9.49607 0.266451 10.4081 0.0918811C11.32 -0.0826891 12.2647 0.01083 13.122 0.360559C13.9794 0.710289 14.7107 1.30045 15.2231 2.05607C15.7355 2.81169 16.0059 3.69868 15.9999 4.60438C15.9821 5.80173 15.7222 6.98391 15.2349 8.08322C14.7476 9.18252 14.0425 10.1774 13.1601 11.0107C11.8911 12.2883 10.3482 13.2769 8.64151 13.9057L8.61993 13.9123C8.41871 13.9704 8.20992 14 8.00003 14Z" fill="#E0E0E0" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </a></button>
                                    <div>
                                        <div className="MarketItem__ImageContainer-rr0c4s-4 hSZlrG" style={{ position: 'relative' }}>
                                            <div className="Image__ImageWrapper-sc-791h2a-0 kgJdMp"><img loading="lazy" src="https://images-handler.kamereo.vn/eyJidWNrZXQiOiJpbWFnZS1oYW5kbGVyLXByb2QiLCJrZXkiOiJzdXBwbGllci82NTQvUFJPRFVDVF9JTUFHRS84ZTdjYWJiZC1lMjVmLTQ0ZmEtYjI4My1hMzllMDUzOWUxOWIucG5nIn0=" alt="Best Price - Combo 10 Vỉ Trứng Gà CP Size XL + 1 chai dầu ăn cái lân 1L" className="Image__RImage-sc-791h2a-1 kcjXoq" />
                                            </div>
                                            <span className="ant-tag discount-tag MarketItem__CustomTag-rr0c4s-2 bvDydT">-5%</span>
                                            <div className="MarketItem__TagContainer-rr0c4s-1 cfFbiK"><span bgcolor="#40A9FF" className="ant-tag MarketItem__CustomTag-rr0c4s-2 jRrzYj"><span>Mới</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ flex: '1 1 0%' }}>
                                        <div className="DetailsContainer__DetailsContainerInner-ignkyn-0 cMtGcM">
                                            <h3 title="Best Price - Combo 10 Vỉ Trứng Gà CP Size XL + 1 chai dầu ăn cái lân 1L" className="Details__Header-deqbu8-1 kvvVZC">
                                                <div className="Details__Title-deqbu8-0 ekhIHk">Best Price - Combo 10 Vỉ Trứng Gà CP
                                                    Size XL + 1 chai dầu ăn cái lân 1L
                                                </div>
                                            </h3>
                                            <div className="Details__PriceContainer-deqbu8-4 kUescO">
                                                <div className="Price__PriceContainer-pje2yp-1 kfgZzF"><p className="Price__PriceText-pje2yp-0 hdfLLI">333,000đ/Cái</p>
                                                    <p className="Price__PriceText-pje2yp-0 hdfLLI" style={{ color: 'rgb(140, 140, 140)', textDecoration: 'line-through', fontWeight: 400, fontSize: 12 }}>
                                                        350,000đ/Cái</p></div>
                                            </div>
                                            <div className="Details__FooterContainer-deqbu8-2 TkwlX">
                                                <div className="Details__FlexContainer-deqbu8-3 hkVFdU">
                                                    <div className="ProductNote__NoteAction-sc-1ht25tx-1 zgsGq">
                                                        <button type="button" className="ant-btn Button-jgr7l8-0 ProductNote__AddNoteButton-sc-1ht25tx-2 bZBNJq ant-btn-link ant-btn-sm">
                                                            <a href="/signin"><span>Ghi chú</span></a></button>
                                                    </div>
                                                    <div className="QuantityInput__QuantityInputContainer-sc-1nd1l3z-0 cHinwM">
                                                        <div className="QuantityWrapper-zx68x-0 cnWqKW">
                                                            <button data-test="minus-button" type="button" className="ant-btn Button-jgr7l8-0 minus QuantityButton-sc-1rjirov-0 hkvVgv ant-btn-round ant-btn-sm ant-btn-icon-only">
                                                                <i aria-label="icon: minus" className="anticon anticon-minus">
                                                                    <svg viewBox="64 64 896 896" focusable="false" className data-icon="minus" width="1em" height="1em" fill="currentColor" >
                                                                        <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" />
                                                                    </svg>
                                                                </i></button>
                                                            <input data-test="quantity-input" type="text" min={0} className="QuantityInnerInput-sc-1i1jla2-0 hCeYQQ" defaultValue={0} style={{ transition: 'opacity 0.2s ease 0s', backgroundColor: 'rgb(250, 250, 250)', color: 'inherit', fontSize: 16, width: 44 }} />
                                                            <button data-test="plus-button" type="button" className="ant-btn Button-jgr7l8-0 plus QuantityButton-sc-1rjirov-0 eYEupy ant-btn-round ant-btn-sm ant-btn-icon-only">
                                                                <i aria-label="icon: plus" className="anticon anticon-plus">
                                                                    <svg viewBox="64 64 896 896" focusable="false" className data-icon="plus" width="1em" height="1em" fill="currentColor" >
                                                                        <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" />
                                                                        <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" />
                                                                    </svg>
                                                                </i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>) : 'Khong co san pham nao'}
                </div>
            </div>
            <div className='ShowcaseWidget__WidgetWrapper-jbddbf-1 kAkMuC'>
                <div className="ShowcaseWidget__SectionTitle-jbddbf-0 cMedBm">
                    <h4 className="ant-typography">Sản Phẩm Mới</h4>
                    <a href="/market?tags=BEST_DEALS"><span>Xem tất cả</span></a>
                </div>
                <div className="ShowcaseWidget__List-jbddbf-2 eYhdLP">
                    {topnews.length !== 0 ? topnews.map(item => <div className="ShowcaseWidget__Item-jbddbf-3 enmLXv" key={item.id}>
                        <article title="" className="Card-gwofcb-0 MarketItem__Container-rr0c4s-0 gpLETI">
                            <div className="CardLink__Container-dqor2y-0 jRvebg">
                                <div className="MarketItem__CardLinkContent-rr0c4s-3 dzitPw">
                                    <button type="button" className="ant-btn Button-jgr7l8-0 Favorite-tn0i37-1 hrXIPJ ant-btn-secondary ant-btn-circle">
                                        <a href="/signin">
                                            <div className="SVGIcon-uyvh4z-0 Favorite__FavoriteIcon-tn0i37-0 cCZxdL">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={14} viewBox="0 0 16 14" fill="none" className="injected-svg" data-src="/static/media/Heart.1a86ac9b.svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                        <path d="M8.00003 14C7.79014 14 7.58135 13.9704 7.38013 13.9123L7.35855 13.9057C5.65191 13.2769 4.10892 12.2883 2.83992 11.0107C1.95714 10.177 1.25188 9.18174 0.764572 8.08191C0.277267 6.98207 0.0174974 5.79933 0.000154771 4.60148C-0.0074049 3.6951 0.262127 2.80706 0.774401 2.05051C1.28668 1.29397 2.01849 0.703185 2.8766 0.353453C3.7347 0.0037204 4.68022 -0.0891243 5.59267 0.0867511C6.50512 0.262627 7.34317 0.699257 8.00003 1.341C8.65791 0.701233 9.49607 0.266451 10.4081 0.0918811C11.32 -0.0826891 12.2647 0.01083 13.122 0.360559C13.9794 0.710289 14.7107 1.30045 15.2231 2.05607C15.7355 2.81169 16.0059 3.69868 15.9999 4.60438C15.9821 5.80173 15.7222 6.98391 15.2349 8.08322C14.7476 9.18252 14.0425 10.1774 13.1601 11.0107C11.8911 12.2883 10.3482 13.2769 8.64151 13.9057L8.61993 13.9123C8.41871 13.9704 8.20992 14 8.00003 14Z" fill="#E0E0E0" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </a></button>
                                    <div>
                                        <div className="MarketItem__ImageContainer-rr0c4s-4 hSZlrG" style={{ position: 'relative' }}>
                                            <div className="Image__ImageWrapper-sc-791h2a-0 kgJdMp"><img loading="lazy" src="https://images-handler.kamereo.vn/eyJidWNrZXQiOiJpbWFnZS1oYW5kbGVyLXByb2QiLCJrZXkiOiJzdXBwbGllci82NTQvUFJPRFVDVF9JTUFHRS84ZTdjYWJiZC1lMjVmLTQ0ZmEtYjI4My1hMzllMDUzOWUxOWIucG5nIn0=" alt="Best Price - Combo 10 Vỉ Trứng Gà CP Size XL + 1 chai dầu ăn cái lân 1L" className="Image__RImage-sc-791h2a-1 kcjXoq" />
                                            </div>
                                            <span className="ant-tag discount-tag MarketItem__CustomTag-rr0c4s-2 bvDydT">-5%</span>
                                            <div className="MarketItem__TagContainer-rr0c4s-1 cfFbiK"><span bgcolor="#40A9FF" className="ant-tag MarketItem__CustomTag-rr0c4s-2 jRrzYj"><span>Mới</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ flex: '1 1 0%' }}>
                                        <div className="DetailsContainer__DetailsContainerInner-ignkyn-0 cMtGcM">
                                            <h3 title="Best Price - Combo 10 Vỉ Trứng Gà CP Size XL + 1 chai dầu ăn cái lân 1L" className="Details__Header-deqbu8-1 kvvVZC">
                                                <div className="Details__Title-deqbu8-0 ekhIHk">Best Price - Combo 10 Vỉ Trứng Gà CP
                                                    Size XL + 1 chai dầu ăn cái lân 1L
                                                </div>
                                            </h3>
                                            <div className="Details__PriceContainer-deqbu8-4 kUescO">
                                                <div className="Price__PriceContainer-pje2yp-1 kfgZzF"><p className="Price__PriceText-pje2yp-0 hdfLLI">333,000đ/Cái</p>
                                                    <p className="Price__PriceText-pje2yp-0 hdfLLI" style={{ color: 'rgb(140, 140, 140)', textDecoration: 'line-through', fontWeight: 400, fontSize: 12 }}>
                                                        350,000đ/Cái</p></div>
                                            </div>
                                            <div className="Details__FooterContainer-deqbu8-2 TkwlX">
                                                <div className="Details__FlexContainer-deqbu8-3 hkVFdU">
                                                    <div className="ProductNote__NoteAction-sc-1ht25tx-1 zgsGq">
                                                        <button type="button" className="ant-btn Button-jgr7l8-0 ProductNote__AddNoteButton-sc-1ht25tx-2 bZBNJq ant-btn-link ant-btn-sm">
                                                            <a href="/signin"><span>Ghi chú</span></a></button>
                                                    </div>
                                                    <div className="QuantityInput__QuantityInputContainer-sc-1nd1l3z-0 cHinwM">
                                                        <div className="QuantityWrapper-zx68x-0 cnWqKW">
                                                            <button data-test="minus-button" type="button" className="ant-btn Button-jgr7l8-0 minus QuantityButton-sc-1rjirov-0 hkvVgv ant-btn-round ant-btn-sm ant-btn-icon-only">
                                                                <i aria-label="icon: minus" className="anticon anticon-minus">
                                                                    <svg viewBox="64 64 896 896" focusable="false" className data-icon="minus" width="1em" height="1em" fill="currentColor" >
                                                                        <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" />
                                                                    </svg>
                                                                </i></button>
                                                            <input data-test="quantity-input" type="text" min={0} className="QuantityInnerInput-sc-1i1jla2-0 hCeYQQ" defaultValue={0} style={{ transition: 'opacity 0.2s ease 0s', backgroundColor: 'rgb(250, 250, 250)', color: 'inherit', fontSize: 16, width: 44 }} />
                                                            <button data-test="plus-button" type="button" className="ant-btn Button-jgr7l8-0 plus QuantityButton-sc-1rjirov-0 eYEupy ant-btn-round ant-btn-sm ant-btn-icon-only">
                                                                <i aria-label="icon: plus" className="anticon anticon-plus">
                                                                    <svg viewBox="64 64 896 896" focusable="false" className data-icon="plus" width="1em" height="1em" fill="currentColor" >
                                                                        <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" />
                                                                        <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" />
                                                                    </svg>
                                                                </i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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