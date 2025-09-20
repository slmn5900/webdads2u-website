import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
function FlyerFaq() {
    return (
    <>
     <section className="frequentlyaskedquestions-main pt-5 pb-5" style={{ background: '#f5f5f5' }}>
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-sm-12 col-md-12 col-lg-5 frequentlyaskedquestions">
                        <h1>Frequently Asked Questions</h1>
                        <p>Explore our frequently asked questions to find answers to common queries about our flyers designing services. From file formats to turnaround times, we’ve got you covered.</p>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                        <div className="FrequentlyAskedQuestions-Accordion">
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>What file formats do you accept for flyers designing?</Accordion.Header>
                                    <Accordion.Body>We accept various file formats, including PDF, JPEG, PNG, and AI, ensuring compatibility with different printing and digital platforms.</Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Can I request revisions to my flyer design?</Accordion.Header>
                                    <Accordion.Body>Yes, we offer revisions to ensure your satisfaction. We work closely with you to make any necessary adjustments until you’re completely happy with the final result.

</Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>What is the typical turnaround time for flyer design projects?</Accordion.Header>
                                    <Accordion.Body>Turnaround times can vary depending on the complexity of the project and current workload. However, we strive to deliver initial concepts within [X] business days and finalize designs promptly to meet your deadlines.

</Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Do you provide printing services for flyers?</Accordion.Header>
                                    <Accordion.Body>While we primarily focus on design services, we can recommend trusted printing partners or assist in coordinating printing if needed, ensuring your flyers are produced to the highest quality standards.

</Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Are there any restrictions on the content or themes for flyer designs?</Accordion.Header>
                                    <Accordion.Body>We adhere to ethical and legal guidelines and reserve the right to decline projects containing inappropriate or offensive content. However, we’re flexible and can accommodate various themes and subjects to suit your requirements.</Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>    
    )
}

export default FlyerFaq
