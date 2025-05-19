import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCircleCheck } from "react-icons/fa6";
<<<<<<< HEAD
=======
import Slider2 from '../../../components/common/Slider2';
>>>>>>> 6010d3c (Add new features and updates)

function Wavecard() {
    return (
        <>
            <section className="wave-box">
                <Container>
                    <Row>
                        <Col md={4}>
                            <div className="crm-box">
                                <div className="d-flex">
                                    <img src="/webdads/images/crm/CRM-Software-Solutions.png" alt="CRM Software Solutions" />
                                    <h2>CRM Software Solutions</h2>
                                </div>
                                <p>Unlock business potential with our advanced CRM software. Tailored features enhance customer interactions, streamline workflows, and boost overall efficiency.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="crm-box">
                                <div className="d-flex">
                                    <img src="/webdads/images/crm/CRM-Maintenance.png" alt="CRM Maintenance and Upgrades" />
                                    <h2>CRM Maintenance and Upgrades</h2>
                                </div>
                                <p>Ensure optimal performance with our CRM maintenance and upgrade services. Stay ahead with the latest features, security patches, and seamless system enhancements.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="crm-box">
                                <div className="d-flex">
                                    <img src="/webdads/images/crm/integration.png" alt="CRM Integration Services" />
                                    <h2>CRM Integration Services</h2>
                                </div>
                                <p>Seamlessly connect your systems with our CRM integration services. Enhance data flow, improve communication, and achieve a unified view for better decision-making.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="pt-3">
                        <Col md={4}>
                            <div className="crm-box1">
                                <div className="d-flex">
                                    <img src="/webdads/images/crm/Layer-146.png" alt="CRM Process Automation Solutions" />
                                    <h2>CRM Process Automation Solutions</h2>
                                </div>
                                <p>Boost productivity with our CRM process automation solutions. Effortlessly streamline repetitive tasks, reduce manual errors, and enhance overall operational efficiency.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="crm-box">
                                <div className="d-flex">
                                    <img src="/webdads/images/crm/CRM-Mobile-Application.png" alt="CRM Mobile Application" />
                                    <h2>CRM Mobile Application</h2>
                                </div>
                                <p>Stay connected on the go with our CRM mobile application. Access real-time data, manage leads, and nurture customer relationships anytime, anywhere for increased agility.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="crm-box">
                                <div className="d-flex">
                                    <img src="/webdads/images/crm/CRM-Migration-Solutions.png" alt="CRM Migration Solutions" />
                                    <h2>CRM Migration Solutions</h2>
                                </div>
                                <p>Upgrade effortlessly with our CRM migration solutions. Seamlessly transition data, maintain system integrity, and ensure a smooth migration process for uninterrupted business operations.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="empt-wave">
                <Row>
                    <Col className="text-center">
                        <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                            <defs>
                                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"></path>
                            </defs>
                            <g className="parallax">
                                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#ECFCF9E6" />
                            </g>
                        </svg>
                    </Col>
                </Row>
            </section>
            <section className="crm-develoment">
                <Container>
                    <Row>
                        <div className="text-center">
                            <h2>CRM DEVELOPMENT SOLUTION</h2>
                            <p>Boost efficiency, streamline processes, and enhance customer relationships seamlessly. Empower your business with our tailored CRM development solutions – Best CRM for small businesses.</p>
<<<<<<< HEAD
                            <img alt='' src="/webdads/images/crm/crm-mockup.jpg" className="w-100"></img>
=======
                            <img alt='' src="/webdads/images/crm/crm-mockup.jpg" height="267" width="600"></img>
>>>>>>> 6010d3c (Add new features and updates)
                        </div>
                    </Row>
                    <Row className="pt-5 ">
                        <Col md={3}>
                            <div className="text-center strategic">
                                <img alt='' src="/webdads/images/crm/strategy-crm.png"></img>
                                <h2>Strategic CRM</h2>
                                <p>Strategic CRM focuses on long-term planning and customer relationship development. It integrates technology to align business goals with customer needs, enhancing overall efficiency.</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="text-center strategic strt">
                                <img alt='' src="/webdads/images/crm/analytical-crm.png"></img>
                                <h2>Analytical CRM
                                </h2>
                                <p>Analytical CRM leverages data analysis to gain insights into customer behavior, preferences, and trends. It empowers small businesses to make informed decisions and deliver personalized experiences.</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="text-center strategic">
                                <img alt='' src="/webdads/images/crm/operational-crm.png"></img>
                                <h2>Operational CRM
                                </h2>
                                <p>Operational CRM streamlines day-to-day customer-facing processes, such as sales, marketing, and service automation. The best CRM for small businesses optimizes operational efficiency.

</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="text-center strategic strt">
                                <img alt='' src="/webdads/images/crm/collabrative-crm.png"></img>
                                <h2>Collaborative CRM
                                </h2>
                                <p>Collaborative CRM emphasizes cross-departmental communication and teamwork to enhance customer relationships. It ensures a unified approach, where teams share customer information seamlessly.

</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
<<<<<<< HEAD
            <section>
                <Container>
                    <Row>
                        <Col>
                            <div className="text-center">
                                <h2>Our Industry-Leaditng CRM Platform Tools And Integrations</h2>
                            </div>
=======
            <section className='mb-5'>
                <Container>
                    <Row>
                        <Col>
                            <div className="text-center mt-5">
                                <h2 style={{color:"unset"}}>Our Industry-Leaditng CRM Platform Tools And Integrations</h2>
                            </div>
                            <Slider2/>   
>>>>>>> 6010d3c (Add new features and updates)
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="pt-5">
                <Container>
                    <Row>
                        
                            <div className="text-center erp-dev">
                                <h2>ERP Development</h2>
                                <p>Streamline operations with custom ERP development for seamless integration and efficient business processes.</p>
                            </div>
<<<<<<< HEAD
                        
=======
                                                 
>>>>>>> 6010d3c (Add new features and updates)
                    </Row>
                    <Row>
                        <Col md={6}>
                        <div className="process d-flex">
                          <div className="">
                            <img alt='' src="/webdads/images/crm/Process-Automation.png"></img>
                          </div>
                          <div className="process-auto">
                            <h2>Process Automation</h2>
                            <p>Business process automation across departments with loads of features and no process modifications.</p>
                          </div>
                        </div>
                        <div className="process d-flex">
                          <div className="">
                            <img alt='' src="/webdads/images/crm/Enhanced-Security.png"></img>
                          </div>
                          <div className="process-auto">
                            <h2>Enhanced Security</h2>
                            <p>Protects sensitive data and financial records from illegal access and reputation-damaging actions.</p>
                          </div>
                        </div>
                        <div className="process d-flex">
                          <div className="">
                            <img alt='' src="/webdads/images/crm/Customer-Services.png"></img>
                          </div>
                          <div className="process-auto">
                            <h2>Customer Service</h2>
                            <p>Deliver goods faster with increased productivity and effective inventory control to provide good customer service.</p>
                          </div>
                        </div>
                        <div className="process d-flex">
                          <div className="">
                            <img alt='' src="/webdads/images/crm/Comprehensive-Reporting.png"></img>
                          </div>
                          <div className="process-auto">
                            <h2>Comprehensive Reporting</h2>
                            <p>Providing full reporting on business cash flow statements, income statements, and balance sheets.</p>
                          </div>
                        </div>
                        <div className="process d-flex">
                          <div className="">
                            <img alt='' src="/webdads/images/crm/Keeping-All-Data-in-One-Location.png"></img>
                          </div>
                          <div className="process-auto">
                            <h2>Keeping All Data in One Location </h2>
                            <p>Providing full reporting on business cash flow statements, income statements, and balance sheets.</p>
                          </div>
                        </div>
                        <div className="process d-flex">
                          <div className="">
                            <img alt='' src="/webdads/images/crm/Regulatory-Compliance.png"></img>
                          </div>
                          <div className="process-auto">
                            <h2>Regulatory Compliance</h2>
                            <p>Saves data in a single centralized location helping to simplify your business operations.</p>
                          </div>
                        </div>
                        </Col>
                        <Col md={6}>
                        <div className="">
                            <img alt='' src="/webdads/images/crm/erp-enter.jpg" className="w-100"></img>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='our-fully'>
            <Container>
            <Row>
             <Col md={6}>
             <div className="">
            <img alt='' src="/webdads/images/crm/erp-image.jpg" className="w-100"></img>    
                
            </div></Col>
             <Col md={6}>
             <div className="">
                <h2>Our Fully Integrated and Customizable Modules for ERP Systems</h2>
             </div>
             <div className="d-flex cust-web">
            <div className="">
                <p><FaCircleCheck /> Customer Web Portal</p>
                <p><FaCircleCheck /> Finance</p>
                <p><FaCircleCheck /> Procurement</p>
                <p><FaCircleCheck /> Manufacturing</p>
                <p><FaCircleCheck /> Inventory Management</p>
                <p><FaCircleCheck /> Workforce Management</p>
                <p><FaCircleCheck /> Ecommerce</p>
            </div>
            <div className="">
                <p><FaCircleCheck /> Order Management</p>
                <p><FaCircleCheck /> Warehouse Management</p>
                <p><FaCircleCheck /> Supply Chain Management</p>
                <p><FaCircleCheck /> CRM & Sales</p>
                <p><FaCircleCheck /> Marketing Automation</p>
                <p><FaCircleCheck /> Distribution</p>
                
            </div>
              

             </div>
             </Col>

            </Row>

            </Container>

            </section>
            <section>
            <Container>
            <Row>
             <div className="text-center">
                <img alt='' src="/webdads/images/crm/erp-process.png" className="w-100"></img>
             </div>

            </Row>

            </Container>


            </section>
        </>
    );
}

export default Wavecard;
