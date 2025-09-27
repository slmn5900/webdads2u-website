'use client';
import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaCheckSquare } from 'react-icons/fa';
import Sliderimage from '../../../components/common/Slider-image';
import { MenuContext } from '../../../layout/context/menucontext';
import EcommerceBanner from './Components/EcommerceBanner';
import ClientLogoSlider from '../../../components/ui/client-logo-slider/ClientLogoSlider';
import EcommerceStreams from './Components/EcommerceStreams';
import EcommercePortfolio from './Components/EcommercePortfolio';
import EcommerceSection from './Components/EcommerceSection';
import MultiVendorFeatures from './Components/MultiVendorFeatures';
import MCommerceSection from './Components/MCommerceSection';
import FeaturesSection from './Components/FeaturesSection';
import SocialEcommerce from './Components/SocialEcommerce';
import BrochureFaq from '../../../components/ui/BrochureFaq';
import Title from '../../../components/Title';
import { Box } from '@mui/material';
import Description from '../../../components/Description';

function Herosec() {
    const {
        header_section,
        setSlider_section2,
        setHeader_section,
        setSlider_section,
        setCompany_section,
        setDesign_section,
        setList_section,
        setAmazing_section,
        setAmazingcard_section,
        setWork_section,
        setChoose_section,
        setConsultation_section,
        setQna_section
    } = useContext(MenuContext);
    const [data, setData] = useState(null);

    useEffect(() => {
        const getdata = async () => {
            try {
                const response = await fetch('/inner-page-api/ecommerce-website-development.json');
                const data = await response.json();
                console.log(data, 'data');
                setData(data);
                setHeader_section(data.header_section);
                setSlider_section(data.slider_section);
                setSlider_section2(data.slider2_section);
                setCompany_section(data.company_section);
                setDesign_section(data.design_section);
                setList_section(data.list_section);
                setAmazing_section(data.amazing_section);
                setAmazingcard_section(data.amazingcard_section);
                setWork_section(data.work_section);
                setChoose_section(data.choose_section);
                setConsultation_section(data.consultation_section);
                setQna_section(data.qna_section);
            } catch (error) {
                console.log(error, 'error');
            }
        };
        getdata();
    }, []);
    return (
        <>
            <EcommerceBanner />
            <ClientLogoSlider />

            <EcommerceStreams />

            <section className="all-you">
                <Container>
                    <Row>
                        <div>
                            <Box textAlign={'center'}>
                                <Title color={"#262250"} title={'All You Imagine For Your Ecommerce'} />
                                <Title title={'Our Years of industry experience makes us strong enough to handle all your online business needs'} />
                            </Box>
                            {/* <h2>All You Imagine For Your Ecommerce</h2> */}
                            {/* <h3>Our Years of industry experience makes us strong enough to handle all your online business needs</h3> */}

                            <Description
                              mdalign={'center'}
                                Des="Ecommerce website development has become a necessity and is not just used to drive greater traffic. Over the years, Webdads2u Technologies have gathered the experience to work on all online business requirements. We
                                are among the first companies to provide efficient and effective e-commerce solutions.
                            "
                            />
                            {/* <p>
                                Ecommerce website development has become a necessity and is not just used to drive greater traffic. Over the years, Webdads2u Technologies have gathered the experience to work on all online business requirements. We
                                are among the first companies to provide efficient and effective e-commerce solutions.
                            </p> */}
                        </div>
                    </Row>
                </Container>
            </section>

            {/* 
            <section className="all-you pb-5">
                <Container>
                    <Row>
                        <div>
                            <h2>Our Portfolio</h2>
                            <h3>Innovative Ecommerce Web Design</h3>
                        </div>
                        <Col md={2} className="w-20">
                            <div className="text-center">
                                <img alt="" src="/webdads/images/ecommerce/woo-commerce-slider.webp"></img>
                                <a href="#">
                                    <Button variant="contained">view</Button>
                                </a>
                            </div>
                        </Col>
                        <Col md={2} className="w-20">
                            <div className="text-center">
                                <img alt="" src="/webdads/images/ecommerce/woo-commerce-slider-2.webp"></img>
                                <a href="#">
                                    <Button variant="contained">View</Button>
                                </a>
                            </div>
                        </Col>
                        <Col md={2} className="w-20">
                            <div className="text-center">
                                <img alt="" src="/webdads/images/ecommerce/woo-commerce-slider3.webp"></img>
                                <a href="#">
                                    <Button variant="contained">View</Button>
                                </a>
                            </div>
                        </Col>
                        <Col md={2} className="w-20">
                            <div className="text-center">
                                <img alt="" src="/webdads/images/ecommerce/woo-commerce-slider4.webp"></img>
                                <a href="#">
                                    <Button variant="contained">View</Button>
                                </a>
                            </div>
                        </Col>
                        <Col md={2} className="w-20">
                            <div className="text-center">
                                <img alt="" src="/webdads/images/ecommerce/woo-commerce-slider5.webp"></img>
                                <a href="#">
                                    <Button variant="contained">View</Button>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section> */}
            <EcommercePortfolio />

            {/* <section className="ecommerce-website">
                <Container>
                    <Row>
                        <div className="text-center">
                            <h2>ECommerce Website development</h2>
                            <p>Explore top-notch ecommerce website service tailored for your business needs. Our user-friendly solutions ensure a seamless online shopping experience. Elevate your brand with our e-commerce services today!</p>
                        </div>

                        <Col md={4}>
                            <div className="text-center">
                                <img alt="" src="/webdads/images/ecommerce/magento-ecommerce.png"></img>
                                <h2>Magento</h2>
                                <p>Unleash the full potential of your online store with our Magento ecommerce webiste. Tailored solutions for seamless transactions and enhanced user experience.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="text-center">
                                <img alt="" src="/webdads/images/ecommerce/Prestashop-ecommerce.webp"></img>
                                <h2>Prestashop</h2>
                                <p>Elevate your e-store with our PrestaShop services. From customization to optimization, our ecommerce website solutions ensure a profitable and efficient online business. Discover the power of PrestaShop!</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="text-center">
                                <img alt="" src="/webdads/images/ecommerce/woo-commerce-ecommerce.png"></img>
                                <h2>WooCommerce</h2>
                                <p>Transform your WordPress site into a robust online platform with our WooCommerce services. Experience unparalleled e-commerce capabilities for increased sales and customer satisfaction.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section> */}
            <EcommerceSection />

            {/* <section className="Feature-sec">
                <Container>
                    <Row className="pt-3">
                        <div className="text-center">
                            <h2>Features of Multi-Vendor</h2>
                            <p>
                                Explore the dynamic world of multi-vendor ecommerce website. Empower your platform with features like vendor management, secure transactions, and customizable storefronts. Boost your business and create a thriving
                                online marketplace with our comprehensive e-commerce services.
                            </p>
                        </div>
                        <Col md={3} xs={6}>
                            <div className="vendor-left text-center">
                                <img alt="" src="/webdads/images/ecommerce/vendor-management.webp"></img>
                                <h3>
                                    Vendor<br></br>Management
                                </h3>
                            </div>
                        </Col>
                        <Col md={3} xs={6}>
                            <div className="vendor-right text-center">
                                <img alt="" src="/webdads/images/ecommerce/Reporting-management.webp"></img>
                                <h3>
                                    Reporting<br></br>Management
                                </h3>
                            </div>
                        </Col>
                        <Col md={3} xs={6}>
                            <div className="vendor-left text-center">
                                <img alt="" src="/webdads/images/ecommerce/Product-management.png"></img>
                                <h3>
                                    Product<br></br>Management
                                </h3>
                            </div>
                        </Col>
                        <Col md={3} xs={6}>
                            <div className="vendor-right text-center">
                                <img alt="" src="/webdads/images/ecommerce/Payment-gateway.png"></img>
                                <h3>
                                    Payment Gateway<br></br>Management
                                </h3>
                            </div>
                        </Col>
                    </Row>
                    <Row className="pt-5 pb-5 color-chng">
                        <Col md={3} xs={6}>
                            <div className="vendor-left text-center">
                                <img alt="" src="/webdads/images/ecommerce/comission.png"></img>
                                <h3>
                                    Commission<br></br>Management
                                </h3>
                            </div>
                        </Col>
                        <Col md={3} xs={6}>
                            <div className="vendor-right text-center">
                                <img alt="" src="/webdads/images/ecommerce/email-notification-1.webp"></img>
                                <h3>
                                    Email<br></br>Notifications
                                </h3>
                            </div>
                        </Col>
                        <Col md={3} xs={6}>
                            <div className="vendor-left text-center">
                                <img alt="" src="/webdads/images/ecommerce/SEO-management.webp"></img>
                                <h3>
                                    SEO<br></br>Managment
                                </h3>
                            </div>
                        </Col>
                        <Col md={3} xs={6}>
                            <div className="vendor-right text-center">
                                <img alt="" src="/webdads/images/ecommerce/Feedback.png"></img>
                                <h3>
                                    Feedback<br></br>Management
                                </h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section> */}
            <MultiVendorFeatures />
            {/* <section className="m-commerce">
                <Container>
                    <Row>
                        <Col md={8}>
                            <div>
                                <h2>M-Commerce Service </h2>
                                <h3>Mobile Commerce – Mobile App For Ecommerce</h3>
                                <p>
                                    Elevate your business with our cutting-edge M-Commerce services. Seamlessly integrate mobile solutions for an enhanced e-commerce experience. Our services encompass mobile app development, secure payment gateways,
                                    and personalized user interfaces. Stay ahead in the digital realm with our tailored M-Commerce services, revolutionizing the way you engage customers in the ecommerce website services landscape.
                                </p>
                                <div className="d-flex shipping">
                                    <div>
                                        <ul>
                                            <li>
                                                <FaCheckSquare /> Search filter{' '}
                                            </li>
                                            <li>
                                                <FaCheckSquare /> User Account
                                            </li>
                                            <li>
                                                <FaCheckSquare /> Shipping{' '}
                                            </li>
                                            <li>
                                                <FaCheckSquare /> Signing in with social media
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>
                                                <FaCheckSquare /> Multi-lingual{' '}
                                            </li>
                                            <li>
                                                <FaCheckSquare /> Push notification
                                            </li>
                                            <li>
                                                <FaCheckSquare /> Security{' '}
                                            </li>
                                            <li>
                                                <FaCheckSquare /> Blogs
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div>
                                <img alt="" src="/webdads/images/ecommerce/yoga.webp"></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section> */}
            <MCommerceSection />

            <FeaturesSection />
            {/* <section className="m-commerce social-left">
                <Container>
                    <Row>
                        <Col md={4}>
                            <div>
                                <img alt="" src="/webdads/images/ecommerce/atcomart.webp"></img>
                            </div>
                        </Col>
                        <Col md={8}>
                            <div>
                                <h2>Social E-Commerce</h2>

                                <p>
                                    {' '}
                                    We offer excellent social e-commerce solutions, seamlessly merging social connectivity with online shopping. Explore a revolutionary platform where engagement meets convenience. Elevate your online experience with
                                    our innovative services, redefining the way you connect, share, and shop. Discover the future of shopping with us.{' '}
                                </p>
                                <div className="d-flex shipping">
                                    <div>
                                        <ul>
                                            <li>
                                                <FaCheckSquare /> User profiles
                                            </li>
                                            <li>
                                                <FaCheckSquare /> Product Likes
                                            </li>
                                            <li>
                                                <FaCheckSquare /> Activity Feeds
                                            </li>
                                            <li>
                                                <FaCheckSquare /> Follow Users
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>
                                                <FaCheckSquare /> Fully Mobile Friendly
                                            </li>
                                            <li>
                                                <FaCheckSquare /> Customization Options{' '}
                                            </li>
                                            <li>
                                                <FaCheckSquare /> Compatible With Any Theme
                                            </li>
                                            <li>
                                                <FaCheckSquare /> No Coding Required
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section> */}
            <SocialEcommerce />
            <BrochureFaq />
        </>
    );
}

export default Herosec;
