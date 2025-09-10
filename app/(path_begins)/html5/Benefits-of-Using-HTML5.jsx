import React from 'react'

function BenefitsofUsingHTML5() {
    return (
        <section className='benefitsofUsingHTML5-main'>
            <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6 align-self-center BenefitsofUsingHTML5">
                    <img src="webdads/images/HTML5/Laptop.png" alt="Laptop" loading='lazy' className='img-fluid' />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 text-center BenefitsofUsingHTML5">
                    <h3>Benefits of Using HTML5</h3>
                    <p>HTML5 provides better multimedia support, improved accessibility features, offline functionality, and simpler coding for dynamic web content. It fosters cross-platform compatibility and facilitates the development of responsive and interactive websites, enhancing user experience and developer efficiency.</p>
                    <div className="row BenefitsofUsingHTML5-flex">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="card">
                                <div className="img-card">
                                    <img src="webdads/images/HTML5/min-html.png" alt="min-html" loading='lazy'  className='img-fluid' />
                                </div>
                                <div className="card-text">
                                Webpages developed with HTML5 are usually well layered and modelled.
                                </div>
                            </div>
                            <div className="card">
                                <div className="img-card">
                                    <img src="webdads/images/HTML5/download.png" alt="download" loading='lazy'  className='img-fluid' />
                                </div>
                                <div className="card-text">
                                HTML5 supports all the necessary tags and styling elements to create a responsive design.
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
                        <div className="card">
                                <div className="img-card">
                                    <img src="webdads/images/HTML5/download-page.png" alt="download-page" loading='lazy'  className='img-fluid' />
                                </div>
                                <div className="card-text">
                                HTML5-developed webpages have the option to use geolocation APIs
                                </div>
                            </div>
                            <div className="card">
                                <div className="img-card">
                                    <img src="webdads/images/HTML5/download-box.png" alt="download-box" loading='lazy'  className='img-fluid' />
                                </div>
                                <div className="card-text">
                                Friendly And Easy Layout Is Maintained For Scalability
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default BenefitsofUsingHTML5;