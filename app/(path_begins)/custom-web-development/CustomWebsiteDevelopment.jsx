// 'use client';
// import { Box } from '@mui/material';
// import React from 'react';

// function Customwebsitedevelopment() {
//     return (
//         <Box
//             className="customwebsitedevelopment-main"

//         >
//             <div className="container">
//                 <div className="row align-items-center">
//                     <div className="col-sm-12 col-md-4 col-lg-4 customwebsitedevelopment-backgrount">
//                         <div>
//                             <h2>Custom Website Developmen</h2>
//                             <p>Our expert team specializes in Custom Website Development tailored to your unique needs. From simple websites to complex web applications, we have the skills and expertise to bring your vision to life.</p>
//                             <button>Contact us</button>
//                         </div>
//                     </div>
//                     <div className="col-sm-12 col-md-8 col-lg-8 customwebsitedevelopment-card">
//                         <div className="d-flex flex-row mb-3 text-center element">
//                             <div className="card m-2">
//                                 <div>
//                                     <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757401779/webdads2u/custom-web-development/icons/web-hosting.png" alt="Web-Hosting" loading="lazy" className="img-fluid" />
//                                 </div>
//                                 <h5>Web Hosting</h5>
//                                 <p>Reliable and secure web hosting services to ensure your website is always up and running smoothly.</p>
//                             </div>
//                             <div className="card m-2">
//                                 <div>
//                                     <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757401777/webdads2u/custom-web-development/icons/web-development.png" alt="Web-Development" loading="lazy" className="img-fluid" />
//                                 </div>
//                                 <h5>Web Development</h5>
//                                 <p>Stunning and user-friendly web design that captures your brand identity and engages your audience.</p>
//                             </div>
//                         </div>
//                         <div className="d-flex flex-row mb-3 text-center element">
//                             <div className="card m-2">
//                                 <div>
//                                     <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757401775/webdads2u/custom-web-development/icons/mobile-app-development.png" alt="Mobile-App-Development" loading="lazy" className="img-fluid" />
//                                 </div>
//                                 <h5>Mobile App Development</h5>
//                                 <p>Comprehensive web development services to build scalable and feature-rich websites and web applications.</p>
//                             </div>
//                             <div className="card m-2">
//                                 <div>
//                                     <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757401775/webdads2u/custom-web-development/icons/mobile-app-development.png" alt="Web-Development" loading="lazy" className="img-fluid" />
//                                 </div>
//                                 <h5>Digital Marketing</h5>
//                                 <p>Strategic digital marketing solutions to drive traffic, leads, and sales to your website. From search engine optimization (SEO) to social media marketing and pay-per-click advertising.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </Box>
//     );
// }

// export default Customwebsitedevelopment;

'use client';
import React from 'react';
import { Box, Container, Grid2, Typography, Button, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const services = [
    {
        title: 'Web Hosting',
        description: 'Reliable and secure web hosting services to ensure your website is always up and running smoothly.',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757401779/webdads2u/custom-web-development/icons/web-hosting.png'
    },
    {
        title: 'Web Development',
        description: 'Stunning and user-friendly web design that captures your brand identity and engages your audience.',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757401777/webdads2u/custom-web-development/icons/web-development.png'
    },
    {
        title: 'Mobile App Development',
        description: 'Comprehensive web development services to build scalable and feature-rich websites and web applications.',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757401775/webdads2u/custom-web-development/icons/mobile-app-development.png'
    },
    {
        title: 'Digital Marketing',
        description: 'Strategic digital marketing solutions to drive traffic, leads, and sales to your website. From SEO to social media and PPC.',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757401773/webdads2u/custom-web-development/icons/digital-marketing.png'
    }
];

function Customwebsitedevelopment() {
    return (
        <Box sx={{ py: 8 }}>
            <Container>
                <Grid2 container spacing={4} alignItems="center">
                    {/* Left Content */}
                    <Grid2
                        size={{ xs: 12, md: 4 }}
                        sx={{
                            padding: '138px 15px',
                            background: "url('https://res.cloudinary.com/dbpv95wd8/image/upload/v1757401737/webdads2u/custom-web-development/custom-web-development-services.webp') no-repeat center/cover",
                            height: '100%',
                            minHeight: 'calc(100vh - 20px)',
                            position: 'relative',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                inset: 0,
                                bgcolor: 'rgba(0, 0, 0, 0.78)', // overlay color
                                zIndex: 0
                            }
                        }}
                    >
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: { xs: 25, md: 35 },
                                fontWeight: 600,
                                fontFamily: 'Poppins, sans-serif',
                                color: '#ffff',
                                mb: 2,
                                zIndex: 333,
                                position: 'relative'
                            }}
                        >
                            Custom Website Development
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: 16,
                                fontFamily: 'Poppins, sans-serif',
                                color: 'white',
                                position: 'relative',
                                mb: 3
                            }}
                        >
                            Our expert team specializes in Custom Website Development tailored to your unique needs. From simple websites to complex web applications, we have the skills and expertise to bring your vision to life.
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                background: '#ffffffff',
                                color: '#040404ff',
                                borderRadius: '30px',
                                px: 4,
                                py: 1,
                                textTransform: 'none',
                                fontWeight: 600,
                                '&:hover': { background: '#333' }
                            }}
                        >
                            Contact Us
                        </Button>
                    </Grid2>

                    {/* Cards */}
                    <Grid2 size={{ xs: 12, md: 8 }}>
                        <Grid2 container spacing={3}>
                            {services.map((service, index) => (
                                <Grid2 size={{ xs: 12, sm: 6 }} key={index}>
                                    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} viewport={{ once: true }}>
                                        <Card
                                            sx={{
                                                height: '100%',
                                                boxShadow: '1px 0 5px #ccc',
                                                borderRadius: 2,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'flex-start',
                                                alignItems: 'center',
                                                p: 2,
                                                textAlign: 'center',
                                                transition: '0.3s',
                                                '&:hover': {
                                                    background: 'linear-gradient(-225deg,#fffeff 0,#f4fcff 100%)',
                                                    boxShadow: '1px 0 20px #ccc',
                                                    border: '1px solid #6cd1ff'
                                                }
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 113,
                                                    height: 113,
                                                    borderRadius: '50%',
                                                    border: '10px solid #f5f5f5',
                                                    background: '#fff',
                                                    boxShadow: '1px 0 5px #ccc',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    mb: -6,
                                                    zIndex: 1,
                                                    position: 'relative'
                                                }}
                                            >
                                                <img src={service.img} alt={service.title} width={70} height={70} loading="lazy" />
                                            </Box>
                                            <CardContent
                                                sx={{
                                                    mt: 6,
                                                    flexGrow: 1
                                                }}
                                            >
                                                <Typography
                                                    variant="h5"
                                                    sx={{
                                                        fontSize: 20,
                                                        fontWeight: 600,
                                                        fontFamily: 'Poppins, sans-serif',
                                                        mb: 1,
                                                        color: '#0b1225'
                                                    }}
                                                >
                                                    {service.title}
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontSize: 16,
                                                        fontFamily: 'Poppins, sans-serif',
                                                        color: '#5a5a5a'
                                                    }}
                                                >
                                                    {service.description}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </Grid2>
                            ))}
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
}

export default Customwebsitedevelopment;
