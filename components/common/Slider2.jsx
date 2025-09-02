// import React, { useEffect } from 'react';
// import $ from 'jquery';
// import 'slick-carousel'; // Ensure you've installed slick-carousel
// import 'slick-carousel/slick/slick.css'; // Add slick styles
// import '../../style/slider/slider.scss';

// function Slider2() {
//     useEffect(() => {
//         $('.responsive').slick({
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
//                         slidesToScroll: 3
//                     }
//                 },
//                 {
//                     breakpoint: 600,
//                     settings: {
//                         slidesToShow: 3,
//                         slidesToScroll: 2
//                     }
//                 },
//                 {
//                     breakpoint: 480,
//                     settings: {
//                         slidesToShow: 3,
//                         slidesToScroll: 1
//                     }
//                 }
//             ]
//         });

//         return () => {
//             $('.responsive')?.slick('unslick');
//         };
//     }, []);

//     return (
//         <section>
//             <div className="container">
//                 <div className="row android-app-development-slider">
//                     <div className="col-xs-12 col-md-12 align-self-center">
//                         <div className="overlay"></div>
//                         <div className="slider responsive">
//                             {[
//                                 'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_200,h_200,dpr_1.5/f_auto,q_auto/v1701075002/sales-force-crm_2533e26d4/sales-force-crm_2533e26d4.png?_i=AA',
//                                 'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_200,h_200,dpr_1.5/f_auto,q_auto/v1701074999/Vtiger-crm_2534828f8/Vtiger-crm_2534828f8.png?_i=AA',
//                                 'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_200,h_200,dpr_1.5/f_auto,q_auto/v1701074995/Suitecrm_2535f903b/Suitecrm_2535f903b.png?_i=AA',
//                                 'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_200,h_200,dpr_1.5/f_auto,q_auto/v1701074991/sugarcrm_2536c5622/sugarcrm_2536c5622.png?_i=AA',
//                                 'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_200,h_200,dpr_1.5/f_auto,q_auto/v1701074987/Zoho-crm_253703856/Zoho-crm_253703856.png?_i=AA',
//                                 'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_200,h_200,dpr_1.5/f_auto,q_auto/v1701074983/joforcecrm_2538d1685/joforcecrm_2538d1685.png?_i=AA',
//                                 'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_200,h_200,dpr_1.5/f_auto,q_auto/v1701074980/orangecrm_25409ea08/orangecrm_25409ea08.png?_i=AA'
//                             ].map((img, index) => (
//                                 <div key={index}>
//                                     <img src={img} alt={`slider${index + 1}`} />
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Slider2;
// ===================
// ===================
// ===================
// ===================
// ===================
// ===================
// ===================
// ===================
// ===================
<<<<<<< HEAD
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import '../../style/slider/slider.scss'; // Your custom styles if needed

const Slider2 = () => {
=======
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import '../../style/slider/slider.scss'; // Your custom styles if needed

// const Slider2 = () => {
//     const images = [
//         'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_200,h_200,dpr_1.5/f_auto,q_auto/v1701075002/sales-force-crm_2533e26d4/sales-force-crm_2533e26d4.png?_i=AA',
//         'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_200,h_200,dpr_1.5/f_auto,q_auto/v1701074999/Vtiger-crm_2534828f8/Vtiger-crm_2534828f8.png?_i=AA',
//         'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_200,h_200,dpr_1.5/f_auto,q_auto/v1701074995/Suitecrm_2535f903b/Suitecrm_2535f903b.png?_i=AA',
//         'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_200,h_200,dpr_1.5/f_auto,q_auto/v1701074991/sugarcrm_2536c5622/sugarcrm_2536c5622.png?_i=AA',
//         'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_200,h_200,dpr_1.5/f_auto,q_auto/v1701074987/Zoho-crm_253703856/Zoho-crm_253703856.png?_i=AA',
//         'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_200,h_200,dpr_1.5/f_auto,q_auto/v1701074983/joforcecrm_2538d1685/joforcecrm_2538d1685.png?_i=AA',
//         'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_200,h_200,dpr_1.5/f_auto,q_auto/v1701074980/orangecrm_25409ea08/orangecrm_25409ea08.png?_i=AA'
//     ];

//     return (
//         <section>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-xs-12 col-md-12 align-self-center">
//                         <div className="overlay"></div>
//                         <Swiper
//                             modules={[Autoplay]}
//                             spaceBetween={20}
//                             slidesPerView={5}
//                             autoplay={{ delay: 1000, disableOnInteraction: false }}
//                             loop={true}
//                             breakpoints={{
//                                 1024: { slidesPerView: 5, slidesPerGroup: 1 },
//                                 600: { slidesPerView: 3, slidesPerGroup: 1 },
//                                 480: { slidesPerView: 2, slidesPerGroup: 1 },
//                                 0: { slidesPerView: 1, slidesPerGroup: 1 },
//                             }}
//                         >
//                             {images.map((img, index) => (
//                                 <SwiperSlide key={index}>
//                                     <img src={img} alt={`slider${index + 1}`} style={{width:"200px",height:"200px"}} />
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Slider2;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Box, Container } from '@mui/material';
import 'swiper/css';
import { useContext } from 'react';
import { MenuContext } from '../../layout/context/menucontext';

