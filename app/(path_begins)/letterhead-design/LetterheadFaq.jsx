import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
function LetterheadFaq() {
    return (
        <>
            <section className="frequentlyaskedquestions-main pt-5 pb-5" style={{ background: '#f5f5f5' }}>
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-sm-12 col-md-12 col-lg-5 frequentlyaskedquestions">
                            <h1>Frequently Asked Questions</h1>
                            <p>Have questions about our letterhead design services? Check out these commonly asked questions to learn more about file formats, customization options, revisions, turnaround times, and printing services.</p>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-7">
                            <div className="FrequentlyAskedQuestions-Accordion">
                                <Accordion defaultActiveKey="0" flush>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>What file formats do you provide for letterhead designs?</Accordion.Header>
                                        <Accordion.Body>We provide letterhead designs in commonly used file formats such as PDF, EPS, AI, and JPG to ensure compatibility with various printing methods and software.</Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Can you incorporate our existing logo and branding elements into the letterhead design?</Accordion.Header>
                                        <Accordion.Body>
                                            Absolutely! We understand the importance of consistency in branding. You can provide us with your logo and any other branding elements, and we’ll seamlessly incorporate them into the letterhead design to
                                            reflect your brand identity.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>How many revisions are included in the letterhead design process?</Accordion.Header>
                                        <Accordion.Body>
                                            We offer a standard number of revisions to ensure your satisfaction with the final design. Typically, this includes up to three rounds of revisions, allowing ample opportunity for feedback and adjustments
                                            to perfect the design according to your preferences.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>What is the typical turnaround time for letterhead design projects?</Accordion.Header>
                                        <Accordion.Body>
                                            The turnaround time for letterhead design projects can vary depending on factors such as complexity and the number of revisions required. However, we strive to deliver initial design concepts within [X]
                                            business days and finalize the design promptly once revisions are complete.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>Do you offer printing services for the letterheads?</Accordion.Header>
                                        <Accordion.Body>
                                            While we primarily focus on designing custom letterheads tailored to your specifications, we can certainly assist you in coordinating printing services if needed. We can provide recommendations for
                                            reputable printing vendors or facilitate the printing process on your behalf for an additional fee.
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
}

export default LetterheadFaq;
