"use client";

import React, { useEffect, useRef, useState } from "react";
import "../style/LogoSlider.css";
import { Logos } from "./common/Datas/Logo";

const LogoSlider = () => {
  const sliderRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const slider = sliderRef.current;
    if (!slider) return;

    let scrollSpeed = 0.8;
    let animationFrame;

    const scroll = () => {
      slider.scrollLeft += scrollSpeed;
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    const pause = () => cancelAnimationFrame(animationFrame);
    const resume = () => (animationFrame = requestAnimationFrame(scroll));

    slider.addEventListener("mouseenter", pause);
    slider.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(animationFrame);
      slider.removeEventListener("mouseenter", pause);
      slider.removeEventListener("mouseleave", resume);
    };
  }, [mounted]);

  if (!mounted) return null;

  const mergedLogos = [...Logos, ...Logos];

  return (
    <div className="logo-slider">
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
