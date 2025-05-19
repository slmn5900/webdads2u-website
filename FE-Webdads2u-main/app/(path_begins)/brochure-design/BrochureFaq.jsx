import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
function BrochureFaq() {
    return (
        <>
            <section className="frequentlyaskedquestions-main pt-5 pb-5 mt-4">
                <div className="container">
                    <div className="row align-items-start" >
                        <div className="col-sm-12 col-md-12 col-lg-5 frequentlyaskedquestions">
                            <h1>Frequently Asked Questions</h1>
                            <p>We meticulously ensure that every aspect of your brochure design resonates with your brand identity and objectives.</p>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-7">
                            <div className="FrequentlyAskedQuestions-Accordion">
                                <Accordion defaultActiveKey="0" flush>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>What services does your brochure design company offer?</Accordion.Header>
                                        <Accordion.Body>
                                            At Webdads2u Private Limited, we offer a comprehensive range of brochure design services tailored to meet your specific needs. Our services include conceptualization, design, layout, copywriting, and
                                            printing management, ensuring a seamless and hassle-free experience for our clients.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>How do you ensure that the brochure design aligns with our brand identity?</Accordion.Header>
                                        <Accordion.Body>
                                            We take great care to understand your brand identity, values, and objectives before embarking on any design project. Our team conducts thorough research and collaborates closely with you to ensure that
                                            every aspect of the brochure design reflects and enhances your brand identity.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>What is the typical turnaround time for a brochure design project?</Accordion.Header>
                                        <Accordion.Body>
                                            The turnaround time for a brochure design project depends on various factors such as the complexity of the design, the number of revisions required, and the printing process. However, we strive to deliver
                                            high-quality designs within agreed-upon timelines to meet your marketing objectives effectively.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Can you accommodate rush orders for urgent projects?</Accordion.Header>
                                        <Accordion.Body>
                                            Yes, we understand that sometimes you may have urgent deadlines or last-minute requirements. Our team is equipped to handle rush orders and can prioritize your project to ensure timely delivery without
                                            compromising on quality. Simply reach out to us, and we’ll do our best to accommodate your needs.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>What sets your brochure design company apart from others in the industry?</Accordion.Header>
                                        <Accordion.Body>
                                            At Webdads2u Private Limited, we pride ourselves on our creativity, attention to detail, and commitment to customer satisfaction. Our experienced designers combine artistic flair with strategic thinking to
                                            deliver standout brochure designs that leave a lasting impression. Additionally, we offer personalized service, transparent communication, and competitive pricing, making us the preferred choice for
                                            businesses seeking exceptional brochure design solutions.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>What is domain expiration?</Accordion.Header>
                                        <Accordion.Body>Domain expiration is when your domain registration period ends, and you must renew it to maintain ownership.</Accordion.Body>
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

export default BrochureFaq;
