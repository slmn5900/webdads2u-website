import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
function Fluterwave() {
    return (
        <>
            <section className="fluter-wave-box">
                <Container>
                    <Row>
                        <Col md={6} lg={4}>
                            <div className="crm-box">
                                <div className="d-flex flex-column flex-md-row align-items-center">
                                    <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757572066/webdads2u/flutter-app-development/icons/constantly-evolving-platform.png" alt="CRM Software Solutions" />
                                    <h2>Constantly Evolving Platform</h2>
                                </div>
                                <p>Unlock business potential with our advanced CRM software. Tailored features enhance customer interactions, streamline workflows, and boost overall efficiency.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="crm-box">
                                <div className="d-flex flex-column flex-md-row  align-items-center">
                                    <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757572062/webdads2u/flutter-app-development/icons/high-speed-development.png" alt="CRM Maintenance and Upgrades" />
                                    <h2>High Speed Development</h2>
                                </div>
                                <p>Maintain optimal performance by taking advantage of our CRM maintenance and upgrade services. Keep up with the most recent features, security patches, and seamless system enhancements.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="crm-box">
                                <div className="d-flex flex-column flex-md-row  align-items-center">
                                    <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757572057/webdads2u/flutter-app-development/icons/single-codebase-for-all.png" alt="CRM Integration Services" />
                                    <h2>Single Codebase for All</h2>
                                </div>
                                <p>Our CRM integration services allow you to connect your systems with ease. Increase data flow, enhance communication, and obtain a unified perspective for enhanced decision-making.</p>
                            </div>
                        </Col>

                        <Col md={6} lg={4}>
                            <div className="crm-box">
                                <div className="d-flex flex-column flex-md-row  align-items-center">
                                    <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757572078/webdads2u/flutter-app-development/icons/impressive-time-to-market.png" alt="CRM Process Automation Solutions" />
                                    <h2>Impressive Time to Market</h2>
                                </div>
                                <p>Our CRM process automation solutions can increase productivity. Conveniently streamline repetitive tasks, minimize manual errors, and enhance overall operational efficiency.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="crm-box">
                                <div className="d-flex flex-column flex-md-row  align-items-center">
                                    <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757572074/webdads2u/flutter-app-development/icons/robust-widget-implementation.png" alt="CRM Mobile Application" />
                                    <h2>Robust Widget Implementation</h2>
                                </div>
                                <p>Stay connected on the go with our CRM mobile application. To increase agility, it is important to have access to real-time data, manage leads, and nurture customer relationships anytime.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="crm-box">
                                <div className="d-flex flex-column flex-md-row  align-items-center">
                                    <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757572070/webdads2u/flutter-app-development/icons/faster-and-continuous-testing.png" alt="CRM Migration Solutions" />
                                    <h2>Faster and Continuous Testing</h2>
                                </div>
                                <p>Upgrade effortlessly with our CRM migration solutions. Seamlessly transition data, maintain system integrity, and ensure a smooth migration process for uninterrupted business operations.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="empt-wave">
                <Row>
                    <Col className="text-center">
                        <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                            <defs>
                                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"></path>
                            </defs>
                            <g className="parallax">
                                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#ECFCF9E6" />
                            </g>
                        </svg>
                    </Col>
                </Row>
            </section>
        </>
    );
}

export default Fluterwave;
