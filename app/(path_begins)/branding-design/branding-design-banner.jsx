import React from 'react';
import Slider from '../../../components/common/Slider-image';

function Brandingdesignbanner() {
    return (
        <>
            <section style={{ background: 'linear-gradient(70deg, rgba(101, 37, 138, 1) 0%, rgba(232, 5, 102, 1) 100%)', padding: '60px 0px' }}>
                <div className="container-fluid">
                    <div className="row brandingdesignbanner">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <img
                                src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757929979/webdads2u/branding-design/brand-design-company.png
"
                                alt="brand-design-company"
                                loading="lazy"
                                className="img-fluid w-100"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* <Slider /> */}
        </>
    );
}

export default Brandingdesignbanner;
