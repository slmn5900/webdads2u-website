'use client';

import React from 'react';
import { Box, Typography, Container, Grid2, Button, useMediaQuery } from '@mui/material';

const PortfolioSection = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const isTablet = useMediaQuery('(max-width:900px)');

    const portfolioItems = [
        {
            images: [
                { src: '/webdads/images/webdesign/Atgomat.webp', align: 'start' },
                { src: '/webdads/images/webdesign/arc-man.webp', align: 'end', marginTop: -5 }
            ]
        },
        {
            images: [{ src: '/webdads/images/webdesign/raj-vision.webp', align: 'center' }]
        },
        {
            images: [
                { src: '/webdads/images/webdesign/adsfit-design.webp', align: 'end' },
                { src: '/webdads/images/webdesign/what-do.webp', align: 'start', width: '40%' },
                { src: '/webdads/images/webdesign/knowkart.webp', align: 'end', marginTop: -10 }
            ]
        }
    ];

    const buttons = ['Domain Registration', 'Hosting', 'Custom web design', 'Responsive website', 'UI & UX design', 'HTML website design', 'Website Redesign', 'Website Maintanence'];

    return (
        <Box component="section" sx={{ py: isMobile ? 4 : 8, background: 'url(https://res.cloudinary.com/dbpv95wd8/image/upload/v1757409988/webdads2u/web-design/background-banner.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <Container maxWidth="lg">
                {/* Header */}
                <Grid2 container justifyContent="center" sx={{ mb: isMobile ? 2 : 4 }}>
                    <Grid2 size={{ xs: 12 }} sx={{ textAlign: 'center' }}>
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 700,
                                background: 'linear-gradient(to right, white, red)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                mb: 1
                            }}
                        >
                            Our Portfolio
                        </Typography>
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 800,
                                color: 'text.primary',
                                background: 'linear-gradient(90deg, #FF6B00 0%, #FFA800 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                display: 'inline-block'
                            }}
                        >
                            100+
                        </Typography>
                    </Grid2>
                </Grid2>

                {/* Portfolio Images */}
                <Grid2 container spacing={isMobile ? 2 : 4} sx={{ mt: isMobile ? -2 : -5, mb: isMobile ? 3 : 6, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                    {/* Left Column Images */}
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        {/* First Image - Full Width */}
                        <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <Box
                                component="img"
                                src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757409985/webdads2u/web-design/atgomat-banner.png"
                                alt="atgomat banner"
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    maxWidth: '100%',
                                    borderRadius: 1,
                                    // boxShadow: 3,
                                    animation: 'zoomInOut 5s infinite ease-in-out',
                                    '@keyframes zoomInOut': {
                                        '0%, 100%': {
                                            transform: 'scale(1)'
                                        },
                                        '50%': {
                                            transform: 'scale(1.1)'
                                        }
                                    },
                                    transition: 'transform 0.3s ease'
                                }}
                            />
                        </Box>

                        {/* Second Image - Overlapping */}
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: isMobile ? -3 : -5 }}>
                            <Box
                                component="img"
                                src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757409982/webdads2u/web-design/arc-man.png"
                                alt="arc man"
                                sx={{
                                    width: '90%',
                                    height: 'auto',
                                    borderRadius: 1,
                                    // boxShadow: 3,
                                    animation: 'zoomInOut 5s infinite ease-in-out',
                                    '@keyframes zoomInOut': {
                                        '0%, 100%': {
                                            transform: 'scale(1)'
                                        },
                                        '50%': {
                                            transform: 'scale(1.1)'
                                        }
                                    },
                                    transition: 'transform 0.3s ease'
                                }}
                            />
                        </Box>
                    </Grid2>

                    {/* Center Column Image */}
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                height: '100%',
                                alignItems: 'center'
                            }}
                        >
                            <Box
                                component="img"
                                src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757409979/webdads2u/web-design/raj-vision.png"
                                alt="raj vision"
                                sx={{
                                    width: isMobile ? '80%' : '100%',
                                    height: 'auto',
                                    maxWidth: '100%',
                                    borderRadius: 1,
                                    // boxShadow: 3,
                                    animation: 'zoomInOut 5s infinite ease-in-out',
                                    '@keyframes zoomInOut': {
                                        '0%, 100%': {
                                            transform: 'scale(1)'
                                        },
                                        '50%': {
                                            transform: 'scale(1.1)'
                                        }
                                    },
                                    transition: 'transform 0.3s ease'
                                }}
                            />
                        </Box>
                    </Grid2>

                    {/* Right Column Images */}
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        {/* First Image - Right Aligned */}
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Box
                                component="img"
                                src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757409991/webdads2u/web-design/adsfit-design.png"
                                alt="adsfit design"
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    maxWidth: '100%',
                                    borderRadius: 1,
                                    // boxShadow: 3,
                                    animation: 'zoomInOut 5s infinite ease-in-out',
                                    '@keyframes zoomInOut': {
                                        '0%, 100%': {
                                            transform: 'scale(1)'
                                        },
                                        '50%': {
                                            transform: 'scale(1.1)'
                                        }
                                    },
                                    transition: 'transform 0.3s ease'
                                }}
                            />
                        </Box>

                        {/* Second Image - Left Aligned (Small) */}
                        <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 2 }}>
                            <Box
                                component="img"
                                src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757409978/webdads2u/web-design/what-do.png"
                                alt="what do"
                                sx={{
                                    width: '40%',
                                    height: 'auto',
                                    borderRadius: 1,
                                    // boxShadow: 3,
                                    animation: 'zoomInOut 5s infinite ease-in-out',
                                    '@keyframes zoomInOut': {
                                        '0%, 100%': {
                                            transform: 'scale(1)'
                                        },
                                        '50%': {
                                            transform: 'scale(1.1)'
                                        }
                                    },
                                    transition: 'transform 0.3s ease'
                                }}
                            />
                        </Box>

                        {/* Third Image - Right Aligned (Overlapping) */}
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: isMobile ? -4 : -10 }}>
                            <Box
                                component="img"
                                src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757409994/webdads2u/web-design/knowkart.png"
                                alt="knowkart"
                                sx={{
                                    width: '80%',
                                    height: 'auto',
                                    borderRadius: 1,
                                    // boxShadow: 3,
                                    animation: 'zoomInOut 5s infinite ease-in-out',
                                    '@keyframes zoomInOut': {
                                        '0%, 100%': {
                                            transform: 'scale(1)'
                                        },
                                        '50%': {
                                            transform: 'scale(1.1)'
                                        }
                                    },
                                    transition: 'transform 0.3s ease'
                                }}
                            />
                        </Box>
                    </Grid2>
                </Grid2>

                {/* Buttons */}
                <Grid2 container justifyContent="center" spacing={2}>
                    {buttons.map((button, index) => (
                        <Grid2 size={{ xs: 6, sm: 4, md: 3 }} key={index}>
                            <Button
                                variant="contained"
                                fullWidth
                                href={`/${button.toLowerCase().replace(/\s+/g, '-')}`}
                                sx={{
                                    whiteSpace: 'nowrap',
                                    // textTransform: 'none',
                                    // fontWeight: 600,
                                    background: 'none',
                                    // py: 1.5,
                                    border: '2px solid white',
                                    fontSize: { xs: '10px', sm: '12px', md: '15px' },
                                    borderRadius: 2,
                                    '&:hover': {
                                        border: '2px solid white',
                                        backgroundColor: (theme) => (theme.palette.mode === 'dark' ? 'primary.dark' : 'primary.light')
                                    }
                                }}
                            >
                                {button}
                            </Button>
                        </Grid2>
                    ))}
                </Grid2>
            </Container>
        </Box>
    );
};

export default PortfolioSection;
