
"use client";

import React, { useState } from 'react';
import {
    Box,
    Typography,
    Button,
    Card,
    CardMedia,
    CardContent,
    Grid2
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { Autoplay } from 'swiper/modules';


export default function ShopifyProjectShowcase(data) {
    const [activeIndex, setActiveIndex] = useState(0);
    console.log(data, "data1")
    const Highlights = data?.data?.project_portfolio
    const images = data?.data?.project_portfolio?.images
    return (
        <Box
            sx={{
                width: '100%',
                minHeight: '500px',
                position: 'relative',
                background: 'linear-gradient(120deg, #0c064eff 0%, #2519adff 100%)',
                color: 'white',
                px: { xs: 2, sm: 4, md: 10 },
                py: { sm: 3, md: 10 },
                overflow: 'hidden',
            }}
        >

            {/* Heading and Text Section */}
            <Grid2 container spacing={5} >
                <Grid2 size={{ xs: 12, sm: 6, md: 5 }}  >

                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        gap={5}
                    >
                        <Typography variant="h4" sx={{ fontWeight: 600, fontSize: 32, width: '100%', mb: '40px' }} fontFamily="Poppins" gutterBottom>
                            {Highlights?.title}
                        </Typography>
                        <Typography
                            variant="body1"
                            fontFamily="Poppins"
                            sx={{ mb: 3, textAlign: 'justify', mt: 2 }}
                        >
                            {Highlights?.description}
                        </Typography>
                        <Button
                            variant="contained"
                            color={Highlights?.cta?.color}
                            sx={{ textTransform: 'uppercase', fontWeight: 600, fontSize: 14 }}
                        >
                            {Highlights?.cta?.label}
                        </Button>
                    </motion.div>

                </Grid2>
                <Grid2 size={{ xs: 12, sm: 6, md: 7 }} display={{ xs: 'none', sm: 'block', md: 'block' }} >

                    <Box
                        component={motion.img}
                        src={images}
                        alt="Banner"
                        sx={{ width: '100%', maxWidth: 1000 }}
                        animate={{
                            y: [0, -15, 0], // move up and back down
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />

                </Grid2>
            </Grid2>
        </Box>
    );
}
