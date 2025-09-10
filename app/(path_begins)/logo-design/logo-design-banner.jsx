// import React from 'react';
// import Slider from '../../../components/common/Slider-image';

// function Logodesignbanner() {
//     return (
//         <>
//             <section className="logodesignbanner-main">
//                 <div className="container">
//                     <div className="row logodesignbanner">
//                         <div className="col-6 col-sm-6 col-md-6 col-lg-6 align-self-center">
//                             <h1>Elevate your brand with professional logo design services.</h1>
//                             <a href="/contact-us">
//                                 <button className="mt-3">Contact us</button>
//                             </a>
//                         </div>
//                         <div className="col-6 col-sm-6 col-md-6 col-lg-6 align-self-center banner-logo-design">
//                             <img src="webdads/images/logo-design/Laptop.png" alt="Logo Design Company In Chennai" loading="lazy" className="img-fluid" />
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <Slider />
//         </>
//     );
// }

// export default Logodesignbanner;

'use client';
import React, { useContext } from 'react';
import { Box, Typography, Button, Container, Grid2, useTheme, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import ContactButton from '../../../components/ui/banner/ContactButton';
import { MenuContext } from '../../../layout/context/menucontext';
// import baner from './webdads/images/logo-design/New-Banner-Background.jpg';

const LogoDesignBanner = () => {
    const theme = useTheme();
    const isTabletOrSmaller = useMediaQuery(theme.breakpoints.down('md'));

    const { pagedata } = useContext(MenuContext);
    console.log(pagedata, 'data');
    const title = pagedata?.header_section?.title;
    const imgs = pagedata?.header_section?.imgs || pagedata?.header_section?.img;
    const alt = pagedata?.header_section?.img_alt;

    // console.log('/webdads/images/logo-design/New-Banner-Background.jpg');
    return (
        <Box
            sx={{
                backgroundImage: `url(/webdads/images/logo-design/New-Banner-Background.jpg)`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                // py: { xs: '90px', md: '80px' },
                px: 2,
                height: '100%',
                minHeight: 'calc(100vh - 10px)'
            }}
        >
            {/* <img src="/webdads/images/logo-design/New-Banner-Background.jpg" alt="" /> */}
            <Container maxWidth="lg">
                <Grid2 container alignItems="center" spacing={4}>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Typography
                            variant={isTabletOrSmaller ? 'h4' : 'h2'}
                            component="h3"
                            sx={{
                                fontWeight: 700,
                                color: 'white',
                                mb: 3,
                                lineHeight: 1.3
                            }}
                        >
                            {title}
                        </Typography>
                        <ContactButton />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box
                            component="img"
                            src={imgs}
                            alt={alt || 'Logo Design Company In Chennai'}
                            loading="lazy"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                maxWidth: '600px',
                                p: { xs: '10px', md: 0 }
                            }}
                        />
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
};

export default LogoDesignBanner;
