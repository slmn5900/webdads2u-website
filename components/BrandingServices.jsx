import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../style/home/brand.css';
import Link from 'next/link';
// import Counter from '../Counter/page';
const BrandingServices = () => {
    return (
        <>
            <Container>
                <Row className="align-items-start pt-5">
                    <Col md={6}>
                        <Row className="mb-4">
                            <Col className="layout-brand">
                                <h2>Branding Services</h2>
                                <p>
                                    <strong>
                                        <a href="/branding-design/" style={{ color: '#7a7a7a', textDecoration: 'none' }}>
                                            Branding services
                                        </a>
                                    </strong>{' '}
                                    &nbsp; encompass the strategic initiatives a company implements to forge, sustain, and amplify its brand identity. The primary goal is to cultivate a robust, distinct, and cohesive image within the intended
                                    audience. These services encapsulate various tasks such as logo and tagline development, crafting marketing collaterals, website creation, and content generation aimed at brand promotion. The ultimate objective is
                                    to instill a favorable perception of the company among customers, potential clients, and stakeholders.
                                </p>
                                <p>
                                    As a distinguished web designing and web development company in Chennai, Webdads2u Pvt. Ltd. recognizes the pivotal role of branding services in fortifying a company’s online presence and fostering positive
                                    relationships with its audience.
                                </p>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <div className="d-flex">
                                    <div>
                                        <img alt="" variant="top" src="https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_25,h_26/f_auto,q_auto/v1701069682/logo-branding-services_5869f711/logo-branding-services_5869f711.png" width={'25px'} />
                                    </div>

                                    <div>
                                        <Link href="/logo-design-agency/" className="text-decoration-none ">
                                            <p className="ms-2 fw-semibold text-black">Logo</p>
                                        </Link>
                                    </div>
                                </div>
                            </Col>

                            <Col md={6}>
                                <div className="d-flex">
                                    <div>
                                        <img
                                            alt=""
                                            variant="top"
                                            src="https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_25,h_26/f_auto,q_auto/v1701069686/bussiness-card-branding-services_58549342/bussiness-card-branding-services_58549342.png"
                                            width={'25px'}
                                        />
                                    </div>
                                    <div>
                                        <Link href="/business-card/" className="text-decoration-none ">
                                            <p className="ms-2 fw-semibold text-black">Business Card</p>
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="d-flex">
                                    <div>
                                        <img
                                            alt=""
                                            variant="top"
                                            src="https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_25,h_26/f_auto,q_auto/v1701069662/brochure-branding-services_591cb50b/brochure-branding-services_591cb50b.png"
                                            width={'25px'}
                                        />
                                    </div>
                                    <div>
                                        <Link href="/brochure/" className="text-decoration-none ">
                                            <p className="ms-2 fw-semibold text-black">Brochure</p>
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                            {/* </Row> */}

                            {/* <Row className="my-2"> */}
                            <Col md={6}>
                                <div className="d-flex">
                                    <div>
                                        <img
                                            alt=""
                                            variant="top"
                                            src="https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_25,h_26/f_auto,q_auto/v1701069674/product-branding-services_58850203/product-branding-services_58850203.png"
                                            width={'25px'}
                                        />
                                    </div>
                                    <div>
                                        <Link
                                            href="
            "
                                            className="text-decoration-none "
                                        >
                                            <p className="ms-2 fw-semibold text-black">Product Design</p>
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="d-flex">
                                    <div>
                                        <img alt="" variant="top" src="https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_25,h_26/f_auto,q_auto/v1701069678/ppt-branding-services_5874dfa2/ppt-branding-services_5874dfa2.png" width={'25px'} />
                                    </div>
                                    <div>
                                        <Link href="" className="text-decoration-none ">
                                            {' '}
                                            <p className="ms-2 fw-semibold text-black">PPT Design</p>
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="d-flex">
                                    <div>
                                        <img
                                            alt=""
                                            variant="top"
                                            src="https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_25,h_26/f_auto,q_auto/v1701069670/social-media-branding-services_5896bc63/social-media-branding-services_5896bc63.png"
                                            width={'25px'}
                                        />
                                    </div>
                                    <div>
                                        <Link href="/social-media-service/" className="text-decoration-none ">
                                            <p className="ms-2 fw-semibold text-black">Social Media Poster</p>
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                            {/* </Row> */}

                            {/* <Row className="mb-4"> */}
                            <Col md={6}>
                                <div className="d-flex">
                                    <div>
                                        <img
                                            alt=""
                                            variant="top"
                                            src="https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_25,h_26/f_auto,q_auto/v1701069666/letter-head-branding-services_590104d0/letter-head-branding-services_590104d0.png"
                                            width={'25px'}
                                        />
                                    </div>
                                    <div>
                                        <Link href="" className="text-decoration-none ">
                                            <p className="ms-2 fw-semibold text-black">Letter Head</p>
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6}>
                        <Row className="mt-4">
                            <Col>
                                <div>
                                    <img src="https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_648,h_386/f_auto,q_auto/v1718112792/branding-service_157851150-1/branding-service_157851150-1.webp" alt="Web Designing" className="img-fluid" />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mb-4 ">
                    <Col>
                        <Button
                            href="/branding-design/"
                            // variant="primary"
                            className="border rounded-5"
                            style={{
                                background: 'linear-gradient(90deg, #871752 0%, #262250 50%)',
                                padding: '18px 50px'
                            }}
                        >
                            Read More
                        </Button>
                    </Col>
                </Row>
                {/* <Row>
        <Col className="text-center">
          <Button variant="primary" href="/branding-design/">Read More</Button>
        </Col>
      </Row> */}
            </Container>

            {/* <div className="d-flex ">

    <Counter title="Satisfied Clients" endValue={150} />
        <Counter title="Successful Projects" endValue={250} />
        <Counter title="Sales Closed" endValue={300} />
        <Counter title="Years of Experience" endValue={10} />
   </div>
     */}
        </>
    );
};

export default BrandingServices;
