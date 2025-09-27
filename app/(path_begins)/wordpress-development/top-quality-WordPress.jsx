// import React from 'react'

// function TopQualityWordPress() {
//   return (
//     <section className='topqualitywordPress-main'>
//         <div className="container">
//             <div className="row text-center justify-content-center topqualitywordPress">
//                 <div className="col-sm-12 col-lg-10">
//                     <h1>We deliver top-quality WordPress web development solutions for website designing.</h1>
//                     <p>We provide eCommerce solutions that are perfect for your business by developing feature-rich and high-performing WordPress eCommerce websites.</p>
//                 </div>
//             </div>
//         </div>
//         <div className="container">
//             <div className="row topqualitywordPress-card">
//                 <div className="col-sm-12 col-md-4 col-lg-4 mb-4 text-center">
//                     <div className="card p-2">
//                         <div>
//                             <img src="webdads/images/wordpress-development/Wordpress-eCommerce-Solutions.png" alt="Wordpress-eCommerce-Solutions" className='img-fluid' loading='lazy' />
//                         </div>
//                         <div className="card-title"><h1>WordPress eCommerce Solutions</h1></div>
//                         <div className="card-body"><p>We provide eCommerce solutions that are perfect for your business by developing feature-rich and high-performing WordPress eCommerce websites.</p></div>
//                     </div>
//                 </div>

//                 <div className="col-sm-12 col-md-4 col-lg-4 mb-4 text-center">
//                     <div className="card-main p-2">
//                         <div>
//                             <img src="webdads/images/wordpress-development/Security-Enhancement.png" alt="Security-Enhancement" className='img-fluid' loading='lazy' />
//                         </div>
//                         <div className="card-title"><h2>Security Enhancement</h2></div>
//                         <div className="card-body"><p style={{ color: '#fff' }}>By utilizing security extensions and multiple security methods, we ensure the security and confidentiality of your website against unauthorized access.</p></div>
//                     </div>
//                 </div>

//                 <div className="col-sm-12 col-md-4 col-lg-4 mb-4 text-center">
//                     <div className="card p-2">
//                         <div>
//                             <img src="webdads/images/wordpress-development/wordpress-seo.png" alt="wordpress-seo" className='img-fluid' loading='lazy' />
//                         </div>
//                         <div className="card-title"><h1>SEO Optimization</h1></div>
//                         <div className="card-body"><p>To make your website friendlier to popular search engines, follow the SEO checklist, including performance, header usage, metadata, schema embed, and other aspects.</p></div>
//                     </div>
//                 </div>
//             </div>

//             <div className="row topqualitywordPress-card">
//                 <div className="col-sm-12 col-md-4 col-lg-4 mb-4 text-center">
//                     <div className="card p-2">
//                         <div>
//                             <img src="webdads/images/wordpress-development/Wordpress-eCommerce-Solutions.png" alt="Wordpress-eCommerce-Solutions" className='img-fluid' loading='lazy' />
//                         </div>
//                         <div className="card-title"><h1>Theme Utilization</h1></div>
//                         <div className="card-body"><p>To make website setup and management easier for users without technical skills, we incorporate advanced features that are built-in.</p></div>
//                     </div>
//                 </div>

//                 <div className="col-sm-12 col-md-4 col-lg-4 mb-4 text-center">
//                     <div className="card-main p-2">
//                         <div>
//                             <img src="webdads/images/wordpress-development/Security-Enhancement.png" alt="Security-Enhancement" className='img-fluid' loading='lazy' />
//                         </div>
//                         <div className="card-title"><h2>Flexible and easy to customize</h2></div>
//                         <div className="card-body"><p style={{ color: '#fff' }}>Our team develops tools and widgets for important features on every website that allow users to make updates and customizations later.</p></div>
//                     </div>
//                 </div>

//                 <div className="col-sm-12 col-md-4 col-lg-4 mb-4 text-center">
//                     <div className="card p-2">
//                         <div>
//                             <img src="webdads/images/wordpress-development/wordpress-seo.png" alt="wordpress-seo" className='img-fluid' loading='lazy' />
//                         </div>
//                         <div className="card-title"><h1>Extensions & Plugins</h1></div>
//                         <div className="card-body"><p>Using extensions that have been rated highly and tailoring them to meet the demands of various projects.</p></div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default TopQualityWordPress

