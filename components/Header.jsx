// "use client";

// import React from 'react';
// import { Container, Navbar, Nav, Button } from 'react-bootstrap';
// import Image from 'next/image';
// import logoSrc from '../public/webdads/images/home/webdads2u-logo.svg';

// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";

// import Offcanvas from 'react-bootstrap/Offcanvas';

// function Header() {
//   return (
//     <>

//     <Navbar key={'lg'} expand={'lg'} className=" mb-3 home-header" >
//           <Container className='heade-contain'>
//             <Navbar.Brand href="#">
//             <Image
//             src={logoSrc}
//             alt="Logo"

//           />
//             </Navbar.Brand>
//             <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'lg'}`} />
//             <Navbar.Offcanvas
//               id={`offcanvasNavbar-expand-${'lg'}`}
//               aria-labelledby={`offcanvasNavbarLabel-expand-${'lg'}`}
//               placement="end"
//             >
//               <Offcanvas.Header closeButton>
//                 <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'lg'}`}>
//                 <Image
//             src={logoSrc}
//             alt="Logo"

//           />
//                 </Offcanvas.Title>
//               </Offcanvas.Header>
//               <Offcanvas.Body>
//                 <Nav className="justify-content-end flex-grow-1 pe-3">
//                   <Nav.Link href="#action1">About</Nav.Link>
//                   <Nav.Link href="#action2">Service</Nav.Link>
//                    <Nav.Link href="#action2">Work</Nav.Link>
//                  <Nav.Link href="#action2">Contact us</Nav.Link>
//                 </Nav>

//               </Offcanvas.Body>

//             </Navbar.Offcanvas>
//             <div className='home-header-social-icons'>
//           <ul className='d-flex'>
//             <li><FaFacebookF /> </li>
//             <li><FaXTwitter /> </li>
//             <li><FaInstagram /></li>
//             <li><FaLinkedinIn /></li>
//           </ul>
//         </div>
//         <Button variant="primary" className="mb-rsbtn">Get a Quotes</Button>
//         <div className='home-header-phone-ic'>
//           <div className='Home-header-phn-ic'>
//           <FaPhone />  </div>
//           <div className="home-header-phone-det">
//             <h3>Feel free to contact us</h3>
//             <h6><a href="tel:+91-8825607550">+91-8825607550</a></h6>
//           </div>
//         </div>
//           </Container>
//         </Navbar>

//     </>
//   );
// }

// export default Header;
// ===============================================================================================================================
// ===============================================================================================================================
// ===============================================================================================================================
// ===============================================================================================================================
// ===============================================================================================================================
// ===============================================================================================================================
// ===============================================================================================================================

// 'use client';
// import { useState } from 'react';
// import React from 'react'
// import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import { FaXTwitter } from "react-icons/fa6";
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone } from "react-icons/fa";
// import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
// import { RiMenu3Fill } from "react-icons/ri";

// import "../style/testingheader.scss"
// const Header = () => {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     return (
//       <>
//       <div className="d-lg-none mobl-hed">
//        <div className="site-logo ">
//         <img src="/webdads/images/home/webdads2u-logo.svg" alt="why choose us" ></img>
//         </div>
//         <Button style={{display:"block"}} variant="primary" className="d-lg-none" onClick={handleShow}>
//         <RiMenu3Fill />

//         </Button>
//         </div>

//         <Offcanvas show={show} onHide={handleClose} responsive="lg">
//           <Offcanvas.Header closeButton>
//             <img src="/webdads/images/home/webdads2u-logo.svg" alt="why choose us w-50" ></img>
//           </Offcanvas.Header>
//           <Offcanvas.Body>
//             <nav className="head-fx">
//     <div className="container megamnu" >
//       <div className="row">
//         <div className="col-md-3 logo-cl">
//         <div className="site-logo">
//         <img src="/webdads/images/home/webdads2u-logo.svg" alt="why choose us" ></img>
//         </div>
//         </div>
//       <div className="col-md-4 navbr-cl">
//       <div className="mobile_btn">
//           <i className="fas fa-bars"></i>
//         </div>

//         <div className="main_menu">
//           <ul>
//             <li><a href="/about" className="active">About</a></li>

//             <li className="mega_menu_dropdown has_dropdown">
//               <a href="#">Service <i className="fas fa-angle-down"></i></a>
//               <div className="mega_menu sub_menu">
//                 <div className="mega_menu_item">
//                 <div className="d-flex align-items-center">
//                   <a href="/website-development"><img alt="" src="/webdads/images/home/megamenu/responsive-web-design.png" className="w-75"></img></a><a href="/website-development"><h3> Website Development</h3></a>
//                   </div>

