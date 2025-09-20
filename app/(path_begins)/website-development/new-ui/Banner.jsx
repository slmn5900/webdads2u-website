import React from 'react';
import { Container, Grid2, Typography, Button, Box, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';

// Technology stack data
const leftColumn = [
    { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756884764/webdads2u/website-development/website-development-icons.png', align: 'end' },
    { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756884762/webdads2u/website-development/website-development-icons-1.png', align: 'center' }
];

const centerColumn = [{ src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756883316/webdads2u/website-development/Web-development-companies-in-chennai.png', align: 'center', isMain: true, alt: 'Web development companies in chennai' }];

const rightColumn = [
    { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756884761/webdads2u/website-development/website-development-icons-2.png', align: 'start' },
    { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756884761/webdads2u/website-development/website-development-icons-3.png', align: 'center' }
];
const HeroSection = styled('section')({
    backgroundImage: "url('https://res.cloudinary.com/dbpv95wd8/image/upload/v1757590611/webdads2u/website-development/website-development.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    padding: '75px 0'
});

const HeroButton = styled(Button)(({ theme }) => ({
    background: 'linear-gradient(90deg, rgb(157, 26, 174) 0%, rgb(108, 20, 207) 100%)',
    fontFamily: 'Poppins, sans-serif',
    color: 'rgb(255, 255, 255)',
    border: '0px',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    textAlign: 'left',
    // lineHeight: '53px',
    letterSpacing: '0px',
    fontWeight: 600,
    fontSize: '16px',
    // paddingLeft: '45px',
    borderRadius: '31px',
    // paddingRight: '45px',
    transformOrigin: '50% 50%',
    opacity: 1,
    '&:hover': {
        background: 'linear-gradient(90deg, rgb(137, 16, 154) 0%, rgb(88, 10, 187) 100%)'
    },
    [theme.breakpoints.down('sm')]: {
        paddingLeft: '30px',
        paddingRight: '30px',
        lineHeight: '40px',
        fontSize: '14px'
    }
}));

const Banner = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <HeroSection>
            <Container>
                <Grid2 container alignItems="center" spacing={4}>
                    <Grid2 size={{ xs: 12, sm: 7 }}>
                        <Box
                            sx={{
                                color: 'common.white',
                                textAlign: isMobile ? 'center' : 'left'
                            }}
                        >
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: isMobile ? '2rem' : '3rem',
                                    fontWeight: 700,
                                    mb: 3,
                                    lineHeight: 1.2,
                                    fontFamily: 'Poppins, sans-serif'
                                }}
                            >
                                Design, Develop, Deploy Anything With Full-Stack Development
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: isMobile ? '1rem' : '1.25rem',
                                    mb: 4,
                                    maxWidth: '600px',
                                    fontFamily: 'Poppins, sans-serif'
                                }}
                            >
                                Revolutionize your online presence with our top-tier web development services. Crafted for innovation, functionality, and user-centric experiences, our solutions redefine digital success.
                            </Typography>
                            <Box sx={{ textAlign: isMobile ? 'center' : 'left' }}>
                                <HeroButton variant="contained" href="/contact-us">
                                    Contact Us
                                </HeroButton>
                            </Box>
                        </Box>
                    </Grid2>

                    {/* Technology Grid2 */}
                    <Grid2 size={{ xs: 12, sm: 5 }} container spacing={isMobile ? 2 : 4}>
                        {/* Left Column */}
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            {leftColumn.map((tech, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: tech.align === 'center' ? 'center' : tech.align === 'end' ? 'flex-end' : 'flex-start',
                                        py: isMobile ? 2 : 5,
                                        py: isMobile ? 2 : 4,
                                        mt: isMobile ? 0 : index === 0 ? 0 : 4
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={tech.src}
                                        alt=""
                                        sx={{
                                            maxWidth: '100%',
                                            height: 'auto',
                                            ...(isMobile && { maxHeight: tech.isMain ? 120 : 60 }),
                                            animation: 'zoomInOut 5s infinite ease-in-out',
                                            '@keyframes zoomInOut': {
                                                '0%, 100%': {
                                                    transform: 'scale(1)'
                                                },
                                                '50%': {
                                                    transform: 'scale(1.3)'
                                                }
                                            }
                                        }}
                                    />
                                </Box>
                            ))}
                        </Grid2>

                        {/* Center Column */}
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            {centerColumn.map((tech, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        gap: 10,
                                        ...(tech.isMain && {
                                            py: isMobile ? 2 : 0,
                                            '& img': {
                                                maxWidth: isMobile ? '200px' : '300px',
                                                height: 'auto'
                                            }
                                        }),
                                        ...(!tech.isMain && { py: isMobile ? 2 : 5 }),
                                        ...(index === 2 && { pt: isMobile ? 2 : 0, mt: isMobile ? 0 : 5 })
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={tech.src}
                                        alt={tech?.alt || 'image'}
                                        sx={{
                                            maxWidth: '100%',
                                            height: 'auto',
                                            ...(isMobile && { maxHeight: tech.isMain ? 120 : 60 }),
                                            ...(index !== 1 && {
                                                // Apply animation only if NOT the second item (index 1)
                                                animation: 'zoomInOut 5s infinite ease-in-out',
                                                '@keyframes zoomInOut': {
                                                    '0%, 100%': {
                                                        transform: 'scale(1)'
                                                    },
                                                    '50%': {
                                                        transform: 'scale(1.3)'
                                                    }
                                                }
                                            })
                                        }}
                                    />
                                </Box>
                            ))}
                        </Grid2>

                        {/* Right Column */}
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            {rightColumn.map((tech, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: tech.align === 'center' ? 'center' : 'flex-start',
                                        py: isMobile ? 2 : 4,
                                        mt: isMobile ? 0 : index === 0 ? 0 : 4
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={tech.src}
                                        alt=""
                                        sx={{
                                            maxWidth: '100%',
                                            height: 'auto',
                                            ...(isMobile && { maxHeight: tech.isMain ? 120 : 60 }),
                                            animation: 'zoomInOut 5s infinite ease-in-out',
                                            '@keyframes zoomInOut': {
                                                '0%, 100%': {
                                                    transform: 'scale(1)'
                                                },
                                                '50%': {
                                                    transform: 'scale(1.3)'
                                                }
                                            }
                                        }}
                                    />
                                </Box>
                            ))}
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Container>
        </HeroSection>
    );
};

export default Banner;
