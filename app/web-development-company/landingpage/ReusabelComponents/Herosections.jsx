// "use client"
// import React from 'react';
// import { Box, Typography, Button, TextField, Container } from '@mui/material';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Autoplay, Pagination } from 'swiper/modules';
// import CustomGradientBarButton from './header';

// const HeroSection = () => {
//     return (
//         <Container maxWidth="lg" sx={{
//             position: 'relative',
//             overflow: 'hidden',
//             py: { xs: 4, md: 2 },
//             px: { xs: 2, md: 4 },
//         }}>
//             <Box sx={{ py: 1 }}>

//                 <CustomGradientBarButton />
//             </Box>
//             {/* Grid lines - horizontal */}
//             <Box sx={{
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 height: '100%',
//                 display: { xs: 'none', md: 'block' },
//                 pointerEvents: 'none',
//                 zIndex: 0,
//             }}>
//                 {[...Array(16)].map((_, i) => (
//                     <Box key={`h-${i}`} sx={{
//                         position: 'absolute',
//                         left: 0,
//                         right: 0,
//                         height: '1px',
//                         top: `${i * 60}px`,
//                         backgroundColor: 'rgba(0,0,0,0.1)',
//                     }} />
//                 ))}
//             </Box>

//             {/* Grid lines - vertical */}
//             <Box sx={{
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 bottom: 0,
//                 width: '100%',
//                 display: { xs: 'none', md: 'block' },
//                 pointerEvents: 'none',
//                 zIndex: 0,
//             }}>

//                 {[...Array(16)].map((_, i) => (
//                     <Box key={`v-${i}`} sx={{
//                         position: 'absolute',
//                         top: 0,
//                         bottom: 0,
//                         width: '1px',
//                         left: `${i * 60}px`,
//                         backgroundColor: 'rgba(0,0,0,0.1)',
//                     }} />
//                 ))}
//             </Box>

//             <Box sx={{
//                 position: 'relative',
//                 zIndex: 1,
//                 display: 'flex',
//                 flexDirection: { xs: 'column', md: 'row' },
//                 gap: { xs: 4, md: 8 },
//                 alignItems: 'center',
//             }}>
//                 {/* Left content */}
//                 <Box sx={{
//                     flex: 1,
//                     maxWidth: { md: '518px' },
//                 }}>
//                     <Box sx={{
//                         display: 'inline-block',
//                         backgroundColor: '#262250',
//                         borderRadius: '50px',
//                         px: 2.5,
//                         py: 0.5,
//                         mb: 2,
//                     }}>
//                         <Typography variant="body1" sx={{
//                             color: 'white',
//                             fontSize: '16px',
//                             fontWeight: 600,
//                             fontFamily: 'Poppins',
//                         }}>
//                             Wordpress
//                         </Typography>
//                     </Box>

//                     <Typography variant="h2" sx={{
//                         color: '#E30E26',
//                         fontSize: { xs: '24px', md: '32px' },
//                         fontWeight: 600,
//                         fontFamily: 'Poppins',
//                         mb: 2,
//                     }}>
//                         Empowering Businesses through Web Solutions
//                     </Typography>

//                     <Typography variant="body1" sx={{
//                         color: 'black',
//                         fontSize: '16px',
//                         fontWeight: 400,
//                         fontFamily: 'Poppins',
//                         mb: 4,
//                     }}>
//                         Masters of Cutting-Edge Technology in Web Solutions
//                     </Typography>

//                     <TextField
//                         fullWidth
//                         placeholder="Name"
//                         sx={{
//                             mb: 3,
//                             '& .MuiOutlinedInput-root': {
//                                 borderRadius: '8px',
//                             },
//                         }}
//                     />

//                     <TextField
//                         fullWidth
//                         placeholder="Phone Number"
//                         sx={{
//                             mb: 4,
//                             '& .MuiOutlinedInput-root': {
//                                 borderRadius: '8px',
//                             },
//                         }}
//                     />

//                     <Box sx={{
//                         display: 'flex',
//                         gap: 2,
//                         mb: 4,
//                         flexDirection: { xs: 'column', sm: 'row' },
//                     }}>
//                         <Button variant="contained" sx={{
//                             backgroundColor: '#E40D25',
//                             borderRadius: '4px',
//                             color: 'white',
//                             textTransform: 'uppercase',
//                             px: 4,
//                             py: 1.5,
//                             '&:hover': {
//                                 backgroundColor: '#C00D22',
//                             },
//                         }}>
//                             Contact Us
//                         </Button>

