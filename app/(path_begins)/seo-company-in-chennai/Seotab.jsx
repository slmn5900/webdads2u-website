import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Seotab() {
    // Set the initial activeKey to match the first tab's eventKey
    const [activeKey, setActiveKey] = useState("Website SEO Copywriting");

    return (
        <section className="seotabsec">
            <Container>
                <Row>
                    <Col md={6}>
                        <div>
                            <h5>Why Every Business Needs SEO</h5>
                            <h2>Our Web Solutions Help Your Business Grow Online</h2>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="unlock-seo">
                            <p>
                                Unlock the potential of your business with our impactful SEO Company in Chennai. In today’s digital landscape, visibility is key. Our tailored solutions ensure your online presence thrives, reaching your audience effectively. Elevate your brand, connect with customers, and witness unparalleled growth with our dedicated SEO expertise in Chennai.
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row className="seovar-tab">
                    <Tabs
                        activeKey={activeKey}
                        onSelect={(k) => setActiveKey(k)}
                        transition={false}
                        id="noanim-tab-example"
                        className="mb-3"
                    >
                        <Tab
                            eventKey="Website SEO Copywriting"
                            title={
                                <div style={{ textAlign: 'center' }}>
                                    <img src="/webdads/images/seo-development/Coppy-writting.svg" alt="SEO Copywriting" />
                                    <br />
                                    <h6>Website SEO<br /> Copywriting</h6>
                                </div>
                            }
                        >
                            <div  className="seo-contentbox">
                               <div className="cont">
                               <h2>Website SEO Copywriting </h2>
                               <p>Elevate your online presence with expertly crafted strategies tailored to your business. We specialize in driving traffic, enhancing visibility, and ensuring your brand stands out amidst competition. With our dedicated team, witness your website soar to the top ranks, captivating audiences and fostering meaningful connections. Maximize your potential and embrace success with our unparalleled SEO services in Chennai.</p>
                              <a href="#">Readmore</a>
                               </div>
                               <div className="cont">
                                <img alt="" src="/webdads/images/seo-development/copyright-seo.webp"></img>
                               </div>
                            </div>
                        </Tab>

                        <Tab
                            eventKey="Website Call Tracking"
                            title={
                                <div style={{ textAlign: 'center' }}>
                                    <img src="/webdads/images/seo-development/Call.svg" alt="Call Tracking" />
                                    <br />
                                    <h6>Website Call<br /> Tracking</h6>
                                </div>
                            }
                        >
                            <div  className="seo-contentbox">
                               <div className="cont">
                               <h2>Website Call Tracking</h2>
                               <p>Experience the transformative impact of our SEO Company In Chennai with our innovative website call tracking. Beyond just optimizing your online presence, we provide insights into every click that drives your success. Hear the resonance of growth as our tailored strategies amplify your visibility in Chennai. With precise call tracking, witness firsthand the connections forged, the leads captured, and the triumphant rise of your business, fueled by our passionate dedication to SEO excellence in Chennai.</p>
                              <a href="#">Readmore</a>
                               </div>
                               <div className="cont">
                                <img alt="" src="/webdads/images/seo-development/call_tracking.webp"></img>
                               </div>
                            </div>
                        </Tab>

                        <Tab
                            eventKey="Custom SEO Reporting"
                            title={
                                <div style={{ textAlign: 'center' }}>
                                    <img src="/webdads/images/seo-development/Speed.svg" alt="SEO Reporting" />
                                    <br />
                                    <h6>Custom SEO<br /> Reporting</h6>
                                </div>
                            }
                        >
                            <div  className="seo-contentbox">
                               <div className="cont">
                               <h2>Custom SEO Reporting</h2>
                               <p>Embrace the journey of success with our SEO Company In Chennai, enhanced by custom reporting. Beyond raw numbers, our reports paint vibrant portraits of your digital evolution. Each data point is a triumph, each analysis is a testament to your brand’s ascent in Chennai. Experience the thrill as our tailored reports narrate the story of your growth, reflecting our unwavering commitment to fueling your success through unparalleled SEO services in Chennai.</p>
                              <a href="#">Readmore</a>
                               </div>
                               <div className="cont">
                                <img alt="" src="/webdads/images/seo-development/custome_reporting.webp"></img>
                               </div>
                            </div>
                        </Tab>

                        <Tab
                            eventKey="Personalized Web Content"
                            title={
                                <div style={{ textAlign: 'center' }}>
                                    <img src="/webdads/images/seo-development/Speed.svg" alt="Web Content" />
                                    <br />
                                    <h6>Personalized<br /> Web Content</h6>
                                </div>
                            }
                        >
                            <div  className="seo-contentbox">
                               <div className="cont">
                               <h2>Personalized Web Content </h2>
                               <p>Uncover the transformative power of personalized web content with Webdads2u. We don’t just craft words and visuals; we sculpt a digital symphony that resonates deeply with your audience.</p>
                               <p>Every element meticulously designed to evoke emotions, forge connections, and inspire action. Witness the alchemy of tailored content as visitors become ardent advocates, propelling your brand to unparalleled heights of resonance and connection, all guided by the passionate expertise of Webdads2u.</p>
                              <a href="#">Readmore</a>
                               </div>
                               <div className="cont">
                                <img alt="" src="/webdads/images/seo-development/Personalised-Web-Content.webp"></img>
                               </div>
                            </div>
                        </Tab>

                        <Tab
                            eventKey="Page Speed Optimization"
                            title={
                                <div style={{ textAlign: 'center' }}>
                                    <img src="/webdads/images/seo-development/Speed.svg" alt="Page Speed Optimization" />
                                    <br />
                                    <h6>Page Speed<br /> Optimization</h6>
                                </div>
                            }
                        >
                            <div  className="seo-contentbox">
                               <div className="cont">
                               <h2>Page Speed Optimization </h2>
                               <p>Experience the lightning-fast evolution of your website’s performance with Webdads2u’s page speed optimization. Every millisecond counts in capturing attention and fostering engagement. Our meticulous approach ensures your site loads swiftly, captivating visitors and keeping them immersed in your digital world.</p>
                               <p>Feel the exhilaration as your pages load seamlessly, forging an unbreakable connection with your audience. Embrace the power of a swift, responsive website, propelling your brand to new heights of online success.</p>
                              <a href="#">Readmore</a>
                               </div>
                               <div className="cont">
                                <img alt="" src="/webdads/images/seo-development/page-speed-optimization.webp"></img>
                               </div>
                            </div>
                        </Tab>
                    </Tabs>
                </Row>
            </Container>
        </section>
    );
}

export default Seotab;
