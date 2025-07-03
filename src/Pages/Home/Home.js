import { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header.js'
import Slider from '../../Components/Slider/Slider.js';
export default function Home(){
    const [sliderImgs, setSliderImgs] = useState([]);

    useEffect(() => {
        fetch('/data/mainSlider.json')
        .then(res => res.json())
        .then(data => {
            const imagesURLs = data.map(item => item.url);
            setSliderImgs(imagesURLs);
        })
        .catch(err => console.error('Fetching Error', err))

    }, [])
    return (
        <div className="home">
            <Header/>
            <Slider images={sliderImgs}/> 
        </div>
    );
}
