'use client';
import React from 'react';
import { Box, Container, Typography, Grid2, IconButton } from '@mui/material';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { FaXTwitter } from 'react-icons/fa6';

const socialIcons = [
    { icon: <FaFacebookF />, link: 'https://www.facebook.com/Webdads2u' },
    { icon: <FaXTwitter />, link: 'https://x.com/webdads2u' },
    { icon: <FaYoutube />, link: 'https://www.youtube.com/webdads2u' },
    { icon: <IoLogoInstagram />, link: 'https://www.instagram.com/webdads2u/' },
    { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/company/webdads2u-private-limited/' },


];

const SocialMedia = () => {
    return (
        <Box
            sx={{
                py: { xs: 8, md: 12 },
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(https://res.cloudinary.com/dbpv95wd8/image/upload/v1757587680/webdads2u/mainpage/connect-on-social-media.png)',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                color: '#fff'
            }}
        >
            <Container maxWidth="lg">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <Typography variant="h3" align="center" sx={{ fontFamily: 'Poppins', fontWeight: 600, mb: 2, fontSize: { xs: 28, md: 40 } }}>
                        Connect with Us on Social Media
                    </Typography>
                    <Typography variant="body1" align="center" sx={{ fontFamily: 'Poppins', fontWeight: 400, mb: 6, fontSize: { xs: 16, md: 18 } }}>
                        Stay in the loop with the latest trends and updates from WebDads2U. Follow our social media channels for insightful content, tips, and exciting announcements.
                    </Typography>
                </motion.div>

                <Grid2 container spacing={4} alignItems="center" justifyContent="center">
                    {/* Left arrow */}
                    <Grid2 size={{ xs: 12, md: 2 }} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
                        <motion.img src="/webdads/images/common/social-arrow.svg" alt="Arrow" style={{ width: '200px', height: '16px' }} initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} />
                    </Grid2>

                    {/* Social Icons */}
                    <Grid2 size={{ xs: 12, md: 8 }} sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                        {socialIcons.map((item, index) => (
                            <motion.div key={index} whileHover={{ scale: 1.2 }} transition={{ type: 'spring', stiffness: 300 }}>
                                <IconButton
                                    component="a"
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        border: '2px solid #fff',
                                        borderRadius: '50%',
                                        width: 60,
                                        height: 60,
                                        color: '#fff',
                                        '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
                                    }}
                                >
                                    {item.icon}
                                </IconButton>
                            </motion.div>
                        ))}
                    </Grid2>

                    {/* Right arrow */}
                    <Grid2 size={{ xs: 12, md: 2 }} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                        <motion.img src="/webdads/images/common/social-arrow.svg" alt="Arrow" style={{ width: '200px', height: '16px' }} initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} />
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
};

export default SocialMedia;
