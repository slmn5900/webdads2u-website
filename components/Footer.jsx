import { Container, Row, Col, Button } from 'react-bootstrap';
import React from 'react';
// import "../app/footer-style/footer.scss";
import Image from 'next/image';
import { FaPhone } from 'react-icons/fa';
import logoSrc from '../public/webdads/images/home/white-logo.png';
// import logoSrc from "../public/webdads/images/home/white-logo.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterest, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
function Footer() {
    const date = new Date();
    const getCurrentYear = date.getFullYear();
    return (
        <>
            <section className="footer-top">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="footer-top-content">
                                <h3>Our experienced IT staff can provide you with more Information</h3>
                                <p>We’re available for 24×7 hours a day! Contact to require detailed analysis and assessment of your plan.</p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="footer-top-phone-sec">
                                <a href="tel:+91-8825607550">
                                    <FaPhone />
                                </a>
                                <p>REACH OUT NOW!</p>
                                <Button variant="primary">Contact Us</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="footer-top-center">
                <Container>
                    <Row>
                        <Col md={6} lg={3}>
                            <div className="footer-top-center-icon">
                                <Image src={logoSrc} alt="Logo" />
                                {/* <Image src="webdads/images/home/white-logo.png" alt="Logo" /> */}
                                <ul className="d-flex p-0">
                                    <a href="https://www.facebook.com/Webdads2u">
                                        <li>
                                            <FaFacebookF />{' '}
                                        </li>
                                    </a>
                                    <a href="https://x.com/webdads2u">
                                        <li>
                                            <FaXTwitter />{' '}
                                        </li>
                                    </a>
                                    <a href="https://www.instagram.com/webdads2u/">
                                        <li>
                                            <FaInstagram />
                                        </li>
                                    </a>
                                    <a href="https://www.linkedin.com/company/webdads2u-private-limited/">
                                        <li>
                                            <FaLinkedinIn />
                                        </li>
                                    </a>
                                    <a href="https://in.pinterest.com/webdads2u/">
                                        <li>
                                            <FaPinterest />
                                        </li>
                                    </a>
                                    <a href="https://www.youtube.com/webdads2u">
                                        <li>
                                            <FaYoutube />
                                        </li>
                                    </a>
                                </ul>
                            </div>
                        </Col>
                        <Col md={6} lg={2}>
                            <div className="quicklinks">
                                <ul>
                                    <li>
                                        <a href="/work">Work</a>
                                    </li>
                                    <li>
                                        <a href="/contact-us">Contact us</a>
                                    </li>
                                    <li>
                                        <a href="/career">career</a>
                                    </li>
                                    <li>
                                        <a href="/blog">Blog</a>
                                    </li>
                                    <li>
                                        <a href="/privacy-policy">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="/terms-and-conditions">Terms and Conditions</a>
                                    </li>
                                    <li>
                                        <a href="/refund-policy">Refund Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={6} lg={3}>
                            <p>No:S19, Subham Complex 2nd Floor, North Park Street, Ambattur O.T, Chennai, Tamil Nadu – 600053 info@webdads2u.com</p>
                        </Col>
                        <Col md={4}>
                            <h3 style={{ textAlign: 'left' }}>We’re looking for talented passionate folks to join our team.</h3>
                            <span style={{ color: '#aaa', fontWeight: 'bold', fontSize: '24px', textAlign: 'left' }}>Jobs at Webdads2u</span>
                            <br />
                            <span style={{ color: '#aaa', fontWeight: 'bold', fontSize: '24px', textAlign: 'left' }}>About Webdads2u</span>
                            <br />
                            <span style={{ color: '#aaa', fontWeight: 'bold', fontSize: '24px', textAlign: 'left' }}>Get a Quotes</span>
                        </Col>
                    </Row>
                    <Row>
                        {/* <Col md={6}>
                            <h5>About Webdads2u</h5>
                        </Col>
                        <Col md={6}>
                            <h5>Get a Quotes</h5> 
                        </Col>*/}
                    </Row>
                    <Row>
                        <Col md={12}>
                            <div className="text-center pt-3">
                                <p>© {getCurrentYear} by WEBDADS2U PVT LTD.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>

        // OOTER CENTER
    );
}

export default Footer;
