// 'use client';

// import React, { useContext } from 'react';
// import { Container, Grid22, Typography, Button, Box, styled } from '@mui/material';
// import { motion } from 'framer-motion';
// import { MenuContext } from '../../../layout/context/menucontext';
// import BannerLeft from '../../../components/ui/banner/BannerLeft';
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
//         minHeight: 'calc(100vh - 10px)'
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

// function Localseoservicebanner() {
//     const { header_section } = useContext(MenuContext);
//     const bgImage = header_section?.bg_img || header_section?.img || header_section?.background_img;

//     const image = bgImage?.startsWith('linear-gradient') ? bgImage : `url(${bgImage})`;
//     return (
//         <>
//             <BrochureSection image={image}>
//                 <Container>
//                     <Grid22 container spacing={4} alignItems="center" justifyContent="center" className="localseoservicebanner">
//                         {/* Left Content */}
//                         <Grid22 size={{ xs: 12, md: 6 }}>
//                             <BannerLeft />
//                         </Grid22>

//                         {/* Right Image + Elements */}
//                         <Grid22 size={{ xs: 12, md: 6 }} textAlign="center">
//                             <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="element-local-image">
//                                 <Box
//                                     component="img"
//                                     src="webdads/images/local-seo-service/Img.png"
//                                     alt="Local SEO Services In Chennai"
//                                     loading="lazy"
//                                     sx={{
//                                         maxWidth: '100%',
//                                         height: 'auto'
//                                     }}
//                                 />

//                                 {/* Decorative floating images */}
//                                 <Box sx={{ position: 'relative' }} className="d-none d-md-block">
//                                     <motion.img
//                                         src="webdads/images/local-seo-service/Star-2.png"
//                                         alt="Star-2-main"
//                                         loading="lazy"
//                                         className="Star-2-main"
//                                         initial={{ y: -20, opacity: 0 }}
//                                         animate={{ y: [0, -15, 0], opacity: 1 }}
//                                         transition={{ repeat: Infinity, duration: 3 }}
//                                     />
//                                     <motion.img
//                                         src="webdads/images/local-seo-service/Star-1.png"
//                                         alt="Star-1"
//                                         loading="lazy"
//                                         className="Star-1"
//                                         initial={{ y: -10, opacity: 0 }}
//                                         animate={{ y: [0, -10, 0], opacity: 1 }}
//                                         transition={{ repeat: Infinity, duration: 4 }}
//                                     />
//                                     <motion.img
//                                         src="webdads/images/local-seo-service/Steps.png"
//                                         alt="Steps"
//                                         loading="lazy"
//                                         className="Steps"
//                                         initial={{ x: 20, opacity: 0 }}
//                                         animate={{ x: [0, 15, 0], opacity: 1 }}
//                                         transition={{ repeat: Infinity, duration: 5 }}
//                                     />
//                                     <motion.img
//                                         src="webdads/images/local-seo-service/Hand.png"
//                                         alt="Hand"
//                                         loading="lazy"
//                                         className="Hand"
//                                         initial={{ y: 10, opacity: 0 }}
//                                         animate={{ y: [0, 12, 0], opacity: 1 }}
//                                         transition={{ repeat: Infinity, duration: 3.5 }}
//                                     />
//                                     <motion.img
//                                         src="webdads/images/local-seo-service/Mic.png"
//                                         alt="Mic"
//                                         loading="lazy"
//                                         className="Mic"
//                                         initial={{ x: -20, opacity: 0 }}
//                                         animate={{ x: [0, -15, 0], opacity: 1 }}
//                                         transition={{ repeat: Infinity, duration: 4.5 }}
//                                     />
//                                     <motion.img
//                                         src="webdads/images/local-seo-service/Paper.png"
//                                         alt="Paper"
//                                         loading="lazy"
//                                         className="Paper"
//                                         initial={{ y: 20, opacity: 0 }}
//                                         animate={{ y: [0, 15, 0], opacity: 1 }}
//                                         transition={{ repeat: Infinity, duration: 6 }}
//                                     />
//                                 </Box>
//                             </motion.div>
//                         </Grid22>
//                     </Grid22>
//                 </Container>
//             </BrochureSection>
//         </>
//     );
// }

