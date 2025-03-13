'use client';
import React from 'react';
import './aboutPage.scss';
import { IoPlayCircle } from 'react-icons/io5';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import Counter from '../../../components/Counter';
import { FaMedal } from "react-icons/fa";

const values = [
    {
        title: 'Integrity',
        description: "At our core, integrity guides every action; it's the steadfast commitment to unwavering honesty and ethical conduct that defines us.",
        imgSrc: '/webdads/images/about-page/integrity.avif'
    },
    {
        title: 'Innovation',
        description: 'Innovation fuels our progress, sparking inventive ideas that redefine norms. Embracing creativity, we push boundaries, sculpting new pathways to evolution.',
        imgSrc: '/webdads/images/about-page/innovation.avif'
    },
    {
        title: 'Teamwork',
        description: 'Unified by a shared vision, teamwork weaves a tapestry of diverse skills, achieving collective brilliance. In synergy, each contribution harmonizes, fortifying a foundation of mutual support and achievement.',
        imgSrc: '/webdads/images/about-page/team-work.avif'
    },
    {
        title: 'Respect',
        description: 'Respect forms the bedrock of our interactions, nurturing an environment where diversity thrives. Valuing perspectives, we cultivate a culture of inclusivity, fostering understanding and appreciation.',
        imgSrc: '/webdads/images/about-page/respect.avif'
    },
    {
        title: 'Transparency',
        description: 'Transparency breeds trust, weaving a fabric of honesty that binds our relationships and operations. Openness paves the way for clarity, fostering accountability and strengthening connections.',
        imgSrc: '/webdads/images/about-page/transparency.avif'
    },
    {
        title: 'Excellence',
        description: 'Pursuing excellence, we strive for the zenith, sculpting outcomes that reflect our commitment to mastery. Every endeavor is a canvas for excellence, driving us to surpass standards and craft remarkable outcomes.',
        imgSrc: '/webdads/images/about-page/excellence.avif'
    }
];

