import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import Slider from '../../../components/common/Slider-image';
// import vector from '../../../public/webdads/images/website-development/Vector-website.png';
import service from '../../../public/webdads/images/website-development/web-development-services.jpg';
function WebsitedevHero() {
    return (
        <>
            <section className="pt-5 webdev-hero">
                <Container>
                    <Row>
                        <Col md={7} xs={7}>
                            <div className="webhero-content">
                                <h1>Design, Develop, Deploy Anything With Full-Stack Development</h1>
                                <p>Revolutionize your online presence with our top-tier web development services. Crafted for innovation, functionality, and user-centric experiences, our solutions redefine digital success. </p>
                            </div>
                        </Col>
                        <Col md={5} xs={5}>
                            <div className="img-pst">
                                <img alt="" src="/webdads/images/website-development/webdevelopment-banner-service2.png"></img>
                                <img alt="" src="/webdads/images/website-development/webdevelopment-banner-service1.png"></img>
                            </div>
                            <div className="vector">
                                <Image src="/webdads/images/website-development/Vector-website.png" alt="Logo" className="img-fluid" />
                                <img alt="" src="/webdads/images/website-development/webdevelopment-banner-service4.png" class="mb-hdimg"></img>
                            </div>
                            <div class="img-ser3">
                                <img alt="" src="/webdads/images/website-development/webdevelopment-banner-service3.png"></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Slider />
            {/*Ower development*/}

            <section className="our-web">
                <Container>
                    <Row>
                        <Col md={12} lg={7}>
                            <div className="">
                                <h1>Our Web Development Streams</h1>
                                <p>
                                    Welcome to our web development stream! Join us as we explore the dynamic realm of web development services, covering everything from front-end design to back-end functionality. Whether you’re a beginner or a
                                    seasoned pro, we’ll share insights, tips, and the latest industry trends to help you craft engaging, high-quality websites. Expect deep dives into frameworks, programming languages, responsive design, SEO
                                    strategies, and real-world projects that highlight the importance of top-notch web development services. Tune in regularly to stay updated and elevate your web development skills with us!
                                </p>
                            </div>
                            <div className="d-flex look-btn">
                                <div className="">
                                    <p>Looking for Immersive Frontends?</p>
                                </div>
                                <div className="">
                                    <a href="/contact-us">
                                        <button>Talk To Our UI/UX Consultants</button>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col md={12} lg={5} className="text-center">
                            <Image src={service} alt="Logo" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default WebsitedevHero;
