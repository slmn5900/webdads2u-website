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
                            spaceBetween={2}
                            slidesPerView={4}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false
                            }}
                            breakpoints={{
                                1024: { slidesPerView: 3 },
                                600: { slidesPerView: 2 },
                                0: { slidesPerView: 1 }
                            }}
                        >
                            {[
                                { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757503295/webdads2u/branding-design/icons/logo-design.png', label: 'Logo' },
                                { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757503297/webdads2u/branding-design/icons/letter-head.png', label: 'Letter Head' },
                                { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757503294/webdads2u/branding-design/icons/flyer-design.png', label: 'Flyer Design' },
                                // { src: 'logo.png.webp', label: 'Logo' },/
                                { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757503299/webdads2u/branding-design/icons/corporate.png', label: 'Corporate' },
                                { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757503298/webdads2u/branding-design/icons/business-card.png', label: 'Business Card' },
                                { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757503295/webdads2u/branding-design/icons/brochure-design.png', label: 'Brochure Design' }
                            ].map((item, i) => (
                                <SwiperSlide key={i}>
                                    <div className="image-item p-0 m-0">
                                        <img src={`${item.src}`} alt={item.label} className="img-fluid" />
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
