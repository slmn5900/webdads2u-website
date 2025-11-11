'use client';
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import '../style/WebDesigningSection.css'
// import PhpWebsite from '../public/images/php-website.png'
const WebDesigningSection = () => {

    const sections = [
  { title: <><h3>WordPress Website</h3><br/><p className='slide-para'>Webdads2u Pvt. Ltd., a top web design and <br/> development company in Chennai,<br/> specializes in custom PHP websites, delivering<br/> high-performance, reliable, and client-<br/>focused solutions.</p></>, image: "/images/Mock-design.png" },
  { title: <><h3>PHP Website Development</h3><br/><p className='slide-para'>Webdads2u Pvt. Ltd., a top web design and <br/> development company in Chennai,<br/> specializes in custom PHP websites, delivering<br/> high-performance, reliable, and client-<br/>focused solutions.</p></>, image: "/images/ecr-holidays.png" },
  { title: <><h3>React js Website Development</h3><br/><p className='slide-para'>Webdads2u Pvt. Ltd., a top web design and <br/> development company in Chennai,<br/> specializes in custom PHP websites, delivering<br/> high-performance, reliable, and client-<br/>focused solutions.</p></>, image: "/images/Best-India-Kart.png" },
  
//   { title: "UI/UX Design", image: "/images/php-website.png" },
//   { title: "Mobile App Integration", image: "/images/php-website.png" },
//   { title: "API Development", image: "/images/php-website.png" },
  ];

  return (
    <div className='scroll-web'>
         {/* <Container className="web-main-sec">
            <Row className='lg-6 sm-12 webdesigning-section'>
                <Col>
                    <section>
                    <h4>Web Designing and</h4> <h4>Web Development</h4> <h4>Company in Chennai</h4>
                </section>
                </Col>
                <Col>
                    <section>
                    <h6>Webdads2u Pvt. Ltd. is a leading web design<br></br> and development company in Chennai, India.<br></br> We offer custom solutions that create a lasting <br></br>impression, ensuring your website is secure,<br></br> user-friendly, and visually appealing—helping <br></br>your business reach new heights.</h6>
                    </section>
                </Col>
                
            </Row>
        </Container>  */}
            <div className='our-full-site'>
                <h2>Our full-suite web <br/>development services</h2>
                <p>Future-ready websites crafted to perform, protect, and grow with your business.</p>
            </div>

             <div className="scroll-stack-container">
                {sections.map((section, i) => (
                    <Container key={i} className="stack-section">
                    <Row>
                        <Col lg={6} className="d-flex align-items-center">
                        <section>
                            <h3>{section.title}</h3>
                            <h6>{section.desc}</h6>
                        </section>
                        </Col>
                        <Col lg={6}>
                        <img src={section.image} alt={section.title} />
                        </Col>
                    </Row>
                    </Container>
                ))}
            </div>

        {/* <Container className='WebDesigning-Images php-web-dev-section'>
            <Row >
                <Col lg={6} className='d-flex align-items-center'>
                    <section className='WebDesigning-Images-section1'>
                        <h3>PHP Website<br></br> Development</h3>
                        <h6>Webdads2u Pvt. Ltd., a top web design and <br></br> development company in Chennai,<br></br> specializes in custom PHP websites, delivering<br></br> high-performance, reliable, and client-<br></br>focused solutions.</h6>
                    </section>
                </Col>
                <Col lg={6}>
                    <img src="/images/php-website.png" alt="PHP Website" />
                </Col>
            </Row>
        </Container> */}


          {/* <div className="scroll-snap-container">
  {Array.from({ length: 6 }).map((_, i) => (
    <Container key={i} className='WebDesigning-Images php-web-dev-section scroll-snap-section'>
      <Row>
        <Col lg={6} className='d-flex align-items-center'>
          <section className='WebDesigning-Images-section1'>
            <h3>PHP Website<br />Development</h3>
            <h6>
              Webdads2u Pvt. Ltd., a top web design and development company in Chennai, specializes in custom PHP websites, delivering high-performance, reliable, and client-focused solutions.
            </h6>
          </section>
        </Col>
        <Col lg={6}>
          <img src="/images/php-website.png" alt="PHP Website" />
        </Col>
      </Row>
    </Container>
  ))}
</div> */}





       


        <div className='mobilephp-web-dev pt-5'>

            <Container className='WebDesigning-Images '>
            <Row className='mobileWebImages  mobileSpace'>

                <Col sm={12}>
                    <img src="/images/php-website.png" alt="PHP Website" className='pb-4'/>
                </Col>
                <Col sm={12} className='d-flex align-items-center'>
                    <section className='WebDesigning-Images-section1'>
                        <h3>PHP Website<br></br> Development</h3>
                        <h6>Webdads2u Pvt. Ltd., a top web <br/>design and development<br/> company in Chennai, specializes <br/>in custom PHP websites,<br/> delivering high-performance,<br/> reliable, and client-focused<br/> solutions.</h6>
                        <a href='#'>Explore more</a>
                    </section>
                </Col>
                
            </Row>
             <Row className='php-mobile-web-dev mobileSpace'>

                <Col sm={12}>
                    <img src="/images/php-website.png" alt="PHP Website" className='pb-4'/>
                </Col>
                <Col sm={12} className='d-flex align-items-center'>
                    <section className='WebDesigning-Images-section1'>
                        <h3>PHP Website<br></br> Development</h3>
                        <h6>Webdads2u Pvt. Ltd., a top web <br/>design and development<br/> company in Chennai, specializes <br/>in custom PHP websites,<br/> delivering high-performance,<br/> reliable, and client-focused<br/> solutions.</h6>
                        <a href='#'>Explore more</a>
                    </section>
                </Col>
                
            </Row>
             <Row className='php-mobile-web-dev mobileSpace'>

                <Col sm={12}>
                    <img src="/images/php-website.png" alt="PHP Website" className='pb-4'/>
                </Col>
                <Col sm={12} className='d-flex align-items-center'>
                    <section className='WebDesigning-Images-section1'>
                        <h3>PHP Website<br></br> Development</h3>
                        <h6>Webdads2u Pvt. Ltd., a top web <br/>design and development<br/> company in Chennai, specializes <br/>in custom PHP websites,<br/> delivering high-performance,<br/> reliable, and client-focused<br/> solutions.</h6>
                        <a href='#'>Explore more</a>
                    </section>
                </Col>
                
            </Row>
             <Row className='php-mobile-web-dev mobileSpace'>

                <Col sm={12}>
                    <img src="/images/php-website.png" alt="PHP Website" className='pb-4'/>
                </Col>
                <Col sm={12} className='d-flex align-items-center'>
                    <section className='WebDesigning-Images-section1'>
                        <h3>PHP Website<br></br> Development</h3>
                        <h6>Webdads2u Pvt. Ltd., a top web <br/>design and development<br/> company in Chennai, specializes <br/>in custom PHP websites,<br/> delivering high-performance,<br/> reliable, and client-focused<br/> solutions.</h6>
                        <a href='#'>Explore more</a>
                    </section>
                </Col>
                
            </Row>
             <Row className='php-mobile-web-dev mobileSpace'>

                <Col sm={12}>
                    <img src="/images/php-website.png" alt="PHP Website" className='pb-4'/>
                </Col>
                <Col sm={12} className='d-flex align-items-center'>
                    <section className='WebDesigning-Images-section1'>
                        <h3>PHP Website<br></br> Development</h3>
                        <h6>Webdads2u Pvt. Ltd., a top web <br/>design and development<br/> company in Chennai, specializes <br/>in custom PHP websites,<br/> delivering high-performance,<br/> reliable, and client-focused<br/> solutions.</h6>
                        <a href='#'>Explore more</a>
                    </section>
                </Col>
                
            </Row>
             <Row className='php-mobile-web-dev mobileSpace'>

                <Col sm={12}>
                    <img src="/images/php-website.png" alt="PHP Website" className='pb-4'/>
                </Col>
                <Col sm={12} className='d-flex align-items-center'>
                    <section className='WebDesigning-Images-section1'>
                        <h3>PHP Website<br></br> Development</h3>
                        <h6>Webdads2u Pvt. Ltd., a top web <br/>design and development<br/> company in Chennai, specializes <br/>in custom PHP websites,<br/> delivering high-performance,<br/> reliable, and client-focused<br/> solutions.</h6>
                        <a href='#'>Explore more</a>
                    </section>
                </Col>
                
            </Row>

            {/* <div className='solution-section'>
            <h5>10+ years and 150+ clients</h5>
            <h3>We are the Solution<br/> for Web Designing<br/> and Web<br/> Development</h3>
            <h6>Best Web Design and Web <br/> Development Company in Chennai,<br/> India to help you increase your<br/> business growth.</h6>


            <a href='#'>Explore moreAbout</a>
           </div> */}

           </Container>

        </div>
    </div>
  )
}

export default WebDesigningSection