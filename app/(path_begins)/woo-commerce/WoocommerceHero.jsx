import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { IoMdCheckboxOutline } from 'react-icons/io';
import Woocommerceslider from './Woocommerceslider';
import SocialMedia from '../../../components/common/SocialMedia';
import Slider from '../../../components/common/Slider-image';
import WoocomFaq from './WoocomFaq';
import { Box, Grid2, useMediaQuery, useTheme } from '@mui/material';
import Banner from '../../../components/ui/banner/Banner';
import BrochureFaq from '../../../components/ui/BrochureFaq';
import ClientLogoSlider from '../../../components/ui/client-logo-slider/ClientLogoSlider';
import Title from '../../../components/Title';
import Description from '../../../components/Description';

function WoocommerceHero() {
    const theme = useTheme();
    const ismobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <>
            <Banner />

            <ClientLogoSlider />
            <section className="shopify-why pb-5">
                <Container>
                    <Row>
                        <Col md={12} lg={6}>
                            <div>
                                <Title title={'Custom WooCommerce Development Company'} />
                                {/* <h2>Custom WooCommerce Development Company</h2> */}
                                <Description
                                    // mdalign={'center'}
                                    Des="Deploy a dedicated team of WooCommerce developers and design experts in ingenious WooCommerce theme development, plug-in development and WooCommerce app development perfectly suited to your enterprise needs."
                                />
                                {/* <p>Deploy a dedicated team of WooCommerce developers and design experts in ingenious WooCommerce theme development, plug-in development and WooCommerce app development perfectly suited to your enterprise needs.</p> */}

                                <Description
                                    // mdalign={'center'}
                                    Des="Access 24×7 support focused on resolving bugs and problems pertaining to operations and even migration. Evoke world-class infrastructure and resources skilled in creating superlative WooCommerce web development
                                    applications, stores, and websites with high security standards coupled with crucial features like budgeting and accounting tools that ensure a quality product developed bespoke to your enterprise’s requirements.
                             "
                                />
                                {/* <p>
                                    Access 24×7 support focused on resolving bugs and problems pertaining to operations and even migration. Evoke world-class infrastructure and resources skilled in creating superlative WooCommerce web development
                                    applications, stores, and websites with high security standards coupled with crucial features like budgeting and accounting tools that ensure a quality product developed bespoke to your enterprise’s requirements.
                                </p> */}
                            </div>
                        </Col>
                        <Col md={12} lg={6}>
                            <div>
                                <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757581253/webdads2u/woo-commerce/woocommerce.png" alt="woocommerce" className="w-100 rounded" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Woocommerceslider />
            <section className="our-wocom pt-5 pb-5" style={{ background: '#f5f5f5' }}>
                <Container>
                    <Row style={{ gap: ismobile ? '20px' : '0px' }}>
                        <div className="text-center pb-3">
                            <Title title={'Our Woocommerce Development Services '} />
                            {/* <h2>Our Woocommerce Development Services </h2> */}
                            <Description
                                mdalign={'center'}
                                Des="Explore our comprehensive WooCommerce Development Services tailored to elevate your online store. From custom theme design to seamless integration of advanced functionalities, we specialize in crafting solutions that
                                align with your unique business needs. Our experienced team ensures meticulous attention to detail at every stage of development, delivering high-quality, bug-free solutions."
                            />
                            {/* <p>
                                Explore our comprehensive WooCommerce Development Services tailored to elevate your online store. From custom theme design to seamless integration of advanced functionalities, we specialize in crafting solutions that
                                align with your unique business needs. Our experienced team ensures meticulous attention to detail at every stage of development, delivering high-quality, bug-free solutions.{' '}
                            </p> */}
                        </div>
                        <Col md={6} lg={4} xs={12}>
                            <div className="woocom-box text-center  card" style={{ height: '350px' }}>
                                <img
                                    src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757581318/webdads2u/woo-commerce/icons/woo-commerce-website-development.png"
                                    alt="woo-commerce-website-development"
                                    width={50}
                                    style={{ margin: 'auto' }}
                                ></img>

                                <div className="card-content p-2 text-start" style={{ textAlign: 'center' }}>
                                    <h4>WooCommerce Website Development</h4>
                                    <p>Take advantage of our best-in-class WooCommerce development services by working with us to design, customize, and deploy your website.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} lg={4} xs={12}>
                            <div className="woocom-box text-center wocom-rgt card " style={{ height: '350px' }}>
                                <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757581307/webdads2u/woo-commerce/icons/ux-ui-development.png" alt="ux-ui" width={50} style={{ margin: 'auto' }}></img>

                                <div className="card-content p-2 text-start" style={{ textAlign: 'center' }}>
                                    <h4>UI/UX Development</h4>
                                    <p>We build amazing and customer-centric UI/UX designs. The fulfillment and experience of customers when they explore the WooCommerce app are enhanced by a well-designed UI/UX design.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} lg={4} xs={12}>
                            <div className="woocom-box text-center card " style={{ height: '350px' }}>
                                <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757581312/webdads2u/woo-commerce/icons/support.png" alt="support" width={50} style={{ margin: 'auto' }}></img>

                                <div className="card-content p-2 text-start" style={{ textAlign: 'center' }}>
                                    <h4>Support & Maintenance Of WooCommerce</h4>
                                    <p>We provide all of the WooCommerce support services you require. We can offer you the best services available in India under the guidance of our skilled team of developers.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="shopify-why pt-5 pb-5">
                <Container>
                    <Row>
                        <div className="text-center pb-2">
                            <h2>Benefits of OpenCart Development </h2>
                        </div>
                        <Col md={12} lg={6}>
                            <div>
                                <p>In today’s eCommerce landscape, WooCommerce development stands out as the preferred choice. Its myriad benefits continue to impress businesses and users alike, making it a favored option in the digital market.</p>
                                <ul style={{ listStyle: 'none' }}>
                                    <li>
                                        <IoMdCheckboxOutline style={{ color: '#E3243B' }} /> Once the website is made, most of the time it gets difficult to make changes to it. The ability to make changes is extremely easy with WooCommerce
                                        development and its themes.
                                    </li>
                                    <li>
                                        <IoMdCheckboxOutline style={{ color: '#E3243B' }} /> WooCommerce has a wide range of advanced features that every modern online shop requires. This means you can keep your website future-proof.
                                    </li>
                                    <li>
                                        <IoMdCheckboxOutline style={{ color: '#E3243B' }} /> WooCommerce has many official extensions to choose from, including analytics, payments, shipping, marketing, and accounting.{' '}
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={12} lg={6}>
                            <div>
                                <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757581263/webdads2u/woo-commerce/racepro.png" alt="racepro" className="w-100 rounded" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="looking-wecomm">
                <Container>
                    <Row>
                        <div className="text-center">
                            <Title color="white" title={'Looking for Woo commerce Development? '} />
                            {/* <h2>Looking for Woo commerce Development? </h2> */}
                            <Description mdalign={'center'} color={'white'} Des={'You are at the right place… Contact us today!'} />
                            {/* <p>You are at the right place… Contact us today!</p> */}
                            <a href="/contact-us/">
                                <Button variant="contained">Connect For Free Consultation</Button>
                            </a>
                        </div>
                    </Row>
                </Container>
            </section>
            {/* <WoocomFaq /> */}
            <BrochureFaq />
            {/* <SocialMedia /> */}
        </>
    );
}

export default WoocommerceHero;
