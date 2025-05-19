// // // // // import React, { useEffect } from 'react';
// // // // // import $ from 'jquery';
// // // // // import 'slick-carousel'; // Ensure you've installed slick-carousel
// // // // // import 'slick-carousel/slick/slick.css'; // Add slick styles
// // // // // import '../../../style/slider/slider.scss';
// // // // // import { Col, Container, Row } from 'react-bootstrap';

// // // // // function WebDesingWhyChooseUsSlider() {
// // // // //     useEffect(() => {
// // // // //         $('.responsive')?.slick({
// // // // //             // dots: true,
// // // // //             prevArrow: $('.prev'),
// // // // //             nextArrow: $('.next'),
// // // // //             infinite: true,
// // // // //             speed: 300,
// // // // //             slidesToShow: 5,
// // // // //             slidesToScroll: 1,
// // // // //             autoplay: true,
// // // // //             autoplaySpeed: 1000,
// // // // //             responsive: [
// // // // //                 {
// // // // //                     breakpoint: 1024,
// // // // //                     settings: {
// // // // //                         slidesToShow: 3,
// // // // //                         slidesToScroll: 3
// // // // //                     }
// // // // //                 },
// // // // //                 {
// // // // //                     breakpoint: 600,
// // // // //                     settings: {
// // // // //                         slidesToShow: 3,
// // // // //                         slidesToScroll: 2
// // // // //                     }
// // // // //                 },
// // // // //                 {
// // // // //                     breakpoint: 480,
// // // // //                     settings: {
// // // // //                         slidesToShow: 3,
// // // // //                         slidesToScroll: 1
// // // // //                     }
// // // // //                 }
// // // // //             ]
// // // // //         });

// // // // //         return () => {
// // // // //             $('.responsive')?.slick('unslick');
// // // // //         };
// // // // //     }, []);

// // // // //     return (
// // // // //         <section>
// // // // //             <section className="slider-choose">
// // // // //                 <Container>
// // // // //                     <Row>
// // // // //                         <Col md={4}>
// // // // //                             <div className="">
// // // // //                                 <h3>WHY TO CHOOSE</h3>
// // // // //                                 <h2>Save your time with a lot of features</h2>
// // // // //                             </div>
// // // // //                         </Col>
// // // // //                         <Col md={8}>
// // // // //                             {/* <div className="overlay"></div> */}
// // // // //                             <div className="slider responsive">
// // // // //                                 {['imci-life-services.png', 'integra.png', 'matchbox-mansion.png', 'lalit-food-machines.png', 'prodent.png', 'pridermx.png', 'teamwater-logo.png', 'ssr-academy.png'].map((img, index) => (
// // // // //                                     <div key={index}>
// // // // //                                         <img src={`webdads/images/android-app-development/${img}`} alt={`slider${index + 1}`} />
// // // // //                                     </div>
// // // // //                                 ))}
// // // // //                             </div>
// // // // //                         </Col>
// // // // //                     </Row>
// // // // //                 </Container>
// // // // //             </section>
// // // // //         </section>
// // // // //     );
// // // // // }

// // // // // export default WebDesingWhyChooseUsSlider;
// // // // // =================================================================================================================
// // // // // =================================================================================================================
// // // // // =================================================================================================================
// // // // // =================================================================================================================
// // // // // =================================================================================================================
// // // // // =================================================================================================================
// // // // // =================================================================================================================
// // // // // =================================================================================================================
// // // // // =================================================================================================================
// // // // // =================================================================================================================
// // // // // =================================================================================================================
// // // // // =================================================================================================================
// // // // // =================================================================================================================
// // // // // =================================================================================================================
// // // // // =================================================================================================================
// // // // // =================================================================================================================
// // // // // =================================================================================================================
// // // // // =================================================================================================================
// // // // // =================================================================================================================
// // // // // =================================================================================================================
// // // // // import React, { useEffect } from 'react';
// // // // // import $ from 'jquery';
// // // // // import 'slick-carousel'; // Ensure you've installed slick-carousel
// // // // // import 'slick-carousel/slick/slick.css'; // Add slick styles
// // // // // import '../../../style/slider/slider.scss';
// // // // // import { Col, Container, Row } from 'react-bootstrap';

