import { useEffect } from 'react';
import './Slider.css';

export default function Slider({ images = [] }) {
    useEffect(() => {
        if (typeof window !== 'undefined' && window.bootstrap) {
            const carouselElement = document.getElementById('carouselExampleSlidesOnly');
            if (carouselElement) {
                new window.bootstrap.Carousel(carouselElement, {
                    interval: 8000,
                    ride: 'carousel'
                });
            }
        }
    }, [images]);
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide custome-slider" data-bs-ride="carousel" data-bs-interval="8000">
            <div className="carousel-inner">
                {images.map((img, idx) => (
                <div
                    key = {idx}
                    className={`carousel-item ${idx === 0 ?'active' : ''}`}>
                    <img src={img} className="d-block w-100" alt={`slide-${idx}`} loading="lazy"/>
                </div>
                ))}
            </div>
        </div>
    );

}