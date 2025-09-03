import React from 'react'
import Card from 'react-bootstrap/Card';

function OffshoreMobileApp() {
    return (
        <section className='OffshoreMobileApp-main'>
            <div className="container">
                <div className="row OffshoreMobileApp">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <h1>Your Offshore Mobile App Development Partner</h1>
                        <p>We excel in delivering superior offshore mobile app development services, handling all your needs with a focus on timely delivery.</p>
                        <img src="webdads/images/mobile-app-development/img-aimobie-oj3vd06mvhytqzjmq4ypkl4ud3heq6b94t4bj1751k-ptf8pfsgro6khho3ufbwjv0ef55e8avv0bk.png" alt="img-aimobie-oj3vd06mvhytqzjmq4ypkl4ud3heq6b94t4bj1751k-ptf8pfsgro6khho3ufbwjv0ef55e8avv0bk" loading='lazy' className='img-fluid' />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
                        <Card >
                        <Card.Title>True mobility</Card.Title>
                            <Card.Body className='p-0'>While mobile devices becoming increasingly complex they are still mobile.</Card.Body>
                        </Card>

                        <Card className='card-fouce'>
                        <Card.Title>Optimized for different screen sizes</Card.Title>
                            <Card.Body className='p-0'>Our design is always optimized for different devices and screen sizes.</Card.Body>
                        </Card>

                        <Card >
                        <Card.Title>Details that matter for users</Card.Title>
                            <Card.Body className='p-0'>Small things make a big difference between success and failure.</Card.Body>
                        </Card>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default OffshoreMobileApp
