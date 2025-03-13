import React, { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';

function Technicalstack() {
    useEffect(() => {
        $('.responsive-technicalstack-slider').slick({
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
        <section className='technicalstack-main'>
            <div className="container">
                <div className="row justify-content-center text-center technicalstack">
                    <div className="col-sm-12 col-md-12 col-lg-10">
                        <h4>Technical Stack</h4>
                        <p>We can use different technologies to develop a single application or only one technology can be used, depending on the situation. Our technical proficiency is listed below, and we are the most seasoned web design firm in Chennai.</p>
                    </div>
                </div>
                <div className="row justify-content-center technicalstack-slider">
                    <div className="col-sm-12 col-md-12 col-lg-10 justify-content-center">
                        <div class="overlay"></div>

                        <div class="slider responsive-technicalstack-slider">
                            <div>
                                <img src="webdads/images/HTML5/big-html.png" alt="big-html" loading='lazy' className='img-fluid' />
                            </div>
                            <div>
                                <img src="webdads/images/HTML5/css.png" alt="css" loading='lazy' className='img-fluid' />
                            </div>
                            <div>
                                <img src="webdads/images/HTML5/js.png" alt="js" loading='lazy' className='img-fluid' />
                            </div>
                            <div>
                                <img src="webdads/images/HTML5/bootstrap.png" alt="bootstrap" loading='lazy' className='img-fluid' />
                            </div>
                            <div>
                                <img src="webdads/images/HTML5/php.png" alt="php" loading='lazy' className='img-fluid mt-3' />
                            </div>
                            <div>
                                <img src="webdads/images/HTML5/big-html.png" alt="big-html" loading='lazy' className='img-fluid' />
                            </div>
                            <div>
                                <img src="webdads/images/HTML5/css.png" alt="css" loading='lazy' className='img-fluid' />
                            </div>
                            <div>
                                <img src="webdads/images/HTML5/js.png" alt="js" loading='lazy' className='img-fluid' />
                            </div>
                            <div>
                                <img src="webdads/images/HTML5/bootstrap.png" alt="bootstrap" loading='lazy' className='img-fluid' />
                            </div>
                            <div>
                                <img src="webdads/images/HTML5/php.png" alt="php" loading='lazy' className='img-fluid mt-3' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Technicalstack;