//                         <Button variant="contained" sx={{
//                             backgroundColor: '#E40D25',
//                             borderRadius: '4px',
//                             color: 'white',
//                             textTransform: 'uppercase',
//                             px: 4,
//                             py: 1.5,
//                             '&:hover': {
//                                 backgroundColor: '#C00D22',
//                             },
//                         }}>
//                             Whatsapp
//                         </Button>
//                     </Box>

//                     <Box sx={{
//                         display: 'flex',
//                         flexDirection: 'column',
//                         gap: 1,
//                     }}>
//                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                             <Box sx={{ width: 24, height: 24 }}>
//                                 <Box sx={{
//                                     width: 20,
//                                     height: 16,
//                                     backgroundColor: '#1F167B',
//                                 }} />
//                             </Box>
//                             <Typography sx={{
//                                 color: '#1F167B',
//                                 fontSize: { xs: '16px', md: '20px' },
//                                 fontWeight: 600,
//                                 fontFamily: 'Poppins',
//                             }}>
//                                 info@webdads2u.com
//                             </Typography>
//                         </Box>

//                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                             <Box sx={{ width: 24, height: 24 }}>
//                                 <Box sx={{
//                                     width: 18,
//                                     height: 18,
//                                     backgroundColor: '#1F167B',
//                                 }} />
//                             </Box>
//                             <Typography sx={{
//                                 color: '#1F167B',
//                                 fontSize: { xs: '16px', md: '20px' },
//                                 fontWeight: 600,
//                                 fontFamily: 'Poppins',
//                             }}>
//                                 88256 07550
//                             </Typography>
//                         </Box>
//                     </Box>
//                 </Box>

//                 {/* Right content - Image carousel */}
//                 <Box sx={{
//                     flex: 1,
//                     width: '100%',
//                     maxWidth: { md: '657px' },
//                     position: 'relative',
//                 }}>
//                     <Box sx={{
//                         position: 'absolute',
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         bottom: 0,
//                         background: 'linear-gradient(180deg, white 4%, rgba(255, 255, 255, 0) 14%, rgba(255, 255, 255, 0) 81%, white 100%)',
//                         zIndex: 1,
//                         pointerEvents: 'none',
//                     }} />

//                     <Swiper
//                         spaceBetween={30}
//                         slidesPerView={1}
//                         loop={true}
//                         autoplay={{
//                             delay: 2500,
//                             disableOnInteraction: false,
//                         }}
//                         pagination={{
//                             clickable: true,
//                         }}
//                         breakpoints={{
//                             640: {
//                                 slidesPerView: 2,
//                             },
//                             900: {
//                                 slidesPerView: 3,
//                             },
//                         }}
//                         modules={[Autoplay, Pagination]}
//                         style={{
//                             width: '100%',
//                             height: '100%',
//                             padding: '20px 0',
//                         }}
//                     >
//                         {[...Array(7)].map((_, index) => (
//                             <SwiperSlide key={index} style={{
//                                 display: 'flex',
//                                 justifyContent: 'center',
//                                 alignItems: 'center',
//                             }}>
//                                 <Box sx={{
//                                     width: { xs: '200px', md: '254px' },
//                                     height: { xs: '200px', md: '248px' },
//                                     backgroundColor: '#f5f5f5',
//                                     display: 'flex',
//                                     justifyContent: 'center',
//                                     alignItems: 'center',
//                                     borderRadius: '8px',
//                                     overflow: 'hidden',
//                                 }}>
//                                     <Typography variant="body2" sx={{ color: '#999' }}>
//                                         Image {index + 1}
//                                     </Typography>
//                                 </Box>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>
//                 </Box>
//             </Box>
//         </Container>
//     );
// };

// export default HeroSection;

// "use client";
// import React from 'react';
// import {
//     Box,
//     Typography,
//     Button,
//     TextField,
//     Container,
//     Grid2
// } from '@mui/material';
//  // ✅ Import Grid2
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Autoplay, Pagination } from 'swiper/modules';
// import CustomGradientBarButton from './header';

// const HeroSection = () => {
//     return (
//         <Container maxWidth="lg" sx={{
//             position: 'relative',
//             overflow: 'hidden',
//             py: { xs: 4, md: 2 },
//             px: { xs: 2, md: 4 },
//         }}>
//             <Box sx={{ py: 1 }}>
//                 <CustomGradientBarButton />
//             </Box>

