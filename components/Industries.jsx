
import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import Image from 'next/image';
import Softwate from '../public/webdads/images/home/it-software-industries-serve.png'
import Ecommerce from '../public/webdads/images/home/ecommerce-industries-serve.png'
import Telecome from '../public/webdads/images/home/telecom-industries-serve.png'
import RealEstate from '../public/webdads/images/home/telecom-industries-serve-1.png'
import Engineer from '../public/webdads/images/home/engineering-industries-serve.png'
import Travels from '../public/webdads/images/home/travel-industries-serve.png'
import Healthcare from '../public/webdads/images/home/healthcare-industries-serve.png'
import Food from '../public/webdads/images/home/food-industries-serve.png'
import Architech from '../public/webdads/images/home/architech-interior-industries-serve.png'
import Logistics from '../public/webdads/images/home/logistic-industries-serve.png'
import Finance from '../public/webdads/images/home/finance-industries-serve.png'
import Hospitality from '../public/webdads/images/home/hospitallity-industries-serve.png'
import Media from '../public/webdads/images/home/media-cinema-industries-serve.png'
import Agency from '../public/webdads/images/home/ad-agency-industries-serve.png'
import Auto from '../public/webdads/images/home/auto-mobile-industries-serve.png'
import Sports from '../public/webdads/images/home/sports-industries-serve.png'


function Industries() {
  return (
    <>
    <section className='Industries-serv pt-5'>
        <Container>
            <Row>
            <Col md={12}>
            <h2 className='text-center'>Industries We Serve</h2>
            <p className='text-center'>Here, we make almost every genre of applications. You name it and we build it.
            </p>
</Col>
</Row>
    <Row>
            <Col md={6}>
            <Row>
          <Col md={3} xs={6}>
          <div className="industrial-service ">
            <Image
            src={Softwate}
            alt="IT / Software"
           />
           <p>IT / Software</p>

            </div>
          
          </Col>
          <Col md={3} xs={6}>
          <div className="industrial-service ">
            <Image
            src={Ecommerce}
            alt="E-commerce"
           />
           <p>E-commerce</p>

            </div></Col>
          <Col md={3} xs={6}>
          <div className="industrial-service">
            <Image
            src={Telecome}
            alt="Telecome"
           />
           <p>Telecome</p>

            </div></Col>
          <Col md={3} xs={6}>
          <div className="industrial-service ">
            <Image
            src={RealEstate}
            alt="Realestate"
           />
           <p>Realestate</p>

            </div>
          </Col>

            </Row>
         </Col>
            <Col md={6}>
            <Row>
          <Col md={3} xs={6}>
          <div className="industrial-service">
            <Image
            src={Engineer}
            alt="Engineering"/>
           <p>Engineering</p>

            </div>
          
          </Col>
          <Col md={3} xs={6}>
          <div className="industrial-service">
            <Image
            src={Travels}
            alt="Travels"
           />
           <p>Travels</p>

            </div></Col>
          <Col md={3} xs={6}>
          <div className="industrial-service ">
            <Image
            src={Healthcare}
            alt="Healthcare"
           />
           <p>Healthcare
           </p>

            </div></Col>
          <Col md={3} xs={6}>
          <div className="industrial-service ">
            <Image
            src={Food}
            alt="Food & Restaurant"
           />
           <p>Food & Restaurant
           </p>

            </div>
          </Col>

            </Row>
            </Col>
            </Row>
            <Row>
            <Col md={6}>
            <Row>
          <Col md={3} xs={6}>
          <div className="industrial-service ">
            <Image
            src={Architech}
            alt="Architech & Interior
"
           />
           <p>Architech & Interior </p>

            </div>
          
          </Col>
          <Col md={3} xs={6}>
          <div className="industrial-service ">
            <Image
            src={Logistics}
            alt="Logistics"
           />
           <p>Logistics</p>

            </div></Col>
          <Col md={3} xs={6}>
          <div className="industrial-service">
            <Image
            src={Finance}
            alt="Finance"
           />
           <p>Finance</p>

            </div></Col>
          <Col md={3} xs={6}>
          <div className="industrial-service ">
            <Image
            src={Hospitality}
            alt="Hospitality"
           />
           <p>Hospitality</p>

            </div>
          </Col>

            </Row>
         </Col>
            <Col md={6}>
            <Row>
          <Col md={3} xs={6}>
          <div className="industrial-service">
            <Image
            src={Media}
            alt="Media / Cinema"/>
           <p>Media / Cinema </p>

            </div>
          
          </Col>
          <Col md={3} xs={6}>
          <div className="industrial-service">
            <Image
            src={Agency}
            alt="Ad Agency
"
           />
           <p>Ad Agency
           </p>

            </div></Col>
          <Col md={3} xs={6}>
          <div className="industrial-service ">
            <Image
            src={Auto }
            alt="Auto Mobile"
           />
           <p>Auto Mobile

           </p>

            </div></Col>
          <Col md={3} xs={6}>
          <div className="industrial-service ">
            <Image
            src={Sports}
            alt="Sports"/>
           <p>Sports </p>

            </div>
          </Col>

            </Row>
            </Col>

            </Row>
        </Container>
    </section>
    
    
    </>
  )
}

export default Industries