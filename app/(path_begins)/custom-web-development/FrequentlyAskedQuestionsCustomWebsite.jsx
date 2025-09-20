'use client';
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

function Frequentlyaskedquestionscustomwebsite() {
    return (
        <section className="Frequentlyaskedquestionscustomwebsite-main">
            <div className="container">
                <div className="row text-center justify-content-center Frequentlyaskedquestionscustomwebsite-header">
                    <div className="col-sm-12 col-md-12 col-xl-10">
                        <h3>Frequently Asked Questions</h3>
                        <p>
                            Explore our FAQ section for quick answers to common inquiries about our Custom Website Development services, web hosting, design, development, and digital marketing solutions. Get insights into our process, timelines,
                            security measures, and more to make informed decisions for your online presence.
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center pt-3">
                    <div className="col-sm-12 col-md-12 col-lg-10">
                        <div className="FrequentlyAskedQuestions-customwebsite">
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>What is Custom Website Development?</Accordion.Header>
                                    <Accordion.Body>
                                        Custom Website Development involves creating websites or web applications tailored to specific business needs and requirements. Unlike off-the-shelf solutions, custom development offers unique features and
                                        functionalities designed to meet your exact specifications.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>How long does it take to develop a custom website?</Accordion.Header>
                                    <Accordion.Body>
                                        No, you don’t need technical expertise to participate in Custom Website Development. Our team will guide you through the process, providing support and expertise every step of the way. Your input and feedback
                                        are essential for ensuring the final product meets your expectations.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Do I need technical expertise to participate in the development process?</Accordion.Header>
                                    <Accordion.Body>
                                        No, you don’t need technical expertise to participate in Custom Website Development. Our team will guide you through the process, providing support and expertise every step of the way. Your input and feedback
                                        are essential for ensuring the final product meets your expectations.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>What is included in web hosting services?</Accordion.Header>
                                    <Accordion.Body>
                                        Web hosting services typically include server space, bandwidth, and other resources needed to store and serve your website files to visitors. Additionally, hosting providers may offer features such as email
                                        accounts, domain registration, security measures, and technical support.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Can I update my website content myself?</Accordion.Header>
                                    <Accordion.Body>Design studio founded in London and expanded our services, and become a multinational firm, offering services and solutions.</Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Frequentlyaskedquestionscustomwebsite;
