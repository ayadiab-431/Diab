import './HeroSection.css';
import { HeaderHeight } from '../../Contexts/Contexts';
import { useContext } from 'react';
export default function HeroSection () {
    const {headerHeight} = useContext(HeaderHeight);
    return(
        <section className="hero-sec" style={{'--padding-top' : `${headerHeight}px`}}>
            <div className='img-container w-100'>
                <img src = {`${process.env.PUBLIC_URL}/assets/slider/slider1.jpg`} alt = "Hero Section"/>
            </div>
            <div className="hero-sec-content">
                <h1>من الخشب نصنع الفخامة</h1>
                <p>تصميم وتنفيذ آثاث يجمع بين الراحة والجمال</p>
            </div>
        </section>
    );
}