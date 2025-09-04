// import { Container, Grid2, Box, styled } from '@mui/material';
// import { useContext } from 'react';
// import BannerLeft from '../../../../components/ui/banner/BannerLeft';
// import { MenuContext } from '../../../../layout/context/menucontext';

// // Styled section component with background image
// const BrochureSection = styled(Box)(({ theme, image }) => ({
//     backgroundImage: image,
//     backgroundSize: 'cover',
//     height: '100%',
//     backgroundPosition: 'center',
//     overflowX: 'hidden',
//     backgroundRepeat: 'no-repeat',
//     padding: theme.spacing(7.5, 0, 10),

//     // default
//     minHeight: 'calc(100vh - 200px)',

//     [theme.breakpoints.up('sm')]: {
//         minHeight: 'calc(100vh - 20px)'
//     },
//     [theme.breakpoints.up('md')]: {
//         minHeight: 'calc(100vh - 60px)'
//     },
//     [theme.breakpoints.down('md')]: {
//         padding: theme.spacing(5, 0, 7.5) // Adjust for smaller screens
//     }
// }));

// // Content wrapper to position above the background
// const ContentWrapper = styled(Box)({
//     position: 'relative',
//     zIndex: 1
// });

// export default function Banner() {
//     const { header_section } = useContext(MenuContext);
//     const bgImage = header_section?.bg_img || header_section?.img || header_section?.background_img;

//     const image = bgImage?.startsWith('linear-gradient') ? bgImage : `url(${bgImage})`;

//     return (
//         <BrochureSection image={image}>
//             <Container maxWidth="lg" height="1000px">
//                 <ContentWrapper>
//                     <Grid2 container alignItems="center" spacing={4}>
//                         {/* Left Column - Content */}
//                         <Grid2 size={{ xs: 12, md: 6 }} sx={{ order: { xs: 1, md: 1 } }}>
//                             <BannerLeft />
//                         </Grid2>

//                         {/* Right Column - Image */}
//                         <Grid2
//                             size={{ xs: 12, md: 6 }}
//                             sx={{
//                                 order: { xs: 2, md: 2 },
//                                 display: { xs: 'none', md: 'none', lg: 'block' }
//                             }}
//                         >
//                             <Box
//                                 sx={{
//                                     position: 'relative',
//                                     right: 80,
//                                     height: { xs: 300, sm: 400, md: '500px' },
//                                     width: '500px'
//                                 }}
//                             >
//                                 {/* Main hero image */}
//                                 <Box
//                                     component="img"
//                                     alt="Web design illustration"
//                                     src="/webdads/images/webdesign/hero-slider.png"
//                                     sx={{
//                                         position: 'relative',
//                                         top: '50%',
//                                         left: '30%',
//                                         transform: 'translate(-20%, -50%)',
//                                         width: '100%',
//                                         maxWidth: 450,
//                                         zIndex: 2
//                                     }}
//                                 />

//                                 {/* Decorative icons positioned around */}
//                                 <Box
//                                     component="img"
//                                     alt="Link icon"
//                                     src="/webdads/images/webdesign/banner-icons-link.png"
//                                     sx={{
//                                         position: 'absolute',
//                                         top: { xs: '5%', md: '10%' },
//                                         left: { xs: '5%', md: '0%' },
//                                         width: { xs: 60, md: 100 },
//                                         height: { xs: 60, md: 100 },
//                                         objectFit: 'contain',
//                                         zIndex: 3,
//                                         animation: 'float 6s ease-in-out infinite'
//                                     }}
//                                 />

//                                 <Box
//                                     component="img"
//                                     alt="System icon"
//                                     src="/webdads/images/webdesign/banner-icons-2.png"
//                                     sx={{
//                                         position: 'absolute',
//                                         top: { xs: '5%', md: '15%' },
//                                         right: { xs: '5%', md: '0%' },
//                                         width: { xs: 60, md: 80 },
//                                         height: { xs: 60, md: 80 },
//                                         objectFit: 'contain',

//                                         zIndex: 3,
//                                         animation: 'float 4s ease-in-out infinite 2s'
//                                     }}
//                                 />

//                                 <Box
//                                     component="img"
//                                     alt="HTML icon"
//                                     src="/webdads/images/webdesign/html.png"
//                                     sx={{
//                                         position: 'absolute',
//                                         bottom: { xs: '5%', md: '10%' },
//                                         left: { xs: '5%', md: '5%' },
//                                         width: { xs: 60, md: 80 },
//                                         height: { xs: 60, md: 80 },
//                                         objectFit: 'contain',
//                                         zIndex: 3,
//                                         animation: 'float 5s ease-in-out infinite 1s'
//                                     }}
//                                 />

