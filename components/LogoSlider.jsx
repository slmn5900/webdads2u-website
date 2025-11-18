'use client';
import React, { useEffect, useRef } from "react";
import '../style/LogoSlider.css';
import { Logos } from "./common/Datas/Logo";

const LogoSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollSpeed = 0.8;   // Adjust speed
    let animationFrame;

    const scroll = () => {
      if (slider) {
        slider.scrollLeft += scrollSpeed;
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    slider.addEventListener('mouseenter', () => cancelAnimationFrame(animationFrame));
    slider.addEventListener('mouseleave', () => (animationFrame = requestAnimationFrame(scroll)));

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const mergedLogos = [...Logos, ...Logos]; // duplicate for seamless loop

  return (
    <div className="logo-slider">

      {/* Continuous Scroll Container */}
      <div className="logo-scroll" ref={sliderRef}>
        <div className="logo-track">
          {mergedLogos.map((logo, index) => (
            <div className="logo-item" key={index}>
              <img src={logo.url} alt={`logo-${index}`} />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default LogoSlider;
