import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
function OpencartFqa() {
    return (
        <>
        <section className="frequentlyaskedquestions-main pt-5 pb-5" style={{background:"#f5f5f5"}} >
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-sm-12 col-md-12 col-lg-5 frequentlyaskedquestions">
                        <h1>Frequently Asked Questions</h1>
                        <p>Our FAQ section provides quick answers to common inquiries about our services, ensuring clarity and transparency for our customers. Accessible and informative, it streamlines the user experience, addressing key concerns efficiently.

</p>
                       
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                        <div className="FrequentlyAskedQuestions-Accordion">
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>What payment methods do you accept?</Accordion.Header>
                                    <Accordion.Body>
                                    We accept various payment methods, including credit/debit cards, PayPal, and bank transfers, ensuring flexibility and convenience for our customers. </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>How long does it take to deliver orders?</Accordion.Header>
                                    <Accordion.Body>
                                    Delivery times vary depending on your location and the selected shipping method. Generally, orders are processed and dispatched within 1-2 business days.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Do you offer international shipping?</Accordion.Header>
                                    <Accordion.Body>
                                    Yes, we provide international shipping to many countries. Please check our shipping information page or contact us directly for specific details and rates.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>What is your return policy?</Accordion.Header>
                                    <Accordion.Body>We offer a hassle-free return policy within 30 days of purchase for eligible items. Simply contact our customer service team to initiate the return process and receive further instructions.</Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>Are your products covered by warranty?</Accordion.Header>
                                    <Accordion.Body>Yes, our products are typically covered by a standard warranty against manufacturing defects. For more details about warranty coverage and duration, please refer to the product description or contact our support team.</Accordion.Body>
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

export default OpencartFqa
