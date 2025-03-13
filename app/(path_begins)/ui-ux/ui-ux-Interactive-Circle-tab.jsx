import React, { useState } from 'react';

const CircleTabs = () => {
    // State to keep track of the active tab
    const [activeTab, setActiveTab] = useState('tab-1');

    // Function to handle tab click
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (


        <section className='circle-tab-main'>
            <div className="container-fluid">
                <div className="row circle-tabtabs">
                    <h2 className="text-center m-3">Our Approach to UI UX Services</h2>
                    <div className="circle-tabs">
                        <div className="tab-container">
                            <div
                                className={`tab ${activeTab === 'tab-1' ? 'active' : ''}`}
                                onClick={() => handleTabClick('tab-1')}
                            >
                                <span>Information <br /> Architecture</span>
                            </div>
                            <div
                                className={`tab ${activeTab === 'tab-2' ? 'active' : ''}`}
                                onClick={() => handleTabClick('tab-2')}
                            >
                                <span>Usability <br /> Testing</span>
                            </div>
                            <div
                                className={`tab ${activeTab === 'tab-3' ? 'active' : ''}`}
                                onClick={() => handleTabClick('tab-3')}
                            >
                                <span>Visual <br /> Design</span>
                            </div>
                            <div
                                className={`tab ${activeTab === 'tab-4' ? 'active' : ''}`}
                                onClick={() => handleTabClick('tab-4')}
                            >
                                <span>Wireframe and <br /> Prototype</span>
                            </div>
                            <div
                                className={`tab ${activeTab === 'tab-5' ? 'active' : ''}`}
                                onClick={() => handleTabClick('tab-5')}
                            >
                                <span>UI <br /> Development</span>
                            </div>
                            <div
                                className={`tab ${activeTab === 'tab-6' ? 'active' : ''}`}
                                onClick={() => handleTabClick('tab-6')}
                            >
                                <span>Research and <br /> Strategy</span>
                            </div>
                        </div>
                        <div className="circle">
                            <div className="circle-inner">
                                <div className="circle-content">
                                    {activeTab === 'tab-1' && (
                                        <div className="tab-content" id="tab-1">
                                            <h2>Information Architecture</h2>
                                            <p>The core focus of our UI UX design and development services is usability. The design elements are created in a way that they guide the user base to their end goal</p>
                                        </div>
                                    )}
                                    {activeTab === 'tab-2' && (
                                        <div className="tab-content" id="tab-2">
                                            <h2>Usability Testing</h2>
                                            <p>We maintain writing clean codes to create value-driven, consumer-focussed interfaces that build ROI for our clients and promote user interaction</p>
                                        </div>
                                    )}
                                    {activeTab === 'tab-3' && (
                                        <div className="tab-content" id="tab-3">
                                            <h2>Visual Design</h2>
                                            <p>We integrate a design philosophy into our interfaces that comprehend the psychology of the user, is visually appealing and highly interactive to his actions</p>
                                        </div>
                                    )}

                                    {activeTab === 'tab-4' && (
                                        <div className="tab-content" id="tab-4">
                                            <h2>Wireframe and Prototype</h2>
                                            <p>The roadmap designed are elaborative and show the positioning of the design elements in great detail. The clickable prototypes show the exact flow of the structure</p>
                                        </div>
                                    )}
                                    {activeTab === 'tab-5' && (
                                        <div className="tab-content" id="tab-5">
                                            <h2>UI Development</h2>
                                            <p>We align your vision into the design architecture keeping in mind the usability, functionality and interactive quotient of the design interface</p>
                                        </div>
                                    )}
                                    {activeTab === 'tab-6' && (
                                        <div className="tab-content" id="tab-6">
                                            <h2>Research and Strategy</h2>
                                            <p>An in-depth analysis of business needs is done along with competition mapping to devise a strategic blueprint and determine the aesthetic goals for the designs</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CircleTabs;