'use client';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../style/IndustriesServe.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IndustriesServe = () => {
  const Industries = [
    { name: "IT / Software", img: "https://res.cloudinary.com/dbpv95wd8/image/upload/v1757324785/webdads2u/mainpage/icons/it-software-industries.png" },
    { name: "E-commerce", img: "https://res.cloudinary.com/dbpv95wd8/image/upload/v1757324782/webdads2u/mainpage/icons/ecommerce-industries.png" },
    { name: "Telecom", img: "https://res.cloudinary.com/dbpv95wd8/image/upload/v1757324780/webdads2u/mainpage/icons/telecom-industries.png" },
    { name: "Real Estate", img: "https://res.cloudinary.com/dbpv95wd8/image/upload/v1757324777/webdads2u/mainpage/icons/real-estate-industries.png" },
    { name: "Engineering", img: "https://res.cloudinary.com/dbpv95wd8/image/upload/v1757324774/webdads2u/mainpage/icons/engineering-industries.png" },
    { name: "Travels", img: "https://res.cloudinary.com/dbpv95wd8/image/upload/v1757324771/webdads2u/mainpage/icons/travel-industries.png" },
    { name: "Healthcare", img: "https://res.cloudinary.com/dbpv95wd8/image/upload/v1757324768/webdads2u/mainpage/icons/healthcare-industries.png" },
    { name: "Food & Restaurant", img: "https://res.cloudinary.com/dbpv95wd8/image/upload/v1757324766/webdads2u/mainpage/icons/food-industries.png" },
    { name: "Architech & Interior", img: "https://res.cloudinary.com/dbpv95wd8/image/upload/v1757324763/webdads2u/mainpage/icons/architech-interior-industries.png" },
    { name: "Logistics", img: "https://res.cloudinary.com/dbpv95wd8/image/upload/v1757324760/webdads2u/mainpage/icons/logistic-industries.png" },
    { name: "Finance", img: "https://res.cloudinary.com/dbpv95wd8/image/upload/v1757324758/webdads2u/mainpage/icons/finance-industries.png" },
    { name: "Auto Mobile", img: "https://res.cloudinary.com/dbpv95wd8/image/upload/v1757324749/webdads2u/mainpage/icons/auto-mobile-industries.png" },
    { name: "Media / Cinema", img: "https://res.cloudinary.com/dbpv95wd8/image/upload/v1757324755/webdads2u/mainpage/icons/media-cinema-industries.png" },
    { name: "Ad Agency", img: "https://res.cloudinary.com/dbpv95wd8/image/upload/v1757324752/webdads2u/mainpage/icons/ad-agency-industries.png" },
    { name: "Hospitality", img: "https://res.cloudinary.com/dbpv95wd8/image/upload/v1757324747/webdads2u/mainpage/icons/hospitallity-industries.png" },
    { name: "Sports", img: "https://res.cloudinary.com/dbpv95wd8/image/upload/v1757413791/webdads2u/mainpage/icons/wearable-app-development.png" },
  ];

  // ✅ Combine video + logo for single carousel
  const IndustriesVideo = [
    {
      video: "/video/nightyvideo.mp4",
      logo: "/images/testing-logo.png",
    },
    {
      video: "/video/nightyvideo.mp4",
      logo: "/images/testing-logo.png",
      
    },
    {
      video: "/video/nightyvideo.mp4",
      logo: "/images/testing-logo.png",
    },
    {
      video: "/video/nightyvideo.mp4",
      logo: "/images/testing-logo.png",
    },
    {
      video: "/video/nightyvideo.mp4",
      logo: "/images/testing-logo.png",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, arrows: false },
      },
    ],
  };

  return (
    <div>
      {/* ✅ Industries Section */}
      <Container className="industries-container">
        <h3>Industries We Serve</h3>
        <p className="industries-p1">
          Here, we make almost every genre of applications. You name it and we build it.
        </p>

        <Row className="industries-serve-main">
          {Industries.map((industry, index) => (
            <div key={index}>
              <img src={industry.img} alt={industry.name} />
              <p className="industries-p2">{industry.name}</p>
            </div>
          ))}
        </Row>

        {/* ✅ Mobile Section */}
        <div className="mobile-industries-slider">
          <div className="mobile-slider-wrapper">
            <Slider
              dots={false}
              infinite={false}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              arrows={true}
              nextArrow={<div className="slick-arrow custom-next" style={{ right: '96px' }}>→</div>}
              prevArrow={<div className="slick-arrow custom-prev" style={{ left: '110px' }}>←</div>}
            >
              {Array.from({ length: Math.ceil(Industries.length / 4) }).map((_, slideIndex) => {
                const start = slideIndex * 4;
                const end = start + 4;
                const items = Industries.slice(start, end);
                return (
                  <div key={slideIndex} className="industries-grid">
                    {items.map((industry, index) => (
                      <div key={index} className="industry-item">
                        <img src={industry.img} alt={industry.name} />
                        <p>{industry.name}</p>
                      </div>
                    ))}
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </Container>

      {/* ✅ Video Carousel Section (Video + Logo Below) */}
      <div style={{ background: "#F9F9F9", width: "100%", padding: "60px 0" }}>
        <Container>
          <Row className="videosection-industriesSeies text-center">
            <h6 className="video-sec-h6 mb-2">Customer Voices</h6>
            <h3 className="mb-4">Hear What They Say!</h3>

            <Slider {...settings}>
              {IndustriesVideo.map((item, index) => (
                <div key={index} className="video-slide">
                  {/* Video */}
                  <video
                    width="100%"
                    height="300"
                    loop
                    muted
                    controls
                    className="slider-video"
                    style={{ borderRadius: "10px" }}
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>

                  {/* Logo + Name Below */}
                  <div className="video-logo-section">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="video-logo"
                    />
                    <p className="video-name">{item.name}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default IndustriesServe;
