// // import React, { useEffect } from 'react';
// // import $ from 'jquery';
// // import 'slick-carousel/slick/slick.css';
// // import 'slick-carousel/slick/slick-theme.css';
// // import 'slick-carousel';

// // function WordPressWebsiteworks() {
// //     useEffect(() => {
// //         // Initialize the Slick slider after the component mounts
// //         $('.wordpress').slick({
// //             dots: false,
// //             infinite: true,
// //             speed: 300,
// //             slidesToShow: 2,
// //             slidesToScroll: 1,
// //             autoplay: true,
// //             autoplaySpeed: 2000,
// //             responsive: [
// //                 {
// //                     breakpoint: 1024,
// //                     settings: {
// //                         slidesToShow: 2,
// //                         slidesToScroll: 3,
// //                         infinite: true,
// //                         dots: false,
// //                     }
// //                 },
// //                 {
// //                     breakpoint: 600,
// //                     settings: {
// //                         slidesToShow: 1,
// //                         slidesToScroll: 2,
// //                     }
// //                 },
// //                 {
// //                     breakpoint: 480,
// //                     settings: {
// //                         slidesToShow: 1,
// //                         slidesToScroll: 1,
// //                     }
// //                 }
// //             ]
// //         });

// //         // Cleanup on unmount to prevent multiple initializations
// //         return () => {
// //             $('.wordpress').slick('unslick');
// //         };
// //     }, []); // Empty dependency array ensures the effect runs only once after component mounts

// //     return (
// //         <section className="wordpresswebsiteworks-main">
// //             <div className="container-fluid">
// //                 <div className="row">
// //                   <div className="col-sm-12 col-lg-12 text-center wordpresswebsiteworks-header"><h1>Our WordPress Website works</h1></div>
// //                     <div className="col-md-12 col-lg-12">
// //                         <div className="overlay"></div>
// //                         {/* Slider */}
// //                         <div className="slider wordpress">
// //                             <div>
// //                                 <img src="webdads/images/wordpress-development/Adsfit.png" alt="Adsfit" className="img-fluid" loading="lazy" />
// //                             </div>
// //                             <div>
// //                                 <img src="webdads/images/wordpress-development/arcmen.png" alt="arcmen" className="img-fluid" loading="lazy" />
// //                             </div>
// //                             <div>
// //                                 <img src="webdads/images/wordpress-development/Team-Water_22100b5f9e.png" alt="Team-Water" className="img-fluid" loading="lazy" />
// //                             </div>
// //                             <div>
// //                                 <img src="webdads/images/wordpress-development/Adsfit.png" alt="Adsfit" className="img-fluid" loading="lazy" />
// //                             </div>
// //                             <div>
// //                                 <img src="webdads/images/wordpress-development/arcmen.png" alt="arcmen" className="img-fluid" loading="lazy" />
// //                             </div>
// //                             <div>
// //                                 <img src="webdads/images/wordpress-development/Team-Water_22100b5f9e.png" alt="Team-Water" className="img-fluid" loading="lazy" />
// //                             </div>
// //                         </div>

// //                         {/* Control arrows */}
// //                         {/* Uncomment if you want prev/next buttons */}
// //                         {/*
// //                         <div className="prev">
// //                             <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
// //                         </div>
// //                         <div className="next">
// //                             <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
// //                         </div>
// //                         */}
// //                     </div>
// //                     <div className="col-sm-12 col-lg-12 text-center wordpresswebsiteworks-btn">
// //                       <a href="/wordpress"><button>View More</button></a>
// //                     </div>
// //                 </div>
// //             </div>
// //         </section>
// //     );
// // }

// // export default WordPressWebsiteworks;

// 'use client';
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// function WordPressWebsiteworks() {
//     const images = [
//         {
//             src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757332046/webdads2u/wordpress-development/racepro-website.png',
//             alt: 'racepro-website'
//         },
//         {
//             src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757332036/webdads2u/wordpress-development/team-water-website.png',
//             alt: 'team-water-website'
//         },

//         {
//             src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757332018/webdads2u/wordpress-development/adsfit-website.png',
//             alt: 'adsfit-website'
//         },
//         {
//             src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757332009/webdads2u/wordpress-development/securitaz-website.png',
//             alt: 'securitaz-website'
//         },
//         {
//             src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757332000/webdads2u/wordpress-development/arcmen-website.png',
//             alt: 'arcmen-website'
//         }
//     ];

//     return (
//         <section className="wordpresswebsiteworks-main">
//             <div className="container-fluid">
//                 <div className="row">
//                     <div className="col-sm-12 col-lg-12 text-center wordpresswebsiteworks-header">
//                         <h1>Our WordPress Website Works</h1>
//                     </div>
//                     <div className="col-md-12 col-lg-12">
//                         {/* Swiper Slider */}
//                         <Swiper
//                             modules={[Autoplay]}
//                             spaceBetween={20}
//                             slidesPerView={2}
//                             loop={true}
//                             autoplay={{ delay: 2000, disableOnInteraction: false }}
//                             // pagination={{ clickable: true }}
//                             // navigation={true}
//                             breakpoints={{
//                                 1024: { slidesPerView: 2 },
//                                 600: { slidesPerView: 1 },
//                                 480: { slidesPerView: 1 }
//                             }}
//                         >
//                             {images.map((img, index) => (
//                                 <SwiperSlide key={index}>
//                                     <img src={img.src} alt={img.alt} className="img-fluid rounded shadow" loading="lazy" />
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>
//                     </div>

//                     <div className="col-sm-12 col-lg-12 text-center wordpresswebsiteworks-btn mt-4">
//                         <a href="/wordpress">
//                             <button className="btn btn-primary">View More</button>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default WordPressWebsiteworks;
'use client';

import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function WordPressWebsiteworks() {
    const images = [
        {
            src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757332046/webdads2u/wordpress-development/racepro-website.png',
            alt: 'racepro-website'
        },
        {
            src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757332036/webdads2u/wordpress-development/team-water-website.png',
            alt: 'team-water-website'
        },
        {
            src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757332018/webdads2u/wordpress-development/adsfit-website.png',
            alt: 'adsfit-website'
        },
        {
            src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757332009/webdads2u/wordpress-development/securitaz-website.png',
            alt: 'securitaz-website'
        },
        {
            src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757332000/webdads2u/wordpress-development/arcmen-website.png',
            alt: 'arcmen-website'
        }
    ];

    return (
        <Box sx={{ py: 8 }}>
            <Container maxWidth="lg">
                {/* Header */}
                <Typography variant="h4" fontWeight="bold" align="center" gutterBottom sx={{ mb: 4 }}>
                    Our WordPress Website Works
                </Typography>

                {/* Swiper Slider */}
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={2}
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    breakpoints={{
                        1024: { slidesPerView: 2 },
                        600: { slidesPerView: 1 },
                        480: { slidesPerView: 1 }
                    }}
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <Box
                                component="img"
                                src={img.src}
                                alt={img.alt}
                                loading="lazy"
                                sx={{
                                    width: '100%',
                                    borderRadius: 2,
                                    // boxShadow: 3,
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)'
                                    }
                                }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Button */}
                <Box textAlign="center" sx={{ mt: 4 }}>
                    <Button className="buttons" variant="contained" color="primary" href="/wordpress" sx={{ borderRadius: '30px', px: 4 }}>
                        View More
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
