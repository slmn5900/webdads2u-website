import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
function FlutterFaq() {
    return (
        <>
            <section className="frequentlyaskedquestions-main pt-5 pb-5" style={{ background: '#f5f5f5' }}>
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-sm-12 col-md-12 col-lg-5 frequentlyaskedquestions">
                            <h1>Frequently Asked Questions</h1>
                            <p>
                                Explore Flutter’s versatile toolkit for cross-platform app development, seamless integration with native features, and its empowering capabilities for developers of all levels. Unlock the full potential of your app
                                projects with Flutter’s streamlined approach.
                            </p>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-7">
                            <div className="FrequentlyAskedQuestions-Accordion">
                                <Accordion defaultActiveKey="0" flush>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>What is Flutter?</Accordion.Header>
                                        <Accordion.Body>
                                            Flutter is an open-source UI software development kit created by Google. It allows developers to build natively compiled applications for mobile, web, and desktop from a single codebase.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Why choose Flutter for app development?</Accordion.Header>
                                        <Accordion.Body>
                                            Flutter offers several advantages, including hot reload for faster development iterations, a rich set of customizable widgets for building beautiful interfaces, high performance thanks to its compiled code,
                                            and the ability to target multiple platforms with one codebase.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Is Flutter suitable for beginners in app development?</Accordion.Header>
                                        <Accordion.Body>
                                            Yes, Flutter can be a great choice for beginners due to its simplicity and extensive documentation. Its declarative UI approach and hot reload feature make it easy for newcomers to quickly see the results
                                            of their code changes, fostering rapid learning and experimentation.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Can Flutter apps access native device features?</Accordion.Header>
                                        <Accordion.Body>
                                            Yes, Flutter provides extensive support for accessing native device features and APIs through plugins. Developers can easily integrate functionalities like camera, geolocation, sensors, and more into their
                                            Flutter apps using existing plugins or by creating custom ones.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>What platforms can Flutter apps run on?</Accordion.Header>
                                        <Accordion.Body>
                                            Flutter allows developers to target multiple platforms with a single codebase, including iOS, Android, web, and desktop (Windows, macOS, Linux). This cross-platform capability streamlines development and
                                            maintenance efforts, enabling teams to reach a broader audience with their apps.
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

export default FlutterFaq;
