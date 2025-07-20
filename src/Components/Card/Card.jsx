import { useEffect } from 'react';
import './Card.css';

export default function Card({ id, name, beforeImage, afterImage, description }) {

    useEffect(() => {
            if (typeof window !== 'undefined' && window.bootstrap) {
                const carouselElement = document.getElementById(`carousel-${id}`);
                if (carouselElement) {
                    new window.bootstrap.Carousel(carouselElement, {
                        interval: 5000,
                        ride: 'carousel',
                        touch: true
                    });
                }
            }
        }, [id]);

    return (
        <div className="card">
            <div id={`carousel-${id}`} className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/${beforeImage}`}
                            className="d-block w-100"
                            alt={`${name} - قبل التنجيد`}
                            loading="lazy"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/${afterImage}`}
                            className="d-block w-100"
                            alt={`${name} - بعد التنجيد`}
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Slider Arrows */}
                <button className="carousel-control-prev arrow" type="button" data-bs-target={`#carousel-${id}`} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">السابق</span>
                </button>
                <button className="carousel-control-next arrow" type="button" data-bs-target={`#carousel-${id}`} data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">التالي</span>
                </button>
            </div>

            <div className="card-body text-center">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <div className="button d-flex justify-content-center align-items-center">
                    <button>عرض التفاصيل</button>
                </div>
            </div>
        </div>
    );
}
