import { Container, Grid2, Box, styled } from '@mui/material';

import BannerRight from './BannerRight';
import BannerLeft from './BannerLeft';
import { useContext } from 'react';
import { MenuContext } from '../../../layout/context/menucontext';

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

    const image = bgImage?.startsWith('linear-gradient') ? bgImage : `url(${bgImage})`;

    return (
        <BrochureSection image={image}>
            <Container maxWidth="lg" height="1000px">
                <ContentWrapper>
                    <Grid2 container alignItems="center" spacing={4} sx={{ position: 'relative' }}>
                        {/* Left Column - Content */}
                        <Grid2 size={{ xs: 12, md: 6 }} sx={{ order: { xs: 1, md: 1 } }}>
                            <BannerLeft />
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
