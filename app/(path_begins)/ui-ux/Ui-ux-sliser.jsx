import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

function Uiuxsliser() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000, // Set autoplay speed in milliseconds
        prevArrow: <div className="prev d-none">Prev</div>,
        nextArrow: <div className="next d-none">Next</div>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
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
    };

    return (
        <section className='uiuxsliser-main'>
            <div className="container">
                <div className="row text-center uiuxsliser">
                    <div className="col-sm-12 col-md-col-lg-12">
                        <h3>Interface Technology and Tools We Use</h3>
                    </div>
                </div>
                <div className="row uiuxsliser-toos">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="overlay"></div>
                        {/* Slider Component */}
                        <Slider {...settings} className="ui-responsive text-center">
                            <div>
                                <img src="webdads/images/ui-ux/download-html.png" alt="download-html" loading='lazy' className='img-fluid' />
                                <div>
                                    <p>HTML5</p>
                                </div>
                            </div>
                            <div>
                                <img src="webdads/images/ui-ux/download-css.png" alt="download-css" loading='lazy' className='img-fluid' />
                                <div>
                                    <p>CSS3</p>
                                </div>
                            </div>
                            <div>
                                <img src="webdads/images/ui-ux/download-js.png" alt="download-js" loading='lazy' className='img-fluid' />
                                <div>
                                    <p>JavaScript</p>
                                </div>
                            </div>
                            <div>
                                <img src="webdads/images/ui-ux/download-1_1142941020.png" alt="download-1_1142941020" loading='lazy' className='img-fluid' />
                                <div>
                                    <p>ReactJS</p>
                                </div>
                            </div>
                            <div>
                                <img src="webdads/images/ui-ux/download.png" alt="download" loading='lazy' className='img-fluid' />
                                <div>
                                    <p>AngluarJS</p>
                                </div>
                            </div>
                            <div>
                                <img src="webdads/images/ui-ux/download-v.png" alt="download-v" loading='lazy' className='img-fluid' />
                                <div>
                                    <p>Vue</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Uiuxsliser;