'use client';

import { Box, Grid2, Typography } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const WhyChooseFeatures = () => {
    const logos = [
        {
            name: 'Design-Quality',
            logo: '/InnerPageImages/WebDesign/icons/Design-Quality_13773ceb23.png'
        },
        {
            name: 'Digitak-Stategy',
            logo: '/InnerPageImages/WebDesign/icons/Digitak-Stategy_137741a524.png'
        },
        {
            name: 'Navigation',
            logo: '/InnerPageImages/WebDesign/icons/Navigation_1377598b80.png'
        },
        {
            name: 'Responsiveness',
            logo: '/InnerPageImages/WebDesign/icons/Responsiveness_137766e964.png'
        },
        {
            name: 'Target',
            logo: '/InnerPageImages/WebDesign/icons/target.png'
        }
    ];

    return (
        <Box
            sx={{
                px: 10,
                width: '100%',
                minHeight: '50vh', // Takes 70% of the screen height (adjust % as needed)
                backgroundImage: 'url(/InnerPageImages/WebDesign/rectangle.png)',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'background.default'
            }}
        >
            <Grid2 container spacing={5}>
                <Grid2 size={4} textAlign="start">
                    <Box sx={{ mt: 10 }}>
                        <Typography variant="h5" component="p" sx={{ color: 'white', fontWeight: 600, mb: 3 }}>
                            WHY TO CHOOSE
                        </Typography>
                        <Typography variant="h4" component="p" sx={{ color: 'white', fontWeight: 600 }}>
                            Save your time with a lot of features
                        </Typography>
                    </Box>
                </Grid2>
                <Grid2 size={8} textAlign="center">
                    <Box sx={{ mt: 10 }}>
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={30}
                            slidesPerView={3}
                            loop={true}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false
                            }}
                            speed={4000}
                            grabCursor={false}
                            allowTouchMove={false}
                        >
                            {[...logos, ...logos].map((item, index) => (
                                <SwiperSlide
                                    key={index}
                                    style={{
                                        width: 'auto',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Box
                                        component={motion.div}
                                        whileHover={{ scale: 1.05 }}
                                        sx={{
                                            width: { xs: 60, sm: 80, md: 140 },
                                            height: { xs: 30, sm: 45, md: 100 },
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            // bgcolor: 'white',
                                            borderRadius: 2
                                            // boxShadow: '0 0 10px rgba(0,0,0,0.05)',
                                        }}
                                    >
                                        {console.log(item, 'singlimg')}

                                        <img
                                            src={item.logo}
                                            alt={item.name}
                                            style={{
                                                maxWidth: '100%',
                                                maxHeight: '100%',
                                                objectFit: 'contain'
                                            }}
                                        />
                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontSize: 20, color: 'white' }}>{item.name}</Typography>
                                    </Box>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default WhyChooseFeatures;
