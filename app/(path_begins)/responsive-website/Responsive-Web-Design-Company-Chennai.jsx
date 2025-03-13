import React, { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel'; // Ensure you've installed slick-carousel
import 'slick-carousel/slick/slick.css'; // Add slick styles

function ResponsiveWebdesigncompanychennai() {
    useEffect(() => {
        $('.ResponsiveWebdesigncompanychennai-responsive').slick({
            // dots: true,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
            infinite: true,
            speed: 300,
            slidesToShow: 1 ,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
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
        <section className='ResponsiveWebdesigncompanychennai-main'>
            <div className="container">
                <div className="row ResponsiveWebdesigncompanychennai">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <h3>Responsive Web Design Company in Chennai</h3>
                        <p>As a premier responsive web designing company in Chennai, we specialize in creating dynamic and adaptable websites that provide an optimal viewing experience across all devices. Our expert team leverages the latest technologies and best practices in responsive web design to ensure your website is visually stunning and fully functional on desktops, tablets, and smartphones. </p>
                        <a href="/contact-us"><button>Contact us</button></a>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
                        <div class="overlay"></div>
                        {/* <!-- Slider --> */}
                        <div class="slider ResponsiveWebdesigncompanychennai-responsive">
                            <div>
                                <img src="webdads/images/responsive-website/RMP.png" alt="RMP" loading='lazy' className='img-fluid' />
                            </div>
                            <div>
                                <img src="webdads/images/responsive-website/Racepro.png" alt="Racepro" loading='lazy' className='img-fluid' />
                            </div>
                            <div>
                                <img src="webdads/images/responsive-website/arcmen.png" alt="arcmen" loading='lazy' className='img-fluid' />
                            </div>
                            <div>
                                <img src="webdads/images/responsive-website/Adsfit.png" alt="Adsfit" loading='lazy' className='img-fluid' />
                            </div>
                            <div>
                                <img src="webdads/images/responsive-website/RMP-528.png" alt="RMP-528" loading='lazy' className='img-fluid' />
                            </div>
                            <div>
                                <img src="webdads/images/responsive-website/arcmen.png" alt="arcmen" loading='lazy' className='img-fluid' />
                            </div>
                        </div>
                        {/* <!-- control arrows -->
                        <div class="prev">
                            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        </div>
                        <div class="next">
                            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ResponsiveWebdesigncompanychennai;