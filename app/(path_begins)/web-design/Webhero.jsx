import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import Webfqa from './Webfqa';
import dynamic from 'next/dynamic';
const WebDesingWhyChooseUsSlider = dynamic(() => import('./WebDesingWhyChooseUsSlider'), { ssr: false });
const Counter = React.lazy(() => import('../../../components/Counter'));
const Slider = dynamic(() => import('../../../components/common/Slider-image'), { ssr: false });

function Webhero() {
    return (
        <>
            <section className="webdesign-hero">
                <Container>
                    <Row style={{ padding: '0px 0px 80px 0px' }}>
                        <Col md={7}>
                            <div >
                                <h2>Elevating your Business with our speculative web designing services</h2>
                                <p>Enhancing customer engagement with perfect web design</p>
                                <p>Are you looking for a new website for your startup company / Business? </p>
                                <p>Do you want to revamp your existing website? </p>
                                <p>
                                    <a href="/contact-us">
                                        <Button variant="outlined">Talk to us</Button>
                                    </a>
                                </p>
                            </div>
                        </Col>
                        <Col md={5}>
                            <div className="hero-imgs">
                                <img alt="" src="/webdads/images/webdesign/banner-icons-link.png" className="www-icon"></img>
                                <img alt="" src="/webdads/images/webdesign/banner-icons-2.png" className="system-icon"></img>
                                <img alt="" src="/webdads/images/webdesign/hero-slider.png" className="w-100 web-heros"></img>
                                <img alt="" src="/webdads/images/webdesign/html.png" className="webhtml"></img>
                                <img alt="" src="/webdads/images/webdesign/banner-icons-setting.png" className="web-setting"></img>
                                <img alt="" src="/webdads/images/webdesign/banner-icons-hosting.png" className="web-host"></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Slider />
            <section className="pt-5 pb-5">
                <Container>
                    <Row>
                        <Col>
                            <div className="text-center why-chose">
                                <h3>WHY TO CHOOSE</h3>
                                <h2>Top reasons to choose the webdads2u IT Solution-web designing services </h2>
                                <p>
                                    At Webdads2u, our edge lies in delivering exemplary website designing services. Our seasoned experts tailor innovative approaches to match your unique needs, ensuring future-proof solutions. Customization is our
                                    forte, crafting precise strategies for diverse business goals. Reliability defines us, offering seamless operations and dependable support. Our commitment to affordability guarantees top-tier web designing services
                                    without straining budgets. Choose Webdads2u for unmatched excellence in website design, ensuring a tailored approach for your success.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Counter />
            <section className="our-webdesign pb-5 mt-5">
                <Container>
                    <Row className="align-items-center">
                        <Col md={12} lg={6}>
                            <div >
                                <img alt="Website Design Company In Chennai " src="/webdads/images/webdesign/mac-design.webp" className="w-100"></img>
                            </div>
                        </Col>
                        <Col md={12} lg={6}>
                            <div >
                                <h2>Our Website Designing Streams </h2>
                                <p>
                                    Our Website Designing Streams encompass comprehensive web designing services. We specialize in crafting visually appealing, user-centric websites tailored to your brand. With a focus on aesthetics and
                                    functionality, our expertise ensures standout online experiences. Trust us for top-tier web designing services that elevate your digital presence.
                                </p>
                                <div className="d-flex">
                                    <div >
                                        <div className="d-flex align-items-center pt-3">
                                            <img alt="" src="/webdads/images/webdesign/domain-registretion.png"></img>
                                            <h5>Domain Registration</h5>
                                        </div>
                                        <div className="d-flex align-items-center pt-3">
                                            <img alt="" src="/webdads/images/webdesign/domain-registretion.png"></img>
                                            <h5>Custom web design</h5>
                                        </div>
                                        <div className="d-flex align-items-center pt-3">
                                            <img alt="" src="/webdads/images/webdesign/domain-registretion.png"></img>
                                            <h5> HTML website design</h5>
                                        </div>
                                        <div className="d-flex align-items-center pt-3">
                                            <img alt="" src="/webdads/images/webdesign/domain-registretion.png"></img>
                                            <h5> Website Redesign</h5>
                                        </div>
                                    </div>
                                    <div >
                                        <div className="d-flex align-center pt-3">
                                            <img alt="" src="/webdads/images/webdesign/domain-registretion.png"></img>
                                            <h5>Hosting</h5>
                                        </div>
                                        <div className="d-flex align-center pt-3">
                                            <img alt="" src="/webdads/images/webdesign/domain-registretion.png"></img>
                                            <h5>Responsive website</h5>
                                        </div>
                                        <div className="d-flex align-center pt-3">
                                            <img alt="" src="/webdads/images/webdesign/domain-registretion.png"></img>
                                            <h5>UI&UX Design</h5>
                                        </div>
                                        <div className="d-flex align-center pt-3">
                                            <img alt="" src="/webdads/images/webdesign/domain-registretion.png"></img>
                                            <h5>Website Maintanence</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <WebDesingWhyChooseUsSlider />
            <section className="technology pt-5">
                <Container>
                    <Row>
                        <div className="text-center">
                            <h3>Technology Stack</h3>
                            <p>From comprehensive brand strategy solutions, to smaller, one-off boutique logo identities, webdads2u delivers unique and memorable brands, designed to differentiate your business and propel you into the future.</p>
                        </div>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <div className="text-end pt-5 stream-websec">
                                <img alt="" src="/webdads/images/webdesign/stream-icon-php.webp"></img>
                            </div>
                            <div className="text-center PT-5 mt-5 stream-websec">
                                <img alt="" src="/webdads/images/webdesign/stream-icon-.net.webp"></img>
                            </div>
                            <div className="text-end PT-5 mt-5 stream-websec">
                                <img alt="" src="/webdads/images/webdesign/stream-icon-mysql.webp"></img>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="text-center stream-websec">
                                <img alt="" src="/webdads/images/webdesign/stream-2-typo-3.png"></img>
                            </div>
                            <div >
                                <img alt="" src="/webdads/images/webdesign/webdesign-robot.webp" style={{ maxWidth: '300px' }}></img>
                            </div>
                            <div className="text-center stream-websec">
                                <img alt="" src="/webdads/images/webdesign/stream-2-joomla.webp"></img>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="pt-4 mt-4 stream-websec">
                                <img alt="" src="/webdads/images/webdesign/stream-2-mango-dp.webp"></img>
                            </div>
                            <div className="text-center pt-4 mt-4 stream-websec">
                                <img alt="" src="/webdads/images/webdesign/stream-icon-angular.webp"></img>
                            </div>
                            <div className=" pt-4 mt-4 stream-websec">
                                <img alt="" src="/webdads/images/webdesign/stream-icon-wordpress.webp"></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="out-port">
                <Container>
                    <Row>
                        <div className="text-center">
                            <h2>Our Portfolio</h2>
                            <h3>100+</h3>
                        </div>
                    </Row>
                    <Row style={{ marginTop: '-50px' }}>
                        <Col md={4}>
                            <div >
                                <img alt="" src="/webdads/images/webdesign/Atgomat.webp"></img>
                            </div>
                            <div className="text-end" style={{ marginTop: '-50px' }}>
                                <img alt="" src="/webdads/images/webdesign/arc-man.webp"></img>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div >
                                <img alt="" src="/webdads/images/webdesign/raj-vision.webp"></img>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="text-end">
                                <img alt="" src="/webdads/images/webdesign/adsfit-design.webp"></img>
                            </div>
                            <div >
                                <img alt="" src="/webdads/images/webdesign/what-do.webp" style={{ width: '40%' }}></img>
                            </div>
                            <div className="text-end" style={{ marginTop: '-100px' }}>
                                <img alt="" src="/webdads/images/webdesign/knowkart.webp"></img>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <div className="text-center">
                            <a href="/domain-registration">
                                <Button variant="contained">Domain Registration</Button>
                            </a>
                            <a href="/web-hosting-service">
                                <Button variant="contained">Hosting</Button>
                            </a>
                            <a href="/custom-web-design">
                                <Button variant="contained">Custom web design</Button>
                            </a>
                            <a href="/responsive-website">
                                <Button variant="contained">Responsive website</Button>
                            </a>
                            <a href="/ui-ux">
                                <Button variant="contained">UI & UX design </Button>
                            </a>
                            <a href="/html5">
                                <Button variant="contained">HTML website design </Button>
                            </a>
                            <a href="/website-redesign">
                                <Button variant="contained">Website Redesign </Button>
                            </a>
                            <a href="/website-maintenance">
                                <Button variant="contained">Website Maintanence</Button>
                            </a>
                        </div>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <div ></div>
                    </Row>
                </Container>
            </section>
            <section className="creating-process">
                <Container>
                    <Row style={{ justifyContent: 'unset' }}>
                        <div >
                            <h2>Our Website Creating Process</h2>
                        </div>
                        <Col lg={3} md={4} sm={6} xs={12} className="mt-5">
                            <div className="require-box">
                                <h5>01</h5>
                                <img alt="" src="/webdads/images/webdesign/Requirement.png"></img>
                                <h6>Requirement Gathering</h6>
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12} className="mt-5">
                            <div className="require-box">
                                <h5>02</h5>
                                <img alt="" src="/webdads/images/webdesign/planning.png"></img>
                                <h6>planning</h6>
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12} className="mt-5">
                            <div className="require-box">
                                <h5>03</h5>
                                <img alt="" src="/webdads/images/webdesign/UX-Strategy.png"></img>
                                <h6>ux strategy</h6>
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12} className="mt-5">
                            <div className="require-box">
                                <h5>04</h5>
                                <img alt="" src="/webdads/images/webdesign/wireframe.png"></img>
                                <h6>wireframe creation</h6>
                            </div>
                        </Col>
                        {/* </Row>
                    <Row className="pt-5" style={{ justifyContent: 'unset' }}> */}
                        <Col lg={3} md={4} sm={6} xs={12} className="mt-5">
                            <div className="require-box">
                                <h5>05</h5>
                                <img alt="" src="/webdads/images/webdesign/Building-Prototype.png"></img>
                                <h6>building prototype</h6>
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12} className="mt-5">
                            <div className="require-box">
                                <h5>06</h5>
                                <img alt="" src="/webdads/images/webdesign/pen-icon.png"></img>
                                <h6>creating visual design</h6>
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12} className="mt-5">
                            <div className="require-box">
                                <h5>07</h5>
                                <img alt="" src="/webdads/images/webdesign/Final-Branding.png"></img>
                                <h6>final branding</h6>
                            </div>
                        </Col>
                    </Row>
                    <Row className="pt-5">
                        <h2>What Enterprises can expect from webdads2u Technologies?</h2>
                        <Col sm={6} md={4}>
                            <div className="webdesign-standards-technologies-section">
                                <div className="text-center">
                                    <img alt="" src="/webdads/images/webdesign/standard.png"></img>
                                    <h4>Design Standards</h4>
                                </div>
                                <p>
                                    Embrace our Design Standards for exceptional web designing services. We uphold meticulous design principles, ensuring visually stunning and functional websites that elevate your online presence. With a focus on
                                    user experience, we set the standard for impactful and engaging digital solutions.
                                </p>
                            </div>
                        </Col>
                        <Col sm={6} md={4}>
                            <div className="webdesign-standards-technologies-section">
                                <div className="text-center">
                                    <img alt="" src="/webdads/images/webdesign/security.png"></img>
                                    <h4>Security</h4>
                                </div>
                                <p>
                                    Security is at the core of everything we do at webdads2u Technologies. We implement robust security measures to protect your enterprise data and user information. From encryption to regular audits and best
                                    practices, we prioritize ensuring airtight security across all our solutions, giving you peace of mind in an increasingly digital world.{' '}
                                </p>
                            </div>
                        </Col>
                        <Col sm={6} md={4}>
                            <div className="webdesign-standards-technologies-section">
                                <div className="text-center">
                                    <img alt="" src="/webdads/images/webdesign/unique.png"></img>
                                    <h4>Unique CreationSecurity</h4>
                                </div>
                                <p>
                                    Our commitment to unique creations sets us apart. We specialize in crafting bespoke solutions tailored to your enterprise’s specific needs and preferences. Our team ensures that your digital footprint stands out in
                                    the crowd. Our focus on uniqueness extends to our web designing services, providing tailor-made solutions that align perfectly with your brand’s identity and objectives.
                                </p>
                            </div>
                        </Col>
                        {/* </Row> */}
                        {/* <Row > */}
                        <Col sm={6} md={4}>
                            <div className="webdesign-standards-technologies-section">
                                <div className="text-center">
                                    <img alt="" src="https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_70,h_70,dpr_1.5/f_auto,q_auto/v1704460504/industrial-standard/industrial-standard.png?_i=AA"></img>
                                    <h4>Industrial Standards</h4>
                                </div>
                                <p>
                                    Adhering to industry standards is a cornerstone of our approach. At webdads2u Technologies, we ensure that every project meets and often surpasses the established industrial norms. Our solutions are designed and
                                    developed with a focus on compliance, reliability, and scalability, aligning seamlessly with industry best practices.{' '}
                                </p>
                            </div>
                        </Col>
                        <Col sm={6} md={4}>
                            <div className="webdesign-standards-technologies-section">
                                <div className="text-center">
                                    <img alt="" src="https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_63,h_53,dpr_1.5/f_auto,q_auto/v1704460637/colour-capability/colour-capability.png?_i=AA" />
                                    <h4>Colour Compatibility</h4>
                                </div>
                                <p>
                                    Understanding the importance of branding consistency, we prioritize color compatibility in our designs. We maintain color harmony, reinforcing your enterprise’s brand recognition and credibility across all
                                    platforms. This attention to detail is reflected in our web designing services, ensuring cohesive and visually appealing digital experiences for your audience.{' '}
                                </p>
                            </div>
                        </Col>
                        <Col sm={6} md={4}></Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row className="elevate">
                        <Col md={5}>
                            <h2>Elevate your website to New Heights!</h2>
                            <a href="https://www.facebook.com/Webdads2u">
                                <Button variant="contained">Talk to Us</Button>
                            </a>
                        </Col>
                        <Col md={7}>
                            <img alt="" src="/webdads/images/webdesign/eve-group.webp"></img>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="webdesign-fqa">
                <Container>
                    <h2 className="webdesign-fqa-title-webd-design">Frequently asked questions</h2>
                    <Row>
                        <Webfqa />
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Webhero;
