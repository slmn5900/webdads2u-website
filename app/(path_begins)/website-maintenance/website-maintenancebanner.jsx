import React from 'react';
import Slider from '../../../components/common/Slider-image';

function Websitemaintenancebanner() {
    return (
        <>
            <section className="websitemaintenancebanner-main mt-5">
                <div className="container">
                    <div className="row text-center websitemaintenancebanner">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <h1>Website Maintenance Company</h1>
                            <p>A promise to maintain and successfully handle your Website Services.</p>
                            <a href="/contact-us">
                                <button>Conatct us</button>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <img
                                src="webdads/images/website-maintenance/banner.png"
                                alt="Best Website Maintenance Company In Chennai
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

export default Websitemaintenancebanner;



