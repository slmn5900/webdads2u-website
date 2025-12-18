import React from 'react'
import Accordion from 'react-bootstrap/Accordion';


function Fqresponsivewebsite() {
  return (
    <section className='fqresponsivewebsite-main'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-5 fqresponsivewebsite-header">
                        <h1>Frequently Asked Questions</h1>
                        <p>Explore common inquiries with our FAQs. Get quick answers to popular questions about our services, processes, and more.</p>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                        

                    <div className='fqresponsivewebsite-Accordion'>
                            <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What is responsive website design?</Accordion.Header>
                                <Accordion.Body>
                                Responsive web pagedesign ensures your website adapts to different screen sizes and devices, providing an optimal viewing experience for users.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Why is responsive website design important?</Accordion.Header>
                                <Accordion.Body>
                                Responsive web design enhances user experience, boosts SEO rankings, increases mobile traffic, and ensures your website remains competitive in today’s digital landscape.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>How does responsive website design work?</Accordion.Header>
                                <Accordion.Body>
                                Responsive web design utilizes flexible grids, layouts, and CSS media queries to automatically adjust the size and layout of your website based on the device being used.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>What are the benefits of responsive website design?</Accordion.Header>
                                <Accordion.Body>
                                Benefits include improved user experience, increased mobile usability, higher conversion rates, easier maintenance, and better SEO performance.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Is responsive website design costly?</Accordion.Header>
                                <Accordion.Body>
                                While initial development costs may be slightly higher, the long-term benefits and return on investment make responsive web design a cost-effective solution for reaching and engaging with your target audience across multiple devices.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        </div>


                    </div>
                </div>
            </div>
        </section>

  )
}

export default Fqresponsivewebsite;
