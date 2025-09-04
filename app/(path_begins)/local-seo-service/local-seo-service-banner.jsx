import React from 'react';
import Slider from '../../../components/common/Slider-image';

function Localseoservicebanner() {
    return (
        <>
            <section className="localseoservicebanner-main">
                <div className="container">
                    <div className="row localseoservicebanner">
                        <div className="col-7 col-sm-6 col-md-6 col-lg-6">
                            <h1>Local SEO Services</h1>
                            <p>Boost your business with our expert local SEO services. We optimize your online presence for local searches, driving traffic and customers to your doorstep.</p>
                            <a href="/contact-us">
                                <button >Contact us</button>
                            </a>
                        </div>
                        <div className="col-5 col-sm-6 col-md-6 col-lg-6 text-center align-self-center element-local-image">
                            <img
                                src="webdads/images/local-seo-service/Img.png"
                                alt="Local SEO Services In Chennai 
"
                                loading="lazy"
                                className="img-fluid"
                            />

                            <div className="d-none d-md-block">
                                <img src="webdads/images/local-seo-service/Star-2.png" alt="Star-2-main" loading="lazy" className="img-fluid Star-2-main" />
                                <img src="webdads/images/local-seo-service/Star-2.png" alt="Star-2" loading="lazy" className="img-fluid Star-2" />
                                <img src="webdads/images/local-seo-service/Star-1.png" alt="Star-1" loading="lazy" className="img-fluid Star-1" />
                                <img src="webdads/images/local-seo-service/Star-4.png" alt="Star-1" loading="lazy" className="img-fluid Star" />
                                <img src="webdads/images/local-seo-service/Steps.png" alt="Steps" loading="lazy" className="img-fluid Steps" />
                                <img src="webdads/images/local-seo-service/Hand.png" alt="Hand" loading="lazy" className="img-fluid Hand" />
                                <img src="webdads/images/local-seo-service/Mic.png" alt="Mic" loading="lazy" className="img-fluid Mic" />
                                <img src="webdads/images/local-seo-service/Paper.png" alt="Paper" loading="lazy" className="img-fluid Paper" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Slider />
        </>
    );
}

export default Localseoservicebanner;
