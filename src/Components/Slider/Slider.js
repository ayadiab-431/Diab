// import { useState, useEffect } from "react";
import './Slider.css';

export default function Slider({images = [], customeStyle = {}}){

    return (
        <div id="carouselExampleSlidesOnly" style = {customeStyle} className="carousel slide custome-slider" data-bs-ride="carousel">
            <div className="carousel-inner">
                {images.map((img, idx) => (
                
                <div
                    key = {idx}
                    className={`carousel-item ${idx === 0 ?'active' : ''}`}>
                    <img src={img} className="d-block w-100" alt={`slide-${idx}`}/>
                </div>
                ))}
            </div>
        </div>
    );

}