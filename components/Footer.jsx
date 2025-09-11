// 'use client';
// import React from 'react';
// import { Box, Container, Grid22, Typography, IconButton, Button, Link as MUILink } from '@mui/material';
// import { FaPhone, FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterest, FaYoutube } from 'react-icons/fa';
// import { FaXTwitter } from 'react-icons/fa6';

// function Footer() {
//     const currentYear = new Date().getFullYear();

//     return (
//         <Box sx={{ backgroundColor: '#000', color: '#fff', fontFamily: 'Poppins' }} className="footer-parent">
//             {/* Top Banner */}
//             <Box sx={{ py: 4, px: { md: 7 }, backgroundColor: '#1a1a1a' }} className="footer-top">
//                 <Container maxWidth="lg">
//                     <Grid22 container spacing={4} alignItems="center">
//                         <Grid22 size={{ xs: 12, md: 6 }}>
//                             <div className="footer-top-content" style={{ fontFamily: 'Poppins' }}>
//                                 <h3>Our experienced IT staff can provide you with more Information</h3>
//                                 <p>We’re available for 24×7 hours a day! Contact to require detailed analysis and assessment of your plan.</p>
//                             </div>
//                         </Grid22>
//                         <Grid22 size={{ xs: 12, md: 6 }}>
//                             <div className="footer-top-phone-sec">
//                                 <a href="tel:+91-88256 07550">
//                                     <FaPhone />
//                                 </a>
//                                 <p>REACH OUT NOW!</p>
//                                 <a href="/contact-us" style={{ textDecoration: 'none' }}>
//                                     <Button variant="primary" sx={{ textTransform: 'capitalize' }}>
//                                         Contact Us
//                                     </Button>
//                                 </a>
//                             </div>
//                         </Grid22>
//                     </Grid22>
//                 </Container>
//             </Box>

//             {/* Main Footer */}
//             <Box sx={{ py: { xs: 3, md: 6 }, px: { md: 7 } }} className="footer-top-center">
//                 <Container maxWidth="lg">
//                     <Grid22 container spacing={3}>
//                         {/* Logo and Social Icons */}
//                         <Grid22 size={{ xs: 12, sm: 6, md: 3 }}>
//                             <Box sx={{ mb: 2 }}>
//                                 <img src={'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757406867/webdads2u/footer-logo.avif'} alt="Logo" width={200} />
//                             </Box>
//                             <Box sx={{ display: 'flex', gap: 0 }}>
//                                 <IconButton component="a" href="https://www.facebook.com/Webdads2u" target="_blank" sx={{ color: 'white' }}>
//                                     <FaFacebookF fontSize={'medium'} />
//                                 </IconButton>
//                                 <IconButton component="a" href="https://x.com/webdads2u" target="_blank" sx={{ color: 'white' }}>
//                                     <FaXTwitter fontSize={'medium'} />
//                                 </IconButton>
//                                 <IconButton component="a" href="https://www.instagram.com/webdads2u/" target="_blank" sx={{ color: 'white' }}>
//                                     <FaInstagram fontSize={'medium'} />
//                                 </IconButton>
//                                 <IconButton component="a" href="https://www.linkedin.com/company/webdads2u-private-limited/" target="_blank" sx={{ color: 'white' }}>
//                                     <FaLinkedinIn fontSize={'medium'} />
//                                 </IconButton>
//                                 <IconButton component="a" href="https://in.pinterest.com/webdads2u/" target="_blank" sx={{ color: 'white' }}>
//                                     <FaPinterest fontSize={'medium'} />
//                                 </IconButton>
//                                 <IconButton component="a" href="https://www.youtube.com/webdads2u" target="_blank" sx={{ color: 'white' }}>
//                                     <FaYoutube fontSize={'medium'} />
//                                 </IconButton>
//                             </Box>
//                         </Grid22>

//                         {/* Quick Links */}
//                         <Grid22 size={{ xs: 12, sm: 6, md: 2 }}>
//                             {/* <Typography variant="h6" gutterBottom>Quick Links</Typography> */}
//                             <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
//                                 {[
//                                     ['Work', '/work'],
//                                     ['Contact Us', '/contact-us'],
//                                     ['Career', '/career'],
//                                     ['Blog', '/blog'],
//                                     ['Privacy Policy', '/privacy-policy'],
//                                     ['Terms and Conditions', '/terms-and-conditions'],
//                                     ['Refund Policy', '/refund-policy']
//                                 ].map(([label, href]) => (
//                                     <li key={label}>
//                                         <MUILink href={href} underline="hover" color="inherit" fontSize={'13px'}>
//                                             {label}
//                                         </MUILink>
//                                     </li>
//                                 ))}
//                             </Box>
//                         </Grid22>

//                         {/* Address */}
//                         <Grid22 size={{ xs: 12, sm: 6, md: 3 }}>
//                             <Box fontSize={'13px'}>
//                                 FIRST FLOOR, 2ND PORTION, 36, Saraswati Nagar Main Rd, Saraswati Nagar, Thirumullaivoyal, Chennai, Tamil Nadu 600062
//                                 <br />
//                                 info@webdads2u.com
//                             </Box>
//                         </Grid22>

