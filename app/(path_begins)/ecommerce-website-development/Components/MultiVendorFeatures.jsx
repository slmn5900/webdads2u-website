// 'use client';
// import { Container, Grid22, Box, Typography } from '@mui/material';
// import { motion } from 'framer-motion';

// const features = [
//     { title: 'Vendor Management', img: '/webdads/images/ecommerce/vendor-management.webp' },
//     { title: 'Reporting Management', img: '/webdads/images/ecommerce/Reporting-management.webp' },
//     { title: 'Product Management', img: '/webdads/images/ecommerce/Product-management.png' },
//     { title: 'Payment Gateway Management', img: '/webdads/images/ecommerce/Payment-gateway.png' },
//     { title: 'Commission Management', img: '/webdads/images/ecommerce/comission.png' },
//     { title: 'Email Notifications', img: '/webdads/images/ecommerce/email-notification-1.webp' },
//     { title: 'SEO Management', img: '/webdads/images/ecommerce/SEO-management.webp' },
//     { title: 'Feedback Management', img: '/webdads/images/ecommerce/Feedback.png' }
// ];

// export default function MultiVendorFeatures() {
//     return (
//         <Box component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default' }}>
//             <Container maxWidth="lg">
//                 {/* Heading */}
//                 <Box textAlign="center" mb={6}>
//                     <Typography variant="h2" fontWeight={700} gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
//                         Features of Multi-Vendor
//                     </Typography>
//                     <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '850px', mx: 'auto' }}>
//                         Explore the dynamic world of multi-vendor ecommerce website. Empower your platform with features like vendor management, secure transactions, and customizable storefronts. Boost your business and create a thriving online
//                         marketplace with our comprehensive e-commerce services.
//                     </Typography>
//                 </Box>

//                 {/* Features Grid22 */}
//                 <Grid22 container spacing={4}>
//                     {features.map((feature, index) => (
//                         <Grid22 size={{ xs: 6, md: 3 }} key={feature.title}>
//                             <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.15 }} viewport={{ once: true }}>
//                                 <Box
//                                     textAlign="center"
//                                     sx={{
//                                         p: 2,
//                                         borderRadius: 3,
//                                         bgcolor: 'background.paper',
//                                         boxShadow: 2,
//                                         transition: 'all 0.3s ease',
//                                         '&:hover': {
//                                             transform: 'translateY(-8px)',
//                                             boxShadow: 6
//                                         }
//                                     }}
//                                 >
//                                     <Box
//                                         component="img"
//                                         src={feature.img}
//                                         alt={feature.title}
//                                         sx={{
//                                             width: '100px',
//                                             height: '100px',
//                                             objectFit: 'contain',
//                                             mb: 2
//                                         }}
//                                     />
//                                     <Typography variant="h6" fontWeight={600} sx={{ lineHeight: 1.3 }}>
//                                         {feature.title}
//                                     </Typography>
//                                 </Box>
//                             </motion.div>
//                         </Grid22>
//                     ))}
//                 </Grid22>
//             </Container>
//         </Box>
//     );
// }

'use client';
import { Container, Grid2, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Title from '../../../../components/Title';
import Description from '../../../../components/Description';

const features = [
    { title: 'Vendor Management', img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757575752/webdads2u/ecommerce-website-development/icons/vendor-management.png', type: 'left' },
    { title: 'Reporting Management', img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757575748/webdads2u/ecommerce-website-development/icons/reporting-management-icon.png', type: 'right' },
    { title: 'Product Management', img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757575743/webdads2u/ecommerce-website-development/icons/product-management.png', type: 'left' },
    { title: 'Payment Gateway Management', img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757575739/webdads2u/ecommerce-website-development/icons/payment-gateway.png', type: 'right' },
    { title: 'Commission Management', img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757575735/webdads2u/ecommerce-website-development/icons/comission.png', type: 'left', altColor: true },
    { title: 'Email Notifications', img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757575731/webdads2u/ecommerce-website-development/icons/email-notification.png', type: 'right', altColor: true },
    { title: 'SEO Management', img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757575727/webdads2u/ecommerce-website-development/icons/seo-management.png', type: 'left', altColor: true },
    { title: 'Feedback Management', img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757575723/webdads2u/ecommerce-website-development/icons/feedback.png', type: 'right', altColor: true }
];

export default function MultiVendorFeatures() {
    return (
        <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
            <Container maxWidth="lg">
                {/* Heading */}
                <Box textAlign="center" mb={6}>
                    <Title title={'    Features of Multi-Vendor'} />
                    {/* <Typography variant="h2" fontWeight={700} gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, color: '#000' }}>
                        Features of Multi-Vendor
                    </Typography> */}
                    <Description
                        mdalign={'center'}
                        Des="  Explore the dynamic world of multi-vendor ecommerce website. Empower your platform with features like vendor management, secure transactions, and customizable storefronts. Boost your business and create a thriving online
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
