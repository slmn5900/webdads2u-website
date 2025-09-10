// import React from 'react';
// import { HiLightBulb } from 'react-icons/hi';
// import { IoDiamondOutline } from "react-icons/io5";
// import { RiTeamLine } from "react-icons/ri";

// function ProfessionalExperienced() {
//     return (
//         <section className='professionalexperienced-main'>
//             <div className="container">
//                 <div className="row professionalexperienced">
//                     <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
//                         <img
//                             src="webdads/images/logo-design/Professional.png"
//                             alt="Professional"
//                             loading='lazy'
//                             className='img-fluid'
//                         />
//                     </div>
//                     <div className="col-sm-12 col-md-6 col-lg-6">
//                         <h4>Professional, Experienced and Affordable</h4>
//                         <p>WebDads2U offers professional, experienced, and affordable logo design services tailored to your brand’s unique identity. Our skilled designers craft compelling logos that resonate with your audience, ensuring your business stands out.</p>

//                         <div className="row">
//                             <div className="col-sm-12 col-md-6 col-lg-6">
//                                 <HiLightBulb className='pe-icons'/>
//                                 <h2>Creative</h2>
//                                 <p>Elevate your brand with our innovative logo design solutions, crafted to captivate your audience and leave a lasting impression.</p>
//                             </div>

//                             <div className="col-sm-12 col-md-6 col-lg-6">
//                             <IoDiamondOutline className='pe-icons'/>
//                                 <h2>Prestigious</h2>
//                                 <p>Experience the epitome of elegance and professionalism with our bespoke logo designs, tailored to reflect your brand&apos;s prestigious identity and values.</p>
//                             </div>

//                             <div className="col-sm-12 col-md-6 col-lg-6">
//                             <RiTeamLine className='pe-icons'/>
//                                 <h2>Communicative</h2>
//                                 <p>Crafting impactful visuals to resonate your brand&apos;s message and identity with precision and creativity.</p>
//                             </div>

//                             <div className="col-sm-12 col-md-6 col-lg-6">
//                                 <HiLightBulb className='pe-icons'/>
//                                 <h2>Support</h2>
//                                 <p>Support Your Business with Stunning Logo Design from WebDads2U. Elevate Your Brand Identity Today with Our Expert Creations.</p>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default ProfessionalExperienced;

'use client';
import React, { useContext } from 'react';
import { Grid2, Typography, Box, Container, useTheme, useMediaQuery } from '@mui/material';
import { HiLightBulb } from 'react-icons/hi';
import { IoDiamondOutline } from 'react-icons/io5';
import { RiTeamLine } from 'react-icons/ri';
import { MenuContext } from '../../../layout/context/menucontext';

function ProfessionalExperienced() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { pagedata } = useContext(MenuContext);
    const img = pagedata?.professional?.img1;
    const alt = pagedata?.professional?.alt;

    const features = [
        {
            icon: <HiLightBulb />,
            title: 'Creative',
            description: 'Elevate your brand with our innovative logo design solutions, crafted to captivate your audience and leave a lasting impression.'
        },
        {
            icon: <IoDiamondOutline />,
            title: 'Prestigious',
            description: "Experience the epitome of elegance and professionalism with our bespoke logo designs, tailored to reflect your brand's prestigious identity and values."
        },
        {
            icon: <RiTeamLine />,
            title: 'Communicative',
            description: "Crafting impactful visuals to resonate your brand's message and identity with precision and creativity."
        },
        {
            icon: <HiLightBulb />,
            title: 'Support',
            description: 'Support Your Business with Stunning Logo Design from WebDads2U. Elevate Your Brand Identity Today with Our Expert Creations.'
        }
    ];

    return (
        <Box
            sx={{
                py: { xs: 4, md: 8 },
                px: 2,
                mb: 5,
                backgroundColor: 'rgb(4, 74, 149)'
            }}
        >
            <Container maxWidth="lg">
                <Grid2 container spacing={4} alignItems="center">
                    {/* Image Column */}
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Box
                            component="img"
                            src={img ? img : '/webdads/images/logo-design/Professional.png'}
                            alt={alt}
                            loading="lazy"
                            sx={{
                                display: 'block',
                                margin: '0 auto',
                                width: { xs: '100%', md: '550px' },
                                maxWidth: '100%',
                                height: 'auto'
                            }}
                        />
                    </Grid2>

                    {/* Content Column */}
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Typography
                            variant={isMobile ? 'h4' : 'h3'}
                            sx={{
                                color: '#FFF',
                                fontFamily: '"Poppins", sans-serif',
                                fontWeight: 700,
                                mb: 3
                            }}
                        >
                            Professional, Experienced and Affordable
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                color: '#FFF',
                                fontFamily: '"Poppins", sans-serif',
                                fontWeight: 400,
                                mb: 4,
                                fontSize: '1rem'
                            }}
                        >
                            {` WebDads2U offers professional, experienced, and affordable logo design services tailored to your brand's unique identity. Our skilled designers craft compelling logos that resonate with your audience, ensuring your
                            business stands out.`}
                        </Typography>

                        {/* Features Grid2 */}
                        <Grid2 container spacing={3}>
                            {features.map((feature, index) => (
                                <Grid2 size={{ xs: 12, md: 6 }} key={index}>
                                    <Box
                                        sx={{
                                            color: '#FFF',
                                            textAlign: { xs: 'center', sm: 'left' }
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                fontSize: '50px',
                                                mb: 2,
                                                display: 'inline-block'
                                            }}
                                        >
                                            {feature.icon}
                                        </Box>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                color: '#FFF',
                                                fontFamily: '"Poppins", sans-serif',
                                                fontWeight: 600,
                                                mb: 2,
                                                fontSize: '1.5rem'
                                            }}
                                        >
                                            {feature.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: '#FFF',
                                                fontFamily: '"Poppins", sans-serif',
                                                fontWeight: 400,
                                                fontSize: '0.9rem'
                                            }}
                                        >
                                            {feature.description}
                                        </Typography>
                                    </Box>
                                </Grid2>
                            ))}
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
}

export default ProfessionalExperienced;
