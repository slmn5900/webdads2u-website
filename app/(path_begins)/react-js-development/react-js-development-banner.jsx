import React from 'react';
import Slider from '../../../components/common/Slider-image';

function ReactjsDevelopmentBanner() {
    return (
        <>
            <section className="reactjsdevelopmentbanner-banner align-items-center">
                <div className="container">
                    <div className="row justify-content-center align-items-center reactjsdevelopment">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-5">
                            <h1>React js Development</h1>
                            <p>Building unique, industry-specific, custom-made web portals for outstanding customer experience</p>
                            <a href="/contact-us">
                                <button className="d-none d-sm-block">Contact Us</button>
                            </a>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-5 align-self-center text-center">
                            {/* <img src="webdads/images/react-js-development/Ball.png" alt="Ball" loading='lazy' className='img-fluid' /> */}

                            <div className="element-react-image">
                                <img src="webdads/images/react-js-development/Ball.png" alt="React JS Development Company In Chennai " loading="lazy" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Slider />
        </>
    );
}

export default ReactjsDevelopmentBanner;
