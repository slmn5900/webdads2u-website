import React from 'react';
import Slider from '../../../components/common/Slider-image';

function Responsivewebsitebanner() {
    return (
        <>
            <section className="responsivewebsitebanner-main mt-5">
                <div className="container">
                    <div className="row responsivewebsitebanner">
                        <div className="col-7 col-sm-6 col-md-6 col-md-6 align-self-center">
                            <h1>Leading Responsive Website Designing Company</h1>
                            <p>
                                As a leading responsive website designing company, we specialize in creating visually stunning and user-friendly websites that adapt seamlessly across all devices. Our team combines expertise in responsive web design
                                with innovative techniques to ensure your website delivers an exceptional user experience on desktops, tablets, and smart phones.
                            </p>
                            <a href="/contact-us">
                                <button className="d-none d-sm-block">Contact us</button>
                            </a>
                        </div>
                        <div className="col-5 col-sm-6 col-md-6 col-md-6 align-self-center">
                            <img src="webdads/images/responsive-website/Lap.png" alt="Lap" loading="lazy" className="img-fluid" />
                            <div className="d-none d-lg-block">
                                <img
                                    src="webdads/images/responsive-website/Bubbles.png"
                                    alt="Responsive Web Design Company Chennai
"
                                    loading="lazy"
                                    className="img-fluid element-bubbles"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Slider />
        </>
    );
}

export default Responsivewebsitebanner;
