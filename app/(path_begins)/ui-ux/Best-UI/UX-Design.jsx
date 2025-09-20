// import React from 'react'

// function Uxdesign() {
//   return (
//     <section className='uxdesign-main'>
//         <div className="container">
//             <div className="row uxdesign">
//                 <div className="col-sm-12 col-md-6 col-lg-6">
//                     <h3>Best UI/UX Design Services in Chennai</h3>
//                     <p className='mb-sm-1 mb-md-2 mb-lg-3 text-justify'>Webdads2u Technologies, we provide the best mobile UI/UX design services in Chennai. We realize that user experience encompasses all aspects of how users engage with a product. Our goal is to create products that are simple and engaging to use. UX is also known as user-centered design because we put the users first and shape technology around them.</p>
//                     <p className='mb-sm-1 mb-md-2 mb-lg-3 text-justify'>As the best mobile UI/UX design services in Chennai, we create functionally appealing digital experiences that engage your target audience. We prefer to create long-lasting encounters between brands and their customers through captivating design.</p>
//                 </div>
//                 <div className="col-sm-12 col-md-6 col-lg-6 ">
//                 <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757482533/webdads2u/ui-ux/ui-ux-design-services-in-chennai.png" alt="2mobiles" loading='lazy' className='img-fluid' />
//                 <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757482531/webdads2u/ui-ux/ui-ux-design-company.png" alt="about_s4_bubble" loading='lazy' className='img-fluid img-2' />
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Uxdesign;

'use client';
import React from 'react';
import { Box, Container, Grid2, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function Uxdesign() {
    return (
        <Box component="section" sx={{ py: 6 }} className="uxdesign-main">
            <Container>
                <Grid2 container spacing={4} alignItems="center">
                    {/* Left Content */}
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Typography variant="h4" gutterBottom fontWeight={'bold'}>
                            Best UI/UX Design Services in Chennai
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify' }}>
                            Webdads2u Technologies, we provide the best mobile UI/UX design services in Chennai. We realize that user experience encompasses all aspects of how users engage with a product. Our goal is to create products that are
                            simple and engaging to use. UX is also known as user-centered design because we put the users first and shape technology around them.
                        </Typography>
                        <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                            As the best mobile UI/UX design services in Chennai, we create functionally appealing digital experiences that engage your target audience. We prefer to create long-lasting encounters between brands and their customers
                            through captivating design.
                        </Typography>
                    </Grid2>

                    {/* Right Images */}
                    <Grid2 size={{ xs: 12, md: 6 }} sx={{ position: 'relative' }}>
                        <Box
                            component="img"
                            src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757482533/webdads2u/ui-ux/ui-ux-design-services-in-chennai.png"
                            alt="main-mobile"
                            loading="lazy"
                            sx={{
                                maxWidth: '100%',
                                // width: '400px',
                                borderRadius: 2,
                                zIndex: 1,
                                position: 'relative'
                            }}
                        />

                        {/* Rotating Image Wrapper */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                                repeat: Infinity,
                                duration: 10,
                                ease: 'linear'
                            }}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                bottom: '50%',
                                right: '50%',
                                // width: '520px', // orbit radius
                                // height: '520px',
                                marginLeft: '-110px',
                                marginTop: '-110px',
                                borderRadius: '50%'
                            }}
                        >
                            <Box
                                component="img"
                                src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757482531/webdads2u/ui-ux/ui-ux-design-company.png"
                                alt="rotating"
                                loading="lazy"
                                sx={{
                                    position: 'absolute',
                                    top: '0',
                                    right: '50px',
                                    transform: 'translateX(-50%)',
                                    width: 250
                                }}
                            />
                        </motion.div>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
}
