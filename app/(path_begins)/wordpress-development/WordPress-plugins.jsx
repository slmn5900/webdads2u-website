// import React from 'react'

// function WordPressplugins() {
//   return (
//     <section className='wordPressplugins-main'>
//         <div className="container">
//             <div className="row WordPressplugins">
//                 <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
//                     <h1>What are WordPress plugins?</h1>
//                     <p>If you require extra functionality for your website or development activity, WordPress is a basic software, then you should consider plugins, which can integrate with the existing WordPress base, run on top of it, and open up customization possibilities. Our stellar reputation as WordPress website developers in Chennai is a result of our leading WordPress web development company.</p>
//                     <p>WordPress plugins can be found on the Internet in a multitude of formats. Good WordPress development company’s services are necessary to achieve your dreams, regardless of whether it’s free or expensive.</p>
//                 </div>
//                 <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
//                     <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757331979/webdads2u/wordpress-development/wordpress-all-plugins.png" alt="wordpress-all-plugins" className='img-fluid' loading='lazy' />
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default WordPressplugins;

'use client';

import React from 'react';
import { Box, Container, Grid2, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Title from '../../../components/Title';
import Description from '../../../components/Description';

const WordPressplugins = () => {
    return (
        <Box
            component="section"
            sx={{
                p: { xs: 0, md: 6 },
                pt: { xs: 0, md: 4 }, // padding: 30px for mobile, 60px for desktop
                '& .MuiTypography-h1': {
                    color: '#0a1f5f',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    fontSize: { xs: '22px', md: '30px' },
                    mb: 2
                }
                // '& .MuiTypography-body1': {
                //     color: '#5a5a5a',
                //     fontFamily: 'Poppins, sans-serif',
                //     fontWeight: 400,
                //     fontSize: '16px',
                //     textAlign: 'justify',
                //     mb: 2
                // }
            }}
        >
            <Container>
                <Grid2 container spacing={4} alignItems="center">
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Title color={'#0a1f5f'} title={'What are WordPress plugins?'} />
                        {/* <Typography variant="h1">What are WordPress plugins?</Typography> */}

                        <Description
                            Des="If you require extra functionality for your website or development activity, WordPress is a basic software, then you should consider plugins, which can integrate with the existing WordPress base, run on top of it, and open
                            up customization possibilities. Our stellar reputation as WordPress website developers in Chennai is a result of our leading WordPress web development company.
                        "
                        />
                        {/* <Typography variant="body1">
                            If you require extra functionality for your website or development activity, WordPress is a basic software, then you should consider plugins, which can integrate with the existing WordPress base, run on top of it, and open
                            up customization possibilities. Our stellar reputation as WordPress website developers in Chennai is a result of our leading WordPress web development company.
                        </Typography> */}

                        <Description Des="WordPress plugins can be found on the Internet in a multitude of formats. Good WordPress development company’s services are necessary to achieve your dreams, regardless of whether it’s free or expensive."></Description>
                        {/* <Typography variant="body1">
                            WordPress plugins can be found on the Internet in a multitude of formats. Good WordPress development company’s services are necessary to achieve your dreams, regardless of whether it’s free or expensive.
                        </Typography> */}
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <motion.img
                            src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757331979/webdads2u/wordpress-development/wordpress-all-plugins.png"
                            alt="wordpress-all-plugins"
                            loading="lazy"
                            style={{ display: 'block', margin: '0 auto', maxWidth: '100%' }}
                            animate={{ y: [0, -10] }}
                            transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                        />
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
};

export default WordPressplugins;
