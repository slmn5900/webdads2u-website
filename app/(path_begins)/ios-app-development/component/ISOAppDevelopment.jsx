// 'use client';

// import React, { useContext } from 'react';
// import { Container, Grid2, Typography, Box, Button } from '@mui/material';
// import { motion } from 'framer-motion';
// import { MenuContext } from '../../../../layout/context/menucontext';

// export default function ISOAppDevelopment() {
//     const { header_section } = useContext(MenuContext);

//     console.log(header_section, 'header_section');
//     return (
//         <Box
//             component="section"
//             sx={{
//                 py: { xs: 6, md: 10 },
//                 background: '#fff'
//             }}
//         >
//             <Container>
//                 <Grid2 container spacing={4} alignItems="center">
//                     {/* Left Content */}
//                     <Grid2 size={{ xs: 12, md: 7, lg: 6 }}>
//                         <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} viewport={{ once: true }}>
//                             <Typography variant="h4" gutterBottom>
//                                 {header_section?.title || ''}
//                             </Typography>
//                             <Typography variant="body1" sx={{ mb: 3 }} color="text.secondary">
//                                 {header_section?.description || ''}{' '}
//                             </Typography>
//                             <Button variant="contained" color="primary" href="/contact-us/" sx={{ borderRadius: 2, px: 4, py: 1.2 }}>
//                                 {header_section?.button || 'Contact us'}
//                             </Button>
//                         </motion.div>
//                     </Grid2>

//                     {/* Right Image */}
//                     <Grid2 size={{ xs: 12, md: 7, lg: 6 }}>
//                         <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }} viewport={{ once: true }} style={{ textAlign: 'center' }}>
//                             <Box sx={{ position: 'relative', display: 'inline-block' }}>
//                                 <Box
//                                     component="img"
//                                     src={header_section.img1}
//                                     alt="iOS App Development Company In Chennai"
//                                     sx={{
//                                         width: { xs: '70%', sm: '60%', md: '50%' },
//                                         zIndex: 2,
//                                         position: 'relative'
//                                     }}
//                                 />
//                                 <Box
//                                     component="img"
//                                     src={header_section.img}
//                                     alt="Mobile UI UX Icons"
//                                     sx={{
//                                         position: 'absolute',
//                                         bottom: -20,
//                                         right: -40,
//                                         width: { xs: '40%', md: '35%' },
//                                         zIndex: 1
//                                     }}
//                                 />
//                             </Box>
//                         </motion.div>
//                     </Grid2>
//                 </Grid2>
//             </Container>
//         </Box>
//     );
// }

'use client';

import React, { useContext } from 'react';
import { Container, Typography, Box, Grid2 } from '@mui/material';
import { motion } from 'framer-motion';
import { MenuContext } from '../../../../layout/context/menucontext';
import ContactButton from '../../../../components/ui/banner/ContactButton';

export default function ISOAppDevelopment() {
    const { header_section } = useContext(MenuContext);

    return (
        <Box
            component="section"
            sx={{
                position: 'relative',
                minHeight: '100vh', // Full screen height
                backgroundImage: `url(${header_section?.bg_img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                height: '100%',
                py: { xs: 6, md: 10 }
            }}
        >
            <Container sx={{ position: 'relative', zIndex: 1 }}>
                <Grid2 container spacing={4} alignItems="center">
                    {/* Left Content */}
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} viewport={{ once: true }}>
                            <Typography variant="h3" gutterBottom sx={{ fontSize: { xs: 16, md: 30 }, color: 'white' }}>
                                {header_section?.title || 'ISO App Development Company'}
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 3, maxWidth: 500 }} color="white">
                                {header_section?.description || 'Elevate your brand with our iOS app development expertise. From concept to launch, we deliver immersive experiences tailored to your audience.'}
                            </Typography>
                            <ContactButton variant="contained" color="primary" sx={{ borderRadius: 2, px: 4, py: 1.2 }}>
                                {header_section?.button || 'Contact us'}
                            </ContactButton>
                        </motion.div>
                    </Grid2>

                    {/* Right Image */}
                    <Grid2 size={{ xs: 12, md: 6 }} sx={{ textAlign: 'center', display: { xs: 'none', md: 'block' } }}>
                        <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }} viewport={{ once: true }}>
                            <Box sx={{ position: 'relative', display: 'inline-block' }}>
                                <Box
                                    component="img"
                                    src={header_section?.img1 || '/webdads/images/isoapp/iso-mobile.png'}
                                    alt="iOS App Development Company In Chennai"
                                    sx={{
                                        width: { xs: '70%', sm: '60%', md: '80%' },
                                        // zIndex: 2,
                                        position: 'relative'
                                    }}
                                />
                                <Box
                                    component="img"
                                    src={header_section?.img || '/webdads/images/isoapp/App-icons.png'}
                                    alt="Mobile UI UX Icons"
                                    sx={{
                                        position: 'absolute',
                                        bottom: 70,
                                        right: 180,
                                        width: { xs: '40%', md: '35%' },
                                        zIndex: 1
                                    }}
                                />
                            </Box>
                        </motion.div>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
}
