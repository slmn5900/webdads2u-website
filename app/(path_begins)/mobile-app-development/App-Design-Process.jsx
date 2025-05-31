import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';

const ResponsiveTabs = () => {
    const [key, setKey] = useState('tab1');

    return (
        <section className="ResponsiveTabs-main">
            <div className="container pt-2 pb-2">
                <div className="row justify-content-center text-center ResponsiveTabs">
                    <div className="col-sm-12 col-lg-12">
                        <h2 className="appdev-head">Mobile App Design Process</h2>
                        <p className="appdev-para">
                            IOS and Android platforms have their own unique characteristics, which must be taken into account when creating mobile apps. Furthermore, the design requirements are constantly evolving. Applications that have an outdated,
                            old-fashioned interface, with extremely inconvenient controls and poor graphics are doomed to fail.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container Responsive-Tabs">
                <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3 justify-content-between w-100">
                    <Tab eventKey="tab1" title="Initial Analysis">
                        <div className="row">
                            <div className="col-sm-12 col-lg-6">
                                <h2>Initial Analysis</h2>
                                <p>It starts with understanding and analyzing your requirements. Our priority is to offer viable solutions through the technical expertise of our developers.</p>
                            </div>
                            <div className="col-sm-12 col-lg-6">
                                <img src="webdads/images/mobile-app-development/Initial-Analysis.png" alt="Initial-Analysis" className="img-fluid" />
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="tab2" title="Designing">
                        <div className="row">
                            <div className="col-sm-12 col-lg-6">
                                <img src="webdads/images/mobile-app-development/Design-l.png" alt="Design-l" className="img-fluid" />
                            </div>
                            <div className="col-sm-12 col-lg-6">
                                <h2>Designing</h2>
                                <p>Our qualified team of experts creates wireframes and blueprints to give a slight idea of the overall appearance of the application in the first place.</p>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="tab3" title="Development">
                        <div className="row">
                            <div className="col-sm-12 col-lg-6">
                                <h2>Development</h2>
                                <p>After the design is complete, we begin end-to-end development using elements of various technologies & tools.</p>
                            </div>
                            <div className="col-sm-12 col-lg-6">
                                <img src="webdads/images/mobile-app-development/Development.png" alt="Development" className="img-fluid" />
                            </div>
                        </div>
                    </Tab>

                    <Tab eventKey="tab4" title="Testing and Deployment">
                        <div className="row">
                            <div className="col-sm-12 col-lg-6">
                                <img src="webdads/images/mobile-app-development/Testing-and-Deployment.png" alt="Testing-and-Deployment" className="img-fluid" />
                            </div>
                            <div className="col-sm-12 col-lg-6">
                                <h2>Testing and Deployment</h2>
                                <p>
                                    To ensure reliable operation, security, and bug-free functionality, we carry out rigorous testing. Additionally, perform user acceptance testing (UAT) to guarantee flawless performance, and we prepare the mobile
                                    app for use by deploying it on the relevant app store or your server.
                                </p>
                            </div>
                        </div>
                    </Tab>

                    <Tab eventKey="tab5" title="Post Deployment Maintenance">
                        <div className="row">
                            <div className="col-sm-12 col-lg-6">
                                <h2>Post Deployment Maintenance</h2>
                                <p>We provide end-to-end support post-deployment of your application. It is to ensure hassle-free app functionality as per the requirement.</p>
                            </div>
                            <div className="col-sm-12 col-lg-6">
                                <img src="webdads/images/mobile-app-development/Post-Deployment-Maintenance.png" alt="Post-Deployment-Maintenance" className="img-fluid" />
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </section>
    );
};

export default ResponsiveTabs;
