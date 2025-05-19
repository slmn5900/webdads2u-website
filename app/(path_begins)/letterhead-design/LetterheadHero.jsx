import React from 'react';
import Slider from '../../../components/common/Slider-image';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SocialMedia from '../../../components/common/SocialMedia';
// import { LuCheckCircle } from "react-icons/lu";
import { LuCircleCheckBig } from 'react-icons/lu';
import LetterheadSlider from './LetterheadSlider';

function LetterheadHero() {
    return (
        <>
            {/* Hero section */}
            <section className="isoapp">
                <Container>
                    <Row className="align-items-center">
                        <Col md={7} xs={7} lg={6}>
                            <h2>Letterhead designing company in India</h2>
                            <p>Professional letterhead designs tailored to reflect your brand identity, enhance credibility, and leave a lasting impression on recipients. </p>
                            <a href="/contact-us/">
                                <Button variant="contained">Contact us</Button>
                            </a>
                        </Col>
                        <Col md={5} xs={5} lg={6}>
                            <div className="text-center">
                                <img src="/webdads/images/letterhead/letterhead-hero.png" alt="mobileuiux-hero" className="w-100" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Slider */}
            <Slider />
            {/*  */}
            <section className="lhdpro pt-5 pb-5">
                <Container>
                    <Row className="align-items-center">
                        <div className="text-center profess">
                            <h2>Letterhead Design</h2>
                            <p>
                                Professional letterhead design is an added advantage for displaying reliability and authenticity, regardless of whether you welcome your employee with a joining letter, give a purchase order, or submit a quotation. Our
                                letterhead design is completely distinctive and eye-catching, which enhances your brand’s professionalism.
                            </p>
                        </div>

                        <Col md={12} lg={6}>
                            <div className="text-center">
                                <img src="/webdads/images/letterhead/sash-highspeed-networks-portfolio-letterhead.webp" alt="custome-erp" className=" rounded" />
                            </div>
                        </Col>
                        <Col md={12} lg={6}>
                            <div className="">
                                <h2>Why does any business need professional letterhead design services?</h2>
                                <p>
                                    It is important that the letterhead design you use for your business is distinctive, professional, and leaves a lasting impression on your employees, buyers, and sellers. It’s important to have a letterhead Design
                                    that complements your other branding elements and inspires readers to read the content written on it.
                                </p>
                                {/* <p><LuCheckCircle /> A letterhead design that is engaging </p>
                            <p><LuCheckCircle /> Letterhead Design concepts that are uniquely designed </p>
                            <p><LuCheckCircle /> Customer support that receives awards.</p> */}
                                <p>
                                    <LuCircleCheckBig /> A letterhead design that is engaging{' '}
                                </p>
                                <p>
                                    <LuCircleCheckBig /> Letterhead Design concepts that are uniquely designed{' '}
                                </p>
                                <p>
                                    <LuCircleCheckBig /> Customer support that receives awards.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="pb-5 letterrecent">
                <Container>
                    <Row>
                        <Col md={12} lg={4}>
                            <h2>Our Recent Creations</h2>
                        </Col>
                        <Col md={12} lg={8}>
                            <div className="">
                                <p>
                                    You cannot have a random letterhead design for your company; it should be simple yet eye-catching. Your brand’s appearance should ensure the reader recalls it when they see it, and more importantly, it should set
                                    the stage for the content that will be written on it. These are some of the innovative letterhead designs we created.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <LetterheadSlider />

            <section className="profsdesn">
                <Container>
                    <Row>
                        <Col md={12} lg={6}>
                            <div className="">
                                <h2>Professional Designs</h2>
                                <p>Letterhead design is a method of expression. Webdads2U offers the services of the finest graphic designers in Chennai, who have helped us become the leading letterhead designing service in Chennai.</p>
                                <p>
                                    Your skills can be enhanced with professional designs. Even though we are progressing towards a paperless society, letterheads are still essential documents. The company letterhead is essential in reflecting your
                                    brand value for offer letters and letters of intent.
                                </p>
                            </div>
                        </Col>
                        <Col md={12} lg={6}>
                            <div className="text-center">
                                <img alt="" src="/webdads/images/letterhead/arcman-kitchen-interior-portfolio-letterhead.webp"></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
<<<<<<< HEAD
            <SocialMedia />
=======
>>>>>>> 6010d3c (Add new features and updates)

            <section style={{ background: '#CEF0FF' }} className="pt-5 pb-5 whyletter">
                <Container>
                    <Row>
                        <div className="text-center">
                            <h2>Why our Letterheads? </h2>
                            <p>We pay meticulous attention to detail in our letterhead design, ensuring every aspect of your letterhead exudes quality and refinement.</p>
                        </div>
                        <Col md={6} lg={4}>
                            <div className="text-center">
                                <img alt="" src="/webdads/images/letterhead/Easy-to-create-and-customise.png"></img>
                                <h3>Easy to create and customise</h3>
                                <p>Designing letterheads for your brand online is a simple task, with guided steps that simplify the process of choosing customization options, templates, and editing online.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="text-center">
                                <img alt="" src="/webdads/images/letterhead/collaborate-with-our-designers.webp"></img>
<<<<<<< HEAD
                                <h3>Easy to create and customise</h3>
                                <p>Designing letterheads for your brand online is a simple task, with guided steps that simplify the process of choosing customization options, templates, and editing online.</p>
=======
                                <h3>Collaborate with our designers</h3>
                                <p>Customizing your letterheads can be done by working with our expert designers. Our letterheads are printed perfectly every single time, in addition to our super-catchy, modern designs.</p>
>>>>>>> 6010d3c (Add new features and updates)
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="text-center">
                                <img alt="" src="/webdads/images/letterhead/connect-with-our-customer-support.webp"></img>
<<<<<<< HEAD
                                <h3>Easy to create and customise</h3>
                                <p>Designing letterheads for your brand online is a simple task, with guided steps that simplify the process of choosing customization options, templates, and editing online.</p>
=======
                                <h3>Connect with our customer support</h3>
                                <p>Our customer support team is always there to assist you and take your prints to the next level. Create and customize them easily.</p>
>>>>>>> 6010d3c (Add new features and updates)
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="looking-letter">
                <Container>
                    <Row>
                        <div className="text-center">
                            <h2>Looking for Letterheads design?</h2>
                            <p>Explore our custom letterhead design services tailored to enhance your brand identity. Contact us to discuss your requirements today!</p>
                            <a href="/contact-us/">
                                <Button variant="contained">Connect For Free Consultation</Button>
                            </a>
                        </div>
                    </Row>
                </Container>
            </section>
<<<<<<< HEAD
=======
            <SocialMedia />
>>>>>>> 6010d3c (Add new features and updates)
        </>
    );
}

export default LetterheadHero;
