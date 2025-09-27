// import React from 'react'

// function LookingEcommerceSEO() {
//   return (
//     <section className='lookingEcommerceseo-main' >
//         <div className="section">
//             <div className="container">
//                 <div className="row text-center lookingEcommerceseo">
//                     <div className="col-sm-12 col-md-12 col-lg-12">
//                         <h6>Looking for E-commerce SEO Services?</h6>
//                         <p>Send us your requirements. We will get back to you with a free quote.</p>
//                         <a href="/contact-us"><button>Connect For Free Consultation</button></a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default LookingEcommerceSEO;

'use client';

import React from 'react';
import { Container, Grid2, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

function LookingEcommerceSEO() {
    return (
        <Box
            component="section"
            sx={{
                py: { xs: 6, md: 10 },
                background: 'linear-gradient(135deg, #B3E1EE 0%, #F2F5C6 100%)',
                textAlign: 'center'
            }}
        >
            <Container>
                <Grid2 container justifyContent="center">
                    <Grid2 size={{ xs: 12, md: 10, lg: 8 }}>
                        {/* Fade-in heading */}
                        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#ffff',
                                    fontWeight: 700,
                                    mb: 2,
                                    fontSize: { xs: 25, md: 36 }
                                }}
                            >
                                Looking for E-commerce SEO Services?
                            </Typography>
                        </motion.div>

                        {/* Fade-in text */}
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }}>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: '#333',
                                    mb: 4,
                                    fontSize: { xs: '1rem', md: '1.1rem' }
                                }}
                            >
                                Send us your requirements. We will get back to you with a{' '}
                                <Box component="span" sx={{ color: '#2679AB', fontWeight: 600 }}>
                                    free quote.
                                </Box>
                            </Typography>
                        </motion.div>

                        {/* Animated Button */}
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                                variant="outlined"
                                href="/contact-us"
                                sx={{
                                    color: '#2679AB',
                                    // color: '#fff',
                                    fontWeight: 600,
                                    px: { xs: 2, md: 4 },
                                    py: 1.5,
                                    borderRadius: '30px',
                                    fontSize: { xs: '12px', md: '1rem' },
                                    boxShadow: '0 4px 12px rgba(38,121,171,0.4)',
                                    '&:hover': {
                                        backgroundColor: '#1f6995',
                                        boxShadow: '0 6px 16px rgba(38,121,171,0.5)'
                                    }
                                }}
                            >
                                Connect For Free Consultation
                            </Button>
                        </motion.div>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
}

export default LookingEcommerceSEO;
