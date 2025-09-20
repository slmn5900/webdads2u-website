'use client';

import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const NeedProposal = () => {
    return (
        <Box
            component="section"
            sx={{
                backgroundImage: "url('https://res.cloudinary.com/dbpv95wd8/image/upload/v1758196549/webdads2u/web-portal-development/join-team.webp')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                py: { xs: 6, md: 10 },
                textAlign: 'center'
            }}
        >
            <Container maxWidth="md">
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 700,
                            fontSize: { xs: '1.8rem', md: '2.5rem' },
                            color: '#0A1F5F',
                            mb: 2
                        }}
                    >
                        Need a Proposal? Let’s Discuss the Project
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: { xs: '1rem', md: '1.1rem' },
                            color: '#333',
                            mb: 4
                        }}
                    >
                        Get in touch with us and discuss the needs and requirements of your project
                    </Typography>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: 'spring', stiffness: 200 }}>
                        <Button
                            variant="contained"
                            href="/contact-us"
                            sx={{
                                px: 4,
                                py: 1.5,
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 600,
                                borderRadius: '30px',
                                background: '#6243A4',
                                color: '#fff',
                                textTransform: 'none',
                                fontSize: '16px',
                                boxShadow: '0 3px 8px rgba(0,0,0,0.3)',
                                '&:hover': {
                                    backgroundImage: 'linear-gradient(125deg, #03001D 31%, #93024B 100%)',
                                    boxShadow: '0 5px 12px rgba(0,0,0,0.4)'
                                }
                            }}
                        >
                            Get in touch
                        </Button>
                    </motion.div>
                </motion.div>
            </Container>
        </Box>
    );
};

export default NeedProposal;
