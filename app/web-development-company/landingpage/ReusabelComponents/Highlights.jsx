'use client';
import React, { useState } from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from 'framer-motion';
import { Autoplay } from 'swiper/modules';

export default function ProjectShowcase({ data }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const Highlights = data?.project_portfolio;
    if (!Highlights || (!Highlights.title && !Highlights.description && !Highlights.projects?.length)) {
        return null;
    }

    return (
        <Box
            sx={{
                width: '100%',
                minHeight: '100vh', // full window screen
                position: 'relative',
                background: 'linear-gradient(120deg, #0c064eff 0%, #2519adff 100%)',
                color: 'white',
                px: { xs: 2, sm: 4, md: 10 },
                py: { sm: 3, md: 2 },
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}
        >
            {/* Heading + CTA + Description */}
            <Box display="flex" flexWrap="wrap" mb={1}>
                {Highlights?.title && (
                    <Box flex={{ xs: '100%', md: '60%' }}>
                        <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                            <Typography variant="h4" sx={{ fontWeight: 600, fontSize: 30, width: '60%', mb: '40px' }} fontFamily="Poppins" gutterBottom>
                                {Highlights.title}
                            </Typography>
                            {Highlights?.cta?.label && (
                                <Button variant="contained" color={Highlights?.cta?.color || 'primary'} sx={{ textTransform: 'uppercase', fontWeight: 600, fontSize: 14 }}>
                                    {Highlights.cta.label}
                                </Button>
                            )}
                        </motion.div>
                    </Box>
                )}

                {Highlights?.description && (
                    <Box flex={{ xs: '100%', md: '40%' }}>
                        <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                            <Typography variant="body1" fontFamily="Poppins" sx={{ mb: 3, textAlign: 'justify', mt: 2 }}>
                                {Highlights.description}
                            </Typography>
                        </motion.div>
                    </Box>
                )}
            </Box>

            {/* Projects Swiper */}
            {Highlights?.projects?.length > 0 && (
                <Box>
                    <Swiper
                        spaceBetween={30}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        modules={[Autoplay]}
                        slidesPerView={1}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }}
                    >
                        {Highlights.projects.map((project, idx) => (
                            <SwiperSlide key={idx}>
                                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
                                    <Card
                                        sx={{
                                            maxWidth: 445,
                                            mx: 'auto',
                                            borderRadius: '10px',
                                            boxShadow: 4,
                                            overflow: 'hidden',
                                            mb: 2
                                            // height: 'calc(100vh - 300px)'
                                        }}
                                    >
                                        <CardMedia component="img" height="400px" image={project.image} alt={project.image?.alt || project.name} />

                                        {project?.name && (
                                            <CardContent
                                                sx={{
                                                    backgroundColor: '#1e1b4b',
                                                    color: 'white',
                                                    textAlign: 'center'
                                                }}
                                            >
                                                <Typography variant="h6" fontFamily="Poppins" fontWeight={600}>
                                                    {project.name}
                                                </Typography>
                                                <Typography variant="body2" fontFamily="Poppins">
                                                    {project.url}
                                                </Typography>
                                            </CardContent>
                                        )}
                                    </Card>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Pagination */}
                    <Box
                        sx={{
                            mt: 4,
                            width: 300,
                            height: 2,
                            position: 'relative',
                            mx: 'auto',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 1
                        }}
                    >
                        {Highlights.projects.map((_, idx) => (
                            <Box
                                key={idx}
                                sx={{
                                    width: 48,
                                    height: 8,
                                    borderRadius: '10px',
                                    backgroundColor: activeIndex === idx ? '#DC2626' : 'rgba(212,212,212,0.3)',
                                    transition: 'all 0.3s ease-in-out'
                                }}
                            />
                        ))}
                    </Box>
                </Box>
            )}
        </Box>
    );
}
