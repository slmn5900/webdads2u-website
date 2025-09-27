'use client';
import { Container, Grid2, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Title from '../../../../components/Title';
import Description from '../../../../components/Description';

const MotionBox = motion(Box);

const shopifyServices = [
    {
        title: 'Custom Shopify Development',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757583287/webdads2u/shopify-development/icons/custom-shopify-development.png',
        description:
            'When it comes to bespoke Shopify development, we stand out as industry leaders. Our Shopify development services are unique because they incorporate advanced features and are specifically designed to meet the needs of your eCommerce business.'
    },
    {
        title: 'Shopify Theme Development',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757583282/webdads2u/shopify-development/icons/shopify-theme-development.png',
        description: "By applying these themes, we enhance your customer's online shopping experience and make it more interactive and enjoyable."
    },
    {
        title: 'Shopify Upgradation',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757583311/webdads2u/shopify-development/icons/shopify-upgradation.png',
        description: 'Your Shopify stores will receive timely upgrades from us, ensuring that every visit delivers exceptional experiences for buyers. Concept Infoway ensures smooth migrations and data safety.'
    },
    {
        title: 'Shopify Integration Services',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757583305/webdads2u/shopify-development/icons/shopify-integration-services.png',
        description: 'Being a comprehensive Shopify development company, we provide third-party integration services. We help integrate features like shopping carts and APIs seamlessly.'
    },
    {
        title: 'PSD to Shopify Development',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757583299/webdads2u/shopify-development/icons/psd-to-shopify-development.png',
        description: 'Concept Infoway expands its offerings to include code conversion services, catering to various formats like PSD to Shopify, Sketch, JPEG, PDF, Figma, PSD, and more.'
    },
    {
        title: 'Shopify eCommerce Development',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757583293/webdads2u/shopify-development/icons/shopify-ecommerce-development.png',
        description: 'Rely on our proficient team of Shopify specialists to craft eCommerce stores that excel in both features and performance. Full customization options available.'
    }
];

export default function ShopifyServices() {
    return (
        <Box component="section" sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
            <Container>
                {/* Header */}
                <Box textAlign="center" mb={6}>
                    <Title title="Shopify Development Services We Offer" />
                    {/* <Typography variant="h4" component="h2" gutterBottom>
                        Shopify Development Services We Offer
                    </Typography> */}
                    <Description
                        mdalign={'center'}
                        Des=" Our Shopify experts are dedicated to providing you with all the support you need, whether you’re looking to establish an online presence for your business or migrate to the Shopify platform. Shopify development services
                        offered by Concept Infoway encompass a diverse range of offerings, such as:
                    "
                    />
                    {/* <Typography variant="body1" color="text.secondary">
                        Our Shopify experts are dedicated to providing you with all the support you need, whether you’re looking to establish an online presence for your business or migrate to the Shopify platform. Shopify development services
                        offered by Concept Infoway encompass a diverse range of offerings, such as:
                    </Typography> */}
                </Box>

                {/* Services Grid2 */}
                <Grid2 container spacing={4}>
                    {shopifyServices.map((service, index) => (
                        <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                            <MotionBox
                                whileHover={{ scale: 1.05 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                sx={{
                                    backgroundColor: '#fff',
                                    borderRadius: 3,
                                    p: 3,
                                    textAlign: 'center',
                                    boxShadow: 3,
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start'
                                }}
                            >
                                <Box component="img" src={service.img} alt={service.title} sx={{ width: '100%', height: 100, objectFit: 'contain', mb: 2 }} />
                                <Typography variant="h6" gutterBottom>
                                    {service.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {service.description}
                                </Typography>
                            </MotionBox>
                        </Grid2>
                    ))}
                </Grid2>
            </Container>
        </Box>
    );
}
