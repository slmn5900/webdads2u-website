'use client';

import { Box, Container, Grid2, Typography, Link } from '@mui/material';
import { motion } from 'framer-motion';

const streams = [
    {
        title: 'WooCommerce',
        href: '/woo-commerce/',
        img: '/webdads/images/ecommerce/woocommerce-ecommerce.png'
    },
    {
        title: 'Opencart',
        href: '/opencart-development/',
        img: '/webdads/images/ecommerce/opencart-ecommerce.png'
    },
    {
        title: 'Shopify',
        href: '/shopify-development/',
        img: '/webdads/images/ecommerce/shopify-ecommerce.png'
    }
];

export default function EcommerceStreams() {
    return (
        <Box component="section" sx={{ py: { xs: 2, md: 3 }, backgroundColor: '#f9f9f9' }}>
            <Container maxWidth="lg">
                <Grid2 container spacing={4} alignItems="center" justifyContent="center">
                    {/* Title */}
                    <Grid2 size={{ xs: 12, md: 3 }}>
                        <Box textAlign="center">
                            <Typography component={motion.h3} variant="h4" fontWeight={700} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                                E-commerce Streams
                            </Typography>
                        </Box>
                    </Grid2>

                    {/* Stream Boxes */}
                    {streams.map((stream, index) => (
                        <Grid2 size={{ xs: 12, md: 2 }} key={index}>
                            <Box
                                component={motion.div}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                textAlign="center"
                                sx={{
                                    p: 3,
                                    borderRadius: 3,
                                    // bgcolor: '#fff',
                                    // boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                                    transition: 'all 0.3s ease'
                                    // '&:hover': {
                                    //     boxShadow: '0 6px 20px rgba(0,0,0,0.12)'
                                    // }
                                }}
                            >
                                <Link href={stream.href}>
                                    <Box
                                        component="img"
                                        src={stream.img}
                                        alt={stream.title}
                                        sx={{
                                            width: 80,
                                            height: 'auto',
                                            mb: 2
                                        }}
                                    />
                                </Link>
                                <Typography variant="body1" fontWeight={600}>
                                    <Link
                                        href={stream.href}
                                        underline="none"
                                        sx={{
                                            color: 'text.primary',
                                            '&:hover': { color: 'primary.main' }
                                        }}
                                    >
                                        {stream.title}
                                    </Link>
                                </Typography>
                            </Box>
                        </Grid2>
                    ))}
                </Grid2>
            </Container>
        </Box>
    );
}
