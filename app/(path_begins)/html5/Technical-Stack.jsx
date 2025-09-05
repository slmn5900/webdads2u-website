// 'use client';
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';

// function Technicalstack() {
//   return (
//     <section className="technicalstack-main">
//       <div className="container">
//         <div className="row justify-content-center text-center technicalstack">
//           <div className="col-sm-12 col-md-12 col-lg-10">
//             <h4>Technical Stack</h4>
//             <p>
//               We can use different technologies to develop a single application
//               or only one technology can be used, depending on the situation.
//               Our technical proficiency is listed below, and we are the most
//               seasoned web design firm in Chennai.
//             </p>
//           </div>
//         </div>

//         <div className="row justify-content-center technicalstack-slider">
//           <div className="col-sm-12 col-md-12 col-lg-10 justify-content-center">
//             <div className="overlay"></div>

//             {/* Swiper Slider */}
//             <Swiper
//               modules={[Autoplay, Navigation]}
//               spaceBetween={20}
//               slidesPerView={5}
//               navigation
//               autoplay={{ delay: 1000, disableOnInteraction: false }}
//               loop={true}
//               breakpoints={{
//                 1024: { slidesPerView: 3, slidesPerGroup: 3 },
//                 600: { slidesPerView: 3, slidesPerGroup: 2 },
//                 480: { slidesPerView: 1, slidesPerGroup: 1 },
//               }}
//               className="responsive-technicalstack-slider"
//             >
//               {/* Slides */}
//               {[
//                 'big-html.png',
//                 'css.png',
//                 'js.png',
//                 'bootstrap.png',
//                 'php.png',
//                 'big-html.png',
//                 'css.png',
//                 'js.png',
//                 'bootstrap.png',
//                 'php.png',
//               ].map((img, idx) => (
//                 <SwiperSlide key={idx}>
//                   <img
//                     src={`/webdads/images/HTML5/${img}`}
//                     alt={img.replace('.png', '')}
//                     loading="lazy"
//                     className="img-fluid"
//                   />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Technicalstack;

'use client';
import React from 'react';
import { Container, Grid2, Typography, Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

function Technicalstack() {
    const logos = ['big-html.png', 'css.png', 'js.png', 'bootstrap.png', 'php.png', 'big-html.png', 'css.png', 'js.png', 'bootstrap.png', 'php.png'];

    return (
        <Box component="section" className="technicalstack-main" py={8}>
            <Container>
                {/* Heading */}
                <Grid2 container justifyContent="center" textAlign="center" mb={4}>
                    <Grid2 size={{ xs: 12, md: 10 }}>
                        <Typography variant="h4" gutterBottom>
                            Technical Stack
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            We can use different technologies to develop a single application or only one technology can be used, depending on the situation. Our technical proficiency is listed below, and we are the most seasoned web design firm in
                            Chennai.
                        </Typography>
                    </Grid2>
                </Grid2>

                {/* Swiper Slider */}
                <Grid2 container justifyContent="center">
                    <Grid2 size={{ xs: 12, md: 10 }}>
                        <Box sx={{ position: 'relative' }}>
                            <Swiper
                                modules={[Autoplay]}
                                spaceBetween={20}
                                slidesPerView={5}
                                autoplay={{ delay: 1500, disableOnInteraction: false }}
                                loop={true}
                                breakpoints={{
                                    1200: { slidesPerView: 5 },
                                    1024: { slidesPerView: 3 },
                                    600: { slidesPerView: 3 },
                                    480: { slidesPerView: 1 },
                                    320: { slidesPerView: 3 },
                                }}
                            >
                                {logos.map((img, idx) => (
                                    <SwiperSlide key={idx}>
                                        <Box
                                            component="img"
                                            src={`/webdads/images/HTML5/${img}`}
                                            alt={img.replace('.png', '')}
                                            loading="lazy"
                                            sx={{
                                                maxHeight: 50,
                                                objectFit: 'contain',
                                                mx: 'auto'
                                            }}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Box>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
}

export default Technicalstack;
