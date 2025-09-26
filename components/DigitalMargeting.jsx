'use client';

import React from 'react';
import { Box, Button, Container, Typography, useTheme, useMediaQuery, Grid2 } from '@mui/material';
// For MUI v5
import { motion } from 'framer-motion';
import Image from 'next/image';
import '../style/home/project.css';
export default function DigitalMarketing() {
    const socialMedia = [
        {
            name: 'Facebook Marketing',
            icon: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757323506/webdads2u/mainpage/icons/facebook.webp',
            link: 'https://www.facebook.com/Webdads2u'
        },
        {
            name: 'Twitter Marketing',
            icon: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757323502/webdads2u/mainpage/icons/twitter.webp',
            link: 'https://x.com/i/flow/login?redirect_after_login=%2Fwebdads2u'
        },
        {
            name: 'Email Marketing',
            icon: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757323498/webdads2u/mainpage/icons/email.webp',
            link: 'mailto:info@webdads2u.com'
        },
        {
            name: 'Instagram Marketing',
            icon: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757323503/webdads2u/mainpage/icons/Instagram.webp',
            link: 'https://www.instagram.com/webdads2u/'
        },
        {
            name: 'Linkedin Marketing',
            icon: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757323499/webdads2u/mainpage/icons/linkedin.webp',
            link: 'https://www.linkedin.com/company/webdads2u-private-limited/'
        },
        {
            name: 'Whatsapp Marketing',
            icon: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757323495/webdads2u/mainpage/icons/whatsapp.webp',
            link: 'https://wa.me/+91-88256 07550'
        }
    ];

    const searchEngines = [
        {
            name: 'Google',
            icon: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757323493/webdads2u/mainpage/icons/google-search-engines.webp'
        },
        {
            name: 'Bing',
            icon: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757323490/webdads2u/mainpage/icons/bing-search-engines.webp'
        },
        {
            name: 'Yandex',
            icon: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757323488/webdads2u/mainpage/icons/yandex-search-engines.webp'
        },
        {
            name: 'DuckDuckGo',
            icon: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757323486/webdads2u/mainpage/icons/duckduckgo-search-engines.webp'
        },
        {
            name: 'Baidu',
            icon: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757323485/webdads2u/mainpage/icons/baidu-search-engines.webp'
        }
    ];

    const theme = useTheme();
    const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box pt={{ xs: 4, sm: 4, md: 20 }} pb={{ xs: 2, md: 2 }} px={{ md: 6 }}>
            <Container maxWidth="lg">
                <Grid2 container spacing={{ xs: 4, md: 6 }} alignItems="center">
                    {/* Left Content */}
                    <Grid2
                        size={{
                            xs: 12,
                            md: 6
                        }}
                    >
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                            <Typography variant={isSmDown ? 'h5' : 'h4'} fontWeight={700} gutterBottom sx={{ fontFamily: 'Poppins' }}>
                                Digital Marketing
                            </Typography>
                            <Typography paragraph fontSize={isSmDown ? '0.9rem' : '1rem'} sx={{ fontFamily: 'Poppins', textAlign: { xs: 'left', sm: 'left', md: 'justify' } }}>
                                Digital Marketing harnesses digital technologies to promote products/services, utilizing online platforms like social media, websites, SEO, and email campaigns. It involves content creation (blogs, videos, etc.) to
                                engage and build relationships with potential customers, aiming to foster brand loyalty.
                                <br />
                            </Typography>

                            <Typography paragraph fontSize={isSmDown ? '0.9rem' : '1rem'} sx={{ fontFamily: 'Poppins', textAlign: { xs: 'left', sm: 'left', md: 'justify' } }}>
                                As a leading web designing and web development company in Chennai, Webdads2u Pvt. Ltd. comprehends the significance of integrating effective digital marketing strategies to bolster brands and engage target audiences.
                            </Typography>
                            <Typography paragraph fontSize={isSmDown ? '0.9rem' : '1rem'} sx={{ fontFamily: 'Poppins', textAlign: { xs: 'left', sm: 'left', md: 'justify' } }}>
                                <strong>
                                    <a href="/" style={{ color: '#383838', textDecoration: 'none' }}>
                                        Webdads2u Pvt. Ltd.
                                    </a>
                                </strong>{' '}
                                is an expert in digital marketing and Web design and web development in Chennai, India . They offer services such as website design and development, search engine optimization, content marketing, email marketing,
                                mobile marketing, and more. They create custom strategies and campaigns to reach their client’s target audiences and maximize their online presence.
                            </Typography>

                            {/* CTA Button */}
                        </motion.div>
                    </Grid2>

                    {/* Right Image */}
                    <Grid2
                        size={{
                            xs: 12,
                            md: 6
                        }}
                    >
                        <Box
                            sx={{
                                width: { sm: '70%', md: '100%' },
                                maxWidth: 648,
                                mx: 'auto',
                                px: { xs: 2, sm: 0 }
                            }}
                        >
                            <div className="particle-animation">
                                <div>
                                    <Image
                                        src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757412005/webdads2u/mainpage/digital-marketing-image.png"
                                        alt="digital marketing image"
                                        width={648}
                                        height={579}
                                        className="img-fluid"
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            borderRadius: 8
                                        }}
                                        priority={true}
                                    />
                                </div>
                            </div>
                        </Box>
                    </Grid2>
                    {/* Social Media Marketing */}
                    <Grid2 size={{ xs: 12, sm: 6 }}>
                        <Typography variant={isSmDown ? 'h6' : 'h5'} mt={4} gutterBottom fontWeight={600} sx={{ fontFamily: 'Poppins' }}>
                            Social Media Marketing
                        </Typography>
                        <Grid2 container spacing={2}>
                            {socialMedia.map((item, i) => (
                                <Grid2
                                    size={{
                                        xs: 6,
                                        sm: 6,
                                        md: 6
                                    }}
                                    key={i}
                                    sx={{ cursor: 'pointer' }}
                                >
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <Box display="flex" alignItems="center">
                                            <Image src={item.icon} alt={item.name} width={24} height={24} style={{ marginRight: 8 }} priority={true} />
                                            <Typography variant="body1" sx={{ fontFamily: 'Poppins', fontSize: { xs: 13, sm: 12, md: 15 } }}>
                                                {item.name}
                                            </Typography>
                                        </Box>
                                    </a>
                                </Grid2>
                            ))}
                        </Grid2>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 12 }}>
                        {/* Search Engine Marketing */}
                        <Typography variant={isSmDown ? 'h6' : 'h5'} mt={4} gutterBottom fontWeight={600} sx={{ fontFamily: 'Poppins' }}>
                            Search Engine Marketing
                        </Typography>
                        <Grid2 container spacing={2}>
                            {searchEngines.map((engine, index) => (
                                <Grid2
                                    size={{
                                        xs: 6,
                                        sm: 6,
                                        md: 6
                                    }}
                                    key={index}
                                >
                                    <Box display="flex" alignItems="center">
                                        <Image src={engine.icon} alt={engine.name} width={25} height={25} style={{ marginRight: 8 }} priority={true} />
                                        <Typography variant="body2" sx={{ fontFamily: 'Poppins', fontSize: { xs: 13, sm: 12, md: 15 } }}>
                                            {engine.name}
                                        </Typography>
                                    </Box>
                                </Grid2>
                            ))}
                        </Grid2>
                    </Grid2>
                </Grid2>
                <Box mt={2} textAlign={{ sm: 'center' }}>
                    <Button
                        variant="contained"
                        href="/digital-marketing-agency/"
                        sx={{
                            background: 'linear-gradient(90deg, #871752 0%, #262250 50%)',
                            borderRadius: 15,
                            px: 5,
                            py: 1.5,
                            fontWeight: '500',
                            textTransform: 'none',
                            fontSize: isSmDown ? '0.9rem' : '1rem',
                            fontFamily: 'Poppins'
                        }}
                    >
                        Read More
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
