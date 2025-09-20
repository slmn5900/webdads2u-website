// import React from 'react';
// import { FaCheckCircle } from 'react-icons/fa';

// function AndroidApplicationDevelopmentServices() {
//     return (
//         <section>
//             <div className="container">
//                 <div className="row  align-items-start AndroidApplicationDevelopmentServices">
//                     <div className="col-xs-12 col-lg-8">
//                         <h1>Industry-specific Android Application Development Services</h1>
//                         <p>
//                             Unlock industry-specific solutions with our tailored Android app development services. From healthcare to finance, we deliver custom applications designed to meet the unique needs and challenges of your sector. Our
//                             experienced team combines expertise with cutting-edge technology to create innovative solutions that drive efficiency, productivity, and growth within your industry. Trust us to elevate your business with our
//                             industry-specific Android application development services.
//                         </p>
//                         <div className="justify-content-start AndroidApplicationDevelopmentServices-flex-contend">
//                             <div className="d-flex flex-row justify-content-center">
//                                 <div className="col-6 col-lg-4 ">
//                                     <a href="/">
//                                         <FaCheckCircle className="AndroidApplicationDevelopmentServices-flex-contend-icon" /> HRM
//                                     </a>
//                                 </div>
//                                 <div className="col-6 col-lg-4 ">
//                                     <a href="/">
//                                         <FaCheckCircle className="AndroidApplicationDevelopmentServices-flex-contend-icon" /> Real Estate
//                                     </a>
//                                 </div>
//                             </div>
//                             <div className="d-flex flex-row justify-content-center">
//                                 <div className="col-6 col-lg-4 ">
//                                     <a href="/">
//                                         <FaCheckCircle className="AndroidApplicationDevelopmentServices-flex-contend-icon" /> Healthcare
//                                     </a>
//                                 </div>
//                                 <div className="col-6 col-lg-4 ">
//                                     <a href="/">
//                                         <FaCheckCircle className="AndroidApplicationDevelopmentServices-flex-contend-icon" /> Manufacturing
//                                     </a>
//                                 </div>
//                             </div>
//                             <div className="d-flex flex-row justify-content-center">
//                                 <div className="col-6 col-lg-4 ">
//                                     <a href="/">
//                                         <FaCheckCircle className="AndroidApplicationDevelopmentServices-flex-contend-icon" /> Fintech
//                                     </a>
//                                 </div>
//                                 <div className="col-6 col-lg-4 ">
//                                     <a href="/">
//                                         <FaCheckCircle className="AndroidApplicationDevelopmentServices-flex-contend-icon" /> Travel and Hospitality
//                                     </a>
//                                 </div>
//                             </div>
//                             <div className="d-flex flex-row justify-content-center">
//                                 <div className="col-6 col-lg-4 ">
//                                     <a href="/">
//                                         <FaCheckCircle className="AndroidApplicationDevelopmentServices-flex-contend-icon" /> Printing
//                                     </a>
//                                 </div>
//                                 <div className="col-6 col-lg-4 ">
//                                     <a href="/">
//                                         <FaCheckCircle className="AndroidApplicationDevelopmentServices-flex-contend-icon" /> Education
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-xs-12 col-lg-4">
//                         <img src="webdads/images/android-app-development/Industry-specific-Android-Application-Development-Services.png" alt="" loading="lazy" className="img-fluid" />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default AndroidApplicationDevelopmentServices;
'use client';

import React from 'react';
import { Grid2, Box, Typography, Link } from '@mui/material';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const industries = ['HRM', 'Real Estate', 'Healthcare', 'Manufacturing', 'Fintech', 'Travel and Hospitality', 'Printing', 'Education'];

const AndroidApplicationDevelopmentServices = () => {
    return (
        <Box component="section" sx={{ py: 6, px: { xs: 2, md: 4 } }}>
            <Grid2 container spacing={4} alignItems="flex-start">
                {/* Left Content */}
                <Grid2 size={{ xs: 12, md: 8 }}>
                    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <Typography variant="h4" component="h1" gutterBottom fontWeight={700}>
                            Industry-specific Android Application Development Services
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            Unlock industry-specific solutions with our tailored Android app development services. From healthcare to finance, we deliver custom applications designed to meet the unique needs and challenges of your sector. Our
                            experienced team combines expertise with cutting-edge technology to create innovative solutions that drive efficiency, productivity, and growth within your industry. Trust us to elevate your business with our
                            industry-specific Android application development services.
                        </Typography>
                    </motion.div>

                    {/* Industry list */}
                    <Grid2 container spacing={2} sx={{ mt: 2 }}>
                        {industries.map((industry, index) => (
                            <Grid2 size={{ xs: 6, sm: 6, md: 4 }} key={index}>
                                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }}>
                                    <Link
                                        href="/"
                                        underline="none"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1,
                                            color: 'text.primary',
                                            fontWeight: 500,
                                            fontFamily: 'Poppins',
                                            '&:hover': { color: 'primary.main' }
                                        }}
                                    >
                                        <Box>
                                            <FaCheckCircle color="#1976d2" />
                                        </Box>
                                        {industry}
                                    </Link>
                                </motion.div>
                            </Grid2>
                        ))}
                    </Grid2>
                </Grid2>
                {/* Right Image */}
                <Grid2 size={{ xs: 12, md: 4 }}>
                    <motion.img
                        src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757570581/webdads2u/android-app-development/industry-specific-android-application.png"
                        alt="industry specific android application"
                        loading="lazy"
                        style={{ width: '100%', borderRadius: '12px' }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    />
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default AndroidApplicationDevelopmentServices;