const Slider2 = ({ image }) => {
    console.log(image, 'image');
>>>>>>> a0d19cc (Initial commit)
    const images = [
        'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_200,h_200,dpr_1.5/f_auto,q_auto/v1701075002/sales-force-crm_2533e26d4/sales-force-crm_2533e26d4.png?_i=AA',
        'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_200,h_200,dpr_1.5/f_auto,q_auto/v1701074999/Vtiger-crm_2534828f8/Vtiger-crm_2534828f8.png?_i=AA',
        'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_200,h_200,dpr_1.5/f_auto,q_auto/v1701074995/Suitecrm_2535f903b/Suitecrm_2535f903b.png?_i=AA',
        'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_200,h_200,dpr_1.5/f_auto,q_auto/v1701074991/sugarcrm_2536c5622/sugarcrm_2536c5622.png?_i=AA',
        'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_200,h_200,dpr_1.5/f_auto,q_auto/v1701074987/Zoho-crm_253703856/Zoho-crm_253703856.png?_i=AA',
        'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_200,h_200,dpr_1.5/f_auto,q_auto/v1701074983/joforcecrm_2538d1685/joforcecrm_2538d1685.png?_i=AA',
        'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_200,h_200,dpr_1.5/f_auto,q_auto/v1701074980/orangecrm_25409ea08/orangecrm_25409ea08.png?_i=AA'
    ];
<<<<<<< HEAD

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-12 align-self-center">
                        <div className="overlay"></div>
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={20}
                            slidesPerView={5}
                            autoplay={{ delay: 1000, disableOnInteraction: false }}
                            loop={true}
                            breakpoints={{
                                1024: { slidesPerView: 5, slidesPerGroup: 1 },
                                600: { slidesPerView: 3, slidesPerGroup: 1 },
                                480: { slidesPerView: 2, slidesPerGroup: 1 },
                                0: { slidesPerView: 1, slidesPerGroup: 1 },
                            }}
                        >
                            {images.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <img src={img} alt={`slider${index + 1}`} style={{width:"200px",height:"200px"}} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
=======
    //    const {pagedata} = useContext(MenuContext);
    //    const images = pagedata?.slider2_section?.img||[];

    return (
        <Box component="section" sx={{ py: 4 }}>
            <Container>
                <Box sx={{ position: 'relative' }}>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={5}
                        autoplay={{ delay: 1000, disableOnInteraction: false }}
                        loop
                        breakpoints={{
                            1024: { slidesPerView: 5, slidesPerGroup: 1 },
                            600: { slidesPerView: 3, slidesPerGroup: 1 },
                            480: { slidesPerView: 2, slidesPerGroup: 1 },
                            0: { slidesPerView: 1, slidesPerGroup: 1 }
                        }}
                    >
                        {image?.map((img, index) => (
                            <SwiperSlide key={index}>
                                <Box
                                    component="img"
                                    src={img}
                                    alt={`slider${index + 1}`}
                                    sx={{
                                        width: 150,
                                        height: 150,
                                        objectFit: 'contain',
                                        mx: 'auto',
                                        display: 'block'
                                    }}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            </Container>
        </Box>
>>>>>>> a0d19cc (Initial commit)
    );
};

export default Slider2;
