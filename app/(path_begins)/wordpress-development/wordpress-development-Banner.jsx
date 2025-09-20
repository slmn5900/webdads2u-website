// import React from 'react';

// function WordpressDevelopmentBanner() {
//     return (
//         <section className="wordpressdevelopment-main">
//             <div className="container">
//                 <div className="row align-items-center wordpressdevelopment">
//                     <div className="col-7 col-sm-6 col-lg-7 align-self-lg-center">
//                         <h1 className="text-start">WordPress Development</h1>
//                         <p>Building unique, industry-specific, custom-made web portals for outstanding customer experience</p>
//                         <a href="/contact-us">
//                             <button>Contact us</button>
//                         </a>
//                     </div>
//                     <div className="col-5 col-sm-6 col-lg-5 align-self-center element-word-press">
//                         <img src="webdads/images/wordpress-development/W-Background.png" alt="W-Background" className='img-fluid' loading='lazy' />
//                         <img
//                             src="webdads/images/wordpress-development/Wordpress-logo.png"
//                             alt="WordPress Development Company In Chennai
// "
//                             className="img-fluid img-wordpress-tow"
//                             loading="lazy"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default WordpressDevelopmentBanner;
'use client';
import React from 'react';
import { Box, Container, Grid2, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const WordpressDevelopmentBanner = () => {
    return (
        <Box
            component="section"
            sx={{
                minHeight: 'calc(100vh - 64px)', // 100vh minus header height
                backgroundImage: "url('https://res.cloudinary.com/dbpv95wd8/image/upload/v1757331991/webdads2u/wordpress-development/wordpress-banner.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <Container maxWidth="lg">
                <Grid2 container spacing={4} alignItems="center">
                    {/* Left Content */}
                    <Grid2 size={{ xs: 12, md: 7 }}>
                        {/* <motion.div initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: 'easeOut' }} viewport={{ once: true, amount: 0.4 }}>
                            <Typography variant={{ xs: 'h5', md: 'h1' }} component={{ xs: 'h5', md: 'h1' }} sx={{ fontWeight: 'bold', mb: 2, color: 'white' }}>
                                WordPress Development
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 3, maxWidth: 500, color: 'white' }}>
                                Building unique, industry-specific, custom-made web portals for outstanding customer experience
                            </Typography>
                            <Button variant="outline" color="primary" size="large" href="/contact-us" sx={{ borderRadius: '30px', px: 4, border: '1px solid white', color: 'white ' }}>
                                Contact Us
                            </Button>
                        </motion.div> */}
                        <motion.div initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: 'easeOut' }} viewport={{ once: true, amount: 0.4 }}>
                            {/* Responsive Heading */}
                            <Typography
                                component="h1"
                                sx={{
                                    fontWeight: 'bold',
                                    mb: 2,
                                    color: 'white',
                                    fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem', lg: '3.5rem' }, // responsive font size
                                    lineHeight: { xs: 1.2, md: 1.3 }
                                }}
                            >
                                WordPress Development
                            </Typography>

                            {/* Responsive Paragraph */}
                            <Typography
                                component="p"
                                sx={{
                                    mb: 3,
                                    maxWidth: 500,
                                    color: 'white',
                                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.125rem' },
                                    lineHeight: { xs: 1.4, md: 1.6 }
                                }}
                            >
                                Building unique, industry-specific, custom-made web portals for outstanding customer experience
                            </Typography>

                            {/* Responsive Button */}
                            <Button
                                variant="outlined"
                                size="large"
                                href="/contact-us"
                                sx={{
                                    borderRadius: '30px',
                                    px: { xs: 3, sm: 4 }, // padding responsive
                                    py: { xs: 1, sm: 1.2 },
                                    border: '1px solid white',
                                    color: 'white',
                                    fontSize: { xs: '0.875rem', sm: '1rem' }, // smaller on mobile
                                    '&:hover': {
                                        backgroundColor: 'white',
                                        color: 'primary.main'
                                    }
                                }}
                            >
                                Contact Us
                            </Button>
                        </motion.div>
                    </Grid2>

                    {/* Right Side with 2 Images */}
                    <Grid2 size={{ xs: 12, md: 5 }} sx={{ position: 'relative', display: { xs: 'none', md: 'block' } }}>
                        {/* Background Image */}
                        <motion.img
                            src="/webdads/images/wordpress-development/W-Background.png"
                            alt="WordPress Background"
                            loading="lazy"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            style={{
                                maxWidth: '100%',
                                width: '100%',
                                height: 'auto'
                            }}
                        />

                        {/* Top Logo Image */}
                        <motion.img
                            src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757332635/webdads2u/wordpress-development/wordpress.png"
                            alt="WordPress Development Company In Chennai"
                            loading="lazy"
                            initial={{ opacity: 0, y: -40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                            viewport={{ once: true }}
                            style={{
                                position: 'absolute',
                                top: '20%',
                                left: '120px',
                                right: '60px',
                                transform: 'translateX(-50%)',
                                maxWidth: '200px',
                                width: '100%'
                            }}
                        />
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
};

export default WordpressDevelopmentBanner;
