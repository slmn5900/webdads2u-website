"use client"
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import "../app/hero-section/footer.scss";
import { RiMedalLine } from 'react-icons/ri';
import { IoSettingsOutline } from 'react-icons/io5';
import { IoShieldCheckmarkOutline } from 'react-icons/io5';
import Image from 'next/image';
import Robart from '../public/webdads/images/home/robart.webp';
import Formsection from './Formsection';
import Industries from './Industries';
import { Box } from '@mui/material';

function Herosection() {
    return (
        <>
            <section className="">
                <Container >
                    <Row>
                        <Col md={7} >
                            <Box sx={{ marginTop: { xs: "3rem", md: "5rem" } }}>

                                <div className="Hero-content">
                                    <h1>Better Digitalization Solution to Transform your Business</h1>
                                    <p>Our expertise in bringing ideas to reality help your market place </p>
                                </div>

                                <Row className='mt-2'>
                                    <Col md={4} xs={4}>
                                        <a
                                            href="/website-development/"
                                            rel="noopener noreferrer"
                                            target="_self"
                                            className="text-decoration-none"
                                            style={{ color: 'inherit' }} // Inherit color from parent
                                        >
                                            <div className="service-icon">
                                                <img src="/webdads icon.svg" alt="" />

                                                <h4 style={{ fontFamily: "Poppins", }}>Web Development</h4>
                                            </div>
                                        </a>
                                    </Col>
                                    <Col md={4} xs={4}>
                                        <a
                                            href="/digital-marketing-agency/"
                                            rel="noopener noreferrer"
                                            target="_self"
                                            className="text-decoration-none" // Bootstrap classes for text decoration and color
                                            style={{ color: 'inherit' }} // Inherit color from parent
                                        >
                                            <div className="service-icon">
                                                <IoSettingsOutline />
                                                <h4 style={{ fontFamily: "Poppins", }}>Digital Marketing</h4>
                                            </div>
                                        </a>
                                    </Col>
                                    <Col md={4} xs={4}>
                                        <a
                                            href="/crm-erp-development/"
                                            rel="noopener noreferrer"
                                            target="_self"
                                            className="text-decoration-none" // Bootstrap classes for text decoration and color
                                            style={{ color: 'inherit' }} // Inherit color from parent
                                        >
                                            <div className="service-icon crm-icn">
                                                <IoShieldCheckmarkOutline />
                                                <h4 style={{ fontFamily: "Poppins", }}>CRM & ERP Development</h4>
                                            </div>
                                        </a>
                                    </Col>
                                </Row>
                            </Box>
                        </Col>
                        <Col md={5} >
                            <div className="robort mt-2 ">
                                <Box component="img" src="/webdads/images/home/robart.webp" alt="Web Design Company In Chennai & Web Development Company In Chennai" className="img-fluid" sx={{ objectFit: { xs: "scale-down", md: "contain" }, marginRight: "auto" }} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* <Formsection/>
     <Industries/> */}
        </>
    );
}

export default Herosection;
// 'use client';

// import React from 'react';
// import { Container, Grid, Box, Typography, Link } from '@mui/material';
// import { motion } from 'framer-motion';
// import { IoSettingsOutline, IoShieldCheckmarkOutline } from 'react-icons/io5';
// import Image from 'next/image';

// const Herosection = () => {
//   return (
//     <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
//       <Container>
//         <Grid container spacing={4} alignItems="center">
//           {/* Left Side */}
//           <Grid item xs={12} md={7}>
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
//                 Better Digitalization Solution to Transform your Business
//               </Typography>
//               <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
//                 Our expertise in bringing ideas to reality help your market place
//               </Typography>
//             </motion.div>

//             <Grid container spacing={3}>
//               {/* Service 1 */}
//               <Grid item xs={4}>
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   transition={{ type: 'spring', stiffness: 300 }}
//                 >
//                   <Link
//                     href="/website-development/"
//                     underline="none"
//                     color="inherit"
//                     sx={{ textAlign: 'center', display: 'block' }}
//                   >
//                     <Box
//                       sx={{
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'center',
//                       }}
//                     >
//                       <Image
//                         src="/webdads icon.svg"
//                         alt="Web Development"
//                         width={40}
//                         height={40}
//                       />
//                       <Typography variant="subtitle1" mt={1}>
//                         Web Development
//                       </Typography>
//                     </Box>
//                   </Link>
//                 </motion.div>
//               </Grid>

//               {/* Service 2 */}
//               <Grid item xs={4}>
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   transition={{ type: 'spring', stiffness: 300 }}
//                 >
//                   <Link
//                     href="/digital-marketing-agency/"
//                     underline="none"
//                     color="inherit"
//                     sx={{ textAlign: 'center', display: 'block' }}
//                   >
//                     <Box
//                       sx={{
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'center',
//                       }}
//                     >
//                       <IoSettingsOutline size={40} />
//                       <Typography variant="subtitle1" mt={1}>
//                         Digital Marketing
//                       </Typography>
//                     </Box>
//                   </Link>
//                 </motion.div>
//               </Grid>

//               {/* Service 3 */}
//               <Grid item xs={4}>
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   transition={{ type: 'spring', stiffness: 300 }}
//                 >
//                   <Link
//                     href="/crm-erp-development/"
//                     underline="none"
//                     color="inherit"
//                     sx={{ textAlign: 'center', display: 'block' }}
//                   >
//                     <Box
//                       sx={{
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'center',
//                       }}
//                     >
//                       <IoShieldCheckmarkOutline size={40} />
//                       <Typography variant="subtitle1" mt={1}>
//                         CRM & ERP Development
//                       </Typography>
//                     </Box>
//                   </Link>
//                 </motion.div>
//               </Grid>
//             </Grid>
//           </Grid>

//           {/* Right Side Image */}
//           <Grid item xs={12} md={5}>
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.7 }}
//             >
//               <Box
//                 component="img"
//                 src="/webdads/images/home/robart.webp"
//                 alt="Web Design Company In Chennai & Web Development Company In Chennai"
//                 sx={{
//                   width: '100%',
//                   height: 'auto',
//                   objectFit: { xs: 'scale-down', md: 'contain' },
//                 }}
//               />
//             </motion.div>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Herosection;
