'use client';
import React from 'react'
import { Carousel } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import "../../../style/home/landing_page.scss"

const testimonials = [
    {
        name: 'Yaser',
        role: 'Founder',
        content: 'Great work by Webdads, prompt and efficient service. I am overall satisfied with their performance for the design of our company brochure.',
        imgSrc: '/webdads/images/home/testimonial/client-review-1.avif'
    },
    {
        name: 'Suresh',
        role: 'Founder',
        content: 'Excellent work with reasonable cost. You can blindly approach them, sure you will get excellent output which is beyond your expectation.',
        imgSrc: '/webdads/images/home/testimonial/client-review-2.avif'
    },
    {
        name: 'Lakshmanan Annamalai',
        role: 'Founder',
        content: 'Best people to work with. 100% hard worker, gave a neat finish and great look towards my website. Solomon is flexible and keeps up the works up to date.',
        imgSrc: '/webdads/images/home/testimonial/client-review-3.avif'
    },
    {
        name: 'Smilee',
        role: 'Founder',
        content: 'Very responsive & professional workers. I am so happy & satisfied with their work.',
        imgSrc: '/webdads/images/home/testimonial/client-review-4.avif'
    }
];

const faqData = [
    {
        headerContent: 'What does having Managed your services provider?',
        boadyContent: 'Our purpose is to build solutions that remove the barriers preventing people from doing their best work, and this is at the heart of how we approach our.'},
    { headerContent: 'What you about say your Business planning?', boadyContent: 'We encourage every team member to be a whole person. We have a flexible, high trust environment that is focused on doing great work.' },
    { headerContent: 'You have a unique way of the working in IT?', boadyContent: 'Our purpose is to build solutions that remove barriers preventing people from doing their best work, and this is at the heart.' },
    { headerContent: 'What types of systems do you support?', boadyContent: 'Increase social reach and productivity with our App Directory, a collection of famous applications like Instagram other web design.' },
    { headerContent: 'Can you provide of all IT Managenment services?', boadyContent: 'Design studio founded in London and expanded our services, and become a multinational firm, offering services and solutions.' }
];
function Webfqa() {
  
  return (
    <div className="container mt-5 ">
    <div className="row">
        <section className="col-md-6">
            {' '}
            {/* <div className="landing-page-faq-span-div">
                <span>FAQs</span>
                <h2>Frequently Asked Questions</h2>
            </div> */}
            {/* <Accordion>

                {faqData.map((data, index) => (
                    <Accordion.Item eventKey={index} className="landing-page-faq-accordionItem">
                        <Accordion.Header className="landing-page-faq-accordionHeader">{data.headerContent}</Accordion.Header>
                        <Accordion.Body>{data.boadyContent}</Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion> */}


{/* ============================================================================================= */}
{/* ================================= this code is reworked ===================================== */}
{/* ============================================================================================= */}

<Accordion>
  {faqData.map((data, index) => (
    <Accordion.Item 
      key={index}  // Using the index as the key
      eventKey={index} 
      className="landing-page-faq-accordionItem"
    >
      <Accordion.Header className="landing-page-faq-accordionHeader">
        {data.headerContent}
      </Accordion.Header>
      <Accordion.Body>{data.bodyContent}</Accordion.Body>
    </Accordion.Item>
  ))}
</Accordion>






        </section>
        <section className="col-md-6">
            <div className="landing-page-testimonial">
                Testimonial
                {/* <div className="container mt-5"> */}
                {/* <h3>
                    We have many good <span style={{ color: '#871752' }}>client’s</span> review
                </h3> */}
            </div>
            <Carousel className="carousel-parent-container">
                {testimonials.map((testimonial, index) => (
                    <Carousel.Item key={index} className="carousel-item-container">
                        <div className="d-flex justify-content-center">
                            <img className="d-block rounded-circle" src={testimonial.imgSrc} alt={testimonial.name} style={{ width: '100px', height: '100px' }} />
                        </div>
                        <Carousel.Caption className="landing-page-testimonial-carousel-caption" style={{ position: 'unset' }}>
                            <p className="landing-page-testimonial-carousel-caption-p" style={{ textAlign: 'left' }}>
                                {testimonial.content}
                            </p>
                            <h3 className="text-center">{testimonial.name}</h3>
                            <h4 className="text-center">{testimonial.role}</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
            {/* </div> */}
        </section>
    </div>
</div>
  )
}

export default Webfqa