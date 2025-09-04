// import React, { useEffect } from 'react';
// import $ from 'jquery';
// import 'slick-carousel';
// import 'slick-carousel/slick/slick.css';

// function Logodesignslider() {
//     useEffect(() => {
//         $('.logodesignslider-slider').slick({
//             // dots: true,
//             prevArrow: $('.prev'),
//             nextArrow: $('.next'),
//             infinite: true,
//             speed: 300,
//             slidesToShow: 5,
//             slidesToScroll: 1,
//             autoplay: true,
//             autoplaySpeed: 1000,
//             responsive: [
//                 {
//                     breakpoint: 1024,
//                     settings: {
//                         slidesToShow: 3,
//                         slidesToScroll: 1
//                     }
//                 },
//                 {
//                     breakpoint: 600,
//                     settings: {
//                         slidesToShow: 3,
//                         slidesToScroll: 1
//                     }
//                 },
//                 {
//                     breakpoint: 480,
//                     settings: {
//                         slidesToShow: 1,
//                         slidesToScroll: 1
//                     }
//                 }
//             ]
//         });

//         return () => {
//             $('.responsive').slick('unslick');
//         };
//     }, []);

//     return (
//         <section className="logodesignslider-main">
//             <div className="container-fluid">
//                 <div className="row text-center logodesignslider-header">
//                     <div className="col-sm-12 col-md-12 col-lg-12">
//                         <h4>Our Works</h4>
//                     </div>
//                 </div>

//                 <div className="row">
//                     <div className="col-sm-12 col-md-12 col-lg-12">
//                         <div className="overlay"></div>

//                         <div className="slider logodesignslider-slider">
//                             <div className="mt-0 mt-md-3 mt-lg-4">
//                                 <div className="card m-3 text-center">
//                                     <img src="webdads/images/logo-design/arc-man-logo.png" alt="arc-man-logo" loading="lazy" className="img-fluid" />
//                                 </div>
//                             </div>

//                             <div>
//                                 <div className="card m-3 text-center">
//                                     <img src="webdads/images/logo-design/best.png" alt="best" loading="lazy" className="img-fluid" />
//                                 </div>
//                             </div>

//                             <div className="mt-0 mt-md-3 mt-lg-4">
//                                 <div className="card m-3 text-center">
//                                     <img src="webdads/images/logo-design/best-dps.png" alt="best-dps" loading="lazy" className="img-fluid" />
//                                 </div>
//                             </div>

//                             <div>
//                                 <div className="card m-3 text-center">
//                                     <img src="webdads/images/logo-design/corengg-serve-engineering.png" alt="corengg-serve-engineering" loading="lazy" className="img-fluid" />
//                                 </div>
//                             </div>

//                             <div className="mt-0 mt-md-3 mt-lg-4">
//                                 <div className="card m-3 text-center">
//                                     <img src="webdads/images/logo-design/iritube-logo-n.png" alt="iritube-logo-n" loading="lazy" className="img-fluid" />
//                                 </div>
//                             </div>

//                             {/* <div className='mt-0 mt-md-3 mt-lg-4'>
//                                 <div className="card m-3 text-center">
//                                 <img src="webdads/images/logo-design/arc-man-logo.png" alt="arc-man-logo" loading='lazy' className='img-fluid' />
//                                 </div>
//                             </div> */}

//                             <div>
//                                 <div className="card m-3 text-center">
//                                     <img src="webdads/images/logo-design/best.png" alt="best" loading="lazy" className="img-fluid" />
//                                 </div>
//                             </div>

//                             <div className="mt-0 mt-md-3 mt-lg-4">
//                                 <div className="card m-3 text-center">
//                                     <img src="webdads/images/logo-design/best-dps.png" alt="best-dps" loading="lazy" className="img-fluid" />
//                                 </div>
//                             </div>

//                             <div>
//                                 <div className="card m-3 text-center">
//                                     <img src="webdads/images/logo-design/corengg-serve-engineering.png" alt="corengg-serve-engineering" loading="lazy" className="img-fluid" />
//                                 </div>
//                             </div>

//                             {/* <div className='mt-0 mt-md-3 mt-lg-4'>
//                                 <div className="card m-3 text-center">
//                                 <img src="webdads/images/logo-design/iritube-logo-n.png" alt="iritube-logo-n" loading='lazy' className='img-fluid' />
//                                 </div>
//                             </div> */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Logodesignslider;

import React from 'react';
// MUI Components
import { Box, Typography, Card, CardMedia, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function Logodesignslider() {
    return (
        <Box component="section" sx={{ py: 5, backgroundColor: '#f9f9f9' }}>
            <Box textAlign="center" mb={3}>
                <Typography variant="h4" fontWeight="bold">
                    Our Works
                </Typography>
            </Box>

            <Box position="relative" px={{ xs: 2, md: 6 }}>
                {/* Custom Navigation Buttons */}

                <Swiper
                    loop
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    speed={600}
                    navigation={{ nextEl: '.next', prevEl: '.prev' }}
                    breakpoints={{
                        1200: { slidesPerView: 5, spaceBetween: 30 },
                        992: { slidesPerView: 4, spaceBetween: 25 },
                        768: { slidesPerView: 3, spaceBetween: 20 },
                        576: { slidesPerView: 2, spaceBetween: 15 },
                        0: { slidesPerView: 1, spaceBetween: 10 }
                    }}
                    modules={[Autoplay, Navigation]}
                >
                    {['arc-man-logo.png', 'best.png', 'best-dps.png', 'corengg-serve-engineering.png', 'iritube-logo-n.png'].map((img, index) => (
                        <SwiperSlide key={index}>
                            <Card
                                sx={{
                                    m: 1,
                                    // boxShadow: 3,
                                    borderRadius: 3,
                                    p: 2,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: 140
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={`webdads/images/logo-design/${img}`}
                                    alt={img}
                                    sx={{
                                        maxHeight: 120,
                                        maxWidth: '100%',
                                        objectFit: 'contain'
                                    }}
                                />
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Box>
    );
}

export default Logodesignslider;
