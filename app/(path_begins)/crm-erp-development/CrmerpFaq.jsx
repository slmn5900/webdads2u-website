import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const CrmerpFaq = () => {
    return (
        <>
            <section className="frequentlyaskedquestions-main pt-5 pb-5" style={{ background: '#f5f5f5' }}>
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-sm-12 col-md-12 col-lg-6 frequentlyaskedquestions">
                            <h1>Frequently Asked Questions</h1>
                            <p>Hundreds of reviews from our customers say so. Our in-house supportteams friendly & professional and usually way to help you. .!</p>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="FrequentlyAskedQuestions-Accordion">
                                <Accordion defaultActiveKey="0" flush>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>What is CRM</Accordion.Header>
                                        <Accordion.Body>CRM stands for Customer Relationship Management. It’s a system that helps businesses manage interactions and relationships with customers.</Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Why is CRM important?</Accordion.Header>
                                        <Accordion.Body>We encourage every team member to be a whole person. We have a flexible, high trust environment that is focused on doing great work.</Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>How can CRM benefit small businesses?</Accordion.Header>
                                        <Accordion.Body>CRM aids small businesses by centralizing customer information, automating tasks, and facilitating targeted marketing, leading to increased customer satisfaction and growth.</Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>Is CRM suitable for my industry?</Accordion.Header>
                                        <Accordion.Body>Yes, CRM is adaptable and beneficial across various industries, fostering better customer relationships, whether in retail, healthcare, finance, or other sectors.</Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>What features should I look for in a CRM system?</Accordion.Header>
                                        <Accordion.Body>Consider features like contact management, lead tracking, automation, analytics, and scalability when choosing a CRM system for your specific business needs.</Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="6">
                                        <Accordion.Header>How can CRM enhance customer communication?</Accordion.Header>
                                        <Accordion.Body>CRM enables personalized communication, timely follow-ups, and targeted messaging, fostering stronger relationships and customer loyalty.</Accordion.Body>
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

export default CrmerpFaq;
