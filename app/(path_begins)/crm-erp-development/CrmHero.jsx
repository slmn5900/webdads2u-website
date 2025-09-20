import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import Slider from '../../../components/common/Slider-image';

function CrmHero() {
    return (
        <>
            <section className="crm-hero">
                <Container>
                    <Row className="align-items-center">
                        <Col md={7} xs={7}>
                            <div className="crmhro-cont">
                                <h1>“CRM is your GPS to a better route on your Business Development journey.” </h1>
                                <a href="/contact-us/">
                                    <Button>Contact us</Button>
                                </a>
                            </div>
                        </Col>
                        <Col md={5} xs={5}>
                            <div>
                                <img alt="" src="/webdads/images/crm/CRM-banner.png"></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Slider />
            <section className="streams">
                <Container>
                    <Row className="align-items-center">
                        <Col md={4}>
                            <h2>Our Streams</h2>
                        </Col>
                        <Col md={4}>
                            <div className="cust-crm">
                                <a href="/customized-crm/">
                                    <img alt="" src="/webdads/images/crm/data-structure.png"></img>
                                </a>
                                <a href="/customized-crm/">
                                    <h3>Customized CRM</h3>
                                </a>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="cust-crm">
                                <a href="/customized-erp/">
                                    <img alt="" src="/webdads/images/crm/setting.png"></img>
                                </a>
                                <a href="/customized-erp/">
                                    <h3>Customized ERP</h3>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="all-around">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <div>
                                <h2>All-around Tool For Your Business</h2>
                                <p>
                                    Best CRM for small businesses. Boost your business with our intuitive CRM tool. Streamline interactions, manage leads, and optimize sales effortlessly. Centralize communication, automate tasks, and gain valuable
                                    insights with robust reporting. Our customizable dashboards provide a 360-degree view, and seamless integration with popular apps ensures a connected ecosystem. Elevate customer satisfaction, drive loyalty, and
                                    stay ahead of the competition with our all-in-one CRM solution.
                                </p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className>
                                <img alt="" src="/webdads/images/crm/progress.png"></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="all-around custm-sys">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <div className>
                                <img alt="" src="/webdads/images/crm/left-bannar.png"></img>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div>
                                <h2>Custom CRM Systems</h2>
                                <p>
                                    Elevate your business with our Custom CRM Systems, a powerful tool for Customer Relationship Management. Our tailored solutions optimize processes, encourage collaboration, and deliver valuable insights. Experience
                                    enhanced customer engagement and fuel growth with a personalized CRM system crafted specifically for your unique needs.
                                </p>
                                <p>
                                    <FaCheckCircle /> Bespoke CRM Consultation
                                </p>
                                <p>
                                    <FaCheckCircle /> Personalized CRM Application{' '}
                                </p>
                                <p>
                                    <FaCheckCircle /> Training and Support{' '}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default CrmHero;
