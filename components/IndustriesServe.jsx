'use client';
import React, { useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../style/IndustriesServe.css';
import Slider from "react-slick";
import { FaPlay, FaPause, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import chakaravarthyLogo from 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1763105173/logo/chakaravarthy-catering-logo.png';
// import yegovahLogo from 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1763105172/logo/yegovah-logo.png';
// import espressoLogo from 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1763105175/logo/espresso-logo.png';

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

  const IndustriesVideo = [
    {
      video: "https://res.cloudinary.com/dbpv95wd8/video/upload/v1763103907/webdads2u/chakaravarthy-catering-client-testimonial.mp4", // ✅ use embed link
      logo: "https://res.cloudinary.com/dbpv95wd8/image/upload/v1763105173/logo/chakaravarthy-catering-logo.png",
      name: "Chakaravarthy Catering",
    },
    {
      video: "https://res.cloudinary.com/dbpv95wd8/video/upload/v1763103916/webdads2u/yegovah-catering-client-testimonial.mp4", 
      logo: "https://res.cloudinary.com/dbpv95wd8/image/upload/v1763105172/logo/yegovah-logo.png",
      name: "Yegovah Telecommunications",
    },
    {
      video: "https://res.cloudinary.com/dbpv95wd8/video/upload/v1763104747/webdads2u/espresso-coffee-shop-catering-client-testimonial.mp4", 
      logo: "https://res.cloudinary.com/dbpv95wd8/image/upload/v1763105175/logo/espresso-logo.png",
      name: "Espresso Bar",
    
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, arrows: false } },
    ],
  };

  const PrevArrow = ({ onClick }) => (
    <div className="custom-prev" onClick={onClick}>
      <FaChevronLeft />
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div className="custom-next" onClick={onClick}>
      <FaChevronRight />
    </div>
  );

  const VideoCard = ({ item }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayToggle = () => {
      if (!videoRef.current) return;
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };

    const isYouTube = item.video.includes("youtube.com");

    return (
      <div className="video-slide px-3">
        <div className="rounded-3xl shadow-md p-3 text-center" style={{ overflow: "hidden" }}>
          <div className="video-wrapper">
            {isYouTube ? (
              <iframe
                width="100%"
                height="450"
                src={item.video}
                title={item.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div onClick={handlePlayToggle}>
                <video
                  ref={videoRef}
                  loop
                  muted
                  playsInline
                  className="video-element"
                  onEnded={() => setIsPlaying(false)}
                >
                  <source src={item.video} type="video/mp4" />
                </video>

                <div className="video-icon-overlay">
                  {isPlaying ? <FaPause className="play-icon" /> : <FaPlay className="play-icon" />}
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col items-center">
            <Image
              src={item.logo}
              alt={item.name}
              width={100}
              height={100}
              className="object-contain mb-2 h-30 w-30"
            />
            <h5 className="font-semibold mb-0">{item.name}</h5>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Container className="industries-container">
        <h3>Industries We Serve</h3>
        <p className="industries-p1">
          Here, we make almost every genre of applications. You name it and we build it.
        </p>

        <Row className="industries-serve-main desktop-view">
          {Industries.map((industry, index) => (
            <div key={index}>
              <img src={industry.img} alt={industry.name} />
              <p className="industries-p2">{industry.name}</p>
            </div>
          ))}
        </Row>

        {/* ✅ Mobile Carousel */}
        <div className="industries-mobile-slider">
          <Slider
            dots={false}
            infinite={true}
            speed={600}
            slidesToShow={1}
            slidesToScroll={1}
            arrows={true}
            prevArrow={<PrevArrow />}
            nextArrow={<NextArrow />}
          >
            {Array.from({ length: Math.ceil(Industries.length / 4) }).map((_, i) => (
              <div key={i}>
                <div className="mobile-grid">
                  {Industries.slice(i * 4, i * 4 + 4).map((industry, index) => (
                    <div className="mobile-card" key={index}>
                      <img src={industry.img} alt={industry.name} />
                      <p className="industries-p2">{industry.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>

      {/* ✅ Video Section */}
      <div style={{ background: "#F9F9F9", width: "100%", padding: "60px 0" }}>
        <Container>
          <Row className="videosection-industriesSeries text-center">
            <h6 className="video-sec-h6 mb-2">Customer Voices</h6>
            <h3 className="mb-4">Hear What They Say!</h3>

            <Slider {...settings}>
              {IndustriesVideo.map((item, index) => (
                <VideoCard key={index} item={item} />
              ))}
            </Slider>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default IndustriesServe;
