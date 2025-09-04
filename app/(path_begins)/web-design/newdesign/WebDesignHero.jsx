'use client';

import React from 'react';
import { Container, Grid, Typography, Button, Box, useTheme, useMediaQuery, Grid2 } from '@mui/material';
import BannerLeft from '../../../../components/ui/banner/BannerLeft';

const WebDesignHero = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            component="section"
            sx={{
                px: 6,
                width: 'auto',
                height: 'auto',
                py: 4,
                backgroundColor: '#f5f7fa', // Light blue-gray background from your image
                backgroundImage: 'linear-gradient(to right, #0247a0, #47c1c5)' // Subtle gradient
            }}
        >
            <Grid2 container spacing={4} alignItems="center">
                <Grid2 size={{ xs: 12, md: 8 }}>
                    {/* <Box
                        sx={{
                            textAlign: { xs: 'center', md: 'left' }
                        }}
                    >
                        <Typography
                            variant="h2"
                            component="h1"
                            sx={{
                                fontWeight: 700,
                                mb: 3,
                                fontSize: { xs: '2rem', sm: '2.5rem', md: '2.8rem' },
                                color: theme.palette.text.primary,
                                lineHeight: 1.2,
                                color: 'white'
                            }}
                        >
                            Elevating your Business with our speculative web designing services
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 500,
                                color: 'white'
                            }}
                        >
                            Enhancing customer engagement with perfect web design
                        </Typography>
                        <Box sx={{ mb: 3 }}>
                            <Typography variant="h6" sx={{ color: 'white' }}>
                                Are you looking for a new website for your startup company / Business?
                            </Typography>
                            <Typography variant="h6" sx={{ color: 'white' }}>
                                Do you want to revamp your existing website?
                            </Typography>
                        </Box>
                        <Button
                            variant="contained"
                            href="/contact-us"
                            size="small"
                            sx={{
                                py: 1,
                                px: 2,
                                fontWeight: 600,
                                fontSize: '1rem',
                                textTransform: 'uppercase',
                                backgroundColor: '#07b4c7ff',
                                borderRadius: 20,
                                border: '5px solid white'
                            }}
                        >
                            Talk to us
                        </Button>
                    </Box> */}
                     <BannerLeft />
                </Grid2>
                <Grid2 size={{ xs: 0, md: 4}} sx={{display:{xs:"none",md:"block"}}}>
                    <Box
                        sx={{
                            position: 'relative',
                            right: 80,
                            height: { xs: 300, sm: 400, md: '500px' },
                            width: '500px'
                        }}
                    >
                        {/* Main hero image */}
                        <Box
                            component="img"
                            alt="Web design illustration"
                            src="/webdads/images/webdesign/hero-slider.png"
                            sx={{
                                position: 'relative',
                                top: '50%',
                                left: '30%',
                                transform: 'translate(-50%, -50%)',
                                width: '100%',
                                maxWidth: 450,
                                zIndex: 2
                            }}
                        />

                        {/* Decorative icons positioned around */}
                        <Box
                            component="img"
                            alt="Link icon"
                            src="/webdads/images/webdesign/banner-icons-link.png"
                            sx={{
                                position: 'absolute',
                                top: { xs: '5%', md: '10%' },
                                left: { xs: '5%', md: '0%' },
                                width: { xs: 60, md: 100 },
                                height: { xs: 60, md: 100 },
                                objectFit: 'contain',
                                zIndex: 3,
                                animation: 'float 6s ease-in-out infinite'
                            }}
                        />

                        <Box
                            component="img"
                            alt="System icon"
                            src="/webdads/images/webdesign/banner-icons-2.png"
                            sx={{
                                position: 'absolute',
                                top: { xs: '5%', md: '15%' },
                                right: { xs: '5%', md: '0%' },
                                width: { xs: 60, md: 80 },
                                height: { xs: 60, md: 80 },
                                objectFit: 'contain',

                                zIndex: 3,
                                animation: 'float 4s ease-in-out infinite 2s'
                            }}
                        />

                        <Box
                            component="img"
                            alt="HTML icon"
                            src="/webdads/images/webdesign/html.png"
                            sx={{
                                position: 'absolute',
                                bottom: { xs: '5%', md: '10%' },
                                left: { xs: '5%', md: '5%' },
                                width: { xs: 60, md: 80 },
                                height: { xs: 60, md: 80 },
                                objectFit: 'contain',
                                zIndex: 3,
                                animation: 'float 5s ease-in-out infinite 1s'
                            }}
                        />

                        <Box
                            component="img"
                            alt="Settings icon"
                            src="/webdads/images/webdesign/banner-icons-setting.png"
                            sx={{
                                position: 'absolute',
                                bottom: { xs: '10%', md: '15%' },
                                right: { xs: '5%', md: '5%' },
                                width: { xs: 60, md: 80 },
                                height: { xs: 60, md: 80 },
                                objectFit: 'contain',
                                zIndex: 3,
                                animation: 'float 3s ease-in-out infinite'
                            }}
                        />

                        {/* Floating animation */}
                        <style jsx global>{`
                            @keyframes float {
                                0% {
                                    transform: translateY(0px);
                                }
                                50% {
                                    transform: translateY(-15px);
                                }
                                100% {
                                    transform: translateY(0px);
                                }
                            }
                        `}</style>
                    </Box>
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default WebDesignHero;
