'use client';
import { Container, Grid2, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const services = [
    {
        title: 'Magento',
        img: '/webdads/images/ecommerce/magento-ecommerce.png',
        desc: 'Unleash the full potential of your online store with our Magento ecommerce website. Tailored solutions for seamless transactions and enhanced user experience.'
    },
    {
        title: 'Prestashop',
        img: '/webdads/images/ecommerce/Prestashop-ecommerce.webp',
        desc: 'Elevate your e-store with our PrestaShop services. From customization to optimization, our ecommerce website solutions ensure a profitable and efficient online business. Discover the power of PrestaShop!'
    },
    {
        title: 'WooCommerce',
        img: '/webdads/images/ecommerce/woo-commerce-ecommerce.png',
        desc: 'Transform your WordPress site into a robust online platform with our WooCommerce services. Experience unparalleled e-commerce capabilities for increased sales and customer satisfaction.'
    }
];

export default function EcommerceSection() {
    return (
        <Box component="section" sx={{ py: { xs: 6, md: 2 }, bgcolor: 'background.paper' }}>
            <Container maxWidth="lg">
                <Box textAlign="center" mb={6}>
                    <Typography variant="h2" fontWeight={700} gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
                        ECommerce Website Development
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
                        Explore top-notch ecommerce website service tailored for your business needs. Our user-friendly solutions ensure a seamless online shopping experience. Elevate your brand with our e-commerce services today!
                    </Typography>
                </Box>

                <Grid2 container spacing={4}>
                    {services.map((service, index) => (
                        <Grid2 size={{ xs: 12, md: 4 }} key={service.title}>
                            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} viewport={{ once: true }}>
                                <Box textAlign="center" px={2}>
                                    <Box
                                        component="img"
                                        src={service.img}
                                        alt={service.title}
                                        sx={{
                                            width: '120px',
                                            height: '120px',
                                            objectFit: 'contain',
                                            mb: 2
                                        }}
                                    />
                                    <Typography variant="h5" fontWeight={600} gutterBottom sx={{ color: 'primary.main' }}>
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {service.desc}
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
