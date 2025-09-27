'use client';

import { Box, Button, Container, Grid2, Typography, Link } from '@mui/material';
import { motion } from 'framer-motion';
import Title from '../../../../components/Title';
import Description from '../../../../components/Description';

const portfolioItems = [
    {
        img: '/webdads/images/ecommerce/woo-commerce-slider.webp',
        href: '#'
    },
    {
        img: '/webdads/images/ecommerce/woo-commerce-slider-2.webp',
        href: '#'
    },
    {
        img: '/webdads/images/ecommerce/woo-commerce-slider3.webp',
        href: '#'
    },
    {
        img: '/webdads/images/ecommerce/woo-commerce-slider4.webp',
        href: '#'
    },
    {
        img: '/webdads/images/ecommerce/woo-commerce-slider5.webp',
        href: '#'
    }
];

export default function EcommercePortfolio() {
    return (
        <Box component="section" sx={{ py: { xs: 2, md: 3 } }}>
            <Container maxWidth="lg">
                {/* Section Titles */}
                <Box textAlign="center" mb={6}>
                    <Title color="#262250" title={'Our Portfolio'} />
                    {/* <Typography component={motion.h2} variant="h3" fontWeight={700} gutterBottom initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        Our Portfolio
                    </Typography> */}
                    <Description mdalign={'center'} Des={'Innovative Ecommerce Web Design'} />
                    {/* <Typography component={motion.h3} variant="h5" color="text.secondary" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        Innovative Ecommerce Web Design
                    </Typography> */}
                </Box>

                {/* Portfolio Grid2 */}
                <Grid2 container spacing={3} justifyContent="center">
                    {portfolioItems.map((item, index) => (
                        <Grid2 size={{ xs: 6, sm: 4, md: 2.4 }} key={index}>
                            <Box
                                component={motion.div}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                textAlign="center"
                                sx={{
                                    p: 2,
                                    borderRadius: 2,
                                    bgcolor: '#fff',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
                                    }
                                }}
                            >
                                <Box
                                    component="img"
                                    src={item.img}
                                    alt={`Portfolio ${index + 1}`}
                                    sx={{
                                        width: '100%',
                                        height: 'auto',
                                        borderRadius: 2,
                                        mb: 2
                                    }}
                                />
                                <Link href={item.href} underline="none">
                                    <Button variant="contained" component={motion.button} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.9 }}>
                                        View
                                    </Button>
                                </Link>
                            </Box>
                        </Grid2>
                    ))}
                </Grid2>
            </Container>
        </Box>
    );
}
