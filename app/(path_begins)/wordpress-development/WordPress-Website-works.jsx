import React, { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';

function WordPressWebsiteworks() {
    useEffect(() => {
        // Initialize the Slick slider after the component mounts
        $('.wordpress').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });

        // Cleanup on unmount to prevent multiple initializations
        return () => {
            $('.wordpress').slick('unslick');
        };
    }, []); // Empty dependency array ensures the effect runs only once after component mounts

    return (
        <section className="wordpresswebsiteworks-main">
            <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-12 col-lg-12 text-center wordpresswebsiteworks-header"><h1>Our WordPress Website works</h1></div>
                    <div className="col-md-12 col-lg-12">
                        <div className="overlay"></div>
                        {/* Slider */}
                        <div className="slider wordpress">
                            <div>
                                <img src="webdads/images/wordpress-development/Adsfit.png" alt="Adsfit" className="img-fluid" loading="lazy" />
                            </div>
                            <div>
                                <img src="webdads/images/wordpress-development/arcmen.png" alt="arcmen" className="img-fluid" loading="lazy" />
                            </div>
                            <div>
                                <img src="webdads/images/wordpress-development/Team-Water_22100b5f9e.png" alt="Team-Water" className="img-fluid" loading="lazy" />
                            </div>
                            <div>
                                <img src="webdads/images/wordpress-development/Adsfit.png" alt="Adsfit" className="img-fluid" loading="lazy" />
                            </div>
                            <div>
                                <img src="webdads/images/wordpress-development/arcmen.png" alt="arcmen" className="img-fluid" loading="lazy" />
                            </div>
                            <div>
                                <img src="webdads/images/wordpress-development/Team-Water_22100b5f9e.png" alt="Team-Water" className="img-fluid" loading="lazy" />
                            </div>
                        </div>

                        {/* Control arrows */}
                        {/* Uncomment if you want prev/next buttons */}
                        {/* 
                        <div className="prev">
                            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        </div>
                        <div className="next">
                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        </div> 
                        */}
                    </div>
                    <div className="col-sm-12 col-lg-12 text-center wordpresswebsiteworks-btn">
                      <a href="/wordpress"><button>View More</button></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WordPressWebsiteworks;
