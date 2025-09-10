import React from 'react';
import { Box, Container, Grid2, Card, Typography } from '@mui/material';
import { useContext } from 'react';
import { MenuContext } from '../../../layout/context/menucontext';
// const cards = [
//     {
//         img: '/webdads/images/mobile-app-development/download.png',
//         title: 'IOS App Development',
//         type: 'ios'
//     },
//     {
//         img: '/webdads/images/mobile-app-development/download-an.png',
//         title: 'Android App Development',
//         type: 'android'
//     },
//     {
//         img: '/webdads/images/mobile-app-development/download-react.png',
//         title: 'React Native App Development',
//         type: 'ios'
//     },
//     {
//         img: '/webdads/images/mobile-app-development/download-app.png',
//         title: 'Mobile App UI/Ux Development',
//         type: 'android'
//     },
//     {
//         img: '/webdads/images/mobile-app-development/download-react.png',
//         title: 'Flutter App Development',
//         type: 'ios'
//     }
// ];

export default function OurStreamscard() {
    const { ourstreams } = useContext(MenuContext);
    const cards = ourstreams?.cards || [];

    return (
        <Box component="section" sx={{ py: { xs: 4, md: 6 } }}>
            <Container>
                <Grid2 container spacing={2} justifyContent="center" alignItems="stretch">
                    {cards.map((card, index) => (
                        <Grid2 size={{ xs: 122, sm: 6, md: 4, lg: 2.4 }} key={index}>
                            <Card
                                sx={{
                                    p: '50px 35px 45px 35px',
                                    textAlign: 'center',
                                    borderRadius: card.type === 'ios' ? '30px 30px 0px 30px' : '30px 30px 30px 0px',
                                    backgroundColor: '#fff',
                                    boxShadow: '0px 0px 10px rgba(216, 214, 214, 0.7)',
                                    transition: '0.4s',
                                    color: '#4d4d4d',
                                    '&:hover': {
                                        backgroundImage: 'linear-gradient(31deg, #59016e 29%, #c30002 100%)',
                                        backgroundColor: 'transparent',
                                        transform: 'translate3d(0, -30px, 10px)',
                                        color: 'white'
                                    },
                                    ':active': {
                                        color: 'white'
                                    }
                                }}
                            >
                                <Box
                                    component="img"
                                    src={card.icon}
                                    alt={card.title}
                                    sx={{
                                        display: 'block',
                                        mx: 'auto',
                                        width: '40px',
                                        mb: 1,
                                        transition: 'transform 0.3s',
                                        '&:hover': {
                                            transform: 'scale(1.1)'
                                        }
                                    }}
                                />
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: '13px',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {card.description}
                                </Typography>
                            </Card>
                        </Grid2>
                    ))}
                </Grid2>
            </Container>
        </Box>
    );
}
