import React from 'react';
import Slider from '../../../components/common/Slider-image';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Fluterwave from './Fluterwave';
import SocialMedia from '../../../components/common/SocialMedia';
import { RiRadioButtonFill } from 'react-icons/ri';
import Banner from '../../../components/ui/banner/Banner';
import ClientLogoSlider from '../../../components/ui/client-logo-slider/ClientLogoSlider';
import Title from '../../../components/Title';
import Description from '../../../components/Description';

function FlutterappHero() {
    return (
        <>
            {/* Hero section */}
            <Banner />
            {/* Slider */}
            <ClientLogoSlider />
            {/*  */}
            <section className="react-nativeimhr  pb-5">
                <Container>
                    <Row className="align-items-center">
                        <div className="text-center">
                            <Title title={'Flutter App Development Services to Craft Apps for Any Screens'} />
                            {/* <h2>Flutter App Development Services to Craft Apps for Any Screens</h2> */}
                            <Description Des={'Flutter app development services permit you to create incredibly functional and innovative native applications for Android, iOS, and Web on a budget and timeline that are of the highest quality.'} />
                            {/* <p>Flutter app development services permit you to create incredibly functional and innovative native applications for Android, iOS, and Web on a budget and timeline that are of the highest quality.</p> */}
                        </div>

                        <Col md={12} lg={6}>
                            <div>
                                <h2>Flutter Expressive and Flexible</h2>
                                <p>
                                    {' '}
                                    Flutter app development is an UI software development kit that is open source and can be employed to build applications for web, desktop, and cross-platform platforms. Using Flutter, we assist you in creating
                                    feature-rich applications that are effortless to run on iOS, Android, the web, Windows, MacOS, and Linux platforms by utilizing a single codebase.
                                </p>
                                <p>Radixweb’s Flutter app development for mobile is powered by Flutter experts who have years of experience, an expressive and dynamic UI, and Flutter’s ability to create business-ready apps.</p>
                                <a href="/contact-us">
                                    <button className="flutter-app-contact-btn">Contact us</button>
                                </a>
                            </div>
                        </Col>
                        <Col md={12} lg={6}>
                            <div>
                                <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757572021/webdads2u/flutter-app-development/flutter-expressive-and-flexible.png" alt="flutter expressive and flexible" className="w-100 rounded" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Fluterwave />

            <section className="our-ondemand pb-0">
                <Container>
                    <Row>
                        <Col md={12} lg={6}>
                            <div>
                                <h2>Our On-Demand Flutter Mobile App Development Services</h2>
                                <p>Radixweb offers Flutter app development services that are geared towards scaling and bringing robustness to your mobile business strategy, which is achieved through Flutter.</p>
                                <p className="pt-2">
                                    <RiRadioButtonFill /> Flutter App Development for iOS and Android
                                </p>
                                <p className="pt-2">
                                    <RiRadioButtonFill /> Flutter App Development for Cross-Platform
                                </p>
                                <p className="pt-2">
                                    <RiRadioButtonFill /> Flutter App Development for Dart
                                </p>
                                <p className="pt-2">
                                    <RiRadioButtonFill /> App Migration and Upgradation
                                </p>
                                <p className="pt-2">
                                    <RiRadioButtonFill /> UI/UX Strategy Implementation
                                </p>
                            </div>
                        </Col>
                        <Col md={12} lg={6}>
                            <div>
                                <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757572023/webdads2u/flutter-app-development/our-on-demand-flutter-mobile-app.png" alt="our on demand flutter mobile app" className="w-100 rounded" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default FlutterappHero;
