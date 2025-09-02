<<<<<<< HEAD
import React from 'react'

function SearchingBestobile() {
    return (
        <section className='SearchingBestobile-main'>
            <div className="container">
                <div className="row SearchingBestobile">
                    <div className="col-sm-12 col-md-12 col-lg-6 align-self-center">
                        <div className="d-flex flex-row">
                            <div><img src="webdads/images/mobile-app-development/Mobile.png" alt="Mobile" className='img-fluid vert-move mt-3' /></div>
                            <div><img src="webdads/images/mobile-app-development/cost-t.png" alt="cost-t" className='img-fluid vert-move' /></div>
                            <div><img src="webdads/images/mobile-app-development/cost-m.png" alt="cost-m" className='img-fluid vert-move mt-2' /></div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <h1>Searching for the Best Mobile Application Development Services for Your Business?</h1>
                        <p>Searching for the Best Mobile Application Development Service in Chennai for Your Business? Look no further. Webdads2u offers top-notch mobile application development services tailored to your business needs. Transform your ideas into reality and stay ahead in the competitive digital market.</p>
                        <h4>Elevating your business with our customized mobile app solutions</h4>
                        <a href="/contact-us"><button className='text-sm-center'>Contact us</button></a>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="row SearchingBestobile-card justify-content-md-start text-center text-sm-center text-md-start">
                    <div className="col-sm-12 col-md-8 col-lg-4 ">
                        <div className="card d-flex flex-column flex-md-row flex-lg-row mb-3">
                            <div className="p-2 align-self-center"><img src="webdads/images/mobile-app-development/time.png" alt="time" className='img-fluid' /></div>
                            <div className="p-2">
                                <h1>The Time Frame</h1>
                                <p>The Time Frame
                                    The cost of design increases when the project is time limited.</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-4">
                        <div className="card d-flex flex-column flex-md-row flex-lg-row mb-3">
                            <div className="p-2 align-self-center" ><img src="webdads/images/mobile-app-development/complicity.png" alt="complicity" className='img-fluid' /></div>
                            <div className="p-2"><h1>The Complexity</h1>
                                <p>Complex mobile apps require more effort from designers.</p></div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-4">
                        <div className="card d-flex flex-column flex-md-row flex-lg-row mb-3">
                            <div className="p-2 align-self-center"><img src="webdads/images/mobile-app-development/revision.png" alt="revision" className='img-fluid' /></div>
                            <div className="p-2"><h1>The Number Of Revisions</h1>
                                <p>The more design revisions you want to get, the higher cost.</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SearchingBestobile
=======
import React, { useContext } from 'react';
import { Box, Grid2, Typography, Button, keyframes, Container } from '@mui/material';
import { MenuContext } from '../../../layout/context/menucontext';

// Animation keyframes
const mover = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-10px); }
`;

export default function SearchingBestobile() {
    const { best_mobile_section } = useContext(MenuContext);

    // Section data from JSON
    const images = best_mobile_section?.img || [];
    const title = best_mobile_section?.title || '';
    const description = best_mobile_section?.description || '';
    const description2 = best_mobile_section?.['description-2'] || '';
    const buttonText = best_mobile_section?.button || 'Contact us';

    return (
        <Box
            sx={{
                py: { xs: 4, md: 8 },
                backgroundColor: '#f4fcfe'
            }}
        >
            <Container>
                {/* Main Row */}
                <Grid2 container spacing={4} alignItems="center" sx={{ px: { xs: 2, md: 4 } }}>
                    {/* Left Side - Images */}
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Box display="flex" flexDirection="row" justifyContent="center">
                            {images.map((src, idx) => (
                                <Box
                                    key={idx}
                                    component="img"
                                    src={src}
                                    alt={`mobile-${idx}`}
                                    sx={{
                                        width: '30%',
                                        height: 'auto',
                                        mt: idx === 0 ? 3 : idx === 2 ? 2 : 0,
                                        mx: idx === 1 ? 1 : 0,
                                        animation: `${mover} 1s infinite alternate`
                                    }}
                                />
                            ))}
                        </Box>
                    </Grid2>

                    {/* Right Side - Text */}
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Typography
                            variant="h5"
                            sx={{
                                color: '#262250',
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 600,
                                mb: 1
                            }}
                        >
                            {title}
                        </Typography>
                        <Typography
                            sx={{
                                textAlign: 'justify',
                                color: '#000',
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '16px',
                                fontWeight: 400,
                                mb: 2
                            }}
                        >
                            {description}
                        </Typography>
                        <Typography
                            sx={{
                                textAlign: 'justify',
                                color: '#000',
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '14px',
                                fontWeight: 700
                            }}
                        >
                            {description2}
                        </Typography>
                        <Button
                            href="/contact-us"
                            sx={{
                                color: '#fff',
                                backgroundImage: 'linear-gradient(90deg, #59016e 0%, #c30002 50%)',
                                borderRadius: '30px',
                                border: '1px solid transparent',
                                py: '19px',
                                px: '70px',
                                mt: 3,
                                '&:hover': {
                                    backgroundImage: 'linear-gradient(90deg, #59016e 0%, #c30002 100%)'
                                }
                            }}
                        >
                            {buttonText}
                        </Button>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
}
>>>>>>> a0d19cc (Initial commit)
