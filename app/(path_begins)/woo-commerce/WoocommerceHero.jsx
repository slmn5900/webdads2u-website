import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Woocommerceslider from './Woocommerceslider';
import SocialMedia from '../../../components/common/SocialMedia';
import { IoMdCheckboxOutline } from "react-icons/io";
import WoocomFaq from './WoocomFaq';

function WoocommerceHero() {
    return (
        <>
            <section className="woocoomercehero">
                <Container>
                    <Row className="align-items-center">
                        <Col md={7} xs={7}>
                            <h2>Woocommerce Development Service</h2>
                            <p>
                                Enhance your online store with expert WooCommerce Development services. Our skilled team crafts tailored solutions for seamless e-commerce experiences. From custom themes to advanced functionalities, we ensure your
                                business stands out. Trust us to elevate your platform with our WooCommerce Development expertise.{' '}
                            </p>
                            <a href="/contact-us/">
                                <Button variant="contained">Contact us</Button>
                            </a>
                        </Col>
                        <Col md={5} xs={5}>
                            <div className="">
                                <img src="/webdads/images/wocommerce/woo-commerce-development.png" alt="opencrat-banner" className="w-100" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="shopify-why pt-5 pb-5">
                <Container>
                    <Row>
                    <Col md={12} lg={6}>
                            <div className="">
                                <h2>Custom WooCommerce Development Company</h2>
                                <p>Deploy a dedicated team of WooCommerce developers and design experts in ingenious WooCommerce theme development, plug-in development and WooCommerce app development perfectly suited to your enterprise needs.</p>
                                <p>Access 24×7 support focused on resolving bugs and problems pertaining to operations and even migration. Evoke world-class infrastructure and resources skilled in creating superlative WooCommerce web development applications, stores, and websites with high security standards coupled with crucial features like budgeting and accounting tools that ensure a quality product developed bespoke to your enterprise’s requirements.</p>
                            </div>
                            
                        </Col>
                        <Col md={12} lg={6}>
                            <div className="">
                                <img src="/webdads/images/wocommerce/custom-woocommerce.webp" alt="custom-woocommerce" className="w-100 rounded" />
                            </div>
                        </Col>
                        
                    </Row>
                </Container>
            </section>
            <Woocommerceslider />
            <section className="our-wocom pt-5 pb-5" style={{ background: '#f5f5f5' }}>
                <Container>
                    <Row>
                        <div className="text-center pb-3">
                            <h2>Our Woocommerce Development Services </h2>
                            <p>Explore our comprehensive WooCommerce Development Services tailored to elevate your online store. From custom theme design to seamless integration of advanced functionalities, we specialize in crafting solutions that align with your unique business needs. Our experienced team ensures meticulous attention to detail at every stage of development, delivering high-quality, bug-free solutions. </p>
                        </div>
                        <Col md={6} lg={4} xs={12}>
                        <div className="woocom-box text-center pb-5">
                            <img src="/webdads/images/wocommerce/woo-commerce-website-development.png" alt="woo-commerce-website-development"></img>
                            <h3>WooCommerce Website Development</h3>
                            <p>Take advantage of our best-in-class WooCommerce development services by working with us to design, customize, and deploy your website.</p>
                        </div>
                        </Col>
                        <Col md={6} lg={4} xs={12}>
                        <div className="woocom-box text-center wocom-rgt">
                            <img src="/webdads/images/wocommerce/ux-ui.png" alt="ux-ui"></img>
                            <h3>UI/UX Development</h3>
                            <p>We build amazing and customer-centric UI/UX designs. The fulfillment and experience of customers when they explore the WooCommerce app are enhanced by a well-designed UI/UX design.</p>
                        </div>
                        </Col>
                        <Col md={6} lg={4} xs={12}>
                        <div className="woocom-box text-center">
                            <img src="/webdads/images/wocommerce/support.png" alt="support"></img>
                            <h3>Support & Maintenance Of WooCommerce
                            </h3>
                            <p>We provide all of the WooCommerce support services you require. We can offer you the best services available in India under the guidance of our skilled team of developers.</p>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <SocialMedia />
            <section className="shopify-why pt-5 pb-5" >
                <Container>
                    <Row>
                        <div className="text-center pb-2">
                        <h2>Benefits of OpenCart Development </h2>
                        </div>
                    <Col md={12} lg={6}>
                            <div className="">
                               
                                <p>In today’s eCommerce landscape, WooCommerce development stands out as the preferred choice. Its myriad benefits continue to impress businesses and users alike, making it a favored option in the digital market.</p>
                             <ul>
                             <li><IoMdCheckboxOutline /> Once the website is made, most of the time it gets difficult to make changes to it. The ability to make changes is extremely easy with WooCommerce development and its themes.</li>
                             <li><IoMdCheckboxOutline /> WooCommerce has a wide range of advanced features that every modern online shop requires. This means you can keep your website future-proof.</li>
                             <li><IoMdCheckboxOutline /> WooCommerce has many official extensions to choose from, including analytics, payments, shipping, marketing, and accounting. </li>
                            
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
            <section className="looking-wecomm">
                <Container>
                    <Row>
                        <div className="text-center">
                            <h2>Looking for Woo commerce Development? </h2>
                            <p>You are at the right place… Contact us today!</p>
                            <a href="/contact-us/">
                                <Button variant="contained">Connect For Free Consultation</Button>
                            </a>
                        </div>
                    </Row>
                </Container>
            </section>

            <WoocomFaq />
        </>
    );
}

export default WoocommerceHero;
