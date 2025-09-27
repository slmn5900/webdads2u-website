// import React, { useEffect, useRef } from 'react';
// import $ from 'jquery';
// import 'slick-carousel';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { Button } from 'react-bootstrap';

// function LetterheadSlider() {
//     const sliderRef = useRef(null);

//     useEffect(() => {
//         const sliderElement = sliderRef.current;

//         const initializeSlick = () => {
//             if (!sliderElement || $(sliderElement).hasClass('slick-initialized')) return;

//             $(sliderElement).slick({
//                 prevArrow: $('.prev'),
//                 nextArrow: $('.next'),
//                 infinite: true,
//                 speed: 2000,
//                 slidesToShow: 4,
//                 slidesToScroll: 4,
//                 autoplay: true,
//                 autoplaySpeed: 2000,
//                 responsive: [
//                     {
//                         breakpoint: 1024,
//                         settings: {
//                             slidesToShow: 3,
//                             slidesToScroll: 3
//                         }
//                     },
//                     {
//                         breakpoint: 600,
//                         settings: {
//                             slidesToShow: 3,
//                             slidesToScroll: 2
//                         }
//                     },
//                     {
//                         breakpoint: 480,
//                         settings: {
//                             slidesToShow: 1,
//                             slidesToScroll: 1
//                         }
//                     }
//                 ]
//             });
//         };

//         const timeoutId = setTimeout(() => {
//             const checkImagesLoaded = setInterval(() => {
//                 const images = sliderElement?.querySelectorAll('img');
//                 const allLoaded = [...images].every((img) => img.complete);

//                 if (allLoaded) {
//                     clearInterval(checkImagesLoaded);
//                     initializeSlick();
//                 }
//             }, 100);
//         }, 100);

//         return () => {
//             clearTimeout(timeoutId);
//             if (sliderElement && $(sliderElement).hasClass('slick-initialized')) {
//                 $(sliderElement).slick('unslick');
//             }
//         };
//     }, []);

//     return (
//         <section className="letterhdslr">
//             <div className="container">
//                 <div className="row android-app-development-slider">
//                     <div className="col-xs-12 col-md-12 align-self-center">
//                         <div className="overlay"></div>
//                         <div className="slider responsive" ref={sliderRef}>
//                             {['Audioscape.webp', 'AYN-letter-head.webp', 'Jk-onstruction.webp', 'Juniya.webp', 'Raj-vision-electronics.webp', 'SKP-1.webp'].map((img, index) => (
//                                 <div key={index}>
//                                     <img src={`webdads/images/letterhead/${img}`} alt={`slider${index + 1}`} style={{ width: '100%', height: 'auto' }} />
//                                 </div>
//                             ))}
//                         </div>
//                         {/* Optional: Custom arrows if needed */}
//                         {/* <button className="prev">Prev</button>
//                         <button className="next">Next</button> */}
//                         <div>
//                             <div className="text-center">
//                                 <a href="/letter-head/">
//                                     <Button className='letter-head-slider-viwe-more'>View More </Button>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default LetterheadSlider;
'use client';
import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const letterheadImages = [
    {
        src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756797404/webdads2u/letter-head/nivas-letter-head.avif',
        alt: 'nivas letter head'
    },
    {
        src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756796278/webdads2u/letter-head/juniya-letter-head.png',
        alt: 'juniya letter head'
    },
    {
        src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756796277/webdads2u/letter-head/raj-vision-electronics-letter-head.jpg',
        alt: 'raj vision electronics letter head'
    },
    {
        src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756796276/webdads2u/letter-head/skp-letter-head.jpg',
        alt: 'skp letter head'
    },
    {
        src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756796275/webdads2u/letter-head/audioscape-letter-head.jpg',
        alt: 'audioscape letter head'
    },
    {
        src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756796249/webdads2u/letter-head/ayn-letter-head.jpg',
        alt: 'ayn letter head'
    },
    {
        src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756796247/webdads2u/letter-head/jk-construction-letter-head.jpg',
        alt: 'jk construction letter head'
    },
    {
        src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756796247/webdads2u/letter-head/arcmen-letter-head.jpg',
        alt: 'arcmen letter head'
    },
    {
        src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756796241/webdads2u/letter-head/aarthi-homes-letter-head.jpg',
        alt: 'aarthi homes letter head'
    },
    {
        src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756796230/webdads2u/letter-head/sash-letter-head.jpg',
        alt: 'sash letter head'
    }
];

function LetterheadSlider() {
    return (
        <Box component="section" sx={{ py: { xs: 2, md: 6 }, backgroundColor: '#fafafa' }}>
            <Container>
                <Typography variant="h4" align="center" sx={{ mb: 4, fontWeight: 'bold' }}>
                    Our Letterhead Designs
                </Typography>

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={4}
                    // navigation
                    // pagination={{ clickable: true }}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    breakpoints={{
                        1200: { slidesPerView: 4 },
                        900: { slidesPerView: 3 },
                        600: { slidesPerView: 2 },
                        0: { slidesPerView: 1 }
                    }}
                >
                    {letterheadImages.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Box
                                component="img"
                                src={item.src}
                                alt={item.alt}
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: 2,
                                    boxShadow: 2,
                                    transition: 'transform 0.3s',
                                    '&:hover': { transform: 'scale(1.05)' }
                                }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <Box textAlign="center" mt={4}>
                    <Button variant="contained" color="primary" href="/letter-head/" sx={{ borderRadius: '50px', px: 4, py: 1.5 }}>
                        View More
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}

export default LetterheadSlider;
