import { Container, Row, Col, Card } from 'react-bootstrap';

const CaseStudy = () => {
    return (
        <Container className="my-5">
            <Row>
                <section className="col-md-6">
                    <div className="landing-page-casestudy-span-div">
                        <span>Case Steady</span>
                        <h3 style={{ marginBottom: '0px' }}>Some of Our Successful Projects</h3>
                        <h3 style={{ color: '#871752' }}>Delight Customers Across the Globe </h3>
                    </div>
                </section>

                <section className="col-md-6">
                    <div className='landing-page-casestudy-content'>
                        <p>
                            We showcase exceptional websites and portfolios crafted with unwavering passion, simplicity, and creativity. Our team excels in designing groundbreaking products and offering consultancy services to companies. As a
                            distinguished web design and web development company in Chennai, our commitment to excellence reflects in our innovative solutions and client-centric approach.
                        </p>
                    </div>
                </section>
            </Row>
        </Container>
    );
};

export default CaseStudy;
