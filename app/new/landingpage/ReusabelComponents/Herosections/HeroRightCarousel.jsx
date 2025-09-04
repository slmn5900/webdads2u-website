
// 'use client';

// import React, { useEffect, useRef } from 'react';
// import { Box } from '@mui/material';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import 'swiper/css';

// // Individual vertical scrolling image ticker
// const TickerSlider = ({ images = [], reverseDirection = false }) => {
//     const swiperRef = useRef(null);

//     const getGap = () =>
//         typeof window !== 'undefined' && window.innerWidth > 300
//             ? 0.0285 * window.innerWidth
//             : 15;

//     const settings = {
//         direction: 'vertical',
//         loop: true,
//         slidesPerView: 'auto',
//         spaceBetween: getGap(),
//         speed: 5000,
//         centeredSlides: true,
//         allowTouchMove: false,
//         autoplay: {
//             delay: 0,
//             disableOnInteraction: false,
//             reverseDirection,
//         },
//         modules: [Autoplay],
//     };

//     useEffect(() => {
//         const handleResize = () => swiperRef.current?.swiper?.update();
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     return (
//         <Swiper {...settings} ref={swiperRef}>
//             {[...images, ...images].map((img, index) => (
//                 <SwiperSlide key={index} style={{ width: 'auto', height: 'auto' }}>
//                     <Box
//                         sx={{
//                             position: 'relative',
//                             width: { xs: '150px', md: '15.625vw' },
//                             aspectRatio: '300 / 205',
//                             borderRadius: '10px',
//                             overflow: 'hidden',
//                             backdropFilter: 'blur(50px)',
//                         }}
//                     >
//                         <img
//                             src={img}
//                             alt={`slide-${index}`}
//                             style={{
//                                 width: '100%',
//                                 height: '100%',
//                                 objectFit: 'cover',
//                                 display: 'block',
//                             }}
//                         />
//                     </Box>
//                 </SwiperSlide>
//             ))}
//         </Swiper>
//     );
// };

// // Dual vertical sliders side by side
// const DualTickerSlider = ({ imagesLeft = [], imagesRight = [] }) => {
//     return (
//         <Box
//             sx={{
//                 display: 'flex',
//                 flexDirection: { xs: 'column', md: 'row' },
//                 gap: { xs: 2, md: '2vw' },
//                 width: '100%',
//                 overflow: 'hidden',
//                 boxShadow: "",
//                 position: "relative",
//                 bottom: -12
//             }}
//         >
//             {/* Left side (scrolls upward) */}
//             <Box sx={{ flex: 1 }}>
//                 <TickerSlider images={imagesLeft} reverseDirection={true} />
//             </Box>

//             {/* Right side (scrolls downward) */}
//             <Box sx={{ flex: 1 }}>
//                 <TickerSlider images={imagesRight} reverseDirection={false} />
//             </Box>
//         </Box>
//     );
// };

// export default DualTickerSlider;

'use client';

import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// Individual vertical scrolling image ticker
const TickerSlider = ({ images = [], reverseDirection = false }) => {
    const swiperRef = useRef(null);

    const getGap = () =>
        typeof window !== 'undefined' && window.innerWidth > 300
            ? 0.0285 * window.innerWidth
            : 15;

    const settings = {
        direction: 'vertical',
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: getGap(),
        speed: 5000,
        centeredSlides: true,
        allowTouchMove: false,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            reverseDirection,
        },
        modules: [Autoplay],
    };

    useEffect(() => {
        const handleResize = () => swiperRef.current?.swiper?.update();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Swiper {...settings} ref={swiperRef}>
            {[...images, ...images].map((img, index) => (
                <SwiperSlide key={index} style={{ width: 'auto', height: 'auto' }}>
                    <Box
                        sx={{
                            position: 'relative',
                            width: { xs: '150px', md: '18.625vw' },
                            aspectRatio: '300 / 205',
                            // borderRadius: '10px',
                            overflow: 'hidden',
                            backdropFilter: 'blur(50px)',
                        }}
                    >
                        <img
                            src={img}
                            alt={`slide-${index}`}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block',
                            }}
                        />
                    </Box>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

// Dual vertical sliders with top & bottom white shadows
const DualTickerSlider = ({ imagesLeft = [], imagesRight = [] }) => {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                maxWidth: '1200px',
                mx: 'auto',
                mt: { xs: 2, md: 4 },
                overflow: 'hidden',
            }}
        >
            {/* Top white shadow */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '60px',
                    zIndex: 2,
                    background: 'linear-gradient(to bottom, white 30%, transparent 100%)',
                }}
            />

            {/* Bottom white shadow */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '20px',
                    zIndex: 2,
                    background: 'linear-gradient(to top, white 40%, transparent 100%)',
                }}
            />

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: { xs: 2, md: '1vw' },
                    width: '100%',
                    position: 'relative',
                    zIndex: 1,
                    py: 2,
                }}
            >
                {/* Left Ticker */}
                <Box sx={{ flex: 0 }}>
                    <TickerSlider images={imagesLeft} reverseDirection={true} />
                </Box>

                {/* Right Ticker */}
                <Box sx={{ flex: 1 }}>
                    <TickerSlider images={imagesRight} reverseDirection={false} />
                </Box>
            </Box>
        </Box>
    );
};

export default DualTickerSlider;
