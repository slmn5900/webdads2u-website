'use client';
import Image from 'next/image';
import { Grid2, Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import Loader from './Loader';
// Images array

const about = [
    { no: 1, img: '/webdads/images/home/Assert/Adsfit_19890fc227.png' },
    { no: 2, img: '/webdads/images/home/Assert/Amethyst.png' },
    { no: 3, img: '/webdads/images/home/Assert/Atgomart_198912fc12.png' },
    { no: 4, img: '/webdads/images/home/Assert/Global_198926bdb3.png' },
    { no: 5, img: '/webdads/images/home/Assert/arc-man-logo_2299280a.avif' },
    { no: 6, img: '/webdads/images/home/Assert/best_227e2dba.avif' },
    { no: 7, img: '/webdads/images/home/Assert/diamond.avif' },
    { no: 8, img: '/webdads/images/home/Assert/greem-yard.png' },
    { no: 9, img: '/webdads/images/home/Assert/re-life_222a8f32.avif' },
    { no: 10, img: '/webdads/images/home/Assert/saj-hotel-logo_221ae891.avif' },
    { no: 11, img: '/webdads/images/home/Assert/smart-duckling-logo_2184e61c.avif' },
    { no: 12, img: '/webdads/images/home/Assert/teamwater-logo_220f3c18.avif' }
];

const LoadMoreImage = () => {
    return (
        <Box sx={{ mt: 3, px: { xs: 0, md: 7 }, pb: 2 }}>
            <Container>
                <Grid2 container spacing={4} alignItems="center">
                    {/* Left Side */}
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Box sx={{ mt: { xs: 0, sm: 5 } }}>
                            <Typography variant="h6" fontWeight="bold" sx={{ fontFamily: 'Poppins' }}>
                                10+ years and 150+ clients
                            </Typography>
                            <Typography variant="h4" fontWeight="bold" sx={{ color: '#262250', fontFamily: 'Poppins' }}>
                                We are the Solution for Web Designing and Web Development
                            </Typography>
                            <Typography mt={2}>
                                <Box component="span" fontWeight="bold" sx={{ color: '#7a7a7a', fontSize: '18px' }}>
                                    <a href="https://webdads2u.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', fontFamily: 'Poppins' }}>
                                        Best Web Design and Web Development Company in Chennai
                                    </a>
                                </Box>
                                , India to help you increase your business growth.
                            </Typography>

                            <Box mt={3}>
                                <Button
                                    href="/about/"
                                    variant="contained"
                                    sx={{
                                        borderRadius: 15,
                                        px: 5,
                                        py: 1.5,
                                        background: 'linear-gradient(90deg, #871752 0%, #262250 50%)',
                                        fontFamily: 'Poppins',
                                        textTransform: 'capitalize'
                                    }}
                                >
                                    More About
                                </Button>
                            </Box>
                        </Box>
                    </Grid2>

                    {/* Right Side - Logos */}
                    <Grid2 size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                        <Grid2 container spacing={2}>
                            {about.length > 0 ? (
                                about.map((item, index) => (
                                    <Grid2 size={{ xs: 6, sm: 3 }} key={index}>
                                        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.05 }} whileHover={{ scale: 1.1 }}>
                                            <Box
                                                sx={{
                                                    boxShadow: '0 15px 55px rgb(138 138 138 / 30%)',
                                                    borderRadius: '8px',
                                                    backgroundColor: 'white',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    p: 1
                                                }}
                                            >
                                                <Image src={item.img} alt="about" width={100} height={100} style={{ objectFit: 'contain' }} />
                                            </Box>
                                        </motion.div>
                                    </Grid2>
                                ))
                            ) : (
                                <Typography>No data</Typography>
                            )}
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Container>

            <Loader />
        </Box>
    );
};

export default LoadMoreImage;
