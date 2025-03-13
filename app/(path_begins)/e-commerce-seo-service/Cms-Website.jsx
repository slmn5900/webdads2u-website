import React, { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';

function Cmswebsite() {
    useEffect(() => {
        $('.responsive-cmswebsite-slider').slick({
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
            $('.responsive-cmswebsite-slider').slick('unslick');
        };
    }, []);

    return (
        <section className='cmswebsite-main'>
            <div className="container">
                <div className="row justify-content-center text-center cmswebsite-header">
                    <div className="col-sm-12 col-md-12 col-lg-8">
                        <h6>Popular Ecommerce & Cms Website Platforms We Optimize Include But Aren’t Limited To</h6>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                        <p>We optimize various e-commerce and CMS website platforms for SEO, including Shopify, WooCommerce, Magento, WordPress, BigCommerce, and more.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div class="overlay"></div>

                        <div class="slider responsive-cmswebsite-slider">
                            <div>
                                <img src="webdads/images/e-commerce-seo-service/download-5.png" alt="download-5" loading='lazy' className='img-fluid' />
                            </div>
                            <div>
                                <img src="webdads/images/e-commerce-seo-service/CSS.png" alt="CSS" loading='lazy' className='img-fluid' />
                            </div>
                            <div>
                                <img src="webdads/images/e-commerce-seo-service/bootstrap-logo.png" alt="bootstrap-logo" loading='lazy' className='img-fluid' />
                            </div>
                            <div>
                                <img src="webdads/images/e-commerce-seo-service/php-logo.png" alt="php-logo" loading='lazy' className='img-fluid' />
                            </div>
                            <div>
                                <img src="webdads/images/e-commerce-seo-service/wordpress-logo.png" alt="wordpress-logo" loading='lazy' className='img-fluid mt-3' />
                            </div>
                            <div>
                                <img src="webdads/images/e-commerce-seo-service/angular-js-logo.png" alt="angular-js-logo" loading='lazy' className='img-fluid mt-3' />
                            </div>
                            <div>
                                <img src="webdads/images/e-commerce-seo-service/node-js-logo.png" alt="node-js-logo" loading='lazy' className='img-fluid mt-3' />
                            </div>
                            <div>
                                <img src="webdads/images/e-commerce-seo-service/react-logo.png" alt="react-logo" loading='lazy' className='img-fluid mt-3' />
                            </div>
                            <div>
                                <img src="webdads/images/e-commerce-seo-service/opencart-logo.png" alt="opencart-logo" loading='lazy' className='img-fluid mt-3' />
                            </div>
                           
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cmswebsite;