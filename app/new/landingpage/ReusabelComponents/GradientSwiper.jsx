

// 'use client';

// import React from 'react';
// import { Box, Typography, useTheme } from '@mui/material';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import { motion } from 'framer-motion';

// const logos = [
//     'https://placehold.co/118x72',
//     'https://placehold.co/118x72',
//     'https://placehold.co/105x28',
//     'https://placehold.co/104x27',
//     'https://placehold.co/103x31',
//     'https://placehold.co/91x60',
// ];

// const TrustedClients = (data) => {
//     console.log(data,"data>>>")
//     const logos2 = data?.data?.clients?.logos
//     const theme = useTheme();

//     return (
//         <Box
//             sx={{
//                 position: 'relative',
//                 width: '100%',
//                 py: { xs: 4, md: 6 },
//                 bgcolor: '#fff',
//                 overflow: 'hidden',
//             }}
//         >
//             {/* Heading */}
//             <Typography
//                 variant="h4"
//                 sx={{
//                     textAlign: 'center',
//                     fontWeight: 700,
//                     mb: 4,
//                     fontFamily: 'Poppins',
//                     background: 'linear-gradient(to right, #E30E26, #262250)',
//                     WebkitBackgroundClip: 'text',
//                     WebkitTextFillColor: 'transparent',
//                 }}
//                 component={motion.h2}
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//             >
//                 Showcasing Our Trusted Clients: Partners in Success
//             </Typography>

//             {/* Swiper with logos */}
//             <Box
//                 sx={{
//                     position: 'relative',
//                     px: { xs: 2, md: 8 },
//                 }}
//             >
//                 {/* Left fade */}
//                 <Box
//                     sx={{
//                         position: 'absolute',
//                         left: 0,
//                         top: 0,
//                         bottom: 0,
//                         width: '80px',
//                         background: 'linear-gradient(to right, #fff 0%, transparent 100%)',
//                         zIndex: 2,
//                     }}
//                 />
//                 {/* Right fade */}
//                 <Box
//                     sx={{
//                         position: 'absolute',
//                         right: 0,
//                         top: 0,
//                         bottom: 0,
//                         width: '80px',
//                         background: 'linear-gradient(to left, #fff 0%, transparent 100%)',
//                         zIndex: 2,
//                     }}
//                 />

//                 <Swiper
//                     modules={[Autoplay]}
//                     spaceBetween={30}
//                     slidesPerView="auto"
//                     loop={true}
//                     autoplay={{
//                         delay: 0,
//                         disableOnInteraction: false,
//                     }}
//                     speed={4000}
//                     grabCursor={false}
//                     allowTouchMove={false}
//                 >
//                     {[...logos, ...logos].map((logo, index) => (
//                         <SwiperSlide
//                             key={index}
//                             style={{
//                                 width: 'auto',
//                                 display: 'flex',
//                                 justifyContent: 'center',
//                                 alignItems: 'center',
//                             }}
//                         >
//                             <Box
//                                 component={motion.div}
//                                 whileHover={{ scale: 1.05 }}
//                                 sx={{
//                                     width: { xs: 100, sm: 120 },
//                                     height: 64,
//                                     display: 'flex',
//                                     alignItems: 'center',
//                                     justifyContent: 'center',
//                                     bgcolor: 'white',
//                                     borderRadius: 2,
//                                     boxShadow: '0 0 10px rgba(0,0,0,0.05)',
//                                     mx: 1,
//                                 }}
//                             >
//                                 <img
//                                     src={logo}
//                                     alt={`client-${index}`}
//                                     style={{
//                                         maxWidth: '100%',
//                                         maxHeight: '100%',
//                                         objectFit: 'contain',
//                                     }}
//                                 />
//                             </Box>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </Box>
//         </Box>
//     );
// };

// export default TrustedClients;

'use client';

import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { motion } from 'framer-motion';

const TrustedClients = ({ data }) => {
    const theme = useTheme();
    const logos = data?.clients?.logos || [];

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                py: { xs: 4, md: 6 },
                bgcolor: '#fff',
                overflow: 'hidden',
            }}
        >
            {/* Heading */}
            <Typography
                variant="h6"
                sx={{
                    textAlign: 'center',
                    fontWeight: 600,
                    mb: 4,
                    fontFamily: 'Poppins',
                    background: 'linear-gradient(to right, #E30E26, #262250)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}
                component={motion.h2}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Showcasing Our Trusted Clients: Partners in Success
            </Typography>

            {/* Swiper with logos */}
            <Box
                sx={{
                    position: 'relative',
                    px: { xs: 2, md: 8 },
                }}
            >
                {/* Left fade */}
                <Box
                    sx={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: '80px',
                        background: 'linear-gradient(to right, #fff 0%, transparent 100%)',
                        zIndex: 2,
                    }}
                />
                {/* Right fade */}
                <Box
                    sx={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: '80px',
                        background: 'linear-gradient(to left, #fff 0%, transparent 100%)',
                        zIndex: 2,
                    }}
                />

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView="auto"
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    speed={4000}
                    grabCursor={false}
                    allowTouchMove={false}
                >
                    {[...logos, ...logos].map((item, index) => (
                        <SwiperSlide
                            key={index}
                            style={{
                                width: 'auto',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Box
                                component={motion.div}
                                whileHover={{ scale: 1.05 }}
                                sx={{
                                    width: { xs: 100, sm: 120 },
                                    height: 64,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    bgcolor: 'white',
                                    borderRadius: 2,
                                    boxShadow: '0 0 10px rgba(0,0,0,0.05)',
                                    mx: 1,
                                }}
                            >
                                <img
                                    src={item.logo}
                                    alt={item.name}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                        objectFit: 'contain',
                                    }}
                                />
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Box>
    );
};

export default TrustedClients;
