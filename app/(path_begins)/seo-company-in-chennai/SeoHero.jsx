import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from '../../../components/common/Slider-image';
function SeoHero() {
    return (
        <>
            <section className="seo-develoment">
                <Container>
                    <Row>
                        <Col md={12} className="mt-5">
                            <div className="seo-herocont">
                                <h2>Leading Business in the Right Direction</h2>
                                <p>Real-time tools and rich insights mean our support solution amplifies your team for an unbeatable experience </p>
                                <img
                                    alt="SEO Company In Chennai | SEO Agency Chennai
"
                                    src="/webdads/images/seo-development/seo-hero-image.webp"
                                ></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Slider />
        </>
    );
}

export default SeoHero;