// // // // // function WebDesingWhyChooseUsSlider() {
// // // // //     // useEffect(() => {
// // // // //     //     const sliderElement = $('.responsive');
// // // // //     //     if (sliderElement.length) {
// // // // //     //         sliderElement?.slick({
// // // // //     //             prevArrow: $('.prev'),
// // // // //     //             nextArrow: $('.next'),
// // // // //     //             infinite: true,
// // // // //     //             speed: 300,
// // // // //     //             slidesToShow: 5,
// // // // //     //             slidesToScroll: 1,
// // // // //     //             autoplay: true,
// // // // //     //             autoplaySpeed: 1000,
// // // // //     //             responsive: [
// // // // //     //                 {
// // // // //     //                     breakpoint: 1024,
// // // // //     //                     settings: {
// // // // //     //                         slidesToShow: 3,
// // // // //     //                         slidesToScroll: 3
// // // // //     //                     }
// // // // //     //                 },
// // // // //     //                 {
// // // // //     //                     breakpoint: 600,
// // // // //     //                     settings: {
// // // // //     //                         slidesToShow: 3,
// // // // //     //                         slidesToScroll: 2
// // // // //     //                     }
// // // // //     //                 },
// // // // //     //                 {
// // // // //     //                     breakpoint: 480,
// // // // //     //                     settings: {
// // // // //     //                         slidesToShow: 3,
// // // // //     //                         slidesToScroll: 1
// // // // //     //                     }
// // // // //     //                 }
// // // // //     //             ]
// // // // //     //         });
// // // // //     //     }

// // // // //     //     return () => {
// // // // //     //         if (sliderElement.hasClass('slick-initialized')) {
// // // // //     //             sliderElement.slick('unslick');
// // // // //     //         }
// // // // //     //     };
// // // // //     // }, []);

// // // // //     useEffect(() => {
// // // // //         const sliderElement = $('.responsive');
// // // // //         console.log(sliderElement); // Check if the element is found
// // // // //         if (sliderElement.length) {
// // // // //             sliderElement.slick({
// // // // //                 prevArrow: $('.prev'),
// // // // //                 nextArrow: $('.next'),
// // // // //                 infinite: true,
// // // // //                 speed: 300,
// // // // //                 slidesToShow: 5,
// // // // //                 slidesToScroll: 1,
// // // // //                 autoplay: true,
// // // // //                 autoplaySpeed: 1000,
// // // // //                 responsive: [
// // // // //                     {
// // // // //                         breakpoint: 1024,
// // // // //                         settings: {
// // // // //                             slidesToShow: 3,
// // // // //                             slidesToScroll: 3
// // // // //                         }
// // // // //                     },
// // // // //                     {
// // // // //                         breakpoint: 600,
// // // // //                         settings: {
// // // // //                             slidesToShow: 3,
// // // // //                             slidesToScroll: 2
// // // // //                         }
// // // // //                     },
// // // // //                     {
// // // // //                         breakpoint: 480,
// // // // //                         settings: {
// // // // //                             slidesToShow: 3,
// // // // //                             slidesToScroll: 1
// // // // //                         }
// // // // //                     }
// // // // //                 ]
// // // // //             });
// // // // //         }

// // // // //         return () => {
// // // // //             if (sliderElement.hasClass('slick-initialized')) {
// // // // //                 sliderElement.slick('unslick');
// // // // //             }
// // // // //         };
// // // // //     }, []);

// // // // //     return (
// // // // //         <section>
// // // // //             <section className="slider-choose">
// // // // //                 <Container>
// // // // //                     <Row>
// // // // //                         <Col md={4}>
// // // // //                             <div className="">
// // // // //                                 <h3>WHY TO CHOOSE</h3>
// // // // //                                 <h2>Save your time with a lot of features</h2>
// // // // //                             </div>
// // // // //                         </Col>
// // // // //                         <Col md={8}>
// // // // //                             <div className="slider responsive">
// // // // //                                 {['imci-life-services.png', 'integra.png', 'matchbox-mansion.png', 'lalit-food-machines.png', 'prodent.png', 'pridermx.png', 'teamwater-logo.png', 'ssr-academy.png'].map((img, index) => (
// // // // //                                     <div key={index}>
// // // // //                                         <img src={`webdads/images/android-app-development/${img}`} alt={`slider${index + 1}`} />
// // // // //                                     </div>
// // // // //                                 ))}
// // // // //                             </div>
// // // // //                         </Col>
// // // // //                     </Row>
// // // // //                 </Container>
// // // // //             </section>
// // // // //         </section>
// // // // //     );
// // // // // }

