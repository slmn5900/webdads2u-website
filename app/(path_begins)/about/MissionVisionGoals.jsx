'use client';
import React from 'react';
import { Container, Card, CardContent, CardMedia, Typography, Box, Grid2 } from '@mui/material';

import { motion } from 'framer-motion';

const MissionVisionGoals = () => {
    const items = [
        {
            title: 'Mission',
            url: '/webdads/images/about-page/misson-about.avif',
            overlay: 'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_248,h_248,dpr_1.5/f_auto,q_auto/v1706706547/Mission-01-01/Mission-01-01.png?_i=AA',
            text: 'Our commitment as the best IT service company is to deliver unparalleled web development solutions, innovative strategies, and leverage cutting-edge technology.'
        },
        {
            title: 'Vision',
            url: '/webdads/images/about-page/vission.avif',
            overlay: 'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_248,h_248,dpr_1.5/f_auto,q_auto/v1706706537/Vission-01-01/Vission-01-01.png?_i=AA',
            text: 'As the best IT service company, our aim is to deliver tailored business solutions that empower organizations of all sizes to remain competitive and reach their business objectives.'
        },
        {
            title: 'Goals',
            url: '/webdads/images/about-page/goal.avif',
            overlay: 'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_248,h_248,dpr_1.5/f_auto,q_auto/v1706706556/Goal-01-01/Goal-01-01.png?_i=AA',
            text: 'At Webdads2u Private Limited, our commitment surpasses mere success; it’s about cultivating an ecosystem where innovation thrives, aspirations find wings, and excellence becomes the norm.'
        }
    ];

    return (
        <Container sx={{ my: 6 }}>
            <Grid2 container spacing={4}>
                {items.map((item, index) => (
                    <Grid2 size={{ xs: 12, md: 4 }} key={index}>
                        <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                            <Card sx={{ height: '100%', boxShadow: 4, borderRadius: 3, overflow: 'hidden', position: 'relative', maxHeight: '400px' }}>
                                {/* Background Image */}
                                <CardMedia component="img" height="220" image={item.url} alt={`${item.title} Image`} sx={{ objectFit: 'cover' }} />

                                {/* Dark overlay with title */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '220px',
                                        bgcolor: 'rgba(0,0,0,0.45)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexDirection: 'column',
                                        color: '#fff'
                                    }}
                                >
                                    <Typography variant="h5" fontWeight={700} sx={{ fontFamily: 'Poppins, sans-serif' }}>
                                        {item.title}
                                    </Typography>

                                    {/* Overlay Icon */}
                                    <Box component="img" src={item.overlay} alt={`${item.title} overlay`} sx={{ width: 90, mt: 1, position: 'absolute', bottom: -60 }} />
                                </Box>

                                {/* Description */}
                                <CardContent sx={{ pt: 7 }}>
                                    <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.6, fontFamily: 'Poppins, sans-serif' }}>
                                        {item.text}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid2>
                ))}
            </Grid2>
        </Container>
    );
};

export default MissionVisionGoals;
