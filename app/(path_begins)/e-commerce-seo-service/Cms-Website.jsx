

'use client';
import React from 'react';
import { Container, Box, Typography, Grid2 } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function Cmswebsite() {
    const logos = [
        {
            src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757495419/webdads2u/e-commerce-seo-service/icons/html.png',
            alt: 'HTML'
        },
        {
            src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757495418/webdads2u/e-commerce-seo-service/icons/css.png',
            alt: 'CSS'
        },
        {
            src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757495417/webdads2u/e-commerce-seo-service/icons/bootstrap.png',
            alt: 'Bootstrap'
        },
        {
            src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757495431/webdads2u/e-commerce-seo-service/icons/node-js-logo.png',
            alt: 'Node.js'
        },
        {
            src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757495430/webdads2u/e-commerce-seo-service/icons/react-logo.png',
            alt: 'React'
        },
        {
            src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757495432/webdads2u/e-commerce-seo-service/icons/angular-js-logo.png',
            alt: 'Angular'
        },
        {
            src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757495434/webdads2u/e-commerce-seo-service/icons/wordpress-logo.png',
            alt: 'WordPress'
        }
    ];

    return (
        <Box component="section" sx={{ pt: 8, backgroundColor: 'background.default' }}>
            <Container>
                {/* Header */}
                <Grid2 container justifyContent="center" textAlign="center" spacing={3}>
                    <Grid2 size={{ xs: 12, md: 8 }}>
                        <Typography variant="h6" gutterBottom>
                            Popular Ecommerce & CMS Website Platforms We Optimize Include But Aren’t Limited To
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 7 }}>
                        <Typography variant="body1" color="text.secondary">
                            We optimize various e-commerce and CMS website platforms for SEO, including Shopify, WooCommerce, Magento, WordPress, BigCommerce, and more.
                        </Typography>
                    </Grid2>
                </Grid2>

                {/* Slider */}
                <Box mt={6}>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={5}
                        autoplay={{ delay: 1500, disableOnInteraction: false }}
                        loop={true}
                        // navigation={true}
                        breakpoints={{
                            1024: { slidesPerView: 5 },
                            768: { slidesPerView: 3 },
                            480: { slidesPerView: 2 },
                            0: { slidesPerView: 2 }
                        }}
                    >
                        {logos.map((logo, idx) => (
                            <SwiperSlide key={idx}>
                                <Box
                                    component="img"
                                    src={logo.src}
                                    alt={logo.alt}
                                    loading="lazy"
                                    sx={{
                                        width: '100%',
                                        maxWidth: 120,
                                        height: 'auto',
                                        mx: 'auto'
                                    }}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            </Container>
        </Box>
    );
}

export default Cmswebsite;
