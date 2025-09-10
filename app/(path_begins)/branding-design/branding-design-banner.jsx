import React from 'react';
import Slider from '../../../components/common/Slider-image';

function Brandingdesignbanner() {
    return (
        <>
            <section className="brandingdesignbanner-main">
                <div className="container-fluid">
                    <div className="row brandingdesignbanner">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <img src="webdads/images/branding-design/Design-Baqnner.png" alt="Branding Design Services In Chennai" loading="lazy" className="img-fluid w-100" />
                        </div>
                    </div>
                </div>
            </section>
            <Slider />
        </>
    );
}

export default Brandingdesignbanner;
