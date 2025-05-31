// 'use client';
// import { useState } from 'react';
// import React from 'react';
// import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import { FaXTwitter } from 'react-icons/fa6';
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone } from 'react-icons/fa';
// import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
// import { RiMenu3Fill } from 'react-icons/ri';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { IoCall } from 'react-icons/io5';

// import '../style/testingheader.scss';
// const Header = () => {
//     const router = useRouter();
//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     return (
//         <>
//             <div className="d-lg-none mobl-hed">
//                 <Link href="/" style={{ textDecoration: 'none' }}>
//                     <div className="site-logo ">
//                         <img style={{ with: 'inherit' }} onClick={() => router.push('/')} src="/webdads/images/home/webdads2u-logo.svg" alt="why choose us" />
//                     </div>
//                 </Link>
//                 <Button style={{ display: 'block' }} variant="primary" className="d-lg-none" onClick={handleShow}>
//                     <RiMenu3Fill />
//                 </Button>
//             </div>

//             <section className="sidebar-content-div hd-btn">
//                 <div className="icon-sty">
//                     <a href="https://web.whatsapp.com/send?phone=+918825607550&text=Welcome+to+Webdads2u" className="sidebar-icon" target="_blank" rel="noopener">
//                         <svg width="33.163" height="33.158" viewBox="0 0 33.163 33.158" style={{ marginTop: '15px', marginLeft: '6px' }}>
//                             <ellipse id="Ellipse_25" data-name="Ellipse 25" cx="12.5" cy="12" rx="12.5" ry="12" transform="translate(4 4.579)" fill="#fff"></ellipse>
//                             <g id="Layer_2" data-name="Layer 2">
//                                 <g id="Color">
//                                     <g id="_08.Whatsapp" data-name="08.Whatsapp">
//                                         <path
//                                             id="Icon"
//                                             d="M52.588,36A16.579,16.579,0,0,0,39.163,62.3l-2.072,6.159,6.379-2.039A16.579,16.579,0,1,0,52.588,36ZM61.4,59.447l-1.766,1.766c-1.857,1.857-6.781-.187-11.145-4.559s-6.321-9.284-4.555-11.12L45.7,43.767a1.853,1.853,0,0,1,2.508,0l2.6,2.595a1.728,1.728,0,0,1-.651,2.876,1.687,1.687,0,0,0-1.115,2.048,8.019,8.019,0,0,0,4.833,4.829A1.77,1.77,0,0,0,55.9,54.987a1.733,1.733,0,0,1,2.9-.651l2.6,2.6a1.853,1.853,0,0,1,0,2.508Z"
//                                             transform="translate(-36.015 -36)"
//                                             // fill="#07d97e"
//                                             fill=" #075e54"
//                                         ></path>
//                                     </g>
//                                 </g>
//                             </g>
//                         </svg>
//                     </a>
//                     {/* <span className="mail-icon-div d-block">
//                         <a href="mailto:contact@arcmeninterior.com" className="sidebar-icon emil-bx">
//                             <svg width="19.882" height="14.891" viewBox="0 0 19.882 14.891" style={{ marginTop: '0px', marginLeft: '6px' }}>
//                                 <path
//                                     id="Path_24"
//                                     data-name="Path 24"
//                                     d="M11.6,176.927a2.99,2.99,0,0,1-3.323,0L.132,171.5Q.065,171.451,0,171.4v8.9a1.83,1.83,0,0,0,1.83,1.83H18.052a1.83,1.83,0,0,0,1.83-1.83v-8.9c-.043.032-.087.064-.133.094Z"
//                                     transform="translate(0 -167.242)"
//                                     fill="#fff"
//                                 ></path>
//                                 <path
//                                     id="Path_25"
//                                     data-name="Path 25"
//                                     d="M.779,67.551l8.147,5.432a1.826,1.826,0,0,0,2.031,0L19.1,67.551a1.744,1.744,0,0,0,.779-1.455,1.832,1.832,0,0,0-1.83-1.83H1.83A1.832,1.832,0,0,0,0,66.1a1.744,1.744,0,0,0,.779,1.454Z"
//                                     transform="translate(0 -64.266)"
//                                     fill="#fff"
//                                 ></path>
//                             </svg>
//                         </a>
//                     </span> */}
//                     <span className="mail-icon-div d-block">
//                         <a href="tel:+91 8825607550" className="sidebar-icon emil-bx">
//                             <IoCall style={{ marginLeft: '5px', fill: '#fff', fontSize: '20px' }} />
//                         </a>
//                     </span>
//                 </div>

//                 {/* <button type="button" className="btn btn-primary" onClick={handleShow}>
//                     Book Now
//                 </button> */}
//             </section>
//             <Offcanvas show={show} onHide={handleClose} responsive="lg">
//                 <Offcanvas.Header closeButton>
//                     <Link href="/" style={{ textDecoration: 'none' }}>
//                         <img src="/webdads/images/home/webdads2u-logo.svg" alt="why choose us w-50"></img>
//                     </Link>
//                 </Offcanvas.Header>
//                 <Offcanvas.Body>
//                     <nav className="head-fx">
//                         <div className="container megamnu">
//                             <div className="row">
//                                 <div className="col-md-3 logo-cl">
//                                     <div className="site-logo">
//                                         {/* <div > */}
//                                         <Link href="/" style={{ textDecoration: 'none' }}>
//                                             <img src="/webdads/images/home/webdads2u-logo.svg" alt="why choose us"></img>
//                                         </Link>
//                                     </div>
//                                 </div>
//                                 <div className="col-md-4 navbr-cl">
//                                     <div className="mobile_btn">
//                                         <i className="fas fa-bars"></i>
//                                     </div>

//                                     <div className="main_menu">
//                                         <ul>
//                                             {/* <li >
//                                                 <a href="/about" className="active">
//                                                     About
//                                                 </a>
//                                             </li> */}
//                                             <li className="has_dropdown">
//                                                 <a href="/about" className="active">
//                                                     About
//                                                 </a>
//                                                 <ul className="sub_menu">
//                                                     <li>
//                                                         <a href="/culturals">Culturals</a>
//                                                     </li>
//                                                 </ul>
//                                             </li>

//                                             <li className="mega_menu_dropdown has_dropdown">
//                                                 <a href="#">
//                                                     Service <i className="fas fa-angle-down"></i>
//                                                 </a>
//                                                 <div className="mega_menu sub_menu">
//                                                     <div className="mega_menu_item">
//                                                         <div className="d-flex align-items-center">
//                                                             <a href="/website-development">
//                                                                 <img alt="" src="/webdads/images/home/megamenu/responsive-web-design.png" className="w-75"></img>
//                                                             </a>
//                                                             <a href="/website-development">
//                                                                 <h3> Website Development</h3>
//                                                             </a>
//                                                         </div>

