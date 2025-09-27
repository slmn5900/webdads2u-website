import React, { useContext } from 'react';
import Slider from '../../../components/common/Slider-image';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SocialMedia from '../../../components/common/SocialMedia';
import { MenuContext } from '../../../layout/context/menucontext';
import ISOAppDevelopment from './component/ISOAppDevelopment';
import ClientLogoSlider from '../../../components/ui/client-logo-slider/ClientLogoSlider';
function IsoappHero() {
    return (
        <>
            {/* Hero section */}
            <ISOAppDevelopment />
            {/* Slider */}
            <ClientLogoSlider />
            {/*  */}
            <section className="isoempower  pb-5">
                <Container>
                    <Row className="align-items-center">
                        <div className="text-center">
                            <h2>Empower Business with Custom iOS App Development Services</h2>
                            <p>
                                Start developing your iOS project immediately and make use of the expertise of the top iOS app development platforms to create apps that are extremely scalable and tailored for any iOS device, including smartphones,
                                TVs, tablets, and smartwatches.
                            </p>
                        </div>
                        <Col md={12} lg={6}>
                            <div>
                                <img src="/webdads/images/isoapp/webdads2us-bespoke-iso-development-services.webp" alt="custome-erp" className="w-100 rounded" />
                            </div>
                        </Col>
                        <Col md={12} lg={6}>
                            <div>
                                <h2>Webdads2u&apos;s Bespoke iOS Development Services</h2>
                                <p>
                                    Welcome to Webdads2u, your premier destination for bespoke iOS app development services. Our team of skilled developers is dedicated to bringing your app ideas to life with precision and innovation. Whether you’re
                                    a startup looking to establish your presence on the App Store or a business aiming to streamline operations with a custom iOS solution, we’ve got you covered. With a focus on user experience and cutting-edge
                                    technology, we craft seamless iOS applications tailored to your specific requirements. Trust Webdads2u to deliver top-notch iOS development services that elevate your brand and drive success in the digital
                                    marketplace.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="lookingiso">
                <Container>
                    <Row>
                        <div className="text-center">
                            <h2>Looking for IOS App Development?</h2>
                            <p>After expressing interest in iOS app development, provide a concise project overview including purpose, target audience, key features, platform requirements, timeline, budget, and any design assets or previous work.</p>
                            <a href="/contact-us/">
                                <Button variant="contained">Connect For Free Consultation</Button>
                            </a>
                        </div>
                    </Row>
                </Container>
            </section>
            <section className=" pt-5 ">
                <Container>
                    <Row className="align-items-center">
                        <div className="text-center mb-4">
                            <h2>iOS App Development Services We Offer</h2>
                            <p>
                                Webdads2u offers end-to-end iOS app development services, including design, development, testing, support, and maintenance. Our expert team can take on any challenge, from designing an elegant user interface and
                                experience, providing high-end coding solutions to completing the full cycle of developing iOS apps.
                            </p>
                        </div>
                        <Col md={6} lg={4}>
                            <div className="isoapp-devbx">
                                <div className="isoimgbx">
                                    <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757569312/webdads2u/ios-app-development/icons/custom.png" alt="mobileuiux-hero" />
                                </div>
                                <div className="isoconbx" style={{ textAlign: 'start' }}>
                                    <h3 style={{textAlign:"center"}}>Custom iOS App Development</h3>
                                    <p>Empower your cutting-edge custom iOS app development with expert-level multi-threading and advanced algorithm design.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="isoapp-devbx">
                                <div className="isoimgbx">
                                    <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757569311/webdads2u/ios-app-development/icons/appple-watch.png" alt="mobileuiux-hero" />
                                </div>
                                <div className="isoconbx" style={{ textAlign: 'start' }}>
                                    <h3 style={{textAlign:"center"}}>iWatch App Development </h3>
                                    <p>
                                        Unlock the full potential of your iOS app development with next-level WatchOS experiences. Deliver in-app purchases and cater to specific user needs, maximizing the power and usability of your iWatch companion
                                        apps.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="isoapp-devbx">
                                <div className="isoimgbx">
                                    <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757569310/webdads2u/ios-app-development/icons/apple-tv-app-dev.png" alt="mobileuiux-hero" />
                                </div>
                                <div className="isoconbx" style={{ textAlign: 'start' }}>
                                    <h3 style={{textAlign:"center"}}>Apple TV App Development  </h3>
                                    <p>Our iOS app development team of experts can develop the perfect TVOS app that meets your requirements, allowing you to take advantage of features that are not accessible on standard mobile apps.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="isoapp-devbx">
                                <div className="isoimgbx">
                                    <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757569310/webdads2u/ios-app-development/icons/tap.png" alt="mobileuiux-hero" />
                                </div>
                                <div className="isoconbx" style={{ textAlign: 'start' }}>
                                    <h3 style={{textAlign:"center"}}>iPad App Development</h3>
                                    <p>Elevate your iOS app development with exceptional iPad experiences. Our expertise blends powerful analysis with intuitive UI/UX, enabling seamless on-demand movie streaming and captivating games.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="isoapp-devbx">
                                <div className="isoimgbx">
                                    <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757569309/webdads2u/ios-app-development/icons/migration.png" alt="mobileuiux-hero" />
                                </div>
                                <div className="isoconbx" style={{ textAlign: 'start' }}>
                                    <h3 style={{textAlign:"center"}}> Integration and Migration</h3>
                                    <p>To stay competitive in the digital world, Webdads2u offers decades of industry expertise in providing integration and application migration services for iOS app Development.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="isoapp-devbx">
                                <div className="isoimgbx">
                                    <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757569318/webdads2u/ios-app-development/icons/enterprises.png" alt="mobileuiux-hero" />
                                </div>
                                <div className="isoconbx" style={{ textAlign: 'start' }}>
                                    <h3  style={{textAlign:"center"}}>Enterprise iOS Apps</h3>
                                    <p>iOS app Development for internal use and sale to end users requires the expertise of highly skilled developers who possess on-the-ground experience in creating iOS apps.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="custom-made  pb-5">
                <Container>
                    <Row className="align-items-center">
                        <div className="text-center">
                            {/* <h2>Why Do You Need Customized CRM Development Services?</h2> */}
                            {/* <p>
                                Are you interested in discovering how hiring a custom CRM Software Development company in India can benefit your venture? I will provide a brief overview of how a customer relationship management system affects your
                                business.
                            </p> */}
                            <h2>Why Choose Webdads2u as Your iOS Mobile App Development Company?</h2>
                            <p>Radixweb is an iOS app development company that is committed to creating innovative and customized iOS app solutions for businesses of all sizes.</p>
                        </div>

                        <Col md={12} lg={6}>
                            <div className="crm-box">
                                <div className="crm-auto">
                                    <div>
                                        <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757569317/webdads2u/ios-app-development/icons/transparent-approach.png" alt="custome-erp" style={{ width: '100px' }} />
                                    </div>
                                    <div>
                                        <h3>Transparent Approach </h3>
                                        <p>Agile methodology is used by us to ensure your iOS product vision is brought to life with open collaboration and clear communication.</p>
                                    </div>
                                </div>
                                <div className="crm-auto">
                                    <div>
                                        <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757569316/webdads2u/ios-app-development/icons/less-time-to-market.png" alt="custome-erp" style={{ width: '100px' }} />
                                    </div>
                                    <div>
                                        <h3>Less Time-to-market</h3>
                                        <p>Using iterative and incremental development methodologies can accelerate your delivery expectations and produce the best results.</p>
                                    </div>
                                </div>
                                <div className="crm-auto">
                                    <div>
                                        <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757569315/webdads2u/ios-app-development/icons/robust-project-management.png" alt="custome-erp" style={{ width: '100px' }} />
                                    </div>
                                    <div>
                                        <h3>Robust Project Management</h3>
                                        <p>Delegate your development difficulties to a project manager who is dedicated and will be your sole point of contact throughout the product development process.</p>
                                    </div>
                                </div>

                                <div className="crm-auto">
                                    <div>
                                        <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757569314/webdads2u/ios-app-development/icons/flexible-engagement.png" alt="custome-erp" style={{ width: '100px' }} />
                                    </div>
                                    <div>
                                        <h3>Flexible Engagement</h3>
                                        <p>Make use of customized engagement models that are flexible enough to meet all of your organization&apos;s evolving expectations and project requirements.</p>
                                    </div>
                                </div>
                                <div className="crm-auto">
                                    <div>
                                        <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757569313/webdads2u/ios-app-development/icons/round-the-clock-support.png" alt="custome-erp" style={{ width: '100px' }} />
                                    </div>
                                    <div>
                                        <h3>Round-the-clock Support</h3>
                                        <p>Take full advantage of open communication channels that are available 24/7 to stay in touch with all designated teams for impeccable support</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={12} lg={6} className="pt-3">
                            <div>
                                <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757569291/webdads2u/ios-app-development/ios-development.png" alt="ios development" className="w-100 rounded" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* <SocialMedia /> */}
        </>
    );
}

export default IsoappHero;
