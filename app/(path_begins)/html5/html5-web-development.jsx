// import React from 'react'

// function Html5webdevelopment() {
//   return (
//     <section className='html5webdevelopment-main'>
//         <div className="container">
//             <div className="row justify-content-center text-center html5webdevelopment">
//                 <div className="col-sm-12 col-md-12 col-lg-10">
//                     <h5>Why choose for html 5 web development services?</h5>
//                     <p>Choosing HTML5 web development services offers numerous advantages. Firstly, HTML5 provides enhanced semantic elements, improving website structure and accessibility. Secondly, its robust multimedia support enables seamless integration of audio, video, and animations, enhancing user engagement. Furthermore, HTML5’s responsive design capabilities ensure compatibility across devices, optimizing user experience. Additionally, its advanced forms and input controls facilitate interactive user interactions, enhancing functionality. Overall, opting for HTML5 web development services guarantees a modern, feature-rich website that meets contemporary standards and user expectations.</p>
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Html5webdevelopment;

'use client';
import React from 'react';
import { Box, Container, Grid2, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Title from '../../../components/Title';
import Description from '../../../components/Description';

const Html5webdevelopment = () => {
    return (
        <Box
            component="section"
            sx={{
                py: { xs: 4, md: 4 }, // responsive padding
                backgroundColor: 'transparent'
            }}
        >
            <Container maxWidth="xl">
                <Grid2 container justifyContent="center" textAlign="center" className="html5webdevelopment">
                    <Grid2 size={{ xs: 12, md: 10 }}>
                        {/* Title */}
                        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
                            {/* <Typography
                                variant="h5"
                                sx={{
                                    color: '#262250',
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: { xs: '25px', md: '30px' },
                                    fontWeight: 600,
                                    pb: { xs: 2, md: 3 }
                                }}
                            >
                                Why choose HTML5 web development services?
                            </Typography> */}
                            <Title color={'#262250'} title={'Why choose HTML5 web development services?'} />
                        </motion.div>

                        {/* Paragraph */}
                        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} viewport={{ once: true }}>
                            {/* <Typography
                                variant="body1"
                                sx={{
                                    color: '#000',
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: { xs: '13px', md: '15px' },
                                    fontWeight: 400,
                                    textAlign: { xs: 'justify', md: 'justify' },
                                    px: { xs: 2, md: 0 }
                                }}
                            >
                                Choosing HTML5 web development services offers numerous advantages. Firstly, HTML5 provides enhanced semantic elements, improving website structure and accessibility. Secondly, its robust multimedia support enables
                                seamless integration of audio, video, and animations, enhancing user engagement. Furthermore, HTML5’s responsive design capabilities ensure compatibility across devices, optimizing user experience. Additionally, its
                                advanced forms and input controls facilitate interactive user interactions, enhancing functionality. Overall, opting for HTML5 web development services guarantees a modern, feature-rich website that meets contemporary
                                standards and user expectations.
                            </Typography> */}
                            <Box sx={{ textAlign: { xs: 'start', md: 'center' } }}>
                                <Description
                                    Des="Choosing HTML5 web development services offers numerous advantages. Firstly, HTML5 provides enhanced semantic elements, improving website structure and accessibility. Secondly, its robust multimedia support enables
                                seamless integration of audio, video, and animations, enhancing user engagement. Furthermore, HTML5’s responsive design capabilities ensure compatibility across devices, optimizing user experience. Additionally, its
                                advanced forms and input controls facilitate interactive user interactions, enhancing functionality. Overall, opting for HTML5 web development services guarantees a modern, feature-rich website that meets contemporary
                                standards and user expectations."
                                />
                            </Box>
                        </motion.div>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
};

export default Html5webdevelopment;
