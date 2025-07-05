import { useRef, useState, useEffect } from 'react';
import Header from '../../Components/Header/Header.js'
import Slider from '../../Components/Slider/Slider.js';
export default function Home(){

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

    // ------------------ Handle header ---------------
    const headerRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState(0);
    useEffect(() => {
        const updateHeaderHeight = () => {
            if (headerRef.current) {
                setHeaderHeight(headerRef.current.offsetHeight)
                console.log(headerRef.current.offsetHeight);
            }
        };
        updateHeaderHeight();
        window.addEventListener('resize', updateHeaderHeight)

        return () => window.removeEventListener('resize', updateHeaderHeight);
    }, [])
        console.log(headerHeight);
    return (
        <div className="home">
            <Header ref={headerRef}/>
            <Slider images={sliderImgs}
            customeStyle = {{'--slider-margin-top' : `${headerHeight}px`
            }}/>
        </div>
    );
}
