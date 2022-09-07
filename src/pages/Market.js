import React, { useContext } from 'react';
import { Pagination } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { AppContext } from '../providers/Index';

const Market = () => {
    const useAppContext=useContext(AppContext)
    const {products,setproducts,productsCat,setproductsCat,activeCat}=useAppContext;
    useEffect(() => {
        var config = {
            method: 'get',
            url: '/api/products/',
        };
        axios(config)
            .then(function (response) {
                let dt=response.data
                setproducts(dt.data)
                setproductsCat(dt.data)
         
            })
            .catch(function (error) {
                console.log(error);
            });
    },[]);
    
    useEffect(()=>{    
       var dataS;
        if(activeCat.key==='all'){
             dataS = products&&products.filter(item => item.categoryKey);
        }
        else{
             dataS = products&&products.filter(item => item.categoryKey.includes(activeCat.key));          
        }
        setproductsCat(dataS);
    },[activeCat])
    
   
    return (
        <>
            <div className="PageHeader__Container-sc-19x4r8h-1 fVgVuB">
                                <h2 className="PageHeader__Header-sc-19x4r8h-0 jTfioR">{activeCat=='all'?'Chợ':activeCat.name}</h2>
                            </div>
                            <div className="ant-row MarketPage__ProductListRow-x35qcj-4 eUijMD" style={{ margin: '-12px' }}>
                                {productsCat&&productsCat.map(product=><div key={product.key} className="ant-col ant-col-md-8 ant-col-xl-6" style={{ padding: 12 }}>
                                    <article title={product.name} className="Card-gwofcb-0 MarketItem__Container-rr0c4s-0 gpLETI">
                                        <div className="CardLink__Container-dqor2y-0 jRvebg">
                                            <div className="MarketItem__CardLinkContent-rr0c4s-3 hZWvVs">
                                                <button type="button" className="ant-btn Button-jgr7l8-0 Favorite-tn0i37-1 hrXIPJ ant-btn-secondary ant-btn-circle"><a href="/signin">
                                                    <div className="SVGIcon-uyvh4z-0 Favorite__FavoriteIcon-tn0i37-0 cCZxdL">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={14} viewBox="0 0 16 14" fill="none" className="injected-svg"  xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                <path d="M8.00003 14C7.79014 14 7.58135 13.9704 7.38013 13.9123L7.35855 13.9057C5.65191 13.2769 4.10892 12.2883 2.83992 11.0107C1.95714 10.177 1.25188 9.18174 0.764572 8.08191C0.277267 6.98207 0.0174974 5.79933 0.000154771 4.60148C-0.0074049 3.6951 0.262127 2.80706 0.774401 2.05051C1.28668 1.29397 2.01849 0.703185 2.8766 0.353453C3.7347 0.0037204 4.68022 -0.0891243 5.59267 0.0867511C6.50512 0.262627 7.34317 0.699257 8.00003 1.341C8.65791 0.701233 9.49607 0.266451 10.4081 0.0918811C11.32 -0.0826891 12.2647 0.01083 13.122 0.360559C13.9794 0.710289 14.7107 1.30045 15.2231 2.05607C15.7355 2.81169 16.0059 3.69868 15.9999 4.60438C15.9821 5.80173 15.7222 6.98391 15.2349 8.08322C14.7476 9.18252 14.0425 10.1774 13.1601 11.0107C11.8911 12.2883 10.3482 13.2769 8.64151 13.9057L8.61993 13.9123C8.41871 13.9704 8.20992 14 8.00003 14Z" fill="#E0E0E0" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </a></button>
                                                <div>
                                                    <div className="MarketItem__ImageContainer-rr0c4s-4 kVlklV" style={{ position: 'relative' }}>
                                                        <div className="Image__ImageWrapper-sc-791h2a-0 kgJdMp"><img loading="lazy" src={product.mainImage} alt="Ba Rọi Heo Cắt Lát Đông Lạnh 2mm NH Foods (1kg/túi)" className="Image__RImage-sc-791h2a-1 kcjXoq" />
                                                        </div>
                                                        <div className="MarketItem__TagContainer-rr0c4s-1 cfFbiK" />
                                                    </div>
                                                </div>
                                                <div style={{ flex: '1 1 0%' }}>
                                                    <div className="DetailsContainer__DetailsContainerInner-ignkyn-0 cMtGcM">
                                                        <h3 title="Ba Rọi Heo Cắt Lát Đông Lạnh 2mm NH Foods (1kg/túi)" className="Details__Header-deqbu8-1 kvvVZC">
                                                            <div className="Details__Title-deqbu8-0 ekhIHk">{product.name}
                                                            </div>
                                                        </h3>
                                                        <div className="Details__PriceContainer-deqbu8-4 kUescO">
                                                            <div className="Price__PriceContainer-pje2yp-1 kfgZzF"><p className="Price__PriceText-pje2yp-0 hdfLLI">{product.price}/{product.unitName}</p></div>
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
                                                                                <svg viewBox="64 64 896 896" focusable="false" className data-icon="minus" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                                                    <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" />
                                                                                </svg>
                                                                            </i></button>
                                                                        <input data-test="quantity-input" type="text" min={0} className="QuantityInnerInput-sc-1i1jla2-0 hCeYQQ" defaultValue={0} style={{ transition: 'opacity 0.2s ease 0s', backgroundColor: 'rgb(250, 250, 250)', color: 'inherit', fontSize: 16, width: 44 }} />
                                                                        <button data-test="plus-button" type="button" className="ant-btn Button-jgr7l8-0 plus QuantityButton-sc-1rjirov-0 eYEupy ant-btn-round ant-btn-sm ant-btn-icon-only">
                                                                            <i aria-label="icon: plus" className="anticon anticon-plus">
                                                                                <svg viewBox="64 64 896 896" focusable="false" className data-icon="plus" width="1em" height="1em" fill="currentColor" aria-hidden="true">
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
                                </div>)}
                                
                                
                            </div>
                            
        </>
    );
}

export default Market;
