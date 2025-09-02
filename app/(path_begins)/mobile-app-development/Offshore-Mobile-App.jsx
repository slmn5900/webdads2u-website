<<<<<<< HEAD
import React from 'react'
import Card from 'react-bootstrap/Card';

function OffshoreMobileApp() {
    return (
        <section className='OffshoreMobileApp-main'>
            <div className="container">
                <div className="row OffshoreMobileApp">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <h1>Your Offshore Mobile App Development Partner</h1>
                        <p>We excel in delivering superior offshore mobile app development services, handling all your needs with a focus on timely delivery.</p>
                        <img src="webdads/images/mobile-app-development/img-aimobie-oj3vd06mvhytqzjmq4ypkl4ud3heq6b94t4bj1751k-ptf8pfsgro6khho3ufbwjv0ef55e8avv0bk.png" alt="img-aimobie-oj3vd06mvhytqzjmq4ypkl4ud3heq6b94t4bj1751k-ptf8pfsgro6khho3ufbwjv0ef55e8avv0bk" loading='lazy' className='img-fluid' />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
                        <Card >
                        <Card.Title>True mobility</Card.Title>
                            <Card.Body className='p-0'>While mobile devices becoming increasingly complex they are still mobile.</Card.Body>
                        </Card>

                        <Card className='card-fouce'>
                        <Card.Title>Optimized for different screen sizes</Card.Title>
                            <Card.Body className='p-0'>Our design is always optimized for different devices and screen sizes.</Card.Body>
                        </Card>

                        <Card >
                        <Card.Title>Details that matter for users</Card.Title>
                            <Card.Body className='p-0'>Small things make a big difference between success and failure.</Card.Body>
                        </Card>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default OffshoreMobileApp
=======
import React from 'react';
import { useContext } from 'react';
import { MenuContext } from '../../../layout/context/menucontext';
import { Box, Grid2, Typography, Card, CardContent } from '@mui/material';

function OffshoreMobileApp() {
    const { pagedata } = useContext(MenuContext);

    const title = pagedata?.offshore_section?.title;
    const description = pagedata?.offshore_section?.description;
    const img = pagedata?.offshore_section?.img;

    return (
        <Box
            component="section"
            sx={{
                py: { xs: 4, md: 8 },
                pl: { xs: 0, md: 15 },
                p: { xs: 2, md: 0 }
            }}
        >
            <Grid2
                container
                spacing={4}
                sx={{
                    alignItems: 'center'
                }}
            >
                {/* Left Column */}
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <Typography
                        variant="h3"
                        sx={{
                            color: '#262250',
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: { xs: '28px', md: '36px' },
                            fontWeight: 600,
                            mb: 2
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        sx={{
                            textAlign: 'justify',
                            color: '#000000',
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '16px',
                            fontWeight: 400,
                            mb: 3
                        }}
                    >
                        {' '}
                        {description}
                    </Typography>
                    <Box
                        component="img"
                        src={img}
                        alt="Offshore Mobile App"
                        loading="lazy"
                        sx={{
                            display: 'block',
                            mx: 'auto',
                            width: { xs: '100%', sm: '80%', md: '550px' },
                            maxWidth: '100%'
                        }}
                    />
                </Grid2>

                {/* Right Column */}
                <Grid2 size={{ xs: 12, md: 6 }}>
                    {/* Card 1 */}
                    <Card
                        sx={{
                            backgroundColor: '#ffffff',
                            width: { xs: '100%', sm: '24rem' },
                            border: 'none',
                            borderRadius: '5px',
                            textAlign: 'justify',
                            boxShadow: '0px 0px 10px rgba(216, 214, 214, 0.7)',
                            p: 3,
                            mb: 5,
                            transition: '0.4s',
                            '&:hover': {
                                color: '#ffffff',
                                backgroundImage: 'linear-gradient(31deg, #59016e 29%, #c30002 100%)',
                                transform: 'translate3d(20px, 0, 0)'
                            }
                        }}
                    >
                        <Typography
                            sx={{
                                color: '#262250',
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '17px',
                                fontWeight: 500,
                                mb: 2
                            }}
                        >
                            True mobility
                        </Typography>
                        <CardContent sx={{ p: 0, color: '#000', textAlign: 'justify' }}>While mobile devices becoming increasingly complex they are still mobile.</CardContent>
                    </Card>

                    {/* Card 2 - Focus */}
                    <Card
                        sx={{
                            color: '#ffffff',
                            ml: { xs: 0, md: 6 },
                            p: 3,
                            backgroundImage: 'linear-gradient(31deg, #59016e 29%, #c30002 100%)',
                            border: 'none',
                            borderRadius: '5px',
                            mb: 5,
                            boxShadow: '0px 0px 10px rgba(216, 214, 214, 0.7)',
                            width: { xs: '100%', sm: '24rem' }
                        }}
                    >
                        <Typography
                            sx={{
                                color: '#ffffff',
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '20px',
                                fontWeight: 500,
                                mb: 2
                            }}
                        >
                            Optimized for different screen sizes
                        </Typography>
                        <CardContent sx={{ p: 0, color: '#ffffff', textAlign: 'justify' }}>Our design is always optimized for different devices and screen sizes.</CardContent>
                    </Card>

                    {/* Card 3 */}
                    <Card
                        sx={{
                            backgroundColor: '#ffffff',
                            width: { xs: '100%', sm: '24rem' },
                            border: 'none',
                            borderRadius: '5px',
                            textAlign: 'justify',
                            boxShadow: '0px 0px 10px rgba(216, 214, 214, 0.7)',
                            p: 3,
                            mb: 5,
                            transition: '0.4s',
                            '&:hover': {
                                color: '#ffffff',
                                backgroundImage: 'linear-gradient(31deg, #59016e 29%, #c30002 100%)',
                                transform: 'translate3d(20px, 0, 0)'
                            }
                        }}
                    >
                        <Typography
                            sx={{
                                color: '#262250',
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '17px',
                                fontWeight: 500,
                                mb: 2
                            }}
                        >
                            Details that matter for users
                        </Typography>
                        <CardContent sx={{ p: 0, color: '#000', textAlign: 'justify' }}>Small things make a big difference between success and failure.</CardContent>
                    </Card>
                </Grid2>
            </Grid2>
        </Box>
    );
}

export default OffshoreMobileApp;
>>>>>>> a0d19cc (Initial commit)
