// 'use client';

// import React from 'react';

// function Customwebdevelopmentbanner() {
//     return (
//         <section className="customwebdevelopmentbanner-main ">
//             <div className="container">
//                 <div className="row customwebdevelopmentbanner align-items-start">
//                     <div className="col-12 col-sm-12 col-md-7 col-lg-6 mt-5 mt-sm-0">
//                         <h1>Custom Web Development</h1>
//                         <p>Your digital potential with our custom web development solutions. Tailored to your unique needs, our expert team will craft a stunning website that drives results and exceeds expectations!</p>
//                         <a href="/contact-us">
//                             {/* <button className="d-none d-sm-block">Contact us</button> */}
//                             <button>Contact us</button>
//                         </a>
//                     </div>
//                     <div className="col-4 col-sm-5 col-md-5 col-lg-6 align-self-center d-none">
//                         <img
//                             src="webdads/images/custom-web-development/Web-Portal-Development.png"
//                             alt="Custom Website Development Company In Chennai
// "
//                             loading="lazy"
//                             className="img-fluid"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Customwebdevelopmentbanner;
'use client';

import React from 'react';
import { Grid2, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

function Customwebdevelopmentbanner() {
    return (
        <Box
            className="customwebdevelopmentbanner-main "
            component="section"
            sx={{
                py: { xs: 6, md: 10 },
                px: { xs: 2, md: 6 },
                backgroundColor: '#f9f9f9'
            }}
        >
            <Grid2 container spacing={4} alignItems="start" justifyContent="space-between">
                {/* Left Side Content */}
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                        <Typography variant="h3" component="h1" fontWeight={700} gutterBottom color="white" sx={{ fontSize: { xs: 20, md: 30 } }}>
                            Custom Web Development
                        </Typography>
                        <Typography variant="body1" color="white" paragraph >
                            Your digital potential with our custom web development solutions. Tailored to your unique needs, our expert team will craft a stunning website that drives results and exceeds expectations!
                        </Typography>
                        <Button variant="outlined" color="primary" size="large" component="a" href="/contact-us" sx={{ borderRadius: 2, mt: 2, color: 'white' }}>
                            Contact Us
                        </Button>
                    </motion.div>
                </Grid2>

                {/* Right Side Image */}
                <Grid2 size={{ xs: 12, md: 6 }} sx={{ textAlign: 'center' }}>
                    <motion.img
                        src="/webdads/images/custom-web-development/Web-Portal-Development.png"
                        alt="Custom Website Development Company In Chennai"
                        loading="lazy"
                        style={{ maxWidth: '100%', height: 'auto' }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    />
                </Grid2>
            </Grid2>
        </Box>
    );
}

export default Customwebdevelopmentbanner;
