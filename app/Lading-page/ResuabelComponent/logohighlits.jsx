
'use client';

import React, { useState } from 'react';
import { Box, Typography, Button, Container, Stack, Grid2 } from '@mui/material';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';

const projects = [
    { id: 1, img: 'https://placehold.co/160x58' },
    { id: 2, img: 'https://placehold.co/214x214' },
    { id: 3, img: 'https://placehold.co/133x118' },
    { id: 4, img: 'https://placehold.co/148x61' },
    { id: 5, img: 'https://placehold.co/201x144' },
    { id: 6, img: 'https://placehold.co/133x58' },
    { id: 7, img: 'https://placehold.co/133x58' },
    { id: 8, img: 'https://placehold.co/133x58' },
    { id: 9, img: 'https://placehold.co/133x58' },
    { id: 10, img: 'https://placehold.co/133x58' },
];

const ITEMS_PER_SLIDE = 8;

export default function ProjectSliderSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const totalSlides = Math.ceil(projects.length / ITEMS_PER_SLIDE);

    return (
        <Box sx={{ position: 'relative', overflow: 'hidden', py: 6, bgcolor: '#382E98' }}>
            {/* Text */}
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                <Grid2 container>

                    <Grid2 size={{ xs: 12, md: 6 }}>

                        <Typography variant="h4" fontWeight={600} color="white" mb={2} fontFamily="Poppins">
                            Highlights from Our Project Portfolio
                        </Typography>
                        <Button variant="contained" sx={{ bgcolor: 'error.main' }}>
                            Contact
                        </Button>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>

                        <Typography variant="body1" color="white" maxWidth={500} mb={4} fontFamily="Poppins">
                            Choosing the best WordPress development company in Chennai means working with experienced developers who specialize in creating websites that are both user-friendly and high-performing.
                        </Typography>
                    </Grid2>
                </Grid2>

            </Container>

            {/* Swiper */}
            <Box sx={{ mt: 6, px: 4, position: 'relative', zIndex: 2 }}>
                <Swiper
                    modules={[Grid, Autoplay]}
                    slidesPerView={4}
                    grid={{ rows: 2, fill: 'row' }}
                    spaceBetween={10}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop
                    onSlideChange={(swiper) => {
                        const logicalIndex = Math.floor(swiper.realIndex / ITEMS_PER_SLIDE);
                        setActiveIndex(logicalIndex);
                    }}
                >
                    {projects.map((project, idx) => (
                        <SwiperSlide key={project.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.05 }}
                            >
                                <Box
                                    sx={{
                                        height: 160,
                                        bgcolor: 'white',
                                        borderRadius: 2,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        overflow: 'hidden',
                                        boxShadow: 3,
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={project.img}
                                        alt={`Project ${idx}`}
                                        sx={{ maxWidth: '100%', maxHeight: '100%' }}
                                    />
                                </Box>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Indicator */}
                <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
                    {[...Array(totalSlides)].map((_, idx) => (
                        <Box
                            key={idx}
                            sx={{
                                width: 48,
                                height: 8,
                                zIndex: 4,
                                borderRadius: '10px',
                                backgroundColor:
                                    activeIndex === idx
                                        ? '#DC2626'
                                        : 'rgba(126, 124, 128, 0.32)',
                                transition: 'all 0.3s ease-in-out',
                            }}
                        />
                    ))}
                </Stack>
            </Box>

            {/* Background Layer */}
            <motion.div
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: '#382E98',
                    zIndex: 0,
                }}
            />
        </Box >
    );
}
