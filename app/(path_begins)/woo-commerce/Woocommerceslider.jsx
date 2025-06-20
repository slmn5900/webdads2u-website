import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Woocommerceslider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section className="woocom-slide pt-5 pb-5" style={{ background: '#f5f5f5' }}>
            <Container>
                <Row>
                    <Col className="text-center">
                        <h2>Leading WooCommerce Web Development Company</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Slider {...settings}>
                            <div className="wocomflx align-items-center"> 
                                <Col md={5} xs={12}>
                                    <div >
                                    <img src="/webdads/images/wocommerce/woo-commerce-slider-1.webp" alt="woo-commerce-website-development" className="w-100"></img>
                                    </div>
                                </Col>
                                <Col md={7}>
                                    <div className="text-center px-2">
                                        <h2>Skilful WooCommerce Expertise</h2>
                                        <p>Discover the power of WooCommerce Development with Webdads2u&apos;s expert services. We specialize in crafting thriving eCommerce platforms tailored to your dreams. Leveraging WooCommerce&apos;s robust features, themes, and plugins, we create highly functional online stores. Partner with us to turn your vision into a reality and launch your dream businesswith WooCommerce Development today.</p>
                                    </div>
                                </Col>
                            </div>
                            <div className="wocomflx align-items-center"> 
                                <Col md={5} xs={12}>
                                    <div >
                                    <img src="/webdads/images/wocommerce/time-deliver.webp" alt="time-deliver" className="w-100"></img>
                                    </div>
                                </Col>
                                <Col md={7}>
                                    <div className="text-center px-2">
                                        <h2>Quality delivered in time</h2>
                                        <p>At Webdads2u, quality is paramount in our WooCommerce development process. With rigorous quality checks at every stage, including dedicated QA teams during development, we ensure bug-free, top-notch solutions for your online store. Our integration of accessible source codes anticipates your future business needs, providing efficient solutions promptly. Trust us for seamless, high-quality WooCommerce development.</p>
                                    </div>
                                </Col>
                            </div>
                            <div className="wocomflx align-items-center"> 
                                <Col md={5} xs={12}>
                                    <div >
                                    <img src="/webdads/images/wocommerce/skilled-woo-commerce.webp" alt="skilled-woo-commerce" className="w-100"></img>
                                    </div>
                                </Col>
                                <Col md={7}>
                                    <div className="text-center px-2">
                                        <h2>Skilled WooCommerce Developers</h2>
                                        <p>Webdads2u stands as a premier WooCommerce development company, renowned for consistent performance, unwavering dedication, and extensive experience. Our skilled WooCommerce developers and designers ensure your store not only looks visually appealing but also performs seamlessly. With affordable rates, we cater to every aspect of your online store, from UX design to development, ensuring your success in the digital marketplace.</p>
                                    </div>
                                </Col>
                            </div>
                            <div className="wocomflx align-items-center"> 
                                <Col md={5} xs={12}>
                                    <div >
                                    <img src="/webdads/images/wocommerce/practical.webp" alt="practical" className="w-100"></img>
                                    </div>
                                </Col>
                                <Col md={7}>
                                    <div className="text-center px-2">
                                        <h2>Practical WooCommerce solutions</h2>
                                        <p>Transforming your WordPress website into a captivating storefront is effortless and cost-effective with our services. We specialize in scaling your online business incrementally, allowing you to achieve your goals methodically. Our budget-focused approach caters to startups and growing online businesses alike, guiding you step by step towards success without overwhelming investments in directionless strategies.</p>
                                    </div>
                                </Col>
                            </div>
                            
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Woocommerceslider;
