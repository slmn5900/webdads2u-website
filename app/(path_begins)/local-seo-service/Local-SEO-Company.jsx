import React from 'react';
import { FaRegPlayCircle } from "react-icons/fa";

function LocalSEOcompany() {
    return (
        <section className='localseccompany-main'>
            <div className="container">
                <div className="row localseccompany">
                    <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
                        <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757496785/webdads2u/local-seo-service/local-seo.png" alt="local seo" loading='lazy' className='img-fluid' />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <h5>How would a Local SEO Company help you to grow Your Business?</h5>
                        <p>A local SEO company boosts your business growth by optimizing your online presence for local searches. They enhance visibility, attract targeted traffic, improve conversions, and increase revenue through tailored local SEO strategies.</p>
                        <div className="d-flex flex-row mb-3">
                            <div ><FaRegPlayCircle className='seo-icon-item' /></div>
                            <div ><p>Through this, you can get your site listed on a variety of search engines such as Google</p></div>
                        </div>
                        <div className="d-flex flex-row mb-3">
                            <div ><FaRegPlayCircle className='seo-icon-item' /></div>
                            <div ><p>Enhancing your local search results by updating quality content</p></div>
                        </div>
                        <div className="d-flex flex-row mb-3">
                            <div ><FaRegPlayCircle className='seo-icon-item' /></div>
                            <div ><p>
                                Listing your company and products on various business directories to connect you with more and more viewers</p></div>
                        </div>
                        <div className="d-flex flex-row mb-3">
                            <div ><FaRegPlayCircle className='seo-icon-item' /></div>
                            <div ><p>
                                Incorporating local reviews concerning your business online in order to get better your local promotion and advertising score</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LocalSEOcompany;
