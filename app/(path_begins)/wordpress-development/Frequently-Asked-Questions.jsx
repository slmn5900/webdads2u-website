import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function FrequentlyAskedQuestions() {
    return (
        <section className='frequentlyaskedquestions-main'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-4 frequentlyaskedquestions">
                        <h1>Frequently Asked Questions</h1>
                        <p>Hundreds of reviews from our customers say so.
                            Our in-house support team is friendly & professional
                            and usually way to help you. .!</p>
                        <button>Contact us</button>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-8">
                        

                    <div className='FrequentlyAskedQuestions-Accordion'>
                            <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What is WordPress?</Accordion.Header>
                                <Accordion.Body>
                                WordPress is a popular open-source content management system (CMS) used for creating websites and blogs. It offers a user-friendly interface and a wide range of customizable features.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Why should I choose WordPress for my website?</Accordion.Header>
                                <Accordion.Body>
                                WordPress is highly flexible, scalable, and easy to use. It offers thousands of themes and plugins for customization, excellent SEO capabilities, and a large supportive community.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>What services do you offer as a WordPress development company?</Accordion.Header>
                                <Accordion.Body>
                                We offer a wide range of services including theme customization, plugin development, website design and development, WooCommerce integration, website maintenance, and more.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Do you provide custom WordPress theme development?</Accordion.Header>
                                <Accordion.Body>
                                Yes, we specialize in custom WordPress theme development tailored to your specific requirements and brand identity.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>Can you help with WordPress website migration?</Accordion.Header>
                                <Accordion.Body>
                                Absolutely! We can assist with migrating your existing website to WordPress seamlessly, ensuring minimal downtime and preserving your content and SEO rankings.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default FrequentlyAskedQuestions;
