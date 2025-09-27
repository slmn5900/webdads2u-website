// import React, { useContext } from 'react';
// import { MenuContext } from '../../../layout/context/menucontext';
// import { Box, Typography, Card, CardContent, Grid2 } from '@mui/material';

// const OffshoreMobileApp = () => {
//     const { pagedata } = useContext(MenuContext);

//     const title = pagedata?.offshore_section?.title;
//     const description = pagedata?.offshore_section?.description;
//     const img = pagedata?.offshore_section?.img;

//     return (
//         <Box
//             component="section"
//             sx={{
//                 py: { xs: 4, md: 8 },
//                 px: { xs: 2, md: 6 }
//             }}
//         >
//             <Grid2 container spacing={4} alignItems="center">
//                 {/* Left Column */}
//                 <Grid2 size={{ xs: 12, md: 6 }}>
//                     <Typography
//                         variant="h3"
//                         sx={{
//                             color: '#262250',
//                             fontFamily: 'Poppins, sans-serif',
//                             fontSize: { xs: '26px', sm: '30px', md: '36px' },
//                             fontWeight: 600,
//                             mb: 2,
//                             textAlign: { xs: 'center', md: 'left' }
//                         }}
//                     >
//                         {title}
//                     </Typography>

//                     <Typography
//                         sx={{
//                             textAlign: 'justify',
//                             color: '#000000',
//                             fontFamily: 'Poppins, sans-serif',
//                             fontSize: { xs: '15px', md: '16px' },
//                             fontWeight: 400,
//                             mb: 3
//                         }}
//                     >
//                         {description}
//                     </Typography>

//                     <Box
//                         component="img"
//                         src={img}
//                         alt="Offshore Mobile App"
//                         loading="lazy"
//                         sx={{
//                             display: 'block',
//                             mx: 'auto',
//                             width: { xs: '100%', sm: '80%', md: '550px' },
//                             maxWidth: '100%',
//                             borderRadius: 2
//                         }}
//                     />
//                 </Grid2>

//                 {/* Right Column */}
//                 <Grid2 size={{ xs: 12, md: 6 }}>
//                     <Grid2 container>
//                         <Grid2 size={{ xs: 12, md: 6 }}>
//                             {/* Card 1 */}
//                             <Card
//                                 sx={{
//                                     backgroundColor: '#ffffff',
//                                     width: { xs: '100%', sm: '85%', md: '24rem' },
//                                     border: 'none',
//                                     borderRadius: '8px',
//                                     textAlign: 'justify',
//                                     boxShadow: '0px 0px 10px rgba(216, 214, 214, 0.7)',
//                                     p: 3,
//                                     mb: 4,
//                                     transition: '0.4s',
//                                     '&:hover': {
//                                         color: '#ffffff',
//                                         backgroundImage: 'linear-gradient(31deg, #59016e 29%, #c30002 100%)',
//                                         transform: 'translate3d(10px, 0, 0)'
//                                     }
//                                 }}
//                             >
//                                 <Typography
//                                     sx={{
//                                         color: '#262250',
//                                         fontFamily: 'Poppins, sans-serif',
//                                         fontSize: '17px',
//                                         fontWeight: 500,
//                                         mb: 2
//                                     }}
//                                 >
//                                     True mobility
//                                 </Typography>
//                                 <CardContent sx={{ p: 0, color: '#000', textAlign: 'justify' }}>While mobile devices becoming increasingly complex they are still mobile.</CardContent>
//                             </Card>
//                         </Grid2>
//                         <Grid2>
//                             {/* Card 2 */}
//                             <Card
//                                 sx={{
//                                     color: '#ffffff',
//                                     p: 3,
//                                     backgroundImage: 'linear-gradient(31deg, #59016e 29%, #c30002 100%)',
//                                     border: 'none',
//                                     borderRadius: '8px',
//                                     mb: 4,
//                                     boxShadow: '0px 0px 10px rgba(216, 214, 214, 0.7)',
//                                     width: { xs: '100%', sm: '85%', md: '24rem' }
//                                 }}
//                             >
//                                 <Typography
//                                     sx={{
//                                         color: '#ffffff',
//                                         fontFamily: 'Poppins, sans-serif',
//                                         fontSize: '20px',
//                                         fontWeight: 500,
//                                         mb: 2
//                                     }}
//                                 >
//                                     Optimized for different screen sizes
//                                 </Typography>
//                                 <CardContent sx={{ p: 0, color: '#ffffff', textAlign: 'justify' }}>Our design is always optimized for different devices and screen sizes.</CardContent>
//                             </Card>
//                         </Grid2>
//                         <Grid2 size={{ xs: 12, md: 6 }}>
//                             {/* Card 3 */}
//                             <Card
//                                 sx={{
//                                     backgroundColor: '#ffffff',
//                                     width: { xs: '100%', sm: '85%', md: '24rem' },
//                                     border: 'none',
//                                     borderRadius: '8px',
//                                     textAlign: 'justify',
//                                     boxShadow: '0px 0px 10px rgba(216, 214, 214, 0.7)',
//                                     p: 3,
//                                     mb: 4,
//                                     transition: '0.4s',
//                                     '&:hover': {
//                                         color: '#ffffff',
//                                         backgroundImage: 'linear-gradient(31deg, #59016e 29%, #c30002 100%)',
//                                         transform: 'translate3d(10px, 0, 0)'
//                                     }
//                                 }}
//                             >
//                                 <Typography
//                                     sx={{
//                                         color: '#262250',
//                                         fontFamily: 'Poppins, sans-serif',
//                                         fontSize: '17px',
//                                         fontWeight: 500,
//                                         mb: 2
//                                     }}
//                                 >
//                                     Details that matter for users
//                                 </Typography>
//                                 <CardContent sx={{ p: 0, color: '#000', textAlign: 'justify' }}>Small things make a big difference between success and failure.</CardContent>
//                             </Card>
//                         </Grid2>
//                     </Grid2>
//                 </Grid2>
//             </Grid2>
//         </Box>
//     );
// };

