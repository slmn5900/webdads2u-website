'use client';

import React from 'react';
import { Grid2, Container, Typography, Button, Box, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import image1 from '../public/webdads/images/home/projectimage/mockup_21318e73bc.avif';
import './styles.scss';

// Animation Variant
const fadeInUp = {
    hidden: { opacity: 0, y: 10 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: 'easeOut'
        }
    })
};

export default function Project() {
    const theme = useTheme();
    const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

    const projects = [
        {
            title: 'PHP Website Development',
            description:
                'Webdads2u Pvt. Ltd., a leading web designing and web development company in Chennai, specializes in bespoke web development services, notably excelling in PHP website development. Our adept team ensures the creation of high-performance, tailored websites, delivering seamless integration and reliable maintenance. With a commitment to excellence, we prioritize client satisfaction, offering innovative solutions that elevate online presence and business success.'
        },
        {
            title: 'React js Website Development',
            description:
                'Webdads2u Pvt. Ltd.stands as a seasoned web designing and web development company in Chennai, India, specializing in top-tier React JS website development services. We excel in crafting high-caliber, cost-efficient React JS web solutions tailored for both businesses and individuals. Our commitment revolves around delivering cutting-edge, user-centric websites finely tuned to meet your precise requirements. With a proficient team of React JS developers, we ensure a seamless and hassle-free development journey.'
        },
        {
            title: 'WordPress Website',
            description:
                'Webdads2u Pvt. Ltd. stands as a premier web designing and web development company in Chennai, India, recognized for its prowess in crafting bespoke, secure, and high-performing custom WordPress websites. Our adept team of WordPress developers boasts extensive experience in tailoring WordPress themes, excelling in plugin development, and executing various custom development tasks. We take pride in offering comprehensive WordPress development services, meticulously designed to cater to the unique requirements of our esteemed clients.'
        }
    ];

    return (
        <Box
            component="section"
            className="Web-Designing-images"
            sx={{
                background: 'linear-gradient(90deg, #871752 1%, #262250 44%)',
                pt: { xs: 6, sm: 4, md: 8 },
                pb: { xs: 6, sm: 4, md: 1 },
                color: 'white',
                height: 'auto',
                maxHeight: {
                    xs: '100%',
                    sm: '100%',
                    md: 'calc(80vh - -680px)', // or adjust as needed
                    xl: 'calc(51vh - -450px)'
                }
            }}
        >
            <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 6 } }}>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                    <Box sx={{ textAlign: { sx: 'left', md: 'center' } }} mx="auto" px={1}>
                        <Typography variant={isSmDown ? 'h6' : 'h4'} fontWeight="bold" gutterBottom sx={{ pb: 1, fontSize: { md: '25px' }, fontFamily: 'Poppins' }}>
                            Web Designing and Web Development Company in Chennai
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: isSmDown ? '1rem' : '0.75rem', lineHeight: 1.5, fontFamily: 'Poppins', textAlign: { xs: 'left', md: 'center' } }}>
                            <span style={{ fontWeight: 'bold' }}>Webdads2u Pvt. Ltd.</span> is the leading web designing and web development company in Chennai, India. We provide custom{' '}
                            <span style={{ fontWeight: 'bold' }}>Web Design and Web Development</span> services that help you make a positive and lasting impression on your customers. Our experienced web developers ensure that your website stands the
                            test of time and is secure, user-friendly, and visually appealing. With our web design and development services, you can take your business to new heights.
                        </Typography>
                    </Box>
                </motion.div>

                <Box mt={{ xs: 5, md: 8 }}>
                    <Grid2 container spacing={{ xs: 3, md: 4 }}>
                        {projects.map((item, index) => (
                            <Grid2
                                size={{
                                    xs: 12,
                                    sm: 4
                                }}
                                key={index}
                            >
                                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={index}>
                                    <Box sx={{ px: { xs: 1, sm: 2, md: 0 } }}>
                                        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ fontFamily: 'Poppins' }}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ lineHeight: 1.5, fontFamily: 'Poppins', textAlign: { xs: 'left', sm: 'left', md: 'justify' }, fontSize: isSmDown ? '1rem' : '0.75rem' }}>
                                            {item.description}
                                        </Typography>
                                    </Box>
                                </motion.div>
                            </Grid2>
                        ))}
                    </Grid2>
                </Box>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={4}>
                    <Box
                        mt={{ xs: 6, md: 0 }}
                        textAlign="center"
                        px={{ xs: 2, sm: 6 }}
                        sx={{
                            display: { xs: 'none', md: 'block' },
                            '@media (min-width: 1245px)': {
                                position: 'relative',
                            }
                        }}
                    >
                        <Box component={'img'} src={'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757412011/webdads2u/mainpage/mockup-banner.png'} alt="mockup" sx={{ width: 848, height: 414, objectFit: 'cover', borderRadius: 8 }} priority={true} />
                    </Box>
                </motion.div>
                <Box textAlign="center" mt={{ xs: 4, md: 1 }}>
                    <Link href="/website-development" passHref legacyBehavior>
                        <Button
                            variant="contained"
                            sx={{
                                borderRadius: 15,
                                px: { xs: 4, sm: 5 },
                                fontWeight: '500',
                                background: 'linear-gradient(90deg, #871752 0%, #262250 50%)',
                                fontSize: { xs: '0.9rem', sm: '1rem' },
                                textTransform: 'none',

                                '&:hover': {
                                    background: 'linear-gradient(90deg, #871752 10%, #262250 90%)'
                                },
                                fontFamily: 'Poppins',
                                '@media (min-width: 1245px)': {
                                    position: 'relative',
                                },
                                '@media (max-width: 425px)': {
                                    backgroundColor: 'white',
                                    color: 'white',
                                    border: '2px solid white'
                                }
                            }}
                        >
                            Read More
                        </Button>
                    </Link>
                </Box>
            </Container>
        </Box>
    );
}