//             {/* Grid lines - horizontal */}
//             <Box sx={{
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 height: '100%',
//                 display: { xs: 'none', md: 'block' },
//                 pointerEvents: 'none',
//                 zIndex: 0,
//             }}>
//                 {[...Array(16)].map((_, i) => (
//                     <Box key={`h-${i}`} sx={{
//                         position: 'absolute',
//                         left: 0,
//                         right: 0,
//                         height: '1px',
//                         top: `${i * 60}px`,
//                         backgroundColor: 'rgba(0,0,0,0.1)',
//                     }} />
//                 ))}
//             </Box>

//             {/* Grid lines - vertical */}
//             <Box sx={{
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 bottom: 0,
//                 width: '100%',
//                 display: { xs: 'none', md: 'block' },
//                 pointerEvents: 'none',
//                 zIndex: 0,
//             }}>
//                 {[...Array(16)].map((_, i) => (
//                     <Box key={`v-${i}`} sx={{
//                         position: 'absolute',
//                         top: 0,
//                         bottom: 0,
//                         width: '1px',
//                         left: `${i * 60}px`,
//                         backgroundColor: 'rgba(0,0,0,0.1)',
//                     }} />
//                 ))}
//             </Box>

//             {/* Main content with Grid2 */}
//             <Grid2 container spacing={4} sx={{ position: 'relative', zIndex: 1 }}>
//                 {/* Left content */}
//                 <Grid2 size={{ xs: 12, md: 6 }}>
//                     <Box sx={{
//                         maxWidth: { md: '518px' },
//                     }}>
//                         <Box sx={{
//                             display: 'inline-block',
//                             backgroundColor: '#262250',
//                             borderRadius: '50px',
//                             px: 2.5,
//                             py: 0.5,
//                             mb: 2,
//                         }}>
//                             <Typography variant="body1" sx={{
//                                 color: 'white',
//                                 fontSize: '16px',
//                                 fontWeight: 600,
//                                 fontFamily: 'Poppins',
//                             }}>
//                                 Wordpress
//                             </Typography>
//                         </Box>

//                         <Typography variant="h2" sx={{
//                             color: '#E30E26',
//                             fontSize: { xs: '24px', md: '32px' },
//                             fontWeight: 600,
//                             fontFamily: 'Poppins',
//                             mb: 2,
//                         }}>
//                             Empowering Businesses through Web Solutions
//                         </Typography>

//                         <Typography variant="body1" sx={{
//                             color: 'black',
//                             fontSize: '16px',
//                             fontWeight: 400,
//                             fontFamily: 'Poppins',
//                             mb: 4,
//                         }}>
//                             Masters of Cutting-Edge Technology in Web Solutions
//                         </Typography>

//                         <TextField
//                             fullWidth
//                             placeholder="Name"
//                             sx={{
//                                 mb: 3,
//                                 '& .MuiOutlinedInput-root': {
//                                     borderRadius: '8px',
//                                 },
//                             }}
//                         />

//                         <TextField
//                             fullWidth
//                             placeholder="Phone Number"
//                             sx={{
//                                 mb: 4,
//                                 '& .MuiOutlinedInput-root': {
//                                     borderRadius: '8px',
//                                 },
//                             }}
//                         />

//                         <Box sx={{
//                             display: 'flex',
//                             gap: 2,
//                             mb: 4,
//                             flexDirection: { xs: 'column', sm: 'row' },
//                         }}>
//                             <Button variant="contained" sx={{
//                                 backgroundColor: '#E40D25',
//                                 borderRadius: '4px',
//                                 color: 'white',
//                                 textTransform: 'uppercase',
//                                 px: 4,
//                                 py: 1.5,
//                                 '&:hover': {
//                                     backgroundColor: '#C00D22',
//                                 },
//                             }}>
//                                 Contact Us
//                             </Button>

//                             <Button variant="contained" sx={{
//                                 backgroundColor: '#E40D25',
//                                 borderRadius: '4px',
//                                 color: 'white',
//                                 textTransform: 'uppercase',
//                                 px: 4,
//                                 py: 1.5,
//                                 '&:hover': {
//                                     backgroundColor: '#C00D22',
//                                 },
//                             }}>
//                                 Whatsapp
//                             </Button>
//                         </Box>

//                         <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                                 <Box sx={{ width: 24, height: 24 }}>
//                                     <Box sx={{
//                                         width: 20,
//                                         height: 16,
//                                         backgroundColor: '#1F167B',
//                                     }} />
//                                 </Box>
//                                 <Typography sx={{
//                                     color: '#1F167B',
//                                     fontSize: { xs: '16px', md: '20px' },
//                                     fontWeight: 600,
//                                     fontFamily: 'Poppins',
//                                 }}>
//                                     info@webdads2u.com
//                                 </Typography>
//                             </Box>