// // // // // export default WebDesingWhyChooseUsSlider;
// // // // // ==========================================================================================================================
// // // // // ==========================================================================================================================
// // // // // ==========================================================================================================================
// // // // // ==========================================================================================================================
// // // // // ==========================================================================================================================
// // // // // ==========================================================================================================================
// // // // // ==========================================================================================================================
// // // // // ==========================================================================================================================
// // // // // ==========================================================================================================================
// // // // // ==========================================================================================================================
// // // // // ==========================================================================================================================
// // // import React, { useEffect } from 'react';
// // // import $ from 'jquery';
// // // import 'slick-carousel/slick/slick.css'; // Add slick styles
// // // import 'slick-carousel/slick/slick-theme.css'; // Add slick styles
// // // import '../../../style/slider/slider.scss';
// // // import { Col, Container, Row } from 'react-bootstrap';

// // // function WebDesingWhyChooseUsSlider() {
// // //     useEffect(() => {
// // //         const sliderElement = $('div.slider.responsive');
// // //         console.log(sliderElement); // Check the value of sliderElement

// // //         if (sliderElement.hasClass('slick-initialized')) {
// // //             sliderElement.slick('unslick');
// // //         }

// // //         if (sliderElement.length) {
// // //             sliderElement.slick({
// // //                 prevArrow: $('.prev'),
// // //                 nextArrow: $('.next'),
// // //                 infinite: true,
// // //                 speed: 300,
// // //                 slidesToShow: 5,
// // //                 slidesToScroll: 1,
// // //                 autoplay: true,
// // //                 autoplaySpeed: 1000,
// // //                 responsive: [
// // //                     {
// // //                         breakpoint: 1024,
// // //                         settings: {
// // //                             slidesToShow: 3,
// // //                             slidesToScroll: 2
// // //                         }
// // //                     },
// // //                     {
// // //                         breakpoint: 600,
// // //                         settings: {
// // //                             slidesToShow: 3,
// // //                             slidesToScroll: 2
// // //                         }
// // //                     },
// // //                     {
// // //                         breakpoint: 480,
// // //                         settings: {
// // //                             slidesToShow: 3,
// // //                             slidesToScroll: 1
// // //                         }
// // //                     }
// // //                 ]
// // //             });
// // //         }

// // //         return () => {
// // //             if (sliderElement.hasClass('slick-initialized')) {
// // //                 sliderElement.slick('unslick');
// // //             }
// // //         };
// // //     }, []);

// // //     return (
// // //         <section>
// // //             <section className="slider-choose">
// // //                 <Container>
// // //                     <Row>
// // //                         <Col md={4}>
// // //                             <div className="">
// // //                                 <h3>WHY TO CHOOSE</h3>
// // //                                 <h2>Save your time with a lot of features</h2>
// // //                             </div>
// // //                         </Col>
// // //                         <Col md={8}>
// // //                             <div className="slider responsive">
// // //                                 {['imci-life-services.png', 'integra.png', 'lalit-food-machines.png', 'pridermx.png', 'prodent.png', 'ssr-academy.png', 'teamwater-logo.png', 'matchbox-mansion.png'].map((img, index) => (
// // //                                     <div key={index}>
// // //                                         <img src={`webdads/images/android-app-development/${img}`} alt={`slider${index + 1}`} />
// // //                                     </div>
// // //                                 ))}
// // //                             </div>
// // //                         </Col>
// // //                     </Row>
// // //                 </Container>
// // //             </section>
// // //         </section>
// // //     );
// // // }

// // // // export default WebDesingWhyChooseUsSlider;
// // // // =======================================================================================================
// // // // =======================================================================================================
// // // // =======================================================================================================
// // // // =======================================================================================================
// // // // =======================================================================================================
// // // // =======================================================================================================
// // // // =======================================================================================================
// // // // =======================================================================================================
// // // // =======================================================================================================
// // // 'use client';

// // // import React, { useEffect } from 'react';
// // // import 'slick-carousel/slick/slick.css';
// // // import 'slick-carousel/slick/slick-theme.css';

// // // function SliderImage() {
// // //     useEffect(() => {
// // //         if (typeof window !== 'undefined') {
// // //             const $ = require('jquery');
// // //             window.$ = window.jQuery = $;
// // //             require('slick-carousel');

