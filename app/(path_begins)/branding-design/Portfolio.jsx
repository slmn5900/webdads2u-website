import React, { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Portfolio() {


    useEffect(() => {
        $('.responsive-Portfolio').slick({
            dots: true,
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
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                    },  
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                    },
                },
            ],
        });

        // Cleanup on unmount
        return () => {
            $('.responsive').slick('unslick');
        };
    }, []);
    

    return (
        <section className='Portfolio-main'>
            <div className="container Portfolio">
                <div className="row">
                    <div className="col-sm-12 col-lg-12 text-center">
                        <h1>Portfolio</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="overlay">
                    </div>
                    <div className="slider responsive-Portfolio">
                        <div>
                            <img src="/webdads/images/branding-design/brochure-designjpg.jpg" alt="brochure-designjpg" className='img-fluid' />
                        </div>
                        <div>
                            <img src="/webdads/images/branding-design/letterheadjpg.jpg" alt="letterheadjpg" className='img-fluid'/>
                        </div>
                        <div>
                            <img src="/webdads/images/branding-design/business-cardjpg.jpg" alt="business-cardjpg" className='img-fluid'/>
                        </div>
                        <div>
                            <img src="/webdads/images/branding-design/product-packaging-designjpg.jpg" alt="product-packaging-designjpg" className='img-fluid'/>
                        </div>
                     
                        </div>
                    </div>

                    {/* <div className="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    </div>
                    <div className="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    </div> */}
                </div>
        </section>
    )
}

export default Portfolio