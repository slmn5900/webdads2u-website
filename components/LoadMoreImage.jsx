// import Image from 'next/image';
// import { Container } from 'postcss';
// import { Button, Col, Row } from 'react-bootstrap';
// // import Application from "../app/Application/page"

// import a1 from '../public/webdads/images/home/Assert/Adsfit_19890fc227.png';
// import a2 from '../public/webdads/images/home/Assert/Amethyst.png';
// import a3 from '../public/webdads/images/home/Assert/Atgomart_198912fc12.png';
// import a4 from '../public/webdads/images/home/Assert/Global_198926bdb3.png';
// import a5 from '../public/webdads/images/home/Assert/arc-man-logo_2299280a.avif';
// import a6 from '../public/webdads/images/home/Assert/best_227e2dba.avif';
// import a7 from '../public/webdads/images/home/Assert/diamond.avif';
// import a8 from '../public/webdads/images/home/Assert/greem-yard.png';
// import a9 from '../public/webdads/images/home/Assert/re-life_222a8f32.avif';
// import a10 from '../public/webdads/images/home/Assert/saj-hotel-logo_221ae891.avif';
// import a11 from '../public/webdads/images/home/Assert/smart-duckling-logo_2184e61c.avif';
// import a12 from '../public/webdads/images/home/Assert/teamwater-logo_220f3c18.avif';
// import Loader from './Loader';
// // import Project from "../app/Project-details/page"
// // import Digital from "./Digital/page";
// export default function LoadMoreImage() {
//     const about = [
//         {
//             no: 1,
//             img: a1
//         },
//         {
//             no: 2,
//             img: a2
//         },
//         {
//             no: 3,
//             img: a3
//         },
//         {
//             no: 4,
//             img: a4
//         },
//         {
//             no: 5,
//             img: a5
//         },
//         {
//             no: 6,
//             img: a6
//         },
//         {
//             no: 7,
//             img: a7
//         },
//         {
//             no: 8,
//             img: a8
//         },
//         {
//             no: 9,
//             img: a9
//         },
//         {
//             no: 10,
//             img: a10
//         },
//         {
//             no: 11,
//             img: a11
//         },
//         {
//             no: 12,
//             img: a12
//         }
//     ];

//     return (
//         <div className=" ">
//             <div className="container">
//                 <Row>
//                     <Col md={6} >
//                         <div className="mt-5">
//                             <h5 className="fw-bold">10+ years and 150+ clients</h5>
//                             <h1 className="fw-bold load-ayout" style={{ color: '#262250' }}>
//                                 We are the Solution for Web Designing and Web Development
//                             </h1>
//                             <p>
//                                 <span className="fw-bold" style={{ color: '#7a7a7a', fontSize: '18px' }}>
//                                     <a href="https://webdads2u.com/" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
//                                         Best Web Design and Web Development Company in Chennai
//                                     </a>
//                                 </span>
//                                 , India to help you increase your business growth.
//                             </p>
//                             <div className="about-layout ">
//                                 {/* <a href="https://webdads2u.com/about/" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
//                                     <span className="fs-5 text-white ">About more</span>
//                                 </a> */}
//                                 <Button
//                                     href="/about/"
//                                     // variant="primary"
//                                     className="border rounded-5"
//                                     style={{
//                                         background: 'linear-gradient(90deg, #871752 0%, #262250 50%)',
//                                         padding: '18px 50px'
//                                     }}
//                                 >
//                                     About more
//                                 </Button>
//                             </div>
//                         </div>
//                     </Col>
//                     <Col md={6} sm={3} className="load-images">
//                         {about.length > 0 ? (
//                             about.map((item, index) => (
//                                 <>
//                                     <Image
//                                         src={item.img}
//                                         alt="about"
//                                         width={120}
//                                         height={120}
//                                         style={{
//                                             boxShadow: '0 15px 55px rgb(138 138 138 / 30%)',
//                                             background: 'white'
//                                         }}
//                                     />
//                                 </>
//                             ))
//                         ) : (
//                             <p>no data</p>
//                         )}
//                     </Col>
//                 </Row>
//             </div>
//             <Loader />
//             <div>{/* <Project/> */}</div>
//             <div>{/* <Application/> */}</div>
//         </div>
//     );
// }
'use client';

