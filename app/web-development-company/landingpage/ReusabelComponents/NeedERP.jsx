"use client";
import React, { useState } from 'react';
import {
    Box,
    Typography,
    Button,
} from '@mui/material';
import 'swiper/css';
import { motion } from 'framer-motion';

export default function NeedERP(data) {

    const Highlights = data?.data?.project_portfolio
    return (
        <Box
            sx={{
                width: '100%',
                minHeight: { xs: '250px', sm: '300px', md: '350px' },
                position: 'relative',
                background: 'linear-gradient(to bottom right, #0C0837, #211C57)',
                color: 'white',
                px: { xs: 2, sm: 4, md: 8, lg: 12 },
                py: { xs: 3, sm: 4, md: 6 },
                overflow: 'hidden',
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
                flexDirection: 'column',
                textAlign: "center"
            }}
        >
            {/* Heading Section */}
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 600,
                    fontSize: { xs: 24, sm: 28, md: 32, lg: 36 },
                    mb: { xs: 2, md: 3 },
                    px: { xs: 1, sm: 0 },
                    lineHeight: { xs: 1.3, md: 1.4 }
                }}
                fontFamily="Poppins"
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                gutterBottom
            >
                {Highlights?.title || "Need ERP ?"}
            </Typography>

            {/* Description Section */}
            <Typography
                variant="body1"
                fontFamily="Poppins"
                sx={{
                    mb: { xs: 2, sm: 3, md: 4 },
                    fontSize: { xs: 14, sm: 16, md: 18 },
                    lineHeight: { xs: 1.5, md: 1.6 },
                    maxWidth: { xs: '90%', sm: '85%', md: '80%', lg: '75%' },
                    px: { xs: 1, sm: 0 }
                }}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                {Highlights?.description || "Choosing the best WordPress development company in Chennai means working with experienced developers who specialize in creating websites that are both user-friendly and high-performing. We deliver customized solutions tailored to your business needs."}
            </Typography>

            {/* Button Section */}
            <Button
                variant="contained"
                color={Highlights?.cta?.color || "primary"}
                sx={{
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    fontSize: { xs: 12, sm: 14 },
                    px: { xs: 3, sm: 4 },
                    py: { xs: 1, sm: 1.5 },
                    backgroundColor: Highlights?.cta?.color ? undefined : '#fff',
                    color: Highlights?.cta?.color ? undefined : '#0C0837',
                    '&:hover': {
                        backgroundColor: Highlights?.cta?.color ? undefined : '#f0f0f0',
                    }
                }}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {Highlights?.cta?.label || "Contact"}
            </Button>
        </Box>
    );
}
