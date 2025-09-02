<<<<<<< HEAD
"use client"
=======
'use client';
>>>>>>> a0d19cc (Initial commit)
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
import { Box, Grid2 } from '@mui/material';

function Herosection() {
    return (
        <>
            <section className="">
<<<<<<< HEAD
                <Container >
                    <Grid2 container spacing={3} >
                        <Grid2 size={{ md: 7 }} position={"relative"}>
                            <Box position={{ sm: "relative", md: "absolute" }}
=======
                <Container>
                    <Grid2 container spacing={{ xs: 0, sm: 3 }}>
                        <Grid2 size={{xs:12, md: 7 }} position={'relative'}>
                            <Box
                                position={{ sm: 'relative', md: 'absolute' }}
>>>>>>> a0d19cc (Initial commit)
                                // sx={{
                                //     top: { sm:"-50%",md: "0%", lg: "0%" },
                                //     left: { md: "20%", lg: "-45%" },
                                //     // bottom: '',
                                //     transform: 'translate(50% , 50%)',
                                // }}
                                sx={{
<<<<<<< HEAD
                                    top: { xs: "none", sm: "none", md: '35%' },
                                    transform: {
                                        xs: "none", sm: "none", md: 'translateY(-50%)'
=======
                                    top: { xs: 'none', sm: 'none', md: '35%' },
                                    transform: {
                                        xs: 'none',
                                        sm: 'none',
                                        md: 'translateY(-50%)'
>>>>>>> a0d19cc (Initial commit)
                                    },
                                    left: 0, // or a specific value
                                    right: 0, // optional
                                    mx: 'auto',
<<<<<<< HEAD
                                    mt: "25px"

                                }
                                }
                            >

                                <div className="Hero-content">
                                    <h1>Better Digitalization Solution to <br /> Transform your Business</h1>
                                    <p>Our expertise in bringing ideas to reality help your market place </p>
                                </div>

                                <Grid2 container spacing={2} className='mt-2'>
                                    <Grid2 size={{ xs: 4, md: 4, }}>
=======
                                    marginTop: { xs: '20px', sm: '50px', md: '25px', lg: '25px' }
                                }}
                            >
                                <div className="Hero-content">
                                    <Box component="h1" sx={{ fontSize: { xs: 20, sm: 25, md: 25, lg: 45 }, lineHeight: { xs: 1.5, sm: 1.2, md: 1.2, lg: 1.2 } }}>
                                        Better Digitalization Solution to <br /> Transform your Business
                                    </Box>
                                    <p>Our expertise in bringing ideas to reality help your market place </p>
                                </div>

                                <Grid2 container spacing={2} className="mt-2">
                                    <Grid2 size={{ xs: 4, md: 4 }}>
>>>>>>> a0d19cc (Initial commit)
                                        <a
                                            href="/website-development/"
                                            rel="noopener noreferrer"
                                            target="_self"
                                            className="text-decoration-none"
                                            style={{ color: 'inherit' }} // Inherit color from parent
                                        >
                                            <div className="service-icon">
                                                <img src="/webdads icon.svg" alt="" />

<<<<<<< HEAD
                                                <h4 style={{ fontFamily: "Poppins", }}>Web Development</h4>
                                            </div>
                                        </a>
                                    </Grid2>
                                    <Grid2 size={{ xs: 4, md: 4, }}>
=======
                                                <h4 style={{ fontFamily: 'Poppins' }}>Web Development</h4>
                                            </div>
                                        </a>
                                    </Grid2>
                                    <Grid2 size={{ xs: 4, md: 4 }}>
>>>>>>> a0d19cc (Initial commit)
                                        <a
                                            href="/digital-marketing-agency/"
                                            rel="noopener noreferrer"
                                            target="_self"
                                            className="text-decoration-none" // Bootstrap classes for text decoration and color
                                            style={{ color: 'inherit' }} // Inherit color from parent
                                        >
                                            <div className="service-icon">
                                                <IoSettingsOutline />
<<<<<<< HEAD
                                                <h4 style={{ fontFamily: "Poppins", }}>Digital Marketing</h4>
                                            </div>
                                        </a>
                                    </Grid2>
                                    <Grid2 size={{ xs: 4, md: 4, }}>
=======
                                                <h4 style={{ fontFamily: 'Poppins' }}>Digital Marketing</h4>
                                            </div>
                                        </a>
                                    </Grid2>
                                    <Grid2 size={{ xs: 4, md: 4 }}>
>>>>>>> a0d19cc (Initial commit)
                                        <a
                                            href="/crm-erp-development/"
                                            rel="noopener noreferrer"
                                            target="_self"
                                            className="text-decoration-none" // Bootstrap classes for text decoration and color
                                            style={{ color: 'inherit' }} // Inherit color from parent
                                        >
                                            <div className="service-icon crm-icn">
                                                <IoShieldCheckmarkOutline />
<<<<<<< HEAD
                                                <h4 style={{ fontFamily: "Poppins", }}>CRM & ERP Development</h4>
=======
                                                <h4 style={{ fontFamily: 'Poppins' }}>CRM & ERP Development</h4>
>>>>>>> a0d19cc (Initial commit)
                                            </div>
                                        </a>
                                    </Grid2>
                                </Grid2>
                            </Box>
                        </Grid2>
<<<<<<< HEAD
                        <Grid2 size={{ md: 5 }}  >
                            <div className="robort mt-2 ">
                                <Box component="img" src="/webdads/images/home/robart.webp" alt="Web Design Company In Chennai & Web Development Company In Chennai" className="img-fluid" sx={{ objectFit: { xs: "scale-down", md: "contain" }, marginRight: "auto" }} />
=======
                        <Grid2 size={{ md: 5 }}>
                            <div className="robort mt-2 ">
                                <Box
                                    component="img"
                                    src="/webdads/images/home/robart.webp"
                                    alt="Web Design Company In Chennai & Web Development Company In Chennai"
                                    className="img-fluid"
                                    sx={{ objectFit: { xs: 'scale-down', md: 'contain' }, marginRight: 'auto' }}
                                />
>>>>>>> a0d19cc (Initial commit)
                            </div>
                        </Grid2>
                    </Grid2>
                </Container>
<<<<<<< HEAD
            </section >
=======
            </section>
>>>>>>> a0d19cc (Initial commit)
            {/* <Formsection/>
     <Industries/> */}
        </>
    );
}

export default Herosection;