//                                                         <a href="/web-portal-development">
//                                                             <MdOutlineKeyboardDoubleArrowRight />
//                                                             Web Portal Development
//                                                         </a>
//                                                         <a href="/wordpress-development">
//                                                             <MdOutlineKeyboardDoubleArrowRight />
//                                                             Wordpress Web Development
//                                                         </a>
//                                                         <a href="/react-js-development">
//                                                             <MdOutlineKeyboardDoubleArrowRight />
//                                                             ReactJs Web Development
//                                                         </a>
//                                                         <a href="/php-web-development/">
//                                                             <MdOutlineKeyboardDoubleArrowRight />
//                                                             Php Web Development
//                                                         </a>
//                                                         <a href="/custom-web-development">
//                                                             <MdOutlineKeyboardDoubleArrowRight />
//                                                             Custom Web Development
//                                                         </a>
//                                                     </div>
//                                                     <div className="mega_menu_item">
//                                                         <div className="d-flex align-items-center">
//                                                             <a href="/web-design">
//                                                                 <img alt="" src="/webdads/images/home/megamenu/custom-web-design.png" className="w-75"></img>
//                                                             </a>
//                                                             <a href="/web-design/">
//                                                                 <h3> Web Design</h3>
//                                                             </a>
//                                                         </div>

//                                                         <a href="/html5">
//                                                             <MdOutlineKeyboardDoubleArrowRight />
//                                                             HTML5 Website design
//                                                         </a>
//                                                         <a href="/domain-registration">
//                                                             <MdOutlineKeyboardDoubleArrowRight />
//                                                             Domain Registration
//                                                         </a>
//                                                         <a href="/web-hosting-service">
//                                                             <MdOutlineKeyboardDoubleArrowRight />
//                                                             Hosting
//                                                         </a>
//                                                         <a href="/custom-web-design">
//                                                             <MdOutlineKeyboardDoubleArrowRight />
//                                                             Custom Web Design
//                                                         </a>
//                                                         <a href="/responsive-website">
//                                                             <MdOutlineKeyboardDoubleArrowRight />
//                                                             Responsive Website
//                                                         </a>
//                                                         <a href="/ui-ux#">
//                                                             <MdOutlineKeyboardDoubleArrowRight />
//                                                             UI&UX Design
//                                                         </a>
//                                                         <a href="/website-redesign">
//                                                             <MdOutlineKeyboardDoubleArrowRight />
//                                                             Website Redesign
//                                                         </a>
//                                                         <a href="website-maintenance">
//                                                             <MdOutlineKeyboardDoubleArrowRight />
//                                                             Website Maintenance
//                                                         </a>
//                                                     </div>
//                                                     <div className="mega_menu_item">
//                                                         <div className="d-flex align-items-center">
//                                                             <a href="/seo-company-in-chennai">
//                                                                 <img alt="" src="/webdads/images/home/megamenu/seo-services-megamenu-icon.webp" className="w-75"></img>
//                                                             </a>
//                                                             <a href="/seo-company-in-chennai">
//                                                                 <h3> SEO Services</h3>
//                                                             </a>
//                                                         </div>

//                                                         <a href="/digital-marketing-agency">
//                                                             <MdOutlineKeyboardDoubleArrowRight />
//                                                             Digital Marketing
//                                                         </a>
//                                                         <a href="/ppc-service">
//                                                             <MdOutlineKeyboardDoubleArrowRight />
//                                                             PPC Service
//                                                         </a>
//                                                         <a href="/e-commerce-seo-service">
//                                                             <MdOutlineKeyboardDoubleArrowRight />
//                                                             E-commerce SEO Service
//                                                         </a>
//                                                         <a href="/local-seo-service">
//                                                             <MdOutlineKeyboardDoubleArrowRight />
//                                                             Local SEO Service
//                                                         </a>
//                                                         <a href="/off-page-seo">
//                                                             <MdOutlineKeyboardDoubleArrowRight />
//                                                             Off Page SEO
//                                                         </a>
//                                                         <a href="/link-building-service">
//                                                             <MdOutlineKeyboardDoubleArrowRight />
//                                                             Link Building Service
//                                                         </a>
//                                                         <a href="/content-writing-service">
//                                                             <MdOutlineKeyboardDoubleArrowRight />
//                                                             Content Writing Service
//                                                         </a>
//                                                     </div>
//                                                     <div className="mega_menu_item">
//                                                         <div className="d-flex align-items-center">
//                                                             <a href="/branding-design/">
//                                                                 <img alt="" src="/webdads/images/home/megamenu/branding-design-megamenu-icon.png" className="w-75"></img>
//                                                             </a>
//                                                             <a href="/branding-design/">
//                                                                 <h3>Branding Design</h3>
//                                                             </a>
//                                                         </div>

//                                                         <a href="/logo-design">
//                                                             <MdOutlineKeyboardDoubleArrowRight />
//                                                             Logo Design
//                                                         </a>
//                                                         <a href="/brochure-design">
//                                                             <MdOutlineKeyboardDoubleArrowRight />
//                                                             Brochure Design
//                                                         </a>
//                                                         <a href="/social-media-design">
//                                                             <MdOutlineKeyboardDoubleArrowRight />
//                                                             Social Media Design
//                                                         </a>
//                                                         <a href="/flyer-design">
//                                                             <MdOutlineKeyboardDoubleArrowRight />
//                                                             Flyer Design
//                                                         </a>
//                                                         <a href="/corporate-gifts-design/">
//                                                             <MdOutlineKeyboardDoubleArrowRight />
//                                                             Corporate Gifts Design
//                                                         </a>
//                                                         <a href="/business-card-design">
//                                                             <MdOutlineKeyboardDoubleArrowRight />
//                                                             Business Card Design
//                                                         </a>
//                                                         <a href="/letterhead-design">
//                                                             <MdOutlineKeyboardDoubleArrowRight />
//                                                             Letterhead Design
//                                                         </a>
//                                                     </div>
//                                                     <div className="mega_menu_item">
//                                                         <div className="d-flex align-items-center">
//                                                             <a href="/mobile-app-development">
//                                                                 <img alt="" src="/webdads/images/home/megamenu/mobile-app-development-megamenu-icon.png" className="w-75"></img>
//                                                             </a>
//                                                             <a href="/mobile-app-development">
//                                                                 <h3>Mobile App Development</h3>
//                                                             </a>
//                                                         </div>
//                                                         <a href="/ios-app-development">
//                                                             <MdOutlineKeyboardDoubleArrowRight />
//                                                             IOS App Development
//                                                         </a>
//                                                         <a href="/android-app-development">
//                                                             <MdOutlineKeyboardDoubleArrowRight />
//                                                             Android App Development
//                                                         </a>
//                                                         <a href="/flutter-app-development/">
//                                                             <MdOutlineKeyboardDoubleArrowRight />
//                                                             Flutter App Development
//                                                         </a>
//                                                         <a href="/react-native-app-development">
//                                                             <MdOutlineKeyboardDoubleArrowRight />
//                                                             React Native App Development{' '}
//                                                         </a>
//                                                         <a href="/mobile-app-ui-ux-design">
//                                                             <MdOutlineKeyboardDoubleArrowRight />
//                                                             Mobile App UI/ UX Design
//                                                         </a>
//                                                     </div>
//                                                     <div className="mega_menu_item">
//                                                         <div className="d-flex align-items-center">
//                                                             <a href="/crm-erp-development">
//                                                                 <img alt="" src="/webdads/images/home/megamenu/ecommerce-development-megamenu-icon.webp" className="w-75"></img>
//                                                             </a>{' '}
//                                                             <a href="/crm-erp-development">
//                                                                 <h3>CRM & ERP Development</h3>
//                                                             </a>
//                                                         </div>
//                                                         <a href="/customized-crm">
//                                                             <MdOutlineKeyboardDoubleArrowRight />
//                                                             Customized CRM
//                                                         </a>
//                                                         <a href="/customized-erp">
//                                                             <MdOutlineKeyboardDoubleArrowRight />
//                                                             Customized ERP
//                                                         </a>
//                                                     </div>
//                                                     <div className="mega_menu_item">
//                                                         <div className="d-flex align-items-center">
//                                                             <a href="/ecommerce-website-development">
//                                                                 <img alt="" src="/webdads/images/home/megamenu/crm-erp-development-megamenu-icon.webp" className="w-75"></img>
//                                                             </a>
//                                                             <a href="/ecommerce-website-development">
//                                                                 <h3>E-commerce Development</h3>
//                                                             </a>
//                                                         </div>
//                                                         <a href="/woo-commerce">
//                                                             <MdOutlineKeyboardDoubleArrowRight />
//                                                             Woocommerce
//                                                         </a>
//                                                         <a href="/opencart-development">
//                                                             <MdOutlineKeyboardDoubleArrowRight />
//                                                             Opencart
//                                                         </a>
//                                                         <a href="/shopify-development">
//                                                             <MdOutlineKeyboardDoubleArrowRight />
//                                                             Shopify
//                                                         </a>
//                                                     </div>
//                                                 </div>
//                                             </li>
//                                             <li className="has_dropdown">
//                                                 <a href="/work">
//                                                     Work <i className="fas fa-angle-down"></i>
//                                                 </a>
//                                                 <ul className="sub_menu">
//                                                     <li>
//                                                         <a href="/wordpress">WordPress</a>
//                                                     </li>

