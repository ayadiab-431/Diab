import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "../Slider/Slider";
import './MainSection.css';
export default function MainSection({paddingTop}) {

    // ---------------- Images for slider ------------------
        const [sliderImgs, setSliderImgs] = useState([]);
        useEffect(() => {
            fetch(`${process.env.PUBLIC_URL}/data/mainSlider.json`)
            .then(res => res.json())
            .then(data => {
                const imagesURLs = data.map(item => `${process.env.PUBLIC_URL}/assets/${item.url}`);
                setSliderImgs(imagesURLs);
            })
            .catch(err => console.error('Fetching Error', err))
    
        }, []);

    // ------------- Navigation -----------
        const navigate = useNavigate();
    return (
        <section 
        className="main-sec" 
        style={{'--padding-top' : `${paddingTop}px`}}>
            <div className="sec-container">
                <div className="slider-img">
                    <Slider  images={sliderImgs}/>
                </div>
                <div className="details w-lg-40">
                    <h2>تصميمات عالية الجودة</h2>
                    <p>نقدّم لك قطع آثاث مميزة مصنوعة يدويًا بعناية وخبرة، تضيف لمسة جمال وجودة لكل ركن في بيتك.</p>
                    <button className="go-to-products" onClick={() => navigate('/products')}>تصفح المنتجات</button>
                </div>
            </div>
        </section>
    );
}