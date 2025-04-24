// import React, { useEffect, useRef } from 'react';
// import $ from 'jquery';
// import 'slick-carousel'; // Ensure you've installed slick-carousel
// import 'slick-carousel/slick/slick.css'; 
// import "../../../style/slider/slider.scss";

// function LetterheadSlider() {
//     const sliderRef = useRef(null);

//     useEffect(() => {
       
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




// import React, { useEffect, useRef } from 'react';
// import $ from 'jquery';
// import 'slick-carousel';
// import 'slick-carousel/slick/slick.css'; 
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
                            slidesToScroll: 3,
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
                const allLoaded = [...images].every(img => img.complete);

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
                                </div>
                            ))}
                        </div>
                        {/* Optional: Custom arrows if needed */}
                        <button className="prev">Prev</button>
                        <button className="next">Next</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LetterheadSlider;
