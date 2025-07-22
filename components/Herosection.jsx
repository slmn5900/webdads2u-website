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
import { Box, Grid2 } from '@mui/material';

function Herosection() {
    return (
        <>
            <section className="">
                <Container >
                    <Grid2 container spacing={3} >
                        <Grid2 size={{ md: 7 }} position={"relative"}>
                            <Box position={{ sm: "relative", md: "absolute" }}
                                // sx={{
                                //     top: { sm:"-50%",md: "0%", lg: "0%" },
                                //     left: { md: "20%", lg: "-45%" },
                                //     // bottom: '',
                                //     transform: 'translate(50% , 50%)',
                                // }}
                                sx={{
                                    top: { xs: "none", sm: "none", md: '35%' },
                                    transform: {
                                        xs: "none", sm: "none", md: 'translateY(-50%)'
                                    },
                                    left: 0, // or a specific value
                                    right: 0, // optional
                                    mx: 'auto',
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
                                    </Grid2>
                                    <Grid2 size={{ xs: 4, md: 4, }}>
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
                                    </Grid2>
                                    <Grid2 size={{ xs: 4, md: 4, }}>
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
                                    </Grid2>
                                </Grid2>
                            </Box>
                        </Grid2>
                        <Grid2 size={{ md: 5 }}  >
                            <div className="robort mt-2 ">
                                <Box component="img" src="/webdads/images/home/robart.webp" alt="Web Design Company In Chennai & Web Development Company In Chennai" className="img-fluid" sx={{ objectFit: { xs: "scale-down", md: "contain" }, marginRight: "auto" }} />
                            </div>
                        </Grid2>
                    </Grid2>
                </Container>
            </section >
            {/* <Formsection/>
     <Industries/> */}
        </>
    );
}

export default Herosection;
