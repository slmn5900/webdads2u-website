import { Container, Grid2, Box, styled, Typography } from '@mui/material';

import { useContext } from 'react';
import { MenuContext } from '../../../layout/context/menucontext';
import BannerLeft from '../../../components/ui/banner/BannerLeft';
import BannerRight from '../../../components/ui/banner/BannerRight';
import { motion } from 'framer-motion';
import ContactButton from '../../../components/ui/banner/ContactButton';
// Styled section component with background image
const BrochureSection = styled(Box)(({ theme, image }) => ({
    backgroundImage: image,
    backgroundSize: 'cover',
    height: '100%',
    backgroundPosition: 'center',
    overflowX: 'hidden',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    padding: theme.spacing(7.5, 0, 10),

    // default
    minHeight: 'calc(100vh - 400px)',

    [theme.breakpoints.up('sm')]: {
        minHeight: 'calc(100vh - 20px)'
    },
    [theme.breakpoints.up('md')]: {
        minHeight: 'calc(100vh - 400px)'
    },
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(5, 0, 7.5) // Adjust for smaller screens
    }
}));

// Content wrapper to position above the background
const ContentWrapper = styled(Box)({
    position: 'relative',
    zIndex: 1
});

export default function Banner() {
    const { header_section } = useContext(MenuContext);
    const bgImage = header_section?.bg_img || header_section?.img || header_section?.background_img;
    const words = header_section?.description;
    const titlemain = header_section?.title;
    const image = bgImage?.startsWith('linear-gradient') ? bgImage : `url(${bgImage})`;

    return (
        <BrochureSection image={image}>
            <Container maxWidth="lg" height="1000px">
                <ContentWrapper>
                    <Grid2 container alignItems="center" spacing={4} sx={{ position: 'relative' }}>
                        {/* Left Column - Content */}
                        <Grid2 size={{ xs: 12, md: 6 }} sx={{ order: { xs: 1, md: 1 } }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 3,
                                    mt: { xs: 0, md: 7 },
                                    paddingRight: { md: 4 },
                                    color: 'common.white' // White text for better contrast
                                }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.2
                                    }}
                                    style={{ marginRight: '8px', display: 'flex', paddingTop: 10, paddingBottom: 10, width: 500 }}
                                >
                                    <Typography
                                        variant="h2"
                                        component="span"
                                        sx={{
                                            fontWeight: 'bold',
                                            color: '#035397',
                                            // textAlign: 'start',
                                            fontSize: { xs: '20px', md: '40px' }
                                            // whiteSpace: { xs: 'pre-line', sm: "normal", md: "normal" }
                                        }}
                                        width={{ xs: '300px', sm: '700px', md: '1000px' }}
                                    >
                                        {titlemain}
                                    </Typography>
                                </motion.div>

                                <Box sx={{ width: { xs: '300px', sm: '300px', md: '600px' }, display: 'flex', flexWrap: 'wrap' }}>
                                    <Typography component="span" sx={{ color: '#035397', fontSize: { xs: '15px', md: '20px' } }}>
                                        {words}
                                    </Typography>
                                </Box>
                                <Box>
                                    <ContactButton bg="#035397" />
                                </Box>
                            </Box>
                            {/* <BannerLeft /> */}
                        </Grid2>

                        {/* Right Column - Image */}
                        <Grid2
                            size={{ xs: 12, md: 6, lg: 5 }}
                            sx={{
                                order: { xs: 2, md: 2 },
                                display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' }
                            }}
                        >
                            <BannerRight />
                        </Grid2>
                    </Grid2>
                </ContentWrapper>
            </Container>
        </BrochureSection>
    );
}
