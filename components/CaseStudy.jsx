'use client';
import React, { useEffect, useRef } from 'react';
import { Container, Row } from 'react-bootstrap';
import '../style/Casestudy.css';

const CaseStudy = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollSpeed = 0.5; // speed of auto scroll
    let animationFrame;

    const scroll = () => {
      if (slider) {
        slider.scrollLeft += scrollSpeed;
        // reset scroll to start for infinite effect
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    // Pause on hover or touch
    slider.addEventListener('mouseenter', () => cancelAnimationFrame(animationFrame));
    slider.addEventListener('mouseleave', () => (animationFrame = requestAnimationFrame(scroll)));
    slider.addEventListener('touchstart', () => cancelAnimationFrame(animationFrame));
    slider.addEventListener('touchend', () => (animationFrame = requestAnimationFrame(scroll)));

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <>
        <div>
              {/*  CONTINUOUS SCROLL SLIDER */}
          <div className="case-study-slider mt-4 pb-5" ref={sliderRef}>
          <div className="slider-track">
            <div className="slide-item"><a href="/digital-marketing-agency/" className='text-decoration-none'><span>•</span>Digital Marketing</a></div>
            <div className="slide-item"><a href="/crm-erp-development/" className='text-decoration-none'><span>•</span>CRM & ERP Development</a></div>
            <div className="slide-item"><a href="/branding-design/" className='text-decoration-none'><span>•</span>Branding</a></div>
            <div className="slide-item"><a href="/ecommerce-website-development/" className='text-decoration-none'><span>•</span>E-Commerce Development</a></div>  
            <div className="slide-item"><a href="/mobile-app-development/" className='text-decoration-none'><span>•</span>Mobile App Development</a></div>

            {/* Duplicate content for seamless infinite scroll */}
            <div className="slide-item"><a href="/digital-marketing-agency/" className='text-decoration-none'><span>•</span>Digital Marketing</a></div>
            <div className="slide-item"><a href="/crm-erp-development/" className='text-decoration-none'><span>•</span>CRM & ERP Development</a></div>
            <div className="slide-item"><a href="/branding-design/" className='text-decoration-none'><span>•</span>Branding</a></div>
            <div className="slide-item"><a href="/ecommerce-website-development/" className='text-decoration-none'><span>•</span>E-Commerce Development</a></div>
            <div className="slide-item"><a href="/mobile-app-development/" className='text-decoration-none'><span>•</span>Mobile App Development</a></div>
          </div>
          </div>
        </div>
            <Container className='Case-study-sec'>
      <Row className='case-study'>
        {/* LEFT SECTION */}
        <section className="col-md-6 case-f-sec">
          <div className="second-section">
            <span>Case Study</span>
            <h3 className='desktop-h3'>
              {/* Some of Our Successful
              Projects Delight Customers
              Across the Globe */}

              Some of Our Successful
               Projects That Delivered 
               Strong Business Results 
              Globally 
            </h3>
            <h3 className='mobile-h3'>
              Some of Our Successful Projects That Delivered Strong Business Results Globally 
            </h3>
          </div>
        </section>

        {/* RIGHT SECTION */}
        <section className="col-md-6">
          <div className="landing-page-casestudy-content case-study-right">
            <h5>
              {/* We craft exceptional websites and portfolios<br />
              with passion, simplicity, and creativity,<br />
              offering innovative, client-focused solutions<br />
              as a leading web design and development<br />
              company in Chennai. */}
              We build high-performing digital solutions that turn ideas into revenue-driven 
              outcomes. With a focus on innovation, simplicity, and client success, We've 
              helped brands across industries scale faster as a leading web design and 
              development company in chennai. 
            </h5>
          </div>
        </section>
      </Row>



      {/* mobile */}
      <Row className='mobileCase-study'>
        {/* LEFT SECTION */}
        <section className="col-md-6">
          <div className="second-section">
            <span>Case Study</span>
            <h3>
              Some of Our <br/>Successful
              Projects<br/> Delight Customers<br/>
              Across the Globe
            </h3>
          </div>
        </section>

        {/* RIGHT SECTION */}
        <section className="col-md-6">
          <div className="landing-page-casestudy-content case-study-right">
            <h5>
              {/* We craft exceptional websites and<br/> portfolios
              with passion, simplicity,<br/> and creativity,
              offering innovative,<br/> client-focused solutions
              as a <br/> leading web design and<br/> development
              company in Chennai. */}
              We build high-performing digital solutions that turn ideas into revenue-driven 
              outcomes. With a focus on innovation, simplicity, and client success, We've 
              helped brands across industries scale faster as a leading web design and 
              development company in chennai. 
            </h5>
          </div>
        </section>
      </Row>
      
    </Container>
    
    </>
  

  );
};

export default CaseStudy;
