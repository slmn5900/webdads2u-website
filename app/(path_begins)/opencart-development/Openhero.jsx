import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import SocialMedia from '../../../components/common/SocialMedia';
import { IoIosCheckbox } from "react-icons/io";
import OpencartFqa from './OpencartFqa';
import OpencartTap from './OpencartTap';

function Openhero() {

    return (
        <>
        <section className="openkarthero">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} xs={7}>
                            <h2>Opencart Development</h2>
                            <p>Opencart development involves creating, customizing, and maintaining e-commerce websites using the Opencart platform. It encompasses theme design, module development, payment gateway integration, and optimization to deliver seamless online shopping experiences for businesses and customers.</p>
                            <a href="https://webdads2u.com/contact-us/">
                                <Button variant="contained">Contact us</Button>
                            </a>
                        </Col>
                        <Col md={6} xs={5}>
                            <div class="">
                                <img src="/webdads/images/opencart/opencrat-banner.webp" alt="opencrat-banner" className="w-100" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="leading-shopify pt-5">
                <Container>
                    <Row>
                        <div className="text-center">
                            <h2>We Provide Innovative OpenCart Development Services</h2>
                            <p>
                            Webdads2u collaborates with proficient Opencart developers boasting extensive experience. We meticulously assess your needs, propose optimal solutions, and craft innovative, feature-rich applications tailored to elevate your business. </p>
                        </div>
                    </Row>
                </Container>
            </section>
            <OpencartTap />
            <section className="shopify-why pt-5 pb-5" style={{ background: '#f5f5f5' }}>
                <Container>
                    <Row>
                        <Col md={12} lg={6}>
                            <div className="">
                                <img src="/webdads/images/opencart/opencart-development.webp" alt="opencart-development" className="w-100 rounded" />
                            </div>
                        </Col>
                        <Col md={12} lg={6}>
                            <div className="">
                                <h2>Technologies We Use for OpenCart Development</h2>
                                <p>In opencart development, we utilize PHP, MySQL, HTML5, CSS3, and JavaScript frameworks such as jQuery for dynamic user experiences. Our approach includes responsive design for cross-device compatibility, third-party API integration for added functionality, and ongoing support to ensure your OpenCart platform remains optimized and competitive in the digital marketplace.</p>
                               
                            </div>
                            <Row>
                                <Col lg={3} md={3} xs={6}>
                                <div className="">
                                    <img alt="" src="/webdads/images/opencart/PHP.png" className='w-100'></img>
                                </div>
                                </Col>
                                <Col lg={3} md={3} xs={6}>
                                <div className="">
                                    <img alt="" src="/webdads/images/opencart/react-logo.png" className='w-100'></img>
                                </div>
                                </Col>
                                <Col lg={3} md={3} xs={6}>
                                <div className="">
                                    <img alt="" src="/webdads/images/opencart/node-js-logo.png" className='w-100'></img>
                                </div>
                                </Col>
                                <Col lg={3} md={3} xs={6}>
                                <div className="">
                                    <img alt="" src="/webdads/images/opencart/angular-js-logo.webp" className='w-100'></img>
                                </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            <SocialMedia />
            <section className="shopify-why pt-5 pb-5" >
                <Container>
                    <Row>
                    <Col md={12} lg={6}>
                            <div className="">
                                <h2>Benefits of OpenCart Development </h2>
                                <p>Businesses have found OpenCart to be a brilliant solution. Not only does it have power, but it also provides its users with numerous benefits. Let’s see them one by one.</p>
                             <ul>
                             <li><IoIosCheckbox /> The ease of setting up OpenCart development is one of the most common reasons to choose it. It has options such as the catalog, system, sales, extension, etc. that are extremely user-friendly.
                             </li>
                             <li><IoIosCheckbox /> One of the most common reasons to choose OpenCart development is its ease of setup. It has options such as the catalog, system, sales, extension, and more that make it very user-friendly. </li>
                             <li><IoIosCheckbox /> The flexibility of OpenCart is another factor that makes it an absolute star. It allows easy updates of e-commerce sites.</li>
                             <li><IoIosCheckbox /> The flexibility of OpenCart is another factor that makes it an absolute star. It allows easy updates of e-commerce sites.</li>
                             </ul>
                             
                             </div>
                            
                        </Col>
                        <Col md={12} lg={6}>
                            <div className="">
                                <img src="/webdads/images/opencart/open-cart.webp" alt="opencart-development" className="w-100 rounded" />
                            </div>
                        </Col>
                       
                    </Row>
                </Container>
            </section>
            <OpencartFqa />
        </>
    )
}

export default Openhero
