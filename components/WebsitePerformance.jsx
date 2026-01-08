'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/WebsitePerformance.css';
// import Image from 'next/image';

const webAnimationLeft =
  "https://assets.webdads2u.com/images/square.webp";

const webAnimationRight =
  "https://assets.webdads2u.com/images/square.webp";

const webIcon =
  "https://assets.webdads2u.com/images/web-vector.webp";

const webCheck =
  "https://assets.webdads2u.com/images/web-check.webp";



const WebsitePerformance = () => {
  return (
    <>
      <div className="website-performance-section">
        {/* Floating cube left */}
        <img src={webAnimationLeft} alt="left cube" className="left-cube" />

        <Box sx={{ bgcolor: '#262250', color: 'white', pt: { xs: 10, md: 16 } }}>
          <h2 className="text-center web-performance">
            Is your website <br /> <span>Underperforming?</span>
          </h2>

          <Container>
            <Row className="pt-5 Web-Row">
              {[
                "Frustated that your website is not bringing real business or good quality leads?",
                "Struggling because your site feels outdated and difficult to maintain ?",
                "worried that your website's look and feel doesn't match your brand quality?",
                "Tired of losing potential clients due to slow speed and poor mobile experience ? "
              ].map((text, i) => (
                <Col sm={6} md={4} lg={3} key={i} className="performance-box">
                  <img src={webIcon} alt="icon" />
                  <Typography variant="h6" sx={{ pt: 3 }}>{text}</Typography>
                </Col>
              ))}
            </Row>
          </Container>
        </Box>

        {/* Floating cube right */}
        <img src={webAnimationRight} alt="right cube" className="floating-cube right-cube" />
      </div>

      {/* Get a Free section */}
      <Box sx={{ py: { xs: 5, md: 16 } }  }>
        <Container className="freesection">
          <Row>
            <Col sm={12} lg={6} p={3} className='desktop-free-audit'>
              <h3>Get a Free Website Audit</h3>
              <h6 className="pb-4">We’ll help you identify weaknesses and start improving</h6>
              <button className="websection-button">Analyse My Site</button>
            </Col>

            <Col sm={12} lg={6}>
              <div className="d-flex align-items-start mb-2 web-check-sec">
                <img src={webCheck} alt="check" className="me-3 img-web" />
                <p className="m-0">
                  We build websites engineered for speed, clarity, and conversions.
                </p>
              </div>

              <div className="d-flex align-items-start web-check-sec">
                <img src={webCheck} alt="check" className="me-3 img-web" />
                <p className="m-0">
                  With Webdads2u, you get a performance-first <br /> website that actually grows your business.
                </p>
              </div>
            </Col>

            <Col sm={12} lg={6} className='mobile-free-audit pt-5'>
              <h3 className='text-center'>Get a Free<br/>Website Audit</h3>
              <h6 className="py-2 text-center">We’ll help you identify weaknesses and start improving</h6>
              <button className="websection-button mobile-websection-button">Analyse My Site</button>
            </Col>
          </Row>
        </Container>
      </Box>
    </>
  );
};

export default WebsitePerformance;
