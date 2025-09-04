import React from 'react';
import Slider from '../../../components/common/Slider-image';

function Domainregistrationbanner() {
    return (
        <>
            <section className="domainregistrationbanner-main">
                <div className="container">
                    <div className="row domainregistrationbanner">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-7 align-self-lg-center">
                            <h1>Domain Registration</h1>
                            <p>
                                Own your unique space on the internet with our extensive selection of domain names. Our team of experts is at your disposal to assist in selecting a domain name that is catchy, memorable, and perfect for your business
                            </p>
                            <a href="/contact-us">
                                <button className="d-none d-sm-block">Contact us</button>
                            </a>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-5 align-self-center">
                            <img
                                src="webdads/images/domain-registration/Banner-img.png"
                                alt="Domain Registration Company In Chennai
"
                                loading="lazy"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Slider />
        </>
    );
}

export default Domainregistrationbanner;
