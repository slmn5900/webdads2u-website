import React from 'react';
import Title from '../../../components/Title';
import Description from '../../../components/Description';

function SEOservicesindia() {
    return (
        <section className="seoservicesindia-main ">
            <div className="container">
                <div className="row seoservicesindia">
                    <div className="col-ms-12 col-md-6 col-lg-6">
                        <Title title={'Local SEO Services in India'} />
                        {/* <h2>Local SEO Services in India</h2> */}
                        <Description
                            Des={
                                'Elevate your online visibility in India with our tailored local SEO services. We specialize in optimizing your digital presence to target local audiences effectively. Our strategies include local keyword targeting, Google My Business optimization, and location-based citations to ensure your business stands out in local search results. Trust our expertise to enhance your online presence, drive targeted traffic, and increase footfall to your Indian storefront or service area. Maximize your local reach with our comprehensive local SEO solutions.'
                            }
                        />
                        {/* <p >Elevate your online visibility in India with our tailored local SEO services. We specialize in optimizing your digital presence to target local audiences effectively. Our strategies include local keyword targeting, Google My Business optimization, and location-based citations to ensure your business stands out in local search results. Trust our expertise to enhance your online presence, drive targeted traffic, and increase footfall to your Indian storefront or service area. Maximize your local reach with our comprehensive local SEO solutions.</p> */}
                    </div>
                    <div className="col-ms-12 col-md-6 col-lg-6 align-self-center">
                        <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757496788/webdads2u/local-seo-service/local-seo-services.png" alt="local seo services" loading="lazy" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SEOservicesindia;
