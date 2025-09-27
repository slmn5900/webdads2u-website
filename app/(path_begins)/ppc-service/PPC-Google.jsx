'use client';
import React from 'react';
import { Box, Container, Grid2, Card, CardContent, Typography, CardMedia } from '@mui/material';
import Title from '../../../components/Title';

const services = [
    {
        title: 'Search Advertising',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757493695/webdads2u/ppc-service/icons/search-ads.avif',
        alt: 'Search-Ads',
        desc: 'Search advertising involves placing paid ads on search engine results pages, commonly using platforms like Google Ads to reach target audiences.'
    },
    {
        title: 'Display Ads',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757493695/webdads2u/ppc-service/icons/display-ads.avif',
        alt: 'Display-Ads',
        desc: 'Display advertising entails placing visual ads on websites, apps, or social media platforms to increase brand visibility and engagement, often through Google Ads.'
    },
    {
        title: 'Social Media Advertising',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757493694/webdads2u/ppc-service/icons/social-media-ads.avif',
        alt: 'Social-Media-Ads',
        desc: 'Social media advertising involves promoting products or services on platforms like Facebook, Instagram, and Twitter. Google Ads also offers advertising on YouTube and other Google-owned platforms.'
    },
    {
        title: 'Remarketing',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757493693/webdads2u/ppc-service/icons/remark.avif',
        alt: 'Remark',
        desc: 'Remarketing, facilitated through Google Ads, involves targeting users who have previously visited a website or app by displaying relevant ads to them as they browse other websites or apps.'
    },
    {
        title: 'Product Listing Ads',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757493693/webdads2u/ppc-service/icons/product-lisitng-ads.avif',
        alt: 'Product-lisitng-ads',
        desc: 'Product Listing Ads, managed through Google Ads, display product images, prices, and details to potential customers searching for specific products on Google’s shopping platform.'
    },
    {
        title: 'Mobile Advertising',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757493692/webdads2u/ppc-service/icons/mobile-ads.png',
        alt: 'Mobile-Ads',
        desc: 'Mobile advertising refers to the practice of displaying ads on mobile devices. Google Ads offers mobile search ads and in-app ads to reach mobile users effectively.'
    }
];

function Ppcgoogle() {
    return (
        <Box component="section" sx={{ py: 6, backgroundColor: '#f9f9f9' }}>
            <Container>
                {/* Header */}
                {/* <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 5 }}>
                    Our PPC Google Ads Services in India
                </Typography> */}
                <Box sx={{ textAlign: 'center' }}>
                    <Title title={'  Our PPC Google Ads Services in India'} />
                </Box>

                {/* Services Grid2 */}
                <Grid2 container spacing={4}>
                    {services.map((service, index) => (
                        <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                            <Card
                                sx={{
                                    height: '100%',
                                    textAlign: 'center',
                                    boxShadow: 3,
                                    borderRadius: 3,
                                    transition: 'transform 0.3s ease',
                                    '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 }
                                }}
                            >
                                <CardMedia component="img" src={service.img} alt={service.alt} loading="lazy" sx={{ width: 100, height: 100, objectFit: 'contain', mx: 'auto', mt: 3 }} />
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: '600', mb: 1 }}>
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {service.desc}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid2>
                    ))}
                </Grid2>
            </Container>
        </Box>
    );
}

export default Ppcgoogle;
