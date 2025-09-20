import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

function Benefitsselectingcard() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000, // Set autoplay speed in milliseconds
        prevArrow: <div className="prev d-none">Prev</div>,
        nextArrow: <div className="next d-none">Next</div>,
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
    };
    return (
        <section className='benefitsselectingcard-main'>
            <div className="container">
                <div className="row ">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="overlay"></div>
                        {/* Slider Component */}
                        <Slider {...settings} className="benefitsselectingcard text-center">
                            <div className='hello'>
                                <div className="card">
                                    <div className="card-image">
                                        <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757486181/webdads2u/website-maintenance/ecoomerce-development.webp" alt="ecoomerce development" loading='lazy' className='img-fluid' />
                                    </div>
                                    <div className="card-body">
                                        <h5 style={{
                                            color: '#0b1225',
                                            fontFamily: 'Poppins, sans-serif',
                                            fontSize: '22px',
                                            fontWeight: 600
                                        }}> eCommerce Development </h5>
                                        <p style={{
                                            color: '#8a8a8a',
                                            fontFamily: 'Roboto, sans-serif',
                                            fontSize: '15px',
                                            fontWeight: 400
                                        }}>Our priority in E-commerce development is not only the initial setup, but also the ongoing website. Our comprehensive services ensure your online store remains functional, secure, and up-to-date, providing a seamless shopping experience for your customers while you focus on business growth.</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="card">
                                    <div className="card-image">
                                        <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757486203/webdads2u/website-maintenance/web-solutions.avif" alt="web solutions" loading='lazy' className='img-fluid' />
                                    </div>
                                    <div className="card-body">
                                        <h5 style={{
                                            color: '#0b1225',
                                            fontFamily: 'Poppins, sans-serif',
                                            fontSize: '22px',
                                            fontWeight: 600
                                        }}> Web Solutions </h5>
                                        <p style={{
                                            color: '#8a8a8a',
                                            fontFamily: 'Roboto, sans-serif',
                                            fontSize: '15px',
                                            fontWeight: 400
                                        }}>When it comes to managing your online presence, our web solutions encompass everything you need. We ensure your website remains up-to-date, secure, and performing optimally. With our expert team taking care of maintenance tasks, you can concentrate on advancing your business objectives confidently.</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="card">
                                    <div className="card-image">
                                        <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757486175/webdads2u/website-maintenance/app-development.webp" alt="app development" loading='lazy' className='img-fluid' />
                                    </div>
                                    <div className="card-body">
                                        <h5 style={{
                                            color: '#0b1225',
                                            fontFamily: 'Poppins, sans-serif',
                                            fontSize: '22px',
                                            fontWeight: 600
                                        }}>Mobile  App Development </h5>
                                        <p style={{
                                            color: '#8a8a8a',
                                            fontFamily: 'Roboto, sans-serif',
                                            fontSize: '15px',
                                            fontWeight: 400
                                        }}>In mobile app development, we understand the importance of seamless integration. Our services encompass not only creating innovative apps but also ensuring they harmonize with your website, guaranteeing consistent performance and user experience across platforms.</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="card">
                                    <div className="card-image">
                                        <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757486178/webdads2u/website-maintenance/website-hosting.avif" alt="website hosting" loading='lazy' className='img-fluid' />
                                    </div>
                                    <div className="card-body">
                                        <h5 style={{
                                            color: '#0b1225',
                                            fontFamily: 'Poppins, sans-serif',
                                            fontSize: '22px',
                                            fontWeight: 600
                                        }}> Website Hosting </h5>
                                        <p style={{
                                            color: '#8a8a8a',
                                            fontFamily: 'Roboto, sans-serif',
                                            fontSize: '15px',
                                            fontWeight: 400
                                        }}> For reliable website hosting, our services go beyond mere server provision. Enjoy seamless performance, security updates, and regular backups to keep your site running smoothly. Trust us to handle all aspects of your hosting and maintenance needs.</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="card">
                                    <div className="card-image">
                                        <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757486172/webdads2u/website-maintenance/social-media-marketing.webp" alt="social media marketing" loading='lazy' className='img-fluid' />
                                    </div>
                                    <div className="card-body">
                                        <h5 style={{
                                            color: '#0b1225',
                                            fontFamily: 'Poppins, sans-serif',
                                            fontSize: '22px',
                                            fontWeight: 600
                                        }}> Digital Marketing </h5>
                                        <p style={{
                                            color: '#8a8a8a',
                                            fontFamily: 'Roboto, sans-serif',
                                            fontSize: '15px',
                                            fontWeight: 400
                                        }}>In digital marketing, effective strategies to maximize results. Our comprehensive services cover not only promoting your brand but also ensuring your website is regularly updated, secure, and optimized for peak performance, enhancing your online presence and customer engagement.</p>
                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefitsselectingcard