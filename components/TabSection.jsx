'use client';
import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/IndustriesServe.css';

const TabSection = () => {
  const tabs = ["All", "Website", "Letter Head", "Business card", "Logo"];
  const [CurrentTab, setCurrentTab] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const allImages = {
    "Website": [
      '/webdads/images/home/tabs/Securitaz_19411882b6_21326af134.webp', '/webdads/images/home/tabs/Raj-vision_19408aaa2d_21327a6aba.webp', '/webdads/images/home/tabs/RMP_1940935de7_213287b7e9.webp',
      '/webdads/images/home/tabs/Atgomart_19399ef691_213353aeac.webp', '/webdads/images/home/tabs/Ramwellness-portfolio-website_1150a915e.jpg', '/webdads/images/home/tabs/pridermx-portfolio-website_1528c5a78.jpg'
    ],
    "Letter Head": [
      '/webdads/images/home/tabs/nivas-portfolio-letterhead_114718981website01.jpg', '/webdads/images/home/tabs/aarthi-homes-portfolio-letterhead_114822db4website02.jpg'
    ],
    "Business card": [
      '/webdads/images/home/tabs/Raj-vision_19408aaa2d_21327a6aba.webp', '/webdads/images/home/tabs/chennai-interior-portfolio-businesscard_1527f12f5website002.jpg', '/webdads/images/home/tabs/nivas-industries-portfolio-businesscard_1522a5b85website001.jpg', '/webdads/images/home/tabs/arcmen-kitchens-interiors-portfolio-businesscard_152605de3website003.jpg','/webdads/images/home/tabs/relife-medical-system-portfolio-businesscard_152411317website004.jpg'
    ],
    "Logo": [
      '/webdads/images/home/tabs/racepro-1_2133480bb0.jpg', '/webdads/images/home/tabs/rajvision_193793ba94logo1.jpg', '/webdads/images/home/tabs/monarch-mockup-logo_11560818blogo2.jpg','/webdads/images/home/tabs/oil-sep-mockup-logo_115468e14logo3.jpg', '/webdads/images/home/tabs/computer-garage-mockup-logo_1518c7cf4logo12333.jpg','/webdads/images/home/tabs/v2-photograph-mockup-logo_1155ef2fblogo5.jpg'
    ]
  };

  // Merge all tab images
  const allTabImages = Object.values(allImages).flat();

  // Current tab’s images
  const CurrentTabImages =
    CurrentTab === "All" ? allTabImages : allImages[CurrentTab] || [];

  // Load more (for desktop)
  const handleLoadMore = () => setVisibleCount(prev => prev + 6);

  //  Slick settings for mobile
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500, // every 2.5 seconds
    pauseOnHover: false,
    swipeToSlide: true,
    draggable: true,
  };

  return (
    <div>
      {/*  Tabs */}
      <div className='d-flex custom-tab-button justify-content-center flex-wrap' >
        {tabs.map((tab, index) => (
          <div key={index} className='tab-item'>
            <button
              className='px-4 py-2 rounded-pill'
              style={{
                backgroundColor:
                  CurrentTab === tab ? '#F5F5F5' : 'transparent'
              }}
              onClick={() => setCurrentTab(tab)}
            >
              {tab}
            </button>
          </div>
        ))}
      </div>

      {/* Desktop Grid */}
      <div className="row desktop-grid">
        {CurrentTabImages.slice(0, visibleCount).map((image, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
            <img
              src={image}
              alt={`Gallery ${index}`}
              className="img-fluid rounded shadow-sm"
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>

      {/*  Load More (Desktop Only) */}
      {visibleCount < CurrentTabImages.length && (
        <div className='d-flex justify-content-center desktop-grid'>
          <button onClick={handleLoadMore} className='load-more-btn'>
            Loading more...
          </button>
        </div>
      )}

      {/* Mobile Carousel */}
      <div className="mobile-carousel">
        <Slider {...settings}>
          {CurrentTabImages.map((image, index) => (
            <div key={index} className="mobile-carousel-item">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="img-fluid rounded shadow-sm"
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TabSection;
