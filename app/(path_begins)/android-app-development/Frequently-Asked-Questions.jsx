import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function FrequentlyAskedQuestions() {
    return (
        <section className='FrequentlyAskedQuestions-banner'>
            <div className="container">
                <div className="row justify-content-center align-items-start">
                    <div className="col-xs-12 col-md-10 col-lg-8 FrequentlyAskedQuestions">
                            <div className='text-center FrequentlyAskedQuestions-header'>
                                <h2>Frequently Asked Questions</h2>
                                <p>Hundreds of reviews from our customers say so. Our in-house support team is friendly & professional and usually way to help you. .!</p>
                            </div>
                            <div className='FrequentlyAskedQuestions-Accordion'>
                            <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What is the typical timeline for developing an Android app?</Accordion.Header>
                                <Accordion.Body>
                                    The timeline varies based on the complexity of the app. However, a basic app can take around 2-3 months, while more complex apps may take 6 months or longer.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Can you help with app store submission and approval processes?</Accordion.Header>
                                <Accordion.Body>
                                    Yes, we assist with app store submission and guide you through the approval process to ensure your app meets all requirements and is successfully published.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Do you provide ongoing maintenance and support for developed apps?</Accordion.Header>
                                <Accordion.Body>
                                Absolutely, we offer ongoing maintenance and support services to keep your app running smoothly, address any issues, and implement updates or enhancements as needed.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Will my app be compatible with all Android devices and screen sizes?</Accordion.Header>
                                <Accordion.Body>
                                Yes, we prioritize ensuring your app is compatible with a wide range of Android devices and screen sizes to provide a seamless user experience for all users.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>How do you ensure the security of user data within the app?</Accordion.Header>
                                <Accordion.Body>
                                Answer: Security is a top priority for us. We implement robust security measures such as data encryption, secure authentication methods, and regular security audits to safeguard user data within the app.
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

export default FrequentlyAskedQuestions
