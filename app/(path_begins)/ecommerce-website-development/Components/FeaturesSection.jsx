'use client';
import { Box, Container, Grid2, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Title from '../../../../components/Title';
import Description from '../../../../components/Description';
const features = [
    { title: 'User Account', img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757575720/webdads2u/ecommerce-website-development/icons/user-accounts.png', type: 'left' },
    { title: 'Sign With Social Media', img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757575806/webdads2u/ecommerce-website-development/icons/sign-social.png', type: 'right' },
    { title: 'Shipping', img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757575802/webdads2u/ecommerce-website-development/icons/shipping-pay.png', type: 'left' },
    { title: 'Payment', img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757575797/webdads2u/ecommerce-website-development/icons/payment.png', type: 'right' },
    // { title: 'Commission Management', img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757575793/webdads2u/ecommerce-website-development/icons/search-filter.png', type: 'left', altColor: true },
    { title: 'User Account', img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757575793/webdads2u/ecommerce-website-development/icons/search-filter.png', type: 'right', altColor: true },
    { title: 'Push Notifications', img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757575789/webdads2u/ecommerce-website-development/icons/push-notifications.png', type: 'left', altColor: true },
    { title: 'Multi-lingual', img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757575785/webdads2u/ecommerce-website-development/icons/multi-lingual.png', type: 'right', altColor: true },
    { title: 'Blog', img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757575777/webdads2u/ecommerce-website-development/icons/blog.png', type: 'right', altColor: true }
];
export default function FeaturesSection() {
    return (
        // <Box sx={{ py: 8 }}>
        //     <Container>
        //         {/* Title */}
        //         <Box textAlign="center" mb={4}>
        //             <Typography variant="h4" sx={{ color: '#000', fontWeight: 700 }}>
        //                 Features of Multi-Vendor
        //             </Typography>
        //             <Typography variant="body1" sx={{ maxWidth: 700, mx: 'auto', mt: 2 }}>
        //                 If you are looking for innovative solutions and unparalleled expertise, your search ends here. Explore a world of possibilities as we deliver exceptional services tailored to meet your unique needs. Your success is our
        //                 priority.
        //             </Typography>
        //         </Box>

        //         {/* First Row */}
        //         <Grid2 container spacing={4} justifyContent="center">
        //             <Grid2 size={{ xs: 6, md: 3 }}>
        //                 <FeatureCard src="/webdads/images/ecommerce/user-accounts.png" title="User Account" left />
        //             </Grid2>
        //             <Grid2 size={{ xs: 6, md: 3 }}>
        //                 <FeatureCard src="/webdads/images/ecommerce/Sign-social.png" title="Sign With Social Media" left={false} />
        //             </Grid2>
        //             <Grid2 size={{ xs: 6, md: 3 }}>
        //                 <FeatureCard src="/webdads/images/ecommerce/shipping-pay.png" title="Shipping" left />
        //             </Grid2>
        //             <Grid2 size={{ xs: 6, md: 3 }}>
        //                 <FeatureCard src="/webdads/images/ecommerce/Payment.png" title="Payment" left={false} />
        //             </Grid2>
        //         </Grid2>

        //         {/* Second Row */}
        //         <Grid2 container spacing={4} justifyContent="center" mt={5}>
        //             <Grid2 size={{ xs: 6, md: 3 }}>
        //                 <FeatureCard src="/webdads/images/ecommerce/Search-Filter.png" title="Search Filter" left />
        //             </Grid2>
        //             <Grid2 size={{ xs: 6, md: 3 }}>
        //                 <FeatureCard src="/webdads/images/ecommerce/Push-Notifications.png" title="Push Notifications" left={false} />
        //             </Grid2>
        //             <Grid2 size={{ xs: 6, md: 3 }}>
        //                 <FeatureCard src="/webdads/images/ecommerce/Multi-lingual.png" title="Multi-lingual" left />
        //             </Grid2>
        //             <Grid2 size={{ xs: 6, md: 3 }}>
        //                 <FeatureCard src="/webdads/images/ecommerce/Blog.png" title="Blog" left={false} />
        //             </Grid2>
        //         </Grid2>
        //     </Container>
        // </Box>

        <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
            <Container maxWidth="lg">
                {/* Heading */}
                <Box textAlign="center" mb={6}>
                    <Title title="Features of Multi-Vendor" />
                    {/* <Typography variant="h2" fontWeight={700} gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, color: '#000' }}>
                        Features of Multi-Vendor
                    </Typography> */}
                    <Description
                        mdalign={'center'}
                        Des="   Explore the dynamic world of multi-vendor ecommerce website. Empower your platform with features like vendor management, secure transactions, and customizable storefronts. Boost your business and create a thriving online
                        marketplace with our comprehensive e-commerce services."
                    />
                    {/* <Typography variant="body1" sx={{ maxWidth: '850px', mx: 'auto', color: 'text.secondary' }}>
                        Explore the dynamic world of multi-vendor ecommerce website. Empower your platform with features like vendor management, secure transactions, and customizable storefronts. Boost your business and create a thriving online
                        marketplace with our comprehensive e-commerce services.
                    </Typography> */}
                </Box>

                {/* Features Grid2 */}
                <Grid2 container spacing={4}>
                    {features.map((feature, index) => (
                        <Grid2 size={{ xs: 6, md: 3 }} key={feature.title}>
                            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.15 }} viewport={{ once: true }}>
                                <Box textAlign="center">
                                    <Box
                                        component="img"
                                        src={feature.img}
                                        alt={feature.title}
                                        sx={{
                                            p: 2,
                                            width: '120px',
                                            height: '120px',
                                            objectFit: 'contain',
                                            bgcolor: feature.altColor ? (feature.type === 'left' ? '#7B1753' : '#001F5F') : feature.type === 'left' ? '#001F5F' : '#7B1753',
                                            borderRadius: feature.type === 'left' ? '30% 70% 70% 30% / 40% 60% 40% 60%' : '70% 30% 30% 70% / 60% 40% 60% 40%',
                                            transition: 'all .4s ease',
                                            '&:hover': {
                                                borderRadius: '50%'
                                            }
                                        }}
                                    />
                                    <Typography
                                        variant="h6"
                                        fontWeight={600}
                                        sx={{
                                            fontFamily: 'Poppins, sans-serif',
                                            fontSize: '20px',
                                            color: '#262250',
                                            pt: 1
                                        }}
                                    >
                                        {feature.title}
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
