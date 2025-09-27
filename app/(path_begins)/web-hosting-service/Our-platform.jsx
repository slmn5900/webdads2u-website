import React from 'react';
import Title from '../../../components/Title';
import Description from '../../../components/Description';

function Ourplatform() {
    return (
        <section className="Ourplatform-main">
            <div className="container">
                <div className="row Ourplatform">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757418333/webdads2u/web-hosting-service/web-hosting.png" alt="web hosting" loading="lazy" className="img-fluid" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
                        <Title title={' Our platform is powered by Google Cloud'} />
                        {/* <h4>Our platform is powered by Google Cloud</h4> */}

                        <Description
                            Des="Discover the pinnacle of web hosting excellence with Webdads2u, where our platform is fortified by the unmatched capabilities of Google Cloud. As a premier provider of web hosting solutions, we are committed to delivering
                            unparalleled performance, reliability, and scalability for your online endeavors. With our seamless integration of Google Cloud’s robust infrastructure, we guarantee an optimized hosting experience that exceeds
                            expectations."
                        />
                        {/* <p className="mb-sm-3 mb-lg-4 ">
                            Discover the pinnacle of web hosting excellence with Webdads2u, where our platform is fortified by the unmatched capabilities of Google Cloud. As a premier provider of web hosting solutions, we are committed to delivering
                            unparalleled performance, reliability, and scalability for your online endeavors. With our seamless integration of Google Cloud’s robust infrastructure, we guarantee an optimized hosting experience that exceeds
                            expectations.
                        </p> */}
                        <Description Des="Benefit from lightning-fast loading speeds, enhanced security measures, and unparalleled flexibility as we leverage the power of Google Cloud to propel your web hosting endeavors to new heights." />
                        {/* <p>Benefit from lightning-fast loading speeds, enhanced security measures, and unparalleled flexibility as we leverage the power of Google Cloud to propel your web hosting endeavors to new heights.</p> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Ourplatform;
