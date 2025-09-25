'use client';

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

export default function WebsiteMaintenanceHero() {
    return (
        <Box
            component="section"
            sx={{
                position: 'relative',
                height: { xs: '80vh', md: '100vh' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: '#fff',
                overflow: 'hidden',
                backgroundImage: 'url("https://res.cloudinary.com/dbpv95wd8/image/upload/v1757486213/webdads2u/website-maintenance/maintanece-banner.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            {/* Overlay for better text visibility */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    // background: 'rgba(0,0,0,0.5)',
                    zIndex: 1
                }}
            />

            {/* Content */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    maxWidth: '700px',
                    px: 2,
                    bottom: { xs: 0, md: 100 }
                }}
                component={motion.div}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 700,
                        fontSize: { xs: '1.6rem', md: '2rem' },
                        mb: 3,
                        lineHeight: 1.3
                    }}
                >
                    A promise to maintain and successfully handle your website services
                </Typography>
                <Button
                    variant="contained"
                    size="large"
                    href="/contact-us"
                    sx={{
                        background: 'linear-gradient(135deg, #42a5f5, #ab47bc)',
                        borderRadius: '30px',
                        px: 4,
                        py: 1.5,
                        fontWeight: 600,
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        '&:hover': {
                            background: 'linear-gradient(135deg, #478ed1, #8e24aa)'
                        }
                    }}
                >
                    Contact Us
                </Button>
            </Box>

            {/* Bottom Image */}
            <Box
                component="img"
                src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757486210/webdads2u/website-maintenance/web-maintenance-services.png"
                alt="web maintenance services"
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    maxHeight: { xs: '140px', md: '300px' },
                    objectFit: 'contain'
                }}
            />
        </Box>
    );
}