const AboutPage = () => {
    return (
       <>
        <section className="about-page-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 about-page-container-section1">
                        {' '}
                        <h2 className="about-page-container-section1-h1">About us</h2>
                        <div>
                            <div className="heading">
                                <h2>Choose The best IT Service Company</h2>
                            </div>

                            <div className="textEditor">
                                <p>
                                    <a style={{ color: '#474646' }} href="https://webdads2u.com/" rel="noopener noreferrer" target="_blank">
                                        Webdads2u Pvt Ltd,
                                    </a>
                                    &nbsp;Best web design company in Chennai, India, is a leading agency specializing in web design, app development, SEO, and digital marketing services. Our team comprises highly skilled and experienced professionals
                                    considered the best in Chennai’s IT service landscape. Passionate and dedicated, we excel in website and app development, SEO strategies, and crafting impactful digital marketing campaigns. As the best IT service
                                    company in Chennai, our commitment to excellence drives us to deliver cutting-edge solutions that surpass client expectations, propelling businesses toward online success.
                                </p>
                                <p>
                                    <br />
                                  
                                    At Webdads2u Pvt Ltd, our ethos revolves around client-centricity and innovation. We pride ourselves on not just offering services but fostering enduring partnerships. With a focus on trust, transparency, and
                                    achieving business objectives, we aim to empower businesses in navigating and thriving within the digital realm.
                                    <br />
                                    <br />
                                  
                                    As the best IT service company, our goal remains consistent: to elevate our clients’ online presence from being merely strong to exceptionally impactful. We have a team of highly skilled and experienced
                                    professionals who are Passionate and the Best Website Developers, Web Designers, App Designers, SEO, and Digital Marketing Team in Chennai.
                                </p>
                            </div>

                            <div className={'buttonWrapper'}>
                                <a className={'button'} href="https://www.youtube.com/watch?v=tPaXI08Gcaw" rel="nofollow noopener" target="_blank">
                                    <span className={'buttonText'} style={{ textAlign: 'center' }}>
                                        Check details about our company
                                    </span>
                                    <span className={'buttonIcon'} style={{ fontSize: '20px' }}>
                                        <i aria-hidden="true" className="fas fa-play-circle "></i>
                                        <IoPlayCircle />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* ======================================================================== */}
                    <div className="col-md-6 about-page-container-section2">
                        <section className="about-page-container-section2-image-container">
                            <div className="ct-effect1">
                                <img src="webdads/images/about-page/circle1.webp" alt="image not found"></img>
                            </div>
                            <div className="about-img">
                            <img src="webdads/images/about-page/about-us.webp" alt="image not found"></img>
                            <div class="d-flex best-frirnd">
                                <div class="">
                                <FaMedal />
                                </div>
                            
                              <div className="">
                                <h2>Best Friendly Approach</h2>
                                <p>We adapt our delivery to the way you work, whether as an external provider.

</p>
                              </div>
                            </div>
                            </div>
                        </section>
                        <section className="about-page-container-section2-paragraph">
                            {/* <div className={styles.container}> */}
                            <p>
                                As the best IT service company in Chennai, Webdads2u Pvt Ltd is committed to being a catalyst for businesses seeking digital growth. Our expertise extends beyond conventional service provision; we serve as strategic
                                partners, guiding clients through the intricacies of the digital landscape.
                                <br />
                                <br />
                                Our team’s dedication and proficiency in web design, app development, SEO, and digital marketing ensure that our clients receive not just services, but tailored solutions that propel their online success. We take pride
                                in our reputation as the best IT service company, continuously setting benchmarks and delivering results that make a tangible difference in our clients’ digital journeys.
                            </p>
                            {/* </div> */}
                        </section>
                    </div>
                </div>
            </div>
            <Container className="about-page-card-container">
                <div className="row">
                    <section className="col-md-4">
                        <div className="d-flex justify-content-center">
                            <Image src="/webdads/images/about-page/misson-about.avif" width={448} height={299} alt="Mission Image" fluid />
                        </div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <h2>Mission</h2>
                                    </div>
                                    <div>
                                        Our commitment as the best IT service company is to deliver unparalleled web development solutions, innovative strategies, and leverage cutting-edge technology. We empower our customers to establish a robust
                                        online presence, maximizing their business potential through our expertise.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="col-md-4">
                        <div className="d-flex justify-content-center">
                            <Image src="/webdads/images/about-page/vission.avif" width={625} height={625} alt="Vision Image" fluid />
                        </div>
                        <div>
                            <dic>
                                <div>
                                    <div>
                                        <h2>Vision</h2>
                                    </div>
                                    <div>
                                        As the best IT service company, our aim is to deliver tailored business solutions that empower organizations of all sizes to remain competitive and reach their business objectives. Our comprehensive, end-to-end
                                        solutions are meticulously crafted to enhance efficiency, curtail costs, and maintain the highest service standards.
                                    </div>
                                </div>
                            </dic>
                        </div>
                    </section>

                    {/* Goals Section */}
                    <section className="col-md-4">
                        <div>
                            <div className="d-flex justify-content-center">
                                <Image src="/webdads/images/about-page/goal.avif" width={448} height={299} alt="Goals Image" fluid />
                            </div>
                            <div>
                                <div>
                                    <div>
                                        {' '}
                                        <h2>Goals</h2>
                                    </div>
                                    <div>
                                        At Webdads2u Private Limited, our commitment surpasses mere success; it’s about cultivating an ecosystem where innovation thrives, aspirations find wings, and excellence becomes the norm. As the best IT service
                                        company, our mission is deeply entrenched in reshaping industries, propelled by an unwavering passion for continuous evolution.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Container>
            {/* ====================================================== */}
            <Counter />
            {/* ====================================================== */}
            <section style={{ backgroundImage: ` linear-gradient(90deg, #871752 1%, #262250 44%)` }}>
                <div className="container">
                    <div>
                        <h3 className="text-center " style={{ color: 'white' }}>
                            Our Company Values
                        </h3>
                    </div>
                    <div>
                        <p className="" style={{ color: 'white', textAlign: 'justify', lineHeight: '1.85714285714286' }}>
                            {' '}
                            Webdads2u Private Limited stands as the epitome of integrity, innovation, and collaboration. As the best IT service company, we lead the way in excellence within web design and development, upholding values of transparency
                            and client-centricity. Our dedication to quality craftsmanship and ensuring client satisfaction defines our ethos, fostering trust and reliability in every digital endeavor we undertake. At Webdads2u, being the best IT
                            service company means consistently delivering superior solutions that exceed expectations, emphasizing our commitment to excellence in every project. Our unwavering focus on being the best IT service company propels us to
                            innovate, collaborate, and prioritize our clients’ success above all.
                        </p>
                    </div>
                    <div className="row">
                        {values.map((value, index) => (
                            <div key={index} className="col-sm-12 col-md-4 mb-4">
                                <div className="about-page-card text-center bg-transparent text-white">
                                    <div>
                                        <img src={value.imgSrc} className="" alt={`${value.title} image`} loading="lazy" width="100" height="100" />
                                    </div>
                                    <div className="about-page-card-body">
                                        <h5 className="about-page-card-title">{value.title}</h5>
                                        <p className="about-page-card-text">{value.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
      
       </>
    );
};

export default AboutPage;
