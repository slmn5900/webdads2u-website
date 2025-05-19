<<<<<<< HEAD
import React, { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; 

function SliderimagebrandingdesignStreaming() {
    useEffect(() => {
        $('.responsive-image').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                    },  
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        });

        // Cleanup on unmount
        return () => {
            $('.responsive-image').slick('unslick');
        };
    }, []);

    return (
        <section className='SliderimagebrandingdesignStreaming'>
            <div className="container">
                <div className="row SliderimagebrandingdesignStreaming-png">
                    <div className="col-sm-12 col-md-4 col-lx-2 align-self-center">
                        <h1>Our</h1>
                        <h1><span className='SliderimagebrandingdesignStreaming-span'>Streaming</span></h1>
                    </div>
                    <div className="col-xs-12 col-md-8 col-lx-10 align-self-center">
                        <div className="overlay"></div>
                        <div className="slider text-center responsive">
                            <div className='image-item'>
                                <img src="webdads/images/branding-design/logo.png.webp" alt="logo" className='img-fluid' />
                                <h2>Logo</h2>
                            </div>
                            <div className='image-item'>
                                <img src="webdads/images/branding-design/letter-head.png.webp" alt="letter-headpng" className='img-fluid' />
                                <h2>Letter Headpng</h2>
                            </div>
                            <div className='image-item'>
                                <img src="webdads/images/branding-design/flyer-design.png.webp" alt="flyer-designpng" className='img-fluid' />
                                <h2>Flyer Designpng</h2>
                            </div>
                            <div className='image-item'>
                                <img src="webdads/images/branding-design/logo.png.webp" alt="crm-erp-development-megamenu-icon" className='img-fluid' />
                                <h2>Logo</h2>
                            </div>
                            <div className='image-item'>
                                <img src="webdads/images/branding-design/corporate.png.webp" alt="corporatepng" className='img-fluid' />
                                <h2>Corporatepng</h2>
                            </div>
                            <div className='image-item'>
                                <img src="webdads/images/branding-design/business-card.png.webp" alt="business-cardpng" className='img-fluid'/>
                                <h2>Business Cardpng</h2>
                            </div>
                            <div className='image-item'>
                                <img src="webdads/images/branding-design/brochure-design.png.webp" alt="brochure-designpng" className='img-fluid' />
                                <h2>Brochure Designpng</h2>
                            </div>
                        </div>

                        <div className="prev d-none">
                            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        </div>
                        <div className="next d-none">
                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        </div>
                        
=======
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const SliderimagebrandingdesignStreaming = () => {
    return (
        <section className="SliderimagebrandingdesignStreaming">
            <div className="container">
                <div className="row SliderimagebrandingdesignStreaming-png">
                    <div className="col-sm-12 col-md-4 col-lg-3 align-self-center">
                        <h1>Our</h1>
                        <h1>
                            <span className="SliderimagebrandingdesignStreaming-span">Streaming</span>
                        </h1>
                    </div>
                    <div className="col-xs-12 col-md-8 col-lg-9 align-self-center">
                        <div className="overlay"></div>
                        <Swiper
                            modules={[Autoplay]} // Required for autoplay to work
                            spaceBetween={10}
                            slidesPerView={4}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false
                            }}
                            breakpoints={{
                                1024: { slidesPerView: 3 },
                                600: { slidesPerView: 2 },
                                480: { slidesPerView: 1 }
                            }}
                        >
                            {[
                                { src: 'logo.png.webp', label: 'Logo' },
                                { src: 'letter-head.png.webp', label: 'Letter Head' },
                                { src: 'flyer-design.png.webp', label: 'Flyer Design' },
                                { src: 'logo.png.webp', label: 'Logo' },
                                { src: 'corporate.png.webp', label: 'Corporate' },
                                { src: 'business-card.png.webp', label: 'Business Card' },
                                { src: 'brochure-design.png.webp', label: 'Brochure Design' }
                            ].map((item, i) => (
                                <SwiperSlide key={i}>
                                    <div className="image-item">
                                        <img src={`webdads/images/branding-design/${item.src}`} alt={item.label} className="img-fluid" />
                                        <h2>{item.label}</h2>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
>>>>>>> 6010d3c (Add new features and updates)
                    </div>
                </div>
            </div>
        </section>
    );
<<<<<<< HEAD
}

export default SliderimagebrandingdesignStreaming;
=======
};

export default SliderimagebrandingdesignStreaming;
>>>>>>> 6010d3c (Add new features and updates)
