<<<<<<< HEAD
import React from 'react'

function Industries() {
    return (
        <section className='Industries-main'>
            <div className="container">
                <div className="row Industries">
                    <div className="col-sm-12 col-lg-6 align-self-center">
                        <h1>Industries We Cater To</h1>
                        <p>Webdads2u extends its expertise across diverse industries, providing bespoke mobile app solutions. From healthcare to e-commerce, our team tailors applications to meet specific industry needs, ensuring optimum performance and user satisfaction.</p>
                        <a href="/contact-us"><button>Contact Us</button></a>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <div className="d-flex flex-wrap mb-3 justify-content-between Industries-item">
                            <div className="p-2 mb-1 flex-fill iteam"><img src="webdads/images/mobile-app-development/Fashion.png" alt="Fashion" className='img-fluid' />
                            <div className='text-big'>Fashion</div></div>
                            <div className="p-2 mb-1 flex-fill iteam"><img src="webdads/images/mobile-app-development/Helathcare.png" alt="Helathcare" className='img-fluid' />
                            <div className='text-big'>Healthcare</div></div>
                            <div className="p-2 mb-1 flex-fill iteam"><img src="webdads/images/mobile-app-development/Banking.png" alt="Banking" className='img-fluid' />
                            <div className='text-big'>Banking</div></div>
                            <div className="p-2 mb-1 flex-fill iteam"><img src="webdads/images/mobile-app-development/Insurance.png" alt="Insurance" className='img-fluid' />
                            <div className='text-big'>Insurance</div></div>
                            <div className="p-2 mb-1 flex-fill iteam"><img src="webdads/images/mobile-app-development/Retail.png" alt="Retail" className='img-fluid' />
                            <div className='text-big'>Retail</div></div>
                            <div className="p-2 mb-1 flex-fill iteam"><img src="webdads/images/mobile-app-development/Fashion.png" alt="Fashion" className='img-fluid' />
                            <div className='text-big'>Automobile</div></div>
                            <div className="p-2 mb-1 flex-fill iteam"><img src="webdads/images/mobile-app-development/Education.png" alt="Education" className='img-fluid' />
                            <div className='text-big'>Healthcare</div></div>
                            <div className="p-2 mb-1 flex-fill iteam"><img src="webdads/images/mobile-app-development/Real-Estate.png" alt="Real estate" className='img-fluid' />
                            <div className='text-big'>Banking</div></div>
                            <div className="p-2 mb-1 flex-fill iteam"><img src="webdads/images/mobile-app-development/Manufacturing.png" alt="Manufacturing" className='img-fluid' />
                            <div className='text-big'>Insurance</div></div>
                            <div className="p-2 mb-1 flex-fill iteam"><img src="webdads/images/mobile-app-development/Hospitality.png" alt="Travel and Hospitality" className='img-fluid' />
                            <div className='text-big'>Retail</div></div>
                        </div>
                        {/* <div className="d-flex flex-wrap mb-3 justify-content-between Industries-item">
                            <div className="p-2 mb-1 flex-fill iteam"><img src="webdads/images/mobile-app-development/Fashion.png" alt="Fashion" className='img-fluid' />
                            <div className='text-big'>Automobile</div></div>
                            <div className="p-2 mb-1 flex-fill iteam"><img src="webdads/images/mobile-app-development/Education.png" alt="Education" className='img-fluid' />
                            <div className='text-big'>Healthcare</div></div>
                            <div className="p-2 mb-1 flex-fill iteam"><img src="webdads/images/mobile-app-development/Real-Estate.png" alt="Real estate" className='img-fluid' />
                            <div className='text-big'>Banking</div></div>
                            <div className="p-2 mb-1 flex-fill iteam"><img src="webdads/images/mobile-app-development/Manufacturing.png" alt="Manufacturing" className='img-fluid' />
                            <div className='text-big'>Insurance</div></div>
                            <div className="p-2 mb-1 flex-fill iteam"><img src="webdads/images/mobile-app-development/Hospitality.png" alt="Travel and Hospitality" className='img-fluid' />
                            <div className='text-big'>Retail</div></div>
                        </div> */}
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Industries
=======

import React from 'react';
import { Box, Container, Grid2, Typography, Button } from '@mui/material';
import { useContext } from 'react';
import { MenuContext } from '../../../layout/context/menucontext';

// const industries = [
//     { img: 'webdads/images/mobile-app-development/Fashion.png', title: 'Fashion' },
//     { img: 'webdads/images/mobile-app-development/Helathcare.png', title: 'Healthcare' },
//     { img: 'webdads/images/mobile-app-development/Banking.png', title: 'Banking' },
//     { img: 'webdads/images/mobile-app-development/Insurance.png', title: 'Insurance' },
//     { img: 'webdads/images/mobile-app-development/Retail.png', title: 'Retail' },
//     { img: 'webdads/images/mobile-app-development/Fashion.png', title: 'Automobile' },
//     { img: 'webdads/images/mobile-app-development/Education.png', title: 'Healthcare' },
//     { img: 'webdads/images/mobile-app-development/Real-Estate.png', title: 'Banking' },
//     { img: 'webdads/images/mobile-app-development/Manufacturing.png', title: 'Insurance' },
//     { img: 'webdads/images/mobile-app-development/Hospitality.png', title: 'Retail' }
// ];

function Industries() {

    const { pagedata } = useContext(MenuContext);
    const title = pagedata?.cater_card_section?.title
    const description = pagedata?.cater_card_section?.description
    const button = pagedata?.cater_card_section?.button
    const cards = pagedata?.cater_card_section?.cards
    return (
        <Box
            sx={{
                py: { xs: 4, md: 8 }
            }}
        >
            <Container>
                <Grid2 container spacing={4} alignItems="center">
                    {/* Left Side */}
                    <Grid2 size={{ xs: 12, md: 5 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                color: '#262250',
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 600,
                                fontSize: { xs: '25px', md: '30px' },
                                mb: 2
                            }}
                        >
                            {title}
                        </Typography>
                        <Typography
                            sx={{
                                textAlign: 'justify',
                                color: '#000',
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: { xs: '13px', md: '14px' },
                                fontWeight: 400,
                                mb: 3
                            }}
                        >
                            {description}
                        </Typography>

                        <Button
                            href="/contact-us"
                            sx={{
                                color: '#fff',
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 500,
                                textTransform: 'none',
                                backgroundImage: 'linear-gradient(90deg, #59016e 0%, #c30002 50%)',
                                borderRadius: '30px',
                                px: 7,
                                py: 2,
                                '&:hover': {
                                    backgroundImage: 'linear-gradient(90deg, #59016e 0%, #c30002 100%)'
                                }
                            }}
                        >
                            {button}
                        </Button>
                    </Grid2>

                    {/* Right Side (Industries Grid2) */}
                    <Grid2 size={{ xs: 12, md: 7 }}>
                        <Grid2 container spacing={2} justifyContent='space-between'>
                            {cards.map((item, index) => (
                                <Grid2
                                    size={{ xs: 6, sm: 4, md: 2.2 }}
                                    key={index}
                                    sx={{
                                        boxShadow: '5px 5px 10px -6px rgba(0,0,0,0.5)',
                                        transition: 'all 0.3s',
                                        borderRadius: '10px',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={item.icon}
                                        alt={item.text}
                                        sx={{
                                            width: '68px',
                                            mx: 'auto',
                                            mb: 1,
                                            display: 'block'
                                        }}
                                    />
                                    <Typography
                                        sx={{
                                            color: '#000',
                                            fontFamily: 'Poppins, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: 700,
                                            textAlign: 'center'
                                        }}
                                    >
                                        {item.text}
                                    </Typography>
                                </Grid2>
                            ))}
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
}

export default Industries;
>>>>>>> a0d19cc (Initial commit)
