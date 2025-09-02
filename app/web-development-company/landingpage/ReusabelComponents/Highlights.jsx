// "use client";

// import React from 'react';
// import { Box, Typography, Button, Card, CardMedia, CardContent, Grid2 } from '@mui/material';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { motion } from 'framer-motion';
// import { Pagination } from "swiper/modules"; // 
// import "swiper/css";
// import "swiper/css/pagination"

// const projects = [
//     {
//         title: 'Chakaravarthy Catering',
//         link: 'ChakaravarthyCatering.com',
//         image: 'https://placehold.co/300x350',
//     },
//     {
//         title: 'Yegovah',
//         link: 'Yegovah.com',
//         image: 'https://placehold.co/300x350',
//     },
//     {
//         title: 'Bhava Business Consultants',
//         link: 'bhava.com',
//         image: 'https://placehold.co/300x350',
//     },
//     {
//         title: 'Bhava Business Consultants',
//         link: 'bhava.com',
//         image: 'https://placehold.co/300x350',
//     },
// ];

// export default function ProjectShowcase() {
//     return (
//         <Box
//             sx={{
//                 width: '100%',
//                 minHeight: '750px',
//                 position: 'relative',
//                 background: 'linear-gradient(to bottom right, #0f172a, #1e1b4b)',
//                 color: 'white',
//                 px: { xs: 2, md: 8 },
//                 py: 6,
//                 overflow: 'hidden',
//             }}
//         >
//             <Grid2 container justifyContent={"space-between"}>
//                 <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
//                     <motion.div
//                         initial={{ opacity: 0, y: -40 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         <Typography variant="h4" sx={{ fontWeight: "600", fontSize: "32px" }} fontFamily="Poppins" gutterBottom>
//                             Highlights from Our Project Portfolio
//                         </Typography>

//                         <Button
//                             variant="contained"
//                             color="error"
//                             sx={{ textTransform: 'uppercase', fontWeight: 600, fontSize: 14 }}
//                         >
//                             Contact Us
//                         </Button>
//                     </motion.div>
//                 </Grid2>
//                 <Grid2 size={{ xs: 12, sm: 12, md: 6 }} textAlign={"justify"}>
//                     <motion.div
//                         initial={{ opacity: 0, y: -40 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         <Typography variant="body1" fontFamily="Poppins" sx={{ maxWidth: 400, mb: 3 }}>
//                             We have successfully developed and deployed a wide range of React-based projects —
//                             from enterprise dashboards to interactive marketing sites. Our team ensures high-quality
//                             code, modular development, and future-ready solutions.
//                         </Typography>
//                     </motion.div>
//                 </Grid2>
//             </Grid2>



//             <Box my={6}>
//                 <Swiper
//                     spaceBetween={30}
//                     slidesPerView={1}
//                     modules={[Pagination]} // ✅ Register module
//                     pagination={{ clickable: true }}
//                     breakpoints={{
//                         768: { slidesPerView: 2 },
//                         1024: { slidesPerView: 3 },
//                     }}
//                 >
//                     {projects.map((project, idx) => (
//                         <SwiperSlide key={idx}>
//                             <motion.div

//                                 whileHover={{ scale: 1.05 }}
//                                 transition={{ type: 'spring', stiffness: 300 }}
//                             >
//                                 <Card
//                                     sx={{
//                                         maxWidth: 345,
//                                         mx: 'auto',
//                                         borderRadius: 3,
//                                         boxShadow: 4,
//                                         overflow: 'hidden',
//                                         mb: 2

