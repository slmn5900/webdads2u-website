// Converted to React with Material UI
'use client';

import React from 'react';
import { Box, Typography, Card, CardContent, Grid2, Avatar, IconButton } from '@mui/material';
import { Image } from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { motion } from 'framer-motion';

const StatCard = ({ title, value, icon }) => (
    <Card
        elevation={3}
        sx={{
            backgroundColor: '#f3f4f6',
            borderRadius: 2,
            px: 1,
            py: 1,
            position: 'relative',
            overflow: 'hidden'
        }}
    >
        <CardContent sx={{ pb: 0, height: '80px' }}>
            <Typography fontSize={18} fontWeight={600} fontFamily="Poppins">
                {title}
            </Typography>
            <Typography fontSize={24} fontWeight={400} fontFamily="Poppins">
                {value}
            </Typography>
            <Box position="absolute" top={8} right={8}>
                <Avatar src={icon} sx={{ width: 30, height: 30 }} />
            </Box>
        </CardContent>
    </Card>
);

const ProjectHighlights = ({ data }) => {
    console.log(data, 'Graph>>>');
    const graphdata = data?.graphdata;
    const title = graphdata?.title;
    const description = graphdata?.description;
    const projects = graphdata?.projects;

    return (
        <Box
            sx={{
                width: '100%',
                // maxWidth: 1240,
                // mx: "auto",
                minHeight: 880,
                position: 'relative',
                bgcolor: '#3a30a2',
                overflow: 'hidden'
            }}
        >
            <Box
                sx={{
                    // position: "absolute",
                    // top: 30,
                    // left: "50%",
                    // transform: "translateX(-50%)",
                    textAlign: 'center',
                    py: 4
                }}
            >
                <Typography color="white" fontSize={30} fontWeight={600} fontFamily="Poppins">
                    {title}
                </Typography>
                <Typography mt={2} color="white" fontSize={16} fontWeight={400} fontFamily="Poppins" maxWidth={861} mx="auto">
                    {description}
                </Typography>
            </Box>

            <Box
                sx={{
                    position: 'absolute',
                    top: 200,
                    left: 70,
                    right: 70
                }}
            >
                <Grid2 container spacing={2}>
                    {projects?.map((item, idx) => (
                        <Grid2 size={{ xs: 12, md: 4 }} key={idx}>
                            <Box sx={{ bgcolor: '#6E67B5', borderRadius: 2, overflow: 'hidden' }}>
                                <Grid2 container spacing={2} p={2}>
                                    <Grid2 size={{ xs: 6 }}>
                                        <StatCard title="Views" value={item?.views} icon={item?.logo} />
                                    </Grid2>
                                    <Grid2 size={{ xs: 6 }}>
                                        <StatCard title="Reach" value={item?.reach} icon={item?.logo} />
                                    </Grid2>
                                    <Grid2 size={{ xs: 12 }}>
                                        <Swiper
                                            modules={[Autoplay]}
                                            spaceBetween={50}
                                            slidesPerView={1}
                                            loop={true}
                                            autoplay={{
                                                delay: 0,
                                                disableOnInteraction: false
                                            }}
                                            speed={4000}
                                            grabCursor={false}
                                            allowTouchMove={false}
                                        >
                                            {item?.imageset1?.map((img, index) => (
                                                <SwiperSlide
                                                    key={index}
                                                    style={{
                                                        width: 'auto',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}
                                                >
                                                    <Box
                                                        component={motion.div}
                                                        whileHover={{ scale: 1.05 }}
                                                        sx={{
                                                            width: { xs: 60, sm: 80, md: '100%' },
                                                            height: { xs: 30, sm: 45, md: 'auto' },
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            bgcolor: 'white',
                                                            borderRadius: 2,
                                                            boxShadow: '0 0 10px rgba(0,0,0,0.05)'
                                                        }}
                                                    >
                                                        <img
                                                            src={img?.img}
                                                            alt={img?.alt || ''}
                                                            style={{
                                                                maxWidth: '100%',
                                                                maxHeight: '100%',
                                                                objectFit: 'contain',
                                                                borderRadius: 5
                                                            }}
                                                        />
                                                    </Box>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </Grid2>
                                    <Grid2 size={{ xs: 6 }}>
                                        <StatCard title="Views" value={item?.views2} icon={item?.logo2} />
                                    </Grid2>
                                    <Grid2 size={{ xs: 6 }}>
                                        <StatCard title="Reach" value={item?.reach2} icon={item?.logo2} />
                                    </Grid2>
                                    {/* second off graph */}
                                    <Grid2 size={{ xs: 12 }}>
                                        <Swiper
                                            modules={[Autoplay]}
                                            spaceBetween={50}
                                            slidesPerView={1}
                                            loop={true}
                                            autoplay={{
                                                delay: 0,
                                                disableOnInteraction: false
                                            }}
                                            speed={4000}
                                            grabCursor={false}
                                            allowTouchMove={false}
                                        >
                                            {item?.imageset2?.map((img, index) => (
                                                <SwiperSlide
                                                    key={index}
                                                    style={{
                                                        width: 'auto',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}
                                                >
                                                    <Box
                                                        component={motion.div}
                                                        whileHover={{ scale: 1.05 }}
                                                        sx={{
                                                            width: { xs: 60, sm: 80, md: '100%' },
                                                            height: { xs: 30, sm: 45, md: 'auto' },
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            bgcolor: 'white',
                                                            borderRadius: 2,
                                                            boxShadow: '0 0 10px rgba(0,0,0,0.05)'
                                                        }}
                                                    >
                                                        <img
                                                            src={img?.img || img}
                                                            alt={img?.alt || ''}
                                                            style={{
                                                                maxWidth: '100%',
                                                                maxHeight: '100%',
                                                                objectFit: 'contain',
                                                                borderRadius: 5
                                                            }}
                                                        />
                                                    </Box>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </Grid2>
                                    <Grid2 size={{ xs: 12 }}>
                                        <Box
                                            sx={{
                                                bgcolor: '#1e1b56',
                                                color: 'white',
                                                borderBottomLeftRadius: 10,
                                                borderBottomRightRadius: 10,
                                                p: 2,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: 1
                                            }}
                                        >
                                            <Typography fontSize={20} fontWeight={600} fontFamily="Poppins">
                                                {item?.name}
                                            </Typography>
                                        </Box>
                                    </Grid2>
                                </Grid2>
                            </Box>
                        </Grid2>
                    ))}
                </Grid2>
            </Box>
        </Box>
    );
};

export default ProjectHighlights;
