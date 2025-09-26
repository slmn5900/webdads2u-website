// 'use client';
// import React from 'react';
// import { Grid2, Typography, Button, Box } from '@mui/material';
// import { motion } from 'framer-motion';
// import Buttons from '../../../components/common/Button';

// export default function Optforphp() {
//     return (
//         <Box component="section" className="optforphp-main" sx={{ py: 8, px: { xs: 2, md: 8 } }}>
//             <Grid2 container spacing={4} alignItems="center" justifyContent="center" className="optforphp">
//                 {/* Left Content */}
//                 <Grid2 size={{ xs: 12, md: 6 }}>
//                     <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
//                         <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: 'text.primary' }}>
//                             Why Opt For PHP Web Development Services?
//                         </Typography>

//                         <Typography variant="body1" paragraph>
//                             Webdads2u Technologies is best PHP development company in Chennai, India. PHP is a widely used general purpose open-source scripting language that can be embedded into HTML and is especially well-suited for web
//                             development.
//                         </Typography>

//                         <Typography variant="body1" paragraph>
//                             Recently, it has been gaining momentum and is now recognized as one of the most preferred languages used in development PHP development company in Chennai. The simple and most effective explanation for this is its
//                             uncomplicated nature, highly dynamic nature, and ability to provide effective web solutions.
//                         </Typography>

//                         {/* <Button variant="contained" color="primary" href="/contact-us" sx={{ mt: 2, borderRadius: 3, px: 4, py: 1.2 }}>
//                             Contact Us
//                         </Button> */}
//                         <Buttons title={'Contact Us'} />
//                     </motion.div>
//                 </Grid2>

//                 {/* Right Image */}
//                 <Grid2 size={{ xs: 12, md: 6 }} textAlign="center">
//                     <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
//                         <Box
//                             component="img"
//                             src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757400052/webdads2u/php-web-development/php-process.png"
//                             alt="php process"
//                             loading="lazy"
//                             sx={{
//                                 maxWidth: '100%',
//                                 height: 'auto'
//                             }}
//                         />
//                     </motion.div>
//                 </Grid2>
//             </Grid2>
//         </Box>
//     );
// }
'use client';
import React from 'react';
import { Grid2, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import Buttons from '../../../components/common/Button';
import Title from '../../../components/Title';
import Description from '../../../components/Description';

const MotionBox = motion(Box);

export default function Optforphp() {
    return (
        <Box component="section" className="optforphp-main" sx={{ py: 8, px: { xs: 2, md: 8 } }}>
            <Grid2 container spacing={4} alignItems="center" justifyContent="center" className="optforphp">
                {/* Left Content */}
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.2 }} // ✅ triggers only once on scroll
                    >
                        {/* <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: 'text.primary' }}>
                            Why Opt For PHP Web Development Services?
                        </Typography> */}
                        <Title title={'Why Opt For PHP Web Development Services?'} />

                        {/* <Typography variant="body1" paragraph>
                            Webdads2u Technologies is best PHP development company in Chennai, India. PHP is a widely used general purpose open-source scripting language that can be embedded into HTML and is especially well-suited for web
                            development.
                        </Typography> */}
                        <Description
                            Des="Webdads2u Technologies is best PHP development company in Chennai, India. PHP is a widely used general purpose open-source scripting language that can be embedded into HTML and is especially well-suited for web
                            development."
                        />
                        <br />
                        <Description
                            Des="                            Recently, it has been gaining momentum and is now recognized as one of the most preferred languages used in development PHP development company in Chennai. The simple and most effective explanation for this is its
                            uncomplicated nature, highly dynamic nature, and ability to provide effective web solutions."
                        />
                        {/* <Typography variant="body1" paragraph>
                            Recently, it has been gaining momentum and is now recognized as one of the most preferred languages used in development PHP development company in Chennai. The simple and most effective explanation for this is its
                            uncomplicated nature, highly dynamic nature, and ability to provide effective web solutions.
                        </Typography> */}

                        <Buttons title={'Contact Us'} />
                    </motion.div>
                </Grid2>

                {/* Right Image */}
                <Grid2 size={{ xs: 12, md: 6 }} textAlign="center">
                    <motion.div
                    // initial={{ opacity: 0, x: 50 }}
                    // whileInView={{ opacity: 1, x: 0 }}
                    // transition={{ duration: 0.6, ease: 'easeOut' }}
                    // viewport={{ once: true, amount: 0.2 }} // ✅ no hover, scroll only
                    >
                        <MotionBox
                            component="img"
                            src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757400052/webdads2u/php-web-development/php-process.png"
                            alt="php process"
                            loading="lazy"
                            sx={{
                                width: '100%',
                                maxWidth: { md: '350px' },
                                height: 'auto'
                            }}
                        />
                    </motion.div>
                </Grid2>
            </Grid2>
        </Box>
    );
}