//                                     }}
//                                 >
//                                     <CardMedia
//                                         component="img"
//                                         height="400"
//                                         image={project.image}
//                                         alt={project.title}
//                                     />
//                                     <CardContent
//                                         sx={{ backgroundColor: '#1e1b4b', color: 'white', textAlign: 'center' }}
//                                     >
//                                         <Typography variant="h6" fontFamily="Poppins" fontWeight={600}>
//                                             {project.title}
//                                         </Typography>
//                                         <Typography variant="body2" fontFamily="Poppins">
//                                             {project.link}
//                                         </Typography>
//                                     </CardContent>
//                                 </Card>
//                                 {/* Custom Pagination Bar */}
//                                 <Box
//                                     className="custom-pagination"
//                                     sx={{
//                                         mt: 4,
//                                         width: 300,
//                                         height: 8,
//                                         position: "relative",
//                                         mx: "auto",
//                                         display: "flex",
//                                         justifyContent: "space-between",
//                                     }}
//                                 >
//                                     {projects.map((_, idx) => (
//                                         <Box
//                                             key={idx}
//                                             sx={{
//                                                 width: 48,
//                                                 height: 8,
//                                                 borderRadius: "10px",
//                                                 backgroundColor: activeIndex === idx ? "#DC2626" : "rgba(212,212,212,0.3)",
//                                                 transition: "all 0.3s",
//                                             }}
//                                         />
//                                     ))}
//                                 </Box>
//                             </motion.div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </Box>
//         </Box>
//     );
// }

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
import { Autoplay } from 'swiper/modules'; import GridLines from './Herosections/GridLines';

export default function ProjectShowcase(data) {
    const [activeIndex, setActiveIndex] = useState(0);
    console.log(data, "data1")
    const Highlights = data?.data?.project_portfolio
    return (
        <Box
            sx={{
                width: '100%',
                minHeight: '650px',
                position: 'relative',
                background: 'linear-gradient(120deg, #0c064eff 0%, #2519adff 100%)',
                color: 'white',
                px: { xs: 2, sm: 4, md: 10 },
                py: { sm: 3, md: 5 },
                overflow: 'hidden',
            }}
        >

            {/* Heading and Text Section */}
            <Grid2 container >
                <Grid2 size={{ xs: 12, sm: 12, md: 8 }}>
                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        gap={5}
                    >
                        <Typography variant="h4" sx={{ fontWeight: 600, fontSize: 32, width: '60%', mb: '40px' }} fontFamily="Poppins" gutterBottom>
                            {Highlights?.title}
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

                <Grid2 size={{ xs: 12, sm: 12, md: 4 }}>
                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography
                            variant="body1"
                            fontFamily="Poppins"
                            sx={{ mb: 3, textAlign: 'justify', mt: 2 }}
                        >
                            {Highlights?.description}
                        </Typography>
                    </motion.div>
                </Grid2>
            </Grid2>

            {/* Swiper Slider */}
            <Box my={3}  >
                <Swiper
                    spaceBetween={30}
                    autoplay={{ delay: 3000, disableOnInteraction: false }} // ✅ Autoplay config
                    modules={[Autoplay]}
                    slidesPerView={1}
                    //   pagination={{ clickable: true }}
                    //   modules={[Pagination]}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {Highlights?.projects?.map((project, idx) => (
                        <SwiperSlide key={idx}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <Card
                                    sx={{
                                        maxWidth: 445,
                                        mx: 'auto',
                                        borderRadius: "10px",
                                        boxShadow: 4,
                                        overflow: 'hidden',
                                        mb: 2
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="400px"
                                        image={project.image.url}
                                        alt={project.image.alt}
                                    />
                                    <CardContent
                                        sx={{
                                            backgroundColor: '#1e1b4b',
                                            color: 'white',
                                            textAlign: 'center'
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            fontFamily="Poppins"
                                            fontWeight={600}
                                        >
                                            {project.name}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            fontFamily="Poppins"
                                        >
                                            {project.url}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Pagination Bar */}
                <Box
                    sx={{
                        mt: 4,
                        width: 300,
                        height: 2,
                        position: 'relative',
                        mx: 'auto',
                        display: 'flex',
                        alignItems: "center",
                        justifyContent: 'center',
                        gap: 1
                    }}
                >
                    {Highlights?.projects?.map((_, idx) => (
                        <Box
                            key={idx}
                            sx={{
                                width: 48,
                                height: 8,
                                borderRadius: '10px',
                                backgroundColor: activeIndex === idx ? '#DC2626' : 'rgba(212,212,212,0.3)',
                                transition: 'all 0.3s ease-in-out',
                            }}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
