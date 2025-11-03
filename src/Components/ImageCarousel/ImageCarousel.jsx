import { useState } from "react";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./ImageCarousel.css";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function ImageCarousel ({images_urls = [], name = ""}) {

      const [thumbsSwiper, setThumbsSwiper] = useState(null);

      // make swiper slides
  const slides = images_urls.map((url, index) => (
      <SwiperSlide key={index}>
        <img src={`${process.env.PUBLIC_URL}/assets/${url}`} alt={`${name} - ${index}`} />
      </SwiperSlide>
    ))

    return (
        <div className="product-img-carousel">
        {/* Main Swiper */}
        <Swiper
          style={{
            "--swiper-navigation-color": "var(--coffee)",
          }}
          dir="rtl"
          autoplay={{
            delay: 4500,
            disableOnInteraction: false
          }}
          spaceBetween={10}
          loop = {true}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Autoplay, FreeMode, Navigation, Thumbs]}
          className="mySwiper2 mb-3"
        >
          {slides}
        </Swiper>

        {/* Thumbnail Swiper */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop = {true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {slides}
        </Swiper>
      </div>
    );
}