// import React from 'react'

// function Optforphp() {
//   return (
//     <section className='optforphp-main'>
//         <div className="container">
//             <div className="row optforphp">
//                 <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
//                     <h1>Why Opt For PHP Web Development Services?</h1>
//                     <p>Webdads2u Technologies is best PHP development company in Chennai, India. PHP is a widely used general purpose open-source scripting language that can be embedded into HTML and is especially well-suited for web development.</p>
//                     <p>Recently, it has been gaining momentum and is now recognized as one of the most preferred languages used in development PHP development company in Chennai.  The simple and most effective explanation for this is its uncomplicated nature, highly dynamic nature, and ability to provide effective web solutions.</p>
//                     <a href="/contact-us"><button>Conact us</button></a>
//                 </div>
//                 <div className="col-sm-12 col-md-6 col-lg-6">
//                     <img src="webdads/images/php-web-development/php-process.png" alt="php-process" loading='lazy' className='img-fluid' />
//                 </div>

//             </div>
//         </div>
//     </section>
//   )
// }

// export default Optforphp;

'use client';
import React from 'react';
import { Grid2, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

export default function Optforphp() {
    return (
        <Box component="section" className="optforphp-main" sx={{ py: 8, px: { xs: 2, md: 8 } }}>
            <Grid2 container spacing={4} alignItems="center" justifyContent="center" className="optforphp">
                {/* Left Content */}
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: 'text.primary' }}>
                            Why Opt For PHP Web Development Services?
                        </Typography>

                        <Typography variant="body1" paragraph>
                            Webdads2u Technologies is best PHP development company in Chennai, India. PHP is a widely used general purpose open-source scripting language that can be embedded into HTML and is especially well-suited for web
                            development.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            Recently, it has been gaining momentum and is now recognized as one of the most preferred languages used in development PHP development company in Chennai. The simple and most effective explanation for this is its
                            uncomplicated nature, highly dynamic nature, and ability to provide effective web solutions.
                        </Typography>

                        <Button variant="contained" color="primary" href="/contact-us" sx={{ mt: 2, borderRadius: 3, px: 4, py: 1.2 }}>
                            Contact Us
                        </Button>
                    </motion.div>
                </Grid2>

                {/* Right Image */}
                <Grid2 size={{ xs: 12, md: 6 }} textAlign="center">
                    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                        <Box
                            component="img"
                            src="webdads/images/php-web-development/php-process.png"
                            alt="php-process"
                            loading="lazy"
                            sx={{
                                maxWidth: '100%',
                                height: 'auto'
                            }}
                        />
                    </motion.div>
                </Grid2>
            </Grid2>
        </Box>
    );
}
