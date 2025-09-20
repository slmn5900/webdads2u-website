import React from 'react';

function Linkbuildingservicebanner() {
    return (
        <>
            <section
                className="justify-content-center align-items-center linkbuildingservicebanner-main"
                style={{ background: "url('https://res.cloudinary.com/dbpv95wd8/image/upload/v1757928350/webdads2u/link-building-service/banner-link-building.jpg')" }}
            >
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
                                src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757498788/webdads2u/link-building-service/link-building.png"
                                alt="link building
"
                                loading="lazy"
                                className="img-fluid"
                            />
                            <div>
                                <img
                                    src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757498792/webdads2u/link-building-service/link-building-services.png"
                                    alt="link building services"
                                    loading="lazy"
                                    className="img-fluid element-hand-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Linkbuildingservicebanner;
