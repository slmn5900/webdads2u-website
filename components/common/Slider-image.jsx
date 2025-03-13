import React, { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel'; // Ensure you've installed slick-carousel
import 'slick-carousel/slick/slick.css'; // Add slick styles
import "../../style/slider/slider.scss" 

function Sliderimage() {
    useEffect(() => {
        $('.responsive').slick({
            // dots: true,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
            infinite: true,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
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
                    slidesToShow: 3,
                    slidesToScroll: 1
                  }
                }]
        });

        return () => {
            $('.responsive').slick('unslick');
        };
    }, []);

    return (
        <section>
            <div className="container">
                <div className="row android-app-development-slider">
                    <div className="col-xs-12 col-md-4 align-self-center">
                        <h1>Trusted by over 150+ businesses worldwide!</h1>
                    </div>
                    <div className="col-xs-12 col-md-8 align-self-center">
                        <div className="overlay"></div>
                        <div className="slider responsive">
                            {[
                                "imci-life-services.png",
                                "integra.png",
                                "matchbox-mansion.png",
                                "lalit-food-machines.png",
                                "prodent.png",
                                "pridermx.png",
                                "teamwater-logo.png",
                                "ssr-academy.png"
                            ].map((img, index) => (
                                <div key={index}>
                                    <img src={`webdads/images/android-app-development/${img}`} alt={`slider${index + 1}`} />
                                </div>
                            ))}
                        </div>
                        {/* Uncomment control arrows if needed
                        <div className="prev">
                            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        </div>
                        <div className="next">
                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        </div>
                        */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sliderimage;
