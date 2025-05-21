import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CarrerForm from './CarrerForm';
import './career.scss';
const CareerHero = () => {
    return (
        <>
            <section className="mt-5 mb-5 careerfrm">
                <Container>
                    <Row>
                        <Col lg={7}>
                            <CarrerForm />
                        </Col>
                        <Col lg={5}>
                            <div className="">
                                <img alt="Best Web Design And Development Company In Chennai" src="/webdads/images/contact/career-form-image.webp" className="w-100"></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default CareerHero;