import React from 'react';
import Image from 'next/image';
import { Grid2, Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import Loader from './Loader';

// Images
import a1 from '../public/webdads/images/home/Assert/Adsfit_19890fc227.png';
import a2 from '../public/webdads/images/home/Assert/Amethyst.png';
import a3 from '../public/webdads/images/home/Assert/Atgomart_198912fc12.png';
import a4 from '../public/webdads/images/home/Assert/Global_198926bdb3.png';
import a5 from '../public/webdads/images/home/Assert/arc-man-logo_2299280a.avif';
import a6 from '../public/webdads/images/home/Assert/best_227e2dba.avif';
import a7 from '../public/webdads/images/home/Assert/diamond.avif';
import a8 from '../public/webdads/images/home/Assert/greem-yard.png';
import a9 from '../public/webdads/images/home/Assert/re-life_222a8f32.avif';
import a10 from '../public/webdads/images/home/Assert/saj-hotel-logo_221ae891.avif';
import a11 from '../public/webdads/images/home/Assert/smart-duckling-logo_2184e61c.avif';
import a12 from '../public/webdads/images/home/Assert/teamwater-logo_220f3c18.avif';

const about = [
    { no: 1, img: a1 },
    { no: 2, img: a2 },
    { no: 3, img: a3 },
    { no: 4, img: a4 },
    { no: 5, img: a5 },
    { no: 6, img: a6 },
    { no: 7, img: a7 },
    { no: 8, img: a8 },
    { no: 9, img: a9 },
    { no: 10, img: a10 },
    { no: 11, img: a11 },
    { no: 12, img: a12 },
];

const LoadMoreImage = () => {
    return (
        <Box sx={{ mt: 3 }}>
            <Container>
                <Grid2 container spacing={4} alignItems="center">
                    {/* Left Side */}
                    <Grid2 size={{ xs: 12, md: 6 }} >
                        <Box mt={5}>
                            <Typography variant="h6" fontWeight="bold" sx={{ fontFamily: "Poppins" }}>
                                10+ years and 150+ clients
                            </Typography>
                            <Typography
                                variant="h4"
                                fontWeight="bold"
                                sx={{ color: '#262250', fontFamily: "Poppins" }}
                            >
                                We are the Solution for Web Designing and Web Development
                            </Typography>
                            <Typography mt={2}>
                                <Box component="span" fontWeight="bold" sx={{ color: '#7a7a7a', fontSize: '18px' }}>
                                    <a
                                        href="https://webdads2u.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none', color: 'inherit', fontFamily: "Poppins" }}
                                    >
                                        Best Web Design and Web Development Company in Chennai
                                    </a>
                                </Box>
                                , India to help you increase your business growth.
                            </Typography>

                            <Box mt={3}>
                                <Button
                                    href="/about/"
                                    variant="contained"
                                    sx={{
                                        borderRadius: 15,
                                        px: 5,
                                        py: 1.5,
                                        background: 'linear-gradient(90deg, #871752 0%, #262250 50%)',
                                        fontFamily: "Poppins",
                                        textTransform: "capitalize"
                                    }}
                                >
                                    More About
                                </Button>
                            </Box>
                        </Box>
                    </Grid2>

                    {/* Right Side - Logos */}
                    <Grid2 size={{ xs: 12, md: 6 }} >
                        <Grid2 container spacing={2}>
                            {about.length > 0 ? (
                                about.map((item, index) => (
                                    <Grid2 size={{ xs: 6, sm: 3 }} key={index}>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.05 }}
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <Box
                                                sx={{
                                                    boxShadow: '0 15px 55px rgb(138 138 138 / 30%)',
                                                    borderRadius: '8px',
                                                    backgroundColor: 'white',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    p: 1,
                                                }}
                                            >
                                                <Image
                                                    src={item.img}
                                                    alt="about"
                                                    width={100}
                                                    height={100}
                                                    style={{ objectFit: 'contain' }}
                                                />
                                            </Box>
                                        </motion.div>
                                    </Grid2>
                                ))
                            ) : (
                                <Typography>No data</Typography>
                            )}
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Container>

            <Loader />
        </Box>
    );
};

export default LoadMoreImage;
