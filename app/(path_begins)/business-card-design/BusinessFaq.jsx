import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
function BusinessFaq() {
    return (
        <section className="frequentlyaskedquestions-main pt-5 pb-5" style={{ background: '#f5f5f5' }}>
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-sm-12 col-md-12 col-lg-5 frequentlyaskedquestions">
                        <h1>Frequently Asked Questions</h1>
                        <p>Explore our frequently asked questions to find answers regarding business card designed, customization options, file formats, turnaround times, and design assistance. </p>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                        <div className="FrequentlyAskedQuestions-Accordion">
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>What makes a good business card design?</Accordion.Header>
                                    <Accordion.Body>A good business card designed effectively represents your brand, uses clear typography, includes essential contact information, and reflects professionalism.</Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Can I customize the design of my business card?</Accordion.Header>
                                    <Accordion.Body>Yes, you can fully customize your business card . Choose colors, fonts, imagery, and layout to align with your brand identity and preferences.</Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>What file formats are accepted for submitting my design?</Accordion.Header>
                                    <Accordion.Body>We accept commonly used file formats such as PDF, AI, EPS, and PSD. Ensure your design meets our printing specifications for optimal results.</Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>How long does it take to receive my printed business cards?</Accordion.Header>
                                    <Accordion.Body>The turnaround time depends on factors like quantity, complexity, and shipping method chosen. Typically, expect delivery within 5-7 business days after approving the design.</Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Do you offer design assistance for business cards?</Accordion.Header>
                                    <Accordion.Body>Yes, our experienced designers can help bring your vision to life. Contact us to discuss your ideas, and we’ll work together to create a stunning business card design.</Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BusinessFaq;
