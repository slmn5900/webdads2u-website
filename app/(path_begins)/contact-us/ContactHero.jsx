import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './contact.scss';
import ContactForm from './ContactForm';

const ContactHero = () => {
    return (
        <>
            <section className="pt-5 pb-5 contact-sec">
                <Container>
                    <Row>
                        <Col md={6} lg={6}>
                            <div className="">
                                <h2>
                                    Grow Your Business With <span style={{ color: '#871752' }}>Our Expertise</span>
                                </h2>
                            </div>
                        </Col>
                        <Col md={6} lg={6}>
                            <div className="">
                                <p>We acknowledge the significance of taking a holistic approach to every task and hold belief in the potency of simplicity in our Web Design & Development Company in Chennai.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="pt-5">
                        <Col md={12} lg={4}>
                            <div className="contactboxel">
                                <img alt="" src="/webdads/images/contact/google-map.webp"></img>
                                <h3>Office Address</h3>
                                <p>No:S19, Subham Complex 2nd Floor , North Park Street, Ambattur O.T, Chennai, Tamil Nadu 600053.</p>
                            </div>

                            <div className="contactboxel">
                                <img alt="" src="/webdads/images/contact/phone.webp"></img>
                                <h3>Office Number</h3>
                                <p>
                                    <a href="tel:+91-8825607550">+91-8825607550</a>
                                </p>
                                <p>
                                    <a href="tel:+91-6382253490">+91-6382253490</a>
                                </p>
                            </div>
                            <div className="contactboxel">
                                <img alt="" src="/webdads/images/contact/email.webp"></img>
                                <h3>Mail Address</h3>
                                <p>
                                    <a href="mailto:info@webdads2u.com">info@webdads2u.com</a>
                                </p>
                            </div>
                        </Col>
                        <Col md={12} lg={8}>
                            <ContactForm />
                        </Col>
                    </Row>
                </Container>
            </section>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31085.565164385745!2d80.13227548759437!3d13.118457277536018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263b1928289df%3A0x34ab890c88496a16!2sWEBDADS2U%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1700660422038!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: '0',width: '100%', height: '400px' }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </>
    );
};

export default ContactHero;
