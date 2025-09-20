'use client';
import { Box, Container, Grid2, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import { FaCheckSquare } from 'react-icons/fa';

const SocialEcommerce = () => {
    return (
        <Box
            sx={{
                py: { xs: 0, md: 3 },
                background: { xs: '#1B3296', md: "url('/webdads/images/ecommerce/social-rect.png')" },
                backgroundRepeat: { md: 'no-repeat' },
                backgroundSize: 'cover',
                // mb: 6
            }}
        >
            <Container>
                <Grid2 container spacing={4} alignItems="center">
                    {/* Left Image */}
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <motion.img
                            src="/webdads/images/ecommerce/atcomart.webp"
                            alt="Social Ecommerce"
                            style={{ width: '100%', marginTop: 0 }}
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                        />
                    </Grid2>

                    {/* Right Content */}
                    <Grid2 size={{ xs: 12, md: 8 }}>
                        <Typography variant="h4" sx={{ color: '#fff', fontWeight: 700, mb: 2 }}>
                            Social E-Commerce
                        </Typography>
                        <Typography sx={{ color: '#fff', mb: 3 }}>
                            We offer excellent social e-commerce solutions, seamlessly merging social connectivity with online shopping. Explore a revolutionary platform where engagement meets convenience. Elevate your online experience with our
                            innovative services, redefining the way you connect, share, and shop. Discover the future of shopping with us.
                        </Typography>

                        {/* Feature List */}

                        <Grid2 container spacing={2}>
                            <Grid2 size={{ xs: 12, md: 6 }}>
                                <List>
                                    {['User profiles', 'Product Likes', 'Activity Feeds', 'Follow Users'].map((item) => (
                                        <ListItem key={item} sx={{ py: 0.5 }}>
                                            <ListItemIcon sx={{ minWidth: 30, color: 'white' }}>
                                                <FaCheckSquare />
                                            </ListItemIcon>
                                            <ListItemText primary={item} primaryTypographyProps={{ sx: { fontWeight: 600, fontSize: '1rem' }, color: 'white' }} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 6 }}>
                                <List>
                                    {['Fully Mobile Friendly', 'Customization Options', 'Compatible With Any Theme', 'No Coding Required'].map((item) => (
                                        <ListItem key={item} sx={{ py: 0.5 }}>
                                            <ListItemIcon sx={{ minWidth: 30, color: 'white' }}>
                                                <FaCheckSquare />
                                            </ListItemIcon>
                                            <ListItemText primary={item} primaryTypographyProps={{ sx: { fontWeight: 600, fontSize: '1rem' }, color: 'white' }} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
};

export default SocialEcommerce;
