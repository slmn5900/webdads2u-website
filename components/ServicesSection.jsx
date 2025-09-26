'use client';
import React from 'react';
import { Grid2, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
// If you're using Next.js. Otherwise, fallback to <img>

// Framer Motion Variants
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5
        }
    }),
    whileHover: {
        scale: 1.05,
        transition: { duration: 0.3 }
    }
};

const services = [
    {
        id: 'service-box-1',
        title: 'Website Development',
        imgSrc: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757322162/webdads2u/mainpage/icons/web-development.png',
        link: '/website-development/',
        alt: 'web development'
    },
    {
        id: 'service-box-2',
        title: 'SEO Services',
        imgSrc: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757322205/webdads2u/mainpage/icons/seo-services.png',
        link: '/seo-company-in-chennai/',
        alt: 'seo services'
    },
    {
        id: 'service-box-3',
        title: 'Branding Design',
        imgSrc: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757322254/webdads2u/mainpage/icons/branding-design.png',
        link: '/branding-design/',
        alt: 'branding design'
    },
    {
        id: 'service-box-4',
        title: 'E-Commerce Development',
        imgSrc: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757322262/webdads2u/mainpage/icons/e-commerce-development.png',
        link: '/ecommerce-website-development/',
        alt: 'e-commerce development'
    },
    {
        id: 'service-box-5',
        title: 'Mobile App Development',
        imgSrc: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757322269/webdads2u/mainpage/icons/mobiile-app-development.png',
        link: '/mobile-app-development/',
        alt: 'mobile app development'
    },
    {
        id: 'service-box-6',
        title: 'CRM & ERP Development',
        imgSrc: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757322355/webdads2u/mainpage/icons/crm-erp-development.png',
        link: '/crm-erp-development/',
        alt: 'crm erp development'
    }
];

const ServicesSection = () => {
    return (
        <Box
            component="section"
            sx={{
                py: 5,
                backgroundImage: 'linear-gradient(90deg,#871752 1%,#262250 44%)',
                overflow: 'hidden'
            }}
        >
            <Grid2 container spacing={3} justifyContent="center">
                {services.map((service, index) => (
                    <Grid2
                        size={{ xs: 6, sm: 4, md: 2 }}
                        key={service.id}
                        sx={{
                            borderRight: {
                                md: '1px solid #433674'
                            },
                            '&:last-of-type': {
                                borderRight: {
                                    md: 'none'
                                }
                            }
                        }}
                    >
                        <motion.a href={service.link} style={{ textDecoration: 'none' }} custom={index} initial="hidden" animate="visible" whileHover="whileHover" variants={cardVariants}>
                            <Box
                                textAlign="center"
                                sx={{
                                    // borderRight: {
                                    //     md: '1px solid white',
                                    // },
                                    pr: 2,
                                    pl: 2
                                }}
                            >
                                <motion.img src={service.imgSrc} alt={service.alt} width={76} height={76} loading="lazy" style={{ borderRadius: 8 }} />
                                <Typography variant="subtitle1" sx={{ mt: 2, color: 'white', fontSize: { xs: '12px', sm: '12px', md: '13px' }, fontWeight: 500, fontFamily: 'Poppins' }}>
                                    {service.title}
                                </Typography>
                            </Box>
                        </motion.a>
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    );
};

export default ServicesSection;
