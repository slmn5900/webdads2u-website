// 'use client';

// import { Box, Grid2, Typography } from '@mui/material';
// import React from 'react';
// import { motion } from 'framer-motion';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import 'swiper/css';

// const WhyChooseFeatures = () => {
//     const logos = [
//         {
//             name: 'Design-Quality',
//             logo: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410116/webdads2u/web-design/icons/Design-Quality.png'
//         },
//         {
//             name: 'Digitak-Stategy',
//             logo: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410109/webdads2u/web-design/icons/Digitak-Stategy.png'
//         },
//         {
//             name: 'Navigation',
//             logo: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410123/webdads2u/web-design/icons/Navigation.png'
//         },
//         {
//             name: 'Responsiveness',
//             logo: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410119/webdads2u/web-design/icons/Responsiveness.png'
//         },
//         {
//             name: 'Target',
//             logo: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410112/webdads2u/web-design/icons/target.png'
//         }
//     ];

//     return (
//         <Box
//             sx={{
//                 px: 10,
//                 width: '100%',
//                 minHeight: '50vh', // Takes 70% of the screen height (adjust % as needed)
//                 backgroundImage: 'url(https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410001/webdads2u/web-design/banner-rectangle.png)',
//                 backgroundSize: 'contain',
//                 backgroundPosition: 'center',
//                 backgroundRepeat: 'no-repeat',
//                 backgroundColor: 'background.default'
//             }}
//         >
//             <Grid2 container spacing={5}>
//                 <Grid2 size={4} textAlign="start">
//                     <Box sx={{ mt: 10 }}>
//                         <Typography variant="h5" component="p" sx={{ color: 'white', fontWeight: 600, mb: 3 }}>
//                             WHY TO CHOOSE
//                         </Typography>
//                         <Typography variant="h4" component="p" sx={{ color: 'white', fontWeight: 600 }}>
//                             Save your time with a lot of features
//                         </Typography>
//                     </Box>
//                 </Grid2>
//                 <Grid2 size={8} textAlign="center">
//                     <Box sx={{ mt: 10 }}>
//                         <Swiper
//                             modules={[Autoplay]}
//                             spaceBetween={30}
//                             slidesPerView={3}
//                             loop={true}
//                             autoplay={{
//                                 delay: 0,
//                                 disableOnInteraction: false
//                             }}
//                             speed={4000}
//                             grabCursor={false}
//                             allowTouchMove={false}
//                         >
//                             {[...logos, ...logos].map((item, index) => (
//                                 <SwiperSlide
//                                     key={index}
//                                     style={{
//                                         width: 'auto',
//                                         display: 'flex',
//                                         flexDirection: 'column',
//                                         justifyContent: 'center',
//                                         alignItems: 'center'
//                                     }}
//                                 >
//                                     <Box
//                                         component={motion.div}
//                                         whileHover={{ scale: 1.05 }}
//                                         sx={{
//                                             width: { xs: 60, sm: 80, md: 140 },
//                                             height: { xs: 30, sm: 45, md: 100 },
//                                             display: 'flex',
//                                             alignItems: 'center',
//                                             justifyContent: 'center',
//                                             // bgcolor: 'white',
//                                             borderRadius: 2
//                                             // boxShadow: '0 0 10px rgba(0,0,0,0.05)',
//                                         }}
//                                     >

//                                         <img
//                                             src={item.logo}
//                                             alt={item.name}
//                                             style={{
//                                                 maxWidth: '100%',
//                                                 maxHeight: '100%',
//                                                 objectFit: 'contain'
//                                             }}
//                                         />
//                                     </Box>
//                                     <Box>
//                                         <Typography sx={{ fontSize: 20, color: 'white' }}>{item.name}</Typography>
//                                     </Box>
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>
//                     </Box>
//                 </Grid2>
//             </Grid2>
//         </Box>
//     );
// };

// export default WhyChooseFeatures;
'use client';

import { Box, Grid2, Typography } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const WhyChooseFeatures = () => {
    const logos = [
        {
            name: 'Design-Quality',
            logo: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410116/webdads2u/web-design/icons/Design-Quality.png'
        },
        {
            name: 'Digitak-Stategy',
            logo: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410109/webdads2u/web-design/icons/Digitak-Stategy.png'
        },
        {
            name: 'Navigation',
            logo: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410123/webdads2u/web-design/icons/Navigation.png'
        },
        {
            name: 'Responsiveness',
            logo: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410119/webdads2u/web-design/icons/Responsiveness.png'
        },
        {
            name: 'Target',
            logo: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410112/webdads2u/web-design/icons/target.png'
        }
    ];

    return (
        <Box
            sx={{
                px: { xs: 2, sm: 4, md: 8, lg: 10 },
                width: '100%',
                minHeight: { xs: 'auto', md: '50vh' },
                backgroundImage: { xs: '', md: 'url(https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410001/webdads2u/web-design/banner-rectangle.png)' },
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: { xs: 'black', sm: 'black', md: 'background.default' },
                py: { xs: 6, md: 10 }
            }}
        >
            <Grid2 container spacing={{ xs: 3, md: 5 }} alignItems="center">
                {/* Left Text */}
                <Grid2 size={{ xs: 12, md: 4 }} textAlign={{ xs: 'center', md: 'start' }}>
                    <Box>
                        <Typography variant="h6" component="p" sx={{ color: 'white', fontWeight: 600, mb: 2, fontSize: { xs: 16, sm: 18, md: 20 } }}>
                            WHY TO CHOOSE
                        </Typography>
                        <Typography
                            variant="h4"
                            component="p"
                            sx={{
                                color: 'white',
                                fontWeight: 600,
                                fontSize: { xs: 20, sm: 24, md: 30, lg: 34 },
                                lineHeight: 1.3
                            }}
                        >
                            Save your time with a lot of features
                        </Typography>
                    </Box>
                </Grid2>

                {/* Right Slider */}
                <Grid2 size={{ xs: 12, md: 8 }} textAlign="center">
                    <Box>
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={20}
                            slidesPerView={2}
                            breakpoints={{
                                600: { slidesPerView: 3, spaceBetween: 25 },
                                900: { slidesPerView: 4, spaceBetween: 30 }
                            }}
                            loop={true}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false
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
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Box
                                        component={motion.div}
                                        whileHover={{ scale: 1.05 }}
                                        sx={{
                                            width: { xs: 60, sm: 80, md: 120, lg: 140 },
                                            height: { xs: 40, sm: 50, md: 90, lg: 100 },
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: 2
                                        }}
                                    >
                                        <img
                                            src={item.logo}
                                            alt={item.name}
                                            style={{
                                                maxWidth: '100%',
                                                maxHeight: '100%',
                                                objectFit: 'contain'
                                            }}
                                        />
                                    </Box>
                                    <Typography
                                        sx={{
                                            fontSize: { xs: 12, sm: 14, md: 16, lg: 18 },
                                            color: 'white',
                                            mt: 1
                                        }}
                                    >
                                        {item.name}
                                    </Typography>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default WhyChooseFeatures;
