


import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Brochuregallery = () => {
    const [show, setShow] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        '/webdads/images/brochuredesign/brochure-portfolio.png',
        '/webdads/images/brochuredesign/high-look-1.webp',
        '/webdads/images/brochuredesign/ayurvedic-portfolio.png',
        '/webdads/images/brochuredesign/d-prince-portfolio.png',
        '/webdads/images/brochuredesign/nuvotech-portfolio.webp',
        '/webdads/images/brochuredesign/pride-rmx-1.webp',

    ];

    const handleShow = (index) => {
        setCurrentIndex(index);
        setShow(true);
    };

    const handleClose = () => setShow(false);

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <section style={{ background: '#f5f5f5' }} className="pt-5 pb-5 ourwork">
            <Container>
                <Row>
                    <div className="text-center">
                        <h3>Our Works</h3>
                    </div>
                    {images.map((src, index) => (
                        <Col key={index} md={6} lg={4}>
                            <div className="bsihv position-relative" onClick={() => handleShow(index)}>
                                <img src={src} className="w-100 rounded" alt={`Work ${index + 1}`} />
                                <div className="overlay"></div>
                            </div>
                        </Col>
                    ))}
                </Row>
                <Row>
                  <div className="text-center">
                    <a href="/business-card/"><Button>View More </Button></a>
                  </div>
                </Row>
            </Container>

            {/* Modal for Image Viewing */}
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Body>
                    <div className="d-flex justify-content-between align-items-center">
                        <Button variant="light" onClick={handlePrev}>&lt;</Button>
                        <img src={images[currentIndex]} className="w-100" alt="Current Work" />
                        <Button variant="light" onClick={handleNext}>&gt;</Button>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
};

export default Brochuregallery;

