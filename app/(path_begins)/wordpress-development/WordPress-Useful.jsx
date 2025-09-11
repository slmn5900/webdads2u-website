

'use client';

import React from 'react';
import { Container, Grid2, Card, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const features = [
    {
        title: 'Theme Development',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757333829/webdads2u/wordpress-development/icons/wordpress-theme-development.png'
    },
    {
        title: 'Plugin Development',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757333818/webdads2u/wordpress-development/icons/wordpress-plugin-development.png'
    },
    {
        title: 'eCommerce Solutions',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757333814/webdads2u/wordpress-development/icons/wordpress-ecommerce-solutions.png'
    },
    {
        title: 'Updates and Migration',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757333765/webdads2u/wordpress-development/icons/updates-and-migration.png'
    },
    {
        title: 'PSD to WordPress',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757333756/webdads2u/wordpress-development/icons/psd-to-wordpress.png'
    },
    {
        title: 'Custom Development',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757333745/webdads2u/wordpress-development/icons/custom-development.png'
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' }
    })
};

export default function WordPressUseful() {
    return (
        <Box sx={{ py: 0 }}>
            <Container maxWidth="lg">
                {/* Heading */}
                <Box textAlign="center" mb={6}>
                    <Typography variant="h4" fontWeight="bold" gutterBottom fontSize={{ xs: '1.125rem', md: '2.125rem' }}>
                        What Makes WordPress so Useful for Website Development?
                    </Typography>
                    <Typography variant="body1" color="text.secondary" maxWidth="md" mx="auto">
                        A WordPress development company leverages the platform’s user-friendly interface, extensive plugin ecosystem, and customizable themes for website development. It facilitates easy content management, SEO optimization, and
                        scalability. With a large community and frequent updates, WordPress remains a top choice for building dynamic and responsive websites.
                    </Typography>
                </Box>

                {/* Features Grid2 */}
                <Grid2 container spacing={4}>
                    {features.map((feature, i) => (
                        <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                            <motion.div custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={cardVariants}>
                                <Card
                                    sx={{
                                        p: 3,
                                        textAlign: 'center',
                                        borderRadius: 3,
                                        boxShadow: 3,
                                        height: '100%',
                                        transition: 'all 0.3s ease',
                                        '&:hover': { transform: 'translateY(-6px)', boxShadow: 6 }
                                    }}
                                >
                                    <Box mb={2}>
                                        <img src={feature.img} alt={feature.title} loading="lazy" style={{ maxWidth: 80, margin: 'auto' }} />
                                    </Box>
                                    <Typography variant="h6" fontWeight="bold">
                                        {feature.title}
                                    </Typography>
                                </Card>
                            </motion.div>
                        </Grid2>
                    ))}
                </Grid2>
            </Container>
        </Box>
    );
}
