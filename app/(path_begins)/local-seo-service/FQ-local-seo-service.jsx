import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function FQlocalseoservice() {
    return (
        <section className='fqlocalseoservice-main'>
            <div className="container">
                <div className="row  align-items-start">
                    <div className="col-sm-12 col-md-12 col-lg-4 fqlocalseoservice">
                        <h1>Frequently Asked Questions</h1>
                        <p>Hundreds of reviews from our customers say so.
                            Our in-house support team is friendly & professional
                            and usually way to help you. .!</p>
                        <a href="/contact-us"><button>Contact us</button></a>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-7">


                        <div className='fqlocalseoservice-Accordion'>
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>What is local SEO?</Accordion.Header>
                                    <Accordion.Body>
                                    Local SEO focuses on optimizing your online presence to rank higher in local search results, targeting audiences within specific geographic areas.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Why is local SEO important for businesses?</Accordion.Header>
                                    <Accordion.Body>
                                    Local SEO is crucial as it helps businesses increase visibility in their local communities, attract nearby customers, drive foot traffic, and improve revenue
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>How does local SEO differ from traditional SEO?</Accordion.Header>
                                    <Accordion.Body>
                                    Local SEO targets specific geographic locations, optimizing for “near me” searches and local intent, while traditional SEO aims for broader organic search visibility.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>What are some key local SEO strategies?</Accordion.Header>
                                    <Accordion.Body>
                                    Key strategies include optimizing Google My Business, local keyword targeting, obtaining local citations, managing online reviews, and creating location-specific content.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>How can a local SEO company help my business?</Accordion.Header>
                                    <Accordion.Body>
                                    A local SEO company provides expertise in implementing effective local SEO strategies, optimizing your online presence for local searches, driving targeted traffic, and increasing local visibility and conversions.
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

export default FQlocalseoservice;
