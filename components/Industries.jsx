'use client';
import React from 'react';
import { Grid2, Container, Typography, Box } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';

const industries = [
    { img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757324785/webdads2u/mainpage/icons/it-software-industries.png', title: 'IT / Software' },
    { img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757324782/webdads2u/mainpage/icons/ecommerce-industries.png', title: 'E-commerce' },
    { img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757324780/webdads2u/mainpage/icons/telecom-industries.png', title: 'Telecome' },
    { img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757324777/webdads2u/mainpage/icons/real-estate-industries.png', title: 'Realestate' },
    { img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757324774/webdads2u/mainpage/icons/engineering-industries.png', title: 'Engineering' },
    { img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757324771/webdads2u/mainpage/icons/travel-industries.png', title: 'Travels' },
    { img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757324768/webdads2u/mainpage/icons/healthcare-industries.png', title: 'Healthcare' },
    { img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757324766/webdads2u/mainpage/icons/food-industries.png', title: 'Food & Restaurant' },
    { img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757324763/webdads2u/mainpage/icons/architech-interior-industries.png', title: 'Architech & Interior' },
    { img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757324760/webdads2u/mainpage/icons/logistic-industries.png', title: 'Logistics' },
    { img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757324758/webdads2u/mainpage/icons/finance-industries.png', title: 'Finance' },
    { img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757324749/webdads2u/mainpage/icons/auto-mobile-industries.png', title: 'Auto Mobile' },
    { img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757324755/webdads2u/mainpage/icons/media-cinema-industries.png', title: 'Media / Cinema' },
    { img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757324752/webdads2u/mainpage/icons/ad-agency-industries.png', title: 'Ad Agency' },
    { img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757324747/webdads2u/mainpage/icons/hospitallity-industries.png', title: 'Hospitality' },
    { img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757413791/webdads2u/mainpage/icons/wearable-app-development.png', title: 'Sports' }
];

const Industries = () => {
    return (
        <section className="">
            <Container sx={{ pt: { xs: 2, sm: 0 } }}>
                <Box textAlign="center" mb={4} sx={{ mt: { sx: 2, sm: 2, md: 6 } }}>
                    <Typography variant="h4" fontWeight={500} fontFamily="Poppins, sans-serif">
                        Industries We Serve
                    </Typography>
                    <Typography variant="body1" color="text.secondary" mt={1}>
                        Here, we make almost every genre of applications. You name it and we build it.
                    </Typography>
                </Box>

                <Grid2 container spacing={1}>
                    {industries.map((item, index) => (
                        <Grid2 size={{ xs: 6, sm: 4, md: 2 }} key={index}>
                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }}>
                                <Box
                                    textAlign="center"
                                    sx={{
                                        p: 1,
                                        borderRadius: 2,
                                        backgroundColor: '#fffff',
                                        boxShadow: '5px 5px 10px -6px rgba(0,0,0,0.5)'
                                        // height: '135px',
                                    }}
                                >
                                    <Image src={item.img} alt={item.title} width={40} height={40} style={{ objectFit: 'contain' }} />
                                    <Typography
                                        variant="body1"
                                        fontWeight={500}
                                        // mt={1}
                                        fontSize={{ xs: '10px', sm: '8px', md: '16px' }}
                                        fontFamily="Poppins, sans-serif"
                                    >
                                        {item.title}
                                    </Typography>
                                </Box>
                            </motion.div>
                        </Grid2>
                    ))}
                </Grid2>
            </Container>
        </section>
    );
};

export default Industries;
