import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { MdDoubleArrow } from "react-icons/md";
import SocialMedia from '../../../components/common/SocialMedia';
function ShopifyHero() {
    return (
        <>
            <section className="shopify-hero">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} xs={7}>
                            <h2>Shopify Development Services</h2>
                            <p>Empower your online business with expert Shopify web development. Top rated Shopify development service provider.</p>
                            <a href="https://webdads2u.com/contact-us/">
                                <Button variant="contained">Contact us</Button>
                            </a>
                        </Col>
                        <Col md={6} xs={5}>
                            <div class="">
                                <img src="/webdads/images/shopify/shopify-service.png" alt="Shopify service" className="w-100" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="leading-shopify pt-5 pb-5">
                <Container>
                    <Row>
                        <div className="text-center">
                            <h2>Leading Shopify Development Company in Chennai </h2>
                            <p>
                                Chennai has witnessed a significant transformation in the e-commerce industry over the past few years. Shopify is well-known for its substantial market share in the e-commerce platform space. We are a leading Shopify
                                development company based in Chennai, India and we specialize in providing the best Shopify development solutions that enhance your online presence and drive unparalleled growth for your e-commerce venture.
                            </p>
                        </div>
                    </Row>
                </Container>
            </section>
            <section className="shopify-why pt-5 pb-5" style={{ background: '#f5f5f5' }}>
                <Container>
                    <Row>
                        <Col md={12} lg={6}>
                            <div className="">
                                <img src="/webdads/images/shopify/why-shopify.webp" alt="Shopify service" className="w-100 rounded" />
                            </div>
                        </Col>
                        <Col md={12} lg={6}>
                            <div className="">
                                <h2>Why Webdads2u for Shopify Website Development Services?</h2>
                                <p>All Shopify eCommerce solutions are available to us, regardless of their complexity.</p>
                                <ul>
                                    <li><MdDoubleArrow /> Expert Shopify Developers </li>
                                    <li><MdDoubleArrow /> Custom Shopify Development </li>
                                    <li><MdDoubleArrow /> Security-Focused Shopify Development </li>
                                    <li><MdDoubleArrow /> Migration to Shopify </li>
                                    <li><MdDoubleArrow /> Enterprise Delivery Practices </li>
                                    <li><MdDoubleArrow /> Focus on Standards and Quality </li>
                                    <li><MdDoubleArrow /> POS, CRM, & ERP Integrations </li>
                                    <li><MdDoubleArrow /> High-Performance and Scalable solution</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="shop-deveser pt-5 pb-5">
             <Container>
                <Row>
                    <div class="text-center">
                        <h2>Shopify Development Services We Offers </h2>
                        <p>Our Shopify experts are dedicated to providing you with all the support you need, whether you’re looking to establish an online presence for your business or migrate to the Shopify platform. Shopify development services offered by Concept Infoway encompasses a diverse range of offerings, such as:</p>
                    </div>
                   <Col md={6} lg={4}>
                   <div className="shopify-weoffer">
                    <img alt="" src="/webdads/images/shopify/Custom-Shopify-Development.png"></img>
                    <h3>Custom Shopify Development</h3>
                    <p>When it comes to bespoke Shopify development, we stand out as industry leaders. Our Shopify development services are unique because they incorporate advanced features and are specifically designed to meet the needs of your eCommerce business.</p>
                   </div>
                   </Col>
                   <Col md={6} lg={4}>
                   <div className="shopify-weoffer">
                    <img alt="" src="/webdads/images/shopify/Shopify-Theme-Development.png"></img>
                    <h3>Shopify Theme Development</h3>
                    <p>By applying these themes, we enhance your customer&apos;s online shopping experience and make it more interactive and enjoyable. These themes enable us to enhance the online shopping experience for your customers, making it more interactive and enjoyable.</p>
                   </div>
                   </Col>
                   <Col md={6} lg={4}>
                   <div className="shopify-weoffer">
                    <img alt="" src="/webdads/images/shopify/Shopify-Upgradation.png"></img>
                    <h3>Shopify Upgradation</h3>
                    <p>Your Shopify stores will receive timely upgrades from us, ensuring that every visit delivers exceptional experiences for buyers. In addition, Concept Infoway ensures that Shopify migrations flow smoothly and prioritize the safety of your data.</p>
                   </div>
                   </Col>
                 

                
                   
                   <Col md={6} lg={4}>
                   <div className="shopify-weoffer">
                    <img alt="" src="/webdads/images/shopify/Custom-Shopify-Development.png"></img>
                    <h3>Shopify Integration Services</h3>
                    <p>Being a comprehensive Shopify development company, we provide third-party integration services. We help you seamlessly integrate features like shopping carts and APIs into your existing website to provide a great eCommerce experience to your visitors.</p>
                   </div>
                   </Col>
                   <Col md={6} lg={4}>
                   <div className="shopify-weoffer">
                    <img alt="" src="/webdads/images/shopify/Shopify-Theme-Development.png"></img>
                    <h3>PSD to Shopify Development</h3>
                    <p>Concept Infoway expands its offerings to include code conversion services, catering to various formats like PSD to Shopify and more. We accept diverse design formats such as Sketch, JPEG, PDF, Figma, PSD, and others. Trust us for seamless conversion and enhance your online presence with our expertise.</p>
                   </div>
                   </Col>
                   <Col md={6} lg={4}>
                   <div className="shopify-weoffer">
                    <img alt="" src="/webdads/images/shopify/Shopify-Upgradation.png"></img>
                    <h3>Shopify eCommerce Development</h3>
                    <p>Rely on our proficient team of Shopify specialists to craft eCommerce stores that excel in both features and performance. We provide a comprehensive range of customization options, empowering you to tailor the appearance and functionality of your eCommerce website to match your vision and needs precisely.</p>
                   </div>
                   </Col>
                 

                </Row>
                </Container>   
            </section>
            <SocialMedia />
        </>
    );
}

export default ShopifyHero;