//                         {/* Career Section */}
//                         <Grid22 size={{ xs: 12, sm: 6, md: 4 }}>
//                             <Typography variant="h6" gutterBottom>
//                                 We’re looking for talented passionate folks to join our team.
//                             </Typography>
//                             {[
//                                 ['Jobs at Webdads2u', '/career/'],
//                                 ['About Webdads2u', '/about'],
//                                 ['Get a Quotes', '/contact/']
//                             ].map(([text, link]) => (
//                                 <Typography key={text} sx={{ color: '#aaa', fontWeight: 'bold', fontSize: '20px' }}>
//                                     <MUILink href={link} underline="hover" color="inherit">
//                                         {text}
//                                     </MUILink>
//                                 </Typography>
//                             ))}
//                         </Grid22>
//                     </Grid22>

//                     {/* Copyright */}
//                     <Box textAlign="center" mt={4}>
//                         <Typography variant="body2" sx={{ fontWeight: 600 }}>
//                             © {currentYear} by{' '}
//                             <MUILink href="/" color="inherit" underline="hover">
//                                 WEBDADS2U PVT LTD.
//                             </MUILink>
//                         </Typography>
//                     </Box>
//                 </Container>
//             </Box>
//         </Box>
//     );
// }

// export default Footer;
'use client';
import React from 'react';
import { Box, Container, Grid2, Typography, IconButton, Button, Link as MUILink } from '@mui/material';
import { FaPhone, FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterest, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const socialIcons = [
    { icon: <FaFacebookF />, link: 'https://www.facebook.com/Webdads2u' },
    { icon: <FaXTwitter />, link: 'https://x.com/webdads2u' },
    { icon: <FaInstagram />, link: 'https://www.instagram.com/webdads2u/' },
    { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/company/webdads2u-private-limited/' },
    { icon: <FaPinterest />, link: 'https://in.pinterest.com/webdads2u/' },
    { icon: <FaYoutube />, link: 'https://www.youtube.com/webdads2u' }
];

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <Box sx={{ fontFamily: 'Poppins', color: '#fff' }}>
            {/* Top Banner */}
            <Box
                sx={{
                    py: { xs: 6, md: 10 },
                    px: { xs: 2, md: 7 },
                    background: 'linear-gradient(90deg, #871752 1%, #262250 44%)',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                <Box
                    component="img"
                    src="https://webdads2u.com/wp-content/uploads/2023/09/contact-background.png"
                    alt="background"
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 0
                    }}
                />
                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                    <Grid2 container spacing={4} alignItems="center">
                        <Grid2 size={{ xs: 12, sm: 6, md: 6 }}>
                            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                                <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, borderLeft: '5px solid #fff', pl: 2 }}>
                                    Our experienced IT staff can provide you with more Information
                                </Typography>
                                <Typography variant="body1" sx={{ fontSize: 14 }}>
                                    We’re available for 24×7 hours a day! Contact to require detailed analysis and assessment of your plan.
                                </Typography>
                            </motion.div>
                        </Grid2>
                        <Grid2 size={{ xs: 12, sm: 6, md: 6 }} sx={{ textAlign: 'center' }}>
                            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                                <IconButton href="tel:+91-8825607550" sx={{ color: '#fff', fontSize: 40 }}>
                                    <FaPhone />
                                </IconButton>
                                <Typography sx={{ mt: 1, mb: 2 }}>REACH OUT NOW!</Typography>
                                <Button variant="contained" sx={{ textTransform: 'capitalize', borderRadius: 8, px: 5, py: 1.5, fontWeight: 600, background: 'white', color: 'black' }} href="/contact-us">
                                    Contact Us
                                </Button>
                            </motion.div>
                        </Grid2>
                    </Grid2>
                </Container>
            </Box>

            {/* Main Footer */}
            <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 7 }, backgroundColor: '#0e1839' }}>
                <Container maxWidth="lg">
                    <Grid2 container spacing={4}>
                        {/* Logo & Social */}
                        <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                            <Box sx={{ mb: 2 }}>
                                <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757406867/webdads2u/footer-logo.avif" alt="Logo" width={200} />
                            </Box>
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                {socialIcons.map((item, index) => (
                                    <motion.div key={index} whileHover={{ scale: 1.2 }} transition={{ type: 'spring', stiffness: 300 }}>
                                        <IconButton component="a" href={item.link} target="_blank" sx={{ color: '#fff' }}>
                                            {item.icon}
                                        </IconButton>
                                    </motion.div>
                                ))}
                            </Box>
                        </Grid2>

                        {/* Quick Links */}
                        <Grid2 size={{ xs: 12, sm: 6, md: 2 }}>
                            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                                {[
                                    ['Work', '/work'],
                                    ['Contact Us', '/contact-us'],
                                    ['Career', '/career'],
                                    ['Blog', '/blog'],
                                    ['Privacy Policy', '/privacy-policy'],
                                    ['Terms & Conditions', '/terms-and-conditions'],
                                    ['Refund Policy', '/refund-policy']
                                ].map(([label, href]) => (
                                    <li key={label}>
                                        <MUILink href={href} color="inherit" underline="hover" sx={{ fontSize: 13 }}>
                                            {label}
                                        </MUILink>
                                    </li>
                                ))}
                            </Box>
                        </Grid2>

                        {/* Address */}
                        <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                            <Typography sx={{ fontSize: 13 }}>
                                FIRST FLOOR, 2ND PORTION, 36, Saraswati Nagar Main Rd, Saraswati Nagar, Thirumullaivoyal, Chennai, Tamil Nadu 600062
                                <br />
                                info@webdads2u.com
                            </Typography>
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
                                <Typography key={text} sx={{ color: '#aaa', fontWeight: 'bold', fontSize: 14 }}>
                                    <MUILink href={link} color="inherit" underline="hover">
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
