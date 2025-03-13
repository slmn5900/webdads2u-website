
import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
// import "../app/hero-section/footer.scss";
import { RiMedalLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import Image from 'next/image';
import Robart from '../public/webdads/images/home/robart.webp';
import Formsection from './Formsection';
import Industries from './Industries';

function Herosection() {
  return (
    <>
    <section className="pt-5 ">
    <Container>
     <Row>
      <Col md={7}>
      <div className="Hero-content">
      <h1>Better Digitalization Solution to Transform your Business</h1>
       <p>Our expertise in bringing ideas to reality help your market place </p>

      </div>
      <Row >
        <Col md={4} xs={4}>
        <div className="service-icon">
        <RiMedalLine />
       <h4>Web Development</h4>

        </div>
        </Col>
        <Col md={4} xs={4}>
        <div className="service-icon">
        <IoSettingsOutline />
        <h4>Digital Marketing</h4>

        </div>
        </Col>
        <Col md={4} xs={4}>
        <div className="service-icon crm-icn">
        <IoShieldCheckmarkOutline />
<h4>CRM & ERP Development</h4>

        </div>
        </Col>
      </Row>
      </Col>
      <Col md={5}>
      <div className='robort'>
      <Image
            src={Robart}
            alt="Logo"
           className='img-fluid'
          />
      </div>
      </Col>

       
     </Row>


    </Container>


    </section>
     {/* <Formsection/>
     <Industries/> */}
    </>
  )
}

export default Herosection;
