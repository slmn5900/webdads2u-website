// import { Container } from '@mui/material';
// import React from 'react';
// import { Col, Row } from 'react-bootstrap';

// export default function WhyDoYou() {
//     return (
//         <section className="our-cuscrm pt-5 pb-5">
//             <Container>
//                 <Row>
//                     <div className="text-center">
//                         <h2>Why Do You Need a Custom CRM Software Development for Your Business?</h2>
//                     </div>
//                     <Col md={6} lg={4}>
//                         <div className="shopify-weoffer">
//                             <img alt="" src="/webdads/images/customized-erp/Expert-ERP-Implementations.png"></img>
//                             <h3>Automated Sales Operations</h3>
//                             <p>
//                                 Your sales team can now spend more time attracting and engaging with the right audience with a customized CRM Software Development . The responsibility of filling out forms, producing reports, or raising legal issues
//                                 has been abolished.
//                             </p>
//                         </div>
//                     </Col>
//                     <Col md={6} lg={4}>
//                         <div className="shopify-weoffer">
//                             <img alt="" src="/webdads/images/customized-erp/Custom-ERP-Development.png"></img>
//                             <h3>Real-time Analysis and Reports </h3>
//                             <p>
//                                 Our CRM Software Development tool is custom built with advanced tools, plugins, and intelligent technologies that give you a quick overview of actual sales, conversions, customer interaction information, and much more.
//                             </p>
//                         </div>
//                     </Col>
//                     <Col md={6} lg={4}>
//                         <div className="shopify-weoffer">
//                             <img alt="" src="/webdads/images/customized-erp/Seamless-Data-Migrations.png"></img>
//                             <h3>Better Customer Information</h3>
//                             <p>Every customer is a valuable asset to any business. To fully understand the value of each customer, it is imperative to understand their behavior, interactions, purchase history, buying patterns, and demographics.</p>
//                         </div>
//                     </Col>
//                     <Col md={6} lg={4}>
//                         <div className="shopify-weoffer">
//                             <img alt="" src="/webdads/images/customized-erp/Bespoke-Solutions.png"></img>
//                             <h3>Increased Productivity </h3>
//                             <p>We develop a customized CRM Service development that enables you to simplify customer interaction, customer care, sales, and marketing for employees by providing them with precise customer details</p>
//                         </div>
//                     </Col>
//                     <Col md={6} lg={4}>
//                         <div className="shopify-weoffer">
//                             <img alt="" src="/webdads/images/customized-erp/Effective-Integration-Services.png"></img>
//                             <h3>Enhanced Lead Management</h3>
//                             <p>Our custom CRM developers carefully design a CRM system that can effectively manage your lead management operations to increase your customer engagement and conversion rates.</p>
//                         </div>
//                     </Col>
//                     <Col md={6} lg={4}>
//                         <div className="shopify-weoffer">
//                             <img alt="" src="/webdads/images/customized-erp/ERP-System-Configurations.png"></img>
//                             <h3>High Data Security</h3>
//                             <p>
//                                 Keeping your confidential data secure is necessary because a CRM system stores so much customer and business data. A highly secured and centralized CRM system is developed by our custom CRM software developers with the
//                                 use of reliable security systems.
//                             </p>
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>
//         </section>
//     );
// }
'use client';
import React from 'react';
import { Container, Grid2, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Title from '../../../../components/Title';

const items = [
    {
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1758180579/webdads2u/customized-crm/icons/automated-sales-operations.png',
        title: 'Automated Sales Operations',
        desc: `Your sales team can now spend more time attracting and engaging with 
    the right audience with a customized CRM Software Development. 
    The responsibility of filling out forms, producing reports, or raising legal issues has been abolished.`
    },
    {
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1758180583/webdads2u/customized-crm/icons/real-time-analysis-and-reports.png',
        title: 'Real-time Analysis and Reports',
        desc: `Our CRM Software Development tool is custom built with advanced tools, 
    plugins, and intelligent technologies that give you a quick overview of actual sales, 
    conversions, customer interaction information, and much more.`
    },
    {
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1758180588/webdads2u/customized-crm/icons/better-customer-information.png',
        title: 'Better Customer Information',
        desc: `Every customer is a valuable asset to any business. To fully understand the value of each customer, 
    it is imperative to understand their behavior, interactions, purchase history, buying patterns, and demographics.`
    },
    {
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1758180591/webdads2u/customized-crm/icons/increased-productivity.png',
        title: 'Increased Productivity',
        desc: `We develop a customized CRM Service development that enables you to simplify customer interaction, 
    customer care, sales, and marketing for employees by providing them with precise customer details.`
    },
    {
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1758180595/webdads2u/customized-crm/icons/enhanced-lead-management.png',
        title: 'Enhanced Lead Management',
        desc: `Our custom CRM developers carefully design a CRM system that can effectively manage your 
    lead management operations to increase your customer engagement and conversion rates.`
    },
    {
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1758180599/webdads2u/customized-crm/icons/high-data-security.png',
        title: 'High Data Security',
        desc: `Keeping your confidential data secure is necessary because a CRM system stores so much 
    customer and business data. A highly secured and centralized CRM system is developed by our custom CRM software developers.`
    }
];

export default function WhyDoYou() {
    return (
        <Box component="section" className="our-cuscrm" py={6}>
            <Container>
                <Box textAlign="center" mb={5}>
                    <Title title={'Why Do You Need a Custom CRM Software Development for Your Business?'} />
                    {/* <Typography variant="h4" fontWeight={600} gutterBottom>
                        Why Do You Need a Custom CRM Software Development for Your Business?
                    </Typography> */}
                </Box>
                <Grid2 container spacing={4}>
                    {items.map((item, index) => (
                        <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} viewport={{ once: true }}>
                                <Box
                                    textAlign="center"
                                    p={3}
                                    sx={{
                                        borderRadius: 3,
                                        boxShadow: 3,
                                        bgcolor: 'background.paper',
                                        height: 340,
                                        transition: '0.3s',

                                        '&:hover': {
                                            boxShadow: 6,
                                            transform: 'translateY(-5px)'
                                        }
                                    }}
                                >
                                    <Box component="img" src={item.img} alt={item.title} sx={{ width: 80, height: 80, mb: 2 }} />
                                    <Typography variant="h6" fontWeight={600} gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.desc}
                                    </Typography>
                                </Box>
                            </motion.div>
                        </Grid2>
                    ))}
                </Grid2>
            </Container>
        </Box>
    );
}
