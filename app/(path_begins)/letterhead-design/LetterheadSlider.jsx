// import React, { useEffect, useRef } from 'react';
// import $ from 'jquery';
// import 'slick-carousel'; // Ensure you've installed slick-carousel
<<<<<<< HEAD
// import 'slick-carousel/slick/slick.css'; 
=======
// import 'slick-carousel/slick/slick.css';
>>>>>>> 6010d3c (Add new features and updates)
// import "../../../style/slider/slider.scss";

// function LetterheadSlider() {
//     const sliderRef = useRef(null);

//     useEffect(() => {
<<<<<<< HEAD
       
=======

>>>>>>> 6010d3c (Add new features and updates)
//         if (sliderRef.current) {
//             $(sliderRef.current).slick({
//             // dots: true,
//             prevArrow: $('.prev'),
//             nextArrow: $('.next'),
//             infinite: true,
//             speed: 300,
//             slidesToShow: 4,
//             slidesToScroll: 4,
//             autoplay: true,
//             autoplaySpeed: 1000,
//             responsive: [
//                 {
//                   breakpoint: 1024,
//                   settings: {
//                     slidesToShow: 4,
//                     slidesToScroll: 4,
//                   }
//                 },
//                 {
//                   breakpoint: 600,
//                   settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 2
//                   }
//                 },
//                 {
//                   breakpoint: 480,
//                   settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 1
//                   }
//                 }]
//         });

//         return () => {
//             $('.responsive').slick('unslick');
//         };
//  } }, []);

//     return (
//         <section>
//         <div className="container">
//             <div className="row android-app-development-slider">
<<<<<<< HEAD
                
=======

>>>>>>> 6010d3c (Add new features and updates)
//                 <div className="col-xs-12 col-md-12 align-self-center">
//                     <div className="overlay"></div>
//                     <div className="slider responsive">
//                         {[
//                             "arcman-kitchen-interior-portfolio-letterhead.webp",
//                             "Audioscape.webp",
//                             "AYN-letter-head.webp",
//                             "Jk-onstruction.webp",
//                             "Juniya.webp",
//                             "letterhead-hero.png",
//                             "Raj-vision-electronics.webp",
//                             "sash-highspeed-networks-portfolio-letterhead.webp",
//                             "SKP-1.webp",
//                             "aarthi-homes-portfolio-letterhead.webp"
//                         ].map((img, index) => (
//                             <div key={index}>
//                                 <img src={`webdads/images/letterhead/${img}`} alt={`slider${index + 1}`} />
//                             </div>
//                         ))}
//                     </div>
//                     {/* Uncomment control arrows if needed
//                     <div className="prev">
//                         <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
//                     </div>
//                     <div className="next">
//                         <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
//                     </div>
//                     */}
//                 </div>
//             </div>
//         </div>
//     </section>
//     );
// }

// export default LetterheadSlider;

<<<<<<< HEAD



// import React, { useEffect, useRef } from 'react';
// import $ from 'jquery';
// import 'slick-carousel';
// import 'slick-carousel/slick/slick.css'; 
=======
// import React, { useEffect, useRef } from 'react';
// import $ from 'jquery';
// import 'slick-carousel';
// import 'slick-carousel/slick/slick.css';
>>>>>>> 6010d3c (Add new features and updates)
// // import "../../../style/slider/slider.scss";

// function LetterheadSlider() {
//     const sliderRef = useRef(null);

//     useEffect(() => {
//         const initializeSlick = () => {
//             if (sliderRef.current && $(sliderRef.current).children().length > 0) {
//                 console.log('Initializing slick for:', sliderRef.current);