// export default OffshoreMobileApp;
import React, { useContext } from 'react';
import { MenuContext } from '../../../layout/context/menucontext';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import Title from '../../../components/Title';
import Description from '../../../components/Description';

const MotionCard = ({ children, shift }) => {
    return (
        <motion.div
            initial={{ x: shift.x, y: shift.y, opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ x: 0, y: 0, scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            style={{ display: 'flex', justifyContent: 'center' }}
        >
            <Box
                sx={{
                    backgroundColor: '#ffffff',
                    width: { xs: '100%', sm: '85%', md: '24rem' },
                    borderRadius: '12px',
                    textAlign: 'justify',
                    boxShadow: '0px 0px 12px rgba(0,0,0,0.1)',
                    p: 3
                }}
            >
                {children}
            </Box>
        </motion.div>
    );
};

const OffshoreMobileApp = () => {
    const { pagedata } = useContext(MenuContext);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const title = pagedata?.offshore_section?.title;
    const description = pagedata?.offshore_section?.description;
    const img = pagedata?.offshore_section?.img;

    return (
        <Box component="section" sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, md: 6 } }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    gap: 5
                }}
            >
                {/* Left Column */}
                <Box sx={{ flex: 1 }}>
                    {/* <Typography
                        variant="h3"
                        sx={{
                            color: '#262250',
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: { xs: '26px', sm: '30px', md: '36px' },
                            fontWeight: 600,
                            mb: 2,
                            textAlign: { xs: 'center', md: 'left' }
                        }}
                    >
                        {title}
                    </Typography> */}
                    <Title color={'#262250'} title={title} />

                    <Description Des={description} />
                    {/* <Typography
                        sx={{
                            textAlign: 'justify',
                            color: '#000',
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: { xs: '15px', md: '16px' },
                            fontWeight: 400,
                            mb: 3
                        }}
                    >
                        {description}
                    </Typography> */}

                    <Box
                        component="img"
                        src={img}
                        alt="Offshore Mobile App"
                        loading="lazy"
                        sx={{
                            display: 'block',
                            mx: 'auto',
                            width: { xs: '100%', sm: '80%', md: '550px' },
                            maxWidth: '100%',
                            borderRadius: 2
                        }}
                    />
                </Box>

                {/* Right Column - Animated Cards */}
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 4
                    }}
                >
                    {/* Top Card */}
                    <MotionCard shift={isMobile ? { x: 0, y: 0 } : { x: -30, y: -20 }}>
                        <Typography
                            sx={{
                                color: '#262250',
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '18px',
                                fontWeight: 600,
                                mb: 1
                            }}
                        >
                            True mobility
                        </Typography>
                        <Typography sx={{ color: '#333', fontSize: '15px' }}>While mobile devices becoming increasingly complex they are still mobile.</Typography>
                    </MotionCard>

                    {/* Center Card */}
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 200, damping: 20 }}>
                        <Box
                            sx={{
                                backgroundImage: 'linear-gradient(31deg, #59016e 29%, #c30002 100%)',
                                color: '#fff',
                                width: { xs: '100%', sm: '85%', md: '24rem' },
                                borderRadius: '12px',
                                p: 3,
                                boxShadow: '0px 0px 12px rgba(0,0,0,0.1)'
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: '20px',
                                    fontWeight: 600,
                                    mb: 1
                                }}
                            >
                                Optimized for different screen sizes
                            </Typography>
                            <Typography sx={{ fontSize: '15px' }}>Our design is always optimized for different devices and screen sizes.</Typography>
                        </Box>
                    </motion.div>

                    {/* Bottom Card */}
                    <MotionCard shift={isMobile ? { x: 0, y: 0 } : { x: 30, y: 20 }}>
                        <Typography
                            sx={{
                                color: '#262250',
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '18px',
                                fontWeight: 600,
                                mb: 1
                            }}
                        >
                            Details that matter for users
                        </Typography>
                        <Typography sx={{ color: '#333', fontSize: '15px' }}>Small things make a big difference between success and failure.</Typography>
                    </MotionCard>
                </Box>
            </Box>
        </Box>
    );
};

export default OffshoreMobileApp;
