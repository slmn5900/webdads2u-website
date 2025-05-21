import React from 'react';
import Slider from '../../../components/common/Slider-image';

function Logodesignbanner() {
    return (
        <>
            <section className="logodesignbanner-main">
                <div className="container">
                    <div className="row logodesignbanner">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6 align-self-center">
                            <h1>Elevate your brand with professional logo design services.</h1>
                            <a href="/contact-us">
                                <button className="d-none d-sm-block mt-3">Contact us</button>
                            </a>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6 align-self-center banner-logo-design">
                            <img
                                src="webdads/images/logo-design/Laptop.png"
                                alt="Logo Design Company In Chennai 
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

export default Logodesignbanner;