//                 $(sliderRef.current).slick({
//                     prevArrow: $('.prev'),
//                     nextArrow: $('.next'),
//                     infinite: true,
//                     speed: 2000,
//                     slidesToShow: 4,
//                     slidesToScroll: 4,
//                     autoplay: true,
//                     autoplaySpeed: 2000,
//                     responsive: [
//                         {
//                             breakpoint: 1024,
//                             settings: {
//                                 slidesToShow: 3,
//                                 slidesToScroll: 3,
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
//                                 slidesToShow: 1,
//                                 slidesToScroll: 1
//                             }
//                         }
//                     ]
//                 });
//             } else {
//                 console.error('sliderRef.current is null or has no children.');
//             }
//         };

//         // Use requestAnimationFrame for smoother timing
//         const timeoutId = setTimeout(() => {
//             requestAnimationFrame(initializeSlick);
//         }, 100);

//         return () => {
//             clearTimeout(timeoutId);
//             if (sliderRef.current) {
//                 $(sliderRef.current).slick('unslick');
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
//                             {[
<<<<<<< HEAD
                                
=======

>>>>>>> 6010d3c (Add new features and updates)
//                                 "Audioscape.webp",
//                                 "AYN-letter-head.webp",
//                                 "Jk-onstruction.webp",
//                                 "Juniya.webp",
<<<<<<< HEAD
                               
//                                 "Raj-vision-electronics.webp",
                               
//                                 "SKP-1.webp",
                                
=======

//                                 "Raj-vision-electronics.webp",

//                                 "SKP-1.webp",

>>>>>>> 6010d3c (Add new features and updates)
//                             ].map((img, index) => (
//                                 <div key={index}>
//                                     <img src={`webdads/images/letterhead/${img}`} alt={`slider${index + 1}`} />
//                                 </div>
//                             ))}
//                         </div>
//                         {/* Uncomment control arrows if needed
//                         <div className="prev">
//                             <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
//                         </div>
//                         <div className="next">
//                             <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
//                         </div>
//                         */}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default LetterheadSlider;

<<<<<<< HEAD













=======
>>>>>>> 6010d3c (Add new features and updates)
// =========================================================================================================================================
// ================================ this code is reworked =======================================================================================
// =========================================================================================================================================

// import React, { useEffect, useRef } from 'react';
// import $ from 'jquery';
// import 'slick-carousel';
// import 'slick-carousel/slick/slick.css';

// function LetterheadSlider() {
//     const sliderRef = useRef(null);

//     useEffect(() => {
//         const sliderElement = sliderRef.current; // Store the ref in a variable

//         const initializeSlick = () => {
//             if (sliderElement && $(sliderElement).children().length > 0) {
//                 console.log('Initializing slick for:', sliderElement);

//                 $(sliderElement)?.slick({
//                     prevArrow: $('.prev'),
//                     nextArrow: $('.next'),
//                     infinite: true,
//                     speed: 2000,
//                     slidesToShow: 4,
//                     slidesToScroll: 4,
//                     autoplay: true,
//                     autoplaySpeed: 2000,
//                     responsive: [
//                         {
//                             breakpoint: 1024,
//                             settings: {
//                                 slidesToShow: 3,
//                                 slidesToScroll: 3,
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
//                                 slidesToShow: 1,
//                                 slidesToScroll: 1
//                             }
//                         }
//                     ]
//                 });
//             } else {
//                 console.error('sliderRef.current is null or has no children.');
//             }
//         };

//         // Initialize slick after a small delay
//         const timeoutId = setTimeout(() => {
//             requestAnimationFrame(initializeSlick);
//         }, 100);

//         // Cleanup function
//         return () => {
//             clearTimeout(timeoutId);
//             if (sliderElement) {
//                 $(sliderElement)?.slick('unslick');
//             }
//         };
//     }, []); // Empty dependency array ensures this runs only once on mount