//                   <a href="/web-portal-development"><MdOutlineKeyboardDoubleArrowRight />Web Portal Development</a>
//                   <a href="/wordpress-development"><MdOutlineKeyboardDoubleArrowRight />Wordpress Web Development</a>
//                   <a href="/wordpress-development"><MdOutlineKeyboardDoubleArrowRight />ReactJs Web Development</a>
//                   <a href="/php-web-development/"><MdOutlineKeyboardDoubleArrowRight />Php Web Development</a>
//                   <a href="/custom-web-development"><MdOutlineKeyboardDoubleArrowRight />Custom Web Development</a>
//                 </div>
//                 <div className="mega_menu_item">
//                 <div className="d-flex align-items-center">
//                 <a href="/web-design"><img alt="" src="/webdads/images/home/megamenu/custom-web-design.png" className="w-75"></img></a><a href="/web-design/"><h3> Web Design</h3></a>
//                   </div>

//                   <a href="/html5"><MdOutlineKeyboardDoubleArrowRight />HTML5 Website design</a>
//                   <a href="/domain-registration"><MdOutlineKeyboardDoubleArrowRight />Domain Registration</a>
//                   <a href="/web-hosting-service"><MdOutlineKeyboardDoubleArrowRight />Hosting</a>
//                   <a href="/custom-web-design"><MdOutlineKeyboardDoubleArrowRight />Custom Web Design</a>
//                   <a href="/responsive-website"><MdOutlineKeyboardDoubleArrowRight />Responsive Website</a>
//                   <a href="/ui-ux#"><MdOutlineKeyboardDoubleArrowRight />UI&UX Design</a>
//                   <a href="/website-redesign"><MdOutlineKeyboardDoubleArrowRight />Website Redesign</a>
//                   <a href="website-maintenance"><MdOutlineKeyboardDoubleArrowRight />Website Maintenance</a>
//                 </div>
//                 <div className="mega_menu_item">
//                   <div className="d-flex align-items-center">
//                   <a href="/seo-company-in-chennai"><img alt="" src="/webdads/images/home/megamenu/seo-services-megamenu-icon.webp" className="w-75"></img></a><a href="/seo-company-in-chennai"><h3> SEO Services</h3></a>
//                   </div>

//                   <a href="/digital-marketing-agency"><MdOutlineKeyboardDoubleArrowRight />Digital Marketing</a>
//                   <a href="/ppc-service"><MdOutlineKeyboardDoubleArrowRight />PPC Service</a>
//                   <a href="/e-commerce-seo-service"><MdOutlineKeyboardDoubleArrowRight />E-commerce SEO Service</a>
//                   <a href="/local-seo-service"><MdOutlineKeyboardDoubleArrowRight />Local SEO Service</a>
//                   <a href="/off-page-seo"><MdOutlineKeyboardDoubleArrowRight />Off Page SEO</a>
//                   <a href="/link-building-service"><MdOutlineKeyboardDoubleArrowRight />Link Building Service</a>
//                   <a href="/content-writing-service"><MdOutlineKeyboardDoubleArrowRight />Content Writing Service</a>
//                 </div>
//                 <div className="mega_menu_item">
//                 <div className="d-flex align-items-center">
//                   <a href="/branding-design/"><img alt="" src="/webdads/images/home/megamenu/branding-design-megamenu-icon.png" className="w-75"></img></a><a href="/branding-design/"><h3>Branding Design</h3></a>
//                   </div>

//                   <a href="/logo-design"><MdOutlineKeyboardDoubleArrowRight />Logo Design</a>
//                   <a href="/brochure-design"><MdOutlineKeyboardDoubleArrowRight />Brochure Design</a>
//                   <a href="/social-media-design"><MdOutlineKeyboardDoubleArrowRight />Social Media Design</a>
//                   <a href="/flyer-design"><MdOutlineKeyboardDoubleArrowRight />Flyer Design</a>
//                   <a href="#"><MdOutlineKeyboardDoubleArrowRight />Corporate Gifts Design</a>
//                   <a href="/business-card-design"><MdOutlineKeyboardDoubleArrowRight />Business Card Design</a>
//                   <a href="/letterhead-design"><MdOutlineKeyboardDoubleArrowRight />Letterhead Design</a>
//                 </div>
//                 <div className="mega_menu_item">
//                 <div className="d-flex align-items-center">
//                   <a href="/mobile-app-development"><img alt="" src="/webdads/images/home/megamenu/mobile-app-development-megamenu-icon.png" className="w-75"></img></a><a href="/mobile-app-development"><h3>Mobile App Development</h3></a>
//                   </div>
//                   <a href="/ios-app-development"><MdOutlineKeyboardDoubleArrowRight />IOS App Development</a>
//                   <a href="/android-app-development"><MdOutlineKeyboardDoubleArrowRight />Android App Development</a>
//                   <a href="/flutter-app-development/"><MdOutlineKeyboardDoubleArrowRight />Flutter App Development</a>
//                   <a href="/react-native-app-development"><MdOutlineKeyboardDoubleArrowRight />React Native App Development </a>
//                   <a href="/mobile-app-ui-ux-design"><MdOutlineKeyboardDoubleArrowRight />Mobile App UI/ UX Design</a>
//                 </div>
//                 <div className="mega_menu_item">
//                 <div className="d-flex align-items-center">
//                   <a href="/crm-erp-development"><img alt="" src="/webdads/images/home/megamenu/ecommerce-development-megamenu-icon.webp" className="w-75"></img></a> <a href="/crm-erp-development"><h3>CRM & ERP Development</h3></a>
//                   </div>
//                   <a href="/customized-crm"><MdOutlineKeyboardDoubleArrowRight />Customized CRM</a>
//                   <a href="/customized-erp"><MdOutlineKeyboardDoubleArrowRight />Customized ERP</a>

