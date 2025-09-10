'use client';

import React, { useContext } from 'react';
import { Box, Grid2, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { MenuContext } from '../../../../layout/context/menucontext';
import ContactButton from '../../../../components/ui/banner/ContactButton';

const MobileUiUxHero = () => {
    const { header_section } = useContext(MenuContext);
    console.log(header_section, 'header_section');

    return (
        <Box
            component="section"
            sx={{
                position: 'relative',
                backgroundImage: `url(${header_section?.bg_img})`, // replace with your background
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                py: { xs: 8, md: 12 },
                px: { xs: 2, md: 6 },
                color: '#fff'
            }}
        >
            <Grid2 container spacing={4} alignItems="center">
                {/* Left Content */}
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                        <Typography variant="h3" component="h2" fontWeight={700} gutterBottom sx={{ color: '#fff', fontSize: { xs: 18, md: 35 } }}>
                            React Native App Development
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: 'rgba(255,255,255,0.85)', mb: 3 }}>
                            Efficient React Native development empowers cross-platform app creation with native performance and UI flexibility.
                        </Typography>
                        <ContactButton
                            variant="contained"
                            sx={{
                                backgroundColor: '#1976d2',
                                fontWeight: 600,
                                borderRadius: '30px',
                                px: 4,
                                py: 1.2,
                                '&:hover': {
                                    backgroundColor: '#125ea3'
                                }
                            }}
                        >
                            Contact Us
                        </ContactButton>
                    </motion.div>
                </Grid2>

                {/* Right Images */}
                <Grid2 size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        {/* Phone Image */}
                        <motion.img
                            src="/webdads/images/reactnative/mobile.png"
                            alt="React Native App Development"
                            style={{ width: '80%', maxWidth: 400, position: 'relative' }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        />

                        {/* React Native Logo (floating animation) */}
                        <motion.img
                            src="/webdads/images/reactnative/react-native.png"
                            alt="React Native Logo"
                            style={{
                                position: 'absolute',
                                bottom: '280px',
                                right: '20%',
                                width: '100px'
                            }}
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        />
                    </Box>
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default MobileUiUxHero;