// // //             const slider = $('.responsive');

// // //             if (slider.length > 0 && !slider.hasClass('slick-initialized')) {
// // //                 slider.slick({
// // //                     prevArrow: $('.prev'),
// // //                     nextArrow: $('.next'),
// // //                     infinite: true,
// // //                     slidesToShow: 4,
// // //                     slidesToScroll: 1,
// // //                     autoplay: true,
// // //                     autoplaySpeed: 2000,
// // //                     responsive: [
// // //                         {
// // //                             breakpoint: 1024,
// // //                             settings: {
// // //                                 slidesToShow: 2,
// // //                                 slidesToScroll: 1
// // //                             }
// // //                         },
// // //                         {
// // //                             breakpoint: 600,
// // //                             settings: {
// // //                                 slidesToShow: 1,
// // //                                 slidesToScroll: 1
// // //                             }
// // //                         }
// // //                     ]
// // //                 });
// // //             }
// // //         }
// // //     }, []);

// // //     return (
// // //         <div className="slider responsive">
// // //             {[1, 2, 3, 4, 5].map((num) => (
// // //                 <div key={num}>
// // //                     <img src={`/images/sample${num}.jpg`} alt={`Slide ${num}`} />
// // //                 </div>
// // //             ))}
// // //         </div>
// // //     );
// // // }

// // // export default SliderImage;
// // // =============
// // // =============
// // // =============
// // // =============
// // // =============
// // // =============
// // // =============
// // // =============
// // // =============
// // // =============
// // 'use client';

// // import React, { useEffect } from 'react';
// // import $ from 'jquery';
// // import 'slick-carousel/slick/slick.css';
// // import 'slick-carousel/slick/slick-theme.css';
// // import '../../../style/slider/slider.scss';
// // import { Col, Container, Row } from 'react-bootstrap';

// // function WebDesingWhyChooseUsSlider() {
// //     useEffect(() => {
// //         if (typeof window !== 'undefined') {
// //             window.$ = window.jQuery = $;
// //             require('slick-carousel');

// //             const sliderElement = $('div.slider.responsive');
// //             console.log('Slider element:', sliderElement);

// //             if (sliderElement.hasClass('slick-initialized')) {
// //                 sliderElement.slick('unslick');
// //             }

// //             if (sliderElement.length) {
// //                 sliderElement.slick({
// //                     prevArrow: $('.prev'),
// //                     nextArrow: $('.next'),
// //                     infinite: true,
// //                     speed: 300,
// //                     slidesToShow: 5,
// //                     slidesToScroll: 1,
// //                     autoplay: true,
// //                     autoplaySpeed: 1000,
// //                     responsive: [
// //                         {
// //                             breakpoint: 1024,
// //                             settings: {
// //                                 slidesToShow: 3,
// //                                 slidesToScroll: 2
// //                             }
// //                         },
// //                         {
// //                             breakpoint: 600,
// //                             settings: {
// //                                 slidesToShow: 3,
// //                                 slidesToScroll: 2
// //                             }
// //                         },
// //                         {
// //                             breakpoint: 480,
// //                             settings: {
// //                                 slidesToShow: 3,
// //                                 slidesToScroll: 1
// //                             }
// //                         }
// //                     ]
// //                 });
// //             }
// //         }

// //         return () => {
// //             const sliderElement = $('div.slider.responsive');
// //             if (sliderElement.hasClass('slick-initialized')) {
// //                 sliderElement.slick('unslick');
// //             }
// //         };
// //     }, []);

// //     return (
// //         <section className="slider-choose">
// //             <Container>
// //                 <Row>
// //                     <Col md={4}>
// //                         <div>
// //                             <h3>WHY TO CHOOSE</h3>
// //                             <h2>Save your time with a lot of features</h2>
// //                         </div>
// //                     </Col>
// //                     <Col md={8}>
// //                         <div className="slider responsive">
// //                             {[
// //                                 'imci-life-services.png',
// //                                 'integra.png',
// //                                 'lalit-food-machines.png',
// //                                 'pridermx.png',
// //                                 'prodent.png',
// //                                 'ssr-academy.png',
// //                                 'teamwater-logo.png',
// //                                 'matchbox-mansion.png'
// //                             ].map((img, index) => (
// //                                 <div key={index}>
// //                                     <img
// //                                         src={`/webdads/images/android-app-development/${img}`}
// //                                         alt={`slider${index + 1}`}
// //                                     />
// //                                 </div>
// //                             ))}
// //                         </div>
// //                     </Col>
// //                 </Row>
// //             </Container>
// //         </section>
// //     );
// // }

