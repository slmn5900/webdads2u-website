
'use client';

import React, { useState } from 'react';
import { Box, Typography, Button, Container, Stack, Grid2 } from '@mui/material';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';

const ITEMS_PER_SLIDE = 8;

const ProjectSliderSection = (data) => {
    console.log(data,"project_portfolio")
    const title = data?.data?.project_portfolio?.title 
    console.log(title,"tt")
    // const description = data?.data?.project_portfolio?.description
    // const images = data?.data?.project_portfolio?.images
    // const [activeIndex, setActiveIndex] = useState(0);
    // console.log(data, "testing");

    // const totalSlides = Math.ceil(images?.length / ITEMS_PER_SLIDE);


    // return (
    //     <Box sx={{ position: 'relative', overflow: 'hidden', py: 6, bgcolor: '#382E98' }}>
    //         {/* Text */}
    //         <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
    //             <Grid2 container>

    //                 <Grid2 size={{ xs: 12, md: 6 }}>

    //                     <Typography variant="h4" fontWeight={600} color="white" mb={2} fontFamily="Poppins">
    //                         {title}
    //                     </Typography>
    //                     <Button variant="contained" sx={{ bgcolor: 'error.main' }}>
    //                         Contact
    //                     </Button>
    //                 </Grid2>
    //                 <Grid2 size={{ xs: 12, md: 6 }}>

    //                     <Typography variant="body1" color="white" maxWidth={500} mb={4} fontFamily="Poppins">
    //                         {description}
    //                     </Typography>
    //                 </Grid2>
    //             </Grid2>

    //         </Container>

    //         {/* Swiper */}
    //         <Box sx={{ mt: 6, px: 4, position: 'relative', zIndex: 2 }}>
    //             <Swiper
    //                 modules={[Grid, Autoplay]}
    //                 slidesPerView={4}
    //                 grid={{ rows: 2, fill: 'row' }}
    //                 spaceBetween={10}
    //                 autoplay={{
    //                     delay: 3000,
    //                     disableOnInteraction: false,
    //                 }}
    //                 loop
    //                 onSlideChange={(swiper) => {
    //                     const logicalIndex = Math.floor(swiper.realIndex / ITEMS_PER_SLIDE);
    //                     setActiveIndex(logicalIndex);
    //                 }}
    //             >
    //                 {images?.map((project, idx) => (
    //                     <SwiperSlide key={idx}>
    //                         <motion.div
    //                             initial={{ opacity: 0, y: 20 }}
    //                             whileInView={{ opacity: 1, y: 0 }}
    //                             transition={{ duration: 0.5, delay: idx * 0.05 }}
    //                         >
    //                             <Box
    //                                 sx={{
    //                                     height: 160,
    //                                     bgcolor: 'white',
    //                                     borderRadius: 2,
    //                                     display: 'flex',
    //                                     alignItems: 'center',
    //                                     justifyContent: 'center',
    //                                     overflow: 'hidden',
    //                                     boxShadow: 3,
    //                                 }}
    //                             >
    //                                 <Box
    //                                     component="img"
    //                                     src={project}
    //                                     alt={`Project ${idx}`}
    //                                     sx={{ maxWidth: '100%', maxHeight: '100%' }}
    //                                 />
    //                             </Box>
    //                         </motion.div>
    //                     </SwiperSlide>
    //                 ))}
    //             </Swiper>

    //             {/* Custom Indicator */}
    //             <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
    //                 {[...Array(totalSlides)]?.map((_, idx) => (
    //                     <Box
    //                         key={idx}
    //                         sx={{
    //                             width: 48,
    //                             height: 8,
    //                             zIndex: 4,
    //                             borderRadius: '10px',
    //                             backgroundColor:
    //                                 activeIndex === idx
    //                                     ? '#DC2626'
    //                                     : 'rgba(126, 124, 128, 0.32)',
    //                             transition: 'all 0.3s ease-in-out',
    //                         }}
    //                     />
    //                 ))}
    //             </Stack>
    //         </Box>

    //         {/* Background Layer */}
    //         <motion.div
    //             animate={{ opacity: 1 }}
    //             transition={{ duration: 2 }}
    //             style={{
    //                 position: 'absolute',
    //                 top: 0,
    //                 left: 0,
    //                 width: '100%',
    //                 height: '100%',
    //                 background: '#382E98',
    //                 zIndex: 0,
    //             }}
    //         />
    //     </Box >
    // );
}

export default ProjectSliderSection;