//                                                     <li>
//                                                         <a href="/e-commerce">E-Commerce</a>
//                                                     </li>
//                                                     <li>
//                                                         <a href="/php-development-company">Php</a>
//                                                     </li>
//                                                     <li>
//                                                         <a href="/react">React</a>
//                                                     </li>
//                                                     <li>
//                                                         <a href="/logo-design-agency">Logo</a>
//                                                     </li>
//                                                     <li>
//                                                         <a href="/brochure">Brochure</a>
//                                                     </li>
//                                                     <li>
//                                                         <a href="/business-card">Business Card</a>
//                                                     </li>
//                                                     <li>
//                                                         <a href="/social-media-service">Social media</a>
//                                                     </li>
//                                                     <li>
//                                                         <a href="/letter-head/">Letter Head</a>
//                                                     </li>
//                                                     <li>
//                                                         <a href="/flyer-design-work/">flyer design</a>
//                                                     </li>
//                                                 </ul>
//                                             </li>

//                                             <li>
//                                                 <a href="/contact-us">Contact</a>
//                                             </li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 <div className="col-md-5 contdl-home">
//                                     <div className="home-header-social-icons">
//                                         <ul className="d-flex">
//                                             <a href="https://www.facebook.com/Webdads2u">
//                                                 <li>
//                                                     <FaFacebookF />{' '}
//                                                 </li>
//                                             </a>
//                                             <a href="https://x.com/webdads2u">
//                                                 <li>
//                                                     <FaXTwitter />{' '}
//                                                 </li>
//                                             </a>
//                                             <a href="https://www.instagram.com/webdads2u/">
//                                                 <li>
//                                                     <FaInstagram />
//                                                 </li>
//                                             </a>
//                                             <a href="https://www.linkedin.com/company/webdads2u-private-limited/">
//                                                 <li>
//                                                     <FaLinkedinIn />
//                                                 </li>
//                                             </a>
//                                         </ul>
//                                     </div>
//                                     <a href="/contact-us" style={{ textDecoration: 'none', color: 'inherit' }}>
//                                         <Button variant="primary" className="mb-rsbtn">
//                                             Get a Quotes
//                                         </Button>
//                                     </a>
//                                     <div className="home-header-phone-ic">
//                                         <div className="Home-header-phn-ic">
//                                             <FaPhone />{' '}
//                                         </div>
//                                         <div className="home-header-phone-det">
//                                             <h3>Feel free to contact us</h3>
//                                             <h6>
//                                                 <a href="tel:+91-8825607550">+91-8825607550</a>
//                                             </h6>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </nav>
//                 </Offcanvas.Body>
//             </Offcanvas>
//         </>
//     );
// };
// export default Header;
// ==================================================================================================================
// ==================================================================================================================
// ==================================================================================================================
// ==================================================================================================================
// ==================================================================================================================
// ==================================================================================================================
// ==================================================================================================================
// ==================================================================================================================
// ==================================================================================================================
// ==================================================================================================================
// ==================================================================================================================
// ==================================================================================================================
// ==================================================================================================================
// ==================================================================================================================
// ==================================================================================================================
// ==================================================================================================================
// ==================================================================================================================
'use client';
import { useState, useEffect } from 'react';
import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone } from 'react-icons/fa';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { RiMenu3Fill } from 'react-icons/ri';
import Link from 'next/link';
import { FaChevronUp } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { IoCall } from 'react-icons/io5';

import '../style/testingheader.scss';

