import React from 'react';
import { Container, Box, Grid2 } from '@mui/material';
import GridLines from './GridLines';
import HeroLeftContent from './HeroLeftContent';
// import HeroRightCarousel from './HeroRightCarousel';
import CustomGradientBarButton from '../header';
// import VerticalSwiperTicker from './HeroRightCarousel';
import DualTickerSlider from './HeroRightCarousel';

const HeroSectionProps = ({
    tagline,
    heading,
    description,
    email,
    phone,
    button1,
    button2,
    images,
}) => (
    <>
        <Box >
            {/* <Box sx={{ position: 'relative', overflow: 'hidden', py: { xs: 4, md: 3 }, px: { xs: 2, md: 4 }, height: "auto",  }}> */}


            <Container maxWidth="lg" sx={{ px: 6, position: 'relative', overflow: 'hidden', }} >
                {/* <GridLines sx={{}} /> */}
                <Box sx={{ py: 2, pb: 5 }}>
                    <CustomGradientBarButton />
                </Box>


                {/* <Grid2 container spacing={5} sx={{ position: 'relative', zIndex: 1 }}> */}
                <Grid2 container spacing={5} >
                    <Grid2 size={{ xs: 12, md: 6 }} >
                        <HeroLeftContent
                            tagline={tagline}
                            heading={heading}
                            description={description}
                            email={email}
                            phone={phone}
                            button1={button1}
                            button2={button2}
                        />
                    </Grid2>


                    <Grid2 size={{ xs: 12, md: 6 }}  display={{ xs: 'none', sm: 'none', md: 'block' }}>
                        <Box position={"absolute"} sx={{ top: 0, right: 0, bottom: 10 }}>
                            <DualTickerSlider imagesRight={images} imagesLeft={images} />
                        </Box>

                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    </>
);

export default HeroSectionProps;
