import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

function ReactNativeFaq() {
    return (
        <section className="frequentlyaskedquestions-main pt-5 pb-5" style={{ background: '#f5f5f5' }}>
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-sm-12 col-md-12 col-lg-5 frequentlyaskedquestions">
                        <h1>Frequently Asked Questions</h1>
                        <p>
                            Explore our FAQ section to find answers to common queries about custom ERP software development. Learn about the benefits of ERP software development for your business, the development timeline, integration
                            capabilities, technologies used, and post-implementation support services.
                        </p>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                        <div className="FrequentlyAskedQuestions-Accordion">
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>What is React Native development?</Accordion.Header>
                                    <Accordion.Body>
                                        React Native development is the process of building mobile applications using the React Native framework, which allows developers to use JavaScript and React to create cross-platform apps.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>What are the benefits of React Native development?</Accordion.Header>
                                    <Accordion.Body>
                                        React Native development offers benefits such as cross-platform compatibility, faster development cycles, code reusability, native performance, and a large developer community.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Is React Native suitable for my project?</Accordion.Header>
                                    <Accordion.Body>
                                        React Native is suitable for projects that require cross-platform mobile app development, rapid prototyping, or leveraging existing web development skills to build mobile apps.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>How does React Native ensure app performance?</Accordion.Header>
                                    <Accordion.Body>
                                        React Native ensures app performance by providing native-like speed and responsiveness through its bridge architecture, which connects JavaScript code with native components.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>What support and maintenance services are available for React Native apps?</Accordion.Header>
                                    <Accordion.Body>
                                        Support and maintenance services for React Native apps include bug fixes, performance optimization, security updates, feature enhancements, and platform updates to ensure the longevity of the application.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ReactNativeFaq;