const Header = () => {
    const router = useRouter();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const [activeDropdown, setActiveDropdown] = useState(null);
    // const toggleDropdown = (dropdown) => {
    //     setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    // };
    // const [isOpen, setIsOpen] = useState(false);
    // const toggleDropdown = () => setIsOpen(!isOpen);
    // const [openDropdown, setOpenDropdown] = (useState < string) | (null > null);
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (key) => {
        setOpenDropdown((prev) => (prev === key ? null : key));
    };

    useEffect(() => {
        // Add click event listeners to dropdown items
        document.querySelectorAll('.main_menu ul li.has_dropdown > a').forEach((item) => {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                const parentLi = this.parentElement;
                parentLi.classList.toggle('active');
            });
        });
    }, []);

    return (
        <>
            {/* <div className="d-lg-none mobl-hed"> */}
            <div className="mobl-hed">
                <Link href="/" style={{ textDecoration: 'none' }}>
                    <div>
                        <img style={{ width: 'inherit', maxWidth: '200px', position: 'absolute' }} onClick={() => router.push('/')} src="/webdads/images/home/webdads2u-logo.svg" alt="why choose us" />
                    </div>
                </Link>
                {/* <Button style={{ display: 'block' }} variant="primary" className="d-lg-none" onClick={handleShow}> */}
                <Button style={{ display: 'block' }} variant="primary" onClick={handleShow}>
                    <RiMenu3Fill />
                </Button>
            </div>

            <section className="sidebar-content-div hd-btn">
                <div className="icon-sty">
                    <a href="https://web.whatsapp.com/send?phone=+918825607550&text=Welcome+to+Webdads2u" className="sidebar-icon" target="_blank" rel="noopener">
                        <svg width="33.163" height="33.158" viewBox="0 0 33.163 33.158" style={{ marginTop: '15px', marginLeft: '6px' }}>
                            <ellipse id="Ellipse_25" data-name="Ellipse 25" cx="12.5" cy="12" rx="12.5" ry="12" transform="translate(4 4.579)" fill="#fff"></ellipse>
                            <g id="Layer_2" data-name="Layer 2">
                                <g id="Color">
                                    <g id="_08.Whatsapp" data-name="08.Whatsapp">
                                        <path
                                            id="Icon"
                                            d="M52.588,36A16.579,16.579,0,0,0,39.163,62.3l-2.072,6.159,6.379-2.039A16.579,16.579,0,1,0,52.588,36ZM61.4,59.447l-1.766,1.766c-1.857,1.857-6.781-.187-11.145-4.559s-6.321-9.284-4.555-11.12L45.7,43.767a1.853,1.853,0,0,1,2.508,0l2.6,2.595a1.728,1.728,0,0,1-.651,2.876,1.687,1.687,0,0,0-1.115,2.048,8.019,8.019,0,0,0,4.833,4.829A1.77,1.77,0,0,0,55.9,54.987a1.733,1.733,0,0,1,2.9-.651l2.6,2.6a1.853,1.853,0,0,1,0,2.508Z"
                                            transform="translate(-36.015 -36)"
                                            fill=" #075e54"
                                        ></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </a>
                    <span className="mail-icon-div d-block">
                        <a href="tel:+91 8825607550" className="sidebar-icon emil-bx">
                            <IoCall style={{ marginLeft: '5px', fill: '#fff', fontSize: '20px' }} />
                        </a>
                    </span>
                </div>
            </section>
            <nav>
                <div className="container megamnu">
                    <div className="row">
                        <div className="col-md-3 logo-cl">
                            <div className="site-logo">
                                <Link href="/" style={{ textDecoration: 'none' }}>
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
                                    <li className="has_dropdown">
                                        <a href="/about" className="active">
                                            About
                                        </a>
                                        <ul className="sub_menu">
                                            <li>
                                                <a href="/culturals">Culturals</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="mega_menu_dropdown has_dropdown">
                                        <a href="#">
                                            Service <i className="fas fa-angle-down"></i>
                                        </a>
                                        <div className="mega_menu sub_menu">
                                            <div className="mega_menu_item">
                                                <div className="d-flex align-items-center">
                                                    <a href="/website-development">
                                                        <img alt="" src="/webdads/images/home/megamenu/responsive-web-design.png" className="w-75"></img>
                                                    </a>
                                                    <a href="/website-development">
                                                        <h3> Website Development</h3>
                                                    </a>
                                                </div>

                                                <a href="/web-portal-development">
                                                    <MdOutlineKeyboardDoubleArrowRight />
                                                    Web Portal Development
                                                </a>
                                                <a href="/wordpress-development">
                                                    <MdOutlineKeyboardDoubleArrowRight />
                                                    Wordpress Web Development
                                                </a>
                                                <a href="/react-js-development">
                                                    <MdOutlineKeyboardDoubleArrowRight />
                                                    ReactJs Web Development
                                                </a>
                                                <a href="/php-web-development/">
                                                    <MdOutlineKeyboardDoubleArrowRight />
                                                    Php Web Development
                                                </a>
                                                <a href="/custom-web-development">
                                                    <MdOutlineKeyboardDoubleArrowRight />
                                                    Custom Web Development
                                                </a>
                                            </div>
                                            <div className="mega_menu_item">
                                                <div className="d-flex align-items-center">
                                                    <a href="/web-design">
                                                        <img alt="" src="/webdads/images/home/megamenu/custom-web-design.png" className="w-75"></img>
                                                    </a>
                                                    <a href="/web-design/">
                                                        <h3> Web Design</h3>
                                                    </a>
                                                </div>

                                                <a href="/html5">
                                                    <MdOutlineKeyboardDoubleArrowRight />
                                                    HTML5 Website design
                                                </a>
                                                <a href="/domain-registration">
                                                    <MdOutlineKeyboardDoubleArrowRight />
                                                    Domain Registration
                                                </a>
                                                <a href="/web-hosting-service">
                                                    <MdOutlineKeyboardDoubleArrowRight />
                                                    Hosting
                                                </a>
                                                <a href="/custom-web-design">
                                                    <MdOutlineKeyboardDoubleArrowRight />
                                                    Custom Web Design
                                                </a>
                                                <a href="/responsive-website">
                                                    <MdOutlineKeyboardDoubleArrowRight />
                                                    Responsive Website
                                                </a>
                                                <a href="/ui-ux#">
                                                    <MdOutlineKeyboardDoubleArrowRight />
                                                    UI&UX Design
                                                </a>
                                                <a href="/website-redesign">
                                                    <MdOutlineKeyboardDoubleArrowRight />
                                                    Website Redesign
                                                </a>
                                                <a href="website-maintenance">
                                                    <MdOutlineKeyboardDoubleArrowRight />
                                                    Website Maintenance
                                                </a>
                                            </div>
                                            <div className="mega_menu_item">
                                                <div className="d-flex align-items-center">
                                                    <a href="/seo-company-in-chennai">
                                                        <img alt="" src="/webdads/images/home/megamenu/seo-services-megamenu-icon.webp" className="w-75"></img>
                                                    </a>
                                                    <a href="/seo-company-in-chennai">
                                                        <h3> SEO Services</h3>
                                                    </a>
                                                </div>

                                                <a href="/digital-marketing-agency">
                                                    <MdOutlineKeyboardDoubleArrowRight />
                                                    Digital Marketing
                                                </a>
                                                <a href="/ppc-service">
                                                    <MdOutlineKeyboardDoubleArrowRight />
                                                    PPC Service
                                                </a>
                                                <a href="/e-commerce-seo-service">
                                                    <MdOutlineKeyboardDoubleArrowRight />
                                                    E-commerce SEO Service
                                                </a>
                                                <a href="/local-seo-service">
                                                    <MdOutlineKeyboardDoubleArrowRight />
                                                    Local SEO Service
                                                </a>
                                                <a href="/off-page-seo">
                                                    <MdOutlineKeyboardDoubleArrowRight />
                                                    Off Page SEO
                                                </a>
                                                <a href="/link-building-service">
                                                    <MdOutlineKeyboardDoubleArrowRight />
                                                    Link Building Service
                                                </a>
                                                <a href="/content-writing-service">
                                                    <MdOutlineKeyboardDoubleArrowRight />
                                                    Content Writing Service
                                                </a>
                                            </div>
                                            <div className="mega_menu_item">
                                                <div className="d-flex align-items-center">
                                                    <a href="/branding-design/">
                                                        <img alt="" src="/webdads/images/home/megamenu/branding-design-megamenu-icon.png" className="w-75"></img>
                                                    </a>
                                                    <a href="/branding-design/">
                                                        <h3>Branding Design</h3>
                                                    </a>
                                                </div>

                                                <a href="/logo-design">
                                                    <MdOutlineKeyboardDoubleArrowRight />
                                                    Logo Design
                                                </a>
                                                <a href="/brochure-design">
                                                    <MdOutlineKeyboardDoubleArrowRight />
                                                    Brochure Design
                                                </a>
                                                <a href="/social-media-design">
                                                    <MdOutlineKeyboardDoubleArrowRight />
                                                    Social Media Design
                                                </a>
                                                <a href="/flyer-design">
                                                    <MdOutlineKeyboardDoubleArrowRight />
                                                    Flyer Design
                                                </a>
                                                <a href="/corporate-gifts-design/">
                                                    <MdOutlineKeyboardDoubleArrowRight />
                                                    Corporate Gifts Design
                                                </a>
                                                <a href="/business-card-design">
                                                    <MdOutlineKeyboardDoubleArrowRight />
                                                    Business Card Design
                                                </a>
                                                <a href="/letterhead-design">
                                                    <MdOutlineKeyboardDoubleArrowRight />
                                                    Letterhead Design
                                                </a>
                                            </div>
                                            <div className="mega_menu_item">
                                                <div className="d-flex align-items-center">
                                                    <a href="/mobile-app-development">
                                                        <img alt="" src="/webdads/images/home/megamenu/mobile-app-development-megamenu-icon.png" className="w-75"></img>
                                                    </a>
                                                    <a href="/mobile-app-development">
                                                        <h3>Mobile App Development</h3>
                                                    </a>
                                                </div>
                                                <a href="/ios-app-development">
                                                    <MdOutlineKeyboardDoubleArrowRight />
                                                    IOS App Development
                                                </a>
                                                <a href="/android-app-development">
                                                    <MdOutlineKeyboardDoubleArrowRight />
                                                    Android App Development
                                                </a>
                                                <a href="/flutter-app-development/">
                                                    <MdOutlineKeyboardDoubleArrowRight />
                                                    Flutter App Development
                                                </a>
                                                <a href="/react-native-app-development">
                                                    <MdOutlineKeyboardDoubleArrowRight />
                                                    React Native App Development{' '}
                                                </a>
                                                <a href="/mobile-app-ui-ux-design">
                                                    <MdOutlineKeyboardDoubleArrowRight />
                                                    Mobile App UI/ UX Design
                                                </a>
                                            </div>
                                            <div className="mega_menu_item">
                                                <div className="d-flex align-items-center">
                                                    <a href="/crm-erp-development">
                                                        <img alt="" src="/webdads/images/home/megamenu/ecommerce-development-megamenu-icon.webp" className="w-75"></img>
                                                    </a>{' '}
                                                    <a href="/crm-erp-development">
                                                        <h3>CRM & ERP Development</h3>
                                                    </a>
                                                </div>
                                                <a href="/customized-crm">
                                                    <MdOutlineKeyboardDoubleArrowRight />
                                                    Customized CRM
                                                </a>
                                                <a href="/customized-erp">
                                                    <MdOutlineKeyboardDoubleArrowRight />
                                                    Customized ERP
                                                </a>
                                            </div>
                                            <div className="mega_menu_item">
                                                <div className="d-flex align-items-center">
                                                    <a href="/ecommerce-website-development">
                                                        <img alt="" src="/webdads/images/home/megamenu/crm-erp-development-megamenu-icon.webp" className="w-75"></img>
                                                    </a>
                                                    <a href="/ecommerce-website-development">
                                                        <h3>E-commerce Development</h3>
                                                    </a>
                                                </div>
                                                <a href="/woo-commerce">
                                                    <MdOutlineKeyboardDoubleArrowRight />
                                                    Woocommerce
                                                </a>
                                                <a href="/opencart-development">
                                                    <MdOutlineKeyboardDoubleArrowRight />
                                                    Opencart
                                                </a>
                                                <a href="/shopify-development">
                                                    <MdOutlineKeyboardDoubleArrowRight />
                                                    Shopify
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="has_dropdown">
                                        <a href="/work">
                                            Work <i className="fas fa-angle-down"></i>
                                        </a>
                                        <ul className="sub_menu">
                                            <li>
                                                <a href="/wordpress">WordPress</a>
                                            </li>

                                            <li>
                                                <a href="/e-commerce">E-Commerce</a>
                                            </li>
                                            <li>
                                                <a href="/php-development-company">Php</a>
                                            </li>
                                            <li>
                                                <a href="/react">React</a>
                                            </li>
                                            <li>
                                                <a href="/logo-design-agency">Logo</a>
                                            </li>
                                            <li>
                                                <a href="/brochure">Brochure</a>
                                            </li>
                                            <li>
                                                <a href="/business-card">Business Card</a>
                                            </li>
                                            <li>
                                                <a href="/social-media-service">Social media</a>
                                            </li>
                                            <li>
                                                <a href="/letter-head/">Letter Head</a>
                                            </li>
                                            <li>
                                                <a href="/flyer-design-work/">flyer design</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li>
                                        <a href="/contact-us">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5 contdl-home">
                            <div className="home-header-social-icons">
                                <ul className="d-flex">
                                    <a href="https://www.facebook.com/Webdads2u">
                                        <li>
                                            <FaFacebookF />{' '}
                                        </li>
                                    </a>
                                    <a href="https://x.com/webdads2u">
                                        <li>
                                            <FaXTwitter />{' '}
                                        </li>
                                    </a>
                                    <a href="https://www.instagram.com/webdads2u/">
                                        <li>
                                            <FaInstagram />
                                        </li>
                                    </a>
                                    <a href="https://www.linkedin.com/company/webdads2u-private-limited/">
                                        <li>
                                            <FaLinkedinIn />
                                        </li>
                                    </a>
                                </ul>
                            </div>
                            <a href="/contact-us" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Button variant="primary" className="mb-rsbtn">
                                    Get a Quotes
                                </Button>
                            </a>
                            <div className="home-header-phone-ic">
                                <div className="Home-header-phn-ic">
                                    <FaPhone />{' '}
                                </div>
                                <div className="home-header-phone-det">
                                    <h3>Feel free to contact us</h3>
                                    <h6>
                                        <a href="tel:+91-8825607550">+91-8825607550</a>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* <li className="has_dropdowns">
                                                <a href="/work">
                                                    Work <i className="fas fa-angle-down"></i>
                                                </a>
                                                <ul className="sub_menu">
                                                    <li>
                                                        <a href="/wordpress">WordPress</a>
                                                    </li>

                                                    <li>
                                                        <a href="/e-commerce">E-Commerce</a>
                                                    </li>
                                                    <li>
                                                        <a href="/php-development-company">Php</a>
                                                    </li>
                                                    <li>
                                                        <a href="/react">React</a>
                                                    </li>
                                                    <li>
                                                        <a href="/logo-design-agency">Logo</a>
                                                    </li>
                                                    <li>
                                                        <a href="/brochure">Brochure</a>
                                                    </li>
                                                    <li>
                                                        <a href="/business-card">Business Card</a>
                                                    </li>
                                                    <li>
                                                        <a href="/social-media-service">Social media</a>
                                                    </li>
                                                    <li>
                                                        <a href="/letter-head/">Letter Head</a>
                                                    </li>
                                                    <li>
                                                        <a href="/flyer-design-work/">flyer design</a>
                                                    </li>
                                                </ul>
                                            </li> */}

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Link href="/" style={{ textDecoration: 'none' }} onClick={handleClose}>
                        <img src="/webdads/images/home/webdads2u-logo.svg" alt="why choose us w-50" width={200}></img>
                    </Link>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {/* <nav>
                        <div className="container megamnus">
                            <div className="row">
                                <div className="col-md-4 navbr-cl">
                                    <div className="mobile_btns">
                                        <i className="fas fa-bars"></i>
                                    </div>

                                    <div className="main_menus">
                                        <ul>
                                            <li className="has_dropdowns">
                                                <a href="/about" className="active">
                                                    About
                                                </a>
                                                <ul className="sub_menus">
                                                    <li>
                                                        <a href="/culturals">Culturals</a>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="has_dropdowns">
                                                <a href="#">
                                                    Service <i className="fas fa-angle-down"></i>
                                                </a>
                                                <div className="mega_menus sub_menus">
                                                    <div className="mega_menus_item">
                                                        <div className="d-flex align-items-center">
                                                            <a href="/website-development">
                                                                <img alt="" src="/webdads/images/home/megamenu/responsive-web-design.png" className="w-75"></img>
                                                            </a>
                                                            <a href="/website-development">
                                                                <h3> Website Development</h3>
                                                            </a>
                                                        </div>

                                                        <a href="/web-portal-development">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Web Portal Development
                                                        </a>
                                                        <a href="/wordpress-development">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Wordpress Web Development
                                                        </a>
                                                        <a href="/react-js-development">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            ReactJs Web Development
                                                        </a>
                                                        <a href="/php-web-development/">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Php Web Development
                                                        </a>
                                                        <a href="/custom-web-development">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Custom Web Development
                                                        </a>
                                                    </div>
                                                    <div className="mega_menu_item">
                                                        <div className="d-flex align-items-center">
                                                            <a href="/web-design">
                                                                <img alt="" src="/webdads/images/home/megamenu/custom-web-design.png" className="w-75"></img>
                                                            </a>
                                                            <a href="/web-design/">
                                                                <h3> Web Design</h3>
                                                            </a>
                                                        </div>

                                                        <a href="/html5">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            HTML5 Website design
                                                        </a>
                                                        <a href="/domain-registration">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Domain Registration
                                                        </a>
                                                        <a href="/web-hosting-service">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Hosting
                                                        </a>
                                                        <a href="/custom-web-design">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Custom Web Design
                                                        </a>
                                                        <a href="/responsive-website">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Responsive Website
                                                        </a>
                                                        <a href="/ui-ux#">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            UI&UX Design
                                                        </a>
                                                        <a href="/website-redesign">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Website Redesign
                                                        </a>
                                                        <a href="website-maintenance">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Website Maintenance
                                                        </a>
                                                    </div>
                                                    <div className="mega_menu_item">
                                                        <div className="d-flex align-items-center">
                                                            <a href="/seo-company-in-chennai">
                                                                <img alt="" src="/webdads/images/home/megamenu/seo-services-megamenu-icon.webp" className="w-75"></img>
                                                            </a>
                                                            <a href="/seo-company-in-chennai">
                                                                <h3> SEO Services</h3>
                                                            </a>
                                                        </div>

                                                        <a href="/digital-marketing-agency">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Digital Marketing
                                                        </a>
                                                        <a href="/ppc-service">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            PPC Service
                                                        </a>
                                                        <a href="/e-commerce-seo-service">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            E-commerce SEO Service
                                                        </a>
                                                        <a href="/local-seo-service">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Local SEO Service
                                                        </a>
                                                        <a href="/off-page-seo">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Off Page SEO
                                                        </a>
                                                        <a href="/link-building-service">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Link Building Service
                                                        </a>
                                                        <a href="/content-writing-service">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Content Writing Service
                                                        </a>
                                                    </div>
                                                    <div className="mega_menu_item">
                                                        <div className="d-flex align-items-center">
                                                            <a href="/branding-design/">
                                                                <img alt="" src="/webdads/images/home/megamenu/branding-design-megamenu-icon.png" className="w-75"></img>
                                                            </a>
                                                            <a href="/branding-design/">
                                                                <h3>Branding Design</h3>
                                                            </a>
                                                        </div>

                                                        <a href="/logo-design">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Logo Design
                                                        </a>
                                                        <a href="/brochure-design">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Brochure Design
                                                        </a>
                                                        <a href="/social-media-design">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Social Media Design
                                                        </a>
                                                        <a href="/flyer-design">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Flyer Design
                                                        </a>
                                                        <a href="/corporate-gifts-design/">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Corporate Gifts Design
                                                        </a>
                                                        <a href="/business-card-design">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Business Card Design
                                                        </a>
                                                        <a href="/letterhead-design">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Letterhead Design
                                                        </a>
                                                    </div>
                                                    <div className="mega_menu_item">
                                                        <div className="d-flex align-items-center">
                                                            <a href="/mobile-app-development">
                                                                <img alt="" src="/webdads/images/home/megamenu/mobile-app-development-megamenu-icon.png" className="w-75"></img>
                                                            </a>
                                                            <a href="/mobile-app-development">
                                                                <h3>Mobile App Development</h3>
                                                            </a>
                                                        </div>
                                                        <a href="/ios-app-development">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            IOS App Development
                                                        </a>
                                                        <a href="/android-app-development">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Android App Development
                                                        </a>
                                                        <a href="/flutter-app-development/">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Flutter App Development
                                                        </a>
                                                        <a href="/react-native-app-development">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            React Native App Development{' '}
                                                        </a>
                                                        <a href="/mobile-app-ui-ux-design">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Mobile App UI/ UX Design
                                                        </a>
                                                    </div>
                                                    <div className="mega_menu_item">
                                                        <div className="d-flex align-items-center">
                                                            <a href="/crm-erp-development">
                                                                <img alt="" src="/webdads/images/home/megamenu/ecommerce-development-megamenu-icon.webp" className="w-75"></img>
                                                            </a>{' '}
                                                            <a href="/crm-erp-development">
                                                                <h3>CRM & ERP Development</h3>
                                                            </a>
                                                        </div>
                                                        <a href="/customized-crm">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Customized CRM
                                                        </a>
                                                        <a href="/customized-erp">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Customized ERP
                                                        </a>
                                                    </div>
                                                    <div className="mega_menu_item">
                                                        <div className="d-flex align-items-center">
                                                            <a href="/ecommerce-website-development">
                                                                <img alt="" src="/webdads/images/home/megamenu/crm-erp-development-megamenu-icon.webp" className="w-75"></img>
                                                            </a>
                                                            <a href="/ecommerce-website-development">
                                                                <h3>E-commerce Development</h3>
                                                            </a>
                                                        </div>
                                                        <a href="/woo-commerce">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Woocommerce
                                                        </a>
                                                        <a href="/opencart-development">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Opencart
                                                        </a>
                                                        <a href="/shopify-development">
                                                            <MdOutlineKeyboardDoubleArrowRight />
                                                            Shopify
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            
                                            <li className={`has_dropdowns ${isOpen ? 'open' : ''}`}>
                                                <a href="#!" onClick={toggleDropdown}>
                                                    Work <i className="fas fa-angle-down"></i>
                                                </a>
                                                {isOpen && (
                                                    <ul className="sub_menu">
                                                        <li>
                                                            <a href="/wordpress">WordPress</a>
                                                        </li>
                                                        <li>
                                                            <a href="/e-commerce">E-Commerce</a>
                                                        </li>
                                                        <li>
                                                            <a href="/php-development-company">Php</a>
                                                        </li>
                                                        <li>
                                                            <a href="/react">React</a>
                                                        </li>
                                                        <li>
                                                            <a href="/logo-design-agency">Logo</a>
                                                        </li>
                                                        <li>
                                                            <a href="/brochure">Brochure</a>
                                                        </li>
                                                        <li>
                                                            <a href="/business-card">Business Card</a>
                                                        </li>
                                                        <li>
                                                            <a href="/social-media-service">Social media</a>
                                                        </li>
                                                        <li>
                                                            <a href="/letter-head/">Letter Head</a>
                                                        </li>
                                                        <li>
                                                            <a href="/flyer-design-work/">Flyer Design</a>
                                                        </li>
                                                    </ul>
                                                )}
                                            </li>
                                            <li>
                                                <a href="/contact-us">Contact</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav> */}

                    <nav>
                        <div className="container megamnus">
                            <div className="row">
                                <div className="col-md-4 navbr-cl">
                                    <div className="mobile_btns">
                                        <i className="fas fa-bars"></i>
                                    </div>

                                    <div className="main_menus">
                                        <ul>
                                            {/* About Dropdown */}
                                            <li className={`has_dropdowns ${openDropdown === 'about' ? 'open' : ''}`}>
                                                <a href="#!" onClick={() => toggleDropdown('about')}>
                                                    About{' '}
                                                    <i className="w-100 d-flex justify-content-end">
                                                        {openDropdown === 'about' ? (
                                                            <div className="dropdown-show-style">
                                                                <FaChevronUp />
                                                            </div>
                                                        ) : (
                                                            <div className="dropdown-show-style">
                                                                <FaChevronDown />
                                                            </div>
                                                        )}
                                                    </i>
                                                </a>
                                                {openDropdown === 'about' && (
                                                    <ul className="sub_menus">
                                                        <li>
                                                            <a href="/culturals">Culturals</a>
                                                        </li>
                                                    </ul>
                                                )}
                                            </li>

                                            {/* Service Dropdown */}
                                            <li className={`has_dropdowns ${openDropdown === 'service' ? 'open' : ''}`}>
                                                <a href="#!" onClick={() => toggleDropdown('service')}>
                                                    Service{' '}
                                                    <i className="w-100 d-flex justify-content-end">
                                                        {openDropdown === 'service' ? (
                                                            <div className="dropdown-show-style">
                                                                <FaChevronUp />
                                                            </div>
                                                        ) : (
                                                            <div className="dropdown-show-style">
                                                                <FaChevronDown />
                                                            </div>
                                                        )}
                                                    </i>
                                                </a>
                                                {openDropdown === 'service' && (
                                                    <div className="mega_menus sub_menus">
                                                        <div className="mega_menus_item">
                                                            <div className="d-flex align-items-start flex-column">
                                                                <a href="/website-development">
                                                                    <img alt="" src="/webdads/images/home/megamenu/responsive-web-design.png" className="w-75" />
                                                                </a>
                                                                <a href="/website-development">
                                                                    <h3>Website Development</h3>
                                                                </a>
                                                            </div>
                                                            <a href="/web-portal-development">
                                                                <MdOutlineKeyboardDoubleArrowRight /> Web Portal Development
                                                            </a>
                                                            <a href="/wordpress-development">
                                                                <MdOutlineKeyboardDoubleArrowRight /> Wordpress Web Development
                                                            </a>
                                                            <a href="/react-js-development">
                                                                <MdOutlineKeyboardDoubleArrowRight /> ReactJs Web Development
                                                            </a>
                                                            <a href="/php-web-development/">
                                                                <MdOutlineKeyboardDoubleArrowRight /> Php Web Development
                                                            </a>
                                                            <a href="/custom-web-development">
                                                                <MdOutlineKeyboardDoubleArrowRight /> Custom Web Development
                                                            </a>
                                                        </div>
                                                        <div className="mega_menus_item">
                                                            <div className="d-flex align-items-start flex-column">
                                                                <a href="/web-design">
                                                                    <img alt="" src="/webdads/images/home/megamenu/custom-web-design.png" className="w-75"></img>
                                                                </a>
                                                                <a href="/web-design/">
                                                                    <h3> Web Design</h3>
                                                                </a>
                                                            </div>

                                                            <a href="/html5">
                                                                <MdOutlineKeyboardDoubleArrowRight />
                                                                HTML5 Website design
                                                            </a>
                                                            <a href="/domain-registration">
                                                                <MdOutlineKeyboardDoubleArrowRight />
                                                                Domain Registration
                                                            </a>
                                                            <a href="/web-hosting-service">
                                                                <MdOutlineKeyboardDoubleArrowRight />
                                                                Hosting
                                                            </a>
                                                            <a href="/custom-web-design">
                                                                <MdOutlineKeyboardDoubleArrowRight />
                                                                Custom Web Design
                                                            </a>
                                                            <a href="/responsive-website">
                                                                <MdOutlineKeyboardDoubleArrowRight />
                                                                Responsive Website
                                                            </a>
                                                            <a href="/ui-ux#">
                                                                <MdOutlineKeyboardDoubleArrowRight />
                                                                UI&UX Design
                                                            </a>
                                                            <a href="/website-redesign">
                                                                <MdOutlineKeyboardDoubleArrowRight />
                                                                Website Redesign
                                                            </a>
                                                            <a href="website-maintenance">
                                                                <MdOutlineKeyboardDoubleArrowRight />
                                                                Website Maintenance
                                                            </a>
                                                        </div>
                                                        <div className="mega_menus_item">
                                                            <div className="d-flex align-items-start flex-column">
                                                                <a href="/seo-company-in-chennai">
                                                                    <img alt="" src="/webdads/images/home/megamenu/seo-services-megamenu-icon.webp" className="w-75"></img>
                                                                </a>
                                                                <a href="/seo-company-in-chennai">
                                                                    <h3> SEO Services</h3>
                                                                </a>
                                                            </div>

                                                            <a href="/digital-marketing-agency">
                                                                <MdOutlineKeyboardDoubleArrowRight />
                                                                Digital Marketing
                                                            </a>
                                                            <a href="/ppc-service">
                                                                <MdOutlineKeyboardDoubleArrowRight />
                                                                PPC Service
                                                            </a>
                                                            <a href="/e-commerce-seo-service">
                                                                <MdOutlineKeyboardDoubleArrowRight />
                                                                E-commerce SEO Service
                                                            </a>
                                                            <a href="/local-seo-service">
                                                                <MdOutlineKeyboardDoubleArrowRight />
                                                                Local SEO Service
                                                            </a>
                                                            <a href="/off-page-seo">
                                                                <MdOutlineKeyboardDoubleArrowRight />
                                                                Off Page SEO
                                                            </a>
                                                            <a href="/link-building-service">
                                                                <MdOutlineKeyboardDoubleArrowRight />
                                                                Link Building Service
                                                            </a>
                                                            <a href="/content-writing-service">
                                                                <MdOutlineKeyboardDoubleArrowRight />
                                                                Content Writing Service
                                                            </a>
                                                        </div>
                                                        <div className="mega_menus_item">
                                                            <div className="d-flex align-items-start flex-column">
                                                                <a href="/branding-design/">
                                                                    <img alt="" src="/webdads/images/home/megamenu/branding-design-megamenu-icon.png" className="w-75"></img>
                                                                </a>
                                                                <a href="/branding-design/">
                                                                    <h3>Branding Design</h3>
                                                                </a>
                                                            </div>

                                                            <a href="/logo-design">
                                                                <MdOutlineKeyboardDoubleArrowRight />
                                                                Logo Design
                                                            </a>
                                                            <a href="/brochure-design">
                                                                <MdOutlineKeyboardDoubleArrowRight />
                                                                Brochure Design
                                                            </a>
                                                            <a href="/social-media-design">
                                                                <MdOutlineKeyboardDoubleArrowRight />
                                                                Social Media Design
                                                            </a>
                                                            <a href="/flyer-design">
                                                                <MdOutlineKeyboardDoubleArrowRight />
                                                                Flyer Design
                                                            </a>
                                                            <a href="/corporate-gifts-design/">
                                                                <MdOutlineKeyboardDoubleArrowRight />
                                                                Corporate Gifts Design
                                                            </a>
                                                            <a href="/business-card-design">
                                                                <MdOutlineKeyboardDoubleArrowRight />
                                                                Business Card Design
                                                            </a>
                                                            <a href="/letterhead-design">
                                                                <MdOutlineKeyboardDoubleArrowRight />
                                                                Letterhead Design
                                                            </a>
                                                        </div>
                                                        <div className="mega_menus_item">
                                                            <div className="d-flex align-items-start flex-column">
                                                                <a href="/mobile-app-development">
                                                                    <img alt="" src="/webdads/images/home/megamenu/mobile-app-development-megamenu-icon.png" className="w-75"></img>
                                                                </a>
                                                                <a href="/mobile-app-development">
                                                                    <h3>Mobile App Development</h3>
                                                                </a>
                                                            </div>
                                                            <a href="/ios-app-development">
                                                                <MdOutlineKeyboardDoubleArrowRight />
                                                                IOS App Development
                                                            </a>
                                                            <a href="/android-app-development">
                                                                <MdOutlineKeyboardDoubleArrowRight />
                                                                Android App Development
                                                            </a>
                                                            <a href="/flutter-app-development/">
                                                                <MdOutlineKeyboardDoubleArrowRight />
                                                                Flutter App Development
                                                            </a>
                                                            <a href="/react-native-app-development">
                                                                <MdOutlineKeyboardDoubleArrowRight />
                                                                React Native App Development{' '}
                                                            </a>
                                                            <a href="/mobile-app-ui-ux-design">
                                                                <MdOutlineKeyboardDoubleArrowRight />
                                                                Mobile App UI/ UX Design
                                                            </a>
                                                        </div>
                                                        <div className="mega_menus_item">
                                                            <div className="d-flex align-items-start flex-column">
                                                                <a href="/crm-erp-development">
                                                                    <img alt="" src="/webdads/images/home/megamenu/ecommerce-development-megamenu-icon.webp" className="w-75"></img>
                                                                </a>{' '}
                                                                <a href="/crm-erp-development">
                                                                    <h3>CRM & ERP Development</h3>
                                                                </a>
                                                            </div>
                                                            <a href="/customized-crm">
                                                                <MdOutlineKeyboardDoubleArrowRight />
                                                                Customized CRM
                                                            </a>
                                                            <a href="/customized-erp">
                                                                <MdOutlineKeyboardDoubleArrowRight />
                                                                Customized ERP
                                                            </a>
                                                        </div>
                                                        <div className="mega_menus_item">
                                                            <div className="d-flex align-items-start flex-column">
                                                                <a href="/ecommerce-website-development">
                                                                    <img alt="" src="/webdads/images/home/megamenu/crm-erp-development-megamenu-icon.webp" className="w-75"></img>
                                                                </a>
                                                                <a href="/ecommerce-website-development">
                                                                    <h3>E-commerce Development</h3>
                                                                </a>
                                                            </div>
                                                            <a href="/woo-commerce">
                                                                <MdOutlineKeyboardDoubleArrowRight />
                                                                Woocommerce
                                                            </a>
                                                            <a href="/opencart-development">
                                                                <MdOutlineKeyboardDoubleArrowRight />
                                                                Opencart
                                                            </a>
                                                            <a href="/shopify-development">
                                                                <MdOutlineKeyboardDoubleArrowRight />
                                                                Shopify
                                                            </a>
                                                        </div>
                                                    </div>
                                                )}
                                            </li>

                                            {/* Work Dropdown */}
                                            <li className={`has_dropdowns ${openDropdown === 'work' ? 'open' : ''}`}>
                                                <a href="#!" onClick={() => toggleDropdown('work')}>
                                                    Work{' '}
                                                    <i className="w-100 d-flex justify-content-end">
                                                        {openDropdown === 'work' ? (
                                                            <div className="dropdown-show-style">
                                                                <FaChevronUp />
                                                            </div>
                                                        ) : (
                                                            <div className="dropdown-show-style">
                                                                <FaChevronDown />
                                                            </div>
                                                        )}
                                                    </i>
                                                </a>
                                                {openDropdown === 'work' && (
                                                    <ul className="sub_menus">
                                                        <li>
                                                            <a href="/wordpress">WordPress</a>
                                                        </li>
                                                        <li>
                                                            <a href="/e-commerce">E-Commerce</a>
                                                        </li>
                                                        <li>
                                                            <a href="/php-development-company">Php</a>
                                                        </li>
                                                        <li>
                                                            <a href="/react">React</a>
                                                        </li>
                                                        <li>
                                                            <a href="/logo-design-agency">Logo</a>
                                                        </li>
                                                        <li>
                                                            <a href="/brochure">Brochure</a>
                                                        </li>
                                                        <li>
                                                            <a href="/business-card">Business Card</a>
                                                        </li>
                                                        <li>
                                                            <a href="/social-media-service">Social Media</a>
                                                        </li>
                                                        <li>
                                                            <a href="/letter-head/">Letter Head</a>
                                                        </li>
                                                        <li>
                                                            <a href="/flyer-design-work/">Flyer Design</a>
                                                        </li>
                                                    </ul>
                                                )}
                                            </li>

                                            {/* Contact */}
                                            <li className="contact-us-header-sidebar">
                                                <a href="/contact-us">Contact</a>
                                            </li>
                                        </ul>
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
export default Header;
