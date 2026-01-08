'use client';
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import '../style/WebDesigningSection.css';
import { MdNavigateNext } from "react-icons/md";

const WebDesigningSection = () => {

    const sections = [
        { 
            title: "WordPress Website Development",
            desc: `Webdads2u Pvt. Ltd. is a leading wordpress development company in 
chennai, India, specializing in custom, secure, and high-performance 
WordPress websites. Our expert team excels in theme customization, plugin 
development, and tailored WordPress solutions that align with each client’s 
unique goals and industry standards.`,
            image: "https://assets.webdads2u.com/images/mock-design.webp"
        },

        { 
            title: "PHP Website Development",
            desc: `Webdads2u Pvt. Ltd., a top web design and development company in Chennai, 
            specializes in custom PHP websites, delivering high-performance, reliable, and 
            client-focused solutions.`,
            image: "https://assets.webdads2u.com/images/ecr-holidays.webp"
        },

        { 
            title: "React JS Website Development",
            desc: `Webdads2u Pvt. Ltd. is a trusted ReactJS development company in Chennai, delivering 
            fast, scalable, and high-performance web applications. We build SPAs, dashboards, and 
            custom React solutions with reusable components, smooth navigation, and optimized 
            performance.`,
            image: "https://assets.webdads2u.com/images/best-india-kart.webp"
        },
    ];

    return (
        <div className='scroll-web'>

            {/* Heading Section */}
            <div className='our-full-site'>
                <h2>Our full-suite web <br/>development services</h2>
                <p>Future-ready websites crafted to perform, protect, and grow with your business.</p>
            </div>

            {/* Desktop Scroll Section */}
            <div className="scroll-stack-container">
                {sections.map((section, i) => (
                    <Container key={i} className="stack-section">
                        <Row>
                            <Col lg={6} className="d-flex align-items-center">
                                <section>
                                    {/* FIXED — NO NESTED H3 */}
                                    <h3 className="web-sec-h3">{section.title}</h3>
                                    <p className="slide-para">{section.desc}</p>
                                </section>
                            </Col>

                            <Col lg={6}>
                                <img src={section.image} alt={section.title} />
                            </Col>
                        </Row>
                    </Container>
                ))}
            </div>

            {/* Mobile Section */}
            <div className='mobilephp-web-dev pt-5'>
                <Container className='WebDesigning-Images'>
                    {sections.map((section, i) => (
                        <Row className='mobileSpace php-mobile-web-dev' key={i}>
                            
                            <Col sm={12}>
                                <img src={section.image} alt={section.title} className='pb-4' />
                            </Col>

                            <Col sm={12} className='d-flex align-items-center'>
                                <section className='WebDesigning-Images-section1'>
                                    <h3>{section.title}</h3>
                                    <h6>{section.desc}</h6>
                                    <a href="#">
                                        Explore more <MdNavigateNext />
                                    </a>
                                </section>
                            </Col>

                        </Row>
                    ))}
                </Container>
            </div>

        </div>
    )
}

export default WebDesigningSection;
