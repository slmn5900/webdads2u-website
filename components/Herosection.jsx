'use client';
import React from 'react';
import { Container } from 'react-bootstrap';
import { IoSettingsOutline, IoShieldCheckmarkOutline } from 'react-icons/io5';
import { Box, Grid2 } from '@mui/material';

function Herosection() {
    return (
        <>
            <Box sx={{ height: '100%', }}>
                <Container>
                    <Grid2 container spacing={{ xs: 0, sm: 3 }}>
                        {/* Left Side */}
                        <Grid2 size={{ xs: 12, md: 8 }} position="relative">
                            <Box
                                position={{ sm: 'relative', md: 'absolute' }}
                                sx={{
                                    top: { md: '35%' },
                                    transform: { md: 'translateY(-50%)' },
                                    left: 0,
                                    right: 0,
                                    mx: 'auto',
                                    mt: { xs: '20px', sm: '50px', md: '40px' }
                                }}
                            >
                                {/* Heading + Text */}
                                <Box className="Hero-content">
                                    <Box
                                        component="h1"
                                        sx={{
                                            fontSize: { xs: 20, sm: 25, md: 25, lg: 40 },
                                            lineHeight: { xs: 1.5, sm: 1.2, md: 1.2, lg: 1.2 },
                                            fontWeight: 700,
                                            fontFamily: 'Poppins, Sans-serif',
                                            background: 'linear-gradient(to left, #262250 30%, #E40724)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            pb: '5px'
                                        }}
                                    >
                                        Better Digitalization Solution to <br /> Transform your Business
                                    </Box>
                                    <Box
                                        component="p"
                                        sx={{
                                            fontWeight: 500,
                                            fontFamily: 'Poppins, Sans-serif',
                                            background: 'linear-gradient(to left, #262250 30%, #E40724)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent'
                                        }}
                                    >
                                        Our expertise in bringing ideas to reality help your market place
                                    </Box>
                                </Box>

                                {/* Services */}
                                <Grid2 container spacing={2} className="mt-2">
                                    {/* Web Dev */}
                                    <Grid2 size={{ xs: 4, md: 4 }}>
                                        <a href="/website-development/" target="_self" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                            <Box
                                                sx={{
                                                    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
                                                    p: '10px',
                                                    display: 'flex',
                                                    borderRadius: '10px',
                                                    alignItems: 'center',
                                                    columnGap: '10px',
                                                    textAlign: 'center',
                                                    transition: 'all 0.3s ease',
                                                    justifyContent: { xs: 'center', md: 'flex-start' },
                                                    '&:hover': {
                                                        background: '#0E1839',
                                                        '& img': { filter: 'invert(100%)' },
                                                        '& h4': { color: '#fff !important' }
                                                    }
                                                }}
                                            >
                                                <Box
                                                    component="img"
                                                    src="/webdads icon.svg"
                                                    alt="webdevelopment"
                                                    sx={{
                                                        filter: 'invert(0%)',
                                                        transition: 'filter 0.3s ease'
                                                    }}
                                                />
                                                <Box
                                                    component="h4"
                                                    sx={{
                                                        fontSize: '14px',
                                                        fontFamily: 'Poppins',
                                                        textTransform: 'uppercase',
                                                        fontWeight: 400,
                                                        color: '#0E1839',
                                                        textAlign: 'start',
                                                        display: { xs: 'none', sm: 'block' }
                                                    }}
                                                >
                                                    Web Development
                                                </Box>
                                            </Box>
                                        </a>
                                    </Grid2>

                                    {/* Digital Marketing */}
                                    <Grid2 size={{ xs: 4, md: 4 }}>
                                        <a href="/digital-marketing-agency/" target="_self" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                            <Box
                                                sx={{
                                                    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
                                                    p: '10px',
                                                    display: 'flex',
                                                    borderRadius: '10px',
                                                    alignItems: 'center',
                                                    columnGap: '10px',
                                                    transition: 'all 0.3s ease',
                                                    justifyContent: { xs: 'center', md: 'flex-start' },
                                                    '&:hover': {
                                                        background: '#0E1839',
                                                        '& svg': { fill: '#fff', color: '#fff' },
                                                        '& h4': { color: '#fff !important' }
                                                    }
                                                }}
                                            >
                                                <IoSettingsOutline size={40} />
                                                <Box
                                                    component="h4"
                                                    sx={{
                                                        fontSize: '14px',
                                                        fontFamily: 'Poppins',
                                                        textTransform: 'uppercase',
                                                        fontWeight: 400,
                                                        color: '#0E1839',
                                                        display: { xs: 'none', sm: 'block' }
                                                    }}
                                                >
                                                    Digital Marketing
                                                </Box>
                                            </Box>
                                        </a>
                                    </Grid2>

                                    {/* CRM ERP */}
                                    <Grid2 size={{ xs: 4, md: 4 }}>
                                        <a href="/crm-erp-development/" target="_self" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                            <Box
                                                sx={{
                                                    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
                                                    p: '10px',
                                                    display: 'flex',
                                                    borderRadius: '10px',
                                                    alignItems: 'center',
                                                    columnGap: '10px',
                                                    transition: 'all 0.3s ease',
                                                    justifyContent: { xs: 'center', md: 'flex-start' },
                                                    '&:hover': {
                                                        background: '#0E1839',
                                                        '& svg': { fill: '#fff', color: '#fff' },
                                                        '& h4': { color: '#fff !important' }
                                                    }
                                                }}
                                            >
                                                <IoShieldCheckmarkOutline size={40} />
                                                <Box
                                                    component="h4"
                                                    sx={{
                                                        fontSize: '14px',
                                                        fontFamily: 'Poppins',
                                                        textTransform: 'uppercase',
                                                        fontWeight: 400,
                                                        color: '#0E1839',
                                                        display: { xs: 'none', sm: 'block' }
                                                    }}
                                                >
                                                    CRM & ERP Development
                                                </Box>
                                            </Box>
                                        </a>
                                    </Grid2>
                                </Grid2>
                            </Box>
                        </Grid2>

                        {/* Right Side Image */}
                        <Grid2 size={{ md: 4 }}>
                            <Box
                                className="robort"
                                sx={{
                                    position: 'relative',
                                    overflow: 'hidden',

                                    pt: { xs: '40px', md: '60px' },
                                    '& img': {
                                        transition: 'transform 0.3s ease',
                                        width: '100%',
                                        marginBottom: 'auto',
                                        // minHeight: 'calc(100vh - 60px)',
                                        // objectFit: { xs: 'scale-down', md: 'contain' },
                                        mr: 'auto',
                                    },
                                    '&:hover img': {
                                        transform: 'translate(10px, -5px)'
                                    },

                                }}
                            >
                                <Box
                                    display={{ xs: 'none', lg: 'block' }}
                                    component="img" className='ms-3' src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757316815/webdads2u/mainpage/webdesign-service.webp" alt="webdesign service" />
                            </Box>
                        </Grid2>
                    </Grid2>
                </Container>
            </Box>
        </>
    );
}

export default Herosection;
