import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const WebportalFaq = () => {
    return (
        <>
            <section className="frequentlyaskedquestions-main pt-5 pb-5" style={{ background: '#f5f5f5' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-5 frequentlyaskedquestions">
                            <h1>Frequently Asked Questions</h1>
                            <p>Explore our comprehensive FAQ section for answers to commonly asked questions about our Shopify Development Services.Find all the information you need to make informed decisions about your e-commerce project.</p>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-7">
                            <div className="FrequentlyAskedQuestions-Accordion">
                                <Accordion defaultActiveKey="0" flush>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>What is Web Portal Development?</Accordion.Header>
                                        <Accordion.Body>Web Portal Development involves creating a centralized online platform that provides users with access to various resources, services, and information.</Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>What are the benefits of Web Portal Development?</Accordion.Header>
                                        <Accordion.Body>Web portals enhance communication, collaboration, and efficiency by providing a single point of access to relevant information and tools for users.</Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>How long does it take to develop a web portal?</Accordion.Header>
                                        <Accordion.Body>
                                            The timeline for web portal development varies based on factors such as complexity, features, and customization requirements. On average, it can take several weeks to several months to complete.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>Can I customize my web portal?</Accordion.Header>
                                        <Accordion.Body>
                                            Yes, web portals are highly customizable to meet your specific business needs and branding requirements. Our team works closely with clients to ensure their portal reflects their unique identity and
                                            functionality.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>How can I maintain and update my web portal?</Accordion.Header>
                                        <Accordion.Body>
                                            We offer ongoing maintenance and support services to ensure your web portal remains up-to-date, secure, and optimized for performance. Additionally, we provide training and documentation to empower you to
                                            make updates as needed.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WebportalFaq;
