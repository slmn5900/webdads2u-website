'use client';
import { useState } from 'react';
import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone } from 'react-icons/fa';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { RiMenu3Fill } from 'react-icons/ri';

import '../style/testingheader.scss';
import Link from 'next/link';
const Testing = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="d-lg-none mobl-hed">
                <Link href="/" style={{ textDecoration: 'none' }}>
                    <div className="site-logo">
                        {/* <a href="/" style={{ textDecoration: 'none' }}> */}
                        <img  src="/webdads/images/home/webdads2u-logo.svg" alt="why choose us"></img>
                        {/* </a> */}
                    </div>
                </Link>
                <Button style={{ display: 'block' }} variant="primary" className="d-lg-none" onClick={handleShow}>
                    <RiMenu3Fill />
                </Button>
            </div>

            <Offcanvas show={show} onHide={handleClose} responsive="lg">
                <Offcanvas.Header closeButton>
                    <img src="/webdads/images/home/webdads2u-logo.svg" alt="why choose us w-50"></img>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <nav>
                        <div className="container megamnu">
                            <div className="row">
                                <div className="col-md-3 logo-cl">
                                    <div className="site-logo">
                                        <Link href="/" style={{ textDecoration: 'none' }} className='demo-link'>
                                            <img src="/webdads/images/home/webdads2u-logo.svg" alt="why choose us"></img>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-4 navbr-cl">
                                    <div className="mobile_btn">
                                        <i className="fas fa-bars"></i>
                                    </div>

                                    <div className="main_menu">
                                        <ul>
                                            <li>
                                                <a href="#" className="active">
                                                    About
                                                </a>
                                            </li>

                                            <li className="mega_menu_dropdown has_dropdown">
                                                <a href="#">
                                                    Service <i className="fas fa-angle-down"></i>
                                                </a>
                                                <div className="mega_menu sub_menu">
                                                    <div className="mega_menu_item">
                                                        <div className="d-flex align-items-center">
                                                            <img alt="" src="/webdads/images/home/megamenu/responsive-web-design.png" className="w-25"></img>
                                                            <h3> Website Development</h3>
                                                        </div>

                                                        <a href="#">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Web Portal Development
                                                        </a>
                                                        <a href="#">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Wordpress Web Development
                                                        </a>
                                                        <a href="#">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            ReactJs Web Development
                                                        </a>
                                                        <a href="#">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Php Web Development
                                                        </a>
                                                        <a href="#">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Custom Web Development
                                                        </a>
                                                    </div>
                                                    <div className="mega_menu_item">
                                                        <div className="d-flex align-items-center">
                                                            <img alt="" src="/webdads/images/home/megamenu/custom-web-design.png" className="w-25"></img>
                                                            <h3> Web Design</h3>
                                                        </div>

                                                        <a href="#">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            HTML5 Website design
                                                        </a>
                                                        <a href="#">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Domain Registration
                                                        </a>
                                                        <a href="#">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Hosting
                                                        </a>
                                                        <a href="#">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Custom Web Design
                                                        </a>
                                                        <a href="#">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Responsive Website
                                                        </a>
                                                        <a href="#">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            UI&UX Design
                                                        </a>
                                                        <a href="#">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Website Redesign
                                                        </a>
                                                        <a href="#">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Website Maintenance
                                                        </a>
                                                    </div>
                                                    <div className="mega_menu_item">
                                                        <div className="d-flex align-items-center">
                                                            <img alt="" src="/webdads/images/home/megamenu/seo-services-megamenu-icon.webp" className="w-25"></img>
                                                            <h3> SEO Services</h3>
                                                        </div>

                                                        <a href="#">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Digital Marketing
                                                        </a>
                                                        <a href="#">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            PPC Service
                                                        </a>
                                                        <a href="#">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            E-commerce SEO Service
                                                        </a>
                                                        <a href="#">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Local SEO Service
                                                        </a>
                                                        <a href="#">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Off Page SEO
                                                        </a>
                                                        <a href="#">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Link Building Service
                                                        </a>
                                                        <a href="#">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Content Writing Service
                                                        </a>
                                                    </div>
                                                    <div className="mega_menu_item">
                                                        <div className="d-flex align-items-center">
                                                            <img alt="" src="/webdads/images/home/megamenu/branding-design-megamenu-icon.png" className="w-25"></img>
                                                            <h3>Branding Design</h3>
                                                        </div>

                                                        <a href="#">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Logo Design
                                                        </a>
                                                        <a href="#">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Brochure Design
                                                        </a>
                                                        <a href="#">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Social Media Design
                                                        </a>
                                                        <a href="#">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Flyer Design
                                                        </a>
                                                        <a href="#">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Corporate Gifts Design
                                                        </a>
                                                        <a href="#">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Business Card Design
                                                        </a>
                                                        <a href="#">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Letterhead Design
                                                        </a>
                                                    </div>
                                                    <div className="mega_menu_item">
                                                        <div className="d-flex align-items-center">
                                                            <img alt="" src="/webdads/images/home/megamenu/mobile-app-development-megamenu-icon.png" className="w-25"></img>
                                                            <h3>Mobile App Development</h3>
                                                        </div>
                                                        <a href="#">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            IOS App Development
                                                        </a>
                                                        <a href="#">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Android App Development
                                                        </a>
                                                        <a href="#">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Flutter App Development
                                                        </a>
                                                        <a href="#">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            React Native App Development{' '}
                                                        </a>
                                                        <a href="#">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Mobile App UI/ UX Design
                                                        </a>
                                                    </div>
                                                    <div className="mega_menu_item">
                                                        <div className="d-flex align-items-center">
                                                            <img alt="" src="/webdads/images/home/megamenu/crm-erp-development-megamenu-icon.webp" className="w-25"></img>
                                                            <h3>E-commerce Development</h3>
                                                        </div>
                                                        <a href="#">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Woocommerce
                                                        </a>
                                                        <a href="#">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Opencart
                                                        </a>
                                                        <a href="#">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Shopify
                                                        </a>
                                                    </div>
                                                    <div className="mega_menu_item">
                                                        <div className="d-flex align-items-center">
                                                            <img alt="" src="/webdads/images/home/megamenu/ecommerce-development-megamenu-icon.webp" className="w-25"></img>
                                                            <h3>Website Maintenance</h3>
                                                        </div>
                                                        <a href="#">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Customized CRM
                                                        </a>
                                                        <a href="#">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Customized ERP
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="has_dropdown">
                                                <a href="#">
                                                    Work <i className="fas fa-angle-down"></i>
                                                </a>
                                                <ul className="sub_menu">
                                                    <li>
                                                        <a href="/WordPress">WordPress</a>
                                                    </li>

                                                    <li>
                                                        <a href="/e-commerce">E-Commerce</a>
                                                    </li>
                                                    <li>
                                                        <a href="/php-development-company">Php</a>
                                                    </li>
                                                    <li>
                                                        <a href="/php-development-company">React</a>
                                                    </li>
                                                    <li>
                                                        <a href="/php-development-company">Logo</a>
                                                    </li>
                                                    <li>
                                                        <a href="/php-development-company">Brochure</a>
                                                    </li>
                                                    <li>
                                                        <a href="/php-development-company">Business Card</a>
                                                    </li>
                                                    <li>
                                                        <a href="/php-development-company">Social media</a>
                                                    </li>
                                                    <li>
                                                        <a href="/php-development-company">Letter Head</a>
                                                    </li>
                                                    <li>
                                                        <a href="/php-development-company">flyer design</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            {/* <li className="mega_menu_dropdown mega_menu_demo_2 has_dropdown">
              <a href="#">Shop 2 <i className="fas fa-angle-down"></i></a>
              <div className="mega_menu sub_menu">
                <div className="mega_menu_item">
                   <img src="https://via.placeholder.com/250x300" alt="Description" />
                </div>
                <div className="mega_menu_item">
                  <h3>Theme Elements</h3>
                  <a href="#">Mega menu item</a>
                  <a href="#">Mega menu item</a>
                  <a href="#">Mega menu item</a>
                  <a href="#">Mega menu item</a>
                  <a href="#">Mega menu item</a>
                </div>
                <div className="mega_menu_item">
                  <h3>Theme Elements</h3>
                  <a href="#">Mega menu item</a>
                  <a href="#">Mega menu item</a>
                  <a href="#">Mega menu item</a>
                  <a href="#">Mega menu item</a>
                  <a href="#">Mega menu item</a>
                </div>
                <div className="mega_menu_item">
                  <h3>Theme Elements</h3>
                  <a href="#">Mega menu item</a>
                  <a href="#">Mega menu item</a>
                  <a href="#">Mega menu item</a>
                  <a href="#">Mega menu item</a>
                  <a href="#">Mega menu item</a>
                </div>
              </div>
            </li> */}

                                            <li>
                                                <a href="#">Contact</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-5 contdl-home">
                                    <div className="home-header-social-icons">
                                        <ul className="d-flex">
                                            <li>
                                                <FaFacebookF />{' '}
                                            </li>
                                            <li>
                                                <FaXTwitter />{' '}
                                            </li>
                                            <li>
                                                <FaInstagram />
                                            </li>
                                            <li>
                                                <FaLinkedinIn />
                                            </li>
                                        </ul>
                                    </div>
                                    <Button variant="primary" className="mb-rsbtn">
                                        Get a Quotes
                                    </Button>
                                    <div className="home-header-phone-ic">
                                        <div className="Home-header-phn-ic">
                                            <FaPhone />{' '}
                                        </div>
                                        <div className="home-header-phone-det">
                                            <h3>Feel free to contact us</h3>
                                            <h6>
                                                <a href="tel:+91-88256 07550">+91-88256 07550</a>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};
export default Testing;
