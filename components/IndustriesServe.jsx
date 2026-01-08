'use client';
import React, { useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../style/IndustriesServe.css';
import Image from 'next/image';

import Slider from "react-slick";
import { FaPlay, FaPause, } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const IndustriesServe = () => {
  const Industries = [
    { name: "IT / Software", img: "https://assets.webdads2u.com/images/mouseicons.webp"},
    { name: "E-commerce", img: "https://assets.webdads2u.com/images/bagicons.webp" },
    { name: "Telecom", img: "https://assets.webdads2u.com/images/mobileicons.webp" },
    { name: "Real Estate", img: "https://assets.webdads2u.com/images/homeicons.webp" },
    { name: "Engineering", img: "https://assets.webdads2u.com/images/icons5.webp" },
    { name: "Travels", img: "https://assets.webdads2u.com/images/travelicons.webp" },
    { name: "Healthcare", img: "https://assets.webdads2u.com/images/loveicons.webp" },
    { name: "Food & Restaurant", img: "https://assets.webdads2u.com/images/cookicons.webp" },
    { name: "Logistics", img: "https://assets.webdads2u.com/images/logistic.png" },
    { name: "Finance", img: "https://assets.webdads2u.com/images/money-icons.webp" },
    { name: "Auto Mobile", img: "https://assets.webdads2u.com/images/automobile.webp" },
    { name: "Media / Cinema", img: "https://assets.webdads2u.com/images/mediacinema.webp" },
    { name: "Ad Agency", img: "https://assets.webdads2u.com/images/ads%20agnecy.webp" },
    { name: "Hospitality", img: "https://assets.webdads2u.com/images/hospital.webp" },
    { name: "Architech & Interior", img: "https://assets.webdads2u.com/images/interior.webp" },

  ];

  const IndustriesVideo = [
    {
      video: "https://assets.webdads2u.com/images/chakaravarthy_catering_client_testimonial.mp4", 
      name: "Chakaravarthy Catering",
    },
    {
      video: "https://assets.webdads2u.com/images/yegovah_telecommunication_client_testimonial.mp4",
      name: "Yegovah Telecommunications",
    },
    {
      video: "https://assets.webdads2u.com/images/espresso_client_testimonial.mp4",
      name: "Espresso Bar",

    },
  ];


  const PrevArrow = ({ onClick }) => (
    <div className="custom-prev" onClick={onClick}>
      <FiArrowLeft />
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div className="custom-next" onClick={onClick}>
      <FiArrowRight />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3500,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,

    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, prevArrow: <PrevArrow />, nextArrow: <NextArrow /> } },

      { breakpoint: 768, settings: { slidesToShow: 2, arrows: true } },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };



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
      <div className="video-slide">
        <div className="rounded-3xl shadow-md px-2 text-center" style={{ overflow: "hidden" }}>
          <div className="video-wrapper">
            {isYouTube ? (
              <iframe
                width="100%"
                height="600"
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
        </div>
      </div>
    );
  };

  return (
    <div>
      <Container className="industries-container" >
        <h3>Industries We Serve</h3>
        <p className="industries-p1">
          Here, we make almost every genre of applications. You name it and we build it.
        </p>

        <Row className="industries-serve-main desktop-view">
          {Industries?.map((industry, index) => (
            <div key={index}>
              <img src={industry.img} alt={industry.name} style={{ height: "60px", width: "50px" }} />
              <p className="industries-p2">{industry.name}</p>
            </div>
          ))}
        </Row>
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

      
      <div style={{ background: "#F9F9F9", width: "100%" }} className='video-section-cont'>
        <Container fluid>
          <Row className="videosection-industriesSeries text-center">
            <h6 className="video-sec-h6 mb-2">Customer Voices</h6>
            <h3 className="mb-4">Hear What They Say!</h3>

            <Slider {...settings}>
              {IndustriesVideo?.map((item, index) => (
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
