'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import '../style/LogoSlider.css';

const LogoSlider = () => {
  const logosTop = [
    "/logo/logo1.png",
    "/logo/logo2.png",
    "/logo/logo3.png",
    "/logo/logo4.png",
    "/logo/logo5.png",
    "/logo/logo6.png",
  ];

  const logosBottom = [
    "/logo/logo6.png",
    "/logo/logo5.png",
    "/logo/logo4.png",
    "/logo/logo3.png",
    "/logo/logo2.png",
    "/logo/logo1.png",
  ];

  // Combine both for mobile view
  const mergedLogos = [...logosTop, ...logosBottom];

  return (
    <div className="logo-slider">
      {/* Desktop view: two opposite sliders */}
      <div className="desktop-slider">
        {/* Top Row */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          className="top-row"
        >
          {logosTop.map((logo, i) => (
            <SwiperSlide key={i}>
              <img src={logo} alt={`logo-${i}`} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Row */}
        {/* <Swiper
          modules={[Autoplay]}
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true, // opposite direction
          }}
          allowTouchMove={false}
          className="bottom-row"
        >
          {logosBottom.map((logo, i) => (
            <SwiperSlide key={i}>
              <img src={logo} alt={`logo-${i}`} />
            </SwiperSlide>
          ))}
        </Swiper> */}

        {/* <div className="button-about-sec">
          <button className="about-more-button">About more</button>
        </div> */}
      </div>

      {/* Mobile view: merged single slider */}
      <div className="mobile-slider">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          className="merged-row"
        >
          {mergedLogos.map((logo, i) => (
            <SwiperSlide key={i}>
              <img src={logo} alt={`logo-${i}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LogoSlider;
