// import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProudctsSection.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import ProductsLists from '../ProductLists/ProductLists';
export default function ProductsSection ({limit = null, headerAddress="", paddingTop = null}) {

    // Navigate
    const navigate = useNavigate();
    return (
        <section className={`prod-sec px-3 ${paddingTop ? 'paddingTop' : "pt-5"}`} style={paddingTop}>
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <div className="sec-address mb-5">
                    <SectionHeader header={headerAddress}/>
                </div>
                <ProductsLists limit = {limit} className="some-products row gy-5 gx-sm-3 gx-md-5"/>
                <button className="go-to-products" onClick={() => navigate('/products')}>تصفح باقي المنتجات</button>
            </div>
        </section>
    );
}