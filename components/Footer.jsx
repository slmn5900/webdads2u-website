'use client';
import React from 'react';
import { Box, Container, Grid2, Typography, IconButton, Button, Link as MUILink } from '@mui/material';
import Image from 'next/image';
import { FaPhone, FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterest, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
// import logoSrc from '../public/webdads/images/home/white-logo.png';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <Box sx={{ backgroundColor: '#000', color: '#fff', fontFamily: 'Poppins' }} className="footer-parent">
            {/* Top Banner */}
            <Box sx={{ py: 4, px: { md: 7 }, backgroundColor: '#1a1a1a' }} className="footer-top">
                <Container maxWidth="lg">
                    <Grid2 container spacing={4} alignItems="center">
                        <Grid2 size={{ xs: 12, md: 6 }}>
                            <div className="footer-top-content" style={{ fontFamily: 'Poppins' }}>
                                <h3>Our experienced IT staff can provide you with more Information</h3>
                                <p>We’re available for 24×7 hours a day! Contact to require detailed analysis and assessment of your plan.</p>
                            </div>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 6 }}>
                            <div className="footer-top-phone-sec">
                                <a href="tel:+91-88256 07550">
                                    <FaPhone />
                                </a>
                                <p>REACH OUT NOW!</p>
                                <a href="/contact-us" style={{ textDecoration: 'none' }}>
                                    <Button variant="primary" sx={{ textTransform: 'capitalize' }}>
                                        Contact Us
                                    </Button>
                                </a>
                            </div>
                        </Grid2>
                    </Grid2>
                </Container>
            </Box>

            {/* Main Footer */}
            <Box sx={{ py: { xs: 3, md: 6 }, px: { md: 7 } }} className="footer-top-center">
                <Container maxWidth="lg">
                    <Grid2 container spacing={3}>
                        {/* Logo and Social Icons */}
                        <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                            <Box sx={{ mb: 2 }}>
                                <Image src={'/webdads/images/home/white-logo.png'} alt="Logo" width={200} />
                            </Box>
                            <Box sx={{ display: 'flex', gap: 0 }}>
                                <IconButton component="a" href="https://www.facebook.com/Webdads2u" target="_blank" sx={{ color: 'white' }}>
                                    <FaFacebookF fontSize={'medium'} />
                                </IconButton>
                                <IconButton component="a" href="https://x.com/webdads2u" target="_blank" sx={{ color: 'white' }}>
                                    <FaXTwitter fontSize={'medium'} />
                                </IconButton>
                                <IconButton component="a" href="https://www.instagram.com/webdads2u/" target="_blank" sx={{ color: 'white' }}>
                                    <FaInstagram fontSize={'medium'} />
                                </IconButton>
                                <IconButton component="a" href="https://www.linkedin.com/company/webdads2u-private-limited/" target="_blank" sx={{ color: 'white' }}>
                                    <FaLinkedinIn fontSize={'medium'} />
                                </IconButton>
                                <IconButton component="a" href="https://in.pinterest.com/webdads2u/" target="_blank" sx={{ color: 'white' }}>
                                    <FaPinterest fontSize={'medium'} />
                                </IconButton>
                                <IconButton component="a" href="https://www.youtube.com/webdads2u" target="_blank" sx={{ color: 'white' }}>
                                    <FaYoutube fontSize={'medium'} />
                                </IconButton>
                            </Box>
                        </Grid2>

                        {/* Quick Links */}
                        <Grid2 size={{ xs: 12, sm: 6, md: 2 }}>
                            {/* <Typography variant="h6" gutterBottom>Quick Links</Typography> */}
                            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                                {[
                                    ['Work', '/work'],
                                    ['Contact Us', '/contact-us'],
                                    ['Career', '/career'],
                                    ['Blog', '/blog'],
                                    ['Privacy Policy', '/privacy-policy'],
                                    ['Terms and Conditions', '/terms-and-conditions'],
                                    ['Refund Policy', '/refund-policy']
                                ].map(([label, href]) => (
                                    <li key={label}>
                                        <MUILink href={href} underline="hover" color="inherit" fontSize={'13px'}>
                                            {label}
                                        </MUILink>
                                    </li>
                                ))}
                            </Box>
                        </Grid2>

                        {/* Address */}
                        <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                            <Box fontSize={'13px'}>
                                FIRST FLOOR, 2ND PORTION, 36, Saraswati Nagar Main Rd, Saraswati Nagar, Thirumullaivoyal, Chennai, Tamil Nadu 600062
                                <br />
                                info@webdads2u.com
                            </Box>
                        </Grid2>

                        {/* Career Section */}
                        <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
                            <Typography variant="h6" gutterBottom>
                                We’re looking for talented passionate folks to join our team.
                            </Typography>
                            {[
                                ['Jobs at Webdads2u', '/career/'],
                                ['About Webdads2u', '/about'],
                                ['Get a Quotes', '/contact/']
                            ].map(([text, link]) => (
                                <Typography key={text} sx={{ color: '#aaa', fontWeight: 'bold', fontSize: '20px' }}>
                                    <MUILink href={link} underline="hover" color="inherit">
                                        {text}
                                    </MUILink>
                                </Typography>
                            ))}
                        </Grid2>
                    </Grid2>

                    {/* Copyright */}
                    <Box textAlign="center" mt={4}>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            © {currentYear} by{' '}
                            <MUILink href="/" color="inherit" underline="hover">
                                WEBDADS2U PVT LTD.
                            </MUILink>
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}

export default Footer;
