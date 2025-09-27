'use client';
import React from 'react';
import { Container, Typography, Button, Box, Grid2 } from '@mui/material';
import { motion } from 'framer-motion';

const ElevateSection = () => {
    return (
        <Container>
            <Box
                component="section"
                sx={{
                    // py: { xs: 6, md: 10 },
                    backgroundImage: 'url(https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410014/webdads2u/web-design/evalute-banner.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: { xs: '2rem', md: 0 }
                }}
            >
                <Container>
                    <Grid2 container alignItems="center" spacing={5}>
                        {/* Left Content */}
                        <Grid2 size={{ xs: 12, md: 5 }}>
                            <motion.div initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} viewport={{ once: true }}>
                                <Typography
                                    variant="h2"
                                    sx={{
                                        color: '#fff',
                                        fontFamily: 'Poppins, sans-serif',
                                        fontSize: { xs: '16px', md: '35px' },
                                        fontWeight: 600,
                                        mb: 3
                                    }}
                                >
                                    Elevate your website to new Heights!
                                </Typography>

                                <motion.div whileHover={{ scale: 1.05 }}>
                                    <a href="https://www.facebook.com/Webdads2u" target="_blank" rel="noopener noreferrer">
                                        <Button
                                            variant="contained"
                                            sx={{
                                                backgroundColor: '#2bc0f8',
                                                borderRadius: '30px',
                                                px: { xs: 2, md: 5 },
                                                py: { xs: 1, md: 1.5 },
                                                fontSize: { xs: 12, md: '18px' },
                                                fontWeight: 600,
                                                color: '#fff',
                                                textTransform: 'none',
                                                '&:hover': { backgroundColor: '#19a8df' }
                                            }}
                                        >
                                            Talk to Us
                                        </Button>
                                    </a>
                                </motion.div>
                            </motion.div>
                        </Grid2>

                        {/* Right Image */}
                        <Grid2 size={{ xs: 12, md: 7 }} sx={{ display: { xs: 'none', md: 'block' } }}>
                            <motion.img
                                src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410010/webdads2u/web-design/eve-group.png"
                                alt="Elevate Website"
                                style={{ width: '100%', borderRadius: '12px' }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.9, ease: 'easeOut' }}
                                viewport={{ once: true }}
                            />
                        </Grid2>
                    </Grid2>
                </Container>
            </Box>
        </Container>
    );
};

export default ElevateSection;
