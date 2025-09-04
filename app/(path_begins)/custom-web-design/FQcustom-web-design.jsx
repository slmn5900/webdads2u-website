import React from 'react'
import Accordion from 'react-bootstrap/Accordion';


function FQcustomwebdesign() {
    return (
        <section className='FQcustomwebdesign-main'>
            <div className="container">
                <div className="row text-center justify-content-center">
                    <div className="col-sm-12 col-md-12 col-lg-8 FQcustomwebdesign">
                        <h1>Frequently Asked Questions</h1>
                        <p>Welcome to our FAQ section, where we address common queries about our services. If you have any further questions, feel free to reach out to us directly for assistance.</p>
    
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-8">
                    <div className='FQcustomwebdesign-Accordion'>
                            <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What is custom web design?</Accordion.Header>
                                <Accordion.Body>
                                Custom web design involves creating a website tailored specifically to your business needs and branding requirements. Unlike template-based designs, custom web design offers unique layouts, features, and functionalities that set your website apart.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>How long does the custom web design process take?</Accordion.Header>
                                <Accordion.Body>
                                Yes, with our custom web design services, we provide user-friendly content management systems (CMS) that allow you to easily update and manage content on your website without needing technical expertise. We’ll also provide training and ongoing support as needed.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Can I update content on my custom-designed website myself?</Accordion.Header>
                                <Accordion.Body>
                                We offer a wide range of services including theme customization, plugin development, website design and development, WooCommerce integration, website maintenance, and more.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Will my custom-designed website be mobile-responsive?</Accordion.Header>
                                <Accordion.Body>
                                Absolutely. Mobile responsiveness is a crucial aspect of modern web design. We ensure that your custom-designed website is optimized for various devices and screen sizes, providing an optimal viewing experience for all visitors, whether they’re using desktops, laptops, tablets, or smartphones.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Do you offer maintenance and support after the website is launched?</Accordion.Header>
                                <Accordion.Body>
                                Yes, we provide ongoing maintenance and support services to ensure your website remains secure, up-to-date, and performing optimally. From software updates to troubleshooting technical issues, our team is here to assist you every step of the way, even after your website goes live.
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

export default FQcustomwebdesign;