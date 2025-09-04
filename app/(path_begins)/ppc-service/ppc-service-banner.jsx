import React from 'react';
import Slider from '../../../components/common/Slider-image';

function Ppcservicebanner() {
    return (
        <>
            <section className="ppcservicebanner-main">
                <div className="container">
                    <div className="row justify-content-center ppcservicebanner">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6 align-self-lg-center">
                            <h1>PPC Service</h1>
                            <p>Building unique, industry-specific, custom-made web portals for outstanding customer experience</p>
                            <a href="/contact-us">
                                <button >Contact us</button>
                            </a>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6 align-self-center">
                            <img
                                src="webdads/images/ppc-service/convertio.in_ppc-banner-right.png"
                                alt="Google Ads Agency In Chennai | PPC Company In Chennai
"
                                loading="lazy"
                                className="img-fluid pppc-image-hover"
                            />
                            <div className="text-center">
                                <img src="webdads/images/ppc-service/Crusher.png" alt="Crusher" loading="lazy" className="img-fluid element-hand" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Slider />
        </>
    );
}

export default Ppcservicebanner;
