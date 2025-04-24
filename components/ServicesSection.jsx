import React, { Suspense } from 'react';
import { Container } from 'react-bootstrap';

// Lazy load the image with Suspense
const LazyImage = ({ src, alt }) => (
    <Suspense fallback={<div>Loading...</div>}>
        <img src={src} alt={alt} className="img-fluid" width="76px" height="76px" />
    </Suspense>
);

const ServicesSection = () => {
    const services = [
        {
            id: 'service-box-1',
            title: 'Website Development',
            imgSrc: '/webdads/images/home/web-development.png',
            link: '/website-development/',
            alt: 'web-development'
        },
        {
            id: 'service-box-2',
            title: 'SEO Services',
            imgSrc: '/webdads/images/home/seo-services.png',
            link: '/seo-company-in-chennai/',
            alt: 'seo-services'
        },
        {
            id: 'service-box-3',
            title: 'Branding Design',
            imgSrc: '/webdads/images/home/branding-design.avif',
            link: '/branding-design/',
            alt: 'branding-design'
        },
        {
            id: 'service-box-4',
            title: 'E-Commerce Development',
            imgSrc: '/webdads/images/home/e-commerce-development.avif',
            link: '/ecommerce-website-development/',
            alt: 'e-commerce-development'
        },
        {
            id: 'service-box-5',
            title: 'Mobile App Development',
            imgSrc: '/webdads/images/home/mobiile-app-development.avif',
            link: '/mobile-app-development/',
            alt: 'mobile-app-development'
        },
        {
            id: 'service-box-6',
            title: 'CRM & ERP Development',
            imgSrc: '/webdads/images/home/crm-erp-development.avif',
            link: '/crm-erp-development/',
            alt: 'crm-erp-development'
        }
    ];

    return (
      <>

        <section className=" services-section" style={{overflow: 'hidden' , backgroundImage: `linear-gradient(90deg,#871752 1%,#262250 44%)`}} >
            <Container>
            <div className="row justify-content-center " >
              {/* <div className="display-4 text-center"> */}
                {services.map((service, index) => (
                        <div key={index} className="col-xs-6  col-md-4 col-lg-2 text-center  width-75 height-75" style={{padding: '10px',borderRight:"1px solid white"}}>
                            <a href={service.link} className="text-decoration-none">
                                <LazyImage src={service.imgSrc} alt={service.alt} style={{width: '80px', height: '80px'}} />
                                <h2 className="mt-3 text-white" style={{fontSize: '16px'}}>
                                    {service.title.split(' ').map((word, i) => (
                                        <React.Fragment key={i}>
                                            {word} &nbsp; 
                                            {/* <br /> */}
                                        </React.Fragment>
                                    ))}
                                </h2>
                            </a>
                        </div>
                ))}
                {/* </div> */}
            </div>
            </Container>
        </section>




        </>
    );
};

export default ServicesSection;