// export default Localseoservicebanner;

'use client';

import React, { useContext } from 'react';
import { Container, Typography, Button, Box, styled, Grid2 } from '@mui/material';
import { motion } from 'framer-motion';
import { MenuContext } from '../../../layout/context/menucontext';
import BannerLeft from '../../../components/ui/banner/BannerLeft';

const BrochureSection = styled(Box)(({ theme, image }) => ({
    backgroundImage: image,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    overflowX: 'hidden',
    padding: theme.spacing(7.5, 0, 10),

    // responsive height
    minHeight: '70vh',
    [theme.breakpoints.up('sm')]: {
        minHeight: '80vh'
    },
    [theme.breakpoints.up('md')]: {
        minHeight: '100vh'
    },
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(5, 0, 7.5)
    }
}));

const ContentWrapper = styled(Box)({
    position: 'relative',
    zIndex: 1
});

function Localseoservicebanner() {
    const { header_section } = useContext(MenuContext);
    const bgImage = header_section?.bg_img || header_section?.img || header_section?.background_img;

    const image = bgImage?.startsWith('linear-gradient') ? bgImage : `url(${bgImage})`;
    const img = header_section.img;
    const img1 = header_section.img1;
    const img2 = header_section.img2;
    const img3 = header_section.img3;
    const img4 = header_section.img4;
    const img5 = header_section.img5;
    console.log(img1, 'img2');

    return (
        <BrochureSection image={image}>
            <Container>
                <Grid2 container spacing={4} alignItems="center" justifyContent="center" className="localseoservicebanner">
                    {/* Left Content */}
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <BannerLeft />
                    </Grid2>

                    {/* Right Image + Elements */}
                    <Grid2 size={{ xs: 12, md: 6 }} textAlign="center" position={'relative'}>
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="element-local-image">
                            <Box
                                component="img"
                                src={img}
                                alt="Local SEO Services In Chennai"
                                loading="lazy"
                                sx={{
                                    maxWidth: { xs: '80%', md: '100%' },
                                    height: 'auto',
                                    mx: 'auto'
                                }}
                            />

                            {/* Floating images - visible only on md+ */}
                            <Box
                                sx={{
                                    display: { xs: 'none', md: 'block' }
                                }}
                            >
                                {[
                                    {
                                        src: img1,
                                        alt: 'Star-2-main',
                                        initial: { y: -20, opacity: 0 },
                                        animate: { y: [0, -15, 0], opacity: 1 },
                                        duration: 3
                                    },
                                    {
                                        src: img2,
                                        alt: 'Star-1',
                                        initial: { y: -10, opacity: 0 },
                                        animate: { y: [0, -10, 0], opacity: 1 },
                                        duration: 4
                                    },
                                    {
                                        src: img3,
                                        alt: 'Steps',
                                        initial: { x: 20, opacity: 0 },
                                        animate: { x: [0, 15, 0], opacity: 1 },
                                        duration: 5
                                    },
                                    {
                                        src: img4,
                                        alt: 'Hand',
                                        initial: { y: 10, opacity: 0 },
                                        animate: { y: [0, 12, 0], opacity: 1 },
                                        duration: 3.5
                                    },
                                    {
                                        src: img5,
                                        alt: 'Mic',
                                        initial: { x: -20, opacity: 0 },
                                        animate: { x: [0, -15, 0], opacity: 1 },
                                        duration: 4.5
                                    }
                                ].map((item, i) => (
                                    <motion.img
                                        key={i}
                                        src={item.src}
                                        alt={item.alt}
                                        loading="lazy"
                                        initial={item.initial}
                                        animate={item.animate}
                                        transition={{ repeat: Infinity, duration: item.duration }}
                                        style={{
                                            top: 0,
                                            maxWidth: '120px',
                                            // gap: 10,
                                            position: 'absolute'
                                        }}
                                    />
                                ))}
                            </Box>
                        </motion.div>
                    </Grid2>
                </Grid2>
            </Container>
        </BrochureSection>
    );
}

export default Localseoservicebanner;
