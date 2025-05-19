import Image from 'next/image';
import '../style/home//project.css';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
// import Application from "../Application/page";

export default function DigitalMargeting() {
    return (
        <>
            <div className="mt-5 ">
                <Container>
                    <Row className="align-items-start ">
                        <Col lg={6} md={6} sm={12}>
                            <Row className="mb-1">
                                <Col className="text-digital-layout">
                                    <h3 className="fw-bold ">Digital Marketing</h3>
                                    <p>
                                        Digital Marketing harnesses digital technologies to promote products/services, utilizing online platforms like social media, websites, SEO, and email campaigns. It involves content creation (blogs, videos,
                                        etc.) to engage and build relationships with potential customers, aiming to foster brand loyalty.
                                    </p>
                                    <p>
                                        As a leading web designing and web development company in Chennai, Webdads2u Pvt. Ltd. comprehends the significance of integrating effective digital marketing strategies to bolster brands and engage target
                                        audiences.
                                    </p>
                                    <p>
                                        <strong>
                                            <a style={{ color: '#383838' }} href="/">
                                                Webdads2u Pvt. Ltd.
                                            </a>
                                        </strong>{' '}
                                        is an expert in digital marketing and Web design and web development in Chennai, India. They offer services such as website design and development, search engine optimization, content marketing, email
                                        marketing, mobile marketing, and more. They create custom strategies and campaigns to reach their client’s target audiences and maximize their online presence.
                                    </p>
                                </Col>
                            </Row>

                            <Row className="mb-1">
                                <Col>
                                    <h3>Social Media Marketing</h3>
                                </Col>
                            </Row>

                            <div className="d-flex digital-home">
                                <ul className="p-0">
                                <a href="https://www.facebook.com/Webdads2u" target='_blank' className="text-decoration-none " style={{color:"#000"}}><li className="digital-home-li" style={{ paddingTop: '10px' }}>
                                       <img alt="" style={{ paddingRight: '8px' }} src="/webdads/images/home/facebook-marketing.png"></img>Facebook Marketing
                                    </li></a>
                                    <a href="https://x.com/i/flow/login?redirect_after_login=%2Fwebdads2u" target='_blank' className="text-decoration-none" style={{color:"#000"}}><li style={{ paddingTop: '10px' }}>
                                        <img alt="" style={{ paddingRight: '8px' }} src="/webdads/images/home/twitter-marketing.png"></img>Twitter Marketing
                                    </li></a>
                                    <a href="mailto:info@webdads2u.com" target='_blank' className="text-decoration-none" style={{color:"#000"}}><li style={{ paddingTop: '10px' }}>
                                        <img alt="" style={{ paddingRight: '8px' }} src="/webdads/images/home/email-marketing.png"></img>Email Marketing
                                    </li></a>
                                </ul>
                                <ul>
                                <a href="https://www.instagram.com/webdads2u/" target='_blank' className="text-decoration-none" style={{color:"#000"}}><li style={{ paddingTop: '10px' }}>
                                        <img alt="" style={{ paddingRight: '8px' }} src="/webdads/images/home/Instagram.png"></img>Instagram Marketing
                                    </li></a>
                                    <a href="https://www.linkedin.com/in/webdads2uservices" target='_blank' className="text-decoration-none" style={{color:"#000"}}><li style={{ paddingTop: '10px' }}>
                                        {' '}
                                        <img alt="" style={{ paddingRight: '8px' }} src="/webdads/images/home/linkedin-marketing.png"></img>Linkedin Marketing
                                    </li></a>
                                    <a href="https://wa.me/+91-8825607550" target='_blank' className="text-decoration-none" style={{color:"#000"}}><li style={{ paddingTop: '10px' }}>
                                        {' '}
                                        <img alt="" style={{ paddingRight: '8px' }} src="/webdads/images/home/whatsapp-marketing.png"></img>Whatsapp Marketing
                                    </li></a>
                                </ul>
                            </div>

                            <Row className="mb-4">
                                <Col>
                                    <h4>Search Engines Marketing</h4>
                                </Col>
                            </Row>

                            <Row className="mb-4">
                                <Col md={4} className="">
                                    <div className="d-flex">
                                        <img src="https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_25,h_26/f_auto,q_auto/v1701069742/google-search-engines_47511dc7/google-search-engines_47511dc7.png" alt="Google" width={25} height={26} />
                                        <p className="ms-2">Google</p>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="d-flex">
                                        <img src="https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_25,h_26/f_auto,q_auto/v1701069762/bing-search-engines_470323f0/bing-search-engines_470323f0.png" alt="Bing" width={25} height={26} />
                                        <p className="ms-2">Bing</p>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="d-flex">
                                        <img src="https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_25,h_26/f_auto,q_auto/v1701069723/yandex-search-engines_4803e9c9/yandex-search-engines_4803e9c9.png" alt="Yandex" width={25} height={26} />
                                        <p className="ms-2">Yandex</p>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="d-flex">
                                        <img
                                            src="https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_25,h_26/f_auto,q_auto/v1701069755/duckduckgo-search-engines_47227009/duckduckgo-search-engines_47227009.png"
                                            alt="DuckDuckGo"
                                            width={25}
                                            height={26}
                                        />
                                        <p className="ms-2">DuckDuckGo</p>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="d-flex">
                                        <img src="https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_25,h_26/f_auto,q_auto/v1701069758/baidu-search-engines_471b3b44/baidu-search-engines_471b3b44.png" alt="Baidu" width={25} height={26} />
                                        <p className="ms-2">Baidu</p>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="mb-4 ">
                                <Col className="text-center">
                                    <Button
                                        href="/digital-marketing-agency/"
                                        // variant="primary"
                                        className="border rounded-5"
                                        style={{
                                            background: 'linear-gradient(90deg, #871752 0%, #262250 50%)',
                                            padding: '18px 50px'
                                        }}
                                    >
                                        Read More
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={6} sm={12} className="digital-partical">
                            <Row className="mb-4 digital-partical-div ">
                                <Col>
                                    <div className="particle-animation">
                                        <div>
                                            <img
                                                src="https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_648,h_579/f_auto,q_auto/v1718112583/digital-marketing-image_444f04b2_213195b88a/digital-marketing-image_444f04b2_213195b88a.webp"
                                                alt="Digital Marketing"
                                                className="img-fluid"
                                            />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* <Application/> */}
        </>
    );
}
