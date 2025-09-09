import React from 'react';
import Slider from '../../../components/common/Slider-image';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Businessgallery from './Businessgallery';
import { FaCircleCheck } from 'react-icons/fa6';
import SocialMedia from '../../../components/common/SocialMedia';
import Banner from '../../../components/ui/banner/Banner';
import ClientLogoSlider from '../../../components/ui/client-logo-slider/ClientLogoSlider';
function BusinesscardHero() {
    return (
        <>
            {/* Hero section */}
            {/* <section className="busnesscardhero">
                <Container>
                    <Row className="align-items-center">
                        <Col md={12} xs={11} lg={7}>
                            <h2>Business Card Designing Services in India</h2>
                            <p>Create a lasting impression with creative, professional, and branded business cards.</p>
                            <a href="/contact-us/">
                                <Button variant="contained">Contact us</Button>
                            </a>
                        </Col>
                        <Col md={5} xs={1} lg={5}>
                            <div className="text-center"></div>
                        </Col>
                    </Row>
                </Container>
            </section> */}
            {/* Slider */}
            {/* <Slider /> */}
            <Banner />
            <ClientLogoSlider />
            {/*  */}
            <section className="justcard pt-5 pb-5">
                <Container>
                    <Row className="align-items-center">
                        <div className="text-center profess">
                            <h5>BUSEINESS CARD DESIGN</h5>
                            <h2>It’s not just a Card, It’s an effective marketing tool!</h2>
                            <p>
                                It’s impossible to categorize a business as professional unless they have a Business card . Starting conversations with prospective clients and business associates can be achieved through the use of business cards as a
                                marketing tool. Wouldn’t it make a significant impression at the very first meeting if you wore it?
                            </p>
                        </div>
                        <Col md={6} className="mt-2">
                            <div className="busbox">
                                <div className="busnimg">
                                    <img
                                        alt="Business Card Designing Company In Chennai | Visiting Cards
"
                                        src="/webdads/images/businesscard/Shop-by-Elegance-Size-and-Profession.png"
                                    ></img>
                                </div>
                                <div className="buscont">
                                    <h3>Shop by Elegance, Size and Profession.</h3>
                                    <p>Discover exquisite business card tailored to your profession, available in various sizes, meticulously crafted to exude elegance and professionalism.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className="mt-2">
                            <div className="busbox">
                                <div className="busnimg">
                                    <img alt="" src="/webdads/images/businesscard/networking-business-cards.webp"></img>
                                </div>
                                <div className="buscont">
                                    <h3>Networking Business Cards</h3>
                                    <p>Your first impression matters! Extend your network by getting a networking business card designed by our professional designers.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className="mt-2">
                            <div className="busbox">
                                <div className="busnimg">
                                    <img alt="" src="/webdads/images/businesscard/appointment-business-cards.webp"></img>
                                </div>
                                <div className="buscont">
                                    <h3>Appointment Business Cards</h3>
                                    <p>Obtain an Appointment Business Card to facilitate your business operations at different times.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className="mt-2">
                            <div className="busbox">
                                <div className="busnimg">
                                    <img alt="" src="/webdads/images/businesscard/QR-code-Business-Cards.png"></img>
                                </div>
                                <div className="buscont">
                                    <h3>QR code Business Cards</h3>
                                    <p>Your business card&apos;s QR code can be scanned on smartphones and can be used online, not just offline.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className="mt-2">
                            <div className="busbox">
                                <div className="busnimg">
                                    <img alt="" src="/webdads/images/businesscard/Standard-Business-Cards.png"></img>
                                </div>
                                <div className="buscont">
                                    <h3>Standard Business Cards</h3>
                                    <p>Ensure that the correct details are displayed on a standard business card that is unique in its design.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className="mt-2">
                            <div className="busbox">
                                <div className="busnimg">
                                    <img alt="" src="/webdads/images/businesscard/embossed-business-cards.webp"></img>
                                </div>
                                <div className="buscont">
                                    <h3>Embossed Business Cards</h3>
                                    <p>Stay ahead of your competitors by adding more shine to your business by using an embossed business card.</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="w-100 d-flex justify-content-center align-items-center mt-2 businessCardHero-card-design">
                                <a href="/contact-us">
                                    <button>Contact us</button>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Businessgallery />
            <section style={{ background: '#f5f5f5' }} className="why-choose pt-5 pb-5">
                <Container>
                    <Row className="align-items-center">
                        <Col md={12} lg={6}>
                            <div>
                                <img src="/webdads/images/businesscard/why-choose-us.webp" alt="why choose us" className="w-100"></img>
                            </div>
                        </Col>
                        <Col md={12} lg={6}>
                            <div>
                                <h3>WHY CHOOSE US?</h3>
                                <h2 style={{ fontWeight: 700 }}>Why Webdads2u Business Card Designing Services?</h2>
                                <p className="businessCardHero-why-choose-us">
                                    <FaCircleCheck /> Provides a personal touch.{' '}
                                </p>
                                <p className="businessCardHero-why-choose-us">
                                    <FaCircleCheck /> Leave a lasting impact
                                </p>
                                <p className="businessCardHero-why-choose-us">
                                    <FaCircleCheck /> It is a marketing tool that is effective.{' '}
                                </p>
                                <p className="businessCardHero-why-choose-us">
                                    <FaCircleCheck /> They are priced competitively.
                                </p>
                                <p className="businessCardHero-why-choose-us">
                                    <FaCircleCheck /> It has the capability of being versatile.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="businesscdr pt-5 pb-5">
                <Container>
                    <Row>
                        <div className="text-center">
                            <h2>Business Card Design Services for All Types of Business Cards </h2>
                        </div>
                        <Col md={6} lg={4}>
                            <div className="shopify-weoffer">
                                <img alt="" src="/webdads/images/businesscard/Standard-Business-Cards.png"></img>
                                <h3>Standard Business Cards </h3>
                                <p>Classic designs for a timeless appeal, ensuring professionalism and clarity in every aspect of your business cards design.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="shopify-weoffer">
                                <img alt="" src="/webdads/images/businesscard/Decorated-Business-Cards.png"></img>
                                <h3>Decorated Business Cards</h3>
                                <p>Elevate your brand with intricate embellishments and artistic flair, creating memorable impressions with sophisticated business cards designs.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="shopify-weoffer">
                                <img alt="" src="/webdads/images/businesscard/Premium-Business-Cards.png"></img>
                                <h3>Premium Business Cards </h3>
                                <p>Indulge in luxury with high-quality materials and impeccable finishes, showcasing sophistication and exclusivity in your business cards design.</p>
                            </div>
                        </Col>

                        <Col md={6} lg={4}>
                            <div className="shopify-weoffer">
                                <img alt="" src="/webdads/images/businesscard/Wild-Format-Business-Cards.png"></img>
                                <h3>Wild-Format Business Cards</h3>
                                <p>Break the mold with unconventional shapes and daring designs, capturing attention and standing out in a sea of standard business cards.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="shopify-weoffer">
                                <img alt="" src="/webdads/images/businesscard/Gadget-Business-Cards.png"></img>
                                <h3>Gadget Business Cards </h3>
                                <p>Merge innovation with networking, integrating technology into your business cards design for interactive and memorable experiences.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="shopify-weoffer">
                                <img alt="" src="/webdads/images/businesscard/GP-Business-Cards.png"></img>
                                <h3>GP Business Cards</h3>
                                <p>Seamlessly blend professionalism and creativity, tailored to your profession, ensuring your business cards design reflects your expertise and personality.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="looking-business">
                <Container>
                    <Row>
                        <div className="text-center">
                            <h2>Looking for Business Card Design services?</h2>
                            <p>Looking for the best deal on your requirements? Look no further! Simply share your requirements with us and we’ll provide you with a free quote that meets your needs. Don’t wait any longer – contact us now!</p>
                            <a href="/contact-us/">
                                <Button variant="contained">Connect For Free Consultation</Button>
                            </a>
                        </div>
                    </Row>
                </Container>
            </section>
            {/* <SocialMedia /> */}
        </>
    );
}

export default BusinesscardHero;
