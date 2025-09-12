'use client';
import React from 'react';
import { Grid2, Card, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const benefits = [
    {
        title: 'CMS Development',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757503287/webdads2u/branding-design/icons/system.png',
        desc: 'PHP powers versatile CMS platforms like WordPress, Joomla, and Drupal, facilitating easy content management and customization for dynamic websites, ensuring an engaging user experience.'
    },
    {
        title: 'Use in Ecommerce Development',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757400090/webdads2u/php-web-development/icons/e-commerce-solutions.png',
        desc: 'Leveraging PHP, robust e-commerce solutions like Magneto and WooCommerce are developed, offering secure, scalable platforms for online businesses to flourish, driving sales and customer satisfaction.'
    },
    {
        title: 'Applications Used in Education',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757400089/webdads2u/php-web-development/icons/study-icon.png',
        desc: 'PHP facilitates the creation of educational portals, learning management systems, and student management systems, optimizing processes and enhancing collaboration among students and educators.'
    },
    {
        title: 'Easy Access to Support',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757400088/webdads2u/php-web-development/icons/hospital-management.png',
        desc: "With PHP's extensive online community and comprehensive documentation, developers have ready access to support, troubleshooting, and resources, ensuring smooth development and efficient problem-solving."
    },
    {
        title: 'Customized Application Development',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757400087/webdads2u/php-web-development/icons/customized-application-development.png',
        desc: 'PHP enables highly customized application development, offering flexibility to tailor solutions to unique business needs with dynamic functionality and seamless integration.'
    },
    {
        title: 'CRM Development',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757400086/webdads2u/php-web-development/icons/crm-development.png',
        desc: 'CRM (Customer Relationship Management) helps businesses keep customers happy and build strong relationships. PHP powers robust CRM systems that improve retention and customer satisfaction.'
    },
    {
        title: 'ERP Development',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757400088/webdads2u/php-web-development/icons/hospital-management.png',
        desc: 'PHP empowers the creation of ERP systems, streamlining business operations, resource management, and productivity enhancement, driving efficiency and growth for organizations of all sizes.'
    },
    {
        title: 'Web Services Application Development',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757400084/webdads2u/php-web-development/icons/web-service-application-dvelopment.avif',
        desc: 'PHP facilitates the development of Restful APIs and SOAP services, enabling seamless communication between diverse applications and platforms for optimized performance.'
    }
];

export default function BenefitsofPHP() {
    return (
        <Box component="section" sx={{ py: 6, px: { xs: 2, md: 8 }, backgroundColor: '#f9f9f9' }}>
            <Box textAlign="center" mb={5}>
                <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { xs: '1rem', md: '2.3rem' } }}>
                    Benefits of PHP for
                </Typography>
                <Typography variant="h4" fontWeight="bold" color="primary" sx={{ fontSize: { xs: '1rem', md: '2.3rem' } }}>
                    Web Development and Design
                </Typography>
            </Box>

            <Grid2 container spacing={4} justifyContent="center">
                {benefits.map((item, index) => (
                    <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
                        <motion.div whileHover={{ scale: 1.05 }} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                            <Card
                                sx={{
                                    borderRadius: 3,
                                    boxShadow: 4,
                                    textAlign: 'center',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    minHeight: { xs: 0, md: 200 },
                                    '&:hover .overlay': {
                                        opacity: 1,
                                        transform: 'translateY(0)'
                                    }
                                }}
                            >
                                <Box p={3}>
                                    <Box
                                        component="img"
                                        src={item.img}
                                        alt={item.title}
                                        loading="lazy"
                                        sx={{
                                            width: 80,
                                            height: 80,
                                            objectFit: 'contain',
                                            mb: 2
                                        }}
                                    />
                                    <Typography variant="h6" fontWeight="bold" fontSize={{ xs: '15px', md: '15px' }}>
                                        {item.title}
                                    </Typography>
                                </Box>

                                {/* Overlay on hover */}
                                <Box
                                    className="overlay"
                                    sx={{
                                        position: 'absolute',
                                        inset: 0,
                                        bgcolor: 'rgba(0,0,0,0.85)',
                                        color: '#fff',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        px: 2,
                                        py: 3,
                                        opacity: 0,
                                        transform: 'translateY(100%)',
                                        transition: 'all 0.4s ease-in-out'
                                    }}
                                >
                                    <Typography variant="body2">{item.desc}</Typography>
                                </Box>
                            </Card>
                        </motion.div>
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    );
}
