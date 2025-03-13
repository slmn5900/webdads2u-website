import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "../seo-company-in-chennai/Seoservice.scss"
function WebpotralTab() {
        // Set the initial activeKey to match the first tab's eventKey
        const [activeKey, setActiveKey] = useState("B2B Portal Development");
  return (
    <>
    <section className="seotabsec webporttab">
            <Container>
                <div class="text-center">
                    <h2>Powerful Web Portal Services For Your Business
                    </h2>
                </div>
                <Row className="seovar-tab webpotvar">
                    <Tabs
                        activeKey={activeKey}
                        onSelect={(k) => setActiveKey(k)}
                        transition={false}
                        id="noanim-tab-example"
                        className="mb-3"
                    >
                        <Tab
                            eventKey="B2B Portal Development"
                            title={
                                <div style={{ textAlign: 'center' }}>
                                    <img src="/webdads/images/webportal/b2b-portal-development.webp" alt="B2B Portal Development" />
                                    <br />
                                    <h6>B2B Portal<br />Development</h6>
                                </div>
                            }
                        >
                            <div  className="seo-contentbox">
                               <div className="cont">
                               <h2>B2B Portal Development</h2>
                               <p>Looking for B2B Portal Development services? Look no further! Our expert team specializes in Web Portal Development for B2B purposes. We design and build customized portals to facilitate seamless communication and transactions between businesses. With a focus on user experience and functionality, we ensure that your B2B portal meets the unique needs of your organization. Contact us today to get started!</p>
                              
                               </div>
                               <div className="cont">
                                <img alt="" src="/webdads/images/webportal/B2B.webp"></img>
                               </div>
                            </div>
                        </Tab>

                        <Tab
                            eventKey="B2C Portal Development"
                            title={
                                <div style={{ textAlign: 'center' }}>
                                    <img src="/webdads/images/webportal/b2c-portal-development.png" alt="B2C Portal Development" />
                                    <br />
                                    <h6>B2C Portal <br></br>Development</h6>
                                </div>
                            }
                        >
                            <div  className="seo-contentbox">
                               <div className="cont">
                               <h2>B2C Portal Development</h2>
                               <p>Need a B2C Web Portal Development solution? We’ve got you covered! Our experienced team specializes in Web Portal Development for B2C purposes. We create custom portals that provide a user-friendly interface for customers to interact with your products or services. From e-commerce platforms to service marketplaces, we ensure your B2C portal is optimized for performance and user satisfaction. Contact us now to discuss your project!
                               </p>
                              
                               </div>
                               <div className="cont">
                                <img alt="" src="/webdads/images/webportal/b2c.webp"></img>
                               </div>
                            </div>
                        </Tab>

                        <Tab
                            eventKey="Vendor Portal Development"
                            title={
                                <div style={{ textAlign: 'center' }}>
                                    <img src="/webdads/images/webportal/vendor-portal-development.png" alt="Vendor Portal Development" />
                                    <br />
                                    <h6>Vendor Portal <br></br>Development</h6>
                                </div>
                            }
                        >
                            <div  className="seo-contentbox">
                               <div className="cont">
                               <h2>Vendor Portal Development</h2>
                               <p>Seeking Vendor Web Portal Development? We’re your solution! Our team excels in Web Portal Development customized for vendors. We create intuitive portals that streamline communication and transactions between your business and its vendors. With our expertise, your vendor portal will enhance efficiency and collaboration. Contact us today to start building your vendor portal!</p>
                             
                               </div>
                               <div className="cont">
                                <img alt="" src="/webdads/images/webportal/vendor-portal-development.webp"></img>
                               </div>
                            </div>
                        </Tab>

                        <Tab
                            eventKey="eCommerce Portal Development"
                            title={
                                <div style={{ textAlign: 'center' }}>
                                    <img src="/webdads/images/webportal/ecommerce-portal-development.png" alt="eCommerce Portal Development" />
                                    <br />
                                    <h6>eCommerce Portal <br></br>Development</h6>
                                </div>
                            }
                        >
                            <div  className="seo-contentbox">
                               <div className="cont">
                               <h2>eCommerce Portal Development</h2>
                               <p>Our eCommerce web portal development solutions are designed to empower businesses with a wide range of features, including multi-vendor marketplaces, trade portals, auction and bidding platforms, and custom solutions. Leveraging the latest technologies such as AR/VR and AI, we ensure that your portal is equipped with cutting-edge capabilities to drive growth and enhance user experiences. Explore the endless possibilities for your eCommerce venture!
                               </p>
                               
                               </div>
                               <div className="cont">
                                <img alt="" src="/webdads/images/webportal/eCommerce-Portal.webp"></img>
                               </div>
                            </div>
                        </Tab>

                        <Tab
                            eventKey="Travel Portal Development"
                            title={
                                <div style={{ textAlign: 'center' }}>
                                    <img src="/webdads/images/webportal/travel-portal-development.png" alt="Travel Portal Development" />
                                    <br />
                                    <h6>Travel Portal<br></br> Development</h6>
                                </div>
                            }
                        >
                            <div  className="seo-contentbox">
                               <div className="cont">
                               <h2>Travel Portal Development </h2>
                               <p>Embark on a journey with our Travel Web Portal Development services! Our team specializes in Web Portal Development tailored for the travel industry. We create intuitive portals that provide seamless booking experiences for travelers. From flight and hotel reservations to tour packages, our travel portals are designed to enhance efficiency and customer satisfaction. Contact us today to get started!
                               </p>
                               
                               </div>
                               <div className="cont">
                                <img alt="" src="/webdads/images/webportal/travelportal-development.png"></img>
                               </div>
                            </div>
                        </Tab>
                    </Tabs>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default WebpotralTab