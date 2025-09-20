'use client';
import React, { useContext } from 'react';
import { Grid2, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { MenuContext } from '../../../layout/context/menucontext';

function Customwebdevelopmentbanner() {
    const { header_section } = useContext(MenuContext);
    return (
        <Box
            className="customwebdevelopmentbanner-main "
            component="section"
            sx={{
                background: `url(${header_section?.bg_img})`,
                py: { xs: 6, md: 10 },
                px: { xs: 2, md: 6 },
                backgroundColor: '#f9f9f9'
            }}
        >
            <Grid2 container spacing={4} alignItems="start" justifyContent="space-between">
                {/* Left Side Content */}
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                        <Typography variant="h3" component="h1" fontWeight={700} gutterBottom color="white" sx={{ fontSize: { xs: 20, md: 30 } }}>
                            {header_section?.title}
                        </Typography>
                        <Typography variant="body1" color="white" paragraph>
                            {header_section?.description}{' '}
                        </Typography>
                        <Button variant="outlined" color="primary" size="large" component="a" href="/contact-us" sx={{ borderRadius: 2, mt: 2, color: 'white' }}>
                            Contact Us
                        </Button>
                    </motion.div>
                </Grid2>

                {/* Right Side Image */}
                <Grid2 size={{ xs: 12, md: 6 }} sx={{ textAlign: 'center', mt: -15, display: { xs: 'none', md: 'block' } }}>
                    <motion.img
                        src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757401736/webdads2u/custom-web-development/web-portal-development.png"
                        alt="web-portal-development"
                        loading="lazy"
                        style={{ maxWidth: '100%', height: 'auto' }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    />
                </Grid2>
            </Grid2>
        </Box>
    );
}

export default Customwebdevelopmentbanner;
