'use client';

import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';


const TickerSlider = ({ images = [], reverseDirection = false }) => {
    const swiperRef = useRef(null);

    const getGap = () => (typeof window !== 'undefined' && window.innerWidth > 300 ? 0.0285 * window.innerWidth : 15);

    const settings = {
        direction: 'vertical',
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        speed: 5000,
        centeredSlides: true,
        allowTouchMove: false,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            reverseDirection
        },
        modules: [Autoplay]
    };

    useEffect(() => {
        const handleResize = () => swiperRef.current?.swiper?.update();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    console.log(images, 'images');

    return (
        <Swiper {...settings} ref={swiperRef}>
            {[...images, ...images].map((img, index) => (
                <SwiperSlide key={index} style={{ width: 'auto', height: 'auto' }}>
                    <Box
                        sx={{
                            position: 'relative',
                            width: { xs: '150px', md: '19vw' },
                            height: { xs: '150px', md: '20vw' },
                            aspectRatio: '300 / 205',
                            // borderRadius: '10px',
                            overflow: 'hidden',
                            backdropFilter: 'blur(50px)'
                        }}
                    >
                        <img
                            src={img.url || img}
                            alt={img.title || img}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block'
                            }}
                        />
                    </Box>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

// Dual vertical sliders side by side
const DualTickerSlider = ({ imagesLeft = [], imagesRight = [] }) => {
    console.log(imagesRight, 'imagesRight');
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: 2, md: '2vw' },
                width: '100%',
                overflow: 'hidden',
                height: 'auto',
                position: 'relative',
                bottom: { sm: -12, md: -12 },
                left: { sm: -30, md: -80 }
            }}
        >
            {/* Left side (scrolls upward) */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '60px',
                    zIndex: 2,
                    background: 'linear-gradient(to bottom, white 30%, transparent 100%)'
                }}
            />

            <Box>
                <TickerSlider images={imagesLeft} reverseDirection={true} />
            </Box>

            {/* Right side (scrolls downward) */}
            <Box>
                <TickerSlider images={imagesRight} reverseDirection={false} />
            </Box>
            <Box
                sx={{
                    position: 'absolute',
                    top: 530,
                    left: 0,
                    right: 0,
                    height: '60px',
                    zIndex: 2,
                    background: 'linear-gradient(to top, white 30%, transparent 100%)'
                }}
            />
        </Box>
    );
};

export default DualTickerSlider;
