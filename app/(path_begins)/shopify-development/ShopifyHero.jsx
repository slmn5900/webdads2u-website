import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { MdDoubleArrow } from 'react-icons/md';
import SocialMedia from '../../../components/common/SocialMedia';
import Sliderimage from '../../../components/common/Slider-image';
import Banner from '../../../components/ui/banner/Banner';
import ClientLogoSlider from '../../../components/ui/client-logo-slider/ClientLogoSlider';
import { Box } from '@mui/material';
import ShopifyServices from './Components/ShopifyServices';
import WhyShopify from './Components/WhyShopify';
function ShopifyHero() {
    return (
        <>
            <Banner />
            {/* <section className="shopify-hero">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} xs={7}>
                            <h2>Shopify Development Services</h2>
                            <p>Empower your online business with expert Shopify web development. Top rated Shopify development service provider.</p>
                            <a href="/contact-us/">
                                <Button variant="contained">Contact us</Button>
                            </a>
                        </Col>
                        <Col md={6} xs={5}>
                            <div >
                                <img
                                    src="/webdads/images/shopify/shopify-service.png"
                                    alt="Best Shopify Development Agency In Chennai
"
                                    className="w-100"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section> */}
            <Box sx={{ pt: 4 }}>
                <ClientLogoSlider />
            </Box>
            <section className="leading-shopify pt-5 pb-5">
                <Container>
                    <Row>
                        <div className="text-center">
                            <h2>Leading Shopify Development Company in Chennai </h2>
                            <p>
                                Chennai has witnessed a significant transformation in the e-commerce industry over the past few years. Shopify is well-known for its substantial market share in the e-commerce platform space. We are a leading Shopify
                                development company based in Chennai, India and we specialize in providing the best Shopify development solutions that enhance your online presence and drive unparalleled growth for your e-commerce venture.
                            </p>
                        </div>
                    </Row>
                </Container>
            </section>

            <WhyShopify />

            <ShopifyServices />
        </>
    );
}

export default ShopifyHero;
