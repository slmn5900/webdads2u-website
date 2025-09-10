import React, { useContext } from 'react';
import { Box, Grid2, Typography, Card, CardMedia, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { MenuContext } from '../../../layout/context/menucontext';

export default function RecentCreations() {
    const creations = [
        { img: '/images/creation1.jpg', alt: 'Creation 1' },
        { img: '/images/creation2.jpg', alt: 'Creation 2' },
        { img: '/images/creation3.jpg', alt: 'Creation 3' },
        { img: '/images/creation4.jpg', alt: 'Creation 4' },
        { img: '/images/creation5.jpg', alt: 'Creation 5' }
    ];
    const { ourCreations } = useContext(MenuContext);
    console.log(ourCreations, 'ourrecent_section');
    const title = ourCreations?.title;
    const description = ourCreations?.description;
    const images = ourCreations?.img;
    console.log(description, 'title');
    return (
        <Box sx={{ py: 6, px: { xs: 2, md: 6 } }}>
            <Container>
                <Grid2 container spacing={3} alignItems="center">
                    {/* Left Title */}
                    <Grid2 size={{ xs: 12, md: 3 }}>
                        <Typography variant="h4" fontWeight={700} sx={{ color: '#0d0d0d', mb: { xs: 2, md: 0 } }}>
                            {title}
                        </Typography>
                    </Grid2>

                    {/* Right Description */}
                    <Grid2 size={{ xs: 12, md: 9 }}>
                        <Typography variant="body1" sx={{ color: '#555', mb: 3 }}>
                            {description}
                        </Typography>
                    </Grid2>
                </Grid2>

                {/* Image Cards */}
                <Grid2 container spacing={3} sx={{ mt: 2 }}>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={3}
                        autoplay={{
                            delay: 3000, // 3 seconds
                            disableOnInteraction: false // keeps autoplay running even after user swipes
                        }}
                        loop={true}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            600: { slidesPerView: 2 },
                            960: { slidesPerView: 3 }
                        }}
                    >
                        {images?.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                                    {console.log(item, 'item')}
                                    <CardMedia component="img" height="250" image={item?.img || item?.url} alt={item.alt} sx={{ objectFit: 'cover' }} />
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Grid2>
            </Container>
        </Box>
    );
}
