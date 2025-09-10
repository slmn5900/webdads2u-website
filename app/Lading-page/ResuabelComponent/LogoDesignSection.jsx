'use client';

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import DrawIcon from '@mui/icons-material/Draw';
import PaletteIcon from '@mui/icons-material/Palette';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

// Map string names to MUI icons
const iconMap = {
    'pen-square': DrawIcon,
    palette: PaletteIcon,
    'check-circle': CheckCircleIcon
};

export default function LogoDesignSection({ data }) {
    const props = data?.logo_design;
    console.log(props, 'props');
    if (!props) return null;

    return (
        <Box sx={{ width: '100%', py: 4 }}>
            <Swiper modules={[Autoplay]} spaceBetween={30} slidesPerView={1} autoplay={{ delay: 4000, disableOnInteraction: false }} style={{ maxWidth: '1243px', margin: '0 auto' }}>
                {props?.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: { xs: 'wrap', md: 'nowrap' },
                                px: { xs: 0, sm: 4, md: 2 },
                                gap: 3
                            }}
                        >
                            {/* Left Section */}
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                style={{
                                    flex: '1 1 70%',
                                    minWidth: '50%',
                                    maxWidth: '688px'
                                }}
                            >
                                <Box
                                    sx={{
                                        bgcolor: '#f4f4f5',
                                        p: 3,
                                        height: '100%'
                                    }}
                                >
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontFamily: 'Poppins',
                                            fontWeight: 600,
                                            color: 'black',
                                            mb: 2,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1
                                        }}
                                    >
                                        {item.title}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontFamily: 'Poppins',
                                            fontSize: 16,
                                            color: 'black',
                                            mb: 2
                                        }}
                                    >
                                        {item.description}
                                    </Typography>

                                    <Box
                                        sx={{
                                            borderTop: '2px solid rgba(30,27,86,0.1)',
                                            my: 2,
                                            width: '100%'
                                        }}
                                    />

                                    {/* Features List */}
                                    <Box
                                        component="ul"
                                        sx={{
                                            p: 0,
                                            m: 0,
                                            listStyle: 'none',
                                            mb: 3,
                                            overflowY: 'auto',
                                            pr: 1
                                        }}
                                    >
                                        {item?.features.map((feature, idx) => (
                                            <Box
                                                key={idx}
                                                component="li"
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 1,
                                                    fontFamily: 'Poppins',
                                                    fontSize: 14,
                                                    color: 'black',
                                                    mb: 0.5
                                                }}
                                            >
                                                <CheckCircleIcon sx={{ fontSize: 16, color: '#1E1B56' }} />
                                                {feature}
                                            </Box>
                                        ))}
                                    </Box>

                                    <Button
                                        variant="contained"
                                        size="small"
                                        sx={{
                                            backgroundColor: '#E30E26',
                                            color: 'white',
                                            fontFamily: 'Poppins',
                                            fontSize: '10px',
                                            textTransform: 'none',
                                            px: 2,
                                            py: 0.5,
                                            borderRadius: '4px',
                                            '&:hover': {
                                                backgroundColor: '#c10c20'
                                            }
                                        }}
                                    >
                                        Know More
                                    </Button>
                                </Box>
                            </motion.div>

                            {/* Right Section (Image) */}
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                style={{
                                    flex: '1 1 50%',
                                    // minWidth: '50%',
                                    // maxWidth: '475px'
                                }}
                            >
                                <Box
                                    sx={{
                                        height: '100%',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        right: 0
                                        // outline: '1px solid rgba(0,0,0,0.1)'
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={item?.image?.file_name}
                                        alt={item?.image?.alt_text || 'logo design image'}
                                        sx={{
                                            width: '350px',
                                            height: '350px',
                                            objectFit: 'cover',
                                            m: 'auto'
                                        }}
                                    />
                                </Box>
                            </motion.div>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}
