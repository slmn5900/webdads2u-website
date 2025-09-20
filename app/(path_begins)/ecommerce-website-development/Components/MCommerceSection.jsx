'use client';
import { Container, Grid2, Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import { FaCheckSquare } from 'react-icons/fa';

export default function MCommerceSection() {
    return (
        <Box
            component="section"
            sx={{
                py: { xs: 6, md: 10 },
                background: 'linear-gradient(0deg, rgba(0, 36, 130, 1) 0%, rgba(43, 47, 181, 1) 100%)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                color: '#fff'
            }}
        >
            <Container maxWidth="lg">
                <Grid2 container spacing={4} alignItems="center">
                    {/* Left Content */}
                    <Grid2 size={{ xs: 12, md: 8 }}>
                        <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                            <Typography variant="h2" fontWeight={700} sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, pb: 2, color: 'white' }}>
                                M-Commerce Service
                            </Typography>
                            <Typography variant="h4" fontWeight={600} sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' }, pb: 2 }}>
                                Mobile Commerce – Mobile App For Ecommerce
                            </Typography>
                            <Typography variant="body1" sx={{ maxWidth: '800px', mb: 3 }}>
                                Elevate your business with our cutting-edge M-Commerce services. Seamlessly integrate mobile solutions for an enhanced e-commerce experience. Our services encompass mobile app development, secure payment gateways, and
                                personalized user interfaces. Stay ahead in the digital realm with our tailored M-Commerce services, revolutionizing the way you engage customers in the ecommerce website services landscape.
                            </Typography>

                            <Grid2 container spacing={2}>
                                <Grid2 size={{ xs: 12, md: 6 }}>
                                    <List>
                                        {['Search filter', 'User Account', 'Shipping', 'Signing in with social media'].map((item) => (
                                            <ListItem key={item} sx={{ py: 0.5 }}>
                                                <ListItemIcon sx={{ minWidth: 30, color: 'white' }}>
                                                    <FaCheckSquare />
                                                </ListItemIcon>
                                                <ListItemText primary={item} primaryTypographyProps={{ sx: { fontWeight: 600, fontSize: '1rem' } }} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 6 }}>
                                    <List>
                                        {['Multi-lingual', 'Push notification', 'Security', 'Blogs'].map((item) => (
                                            <ListItem key={item} sx={{ py: 0.5 }}>
                                                <ListItemIcon sx={{ minWidth: 30, color: 'white' }}>
                                                    <FaCheckSquare />
                                                </ListItemIcon>
                                                <ListItemText primary={item} primaryTypographyProps={{ sx: { fontWeight: 600, fontSize: '1rem' } }} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Grid2>
                            </Grid2>
                        </motion.div>
                    </Grid2>

                    {/* Right Image */}
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: [0.87, 0.9, 0.87] }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} viewport={{ once: false }}>
                            <Box
                                component="img"
                                src="/webdads/images/ecommerce/yoga.webp"
                                alt="M-Commerce"
                                sx={{
                                    width: '100%',
                                    mt: { xs: 3, md: -6 }
                                }}
                            />
                        </motion.div>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
}
