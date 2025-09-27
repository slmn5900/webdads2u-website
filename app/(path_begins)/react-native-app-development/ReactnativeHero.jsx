import React from 'react';
import SocialMedia from '../../../components/common/SocialMedia';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Slider from '../../../components/common/Slider-image';
import MobileUiUxHero from './Component/MobileUiUxHero';
import { Box } from '@mui/material';
import ClientLogoSlider from '../../../components/ui/client-logo-slider/ClientLogoSlider';
import Title from '../../../components/Title';
import Description from '../../../components/Description';
function ReactnativeHero() {
    return (
        <>
            {/* Hero section */}
            {/* <section className="mobileuiux">
                <Container>
                    <Row className="align-items-center">
                        <Col md={7} xs={6} lg={6}>
                            <h2>React Native App Development</h2>
                            <p>Efficient React Native development empowers cross-platform app creation with native performance and UI flexibility.</p>
                            <a href="/contact-us/">
                                <Button variant="contained">Contact us</Button>
                            </a>
                        </Col>
                        <Col md={5} xs={5} lg={6}>
                            <div className="hero-rotate">
                                <img
                                    src="/webdads/images/reactnative/mobile.png"
                                    alt="React Native App Development Company In Chennai
"
                                    className="w-100"
                                />
                                <img src="/webdads/images/reactnative/react-native.png" alt="mobileuiux-hero" className="react-scroll" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section> */}
            <MobileUiUxHero />
            {/* Slider */}
            <ClientLogoSlider />
            {/*  */}
            <section className="react-nativeimhr pb-5">
                <Container>
                    <Row className="align-items-center">
                        <div className="text-center">
                            <Title title={'Our React Native Development Capabilities'} />
                            {/* <h2>Our React Native Development Capabilities</h2> */}
                            <Description
                                Des="Our React Native development capabilities include expertise in building cross-platform mobile applications with native performance and UI flexibility. We leverage React Native’s powerful framework to create efficient,
                                scalable, and visually appealing mobile solutions for our clients.
                            "
                            />
                            {/* <p>
                                Our React Native development capabilities include expertise in building cross-platform mobile applications with native performance and UI flexibility. We leverage React Native’s powerful framework to create efficient,
                                scalable, and visually appealing mobile solutions for our clients.
                            </p> */}
                        </div>

                        <Col md={12} lg={6}>
                            <div>
                                <Title title={'What Is React Native Development?'} />
                                {/* <h2>What Is React Native Development?</h2> */}
                                <Description
                                    Des="                                    React Native App development is the process of creating mobile applications using the React Native framework, which allows developers to build cross-platform apps using JavaScript and React. It offers native-like
                                    performance and enables code reuse across different platforms."
                                />
                                {/* <p>
                                    {' '}
                                    React Native App development is the process of creating mobile applications using the React Native framework, which allows developers to build cross-platform apps using JavaScript and React. It offers native-like
                                    performance and enables code reuse across different platforms.{' '}
                                </p> */}
                            </div>
                        </Col>
                        <Col md={12} lg={6}>
                            <div>
                                <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757573264/webdads2u/react-native-app-development/react-native-development.png" alt="react native development" className="w-100 rounded" />
                            </div>
                        </Col>

                        <Col md={12} lg={6}>
                            <div>
                                <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757573261/webdads2u/react-native-app-development/app-development.png" alt="app development" className="w-100 rounded" />
                            </div>
                        </Col>
                        <Col md={12} lg={6}>
                            <div className="mt-5">
                                <Title title={'Why React Native App Development?'} />
                                {/* <h2>Why React Native App Development?</h2> */}
                                <Description
                                    Des="React Native app development offers numerous benefits, including cross-platform compatibility, faster development cycles, code reusability, native performance, and a large community of developers. It enables
                                    efficient creation of mobile apps with a single codebase for multiple platforms.
                                "
                                />
                                {/* <p>
                                    React Native app development offers numerous benefits, including cross-platform compatibility, faster development cycles, code reusability, native performance, and a large community of developers. It enables
                                    efficient creation of mobile apps with a single codebase for multiple platforms.
                                </p> */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="our-native pt-5 pb-5" style={{ background: '#f5f5f5' }}>
                <Container>
                    <Row>
                        <div className="text-center">
                            <Title title={'Advantages Of Using React Native'} />
                            {/* <h2>Advantages Of Using React Native</h2> */}
                        </div>
                        <Col md={6} lg={4}>
                            <div className="shopify-weoffer">
                                <img alt="" src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757573505/webdads2u/react-native-app-development/icons/cross-platform-capability.png"></img>
                                <h3>Cross-Platform Capability </h3>
                                <p>React Native App development enables cross-platform capability, allowing apps to run seamlessly on both iOS and Android devices.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="shopify-weoffer">
                                <img alt="" src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757573510/webdads2u/react-native-app-development/icons/declarative-style.png"></img>
                                <h3>Declarative Style </h3>
                                <p>React Native App development utilizes a declarative style, simplifying UI development by expressing how the UI should look at any given moment.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="shopify-weoffer">
                                <img alt="" src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757573500/webdads2u/react-native-app-development/icons/performance.png"></img>
                                <h3>Class Performance </h3>
                                <p>React Native App development ensures class performance, providing apps with native-like speed and responsiveness for a seamless user experience across platforms.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="shopify-weoffer">
                                <img alt="" src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757573496/webdads2u/react-native-app-development/icons/web-app-development.png"></img>
                                <h3>Efficiency</h3>
                                <p>React Native App development offers efficiency by enabling code reusability, faster development cycles, and the ability to target multiple platforms with a single codebase.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="shopify-weoffer">
                                <img alt="" src="/webdads/images/reactnative/0ur-ecommerce-SEO-1.webp"></img>
                                <h3>UI Focused</h3>
                                <p>React Native App development is UI-focused, offering a rich set of components and tools for creating visually appealing and responsive user interfaces.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="shopify-weoffer">
                                <img alt="" src="/webdads/images/reactnative/0ur-ecommerce-SEO-1.webp"></img>
                                <h3>Readability</h3>
                                <p>React Native App development prioritizes readability, making it easier for developers to understand and maintain code, leading to more efficient development.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="react-nativebx pt-5 " style={{ background: '#f5f5f5' }}>
                <Container>
                    <Row>
                        <div className="text-center pb-3">
                            <Title title="React Native App Development Services "/>
                            {/* <h2>React Native App Development Services </h2> */}
                        </div>
                        <Col md={6} lg={4} xs={12}>
                            <div className="woocom-box text-center ">
                                <img src="/webdads/images/reactnative/website-reactnative.webp" alt="Web App Development"></img>
                                <h3>Web App Development </h3>
                                <p>React Native development also extends to web app development, enabling the creation of web applications using the same JavaScript and React principles.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4} xs={12}>
                            <div className="woocom-box text-center wocom-rgt">
                                <img src="/webdads/images/reactnative/mobile-reactnative.webp" alt="ux-ui"></img>
                                <h3>Mobile App Development</h3>
                                <p>React Native development specializes in mobile app development, allowing developers to build high-quality, cross-platform mobile applications using JavaScript and React.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4} xs={12}>
                            <div className="woocom-box text-center">
                                <img src="/webdads/images/reactnative/api-reactnative.webp" alt="support"></img>
                                <h3>API Integration </h3>
                                <p>React Native development facilitates seamless API integration, enabling mobile apps to communicate with backend servers and other external services efficiently.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4} xs={12}>
                            <div className="woocom-box text-center">
                                <img src="/webdads/images/reactnative/ecommerce-reactnative.webp" alt="support"></img>
                                <h3>E-Commerce App Development</h3>
                                <p>React Native development empowers e-commerce app development, providing the tools and flexibility to create feature-rich and visually appealing shopping experiences.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4} xs={12}>
                            <div className="woocom-box text-center wocom-rgt">
                                <img src="/webdads/images/reactnative/support-and-maintenance.webp" alt="support"></img>
                                <h3>QA And Testing Services</h3>
                                <p>React Native development includes comprehensive QA and testing services to ensure the reliability, performance, and security of mobile applications.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4} xs={12}>
                            <div className="woocom-box text-center">
                                <img src="/webdads/images/reactnative/website-reactnative.webp" alt="support"></img>
                                <h3>Support And Maintenance</h3>
                                <p>React Native development encompasses ongoing support and maintenance services, ensuring that mobile applications remain functional, secure, and up-to-date over time.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="looking-native">
                <Container>
                    <Row>
                        <div className="text-center">
                            <Box Component={'h3'} sx={{ fontSize: { xs: 20, md: 28 }, fontFamily: 'Poppins', color: 'white' }}>
                                Looking for Custom Web Application Development?
                            </Box>
                            <p>Send us your requirements. We will get back to you with a free quote.</p>
                            <a href="/contact-us/">
                                <Button variant="contained">Connect For Free Consultation</Button>
                            </a>
                        </div>
                    </Row>
                </Container>
            </section>

            {/* <SocialMedia /> */}
        </>
    );
}

export default ReactnativeHero;
