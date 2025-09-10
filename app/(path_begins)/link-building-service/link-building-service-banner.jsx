import React from 'react';

function Linkbuildingservicebanner() {
    return (
        <>
            <section className="justify-content-center align-items-center linkbuildingservicebanner-main">
                <div className="container-fluid">
                    <div className="row justify-content-center linkbuildingservicebanner">
                        <div className="col-7 col-sm-6 col-md-6 col-lg-5 align-self-center">
                            <h1>
                                Best Link Building <br />
                                Services in India
                            </h1>
                            <p>Link building is crucial for SEO success. It involves acquiring backlinks from reputable websites to improve search engine rankings and increase organic traffic to your site.</p>
                            <a href="/contact-us">
                                <button>Contact us</button>
                            </a>
                        </div>
                        <div className="col-5 col-sm-6 col-md-6 col-lg-6 ">
                            <img
                                src="webdads/images/link-building-service/Chain.png"
                                alt="Link Building Service In Chennai
"
                                loading="lazy"
                                className="img-fluid"
                            />
                            <div>
                                <img src="webdads/images/link-building-service/Hand.png" alt="Hand" loading="lazy" className="img-fluid element-hand-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Linkbuildingservicebanner;
