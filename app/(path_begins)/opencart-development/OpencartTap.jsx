
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../seo-company-in-chennai/Seoservice.scss'
function OpencartTap() {
        // Set the initial activeKey to match the first tab's eventKey
        const [activeKey, setActiveKey] = useState("OpenCart eCommerce Development");
    return (
        <>
          <section className="seotabsec opancarttabsec">
            <Container>
             <Row className="seovar-tab">
                    <Tabs
                        activeKey={activeKey}
                        onSelect={(k) => setActiveKey(k)}
                        transition={false}
                        id="noanim-tab-example"
                        className="mb-3"
                    >
                        <Tab
                            eventKey="OpenCart eCommerce Development"
                            title={
                                <div style={{ textAlign: 'center' }}>
                                    <img src="/webdads/images/seo-development/Coppy-writting.svg" alt="SEO Copywriting" />
                                    <br />
                                    <h6>OpenCart eCommerce<br></br> Development</h6>
                                </div>
                            }
                        >
                            <div  className="seo-contentbox">
                               <div className="cont">
                               <h2>OpenCart eCommerce Development</h2>
                               <p>At the forefront of OpenCart eCommerce solutions, Webdads2u excels in designing, developing, and outsourcing highly interactive solutions. Renowned for cost efficiency and premium quality, we specialize in crafting unique eCommerce shopping carts leveraging OpenCart technology to meet your business needs impeccably. </p>
                              
                               </div>
                               <div className="cont">
                                <img alt="" src="/webdads/images/opencart/woo-commerce.png"></img>
                               </div>
                            </div>
                        </Tab>

                        <Tab
                            eventKey="OpenCart Mobile App Development"
                            title={
                                <div style={{ textAlign: 'center' }}>
                                    <img  src="/webdads/images/seo-development/Call.svg" alt="Call Tracking" />
                                    <br />
                                    <h6>OpenCart Mobile App <br></br>Development</h6>
                                </div>
                            }
                        >
                            <div  className="seo-contentbox">
                               <div className="cont">
                               <h2>OpenCart Mobile App Development</h2>
                               <p>As a leading OpenCart development firm, we specialize in crafting mobile apps that strike the perfect balance between cutting-edge design, advanced technology, and a deep understanding of your brand identity. Our solutions feature intuitive navigation and are impeccably optimized for both iOS and Android platforms.</p>
                              <a href="#">Readmore</a>
                               </div>
                               <div className="cont">
                                <img alt="" src="/webdads/images/opencart/mobile-app.png"></img>
                               </div>
                            </div>
                        </Tab>

                        <Tab
                            eventKey="OpenCart Tech Consulting Services"
                            title={
                                <div style={{ textAlign: 'center' }}>
                                    <img src="/webdads/images/seo-development/Speed.svg" alt="SEO Reporting" />
                                    <br />
                                    <h6>OpenCart Tech Consulting Services</h6>
                                </div>
                            }
                        >
                            <div  className="seo-contentbox">
                               <div className="cont">
                               <h2>OpenCart Tech Consulting Services</h2>
                               <p>Unlock your business’s potential with OpenCart development. As a premier provider of top-notch OpenCart tech consulting services, we specialize in crafting captivating eCommerce websites. Our expertise spans OpenCart development consulting, theme customization, seamless migrations, and integrations, ensuring global audience reach and market competitiveness.
                               </p>
                              
                               </div>
                               <div className="cont">
                                <img alt="" src="/webdads/images/opencart/tech-consulting.png"></img>
                               </div>
                            </div>
                        </Tab>

                        <Tab
                            eventKey="OpenCart eCommerce Theme Development"
                            title={
                                <div style={{ textAlign: 'center' }}>
                                    <img src="/webdads/images/seo-development/Speed.svg" alt="Web Content" />
                                    <br />
                                    <h6>OpenCart eCommerce Theme Development</h6>
                                </div>
                            }
                        >
                            <div  className="seo-contentbox">
                               <div className="cont">
                               <h2>OpenCart eCommerce Theme Development</h2>
                               <p>Selecting the right OpenCart eCommerce theme is crucial as it influences user attraction and engagement. OpenCart, a top-notch eCommerce platform, excels in delivering efficient and fully functional websites. Our opencart development team assists in theme modification, UI design selection, and crafting SEO-optimized themes, ensuring enhanced online presence and customer satisfaction.
                               </p>
                              
                               </div>
                               <div className="cont">
                                <img alt="" src="/webdads/images/opencart/theme-developmen.png"></img>
                               </div>
                            </div>
                        </Tab>

                    </Tabs>
                </Row>
            </Container>
        </section>
        </>
    );
}

export default OpencartTap
