import React from 'react'
import Accordion from 'react-bootstrap/Accordion';	

function Fqwebsitemaintenance() {
    return (
        <section className='fqwebsitemaintenance-main'>
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-sm-12 col-md-12 col-lg-5 fqwebsitemaintenance">
                        <h1>Frequently Asked
                        Questions</h1>
                        <p>Find answers to commonly asked questions about our products and services in our comprehensive FAQ section. Simplifying your queries for a smoother experience.</p>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                        

                    <div className='fqwebsitemaintenance-Accordion'>
                            <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>How often should I update my website?</Accordion.Header>
                                <Accordion.Body>
                                It’s recommended to update your website regularly to keep content fresh and maintain security standards.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Can I perform website maintenance myself?</Accordion.Header>
                                <Accordion.Body>
                                Website backups are crucial for restoring your site in case of data loss or a security breach, ensuring minimal downtime.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>What is the importance of website backups?</Accordion.Header>
                                <Accordion.Body>
                                We offer a wide range of services including theme customization, plugin development, website design and development, WooCommerce integration, website maintenance, and more.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>How can website maintenance improve SEO?</Accordion.Header>
                                <Accordion.Body>
                                Regular maintenance helps keep your website optimized for search engines, improving its visibility and ranking in search results.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5 ">
                                <Accordion.Header>What security measures are included in website maintenance?</Accordion.Header>
                                <Accordion.Body>
                                Security measures may include malware scans, software updates, SSL certificate installation, and firewall protection.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header>Can I customize my website maintenance plan?</Accordion.Header>
                                <Accordion.Body>
                                Yes, website maintenance plans can often be tailored to your specific needs and budget, offering flexibility in services.
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

export default Fqwebsitemaintenance;