//     return (
//         <section className="letterhdslr">
//             <div className="container">
//                 <div className="row android-app-development-slider">
//                     <div className="col-xs-12 col-md-12 align-self-center">
//                         <div className="overlay"></div>
//                         <div className="slider responsive" ref={sliderRef}>
//                             {[
//                                 "Audioscape.webp",
//                                 "AYN-letter-head.webp",
//                                 "Jk-onstruction.webp",
//                                 "Juniya.webp",
//                                 "Raj-vision-electronics.webp",
//                                 "SKP-1.webp",
//                             ].map((img, index) => (
//                                 <div key={index}>
//                                     <img src={`webdads/images/letterhead/${img}`} alt={`slider${index + 1}`} />
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default LetterheadSlider;
// =================================================================================================================
// =================================================================================================================
// =================================================================================================================
// =================================================================================================================
// =================================================================================================================
// =================================================================================================================
import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
<<<<<<< HEAD
=======
import { Button } from 'react-bootstrap';
>>>>>>> 6010d3c (Add new features and updates)

function LetterheadSlider() {
    const sliderRef = useRef(null);

    useEffect(() => {
        const sliderElement = sliderRef.current;

        const initializeSlick = () => {
            if (!sliderElement || $(sliderElement).hasClass('slick-initialized')) return;

            $(sliderElement).slick({
                prevArrow: $('.prev'),
                nextArrow: $('.next'),
                infinite: true,
                speed: 2000,
                slidesToShow: 4,
                slidesToScroll: 4,
                autoplay: true,
                autoplaySpeed: 2000,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
<<<<<<< HEAD
                            slidesToScroll: 3,
=======
                            slidesToScroll: 3
>>>>>>> 6010d3c (Add new features and updates)
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        };

        const timeoutId = setTimeout(() => {
            const checkImagesLoaded = setInterval(() => {
                const images = sliderElement?.querySelectorAll('img');
<<<<<<< HEAD
                const allLoaded = [...images].every(img => img.complete);
=======
                const allLoaded = [...images].every((img) => img.complete);
>>>>>>> 6010d3c (Add new features and updates)

                if (allLoaded) {
                    clearInterval(checkImagesLoaded);
                    initializeSlick();
                }
            }, 100);
        }, 100);

        return () => {
            clearTimeout(timeoutId);
            if (sliderElement && $(sliderElement).hasClass('slick-initialized')) {
                $(sliderElement).slick('unslick');
            }
        };
    }, []);

    return (
        <section className="letterhdslr">
            <div className="container">
                <div className="row android-app-development-slider">
                    <div className="col-xs-12 col-md-12 align-self-center">
                        <div className="overlay"></div>
                        <div className="slider responsive" ref={sliderRef}>
<<<<<<< HEAD
                            {[
                                "Audioscape.webp",
                                "AYN-letter-head.webp",
                                "Jk-onstruction.webp",
                                "Juniya.webp",
                                "Raj-vision-electronics.webp",
                                "SKP-1.webp",
                            ].map((img, index) => (
                                <div key={index}>
                                    <img
                                        src={`webdads/images/letterhead/${img}`}
                                        alt={`slider${index + 1}`}
                                        style={{ width: '100%', height: 'auto' }}
                                    />
=======
                            {['Audioscape.webp', 'AYN-letter-head.webp', 'Jk-onstruction.webp', 'Juniya.webp', 'Raj-vision-electronics.webp', 'SKP-1.webp'].map((img, index) => (
                                <div key={index}>
                                    <img src={`webdads/images/letterhead/${img}`} alt={`slider${index + 1}`} style={{ width: '100%', height: 'auto' }} />
>>>>>>> 6010d3c (Add new features and updates)
                                </div>
                            ))}
                        </div>
                        {/* Optional: Custom arrows if needed */}
<<<<<<< HEAD
                        <button className="prev">Prev</button>
                        <button className="next">Next</button>
=======
                        {/* <button className="prev">Prev</button>
                        <button className="next">Next</button> */}
                        <div>
                            <div className="text-center">
                                <a href="/letter-head/">
                                    <Button className='letter-head-slider-viwe-more'>View More </Button>
                                </a>
                            </div>
                        </div>
>>>>>>> 6010d3c (Add new features and updates)
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LetterheadSlider;
