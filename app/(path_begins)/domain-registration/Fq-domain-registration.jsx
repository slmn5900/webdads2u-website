import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function Fqdomainregistration() {
    return (
        <section className='fqdomainregistration-main'>
            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-sm-12 col-md-12 col-lg-4 fqdomainregistration-header">
                        <h1>Frequently Asked Questions</h1>
                        <p>Hundreds of reviews from our customers say so.
                            Our in-house support team is friendly & professional
                            and usually way to help you. .!</p>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                    <div className='fqdomainregistration-Accordion'>
                            <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What is a domain name?</Accordion.Header>
                                <Accordion.Body>
                                A domain name is your website’s address on the internet, like www.example.com.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>How long does domain registration take?</Accordion.Header>
                                <Accordion.Body>
                                Registration typically takes minutes to complete, but DNS propagation can take up to 48 hours.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Can I transfer my domain to another registrar?</Accordion.Header>
                                <Accordion.Body>
                                Yes, you can transfer your domain between registrars. Each registrar has its own process.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>What is WHOIS privacy protection?</Accordion.Header>
                                <Accordion.Body>
                                WHOIS privacy protects your personal information associated with your domain from being publicly accessible.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Can I register a domain for free?</Accordion.Header>
                                <Accordion.Body>
                                While some services offer free domain registration initially, they often come with limitations or require additional purchases.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>What is domain expiration?</Accordion.Header>
                                <Accordion.Body>
                                Domain expiration is when your domain registration period ends, and you must renew it to maintain ownership.
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

export default Fqdomainregistration;