// // export default WebDesingWhyChooseUsSlider;
// // =======================================================================================
// // =======================================================================================
// // =======================================================================================
// // =======================================================================================
// // =======================================================================================
// // =======================================================================================
// // =======================================================================================
// // =======================================================================================
// // =======================================================================================
// 'use client';

// import React, { useEffect } from 'react';
// import $ from 'jquery';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import '../../../style/slider/slider.scss';
// import { Col, Container, Row } from 'react-bootstrap';

// const slideData = [
//     { imgUrl: 'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_100,h_100,dpr_1.5/f_auto,q_auto/v1708940518/Design-Quality_13773ceb23/Design-Quality_13773ceb23.png?_i=AA', alt: 'slider1', content: 'Design-Quality' },
//     { imgUrl: 'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_100,h_100,dpr_1.5/f_auto,q_auto/v1708940461/target/target.png?_i=AA', alt: 'slider2', content: 'Target' },
//     { imgUrl: 'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_100,h_100,dpr_1.5/f_auto,q_auto/v1708940509/Digitak-Stategy_137741a524/Digitak-Stategy_137741a524.png?_i=AA', alt: 'slider3', content: 'Digitak-Stategy' },
//     { imgUrl: 'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_100,h_100,dpr_1.5/f_auto,q_auto/v1708940473/Navigation_1377598b80/Navigation_1377598b80.png?_i=AA', alt: 'slider4', content: 'Navigation' },
//     { imgUrl: 'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_100,h_100,dpr_1.5/f_auto,q_auto/v1708940502/Responsiveness_137766e964/Responsiveness_137766e964.png?_i=AA', alt: 'slider5', content: 'Responsiveness' }
// ];

// function WebDesingWhyChooseUsSlider() {
//     // useEffect(() => {
//     //     if (typeof window !== 'undefined') {
//     //         window.$ = window.jQuery = $;
//     //         require('slick-carousel');

//     //         const sliderElement = $('div.slider.responsive');
//     //         console.log('Slider element:', sliderElement);

//     //         if (sliderElement.hasClass('slick-initialized')) {
//     //             sliderElement?.slick('unslick');
//     //         }

//     //         if (sliderElement.length) {
//     //             sliderElement?.slick({
//     //                 prevArrow: $('.prev'),
//     //                 nextArrow: $('.next'),
//     //                 infinite: true,
//     //                 speed: 300,
//     //                 slidesToShow: 5,
//     //                 slidesToScroll: 1,
//     //                 autoplay: true,
//     //                 autoplaySpeed: 1000,
//     //                 responsive: [
//     //                     {
//     //                         breakpoint: 1024,
//     //                         settings: {
//     //                             slidesToShow: 3,
//     //                             slidesToScroll: 2
//     //                         }
//     //                     },
//     //                     {
//     //                         breakpoint: 600,
//     //                         settings: {
//     //                             slidesToShow: 3,
//     //                             slidesToScroll: 2
//     //                         }
//     //                     },
//     //                     {
//     //                         breakpoint: 480,
//     //                         settings: {
//     //                             slidesToShow: 3,
//     //                             slidesToScroll: 1
//     //                         }
//     //                     }
//     //                 ]
//     //             });
//     //         }
//     //     }

//     //     return () => {
//     //         const sliderElement = $('div.slider.responsive');
//     //         if (sliderElement.hasClass('slick-initialized')) {
//     //             sliderElement.slick('unslick');
//     //         }
//     //     };
//     // }, []);
//     useEffect(() => {
//         if (typeof window !== 'undefined') {
//             window.$ = window.jQuery = $;
//             require('slick-carousel');

//             const sliderElement = $('div.slider.responsive');

//             if (sliderElement.length && typeof sliderElement[0].slick === 'function' && sliderElement.hasClass('slick-initialized')) {
//                 sliderElement.slick('unslick');
//             }

