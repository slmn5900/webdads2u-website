import React from 'react';
import { Container, Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';

const HeroSection = styled('section')(({ theme }) => ({
    background: "url('/webdads/images/flyerdesign/flayer-design.jpg')",
    paddingBottom: '340px',
    paddingTop: '100px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('md')]: {
        paddingBottom: '364px',
        paddingTop: '20px'
    }
}));

const HeroButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#fff',
    borderRadius: '50px',
    color: '#29aeaa',
    fontSize: '18px',
    fontWeight: 500,
    padding: '10px 30px',
    border: '2px solid #fff',
    '&:hover': {
        backgroundColor: 'transparent',
        border: '2px solid #fff',
        color: '#fff'
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '12px',
        padding: '5px 20px'
    }
}));

const Banner = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <HeroSection>
            <Container>
                <Box display="flex" alignItems="center" justifyContent="center" textAlign="center">
                    <Box>
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: isMobile ? '19px' : '45px',
                                color: '#fff',
                                fontWeight: 700
                            }}
                        >
                            Flyers Designing Service in Chennai
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: isMobile ? '10px' : '18px',
                                color: '#fff',
                                fontWeight: 500,
                                lineHeight: isMobile ? '20px' : 'normal',
                                mb: 2
                            }}
                        >
                            Create captivating flyers with our innovative designs. Grab attention and convey your message effectively with our professional flyer designs.
                        </Typography>

                        <HeroButton variant="contained">Contact us</HeroButton>
                    </Box>
                </Box>
            </Container>
        </HeroSection>
    );
};

export default Banner;
