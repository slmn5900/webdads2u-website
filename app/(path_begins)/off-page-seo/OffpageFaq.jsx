import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const OffpageFaq = () => {
    return (
        <>
            <section className="frequentlyaskedquestions-main pt-5 pb-5" style={{ background: '#f5f5f5' }}>
                <div className="container">
                    <div className="row crmfaq">
                        <div className="text-center">
                            <h1>Frequently Asked Questions</h1>
                            <p>Hundreds of reviews from our customers say so. Our in-house support team is friendly & professional and usually way to help you. .!</p>
                        </div>
                        <div className="FrequentlyAskedQuestions-Accordion">
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>What does having Managed your services provider?</Accordion.Header>
                                    <Accordion.Body>Our purpose is to build solutions that remove the barriers preventing people from doing their best work, and this is at the heart of how we approach our.</Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>What you about say your Business planning?</Accordion.Header>
                                    <Accordion.Body>We encourage every team member to be a whole person. We have a flexible, high trust environment that is focused on doing great work.</Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>You have a unique way of the working in IT?</Accordion.Header>
                                    <Accordion.Body>Our purpose is to build solutions that remove barriers preventing people from doing their best work, and this is at the heart.</Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>What types of systems do you support?</Accordion.Header>
                                    <Accordion.Body>Increase social reach and productivity with our App Directory, a collection of famous applications like Instagram other web design.</Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>Can you provide of all IT Managenment services?</Accordion.Header>
                                    <Accordion.Body>Design studio founded in London and expanded our services, and become a multinational firm, offering services and solutions.</Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OffpageFaq;
