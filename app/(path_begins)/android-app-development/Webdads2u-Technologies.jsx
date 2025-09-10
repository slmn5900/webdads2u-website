// import React from 'react';

// function Webdads2uTechnologies() {
//     return (
//         <section className="Webdads2uTechnologies">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-xs-12 col-lg-12 pt-3 pb-3 Webdads2uTechnologies-heading">
//                         <h1>Why choose Webdads2u Technologies for Android App Development?</h1>
//                         <p>
//                             Choose Webdads2u Technologies for Android app development for our expertise, innovative solutions, timely delivery, and commitment to client satisfaction. Experience excellence with our comprehensive development services
//                             tailored to your needs.
//                         </p>
//                     </div>
//                 </div>
//                 <div className="row Webdads2uTechnologies-card">
//                     <div className="col-xs-12 col-md-6 col-lg-3">
//                         <div className="card">
//                             <div className="card-title">
//                                 <h2>Commanding Portfolio</h2>
//                                 <p>Explore our commanding portfolio showcasing our mastery in Android app development. From sleek UI designs to robust functionalities, our apps deliver exceptional user experiences and business results.</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-xs-12 col-md-6 col-lg-3">
//                         <div className="card mt-4">
//                             <div className="card-title">
//                                 <h2>Zero-error App</h2>
//                                 <p>
//                                     Deliver a zero-error Android app with our meticulous development process. From thorough testing to rigorous quality assurance measures, we ensure your app performs flawlessly, providing users with a seamless and
//                                     error-free experience.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-xs-12 col-md-6 col-lg-3">
//                         <div className="card">
//                             <div className="card-title">
//                                 <h2>Advanced Tools</h2>
//                                 <p>Leverage our arsenal of advanced tools for Android app development. From cutting-edge frameworks to robust libraries, we empower developers to create high-performance, feature-rich applications.</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-xs-12 col-md-6 col-lg-3">
//                         <div className="card  mt-4">
//                             <div className="card-title">
//                                 <h2>Timely Delivery</h2>
//                                 <p>With Webdads2u Technologies, rest assured of timely delivery in Android app development. Our dedicated team follows efficient project management processes to ensure your app is completed on schedule.</p>
//                             </div>
//                         </div>
//                     </div>
//                     {/* </div> */}
//                     {/* <div className="row Webdads2uTechnologies-card"> */}
//                     <div className="col-xs-12 col-md-6 col-lg-3">
//                         <div className="card mt-4">
//                             <div className="card-title">
//                                 <h2>Fair Pricing</h2>
//                                 <p>
//                                     At Webdads2u Technologies, we believe in fair pricing for Android app development. Our transparent pricing model ensures you receive high-quality services at competitive rates, allowing you to maximize your budget
//                                     and achieve your app development goals effectively.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-xs-12 col-md-6 col-lg-3">
//                         <div className="card">
//                             <div className="card-title">
//                                 <h2>App Technocrats</h2>
//                                 <p>
//                                     Trust App Technocrats for cutting-edge Android app development services. With our team of skilled technocrats, we deliver innovative solutions tailored to your needs, ensuring your app stands out in the competitive
//                                     market.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-xs-12 col-md-6 col-lg-3">
//                         <div className="card mt-4">
//                             <div className="card-title">
//                                 <h2>Customized Development Model</h2>
//                                 <p>
//                                     Experience our customized development model for Android app development. We tailor our approach to match your project requirements, ensuring flexibility, scalability, and efficiency throughout the development
//                                     lifecycle, resulting in a truly unique and successful app.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-xs-12 col-md-6 col-lg-3">
//                         <div className="card">
//                             <div className="card-title">
//                                 <h2>Embracing new Versions</h2>
//                                 <p>
//                                     Stay ahead of the curve with our Android app development services, embracing new versions and updates. Our team constantly adapts to the latest advancements, ensuring your app remains compatible, secure, and
//                                     optimized for the newest Android versions.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Webdads2uTechnologies;

'use client';

import React from 'react';
import { Container, Typography, Box, Grid2 } from '@mui/material';
import { motion } from 'framer-motion';

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.2, ease: 'easeOut' }
    })
};

export default function Webdads2uTechnologies() {
    const cards = [
        {
            title: 'Commanding Portfolio',
            text: 'Explore our commanding portfolio showcasing our mastery in Android app development. From sleek UI designs to robust functionalities, our apps deliver exceptional user experiences and business results.'
        },
        {
            title: 'Zero-error App',
            text: 'Deliver a zero-error Android app with our meticulous development process. From thorough testing to rigorous quality assurance measures, we ensure your app performs flawlessly, providing users with a seamless and error-free experience.'
        },
        {
            title: 'Advanced Tools',
            text: 'Leverage our arsenal of advanced tools for Android app development. From cutting-edge frameworks to robust libraries, we empower developers to create high-performance, feature-rich applications.'
        },
        {
            title: 'Timely Delivery',
            text: 'With Webdads2u Technologies, rest assured of timely delivery in Android app development. Our dedicated team follows efficient project management processes to ensure your app is completed on schedule.'
        },
        {
            title: 'Fair Pricing',
            text: 'At Webdads2u Technologies, we believe in fair pricing for Android app development. Our transparent pricing model ensures you receive high-quality services at competitive rates, allowing you to maximize your budget and achieve your app development goals effectively.'
        },
        {
            title: 'App Technocrats',
            text: 'Trust App Technocrats for cutting-edge Android app development services. With our team of skilled technocrats, we deliver innovative solutions tailored to your needs, ensuring your app stands out in the competitive market.'
        },
        {
            title: 'Customized Development Model',
            text: 'Experience our customized development model for Android app development. We tailor our approach to match your project requirements, ensuring flexibility, scalability, and efficiency throughout the development lifecycle, resulting in a truly unique and successful app.'
        },
        {
            title: 'Embracing new Versions',
            text: 'Stay ahead of the curve with our Android app development services, embracing new versions and updates. Our team constantly adapts to the latest advancements, ensuring your app remains compatible, secure, and optimized for the newest Android versions.'
        }
    ];

    return (
        <Box component="section" sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#f9fafb' }}>
            <Container>
                {/* Heading */}
                <Box textAlign="center" mb={5}>
                    <Typography variant="h4" gutterBottom component={motion.h1} initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                        Why choose Webdads2u Technologies for Android App Development?
                    </Typography>
                    <Typography variant="body1" color="text.secondary" component={motion.p} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} sx={{ maxWidth: 800, mx: 'auto' }}>
                        Choose Webdads2u Technologies for Android app development for our expertise, innovative solutions, timely delivery, and commitment to client satisfaction. Experience excellence with our comprehensive development services
                        tailored to your needs.
                    </Typography>
                </Box>

                {/* Cards */}
                <Grid2 container spacing={3}>
                    {cards.map((card, index) => (
                        <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" custom={index} viewport={{ once: true }}>
                                <Box
                                    sx={{
                                        p: 3,
                                        borderRadius: 3,
                                        boxShadow: 2,
                                        backgroundColor: '#fff',
                                        height: '100%',
                                        minHeight: '320px',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: 6,
                                            background: 'linear-gradient(135deg, #e0f7fa, #f1f8e9)'
                                        }
                                    }}
                                >
                                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {card.text}
                                    </Typography>
                                </Box>
                            </motion.div>
                        </Grid2>
                    ))}
                </Grid2>
            </Container>
        </Box>
    );
}
