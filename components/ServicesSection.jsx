// import React, { Suspense } from 'react';
// import { Container } from 'react-bootstrap';

// // Lazy load the image with Suspense
// const LazyImage = ({ src, alt }) => (
//     <Suspense fallback={<div>Loading...</div>}>
//         <img src={src} alt={alt} className="img-fluid" width="76px" height="76px" />
//     </Suspense>
// );

// const ServicesSection = () => {
//     const services = [
//         {
//             id: 'service-box-1',
//             title: 'Website Development',
//             imgSrc: '/webdads/images/home/web-development.png',
//             link: '/website-development/',
//             alt: 'web-development'
//         },
//         {
//             id: 'service-box-2',
//             title: 'SEO Services',
//             imgSrc: '/webdads/images/home/seo-services.png',
//             link: '/seo-company-in-chennai/',
//             alt: 'seo-services'
//         },
//         {
//             id: 'service-box-3',
//             title: 'Branding Design',
//             imgSrc: '/webdads/images/home/branding-design.avif',
//             link: '/branding-design/',
//             alt: 'branding-design'
//         },
//         {
//             id: 'service-box-4',
//             title: 'E-Commerce Development',
//             imgSrc: '/webdads/images/home/e-commerce-development.avif',
//             link: '/ecommerce-website-development/',
//             alt: 'e-commerce-development'
//         },
//         {
//             id: 'service-box-5',
//             title: 'Mobile App Development',
//             imgSrc: '/webdads/images/home/mobiile-app-development.avif',
//             link: '/mobile-app-development/',
//             alt: 'mobile-app-development'
//         },
//         {
//             id: 'service-box-6',
//             title: 'CRM & ERP Development',
//             imgSrc: '/webdads/images/home/crm-erp-development.avif',
//             link: '/crm-erp-development/',
//             alt: 'crm-erp-development'
//         }
//     ];

//     return (
//       <>

//         <section className=" services-section " style={{overflow: 'hidden' , backgroundImage: `linear-gradient(90deg,#871752 1%,#262250 44%)`}} >
//             <Container>
//             <div className="row justify-content-center " >
//               {/* <div className="display-4 text-center"> */}
//                 {services.map((service, index) => (
//                         <div key={index} className="col-xs-6  col-md-4 col-lg-2 text-center  width-100 height-100" style={{padding: '10px',borderRight:"1px solid white"}}>
//                             <a href={service.link} className="text-decoration-none">
//                                 <LazyImage src={service.imgSrc} alt={service.alt} style={{width: '80px', height: '80px'}} />
//                                 <h2 className="mt-3 text-white" style={{fontSize: '16px'}}>
//                                     {service.title.split(' ').map((word, i) => (
//                                         <React.Fragment key={i}>
//                                             {word} &nbsp; 

//                                         </React.Fragment>
//                                     ))}
//                                 </h2>
//                             </a>
//                         </div>
//                 ))}
//                 {/* </div> */}
//             </div>
//             </Container>
//         </section>




//         </>
//     );
// };

// export default ServicesSection;
"use client"
import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image'; // If you're using Next.js. Otherwise, fallback to <img>

// Framer Motion Variants
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
        },
    }),
    whileHover: {
        scale: 1.05,
        transition: { duration: 0.3 },
    },
};

const services = [
    {
        id: 'service-box-1',
        title: 'Website Development',
        imgSrc: '/webdads/images/home/web-development.png',
        link: '/website-development/',
        alt: 'web-development',
    },
    {
        id: 'service-box-2',
        title: 'SEO Services',
        imgSrc: '/webdads/images/home/seo-services.png',
        link: '/seo-company-in-chennai/',
        alt: 'seo-services',
    },
    {
        id: 'service-box-3',
        title: 'Branding Design',
        imgSrc: '/webdads/images/home/branding-design.avif',
        link: '/branding-design/',
        alt: 'branding-design',
    },
    {
        id: 'service-box-4',
        title: 'E-Commerce Development',
        imgSrc: '/webdads/images/home/e-commerce-development.avif',
        link: '/ecommerce-website-development/',
        alt: 'e-commerce-development',
    },
    {
        id: 'service-box-5',
        title: 'Mobile App Development',
        imgSrc: '/webdads/images/home/mobiile-app-development.avif',
        link: '/mobile-app-development/',
        alt: 'mobile-app-development',
    },
    {
        id: 'service-box-6',
        title: 'CRM & ERP Development',
        imgSrc: '/webdads/images/home/crm-erp-development.avif',
        link: '/crm-erp-development/',
        alt: 'crm-erp-development',
    },
];

const ServicesSection = () => {
    return (
        <Box
            component="section"
            sx={{
                py: 5,
                backgroundImage: 'linear-gradient(90deg,#871752 1%,#262250 44%)',
                overflow: 'hidden',
            }}
        >
            <Container>
                <Grid container spacing={3} justifyContent="center">
                    {services.map((service, index) => (
                        <Grid item key={service.id} xs={6} sm={4} md={2} sx={{
                            borderRight: {
                                md: '1px solid #433674',
                            },
                        }}>
                            <motion.a
                                href={service.link}
                                style={{ textDecoration: 'none' }}
                                custom={index}
                                initial="hidden"
                                animate="visible"
                                whileHover="whileHover"
                                variants={cardVariants}

                            >
                                <Box
                                    textAlign="center"
                                    sx={{
                                        // borderRight: {
                                        //     md: '1px solid white',
                                        // },
                                        pr: 2,
                                        pl: 2,
                                    }}
                                >
                                    <motion.img
                                        src={service.imgSrc}
                                        alt={service.alt}
                                        width={76}
                                        height={76}
                                        loading="lazy"
                                        style={{ borderRadius: 8 }}
                                    />
                                    <Typography
                                        variant="subtitle1"
                                        sx={{ mt: 2, color: 'white', fontSize: '16px', fontWeight: 500, fontFamily: "Poppins" }}
                                    >
                                        {service.title}
                                    </Typography>
                                </Box>
                            </motion.a>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default ServicesSection;