//                 </div>
//                 <div className="mega_menu_item">
//                 <div className="d-flex align-items-center">
//                   <a href="/ecommerce-website-development"><img alt='' src="/webdads/images/home/megamenu/crm-erp-development-megamenu-icon.webp" className="w-75"></img></a><a href="/ecommerce-website-development"><h3>E-commerce Development</h3></a>
//                   </div>
//                   <a href="/woo-commerce"><MdOutlineKeyboardDoubleArrowRight />Woocommerce</a>
//                   <a href="/opencart-development"><MdOutlineKeyboardDoubleArrowRight />Opencart</a>
//                   <a href="/shopify-development"><MdOutlineKeyboardDoubleArrowRight />Shopify</a>

//                 </div>

//               </div>
//             </li>
//             <li className="has_dropdown"><a href="#">Work <i className="fas fa-angle-down"></i></a>
//               <ul className="sub_menu">
//                 <li><a href="/WordPress">WordPress</a></li>

//                 <li><a href="/e-commerce">E-Commerce</a></li>
//                 <li><a href="/php-development-company">Php</a></li>
//                 <li><a href="/react">React</a></li>
//                 <li><a href="/logo-design-agency">Logo</a></li>
//                 <li><a href="/brochure">Brochure</a></li>
//                 <li><a href="/business-card">Business Card</a></li>
//                 <li><a href="/social-media-service">Social media</a></li>
//                 <li><a href="//letter-head/">Letter Head</a></li>
//                 <li><a href="/flyer-design-work/">flyer design</a></li>
//               </ul>
//             </li>

//             <li><a href="/contact-us">Contact</a></li>

//           </ul>
//         </div>
//       </div>
//       <div className="col-md-5 contdl-home">
//       <div className='home-header-social-icons'>
//           <ul className='d-flex'>
//             <a href="https://www.facebook.com/Webdads2u"><li><FaFacebookF /> </li></a>
//             <a href="https://x.com/webdads2u"><li><FaXTwitter /> </li></a>
//             <a href="https://www.instagram.com/webdads2u/"><li><FaInstagram /></li></a>
//             <a href="https://www.linkedin.com/company/webdads2u-private-limited/"><li><FaLinkedinIn /></li></a>
//           </ul>
//         </div>
//         <Button variant="primary" className="mb-rsbtn">Get a Quotes</Button>
//         <div className='home-header-phone-ic'>
//           <div className='Home-header-phn-ic'>
//           <FaPhone />  </div>
//           <div className="home-header-phone-det">
//             <h3>Feel free to contact us</h3>
//             <h6><a href="tel:+91-8825607550">+91-8825607550</a></h6>
//           </div>
//         </div>
//       </div>

//       </div>
//     </div>

//       </nav>

//           </Offcanvas.Body>
//         </Offcanvas>
//       </>
//     );
//   }
// export default Header
// =====================================================================================================================================================================
// =====================================================================================================================================================================
// =====================================================================================================================================================================
// =====================================================================================================================================================================
// =====================================================================================================================================================================
// =====================================================================================================================================================================
// =====================================================================================================================================================================
// =====================================================================================================================================================================
// =====================================================================================================================================================================
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
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import '../style/testingheader.scss';
const Header = () => {
    const router = useRouter();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="d-lg-none mobl-hed">
                <Link href="/" style={{ textDecoration: 'none' }}>
                    <div className="site-logo ">
                        <img style={{ with: 'inherit' }} onClick={() => router.push('/')} src="/webdads/images/home/webdads2u-logo.svg" alt="why choose us" />
                    </div>
                </Link>
                <Button style={{ display: 'block' }} variant="primary" className="d-lg-none" onClick={handleShow}>
                    <RiMenu3Fill />
                </Button>
            </div>

            <Offcanvas show={show} onHide={handleClose} responsive="lg">
                <Offcanvas.Header closeButton>
                    <Link href="/" style={{ textDecoration: 'none' }}>
                        <img src="/webdads/images/home/webdads2u-logo.svg" alt="why choose us w-50"></img>
                    </Link>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <nav className="head-fx">
                        <div className="container megamnu">
                            <div className="row">
                                <div className="col-md-3 logo-cl">
                                    <div className="site-logo">
                                        {/* <div className=""> */}
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
                                            {/* <li >
                                                <a href="/about" className="active">
                                                    About
                                                </a>
                                            </li> */}
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
                                                        <a href="/wordpress-development">
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
                                                        <a href="#">
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
                                                        <a href="/WordPress">WordPress</a>
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
                                                        <a href="//letter-head/">Letter Head</a>
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
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};
export default Header;
