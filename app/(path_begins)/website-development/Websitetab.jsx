import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FaAngular, FaLaravel, FaReact, FaBootstrap, FaJsSquare, FaJenkins } from 'react-icons/fa';
<<<<<<< HEAD
import { SiEmberdotjs, SiJquery, SiFastapi, SiFlask, SiRubyonrails, SiLumen, SiSpringboot   } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";

 // Import your desired icons
=======
import { SiEmberdotjs, SiJquery, SiFastapi, SiFlask, SiRubyonrails, SiLumen, SiSpringboot } from 'react-icons/si';
import { RiNodejsLine } from 'react-icons/ri';

// Import your desired icons
>>>>>>> a0d19cc (Initial commit)

const Websitetab = () => {
    const [activeKey, setActiveKey] = useState(null);

    return (
        <>
<<<<<<< HEAD
            <section className='Website-tabsec pt-5'>
=======
            <section className="Website-tabsec pt-5">
>>>>>>> a0d19cc (Initial commit)
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="website-tab">
                                <h2 className="elementor-heading-title elementor-size-default">
<<<<<<< HEAD
                                    Our Full-Stack Web<br /> Development Services
                                </h2>
                                <p>
                                    We specialize in end-to-end web development services, crafting dynamic, user-centric sites across platforms. Our expertise spans front-end and back-end technologies, delivering responsive designs that enhance user experiences.
                                </p>
                            </div>
                            <Tabs
                                activeKey={activeKey}
                                onSelect={(k) => setActiveKey(k)}
                                transition={false}
                                id="noanim-tab-example"
                                className="mb-3"
                            >
                                <Tab eventKey="ANGULAR JS" title={
                                    <div style={{ textAlign: 'center' }}>
                                        <FaAngular size={50} /><br />
                                        <p>ANGULAR JS</p>
                                    </div>
                                }>
                                    {activeKey === "ANGULAR JS" && <div><p>AngularJS fuels our website’s dynamic functionality, simplifying development through its robust features like two-way data binding and modular design. Its versatility enables scalable, user-centric experiences while streamlining maintenance. Our site benefits from AngularJS’s power, ensuring an interactive and efficient interface for our users.</p></div>}
                                </Tab>
                                <Tab eventKey="LARAVEL" title={
                                    <div style={{ textAlign: 'center' }}>
                                        <FaLaravel size={50} /><br />
                                        <p>LARAVEL</p>
                                    </div>
                                }>
                                    {activeKey === "LARAVEL" && <div><p>Our website development relies on Laravel’s robust framework. Laravel empowers us with efficient tools for crafting feature-rich, scalable websites. Leveraging its clean syntax and modular structure, we ensure a streamlined development process. With Laravel, we create websites that boast reliability, and a seamless user experience.</p></div>}
                                </Tab>
                                <Tab eventKey="REACT" title={
                                    <div style={{ textAlign: 'center' }}>
                                        <FaReact size={50} /><br />
                                        <p>REACT</p>
                                    </div>
                                }>
                                    {activeKey === "REACT" && <div><p>Our website’s development hinges on React’s versatile framework. React empowers us to create interactive, responsive web experiences efficiently. Leveraging its component-based architecture, we ensure modular, scalable development. With React, our websites boast speed, flexibility, and a modern user interface.</p></div>}
                                </Tab>
                                <Tab eventKey="BOOTSTRAP" title={
                                    <div style={{ textAlign: 'center' }}>
                                        <FaBootstrap size={50} /><br />
                                        <p>BOOTSTRAP</p>
                                    </div>
                                }>
                                    {activeKey === "BOOTSTRAP" && <div><p>Our website development relies on Bootstrap’s powerful toolkit. Bootstrap enables us to create responsive, visually appealing websites with ease. Leveraging its grid system and pre-built components, we ensure a streamlined and efficient design process. With Bootstrap, our websites exhibit consistency, adaptability, and a polished user interface.</p>

</div>}
                                </Tab>
                                <Tab eventKey="EMBER JS" title={
                                    <div style={{ textAlign: 'center' }}>
                                       
                                        <SiEmberdotjs size={50} /><br />
                                        <p>EMBER JS</p>
                                    </div>
                                }>
                                    {activeKey === "EMBER JS" && <div><p>Our web development services thrive on Ember.js, a potent framework for crafting dynamic websites. Ember.js empowers our team to deliver high-quality thanks to its robust architecture. With Ember.js driving our development, we ensure exceptional user experiences and  enhancing the value of our web development services.</p>

</div>}
                                </Tab>
                                <Tab eventKey="JQUERY" title={
                                    <div style={{ textAlign: 'center' }}>
                                      
                                       <SiJquery size={50} /><br />
                                        <p>JQUERY</p>
                                    </div>
                                }>
                                    {activeKey === "JQUERY" && <div><p>In our suite of web development services, jQuery remains a fundamental tool for creating dynamic and responsive websites. Leveraging jQuery’s versatile library. With jQuery driving our development, we ensure efficient DOM manipulation, and enhanced user experiences, enriching the scope of our web development services.</p>

</div>}
=======
                                    Our Full-Stack Web
                                    <br /> Development Services
                                </h2>
                                <p>
                                    We specialize in end-to-end web development services, crafting dynamic, user-centric sites across platforms. Our expertise spans front-end and back-end technologies, delivering responsive designs that enhance user
                                    experiences.
                                </p>
                            </div>
                            <Tabs activeKey={activeKey} onSelect={(k) => setActiveKey(k)} transition={false} id="noanim-tab-example" className="mb-3">
                                <Tab
                                    eventKey="ANGULAR JS"
                                    title={
                                        <div style={{ textAlign: 'center' }}>
                                            <FaAngular size={50} />
                                            <br />
                                            <p>ANGULAR JS</p>
                                        </div>
                                    }
                                >
                                    {activeKey === 'ANGULAR JS' && (
                                        <div>
                                            <p>
                                                AngularJS fuels our website’s dynamic functionality, simplifying development through its robust features like two-way data binding and modular design. Its versatility enables scalable, user-centric
                                                experiences while streamlining maintenance. Our site benefits from AngularJS’s power, ensuring an interactive and efficient interface for our users.
                                            </p>
                                        </div>
                                    )}
                                </Tab>
                                <Tab
                                    eventKey="LARAVEL"
                                    title={
                                        <div style={{ textAlign: 'center' }}>
                                            <FaLaravel size={50} />
                                            <br />
                                            <p>LARAVEL</p>
                                        </div>
                                    }
                                >
                                    {activeKey === 'LARAVEL' && (
                                        <div>
                                            <p>
                                                Our website development relies on Laravel’s robust framework. Laravel empowers us with efficient tools for crafting feature-rich, scalable websites. Leveraging its clean syntax and modular structure, we
                                                ensure a streamlined development process. With Laravel, we create websites that boast reliability, and a seamless user experience.
                                            </p>
                                        </div>
                                    )}
                                </Tab>
                                <Tab
                                    eventKey="REACT"
                                    title={
                                        <div style={{ textAlign: 'center' }}>
                                            <FaReact size={50} />
                                            <br />
                                            <p>REACT</p>
                                        </div>
                                    }
                                >
                                    {activeKey === 'REACT' && (
                                        <div>
                                            <p>
                                                Our website’s development hinges on React’s versatile framework. React empowers us to create interactive, responsive web experiences efficiently. Leveraging its component-based architecture, we ensure
                                                modular, scalable development. With React, our websites boast speed, flexibility, and a modern user interface.
                                            </p>
                                        </div>
                                    )}
                                </Tab>
                                <Tab
                                    eventKey="BOOTSTRAP"
                                    title={
                                        <div style={{ textAlign: 'center' }}>
                                            <FaBootstrap size={50} />
                                            <br />
                                            <p>BOOTSTRAP</p>
                                        </div>
                                    }
                                >
                                    {activeKey === 'BOOTSTRAP' && (
                                        <div>
                                            <p>
                                                Our website development relies on Bootstrap’s powerful toolkit. Bootstrap enables us to create responsive, visually appealing websites with ease. Leveraging its grid system and pre-built components, we
                                                ensure a streamlined and efficient design process. With Bootstrap, our websites exhibit consistency, adaptability, and a polished user interface.
                                            </p>
                                        </div>
                                    )}
                                </Tab>
                                <Tab
                                    eventKey="EMBER JS"
                                    title={
                                        <div style={{ textAlign: 'center' }}>
                                            <SiEmberdotjs size={50} />
                                            <br />
                                            <p>EMBER JS</p>
                                        </div>
                                    }
                                >
                                    {activeKey === 'EMBER JS' && (
                                        <div>
                                            <p>
                                                Our web development services thrive on Ember.js, a potent framework for crafting dynamic websites. Ember.js empowers our team to deliver high-quality thanks to its robust architecture. With Ember.js
                                                driving our development, we ensure exceptional user experiences and enhancing the value of our web development services.
                                            </p>
                                        </div>
                                    )}
                                </Tab>
                                <Tab
                                    eventKey="JQUERY"
                                    title={
                                        <div style={{ textAlign: 'center' }}>
                                            <SiJquery size={50} />
                                            <br />
                                            <p>JQUERY</p>
                                        </div>
                                    }
                                >
                                    {activeKey === 'JQUERY' && (
                                        <div>
                                            <p>
                                                In our suite of web development services, jQuery remains a fundamental tool for creating dynamic and responsive websites. Leveraging jQuery’s versatile library. With jQuery driving our development, we
                                                ensure efficient DOM manipulation, and enhanced user experiences, enriching the scope of our web development services.
                                            </p>
                                        </div>
                                    )}
>>>>>>> a0d19cc (Initial commit)
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </Container>
            </section>
<<<<<<< HEAD
            <section className='our-web'>
      <Container>
      <Row>
      
      <Col md={12} lg={7}>
      <div className=''>
      <h1>API Development</h1>
      <p>full-fledged Web API development services, featuring seamless integration—whether owned or 3rd party—to swiftly launch your web application portal. It’s all about accelerating your online presence through our comprehensive web development services.</p>
      </div>
      <div className="node-icn">
       <Row>
       <Col md={2} xs={6}>
       <div className='text-center'>
       <RiNodejsLine  size={50}/>
       <h5>Node.js</h5>
       </div>
       </Col>
       <Col md={2} xs={6}>
       <div className='text-center'>
       <SiFastapi  size={50} />
<h5>FastAPI</h5>
       </div>
       </Col>
       <Col md={2} xs={6}>
       <div className='text-center'>
       <SiFlask  size={50} />
          <h5>Flask</h5>
       </div>
       </Col>
       <Col md={2} xs={6}>
       <div className='text-center'>
      
<SiRubyonrails  size={50}/>
          <h5>Ruby on Rails</h5>
       </div>
       </Col>
       <Col md={2} xs={6}>
       <div className='text-center'>
       
       <SiSpringboot  size={50}/>
          <h5>Spring Boot</h5>
       </div>
       </Col>
       <Col md={2} xs={6}>
       <div className='text-center'>
       <SiLumen   size={50}/>
          <h5>Lumen</h5>
       </div>
       </Col>

       </Row>
        </div>

      <div className="d-flex look-btn">
        <div >
          <p>Looking for Immersive Frontends?</p>
        </div>
       
        <div >
          <a herf="/contact-us"><button>Talk To Our UI/UX Consultants</button></a>
        </div>
      </div>
      </Col>
      
      <Col md={12} lg={5} className='text-center'>
      <img alt="" src="/webdads/images/website-development/Api-image.webp"></img>
      </Col>
      </Row>




      </Container>
    </section>

=======
            <section className="our-web">
                <Container>
                    <Row>
                        <Col md={12} lg={7}>
                            <div className="">
                                <h1>API Development</h1>
                                <p>
                                    full-fledged Web API development services, featuring seamless integration—whether owned or 3rd party—to swiftly launch your web application portal. It’s all about accelerating your online presence through our
                                    comprehensive web development services.
                                </p>
                            </div>
                            <div className="node-icn">
                                <Row>
                                    <Col md={2} xs={6}>
                                        <div className="text-center">
                                            <RiNodejsLine size={50} />
                                            <h5>Node.js</h5>
                                        </div>
                                    </Col>
                                    <Col md={2} xs={6}>
                                        <div className="text-center">
                                            <SiFastapi size={50} />
                                            <h5>FastAPI</h5>
                                        </div>
                                    </Col>
                                    <Col md={2} xs={6}>
                                        <div className="text-center">
                                            <SiFlask size={50} />
                                            <h5>Flask</h5>
                                        </div>
                                    </Col>
                                    <Col md={2} xs={6}>
                                        <div className="text-center">
                                            <SiRubyonrails size={50} />
                                            <h5>Ruby on Rails</h5>
                                        </div>
                                    </Col>
                                    <Col md={2} xs={6}>
                                        <div className="text-center">
                                            <SiSpringboot size={50} />
                                            <h5>Spring Boot</h5>
                                        </div>
                                    </Col>
                                    <Col md={2} xs={6}>
                                        <div className="text-center">
                                            <SiLumen size={50} />
                                            <h5>Lumen</h5>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className="d-flex look-btn">
                                <div>
                                    <p>Looking for Immersive Frontends?</p>
                                </div>

                                <div>
                                    <a herf="/contact-us">
                                        <button>Talk To Our UI/UX Consultants</button>
                                    </a>
                                </div>
                            </div>
                        </Col>

                        <Col md={12} lg={5} className="text-center">
                            <img alt="" src="/webdads/images/website-development/Api-image.webp"></img>
                        </Col>
                    </Row>
                </Container>
            </section>
>>>>>>> a0d19cc (Initial commit)
        </>
    );
};

export default Websitetab;
