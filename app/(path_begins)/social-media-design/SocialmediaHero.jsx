import React from 'react';
// import SocialMedia from '../../../components/common/SocialMedia';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Slider from '../../../components/common/Slider-image';
function SocialmediaHero() {
    return (
        <>
            <section className="social-hero">
                <Container>
                    <Row className="align-items-center">
                        <Col md={7} xs={7} lg={7}>
                            <h2>Best Social Media Design Company </h2>
                            <p>Unlock creativity with our Social Media Design services! Engaging visuals tailored to your brand. Let&apos;s elevate your online presence together.</p>
                            {/* <a href="/contact-us/"> */}
                            <a href="/contact-us">
                                <Button variant="contained">Contact us</Button>
                                {/* </a> */}
                            </a>
                        </Col>
                        <Col md={5} xs={5} lg={5}>
                            <div>
                                <img src="/webdads/images/socialmedia/socail-media-banner.png" alt="Social Media Design Company In Chennai" className="socialbanner" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Slider />
            <section className="pt-5 pb-5">
                <Container>
                    <Row className="align-items-center">
                        <Col md={12} lg={6}>
                            <div>
                                <img alt="" src="/webdads/images/socialmedia/social-media-design-Services-company.webp" style={{ width: '100%' }}></img>
                            </div>
                        </Col>
                        <Col md={12} lg={6}>
                            <div>
                                <h2>Social Media Design Services Company </h2>
                                <p>
                                    Welcome to our premier Social Media Design Services Company. We specialize in crafting captivating visuals and strategies that elevate your online presence. With our expertise in Social Media Design, we ensure your
                                    brand stands out in the digital landscape. Let us help you create an unforgettable impression and drive meaningful engagement with your audience.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="socialmd pt-5 pb-5">
                <Container>
                    <Row>
                        <div className="text-center">
                            <h3>List Of Top Social Media Websites In India</h3>
                            <p>There are numerous social media design platforms where people engage in their daily lives. The main advantages of using social media are increased visibility and the ability to connect with loved ones anytime.</p>
                        </div>
                        <Col md={6} lg={4}>
                            <div className="shopify-weoffer">
                                <a href="https://www.facebook.com/Webdads2u">
                                    <img alt="" src="/webdads/images/socialmedia/Facebook.webp"></img>
                                </a>
                                <a href="https://www.facebook.com/Webdads2u">
                                    <h3>Facebook</h3>
                                </a>
                                <p>
                                    Facebook, a pioneering social media design platform, has transformed the digital landscape, offering a diverse range of features for sharing photos, videos, and updates. As a subsidiary of Facebook, Instagram
                                    revolutionizes visual storytelling with its photo and video sharing services.
                                </p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="shopify-weoffer">
                                <a href="https://www.instagram.com/webdads2u/">
                                    <img alt="" src="/webdads/images/socialmedia/Instagram.webp"></img>
                                </a>
                                <a href="https://www.instagram.com/webdads2u/">
                                    <h3>Instagram</h3>
                                </a>
                                <p>
                                    Instagram is a social media design platform that has revolutionized the way we share photos and videos. It is a photo and video sharing service that is owned by Facebook. You can use Instagram to edit your photos
                                    in various ways to make them more appealing to your audience.
                                </p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="shopify-weoffer">
                                <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fwebdads2u">
                                    <img alt="" src="/webdads/images/socialmedia/Twitter.webp"></img>
                                </a>
                                <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fwebdads2u">
                                    <h3>Twitter</h3>
                                </a>
                                <p>Twitter, a leading social media design platform, redefines communication with its concise format. Owned by Facebook, Instagram, a photo and video sharing service, empowers users to creatively edit their visuals.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="shopify-weoffer">
                                <a href="https://www.linkedin.com/company/webdads2u-private-limited/">
                                    <img alt="" src="/webdads/images/socialmedia/Linkedin.webp"></img>
                                </a>
                                <a href="https://www.linkedin.com/company/webdads2u-private-limited/">
                                    <h3>LinkedIn</h3>
                                </a>
                                <p>
                                    LinkedIn, the premier professional networking platform, provides a powerful space for professionals to connect and share insights. As part of the Facebook family, Instagram revolutionizes visual storytelling with
                                    its photo and video editing tools.
                                </p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="shopify-weoffer">
                                <a href="https://in.pinterest.com/webdads2u/">
                                    <img alt="" src="/webdads/images/socialmedia/Pintrest.webp"></img>
                                </a>
                                <a href="https://in.pinterest.com/webdads2u/">
                                    <h3>Pinterest</h3>
                                </a>
                                <p>
                                    Pinterest, the innovative visual discovery platform, empowers users to find inspiration and share ideas through curated boards. As a member of the Facebook family, Instagram offers robust editing tools to enhance
                                    visuals.
                                </p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="shopify-weoffer">
                                <a href="#">
                                    <img alt="" src="/webdads/images/socialmedia/Timely-delivery.webp"></img>
                                </a>
                                <a href="#">
                                    <h3>Timely Delivery</h3>
                                </a>
                                <p>Timely Delivery, a cornerstone of customer satisfaction, ensures products and services reach customers promptly. With a focus on efficiency and reliability, we prioritize delivering on time, every time.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default SocialmediaHero;
