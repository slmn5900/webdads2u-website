// import React, { useContext } from 'react';
// import Slider from '../../../components/common/Slider-image';
// import { MenuContext } from '../../../layout/context/menucontext';
// import { Box, styled } from '@mui/material';
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
// function Customwebdesignbanner() {
//     const { header_section } = useContext(MenuContext);
//     const bgImage = header_section?.bg_img || header_section?.img || header_section?.background_img;

//     const image = bgImage?.startsWith('linear-gradient') ? bgImage : `url(${bgImage})`;
//     return (
//         <>
//             <BrochureSection image={image}>
//                 <div className="container">
//                     <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757420386/webdads2u/custom-web-design/image-background.png" alt="Circle" loading="lazy" className="img-fluid element-circle d-none d-lg-block" />
//                     <div className="row justify-content-center customwebdesignbanner">
//                         <div className="col-7 col-sm-6 col-md-6 col-lg-7 align-content-center" style={{ zIndex: 99 }}>
//                             <h1>Custom web designing services in Chennai</h1>
//                             <p>
//                                 Our custom web design services at Webdads2u offer tailored solutions to elevate your online presence. With a keen focus on client needs, we craft bespoke websites that reflect your brand identity and meet your unique
//                                 requirements.
//                             </p>
//                             <a href="/contact-us">
//                                 <button className="d-none d-sm-block">Contact us</button>
//                             </a>
//                         </div>
//                         <div className="col-5 col-sm-6 col-md-6 col-lg-5 align-self-center custom-banner-image">
//                             {/* <img src="webdads/images/custom-web-design/img.png" alt="Custom Web Designing Services In Chennai" loading="lazy" className="img-fluid" /> */}
//                             <img src={header_section.img1} alt="Custom Web Designing Services In Chennai" loading="lazy" className="img-fluid" />
//                         </div>
//                     </div>
//                 </div>
//             </BrochureSection>
//             <Slider />
//         </>
//     );
// }

// export default Customwebdesignbanner;

'use client';
import React, { useContext } from 'react';
// import Slider from '../../../components/common/Slider-image';
import { MenuContext } from '../../../layout/context/menucontext';
import { Box, Container, Grid2, Typography, Button, styled } from '@mui/material';
import { motion } from 'framer-motion';

const BrochureSection = styled(Box)(({ theme, image }) => ({
    backgroundImage: image,
    backgroundSize: 'cover',
    height: '100%',
    backgroundPosition: 'center',
    overflowX: 'hidden',
    position: 'relative',
    backgroundRepeat: 'no-repeat',
    padding: theme.spacing(7.5, 0, 10),

    minHeight: 'calc(100vh - 200px)',

    [theme.breakpoints.up('sm')]: {
        minHeight: 'calc(100vh - 20px)'
    },
    [theme.breakpoints.up('md')]: {
        minHeight: 'calc(100vh - 10px)'
    },
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(5, 0, 7.5)
    }
}));

export default function Customwebdesignbanner() {
    const { header_section } = useContext(MenuContext);
    const bgImage = header_section?.bg_img || header_section?.img || header_section?.background_img;

    const image = bgImage?.startsWith('linear-gradient') ? bgImage : `url(${bgImage})`;

    return (
        <>
            <BrochureSection image={image}>
                <Container maxWidth="lg">
                    {/* Decorative Circle */}
                    <Box
                        component="img"
                        src={header_section.img}
                        alt="Circle"
                        loading="lazy"
                        sx={{
                            display: { xs: 'none', lg: 'block' },
                            position: 'absolute',
                            right: 0,
                            bottom: 200,
                            width: 500,
                            zIndex: 1
                        }}
                    />

                    <Grid2 container spacing={4} justifyContent="center" alignItems="center" sx={{ position: 'relative', zIndex: 2 }}>
                        {/* Left Content */}
                        <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 7 }}>
                            <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} viewport={{ once: true }}>
                                <Typography
                                    variant="h2"
                                    component="h1"
                                    fontWeight="bold"
                                    gutterBottom
                                    color="white"
                                    sx={{
                                        fontSize: {
                                            xs: '1.5rem', // ~h5
                                            sm: '2rem', // ~h4
                                            md: '2rem' // ~h2
                                        },
                                        textAlign: 'start'
                                    }}
                                >
                                    Custom web designing services in Chennai
                                </Typography>
                                <Typography variant="body1" color="text.secondary" sx={{ mb: 3,color:"white" }}>
                                    Our custom web design services at Webdads2u offer tailored solutions to elevate your online presence. With a keen focus on client needs, we craft bespoke websites that reflect your brand identity and meet your
                                    unique requirements.
                                </Typography>

                                <Button
                                    variant="outlined"
                                    size="large"
                                    href="/contact-us"
                                    sx={{
                                        borderRadius: '30px',
                                        px: 4,
                                        py: 1.5,
                                        textTransform: 'none',
                                        fontWeight: 600,
                                        border: '1px solid white',
                                        color: 'white'
                                    }}
                                    component={motion.a}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Contact us
                                </Button>
                            </motion.div>
                        </Grid2>

                        {/* Right Image */}
                        <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 5 }}>
                            <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }} viewport={{ once: true }}>
                                <Box component="img" src={header_section?.img1} alt="Custom Web Designing Services In Chennai" loading="lazy" sx={{ width: '100%', borderRadius: 2 }} />
                            </motion.div>
                        </Grid2>
                    </Grid2>
                </Container>
            </BrochureSection>

            {/* Slider below */}
            {/* <Slider /> */}
        </>
    );
}
