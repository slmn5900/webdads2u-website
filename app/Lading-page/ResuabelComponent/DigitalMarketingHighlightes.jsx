
'use client';
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const DigitalMarketingHighlightes = () => {
    return (
        <Box
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            sx={{
                backgroundColor: '#f9f9f9',
                py: { xs: 2, md: 10 },
                px: { xs: 2, md: 8 },
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-between',
                gap: {xs:2, md:6},
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Left Side Content */}
            <Box maxWidth="500px" zIndex={2}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Highlights from Our Project Portfolio
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={3}>
                    Choosing the best WordPress development company in Chennai means working with experienced developers who specialize in creating
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#DC2626',
                        px: 4,
                        py: 1.5,
                        fontWeight: 'bold',
                        '&:hover': {
                            backgroundColor: '#b91c1c',
                        },
                    }}
                >
                    CONTACT
                </Button>
            </Box>

            {/* Right Side Charts */}
            <Box
                sx={{
                    flex: 1,
                    position: 'relative',
                    minHeight: { xs: 260, md: 300 }, // Reduced height here
                }}
            >
                {/* Watermark */}
                <Typography
                    component="div"
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontSize: { xs: '2rem', md: '5rem' },
                        color: 'rgba(0, 0, 0, 0.05)',
                        fontWeight: 'bold',
                        letterSpacing: 6,
                        zIndex: 1,
                        userSelect: 'none',
                        whiteSpace: 'nowrap',
                    }}
                >
                    GOOGLE ADS
                </Typography>

                {/* Top Chart - full width */}
                <Box
                    component={motion.img}
                    src="/webdadsNewImages/digitalmarketing/highlightgraph/4a5bcb119870323c118ad28ab72ca35ae17ca478.png"
                    alt="Google Ads Chart 1"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    sx={{
                        position: 'absolute',
                        top: 0,
                        bottom: -20,
                        right: 0,
                        width: '100%',
                        zIndex: 2,
                    }}
                />

                {/* Bottom Chart - offset from right */}
                <Box
                    component={motion.img}
                    src="/webdadsNewImages/digitalmarketing/highlightgraph/b9aac739ac8c41e71ff50fc4cd46a23ce17012c3.png"
                    alt="Google Ads Chart 2"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    sx={{
                        position: 'absolute',
                        bottom: {xs: 30, md:-80},
                        right: {xs:30, md:40},
                        width: '90%',
                        zIndex: 2,
                    }}
                />
            </Box>
        </Box>
    );
};

export default DigitalMarketingHighlightes;


