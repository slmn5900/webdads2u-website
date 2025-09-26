'use client';
import React from 'react';
import { Grid2, Typography, Button, Box, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Buttons from '../../../components/common/Button';

const sliderImages = [
    { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757478580/webdads2u/responsive-website/rmp-website.png', alt: 'rmp website' },
    { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757478580/webdads2u/responsive-website/racepro-website.png', alt: 'racepro website' },
    { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757478580/webdads2u/responsive-website/adsfit-website.png', alt: 'adsfit website' },
    { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757478580/webdads2u/responsive-website/arcmen-website.png', alt: 'arcmen website' }
    // { src: 'webdads/images/responsive-website/RMP-528.png', alt: 'RMP-528' },
    // { src: 'webdads/images/responsive-website/arcmen.png', alt: 'arcmen' }
];

export default function ResponsiveWebdesigncompanychennai() {
    return (
        <Box component="section" sx={{ py: { sm: 4, md: 8 }, backgroundColor: '#fafafa' }}>
            <Container>
                <Grid2 container spacing={4} alignItems="center">
                    {/* LEFT CONTENT */}
                    <Grid2 size={{ xs: 12, sm: 6 }}>
                        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold' }} fontSize={{ xs: '1.8rem', sm: '2.2rem', md: '2.8rem' }}>
                                Responsive Web Design Company in Chennai
                            </Typography>
                            <Typography variant="body1" paragraph>
                                As a premier responsive web designing company in Chennai, we specialize in creating dynamic and adaptable websites that provide an optimal viewing experience across all devices. Our expert team leverages the latest
                                technologies and best practices in responsive web design to ensure your website is visually stunning and fully functional on desktops, tablets, and smartphones.
                            </Typography>
                            {/* <Button variant="contained" color="primary" size="large" href="/contact-us" sx={{ borderRadius: '30px', mt: 2 }}>
                                Contact Us
                            </Button> */}

                            <Buttons title={'Contact Us'} />
                        </motion.div>
                    </Grid2>

                    {/* RIGHT SLIDER */}
                    <Grid2 size={{ xs: 12, sm: 6 }}>
                        <motion.div whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                            <Swiper
                                modules={[Autoplay, Pagination]}
                                autoplay={{ delay: 2000, disableOnInteraction: false }}
                                loop
                                spaceBetween={20}
                                pagination={{
                                    clickable: true, // ✅ Enables clickable dots
                                    dynamicBullets: true // optional: animated size bullets
                                }}
                                slidesPerView={1}
                                style={{
                                    borderRadius: '20px',
                                    paddingBottom: '20px'
                                    // boxShadow: '0 6px 20px rgba(0,0,0,0.1)'
                                }}
                            >
                                {sliderImages.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <Box
                                            component="img"
                                            src={img.src}
                                            alt={img.alt}
                                            loading="lazy"
                                            sx={{
                                                width: '100%',
                                                height: 'auto',
                                                borderRadius: '20px'
                                            }}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </motion.div>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
}
