// 'use client';
// import React from 'react';

// function Customwebdevelopmentservices() {
//     return (
//         <section className="Customwebdevelopmentservices-main">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-sm-12 col-md-12 col-lg-12 Customwebdevelopmentservices">
//                         <h2>Custom Web Development Services</h2>
//                     </div>
//                 </div>
//                 <div className="row Customwebdevelopmentservices-card">
//                     <div className="col-sm-12 col-md-6 col-lg-4 text-center">
//                         <div className="image-area">
//                             <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757401772/webdads2u/custom-web-development/icons/custome-web-design.png" alt="Custome-web-design" loading="lazy" className="img-fluid" />
//                         </div>
//                         <div className="text-area">
//                             <h3>Custom Web Designing</h3>
//                             <p>
//                                 We offer custom web design services that cater to the unique needs of your business. Custom website designs are created by our expert designers, which are visually appealing, user-friendly, and optimized for search
//                                 engines. They reflect your brand identity and help you achieve your business goals.
//                             </p>
//                         </div>
//                     </div>

//                     <div className="col-sm-12 col-md-6 col-lg-4 text-center">
//                         <div className="image-area">
//                             <img src="webdads/images/custom-web-development/Custome-web-devlopment.png" alt="Custome-web-devlopment" loading="lazy" className="img-fluid" />
//                         </div>
//                         <div className="text-area">
//                             <h3>Custom Web Development</h3>
//                             <p>
//                                 WP Web Info tech provides customized web development services that are tailored to meet the specific needs of your business. The custom websites we create are optimized for performance, security, and user experience
//                                 through the use of cutting-edge technologies and programming languages created by our expert developers.
//                             </p>
//                         </div>
//                     </div>

//                     <div className="col-sm-12 col-md-6 col-lg-4 text-center">
//                         <div className="image-area">
//                             <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757401786/webdads2u/custom-web-development/icons/ui-ux-designing.png" alt="UI-UX" loading="lazy" className="img-fluid" />
//                         </div>
//                         <div className="text-area">
//                             <h3>UI/UX Designing</h3>
//                             <p>
//                                 Our services revolve around UI/UX design that emphasizes the creation of visually stunning and user-friendly interfaces for websites and web applications. We have experienced designers who create wireframes,
//                                 prototypes, and user flows to make sure that your website design is intuitive and engaging.
//                             </p>
//                         </div>
//                     </div>

//                     <div className="col-sm-12 col-md-6 col-lg-4 text-center">
//                         <div className="image-area">
//                             <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757401784/webdads2u/custom-web-development/icons/cms-development.png" alt="CMS" loading="lazy" className="img-fluid" />
//                         </div>
//                         <div className="text-area">
//                             <h3>CMS Development</h3>
//                             <p>
//                                 Custom CMS solutions are created by our developers using popular platforms like WordPress, Drupal, Shopify, etc., that are tailored to meet the specific needs of your business. Managing your website content can be
//                                 streamlined by updating and managing it with our CMS solutions without any technical knowledge.
//                             </p>
//                         </div>
//                     </div>

//                     <div className="col-sm-12 col-md-6 col-lg-4 text-center">
//                         <div className="image-area">
//                             <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757401782/webdads2u/custom-web-development/icons/open-source-development.png" alt="Open-Source" loading="lazy" className="img-fluid" />
//                         </div>
//                         <div className="text-area">
//                             <h3>Open Source Development</h3>
//                             <p>
//                                 The use of popular open-source platforms by our expert developers in building customized websites, web applications, and eCommerce solutions is what our team does. We ensure that our open-source solutions are optimized
//                                 for performance, security, & scalability, providing our clients with a cost-effective and flexible solution.
//                             </p>
//                         </div>
//                     </div>

//                     <div className="col-sm-12 col-md-6 col-lg-4 text-center">
//                         <div className="image-area">
//                             <img src="webdads/images/custom-web-development/eCommerce.png" alt="eCommerce" loading="lazy" className="img-fluid" />
//                         </div>
//                         <div className="text-area">
//                             <h3>eCommerce Development</h3>
//                             <p>
//                                 Our team of skilled developers utilizes common eCommerce platforms to construct personalized eCommerce stores. Our eCommerce solutions are designed to be flexible, scalable, and optimized for conversion, ensuring our
//                                 clients have a reliable and flexible platform for online selling.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Customwebdevelopmentservices;

