// import React from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import Image from 'next/image';
// import Reactimg from '../../../public/webdads/images/website-development/React-js.png';
// function WebdevService() {
//     return (
//         <>
//             <section>
//                 <Container>
//                     <Row>
//                         <div className="webdev-cont">
//                             <h2>What Web Development Services we can do!</h2>
//                             <p>All you need to keep your website 100% Secure and updated chnologies like JavaScript, PHP, and frameworks like React.js and WordPress drive creativity, crafting captivating digital realms.</p>
//                         </div>
//                     </Row>
//                     <Row className="pt-4 pb-4">
//                         <Col md={6} lg={3}>
//                             <div className="webdev-box">
//                                 <Image src={Reactimg} alt="Logo" className="img-fluid" />
//                                 <a href="/react-js-development/">
//                                     <h2>React.js</h2>
//                                 </a>
//                                 <p>Stay ahead of the curve with our expertise in React.js. We engineer lightning-fast and interactive web applications, leveraging the potential of React.js to enhance your online presence.</p>
//                             </div>
//                         </Col>
//                         <Col md={6} lg={3}>
//                             <div className="webdev-box">
//                                 <img alt="" src="/webdads/images/website-development/Wordpress.png"></img>
//                                 <a href="/wordpress-development/">
//                                     <h2>WordPress </h2>
//                                 </a>
//                                 <p>Experience the power of WordPress with our specialized development services. Whether it&apos;s a blog, e-commerce platform, or corporate website, our team crafts responsive .</p>
//                             </div>
//                         </Col>
//                         <Col md={6} lg={3}>
//                             <div className="webdev-box">
//                                 <img alt="" src="/webdads/images/website-development/php.png"></img>
//                                 <a href="/php-web-development/">
//                                     <h2>PHP</h2>
//                                 </a>
//                                 <p>Rely on our PHP development proficiency to build robust and dynamic websites tailored to your specific needs. Our solutions ensure scalability and seamless functionality.</p>
//                             </div>
//                         </Col>
//                         <Col md={6} lg={3}>
//                             <div className="webdev-box">
//                                 <img alt="" src="/webdads/images/website-development/Web-Portal.png"></img>
//                                 <a href="/web-portal-development/">
//                                     <h2>Web Portal </h2>
//                                 </a>
//                                 <p>At Webdads2u, we specialize in creating captivating web portals that serve as the gateway to your digital universe. Our meticulously crafted portals seamlessly .</p>
//                             </div>
//                         </Col>
//                     </Row>
//                 </Container>
//             </section>
//         </>
//     );
// }

// export default WebdevService;

'use client';
import React from 'react';
import { Container, Grid2, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Title from '../../../components/Title';
import Description from '../../../components/Description';
// import Reactimg from '../../../public/webdads/images/website-development/React-js.png';

const WebdevService = () => {
    const services = [
        {
            img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756887702/webdads2u/website-development/icons/react-js.png',
            alt: 'React.js',
            title: 'React.js',
            link: '/react-js-development/',
            desc: 'Stay ahead of the curve with our expertise in React.js. We engineer lightning-fast and interactive web applications, leveraging the potential of React.js to enhance your online presence.'
        },
        {
            img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756887688/webdads2u/website-development/icons/wordpress.png',
            alt: 'WordPress',
            title: 'WordPress',
            link: '/wordpress-development/',
            desc: "Experience the power of WordPress with our specialized development services. Whether it's a blog, e-commerce platform, or corporate website, our team crafts responsive solutions."
        },
        {
            img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756887628/webdads2u/website-development/icons/php.png',
            alt: 'PHP',
            title: 'PHP',
            link: '/php-web-development/',
            desc: 'Rely on our PHP development proficiency to build robust and dynamic websites tailored to your specific needs. Our solutions ensure scalability and seamless functionality.'
        },
        {
            img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756887703/webdads2u/website-development/icons/web-portal.png',
            alt: 'Web Portal',
            title: 'Web Portal',
            link: '/web-portal-development/',
            desc: 'At Webdads2u, we specialize in creating captivating web portals that serve as the gateway to your digital universe. Our meticulously crafted portals seamlessly connect businesses and users.'
        }
    ];

    return (
        <Box component="section" sx={{ p: { xs: 3.8, md: 6 }, pt: { xs: 0, md: 0 } }}>
            {/* Section Heading */}
            <motion.div initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} viewport={{ once: true, amount: 0.3 }}>
                <Box textAlign="center" maxWidth="800px" mx="auto" mb={6}>
                    {/* <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 'bold',
                                mb: 2,
                                fontSize: { xs: '1.75rem', md: '2.5rem' }
                            }}
                        >
                            What Web Development Services we can do!
                        </Typography> */}

                    <Title title={'What Web Development Services we can do!'} />
                    {/* <Typography variant="body1" sx={{ fontSize: { xs: '0.95rem', md: '1.1rem' }, color: 'text.secondary' }}>
                            All you need to keep your website 100% secure and updated. Technologies like JavaScript, PHP, and frameworks like React.js and WordPress drive creativity, crafting captivating digital realms.
                        </Typography> */}
                    <Description Des={'All you need to keep your website 100% secure and updated. Technologies like JavaScript, PHP, and frameworks like React.js and WordPress drive creativity, crafting captivating digital realms.'} />
                </Box>
            </motion.div>

            {/* Services Grid2 */}
            <Grid2 container spacing={4}>
                {services.map((service, index) => (
                    <Grid2 size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.2 }} viewport={{ once: true, amount: 0.3 }}>
                            <Box
                                sx={{
                                    p: 3,
                                    borderRadius: 3,
                                    boxShadow: 3,
                                    textAlign: 'center',
                                    height: '100%',
                                    minHeight: '320px',
                                    backgroundColor: 'background.paper',
                                    '&:hover': {
                                        boxShadow: 6,
                                        transform: 'translateY(-6px)',
                                        transition: '0.3s ease'
                                    }
                                }}
                            >
                                {/* Image */}
                                <Box mb={2} display="flex" justifyContent="center">
                                    {typeof service.img === 'string' ? (
                                        <Box component="img" src={service.img} alt={service.alt} sx={{ maxWidth: '80px', height: 'auto' }} />
                                    ) : (
                                        <Image src={service.img} alt={service.alt} style={{ maxWidth: '80px', height: 'auto' }} />
                                    )}
                                </Box>

                                {/* Title */}
                                <Typography
                                    component="a"
                                    href={service.link}
                                    variant="h6"
                                    sx={{
                                        fontWeight: 'bold',
                                        display: 'block',
                                        mb: 1,
                                        color: 'black',
                                        textDecoration: 'none',
                                        '&:hover': { textDecoration: 'underline' }
                                    }}
                                >
                                    {service.title}
                                </Typography>

                                {/* Description */}
                                <Typography variant="body2" color="text.secondary">
                                    {service.desc}
                                </Typography>
                            </Box>
                        </motion.div>
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    );
};

export default WebdevService;
