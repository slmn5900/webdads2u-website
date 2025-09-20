'use client';
import React from 'react';
import { Container, Grid2, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

function BestReactJS() {
    return (
        <Box
            component="section"
            sx={{
                py: { xs: 6, md: 10 },
                background: 'linear-gradient(135deg, #f9f9f9, #e3f2fd)'
            }}
        >
            <Container maxWidth="lg">
                <Grid2 container justifyContent="center" textAlign="center">
                    <Grid2 size={{ xs: 12, md: 12 }}>
                        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} viewport={{ once: true }}>
                            <Typography
                                variant="h3"
                                component="h1"
                                fontWeight="bold"
                                gutterBottom
                                sx={{
                                    fontSize: { xs: '1rem', md: '2rem' },
                                    color: '#0d47a1'
                                }}
                            >
                                Best React JS Development Company in Chennai
                            </Typography>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }} viewport={{ once: true }}>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: { xs: '1rem', md: '1.15rem' },
                                    lineHeight: 1.7,
                                    color: '#424242',
                                    // maxWidth: '800px',
                                    mx: 'auto'
                                }}
                            >
                                React JS development is a specialized open-source JavaScript library designed to facilitate the seamless creation of powerful single-page web applications tailored to meet industry requirements. Embraced by tech
                                industry leaders such as Facebook and Instagram, this library plays a crucial role in the development of both web and mobile applications.
                            </Typography>
                        </motion.div>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
}

export default BestReactJS;
