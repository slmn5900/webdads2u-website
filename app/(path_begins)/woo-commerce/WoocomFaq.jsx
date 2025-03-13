import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
function WoocomFaq() {
    return (
        <>
            <section className="frequentlyaskedquestions-main pt-5 pb-5" style={{background:"#f5f5f5"}} >
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-sm-12 col-md-12 col-lg-5 frequentlyaskedquestions">
                            <h1>Frequently Asked Questions</h1>
                            <p>Hundreds of reviews from our customers say so. Our in-house support team is friendly & professional and usually way to help you. .!</p>
                           
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-7">
                            <div className="FrequentlyAskedQuestions-Accordion">
                                <Accordion defaultActiveKey="0" flush>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>What is WooCommerce?</Accordion.Header>
                                        <Accordion.Body>
                                        WooCommerce is a customizable, open-source eCommerce platform built specifically for WordPress. It allows you to easily set up and manage an online store to sell your products or services.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Do I need technical skills to use WooCommerce?</Accordion.Header>
                                        <Accordion.Body>
                                        No, you don’t need advanced technical skills to use WooCommerce. It’s designed to be user-friendly, with intuitive interfaces for managing products, orders, and other store settings. However, some basic familiarity with WordPress and website management can be helpful. </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Can I customize the look and feel of my WooCommerce store?</Accordion.Header>
                                        <Accordion.Body>
                                        Yes, WooCommerce offers extensive customization options. You can choose from a wide range of themes, install plugins to add features, and customize the design to match your brand identity. Additionally, WooCommerce’s flexibility allows for further customization through coding if needed.</Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>Is WooCommerce secure for online transactions?</Accordion.Header>
                                        <Accordion.Body>Yes, WooCommerce prioritizes security for online transactions. It follows industry best practices for data encryption, secure payments, and protection against common threats like fraud and hacking. Additionally, regular updates and security patches are released to address any vulnerabilities.</Accordion.Body>
                                    </Accordion.Item>
                                    
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>How can I get support for my WooCommerce store?</Accordion.Header>
                                        <Accordion.Body>Consider features like contact management, lead tracking, automation, analytics, and scalability when choosing a CRM system for your specific business needs.</Accordion.Body>
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

export default WoocomFaq
