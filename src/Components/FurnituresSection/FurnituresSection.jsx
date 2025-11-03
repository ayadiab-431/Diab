// import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FurnituresSection.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import FurnitureLists from '../FurnitureLists/FurnitureLists';
import FilterToggleBtns from '../FilterToggleBtns/FilterToggleBtns';
export default function FurnitureSection ({limit = null, filter = false, headerAddress="", paddingTop = null}) {

    // Navigate
    const navigate = useNavigate();
    return (
        <section className={`prod-sec px-3 ${paddingTop ? 'paddingTop' : "pt-5"}`} style={paddingTop}>
            <div className="container d-flex flex-column justify-content-center align-items-center">
                    <SectionHeader header={headerAddress}/>
                {filter && <FilterToggleBtns/>}
                <FurnitureLists limit = {limit} className="some-products w-100 row gy-5 gx-sm-3 gx-md-5"/>
                {!paddingTop && (<button className="go-to-products" onClick={() => navigate('/products')}>تصفح باقي المنتجات</button>)}
            </div>
        </section>
    );
}