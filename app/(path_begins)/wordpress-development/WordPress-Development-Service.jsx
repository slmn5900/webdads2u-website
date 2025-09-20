// import React from 'react'

// function WordPressDevelopmentService() {
//   return (
//     <section className='wordPressdevelopmentservice-main'>
//         <div className="container">
//             <div className="row text-center justify-content-center wordPressdevelopmentservice">
//                 <div className="col-sm-12 col-lg-10">
//                     <h1>Looking for WordPress Development Service?</h1>
//                     <p>Looking for the best deal on your requirements? Look no further! Simply share your requirements with us and we’ll provide you with a free quote that meets your needs. Don’t wait any longer – contact us now!</p>
//                     <a href="/contact-us"><button>Connect For Free Consultation</button></a>
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default WordPressDevelopmentService
'use client';
import React from 'react';
import { Container, Grid2, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import Buttons from '../../../components/common/Button';

function WordPressDevelopmentService() {
    return (
        <Box
            component="section"
            sx={{
                background: 'linear-gradient(135deg, #2C1272, #820CA5)',
                py: { xs: 6, md: 10 },
                color: 'white',
                textAlign: 'center'
            }}
        >
            <Container maxWidth="md">
                <Grid2 container justifyContent="center">
                    <Grid2 size={{ xs: 12 }}>
                        {/* Heading */}
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                            <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom fontSize={{ xs: 26, md: 34 }}>
                                Looking for WordPress Development Service?
                            </Typography>
                        </motion.div>

                        {/* Paragraph */}
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
                            <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
                                Looking for the best deal on your requirements? Look no further! Simply share your requirements with us and we’ll provide you with a free quote that meets your needs. Don’t wait any longer – contact us now!
                            </Typography>
                        </motion.div>

                        {/* Button */}
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7, delay: 0.6 }}>
                            {/* <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    background: 'linear-gradient(135deg, #332050, #262250)',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    px: 4,
                                    py: 1.5,
                                    borderRadius: '30px',
                                    textTransform: 'none',
                                    boxShadow: '0px 4px 15px rgba(0,0,0,0.3)',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #262250, #332050)'
                                    }
                                }}
                                href="/contact-us"
                            >
                                Connect For Free Consultation
                            </Button> */}
                            <Buttons title={'Connect For Free Consultation'} />
                        </motion.div>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
}

export default WordPressDevelopmentService;
