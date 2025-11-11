'use client';
import React from 'react'
import { Box} from '@mui/material';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/WebsitePerformance.css'; 

const WebsitePerformance = () => {
  return (
    <>
    
    <div className="website-performance-section">
    
      {/* Floating cube left */}
      <img src="/images/web-animation-left.png" alt="left cube" className=" left-cube" />


      <Box sx={{ bgcolor: '#262250', color: 'white', pt: '120px' }}>
        <h2 className="text-center web-performance">
          Is your website <br /> <span>Underperforming?</span>
        </h2>

        <Container> 
          <Row className=" pt-5 Web-Row">
            <Col sm={6} md={4} lg={3} className="performance-box">
              <img src="/images/web-vector.png" alt="icon" />
              <h6 className='pt-3'>Not getting enough leads or traffic from your current site?</h6>
            </Col>
            <Col sm={6} md={4} lg={3} className="performance-box">
              <img src="/images/web-vector.png" alt="icon" />
              <h6 className='pt-3'>Is your website limiting your growth because it can't scale or adapt to your needs?</h6>
            </Col>
            <Col sm={6} md={4} lg={3} className="performance-box">
              <img src="/images/web-vector.png" alt="icon" />
              <h6 className='pt-3'>Your website doesn’t reflect your brand or clearly communicate what you do?</h6>
            </Col>
            <Col sm={6} md={4} lg={3} className="performance-box">
              <img src="/images/web-vector.png" alt="icon" />
              <h6 className='pt-3'>Struggling with a slow, outdated website that doesn’t work on mobile?</h6>
            </Col>
          </Row>
        </Container>
      </Box>
      {/* Floating cube right */}
      <img src="/images/web-animation-right.png" alt="right cube" className="floating-cube right-cube" />
    </div>

    {/* get a free section */}
    <Box sm={{pd:"160px"}}>
        <Container className='freesection'>
        <Row>
            <Col sm={12}  lg={6}>
                <h3>Get a Free Website Audit</h3>
                <h6 className="pb-4">We’ll help you identify weakness and start improving</h6>
                <button className='websection-button'>Analyse My Site</button>
                                            

            </Col>
            <Col sm={12} lg={6}>
                <div className="d-flex align-items-flex-start mb-2 web-check-sec">
                <img src="/images/web-check.png" alt="check" className="me-3 img-web" />
                <p className="m-0">
                    We build websites engineered for speed, clarity, and conversions.
                </p>
                </div>

<div className="d-flex align-items-flex-start web-check-sec">
  <img src="/images/web-check.png" alt="check" className="me-3 img-web" />
  <p className="m-0">
    With Webdads2u, you get a performance-first <br /> website that actually grows your business.
  </p>
</div>
            </Col>
        </Row>
        </Container>
    </Box>
    
    </>
  );
};

export default WebsitePerformance;