//             if (sliderElement.length && typeof sliderElement[0].slick === 'function') {
//                 sliderElement.slick({
//                     prevArrow: $('.prev'),
//                     nextArrow: $('.next'),
//                     infinite: true,
//                     speed: 300,
//                     slidesToShow: 5,
//                     slidesToScroll: 1,
//                     autoplay: true,
//                     autoplaySpeed: 1000,
//                     responsive: [
//                         {
//                             breakpoint: 1024,
//                             settings: {
//                                 slidesToShow: 3,
//                                 slidesToScroll: 2
//                             }
//                         },
//                         {
//                             breakpoint: 600,
//                             settings: {
//                                 slidesToShow: 3,
//                                 slidesToScroll: 2
//                             }
//                         },
//                         {
//                             breakpoint: 480,
//                             settings: {
//                                 slidesToShow: 3,
//                                 slidesToScroll: 1
//                             }
//                         }
//                     ]
//                 });
//             }
//         }

//         return () => {
//             const sliderElement = $('div.slider.responsive');
//             if (sliderElement.length && typeof sliderElement[0].slick === 'function' && sliderElement.hasClass('slick-initialized')) {
//                 sliderElement.slick('unslick');
//             }
//         };
//     }, []);

//     return (
//         <section className="slider-choose">
//             <Container>
//                 <Row>
//                     <Col md={4}>
//                         <div>
//                             <h3>WHY TO CHOOSE</h3>
//                             <h2>Save your time with a lot of features</h2>
//                         </div>
//                     </Col>
//                     <Col md={8}>
//                         <div className="slider responsive">
//                             {
//                                 slideData.map((val, index) => (
//                                     <div key={index} style={{ width: '264px' }}>
//                                         <div className="d-flex align-item-center justify-content-center flex-direction-column">
//                                             <img src={val.imgUrl} alt={`slider${index + 1}`} style={{ maxWidth: '100px' }} />
//                                             <div className="w-100 text-center mt-4" style={{ color: '#fff' }}>
//                                                 {val.content}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))
//                             }
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>
//         </section>
//     );
// }

// export default WebDesingWhyChooseUsSlider;
// =======================================================================================================
// =======================================================================================================
// =======================================================================================================
// =======================================================================================================
// =======================================================================================================
// =======================================================================================================
'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../../style/slider/slider.scss';
import { Col, Container, Row } from 'react-bootstrap';

const slideData = [
    {
        imgUrl: 'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_100,h_100,dpr_1.5/f_auto,q_auto/v1708940518/Design-Quality_13773ceb23/Design-Quality_13773ceb23.png?_i=AA',
        alt: 'slider1',
        content: 'Design-Quality'
    },
    {
        imgUrl: 'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_100,h_100,dpr_1.5/f_auto,q_auto/v1708940461/target/target.png?_i=AA',
        alt: 'slider2',
        content: 'Target'
    },
    {
        imgUrl: 'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_100,h_100,dpr_1.5/f_auto,q_auto/v1708940509/Digitak-Stategy_137741a524/Digitak-Stategy_137741a524.png?_i=AA',
        alt: 'slider3',
        content: 'Digital-Strategy'
    },
    {
        imgUrl: 'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_100,h_100,dpr_1.5/f_auto,q_auto/v1708940473/Navigation_1377598b80/Navigation_1377598b80.png?_i=AA',
        alt: 'slider4',
        content: 'Navigation'
    },
    {
        imgUrl: 'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_100,h_100,dpr_1.5/f_auto,q_auto/v1708940502/Responsiveness_137766e964/Responsiveness_137766e964.png?_i=AA',
        alt: 'slider5',
        content: 'Responsiveness'
    }
];

function WebDesingWhyChooseUsSlider() {
    return (
        <section className="slider-choose">
            <Container>
                <Row>
                    <Col md={4}>
                        <div>
                            <h3>WHY TO CHOOSE</h3>
                            <h2>Save your time with a lot of features</h2>
                        </div>
                    </Col>
                    <Col md={8}>
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={5}
                            navigation
                            autoplay={{ delay: 1500 }}
                            loop={true}
                            breakpoints={{
                                1024: { slidesPerView: 3 },
                                768: { slidesPerView: 2 },
                                480: { slidesPerView: 1 },
                            }}
                        >
                            {slideData.map((val, index) => (
                                <SwiperSlide key={index}>
                                    <div className="d-flex flex-column align-items-center justify-content-center" style={{ padding: '10px' }}>
                                        <img src={val.imgUrl} alt={val.alt} style={{ maxWidth: '100px' }} />
                                        <div className="text-center mt-3" style={{ color: '#fff' }}>
                                            {val.content}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default WebDesingWhyChooseUsSlider;
