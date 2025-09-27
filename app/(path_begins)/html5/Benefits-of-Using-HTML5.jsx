import React from 'react';
import Title from '../../../components/Title';
import Description from '../../../components/Description';

function BenefitsofUsingHTML5() {
    return (
        <section className="benefitsofUsingHTML5-main">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 align-self-center BenefitsofUsingHTML5">
                        <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757415317/webdads2u/html5/html5-web-development-services.png" alt="html5 web development services" loading="lazy" className="img-fluid" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 text-center BenefitsofUsingHTML5">
                        <Title title={'Benefits of Using HTML5'} />
                        {/* <h3>Benefits of Using HTML5</h3> */}
                        <Description
                            Des=" HTML5 provides better multimedia support, improved accessibility features, offline functionality, and simpler coding for dynamic web content. It fosters cross-platform compatibility and facilitates the development of
                            responsive and interactive websites, enhancing user experience and developer efficiency."
                        />
                        {/* <p>
                            HTML5 provides better multimedia support, improved accessibility features, offline functionality, and simpler coding for dynamic web content. It fosters cross-platform compatibility and facilitates the development of
                            responsive and interactive websites, enhancing user experience and developer efficiency.
                        </p> */}
                        <div className="row BenefitsofUsingHTML5-flex">
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <div className="card">
                                    <div className="img-card">
                                        <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757415405/webdads2u/html5/icons/html5-logo.png" alt="min-html" loading="lazy" style={{ width: '50px' }} className="img-fluid" />
                                    </div>
                                    <div className="card-text">Webpages developed with HTML5 are usually well layered and modelled.</div>
                                </div>
                                <div className="card">
                                    <div className="img-card">
                                        <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757415361/webdads2u/html5/icons/html5-develope-api.png" alt="download" loading="lazy" style={{ width: '50px' }} className="img-fluid" />
                                    </div>
                                    <div className="card-text">HTML5 supports all the necessary tags and styling elements to create a responsive design.</div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
                                <div className="card">
                                    <div className="img-card">
                                        <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757415356/webdads2u/html5/icons/html5-supports.png" alt="download-page" loading="lazy" style={{ width: '50px' }} className="img-fluid" />
                                    </div>
                                    <div className="card-text">HTML5-developed webpages have the option to use geolocation APIs</div>
                                </div>
                                <div className="card">
                                    <div className="img-card">
                                        <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757415438/webdads2u/html5/icons/html-layout.png" alt="download-box" loading="lazy" style={{ width: '50px' }} className="img-fluid" />
                                    </div>
                                    <div className="card-text">Friendly And Easy Layout Is Maintained For Scalability</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BenefitsofUsingHTML5;
