import React from 'react';
import { Container, Grid2, Typography, Box, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';

const FlyerBox = styled(Box)(({ theme }) => ({
    boxShadow: '10px 10px 40px 0 rgb(206 207 211)',
    paddingBottom: '10px',
    textAlign: 'center',
    marginBottom: '30px',
    '& h3': {
        color: '#0b1225',
        fontFamily: '"Poppins", sans-serif',
        fontSize: '18px',
        fontWeight: 700,
        textTransform: 'capitalize',
        paddingTop: '15px'
    }
}));

const FlyerBoxDesign = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const flyers = [
        {
            img: '/webdads/images/flyerdesign/global-enterprises.webp',
            alt: 'Flyer Design Company In Chennai',
            title: 'newspaper flyer'
        },
        {
            img: '/webdads/images/flyerdesign/AYN-FLyer.webp',
            alt: '',
            title: 'Leaflets'
        },
        {
            img: '/webdads/images/flyerdesign/JUniyaa.webp',
            alt: '',
            title: 'Door hanging flyers'
        },
        {
            img: '/webdads/images/flyerdesign/Skp.webp',
            alt: '',
            title: 'Minimalistic concept flyer'
        },
        {
            img: '/webdads/images/flyerdesign/global-enterprises.webp',
            alt: '',
            title: 'Real Estate'
        },
        {
            img: '/webdads/images/flyerdesign/Skp.webp',
            alt: '',
            title: 'Company flyer'
        },
        {
            img: '/webdads/images/flyerdesign/AYN-FLyer.webp',
            alt: '',
            title: 'Construction flyer'
        },
        {
            img: '/webdads/images/flyerdesign/JUniyaa.webp',
            alt: '',
            title: 'Case study flyer'
        }
    ];

    return (
        <Box component="section" py={5}>
            <Container>
                <Box textAlign="center" mb={4}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: isMobile ? '1.5rem' : '2rem',
                            fontWeight: 700,
                            mb: 2
                        }}
                    >
                        Flyers Designing, Printing in Chennai
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: isMobile ? '0.875rem' : '1rem',
                            maxWidth: '800px',
                            margin: '0 auto'
                        }}
                    >
                        Our flyer designs are created from scratch and adapted to fit your business needs. Our designers create flyers for any event, promotion, or marketing materials.
                    </Typography>
                </Box>

                <Grid2 container spacing={3}>
                    {flyers.map((flyer, index) => (
                        <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
                            <FlyerBox>
                                <Box
                                    component="img"
                                    src={flyer.img}
                                    alt={flyer.alt}
                                    sx={{
                                        width: '100%',
                                        height: 'auto',
                                        display: 'block'
                                    }}
                                />
                                <Typography variant="h3" component="h3">
                                    {flyer.title}
                                </Typography>
                            </FlyerBox>
                        </Grid2>
                    ))}
                </Grid2>
            </Container>
        </Box>
    );
};

export default FlyerBoxDesign;
