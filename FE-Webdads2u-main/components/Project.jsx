
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../style/home//project.css"; // Make sure this path is correct
import Image from "next/image";
import image1 from "../public/webdads/images/home/projectimage/mockup_21318e73bc.avif";
import Link from "next/link";
// import Digital from "../Digital/page";

export default function Project() {
  return (
    <>
      <section >

        <div   style={{
          background: "linear-gradient(90deg, #871752 1%, #262250 44%)",
          // maxHeight: "750px",
        }}
        className="project-layout">

        <div className="container">
          <div className="text-white text-center fadeInUp pt-5">
            <h2 className="fw-bold p-3">
              Web Designing and Web Development Company in Chennai
            </h2>

            <p className="paragraph-web m-auto">
              <span className="fw-bold">Webdads2u Pvt. Ltd.</span> is the
              leading web designing and web development company in Chennai,
              India. We provide custom is the leading{" "}
              <span className="fw-bold">Web Design and Web Development</span>
              services that help you make a positive and lasting impression on
              your customers. Our experienced web developers ensure that your
              website stands the test of time and is secure, user friendly and
              visually appealing. With our web design and development services,
              you can take your business to new heights.
            </p>
          </div>
          <div className="mt-4">
            <Row>
              <Col sm={12} lg={4} md={4 }>
                <div className="text-white paragraph-webs fadeInUp">
                  <h5>PHP Website Development</h5>
                  <p>
                    Webdads2u Pvt. Ltd., a leading web designing and web
                    development company in Chennai, specializes in bespoke web
                    development services, notably excelling in PHP website
                    development. Our adept team ensures the creation of
                    high-performance, tailored websites, delivering seamless
                    integration and reliable maintenance. With a commitment to
                    excellence, we prioritize client satisfaction, offering
                    innovative solutions that elevate online presence and
                    business success.
                  </p>
                </div>
              </Col>
              <Col sm={12} lg={4} md={4}>
                <div className="text-white paragraph-webs fadeInUp">
                  <h5>React js Website Development</h5>
                  <p>
                    Webdads2u Pvt. Ltd. stands as a seasoned web designing and
                    web development company in Chennai, India, specializing in
                    top-tier React JS website development services. We excel in
                    crafting high-caliber, cost-efficient React JS web solutions
                    tailored for both businesses and individuals. Our commitment
                    revolves around delivering cutting-edge, user-centric
                    websites finely tuned to meet your precise requirements.
                    With a proficient team of React JS developers, we ensure a
                    seamless and hassle-free development journey.
                  </p>
                </div>
              </Col>
              <Col sm={12} md={4} lg={4}>
                <div className="text-white paragraph-webs fadeInUp">
                  <h5>WordPress Website</h5>
                  <p>
                    Webdads2u Pvt. Ltd. stands as a premier web designing and
                    web development company in Chennai, India, recognized for
                    its prowess in crafting bespoke, secure, and high-performing
                    custom WordPress websites. Our adept team of WordPress
                    developers boasts extensive experience in tailoring
                    WordPress themes, excelling in plugin development, and
                    executing various custom development tasks. We take pride in
                    offering comprehensive WordPress development services,
                    meticulously designed to cater to the unique requirements of
                    our esteemed clients.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <Container className="mt-3">
                  <div className="text-center image-project-layout fadeInUp">
                    <Image src={image1} width={848} height={414} alt="Project Image"/>
                  </div>
                </Container>
              </Col>
            </Row>
          </div>
        </div>
        </div>
        <div className="text-center" style={{marginTop:"20px"}}>
          <Link href="/website-development">
            <Button
              className="border rounded-5 fadeInUp"
              style={{
                background: "linear-gradient(90deg, #871752 0%, #262250 50%)",
                padding: "18px 50px",
              }}
            >
              Read More
            </Button>
          </Link>
        </div>

        <div>
          {/* <Container> */}
            {/* <Digital /> */}
          {/* </Container> */}
        </div>
      </section>
    </>
  );
}
