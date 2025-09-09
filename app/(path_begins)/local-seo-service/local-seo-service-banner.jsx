// import React from 'react';
// import Slider from '../../../components/common/Slider-image';

// function Localseoservicebanner() {
//     return (
//         <>
//             <section className="localseoservicebanner-main">
//                 <div className="container">
//                     <div className="row localseoservicebanner">
//                         <div className="col-7 col-sm-6 col-md-6 col-lg-6">
//                             <h1>Local SEO Services</h1>
//                             <p>Boost your business with our expert local SEO services. We optimize your online presence for local searches, driving traffic and customers to your doorstep.</p>
//                             <a href="/contact-us">
//                                 <button >Contact us</button>
//                             </a>
//                         </div>
//                         <div className="col-5 col-sm-6 col-md-6 col-lg-6 text-center align-self-center element-local-image">
//                             <img
//                                 src="webdads/images/local-seo-service/Img.png"
//                                 alt="Local SEO Services In Chennai
// "
//                                 loading="lazy"
//                                 className="img-fluid"
//                             />

//                             <div className="d-none d-md-block">
//                                 <img src="webdads/images/local-seo-service/Star-2.png" alt="Star-2-main" loading="lazy" className="img-fluid Star-2-main" />
//                                 <img src="webdads/images/local-seo-service/Star-2.png" alt="Star-2" loading="lazy" className="img-fluid Star-2" />
//                                 <img src="webdads/images/local-seo-service/Star-1.png" alt="Star-1" loading="lazy" className="img-fluid Star-1" />
//                                 <img src="webdads/images/local-seo-service/Star-4.png" alt="Star-1" loading="lazy" className="img-fluid Star" />
//                                 <img src="webdads/images/local-seo-service/Steps.png" alt="Steps" loading="lazy" className="img-fluid Steps" />
//                                 <img src="webdads/images/local-seo-service/Hand.png" alt="Hand" loading="lazy" className="img-fluid Hand" />
//                                 <img src="webdads/images/local-seo-service/Mic.png" alt="Mic" loading="lazy" className="img-fluid Mic" />
//                                 <img src="webdads/images/local-seo-service/Paper.png" alt="Paper" loading="lazy" className="img-fluid Paper" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <Slider />
//         </>
//     );
// }

// export default Localseoservicebanner;
'use client';

import React from 'react';
import { Container, Grid2, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import Slider from '../../../components/common/Slider-image';

function Localseoservicebanner() {
    return (
        <>
            <section className="localseoservicebanner-main">
                <Container>
                    <Grid2 container spacing={4} alignItems="center" justifyContent="center" className="localseoservicebanner">
                        {/* Left Content */}
                        <Grid2 size={{ xs: 12, md: 6 }}>
                            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
                                <Typography variant="h3" component="h1" fontWeight={700} gutterBottom>
                                    Local SEO Services
                                </Typography>
                                <Typography variant="body1" color="text.secondary" paragraph>
                                    Boost your business with our expert local SEO services. We optimize your online presence for local searches, driving traffic and customers to your doorstep.
                                </Typography>
                                <Button variant="contained" color="primary" href="/contact-us" size="large" sx={{ borderRadius: '30px', px: 4, py: 1.5, mt: 2 }}>
                                    Contact Us
                                </Button>
                            </motion.div>
                        </Grid2>

                        {/* Right Image + Elements */}
                        <Grid2 size={{ xs: 12, md: 6 }} textAlign="center">
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="element-local-image">
                                <Box
                                    component="img"
                                    src="webdads/images/local-seo-service/Img.png"
                                    alt="Local SEO Services In Chennai"
                                    loading="lazy"
                                    sx={{
                                        maxWidth: '100%',
                                        height: 'auto'
                                    }}
                                />

                                {/* Decorative floating images */}
                                <Box sx={{ position: 'relative' }} className="d-none d-md-block">
                                    <motion.img
                                        src="webdads/images/local-seo-service/Star-2.png"
                                        alt="Star-2-main"
                                        loading="lazy"
                                        className="Star-2-main"
                                        initial={{ y: -20, opacity: 0 }}
                                        animate={{ y: [0, -15, 0], opacity: 1 }}
                                        transition={{ repeat: Infinity, duration: 3 }}
                                    />
                                    <motion.img
                                        src="webdads/images/local-seo-service/Star-1.png"
                                        alt="Star-1"
                                        loading="lazy"
                                        className="Star-1"
                                        initial={{ y: -10, opacity: 0 }}
                                        animate={{ y: [0, -10, 0], opacity: 1 }}
                                        transition={{ repeat: Infinity, duration: 4 }}
                                    />
                                    <motion.img
                                        src="webdads/images/local-seo-service/Steps.png"
                                        alt="Steps"
                                        loading="lazy"
                                        className="Steps"
                                        initial={{ x: 20, opacity: 0 }}
                                        animate={{ x: [0, 15, 0], opacity: 1 }}
                                        transition={{ repeat: Infinity, duration: 5 }}
                                    />
                                    <motion.img
                                        src="webdads/images/local-seo-service/Hand.png"
                                        alt="Hand"
                                        loading="lazy"
                                        className="Hand"
                                        initial={{ y: 10, opacity: 0 }}
                                        animate={{ y: [0, 12, 0], opacity: 1 }}
                                        transition={{ repeat: Infinity, duration: 3.5 }}
                                    />
                                    <motion.img
                                        src="webdads/images/local-seo-service/Mic.png"
                                        alt="Mic"
                                        loading="lazy"
                                        className="Mic"
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: [0, -15, 0], opacity: 1 }}
                                        transition={{ repeat: Infinity, duration: 4.5 }}
                                    />
                                    <motion.img
                                        src="webdads/images/local-seo-service/Paper.png"
                                        alt="Paper"
                                        loading="lazy"
                                        className="Paper"
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: [0, 15, 0], opacity: 1 }}
                                        transition={{ repeat: Infinity, duration: 6 }}
                                    />
                                </Box>
                            </motion.div>
                        </Grid2>
                    </Grid2>
                </Container>
            </section>
        </>
    );
}

export default Localseoservicebanner;
