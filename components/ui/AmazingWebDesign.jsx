import React from 'react';
import { Container, Grid2, Typography, Box, Card, CardContent, Link } from '@mui/material';
import { useContext } from 'react';
import { MenuContext } from '../../layout/context/menucontext';

const AmazingWebDesign = () => {
    const { amazingcard_section } = useContext(MenuContext);
    const title = amazingcard_section?.title;
    const description = amazingcard_section?.description;
    const cards = amazingcard_section?.cards || [];

    return (
        <Box sx={{ py: 5, backgroundColor: '#f5f5f5' }}>
            <Container>
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <Typography
                        variant="h3"
                        component="h3"
                        sx={{
                            fontWeight: 'bold',
                            fontSize: { xs: '1.5rem', md: '2rem' }
                        }}
                    >
                        {title}
                    </Typography>
                    {description && (
                        <Box component={'p'} sx={{ fontFamily: 'Poppins', fontSize: '12px', mt: 2 }}>
                            {description}
                        </Box>
                    )}
                </Box>
                <Container>
                    <Grid2 container spacing={2}>
                        {cards.map((item, index) => (
                            <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: cards.length === 3 ? 4 : 3 }} key={index}>
                                <Card
                                    sx={{
                                        mt: 2,
                                        // width: 230,
                                        height: '300px', // Fixed height for all cards
                                        minHeight: '300px', // Ensures minimum height
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        transition: 'all 0.4s',
                                        backgroundColor: 'white',
                                        '&:hover': {
                                            transform: 'translate3d(0, -15px, 10px)',
                                            backgroundColor: '#e4155b',
                                            '& .MuiTypography-h5': {
                                                color: '#fff'
                                            },
                                            '& .MuiTypography-body2': {
                                                color: '#fff'
                                            },
                                            '& img': {
                                                filter: 'brightness(0) invert(1)'
                                            }
                                        }
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={item?.icon || item.img}
                                        alt={item.title}
                                        sx={{
                                            mt: 2,
                                            width: '30%',
                                            height: '30%',
                                            objectFit: 'contain',
                                            transition: 'filter 0.4s',
                                            backgroundColor: "'#e4155b"
                                        }}
                                    />

                                    <CardContent
                                        sx={{
                                            flexGrow: 1,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            textAlign: 'center',
                                            
                                        }}
                                    >
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h6"
                                            sx={{
                                                fontWeight: 'bold',
                                                transition: 'color 0.4s',
                                                fontSize: '18px',
                                                textAlign: 'center',
                                                width: '100%'
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{
                                                transition: 'color 0.4s',
                                                textAlign: 'center',
                                                width: '100%'
                                            }}
                                        >
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid2>
                        ))}
                    </Grid2>
                </Container>
            </Container>
        </Box>
    );
};

export default AmazingWebDesign;
