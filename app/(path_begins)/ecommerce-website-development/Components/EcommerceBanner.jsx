'use client';

import { Box, Button, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { MenuContext } from '../../../../layout/context/menucontext';

export default function EcommerceBanner() {
    const { header_section } = useContext(MenuContext);
    return (
        <Box
            component="section"
            sx={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                textAlign: 'center',
                backgroundImage: `url(${header_section?.bg_img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            {/* Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0
                    // bgcolor: 'rgba(0,0,0,0.5)' // dark overlay for readability
                }}
            />

            {/* Content */}
            <Container component={motion?.div} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut' }} sx={{ position: 'relative', zIndex: 2 }}>
                <Typography
                    component={motion?.h2}
                    variant="h2"
                    sx={{
                        fontSize: { xs: '2rem', md: '3rem' },
                        fontWeight: 700,
                        mb: 3,
                        color: 'white'
                    }}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                >
                    {header_section?.title}
                </Typography>

                <Button
                    component={motion?.a}
                    href="/contact-us"
                    variant="outlined"
                    sx={{
                        color: '#fff',
                        borderColor: '#fff',
                        px: 4,
                        py: 1.2,
                        fontSize: '1rem',
                        borderRadius: '30px',
                        '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Contact Us
                </Button>
            </Container>
        </Box>
    );
}
