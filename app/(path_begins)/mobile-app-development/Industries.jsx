import React from 'react';
import { Box, Container, Grid2, Typography, Button } from '@mui/material';
import { useContext } from 'react';
import { MenuContext } from '../../../layout/context/menucontext';
import Title from '../../../components/Title';
import Description from '../../../components/Description';

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
    const title = pagedata?.cater_card_section?.title;
    const description = pagedata?.cater_card_section?.description;
    const button = pagedata?.cater_card_section?.button;
    const cards = pagedata?.cater_card_section?.cards;
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
                        {/* <Typography
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
                        </Typography> */}

                        <Title title={title} />
                        <Description Des={description} />
                        {/* <Typography
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
                        </Typography> */}

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
                        <Grid2 container spacing={2} justifyContent="space-between">
                            {cards.map((item, index) => (
                                <Grid2
                                    size={{ xs: 6, sm: 4, md: 2.2 }}
                                    key={index}
                                    sx={{
                                        boxShadow: '5px 5px 10px -6px rgba(0,0,0,0.5)',
                                        transition: 'all 0.3s',
                                        borderRadius: '10px',
                                        textAlign: 'center'
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
