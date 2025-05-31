import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import "../app/hero-section/footer.scss";
import { RiMedalLine } from 'react-icons/ri';
import { IoSettingsOutline } from 'react-icons/io5';
import { IoShieldCheckmarkOutline } from 'react-icons/io5';
import Image from 'next/image';
import Robart from '../public/webdads/images/home/robart.webp';
import Formsection from './Formsection';
import Industries from './Industries';

function Herosection() {
    return (
        <>
            <section className="pt-5 ">
                <Container>
                    <Row>
                        <Col md={7}>
                            <div className="Hero-content">
                                <h1>Better Digitalization Solution to Transform your Business</h1>
                                <p>Our expertise in bringing ideas to reality help your market place </p>
                            </div>
                            {/* <Row>
                                <Col md={4} xs={4}>
                                    <div className="service-icon">
                                        <RiMedalLine />
                                        <h4>Web Development</h4>
                                    </div>
                                </Col>
                                <Col md={4} xs={4}>
                                    <div className="service-icon">
                                        <IoSettingsOutline />
                                        <h4>Digital Marketing</h4>
                                    </div>
                                </Col>
                                <Col md={4} xs={4}>
                                    <div className="service-icon crm-icn">
                                        <IoShieldCheckmarkOutline />
                                        <h4>CRM & ERP Development</h4>
                                    </div>
                                </Col>
                            </Row> */}
                            <Row>
                                <Col md={4} xs={4}>
                                    <a
                                        href="/website-development/"
                                        rel="noopener noreferrer"
                                        target="_self"
                                        className="text-decoration-none"
                                        style={{ color: 'inherit' }} // Inherit color from parent
                                    >
                                        <div className="service-icon">
                                            <RiMedalLine />
                                            {/* <img src="https://res.cloudinary.com/dbpv95wd8/images/v1701068652/Medal-B-2/Medal-B-2.png?_i=AA" alt="Web Development" className="img-fluid" /> */}
                                            <h4>Web Development</h4>
                                        </div>
                                    </a>
                                </Col>
                                <Col md={4} xs={4}>
                                    <a
                                        href="/digital-marketing-agency/"
                                        rel="noopener noreferrer"
                                        target="_self"
                                        className="text-decoration-none" // Bootstrap classes for text decoration and color
                                        style={{ color: 'inherit' }} // Inherit color from parent
                                    >
                                        <div className="service-icon">
                                            <IoSettingsOutline />
                                            <h4>Digital Marketing</h4>
                                        </div>
                                    </a>
                                </Col>
                                <Col md={4} xs={4}>
                                    <a
                                        href="/crm-erp-development/"
                                        rel="noopener noreferrer"
                                        target="_self"
                                        className="text-decoration-none" // Bootstrap classes for text decoration and color
                                        style={{ color: 'inherit' }} // Inherit color from parent
                                    >
                                        <div className="service-icon crm-icn">
                                            <IoShieldCheckmarkOutline />
                                            <h4>CRM & ERP Development</h4>
                                        </div>
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={5}>
                            <div className="robort">
                                <Image src={Robart} alt="Web Design Company In Chennai & Web Development Company In Chennai" className="img-fluid" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* <Formsection/>
     <Industries/> */}
        </>
    );
}

export default Herosection;
