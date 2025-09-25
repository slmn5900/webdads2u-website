

'use client';

import React from 'react';
import { Container, Grid2, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

export default function Themes() {
    return (
        <Box sx={{ py: 8}}>
            <Container maxWidth="lg">
                <Grid2 container spacing={4} alignItems="center">
                    {/* Left Image */}
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} viewport={{ once: true, amount: 0.3 }}>
                            <Box
                                component="img"
                                src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757332027/webdads2u/wordpress-development/wordpress-customisation.png"
                                alt="wordpress-customisation"
                                loading="lazy"
                                sx={{
                                    width: '100%',
                                    maxWidth: 500,
                                    borderRadius: 2,
                                    // boxShadow: 3
                                }}
                            />
                        </motion.div>
                    </Grid2>

                    {/* Right Content */}
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <motion.div   transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }} viewport={{ once: true, amount: 0.3 }}>
                            <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ lineHeight: 1.3 }}>
                                What are Themes?
                            </Typography>

                            <Typography variant="body1" color="text.secondary" paragraph>
                                WordPress themes can be customized in various ways, including the widgets, color combinations, functionalities, layout and so on. However, it requires skill to match your brand and some WordPress CMS development
                                services you encounter in the market may not meet your expectations.
                            </Typography>

                            <Typography variant="body1" color="text.secondary">
                                Since its release in 2003, WordPress has emerged as the premier development platform. As one of the top WordPress development companies, KP Webtech excels in all aspects of WordPress theme customization, delivering
                                enduring value. We also provide comprehensive WordPress CMS development services, ensuring your website meets your exact needs and specifications.
                            </Typography>
                        </motion.div>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
}