//                                 <Box
//                                     component="img"
//                                     alt="Settings icon"
//                                     src="/webdads/images/webdesign/banner-icons-setting.png"
//                                     sx={{
//                                         position: 'absolute',
//                                         bottom: { xs: '10%', md: '15%' },
//                                         right: { xs: '5%', md: '5%' },
//                                         width: { xs: 60, md: 80 },
//                                         height: { xs: 60, md: 80 },
//                                         objectFit: 'contain',
//                                         zIndex: 3,
//                                         animation: 'float 3s ease-in-out infinite'
//                                     }}
//                                 />

//                                 {/* Floating animation */}
//                                 <style jsx global>{`
//                                     @keyframes float {
//                                         0% {
//                                             transform: translateY(0px);
//                                         }
//                                         50% {
//                                             transform: translateY(-35px);
//                                         }
//                                         100% {
//                                             transform: translateY(0px);
//                                         }
//                                     }
//                                 `}</style>
//                             </Box>
//                         </Grid2>
//                     </Grid2>
//                 </ContentWrapper>
//             </Container>
//         </BrochureSection>
//     );
// }
import { Container, Box, styled, Grid2 } from '@mui/material';
import { useContext } from 'react';
import BannerLeft from '../../../../components/ui/banner/BannerLeft';
import { MenuContext } from '../../../../layout/context/menucontext';

// Styled section component with background image
const BrochureSection = styled(Box)(({ theme, image }) => ({
    backgroundImage: image,
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    overflowX: 'hidden',
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

// Content wrapper
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
            <Container maxWidth="lg">
                <ContentWrapper>
                    <Grid2 container spacing={4} alignItems="center">
                        {/* Left Column - 50% */}
                        <Grid2 size={{ xs: 12, md: 6 }}>
                            <BannerLeft />
                        </Grid2>

                        {/* Right Column - 50% */}
                        <Grid2 size={{ xs: 12, md: 6 }}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    height: { xs: 300, sm: 400, md: 400 },
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                {/* Main hero image */}
                                <Box
                                    component="img"
                                    alt="Web design illustration"
                                    src="/webdads/images/webdesign/hero-slider.png"
                                    sx={{
                                        width: '100%',
                                        maxWidth: 300,
                                        zIndex: 2
                                    }}
                                />

                                {/* Decorative floating icons */}
                                <Box
                                    component="img"
                                    alt="Link icon"
                                    src="/webdads/images/webdesign/banner-icons-link.png"
                                    sx={{
                                        position: 'absolute',
                                        top: { xs: '5%', md: '10%' },
                                        left: { xs: '5%', md: '0%' },
                                        width: { xs: 60, md: 100 },
                                        height: { xs: 60, md: 100 },
                                        objectFit: 'contain',
                                        zIndex: 3,
                                        animation: 'float 6s ease-in-out infinite'
                                    }}
                                />

                                <Box
                                    component="img"
                                    alt="System icon"
                                    src="/webdads/images/webdesign/banner-icons-2.png"
                                    sx={{
                                        position: 'absolute',
                                        top: { xs: '5%', md: '15%' },
                                        right: { xs: '5%', md: '0%' },
                                        width: { xs: 60, md: 80 },
                                        height: { xs: 60, md: 80 },
                                        objectFit: 'contain',
                                        zIndex: 3,
                                        animation: 'float 4s ease-in-out infinite 2s'
                                    }}
                                />

                                <Box
                                    component="img"
                                    alt="HTML icon"
                                    src="/webdads/images/webdesign/html.png"
                                    sx={{
                                        position: 'absolute',
                                        bottom: { xs: '5%', md: '10%' },
                                        left: { xs: '5%', md: '5%' },
                                        width: { xs: 60, md: 80 },
                                        height: { xs: 60, md: 80 },
                                        objectFit: 'contain',
                                        zIndex: 3,
                                        animation: 'float 5s ease-in-out infinite 1s'
                                    }}
                                />

                                <Box
                                    component="img"
                                    alt="Settings icon"
                                    src="/webdads/images/webdesign/banner-icons-setting.png"
                                    sx={{
                                        position: 'absolute',
                                        bottom: { xs: '10%', md: '15%' },
                                        right: { xs: '5%', md: '5%' },
                                        width: { xs: 60, md: 80 },
                                        height: { xs: 60, md: 80 },
                                        objectFit: 'contain',
                                        zIndex: 3,
                                        animation: 'float 3s ease-in-out infinite'
                                    }}
                                />

                                {/* Floating animation */}
                                <style jsx global>{`
                                    @keyframes float {
                                        0% {
                                            transform: translateY(0px);
                                        }
                                        50% {
                                            transform: translateY(-35px);
                                        }
                                        100% {
                                            transform: translateY(0px);
                                        }
                                    }
                                `}</style>
                            </Box>
                        </Grid2>
                    </Grid2>
                </ContentWrapper>
            </Container>
        </BrochureSection>
    );
}
