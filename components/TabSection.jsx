'use client';
import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/IndustriesServe.css';
import Link from "next/link";

const TabSection = () => {
  const tabs = ["All", "Website", "Letter Head", "Business card", "Logo"];
  const [CurrentTab, setCurrentTab] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const allImages = {

    "Website": [
    { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1763203491/webdads2u/mainpage/selli.png', link: 'https://www.sellibuy.in/' },
    { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1763203489/webdads2u/mainpage/ccc.png', link: 'https://chakaravarthycatering.com/' },
    { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1763203488/webdads2u/mainpage/svm.png', link: 'https://svmschools.com/' },
    { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1763203488/webdads2u/mainpage/arcmen.png', link: 'https://www.arcmeninterior.com/' },
    { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1763203488/webdads2u/mainpage/ambika.png', link: 'https://www.ambikastores.com/' },
    { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1763203487/webdads2u/mainpage/mathioli.png', link: 'https://www.mathioligita.com/?srsltid=AfmBOooTVSRQ8r1mCO06lRbDd-Tqlg9FuqnkVfNZrsY8NRPk1HNv3UwT' },
  ],
    "Letter Head": [
    { src: '/webdads/images/home/tabs/nivas-portfolio-letterhead_114718981website01.jpg', link: '/portfolio/selli' },
    { src: '/webdads/images/home/tabs/aarthi-homes-portfolio-letterhead_114822db4website02.jpg', link: '/portfolio/ccc' }
  ],
     "Business card": [
    { src: '/webdads/images/home/tabs/Raj-vision_19408aaa2d_21327a6aba.webp', link: '/portfolio/selli' },
    { src: '/webdads/images/home/tabs/chennai-interior-portfolio-businesscard_1527f12f5website002.jpg', link: '/portfolio/ccc' },
    { src: '/webdads/images/home/tabs/nivas-industries-portfolio-businesscard_1522a5b85website001.jpg', link: '/portfolio/ccc' },
    { src: '/webdads/images/home/tabs/arcmen-kitchens-interiors-portfolio-businesscard_152605de3website003.jpg', link: '/portfolio/ccc' },
    { src: '/webdads/images/home/tabs/relife-medical-system-portfolio-businesscard_152411317website004.jpg', link: '/portfolio/ccc' },        
  ],
  "Logo": [
  {src: '/webdads/images/home/tabs/racepro-1_2133480bb0.jpg',link: '/portfolio/logo/racepro'},
  {
    src: '/webdads/images/home/tabs/rajvision_193793ba94logo1.jpg',
    link: '/portfolio/logo/rajvision'
  },
  {
    src: '/webdads/images/home/tabs/monarch-mockup-logo_11560818blogo2.jpg',
    link: '/portfolio/logo/monarch'
  },
  {
    src: '/webdads/images/home/tabs/oil-sep-mockup-logo_115468e14logo3.jpg',
    link: '/portfolio/logo/oil-sep'
  },
  {
    src: '/webdads/images/home/tabs/computer-garage-mockup-logo_1518c7cf4logo12333.jpg',
    link: '/portfolio/logo/computer-garage'
  },
  {
    src: '/webdads/images/home/tabs/v2-photograph-mockup-logo_1155ef2fblogo5.jpg',
    link: '/portfolio/logo/v2-photograph'
  }
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
      <div className='d-flex custom-tab-button mb-20 justify-content-center flex-wrap' >
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
      {/* <div className="row desktop-grid">
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
      </div> */}

      <div className="row desktop-grid">
  {CurrentTabImages.slice(0, visibleCount).map((item, index) => (
    <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">

      <Link href={item.link} target="_blank" style={{ display: "block" }}>
        <div
          className="rounded shadow-sm"
          style={{
            width: "100%",
            height: "250px",
            backgroundImage: `url(${item.src})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </Link>

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
        {CurrentTabImages.map((item, index) => (
          <Link key={index} target="_blank" href={item.link} style={{ display: "block" }}>
            <div
              className="rounded shadow-sm"
              style={{
                width: "100%",
                height: "220px",
                backgroundImage: `url(${item.src})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </Link>
        ))}
      </Slider>

      </div>
    </div>
  );
};

export default TabSection;
