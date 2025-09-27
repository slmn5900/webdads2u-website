'use client';
import { Container, Grid2, Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { MdDoubleArrow } from 'react-icons/md';
import { motion } from 'framer-motion';
import Title from '../../../../components/Title';
import Description from '../../../../components/Description';

const MotionBox = motion(Box);

const whyShopifyList = [
    'Expert Shopify Developers',
    'Custom Shopify Development',
    'Security-Focused Shopify Development',
    'Migration to Shopify',
    'Enterprise Delivery Practices',
    'Focus on Standards and Quality',
    'POS, CRM, & ERP Integrations',
    'High-Performance and Scalable solution'
];

export default function WhyShopify() {
    return (
        <Box component="section" sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
            <Container>
                <Grid2 container spacing={4} alignItems="center">
                    {/* Image */}
                    <Grid2 size={{ xs: 12, lg: 6 }}>
                        <MotionBox whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <Box component="img" src="/webdads/images/shopify/why-shopify.webp" alt="Shopify service" sx={{ width: '100%', borderRadius: 2 }} />
                        </MotionBox>
                    </Grid2>

                    {/* Content */}
                    <Grid2 size={{ xs: 12, lg: 6 }}>
                        <MotionBox whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <Title title={'Why Webdads2u for Shopify Website Development Services?'} />
                            {/* <Typography variant="h4" gutterBottom>
                                Why Webdads2u for Shopify Website Development Services?
                            </Typography> */}
                            <Description Des="All Shopify eCommerce solutions are available to us, regardless of their complexity." />
                            {/* <Typography variant="body1" color="text.secondary" mb={3}>
                                All Shopify eCommerce solutions are available to us, regardless of their complexity.
                            </Typography> */}

                            <List>
                                {whyShopifyList.map((item, index) => (
                                    <ListItem key={index} sx={{ py: 0.5 }}>
                                        <ListItemIcon sx={{ minWidth: 30, color: 'primary.main' }}>
                                            <MdDoubleArrow />
                                        </ListItemIcon>
                                        <ListItemText primary={item} />
                                    </ListItem>
                                ))}
                            </List>
                        </MotionBox>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
}
