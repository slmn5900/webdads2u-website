import React from 'react';
import { Box, Container, Grid2, Typography, useTheme, useMediaQuery } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useContext } from 'react';
import { MenuContext } from '../../../layout/context/menucontext';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

const ClientLogoSlider = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const { slider_section } = useContext(MenuContext);
    const title = slider_section?.title;

    const logos = slider_section?.logos;

    return (
        <Container maxWidth="md" sx={{ backgroundColor: 'white', pt: 2, position: 'relative', top: -50, borderRadius: 2, zIndex: 1 }}>
            <Grid2 container alignItems="center" spacing={1}>
                <Grid2 size={{ xs: 12, md: 4 }}>
                    <Typography
                        variant={isMobile ? 'h5' : 'h6'}
                        component="h2"
                        gutterBottom
                        sx={{
                            padding: 2,
                            fontWeight: 600,
                            textAlign: isMobile ? 'center' : 'left'
                        }}
                    >
                        {title}
                    </Typography>
                </Grid2>
                <Grid2 size={{ xs: 12, md: 8 }}>
                    <Box
                        sx={{
                            position: 'relative',
                            '& .swiper-slide': {
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100px',
                                '& img': {
                                    height: '60px',
                                    width: 'auto',
                                    maxWidth: '100%',
                                    objectFit: 'contain',
                                    transition: 'all 0.3s ease'
                                }
                            }
                        }}
                    >
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={2}
                            slidesPerView={6}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false
                            }}
                            loop={true}
                            breakpoints={{
                                // when window width is >= 0px
                                0: {
                                    slidesPerView: 2,
                                    spaceBetween: 20
                                },
                                // when window width is >= 600px
                                600: {
                                    slidesPerView: 3,
                                    spaceBetween: 20
                                },
                                // when window width is >= 900px
                                900: {
                                    slidesPerView: 4,
                                    spaceBetween: 20
                                }
                            }}
                        >
                            {logos?.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <img src={img} alt={`client-logo-${index + 1}`} loading="lazy" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                </Grid2>
            </Grid2>
        </Container>
    );
};

export default ClientLogoSlider;
