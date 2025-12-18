'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Grid2, Container, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Logos } from './common/Datas/Logo';

export default function Loader() {
    const [visibleCount, setVisibleCount] = useState(12);
    const itemsPerPage = 6;

    const data = Logos.slice(12);

    const handleLoadMore = () => {
        setVisibleCount((prevCount) => prevCount + itemsPerPage);
    };

    return (
        <Box sx={{ pt: 4 }}>
            <Box sx={{ p: 1 }}>
                <Container>
                    <Grid2 container spacing={2} justifyContent="center">
                        {data.slice(0, visibleCount).map((item, index) => (
                            <Grid2 size={{ xs: 6, sm: 4, md: 2 }} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.85 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3, delay: index * 0.02 }}
                                    style={{
                                        borderRadius: 8
                                    }}
                                >
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
                                        <Image src={item.url} alt="about" width={100} height={100} style={{ objectFit: 'contain' }} />
                                    </Box>
                                </motion.div>
                            </Grid2>
                        ))}
                    </Grid2>

                    {visibleCount < data.length && (
                        <Box textAlign="center" mt={3}>
                            <Button
                                variant="contained"
                                onClick={handleLoadMore}
                                sx={{
                                    borderRadius: 15,
                                    px: 5,
                                    py: 1.8,
                                    fontWeight: '500',
                                    background: 'linear-gradient(90deg, #871752 0%, #262250 50%)',
                                    outline: '2px solid #FEFEFE',
                                    fontFamily: 'Poppins',
                                    textTransform: 'capitalize',
                                    mb: 0
                                }}
                            >
                                Load More
                            </Button>
                        </Box>
                    )}
                </Container>
            </Box>
        </Box>
    );
}
