import React, { useContext } from 'react';
import { Container, Typography, Box, Card, CardContent, Tooltip, Grid2 } from '@mui/material';
import { MenuContext } from '../../layout/context/menucontext';
import Title from '../Title';
import Description from '../Description';

const AmazingWebDesign = () => {
    const { amazingcard_section } = useContext(MenuContext);
    const title = amazingcard_section?.title;
    const description = amazingcard_section?.description;
    const cards = amazingcard_section?.cards || [];

    // Helper function to trim to 50 words
    const trimText = (text, wordLimit = 10) => {
        if (!text) return '';
        const words = text.split(' ');
        if (words.length <= wordLimit) return text;
        return words.slice(0, wordLimit).join(' ') + '...';
    };

    return (
        <Box sx={{ py: { xs: 3, md: 0 } }}>
            <Container>
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                    {/* <Typography
                        variant="h3"
                        component="h3"
                        sx={{
                            fontWeight: 'bold',
                            fontSize: { xs: '1.5rem', md: '2rem' }
                        }}
                    >
                        {title}
                    </Typography> */}

                    <Title title={title} />
                    {description && (
                        // <Box textAlign={{ xs: 'left', md: 'center' }}>
                            <Description mdalign="center" Des={description} />
                        // </Box>
                    )}
                </Box>

                <Container>
                    <Grid2 container spacing={2}>
                        {cards.map((item, index) => (
                            <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 4 }} key={index}>
                                <Card
                                    sx={{
                                        mt: 2,
                                        height: '250px',
                                        minHeight: '300px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        transition: 'all 0.4s',
                                        backgroundColor: 'white',
                                        '&:hover': {
                                            transform: 'translate3d(0, -15px, 10px)',
                                            backgroundColor: '#e4155b',
                                            '& .MuiTypography-h5, & .MuiTypography-body2': {
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
                                            mt: 6,
                                            width: '30%',
                                            height: '30%',
                                            objectFit: 'contain',
                                            transition: 'filter 0.4s'
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
                                            height: '300px',
                                            p: 2
                                        }}
                                    >
                                        {/* Title with Tooltip */}
                                        <Tooltip title={item.title} arrow placement="top">
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="h6"
                                                sx={{
                                                    fontWeight: 'bold',
                                                    transition: 'color 0.4s',
                                                    fontSize: '18px',
                                                    textAlign: 'center',
                                                    width: '100%',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                {item.title}
                                            </Typography>
                                        </Tooltip>

                                        {/* Description with Tooltip (50 words max) */}
                                        <Tooltip title={item.description} arrow placement="top">
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{
                                                    transition: 'color 0.4s',
                                                    textAlign: 'center',
                                                    width: '100%',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                {trimText(item.description, 20)}
                                            </Typography>
                                        </Tooltip>
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
