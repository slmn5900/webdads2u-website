'use client';

import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Buttons from '../../../components/common/Button';
import Title from '../../../components/Title';

export default function WordPressWebsiteworks() {
    const images = [
        {
            src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757332046/webdads2u/wordpress-development/racepro-website.png',
            alt: 'racepro-website'
        },
        {
            src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757332036/webdads2u/wordpress-development/team-water-website.png',
            alt: 'team-water-website'
        },
        {
            src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757332018/webdads2u/wordpress-development/adsfit-website.png',
            alt: 'adsfit-website'
        },
        {
            src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757332009/webdads2u/wordpress-development/securitaz-website.png',
            alt: 'securitaz-website'
        },
        {
            src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757332000/webdads2u/wordpress-development/arcmen-website.png',
            alt: 'arcmen-website'
        }
    ];

    return (
        <Box sx={{ p: { xs: 3.8, md: 6 }, pt: { xs: 0, md: 0 } }}>
            <Container maxWidth="lg">
                {/* Header */}
                {/* <Typography variant="h4" fontWeight="bold" align="center" gutterBottom sx={{ mb: 4 }}>
                    Our WordPress Website Works
                </Typography> */}
                <Box sx={{ textAlign: 'center' }}>
                    <Title title={' Our WordPress Website Works'} />
                </Box>

                {/* Swiper Slider */}
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={2}
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    breakpoints={{
                        1024: { slidesPerView: 2 },
                        600: { slidesPerView: 1 },
                        480: { slidesPerView: 1 }
                    }}
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <Box
                                component="img"
                                src={img.src}
                                alt={img.alt}
                                loading="lazy"
                                sx={{
                                    width: '100%',
                                    borderRadius: 2,
                                    // boxShadow: 3,
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)'
                                    }
                                }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Button */}
                <Box textAlign="center" sx={{ mt: 4 }}>
                    <Buttons title={'View More'} />
                </Box>
            </Container>
        </Box>
    );
}
