import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
function SocialmediaFaq() {
    return (
        <>
            <section className="frequentlyaskedquestions-main pt-5 pb-5" style={{ background: '#f5f5f5' }}>
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-sm-12 col-md-12 col-lg-5 frequentlyaskedquestions">
                            <h1>Frequently Asked Questions</h1>
                            <p>Explore our Frequently Asked Questions (FAQ) page to find answers to common inquiries about our delivery services. From turnaround times to expedited options and handling during peak seasons, we’ve got you covered. </p>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-7">
                            <div className="FrequentlyAskedQuestions-Accordion">
                                <Accordion defaultActiveKey="0" flush>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>How do you ensure timely delivery of orders?</Accordion.Header>
                                        <Accordion.Body>We employ advanced logistics and scheduling systems, coupled with a dedicated team, to ensure timely delivery of all orders.</Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>What happens if my delivery is delayed?</Accordion.Header>
                                        <Accordion.Body>In the rare event of a delay, we promptly communicate with you and provide updates on the status of your delivery, along with any necessary solutions or compensations.</Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Can I track my delivery in real-time?</Accordion.Header>
                                        <Accordion.Body>Yes, you can track your delivery in real-time through our online tracking system, providing you with peace of mind and transparency throughout the process.</Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Do you offer expedited shipping options for urgent orders?</Accordion.Header>
                                        <Accordion.Body>Yes, we offer expedited shipping options for urgent orders, ensuring your items reach you as quickly as possible when time is of the essence.</Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>Can I schedule a specific delivery time?</Accordion.Header>
                                        <Accordion.Body>Depending on your location and the nature of the order, we may offer the option to schedule a specific delivery time to accommodate your availability.</Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SocialmediaFaq;