//                             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                                 <Box sx={{ width: 24, height: 24 }}>
//                                     <Box sx={{
//                                         width: 18,
//                                         height: 18,
//                                         backgroundColor: '#1F167B',
//                                     }} />
//                                 </Box>
//                                 <Typography sx={{
//                                     color: '#1F167B',
//                                     fontSize: { xs: '16px', md: '20px' },
//                                     fontWeight: 600,
//                                     fontFamily: 'Poppins',
//                                 }}>
//                                     88256 07550
//                                 </Typography>
//                             </Box>
//                         </Box>
//                     </Box>
//                 </Grid2>

//                 {/* Right content - Swiper carousel */}
//                 <Grid2 size={{ xs: 12, md: 6 }}>
//                     <Box sx={{
//                         width: '100%',
//                         maxWidth: { md: '657px' },
//                         position: 'relative',
//                     }}>
//                         <Box sx={{
//                             position: 'absolute',
//                             top: 0,
//                             left: 0,
//                             right: 0,
//                             bottom: 0,
//                             background: 'linear-gradient(180deg, white 4%, rgba(255, 255, 255, 0) 14%, rgba(255, 255, 255, 0) 81%, white 100%)',
//                             zIndex: 1,
//                             pointerEvents: 'none',
//                         }} />

//                         <Swiper
//                             spaceBetween={30}
//                             slidesPerView={1}
//                             loop={true}
//                             autoplay={{
//                                 delay: 2500,
//                                 disableOnInteraction: false,
//                             }}
//                             pagination={{ clickable: true }}
//                             breakpoints={{
//                                 640: {
//                                     slidesPerView: 2,
//                                 },
//                                 900: {
//                                     slidesPerView: 3,
//                                 },
//                             }}
//                             modules={[Autoplay, Pagination]}
//                             style={{
//                                 width: '100%',
//                                 height: '100%',
//                                 padding: '20px 0',
//                             }}
//                         >
//                             {[...Array(7)].map((_, index) => (
//                                 <SwiperSlide key={index} style={{
//                                     display: 'flex',
//                                     justifyContent: 'center',
//                                     alignItems: 'center',
//                                 }}>
//                                     <Box sx={{
//                                         width: { xs: '200px', md: '254px' },
//                                         height: { xs: '200px', md: '248px' },
//                                         backgroundColor: '#f5f5f5',
//                                         display: 'flex',
//                                         justifyContent: 'center',
//                                         alignItems: 'center',
//                                         borderRadius: '8px',
//                                         overflow: 'hidden',
//                                     }}>
//                                         <Typography variant="body2" sx={{ color: '#999' }}>
//                                             Image {index + 1}
//                                         </Typography>
//                                     </Box>
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>
//                     </Box>
//                 </Grid2>
//             </Grid2>
//         </Container>
//     );
// };

// export default HeroSection;

'use client';
import React, { useEffect } from 'react';
import HeroSectionProps from './Herosections/HeroSection';
import { Box } from '@mui/material';
import GridLines from './Herosections/GridLines';
const heroProps = {
    tagline: 'Wordpress',
    heading: 'Empowering Businesses through Web Solutions',
    description: 'Masters of Cutting-Edge Technology in Web Solutions',
    email: 'info@webdads2u.com',
    phone: '88256 07550',
    button1: 'Get Start',
    button2: 'Whatsapp',
    images: ['/webdadsNewImages/webdevelopment/Arcmen mockup images 3.png', '/webdadsNewImages/webdevelopment/Arcmen mockup images 3.png', '/webdadsNewImages/webdevelopment/Arcmen mockup images 3.png']
};

export default function Herosections({ data }) {
    const response = data?.header;
    console.log(response, 'images');
    const images = response?.gallery?.images;
    const heading = response?.title;
    const tagline = response?.badge?.text;
    const description = response?.subtitle;
    const Contact = response?.contact_info;
    console.log(images, 'imageeeeeee');
    return (
        <Box
        //  sx={{ height: "auto", maxHeight: "calc(100vh - 45px)" }}
        >
            <GridLines />
            <HeroSectionProps tagline={tagline} heading={heading} description={description} email={Contact?.email} phone={Contact?.phone} button1={heroProps?.button1} button2={heroProps?.button2} images={images} />
        </Box>
    );
}
