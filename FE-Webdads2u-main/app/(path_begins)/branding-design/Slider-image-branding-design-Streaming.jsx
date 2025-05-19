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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SliderimagebrandingdesignStreaming;
