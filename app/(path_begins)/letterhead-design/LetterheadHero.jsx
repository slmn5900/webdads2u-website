// import React from 'react';
// import Slider from '../../../components/common/Slider-image';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import SocialMedia from '../../../components/common/SocialMedia';
// import { LuCheckCircle } from "react-icons/lu";
import { LuCircleCheckBig } from 'react-icons/lu';
import LetterheadSlider from './LetterheadSlider';
import Banner from '../../../components/ui/banner/Banner';
import ClientLogoSlider from '../../../components/ui/client-logo-slider/ClientLogoSlider';
import LookingWebsiteMaintenance from '../website-maintenance/Looking-Website-Maintenance';
import Title from '../../../components/Title';
import Description from '../../../components/Description';

function LetterheadHero() {
    return (
        <>
            <Banner />
            {/* Slider */}
            <ClientLogoSlider />

            {/*  */}
            <section className="lhdpro ">
                <Container>
                    <Row className="align-items-center">
                        <div className="text-center profess">
                            <Title title={'Letterhead Design'} />
                            {/* <h2>Letterhead Design</h2> */}
                            <Description
                                Des=" Professional letterhead design is an added advantage for displaying reliability and authenticity, regardless of whether you welcome your employee with a joining letter, give a purchase order, or submit a quotation. Our
                                letterhead design is completely distinctive and eye-catching, which enhances your brand’s professionalism.
                          "
                            />
                            {/* <p>
                                Professional letterhead design is an added advantage for displaying reliability and authenticity, regardless of whether you welcome your employee with a joining letter, give a purchase order, or submit a quotation. Our
                                letterhead design is completely distinctive and eye-catching, which enhances your brand’s professionalism.
                            </p> */}
                        </div>

                        <Col md={12} lg={6}>
                            <div className="text-center">
                                <img
                                    src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757507384/webdads2u/letterhead-design/sash-highspeed-networks-portfolio.png"
                                    alt="sash highspeed networks portfolio"
                                    className="img-fuild rounded"
                                    width={'100%'}
                                />
                            </div>
                        </Col>
                        <Col md={12} lg={6}>
                            <div className="pt-4">
                                <h2>Why does any business need professional letterhead design services?</h2>
                                <Description
                                    Des="   It is important that the letterhead design you use for your business is distinctive, professional, and leaves a lasting impression on your employees, buyers, and sellers. It’s important to have a letterhead Design
                                    that complements your other branding elements and inspires readers to read the content written on it.
                              "
                                />

                                {/* <p>
                                   </p> */}
                                {/* <p><LuCheckCircle /> A letterhead design that is engaging </p>
                            <p><LuCheckCircle /> Letterhead Design concepts that are uniquely designed </p>
                            <p><LuCheckCircle /> Customer support that receives awards.</p> */}
                                <p className="pt-2">
                                    <LuCircleCheckBig /> A letterhead design that is engaging{' '}
                                </p>
                                <p className="pt-2">
                                    <LuCircleCheckBig /> Letterhead Design concepts that are uniquely designed{' '}
                                </p>
                                <p className="pt-2">
                                    <LuCircleCheckBig /> Customer support that receives awards.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="pb-5 pt-4 letterrecent">
                <Container>
                    <Row>
                        <Col md={12} lg={4}>
                            <h2>Our Recent Creations</h2>
                        </Col>
                        <Col md={12} lg={8}>
                            <div>
                                <Description
                                    Des=" You cannot have a random letterhead design for your company; it should be simple yet eye-catching. Your brand’s appearance should ensure the reader recalls it when they see it, and more importantly, it should set
                                    the stage for the content that will be written on it. These are some of the innovative letterhead designs we created.
                              "
                                />
                                {/* <p>
                                    You cannot have a random letterhead design for your company; it should be simple yet eye-catching. Your brand’s appearance should ensure the reader recalls it when they see it, and more importantly, it should set
                                    the stage for the content that will be written on it. These are some of the innovative letterhead designs we created.
                                </p> */}
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
                            <div>
                                <Title title={'Professional Designs'} />
                                {/* <h2>Professional Designs</h2> */}
                                <Description Des="Letterhead design is a method of expression. Webdads2U offers the services of the finest graphic designers in Chennai, who have helped us become the leading letterhead designing service in Chennai." />
                                {/* <p>Letterhead design is a method of expression. Webdads2U offers the services of the finest graphic designers in Chennai, who have helped us become the leading letterhead designing service in Chennai.</p> */}
                                <Description
                                    Des="Your skills can be enhanced with professional designs. Even though we are progressing towards a paperless society, letterheads are still essential documents. The company letterhead is essential in reflecting your
                                    brand value for offer letters and letters of intent."
                                />
                                {/* <p>
                                    Your skills can be enhanced with professional designs. Even though we are progressing towards a paperless society, letterheads are still essential documents. The company letterhead is essential in reflecting your
                                    brand value for offer letters and letters of intent.
                                </p> */}
                            </div>
                        </Col>
                        <Col md={12} lg={6}>
                            <div className="text-center">
                                <img alt="arcmen letter head" width={'100%'} src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1756796247/webdads2u/letter-head/arcmen-letter-head.jpg"></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section style={{ background: '#CEF0FF' }} className="pt-5 pb-5 mt-5 whyletter">
                <Container>
                    <Row>
                        <div className="text-center">
                            <h2>Why our Letterheads? </h2>
                            <p>We pay meticulous attention to detail in our letterhead design, ensuring every aspect of your letterhead exudes quality and refinement.</p>
                        </div>
                        <Col md={6} lg={4}>
                            <div className="text-center">
                                <img alt="" src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757507836/webdads2u/letterhead-design/icons/easy-to-create-and-customise.png"></img>
                                <h3>Easy to create and customise</h3>
                                <p>Designing letterheads for your brand online is a simple task, with guided steps that simplify the process of choosing customization options, templates, and editing online.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="text-center">
                                <img alt="" src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757507835/webdads2u/letterhead-design/icons/collaborate-with-our-designers.png"></img>
                                <h3>Collaborate with our designers</h3>
                                <p>Customizing your letterheads can be done by working with our expert designers. Our letterheads are printed perfectly every single time, in addition to our super-catchy, modern designs.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="text-center">
                                <img alt="" src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757507836/webdads2u/letterhead-design/icons/connect-with-our-customer-support.png"></img>
                                <h3>Connect with our customer support</h3>
                                <p>Our customer support team is always there to assist you and take your prints to the next level. Create and customize them easily.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* <section className="looking-letter mt-5">
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
            </section> */}
            <LookingWebsiteMaintenance Title={'Letterheads '} />
            {/* <SocialMedia /> */}
        </>
    );
}

export default LetterheadHero;
