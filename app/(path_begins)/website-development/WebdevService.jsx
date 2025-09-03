import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import Reactimg from '../../../public/webdads/images/website-development/React-js.png'
function WebdevService() {
    return (
        <>
            <section>
                <Container>
                    <Row>
                        <div className="webdev-cont">
                            <h2>What Web Development Services we can do!</h2>
                            <p>All you need to keep your website 100% Secure and updated chnologies like JavaScript, PHP, and frameworks like React.js and WordPress drive creativity, crafting captivating digital realms.</p>
                        </div>
                    </Row>
                    <Row className="pt-4 pb-4">
                        <Col md={6} lg={3}>
                            <div className="webdev-box">
                                <Image src={Reactimg} alt="Logo" className="img-fluid" />
                                <a href="/react-js-development/">
                                    <h2>React.js</h2>
                                </a>
                                <p>Stay ahead of the curve with our expertise in React.js. We engineer lightning-fast and interactive web applications, leveraging the potential of React.js to enhance your online presence.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={3}>
                            <div className="webdev-box">
                                <img alt="" src="/webdads/images/website-development/Wordpress.png"></img>
                                <a href="/wordpress-development/">
                                    <h2>WordPress </h2>
                                </a>
                                <p>Experience the power of WordPress with our specialized development services. Whether it&apos;s a blog, e-commerce platform, or corporate website, our team crafts responsive .</p>
                            </div>
                        </Col>
                        <Col md={6} lg={3}>
                            <div className="webdev-box">
                                <img alt="" src="/webdads/images/website-development/php.png"></img>
                                <a href="/php-web-development/">
                                    <h2>PHP</h2>
                                </a>
                                <p>Rely on our PHP development proficiency to build robust and dynamic websites tailored to your specific needs. Our solutions ensure scalability and seamless functionality.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={3}>
                            <div className="webdev-box">
                                <img alt="" src="/webdads/images/website-development/Web-Portal.png"></img>
                                <a href="/web-portal-development/">
                                    <h2>Web Portal </h2>
                                </a>
                                <p>At Webdads2u, we specialize in creating captivating web portals that serve as the gateway to your digital universe. Our meticulously crafted portals seamlessly .</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default WebdevService;
