import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function Fqlogodesign() {
    return (
        <section className='fqlogodesign-main'>
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-sm-12 col-md-12 col-lg-6 fqlogodesign">
                        <h1>Frequently Asked Questions</h1>
                        <p>we address common questions you might have about our logo design services. If you don’t find the answer you’re looking for here, feel free to reach out to our support team for further assistance.</p>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className='fqlogodesign-Accordion'>
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>What is logo design?</Accordion.Header>
                                    <Accordion.Body>
                                    Logo design is the process of creating a visual representation of a brand or company through the use of symbols, typography, colors, and imagery. A well-designed logo is essential for creating a memorable and recognizable brand identity.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Why is a professional logo important?</Accordion.Header>
                                    <Accordion.Body>
                                    A professional logo is crucial for establishing brand identity and making a memorable impression on customers. It sets the tone for your brand and communicates your values and personality to your target audience.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>What makes a good logo?</Accordion.Header>
                                    <Accordion.Body>
                                    A good logo should be simple, memorable, versatile, timeless, and appropriate for your brand. It should effectively communicate your brand’s message and be easily recognizable across different platforms and mediums.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="34">
                                    <Accordion.Header>How long does it take to design a logo?</Accordion.Header>
                                    <Accordion.Body>
                                    The time it takes to design a logo can vary depending on the complexity of the project and the number of revisions required. Typically, the process can take anywhere from a few days to a few weeks.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>What is the logo design process?</Accordion.Header>
                                    <Accordion.Body>
                                    The logo design process usually involves several stages, including research, brainstorming, sketching, digital rendering, feedback, and revisions. Our team works closely with clients throughout each stage to ensure the final design meets their needs and expectations.
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

export default Fqlogodesign;