'use client';
import React from 'react';
import { Box, Container, Grid2, Typography, Card, CardContent, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const services = [
    {
        title: 'Custom Web Designing',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757401772/webdads2u/custom-web-development/icons/custome-web-design.png',
        desc: `We offer custom web design services that cater to the unique needs of your business. Custom website designs are created by our expert designers, which are visually appealing, user-friendly, and optimized for search engines. They reflect your brand identity and help you achieve your business goals.`
    },
    {
        title: 'Custom Web Development',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757401780/webdads2u/custom-web-development/icons/custom-web-devlopment.png',
        desc: `WP Web Info tech provides customized web development services that are tailored to meet the specific needs of your business. The custom websites we create are optimized for performance, security, and user experience through the use of cutting-edge technologies.`
    },
    {
        title: 'UI/UX Designing',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757401786/webdads2u/custom-web-development/icons/ui-ux-designing.png',
        desc: `Our services revolve around UI/UX design that emphasizes the creation of visually stunning and user-friendly interfaces. We create wireframes, prototypes, and user flows to ensure that your website design is intuitive and engaging.`
    },
    {
        title: 'CMS Development',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757401784/webdads2u/custom-web-development/icons/cms-development.png',
        desc: `Custom CMS solutions are created using popular platforms like WordPress, Drupal, Shopify, etc., tailored to your business. You can manage and update your content easily without technical knowledge.`
    },
    {
        title: 'Open Source Development',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757401782/webdads2u/custom-web-development/icons/open-source-development.png',
        desc: `We use popular open-source platforms to build customized websites, applications, and eCommerce solutions optimized for performance, security, and scalability, ensuring flexibility and cost-effectiveness.`
    },
    {
        title: 'eCommerce Development',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757401780/webdads2u/custom-web-development/icons/e-commerce-development.png',
        desc: `Our team of skilled developers builds scalable, conversion-optimized eCommerce stores. We ensure flexibility and reliable platforms for online selling.`
    }
];

const MotionCard = motion(Card);

export default function Customwebdevelopmentservices() {
    const theme = useTheme();

    return (
        <Box
            component="section"
            sx={{
                py: { xs: 4, md: 8 }
            }}
        >
            <Container>
                {/* Title */}
                <Typography
                    variant="h4"
                    align="center"
                    fontWeight={600}
                    gutterBottom
                    sx={{
                        fontSize: { xs: '25px', md: '35px' },
                        fontFamily: 'Poppins, sans-serif',
                        color: '#0b1225',
                        pb: 8
                    }}
                >
                    Custom Web Development Services
                </Typography>

                {/* Cards */}
                <Grid2 container spacing={4}>
                    {services.map((service, index) => (
                        <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                            <MotionCard
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: '0px 8px 24px rgba(0,0,0,0.15)',
                                    background: 'linear-gradient(-225deg, #fffeff 0%, #f4fcff 100%)'
                                }}
                                transition={{ duration: 0.3 }}
                                sx={{
                                    textAlign: 'center',
                                    borderRadius: 3,
                                    overflow: 'visible',
                                    p: 2,
                                    boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
                                    background: '#fff',
                                    height: '370px',
                                    marginBottom: 4
                                }}
                            >
                                {/* Circle Image */}
                                <Box
                                    sx={{
                                        width: 113,
                                        height: 113,
                                        borderRadius: '50%',
                                        border: '10px solid #f5f5f5',
                                        backgroundColor: '#fff',
                                        boxShadow: '0px 2px 8px #ccc',
                                        mx: 'auto',
                                        mt: -7,
                                        zIndex: 10,
                                        position: 'relative',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={service.img}
                                        alt={service.title}
                                        loading="lazy"
                                        sx={{
                                            width: 90,
                                            height: 'auto',
                                            objectFit: 'contain'
                                        }}
                                    />
                                </Box>

                                {/* Text */}
                                <CardContent sx={{ mt: -3 }}>
                                    <Typography
                                        variant="h6"
                                        fontWeight={600}
                                        gutterBottom
                                        sx={{
                                            fontFamily: 'Poppins, sans-serif',
                                            color: '#0b1225',
                                            fontSize: '20px'
                                        }}
                                    >
                                        {service.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Poppins, sans-serif',
                                            fontSize: '16px',
                                            color: '#5a5a5a'
                                        }}
                                    >
                                        {service.desc}
                                    </Typography>
                                </CardContent>
                            </MotionCard>
                        </Grid2>
                    ))}
                </Grid2>
            </Container>
        </Box>
    );
}