'use client';

import React from 'react';
import { Container, Grid2, Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import Title from '../../../components/Title';
import Description from '../../../components/Description';

const services = [
    {
        title: 'WordPress eCommerce Solutions',
        desc: 'We provide eCommerce solutions that are perfect for your business by developing feature-rich and high-performing WordPress eCommerce websites.',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757333735/webdads2u/wordpress-development/icons/wordpress-ecommerce-solution.png'
    },
    {
        title: 'Security Enhancement',
        desc: 'By utilizing security extensions and multiple security methods, we ensure the security and confidentiality of your website against unauthorized access.',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757333730/webdads2u/wordpress-development/icons/security-enhancement.png',
        dark: true
    },
    {
        title: 'SEO Optimization',
        desc: 'To make your website friendlier to popular search engines, follow the SEO checklist, including performance, header usage, metadata, schema embed, and other aspects.',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757333415/webdads2u/wordpress-development/icons/wordpress-seo.png'
    },
    {
        title: 'Theme Utilization',
        desc: 'To make website setup and management easier for users without technical skills, we incorporate advanced features that are built-in.',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757333860/webdads2u/wordpress-development/icons/theme-utilization-wordpress.png'
    },
    {
        title: 'Flexible & Easy to Customize',
        desc: 'Our team develops tools and widgets for important features on every website that allow users to make updates and customizations later.',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757333850/webdads2u/wordpress-development/icons/flexible-and-easy-to-customize.png',
        dark: true
    },
    {
        title: 'Extensions & Plugins',
        desc: 'Using extensions that have been rated highly and tailoring them to meet the demands of various projects.',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757333839/webdads2u/wordpress-development/icons/wordpress-plugin.png'
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
    })
};

export default function TopQualityWordPress() {
    return (
        <Box sx={{ p: { xs: 3.8, md: 6 }, pt: { xs: 0, md: 0 } }}>
            <Container maxWidth="lg">
                {/* Heading */}
                <Box textAlign="center" mb={6}>
                    <Title fontxs={'16px'} title={'  We deliver top-quality WordPress web development solutions'} />
                    {/* <Typography variant="h4" fontWeight="bold" gutterBottom fontSize={{ xs: '1.125rem', md: '2.125rem' }}>
                        We deliver top-quality WordPress web development solutions
                    </Typography> */}

                    <Description Des="We provide eCommerce solutions that are perfect for your business by developing feature-rich and high-performing WordPress eCommerce websites." />
                    {/* <Typography variant="body1" color="text.secondary" maxWidth="md" mx="auto">
                        We provide eCommerce solutions that are perfect for your business by developing feature-rich and high-performing WordPress eCommerce websites.
                    </Typography> */}
                </Box>

                {/* Cards */}
                <Grid2 container spacing={4}>
                    {services.map((service, i) => (
                        <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                            <motion.div custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={cardVariants}>
                                <Card
                                    sx={{
                                        height: { xs: '370px', md: '320px' },
                                        textAlign: 'center',
                                        p: 3,
                                        bgcolor: service.dark ? '#0A1F5F' : '#F1FBFF',
                                        color: service.dark ? 'white' : 'text.primary',
                                        borderRadius: 3,
                                        boxShadow: 3,
                                        transition: 'all 0.3s ease',
                                        '&:hover': { transform: 'translateY(-6px)', boxShadow: 6 }
                                    }}
                                >
                                    <Box mb={2}>
                                        <img src={service.img} alt={service.title} loading="lazy" style={{ maxWidth: 80, margin: 'auto' }} />
                                    </Box>
                                    <CardContent sx={{ p: 0 }}>
                                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                                            {service.title}
                                        </Typography>
                                        <Typography variant="body2">{service.desc}</Typography>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid2>
                    ))}
                </Grid2>
            </Container>
        </Box>
    );
}
