'use client';
import React from 'react';
import { Container, Grid2, Typography, Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

function Technicalstack() {
    const logos = [
        'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757415412/webdads2u/html5/icons/html5.png',
        'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757415399/webdads2u/html5/icons/css3.png',
        'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757415434/webdads2u/html5/icons/javascript.png',
        'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757415435/webdads2u/html5/icons/bootstrap.png',
        'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757415430/webdads2u/html5/icons/php.png',
        // 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757415367/webdads2u/html5/icons/html-icons.png',
        // 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757415398/webdads2u/html5/icons/css.png',
        // 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757415380/webdads2u/html5/icons/javascript-logo.png',
        // 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757415387/webdads2u/html5/icons/bootstrap-logo.png',
        // 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757415374/webdads2u/html5/icons/php-icon.png'
    ];

    return (
        <Box component="section" className="technicalstack-main" py={8}>
            <Container>
                {/* Heading */}
                <Grid2 container justifyContent="center" textAlign="center" mb={4}>
                    <Grid2 size={{ xs: 12, md: 10 }}>
                        <Typography variant="h4" gutterBottom>
                            Technical Stack
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            We can use different technologies to develop a single application or only one technology can be used, depending on the situation. Our technical proficiency is listed below, and we are the most seasoned web design firm in
                            Chennai.
                        </Typography>
                    </Grid2>
                </Grid2>

                {/* Swiper Slider */}
                <Grid2 container justifyContent="center">
                    <Grid2 size={{ xs: 12, md: 10 }}>
                        <Box sx={{ position: 'relative' }}>
                            <Swiper
                                modules={[Autoplay]}
                                spaceBetween={20}
                                slidesPerView={5}
                                autoplay={{ delay: 1500, disableOnInteraction: false }}
                                loop={true}
                                breakpoints={{
                                    1200: { slidesPerView: 5 },
                                    1024: { slidesPerView: 3 },
                                    600: { slidesPerView: 3 },
                                    480: { slidesPerView: 1 },
                                    320: { slidesPerView: 3 }
                                }}
                            >
                                {logos.map((img, idx) => (
                                    <SwiperSlide key={idx}>
                                        <Box
                                            component="img"
                                            src={img}
                                            alt={img.replace('.png', '')}
                                            loading="lazy"
                                            sx={{
                                                maxHeight: 50,
                                                objectFit: 'contain',
                                                mx: 'auto'
                                            }}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Box>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
}

export default Technicalstack;
