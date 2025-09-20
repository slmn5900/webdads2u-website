// import React from 'react'

// function WordPressDevelopmentCompany() {
//   return (
//     <section className='wordPressdevelopmentcompany-Main'>
//         <div className="container">
//             <div className="row text-center justify-content-center wordPressdevelopmentcompany">
//                 <div className="col-sm-12 col-lg-10">
//                     <h1>WordPress Development Company in Chennai, India</h1>
//                     <p>Looking for a reliable WordPress development company for your web portal? Look no further! Webdads2u Pvt. Ltd. specializes in high-quality web portals tailored to your needs. Our experienced developers will work closely with you to design a personalized solution that meets your business objectives. Whether it’s a simple website or complex eCommerce platform, we prioritize user experience, performance, and security. </p>
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default WordPressDevelopmentCompany"use client";

import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

export default function WordPressDevelopmentCompany() {
    return (
        <Box sx={{ py: 2 }}>
            <Container maxWidth="md">
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} viewport={{ once: true, amount: 0.3 }}>
                    <Box textAlign="center">
                        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ lineHeight: 1.3 }}>
                            WordPress Development Company in Chennai, India
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                            Looking for a reliable WordPress development company for your web portal? Look no further! Webdads2u Pvt. Ltd. specializes in high-quality web portals tailored to your needs. Our experienced developers will work closely
                            with you to design a personalized solution that meets your business objectives. Whether it’s a simple website or complex eCommerce platform, we prioritize user experience, performance, and security.
                        </Typography>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
}
