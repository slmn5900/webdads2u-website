<<<<<<< HEAD
import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaChartBar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdContentPasteSearch } from "react-icons/md";


function Lookingbest() {
  return (
   <>
   <section className='seo-looking'>
    <Container>
     <Row>
     <Col md={6}>
     <div className=''>
        <h5>Looking for the Best SEO results? </h5>
        <h2>Get more Leads With SEO Optimization.</h2>
        <p>Transform your SEO game and seize more leads! Our proven strategies can help you harness the power of optimization. Unleash potential, ignite exponential growth!</p>
        
     
     </div>
     <div className="d-flex seo-performance">
      <div>
      <p><FaChartBar /> </p>
     </div>
     <div>
      <h3>Performance</h3>
      <h6>Slow pages, too-large CSS or HTML</h6>
     </div>
     </div>
     <div className="d-flex seo-performance">
      <div>
      <p><FaLocationDot /> </p>
     </div>
     <div>
      <h3>Localization</h3>
      <h6>All issues with hrefiang, language</h6>
     </div>
     </div>
     <div className="d-flex seo-performance">
      <div>
      <p><MdContentPasteSearch /></p>
     </div>
     <div>
      <h3>Content Quality </h3>
      <h6>Unconsolidated duplicate page</h6>
     </div>
     </div>
     </Col>
     <Col md={6}>
     <div className=''>
        <img alt="" src="/webdads/images/seo-development/graph-seo.webp"></img>
     </div>
     </Col>
     </Row>

    </Container>
   </section>
   
   <section className="seo-process">
<Container>
<Row>
<Col md={12}>
<div className="our-pross">
<h2>Our Process</h2>
<img alt="" src="/webdads/images/seo-development/process.png"></img>

</div>
</Col>

</Row>

</Container>

   </section>

   <section className="our-hand">
    <Container>
      <Row className="align-items-start">
         <Col md={6}>
         <div>
            <h2>Our Handpicked<br></br>SEO Projects</h2>
            </div></Col>
         <Col md={6}>
         <div className="">
            <p>Hundreds of reviews from our customers confirm that. Our support team is both friendly and professional, and they usually attempt to help you. .!</p>
            <Button variant="primary">Contact us</Button>
            
            </div></Col>
      </Row>
      <Row className="three-img">
      <Col md={2}>
      <div className="website-imgs">
         <img alt="" src="/webdads/images/seo-development/rajvision-website.webp"></img>
      </div>
      </Col>
      <Col md={8}>
      <div className="website-imgs">
         <img alt="" src="/webdads/images/seo-development/atgomart-website.webp"></img>
      </div></Col>
      <Col md={2}>
      <div className="website-imgs">
         <img alt="" src="/webdads/images/seo-development/adsfit-website.webp"></img>
      </div></Col>


      </Row>
    </Container>
   </section>

   <section className="digitalmarketing-tool">
      <Container>
         <Row>
            <h2>SEO the Sheer Digital Marketing Tool </h2>
         <Col md={3}>
         <div className='helps-seo'>
            <img alt="" src="/webdads/images/seo-development/Helps.png"></img>
            <h4>Helps to Understand Search Behaviour</h4>
         </div>
         
         </Col>
         <Col md={3}>
         <div className='helps-seo'>
            <img alt="" src="/webdads/images/seo-development/get-to-know.png"></img>
            <h4>Get to Know Customer Needs</h4>
         </div>
         </Col>
         <Col md={3}>
         <div className='helps-seo'>
            <img alt="" src="/webdads/images/seo-development/Appropiate.png"></img>
            <h4>Appropiate Content</h4>
         </div>
         </Col>
         <Col md={3}>
         <div className='helps-seo'>
            <img alt="" src="/webdads/images/seo-development/Analyze.png"></img>
            <h4>Analyze, Implement and Repeat strategy</h4>
         </div>
         </Col>

 </Row>
      </Container>
   </section>
   </>
  )
}

export default Lookingbest
=======
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaChartBar } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdContentPasteSearch } from 'react-icons/md';

function Lookingbest() {
    return (
        <>
            <section className="seo-looking">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="">
                                <h5>Looking for the Best SEO results? </h5>
                                <h2>Get more Leads With SEO Optimization.</h2>
                                <p>Transform your SEO game and seize more leads! Our proven strategies can help you harness the power of optimization. Unleash potential, ignite exponential growth!</p>
                            </div>
                            <div className="d-flex seo-performance">
                                <div>
                                    <p>
                                        <FaChartBar />{' '}
                                    </p>
                                </div>
                                <div>
                                    <h3>Performance</h3>
                                    <h6>Slow pages, too-large CSS or HTML</h6>
                                </div>
                            </div>
                            <div className="d-flex seo-performance">
                                <div>
                                    <p>
                                        <FaLocationDot />{' '}
                                    </p>
                                </div>
                                <div>
                                    <h3>Localization</h3>
                                    <h6>All issues with hrefiang, language</h6>
                                </div>
                            </div>
                            <div className="d-flex seo-performance">
                                <div>
                                    <p>
                                        <MdContentPasteSearch />
                                    </p>
                                </div>
                                <div>
                                    <h3>Content Quality </h3>
                                    <h6>Unconsolidated duplicate page</h6>
                                </div>
                                {/* <a href="/contact-us">
                                    <button>Conatct us</button>
                                </a> */}
                            </div>
                            <div>
                                <a href="contact-us" style={{ textDecoration: 'none' }}>
                                    <button className="seo-company-contact-btn">Contact us</button>
                                </a>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="">
                                <img alt="" src="/webdads/images/seo-development/graph-seo.webp"></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="seo-process">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="our-pross">
                                <h2>Our Process</h2>
                                <img alt="" src="/webdads/images/seo-development/process.png"></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="our-hand">
                <Container>
                    <Row className="align-items-start">
                        <Col md={6}>
                            <div>
                                <h2>
                                    Our Handpicked<br></br>SEO Projects
                                </h2>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="">
                                <p>Hundreds of reviews from our customers confirm that. Our support team is both friendly and professional, and they usually attempt to help you. .!</p>
                                <Button href="/contact-us" variant="primary">
                                    Contact us
                                </Button>
                            </div>
                        </Col>
                    </Row>
                    <Row className="three-img">
                        <Col md={2}>
                            <div className="website-imgs">
                                <img alt="" src="/webdads/images/seo-development/rajvision-website.webp"></img>
                            </div>
                        </Col>
                        <Col md={8}>
                            <div className="website-imgs">
                                <img alt="" src="/webdads/images/seo-development/atgomart-website.webp"></img>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className="website-imgs">
                                <img alt="" src="/webdads/images/seo-development/adsfit-website.webp"></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="digitalmarketing-tool">
                <Container>
                    <Row>
                        <h2>SEO the Sheer Digital Marketing Tool </h2>
                        <Col md={3}>
                            <div className="helps-seo">
                                <img alt="" src="/webdads/images/seo-development/Helps.png"></img>
                                <h4>Helps to Understand Search Behaviour</h4>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="helps-seo">
                                <img alt="" src="/webdads/images/seo-development/get-to-know.png"></img>
                                <h4>Get to Know Customer Needs</h4>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="helps-seo">
                                <img alt="" src="/webdads/images/seo-development/Appropiate.png"></img>
                                <h4>Appropiate Content</h4>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="helps-seo">
                                <img alt="" src="/webdads/images/seo-development/Analyze.png"></img>
                                <h4>Analyze, Implement and Repeat strategy</h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Lookingbest;
>>>>>>> 6010d3c (Add new features and updates)
