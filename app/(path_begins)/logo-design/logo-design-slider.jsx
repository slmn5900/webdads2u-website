import React, { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';

function Logodesignslider() {

    useEffect(() => {
        $('.logodesignslider-slider').slick({
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
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
        });

        return () => {
            $('.responsive').slick('unslick');
        };
    }, []);

    return (
        <section className='logodesignslider-main'>
            <div className="container-fluid">
                <div className="row text-center logodesignslider-header">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <h4>Our Works</h4>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div class="overlay"></div>

                        <div class="slider logodesignslider-slider">

                            <div className='mt-0 mt-md-3 mt-lg-4'>
                                <div className="card m-3 text-center">
                                <img src="webdads/images/logo-design/arc-man-logo.png" alt="arc-man-logo" loading='lazy' className='img-fluid' />
                                </div>
                            </div>

                            <div>
                                <div className="card m-3 text-center">
                                <img src="webdads/images/logo-design/best.png" alt="best" loading='lazy' className='img-fluid' />
                                </div>
                            </div>

                            <div className='mt-0 mt-md-3 mt-lg-4'>
                                <div className="card m-3 text-center">
                                <img src="webdads/images/logo-design/best-dps.png" alt="best-dps" loading='lazy' className='img-fluid' />
                                </div>
                            </div>

                            <div>
                                <div className="card m-3 text-center">
                                <img src="webdads/images/logo-design/corengg-serve-engineering.png" alt="corengg-serve-engineering" loading='lazy' className='img-fluid' />
                                </div>
                            </div>

                            <div className='mt-0 mt-md-3 mt-lg-4'>
                                <div className="card m-3 text-center">
                                <img src="webdads/images/logo-design/iritube-logo-n.png" alt="iritube-logo-n" loading='lazy' className='img-fluid' />
                                </div>
                            </div>

                            {/* <div className='mt-0 mt-md-3 mt-lg-4'>
                                <div className="card m-3 text-center">
                                <img src="webdads/images/logo-design/arc-man-logo.png" alt="arc-man-logo" loading='lazy' className='img-fluid' />
                                </div>
                            </div> */}

                            <div>
                                <div className="card m-3 text-center">
                                <img src="webdads/images/logo-design/best.png" alt="best" loading='lazy' className='img-fluid' />
                                </div>
                            </div>

                            <div className='mt-0 mt-md-3 mt-lg-4'>
                                <div className="card m-3 text-center">
                                <img src="webdads/images/logo-design/best-dps.png" alt="best-dps" loading='lazy' className='img-fluid' />
                                </div>
                            </div>

                            <div>
                                <div className="card m-3 text-center">
                                <img src="webdads/images/logo-design/corengg-serve-engineering.png" alt="corengg-serve-engineering" loading='lazy' className='img-fluid' />
                                </div>
                            </div>

                            {/* <div className='mt-0 mt-md-3 mt-lg-4'>
                                <div className="card m-3 text-center">
                                <img src="webdads/images/logo-design/iritube-logo-n.png" alt="iritube-logo-n" loading='lazy' className='img-fluid' />
                                </div>
                            </div> */}
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Logodesignslider;