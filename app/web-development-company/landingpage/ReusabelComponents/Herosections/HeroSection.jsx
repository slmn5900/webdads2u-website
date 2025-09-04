import React from 'react';
import { Container, Box, Grid2 } from '@mui/material';
import HeroLeftContent from './HeroLeftContent';
// import HeroRightCarousel from './HeroRightCarousel';
import CustomGradientBarButton from '../header';
// import VerticalSwiperTicker from './HeroRightCarousel';
import DualTickerSlider from './HeroRightCarousel';
import HerosectionRightside from '../../../../Lading-page/ResuabelComponent/HerosectionRightside';
import { usePathname } from 'next/navigation';

const HeroSectionProps = ({ tagline, heading, description, email, phone, button1, button2, images, alt }) => {
    console.log(images, 'images>>>');
    const pathname = usePathname();

    const omitpages = [
        '/crm',
        '/erp',
        '/app',
        '/shoppiy',
        '/ui&ux',
        '/openkart',
        '/ecommerce-react-page',
        '/ecommerce-wordpress-page',
        '/web-development-company',
        '/logo-design-company',
        '/poster-design-company',
        '/brochure-design-page',
        '/flyer-design-company',
        '/wordpress-page',
        '/react-page',
        '/letter-head-page'
        // '/digital-marketing-company'
    ];

    const omitHeaderFooter = omitpages.includes(pathname);

    return (
        <Box sx={{ position: 'relative', overflow: 'hidden', py: { xs: 1, md: 0 }, px: { xs: 2, sm: 4, md: 10 }, height: { xs: 'auto', md: '600px' } }}>
            {/* <GridLines sx={{}} /> */}
            <Box sx={{ py: 5, pb: 5 }}>
                <CustomGradientBarButton />
            </Box>

            {/* <Grid2 container spacing={5} sx={{ position: 'relative', zIndex: 1 }}> */}
            <Grid2 container spacing={5}>
                <Grid2 size={{ xs: 12, sm: 6, md: 6 }}>
                    <HeroLeftContent tagline={tagline} heading={heading} description={description} email={email} phone={phone} button1={button1} button2={button2} />
                </Grid2>

                {console.log(images, 'dem,o')}
                <Grid2 size={{ xs: 12, sm: 6, md: 6 }} display={{ xs: 'none', sm: 'block', md: 'block' }}>
                    {!omitHeaderFooter ? (
                        <HerosectionRightside images={images} alt={alt} />
                    ) : (
                        <Box position={'absolute'} sx={{ top: 0, right: 0, bottom: 10 }}>
                            <DualTickerSlider imagesRight={images} imagesLeft={images} />
                        </Box>
                    )}
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default HeroSectionProps;
