'use client';
import React from 'react';
import { Container } from 'react-bootstrap';
import { IoSettingsOutline } from 'react-icons/io5';
import { IoShieldCheckmarkOutline } from 'react-icons/io5';
import { Box, Grid2 } from '@mui/material';

function Herosection() {
    return (
        <>
            <section className="">
                <Container>
                    <Grid2 container spacing={{ xs: 0, sm: 3 }}>
                        <Grid2 size={{ xs: 12, md: 7 }} position={'relative'}>
                            <Box
                                position={{ sm: 'relative', md: 'absolute' }}
                                sx={{
                                    top: { xs: 'none', sm: 'none', md: '35%' },
                                    transform: {
                                        xs: 'none',
                                        sm: 'none',
                                        md: 'translateY(-50%)'
                                    },
                                    left: 0, // or a specific value
                                    right: 0, // optional
                                    mx: 'auto',
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
                                        {/* <a href="/website-development/" rel="noopener noreferrer" target="_self" className="text-decoration-none" style={{ color: 'inherit' }}>
                                            <div
                                                className="service-icon"
                                                style={{
                                                    textAlign: 'center',
                                                    transition: 'all 0.3s ease'
                                                }}
                                            >
                                                <Box
                                                    component="img"
                                                    src="/webdads icon.svg"
                                                    alt=""
                                                    sx={{
                                                        transition: 'filter 0.3s ease',
                                                        filter: 'invert(0%)', // original color
                                                        '&:hover': {
                                                            filter: 'invert(100%)', // turns white on hover
                                                            transition: 'filter 0.3s ease'
                                                        }
                                                    }}
                                                />
                                                <h4 style={{ fontFamily: 'Poppins', alignItems: 'center' }}>Web Development</h4>
                                            </div>
                                        </a> */}
                                        <a href="/website-development/" rel="noopener noreferrer" target="_self" className="text-decoration-none" style={{ color: 'inherit' }}>
                                            <Box
                                                className="service-icon"
                                                sx={{
                                                    textAlign: 'center',
                                                    transition: 'all 0.3s ease',
                                                    '&:hover img': {
                                                        filter: 'invert(100%)' // icon turns white when parent is hovered
                                                    }
                                                }}
                                            >
                                                <Box
                                                    component="img"
                                                    src="/webdads icon.svg"
                                                    alt=""
                                                    sx={{
                                                        filter: 'invert(0%)', // original color
                                                        transition: 'filter 0.3s ease'
                                                    }}
                                                />
                                                <h4 style={{ fontFamily: 'Poppins', alignItems: 'center' }}>Web Development</h4>
                                            </Box>
                                        </a>
                                    </Grid2>
                                    <Grid2 size={{ xs: 4, md: 4 }}>
                                        <a
                                            href="/digital-marketing-agency/"
                                            rel="noopener noreferrer"
                                            target="_self"
                                            className="text-decoration-none" // Bootstrap classes for text decoration and color
                                            style={{ color: 'inherit' }} // Inherit color from parent
                                        >
                                            <div className="service-icon">
                                                <IoSettingsOutline />
                                                <h4 style={{ fontFamily: 'Poppins' }}>Digital Marketing</h4>
                                            </div>
                                        </a>
                                    </Grid2>
                                    <Grid2 size={{ xs: 4, md: 4 }}>
                                        <a
                                            href="/crm-erp-development/"
                                            rel="noopener noreferrer"
                                            target="_self"
                                            className="text-decoration-none" // Bootstrap classes for text decoration and color
                                            style={{ color: 'inherit' }} // Inherit color from parent
                                        >
                                            <div className="service-icon crm-icn">
                                                <IoShieldCheckmarkOutline />
                                                <h4 style={{ fontFamily: 'Poppins' }}>CRM & ERP Development</h4>
                                            </div>
                                        </a>
                                    </Grid2>
                                </Grid2>
                            </Box>
                        </Grid2>
                        <Grid2 size={{ md: 5 }}>
                            <div className="robort mt-2 ">
                                <Box
                                    component="img"
                                    src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757316815/webdads2u/mainpage/webdesign-service.webp"
                                    alt="webdesign-service"
                                    className="img-fluid"
                                    sx={{ objectFit: { xs: 'scale-down', md: 'contain' }, marginRight: 'auto' }}
                                />
                            </div>
                        </Grid2>
                    </Grid2>
                </Container>
            </section>
            {/* <Formsection/>
     <Industries/> */}
        </>
    );
}

export default Herosection;
