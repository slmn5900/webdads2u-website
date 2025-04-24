import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

function Ecommerceseoadvantage() {
    return (
        <section className='ecommerceseoadvantage-main'>
            <div className="container">
                <div className="row ecommerceseoadvantage">
                    <div className="col-sm-12 col-md-6 col-lg-6 align-self-lg-center">
                        <h2>E-commerce Seo Advantage</h2>
                        <p>Gain a competitive edge with our E-commerce SEO advantage. We specialize in maximizing your online store’s visibility, driving targeted traffic, and boosting sales. With strategic optimization techniques tailored to your business, we ensure that your e-commerce site ranks higher in search engine results, resulting in increased profitability and success.</p>
                        <div className="d-flex flex-row mb-3">
                            <div className="icon-color"><FaCheckCircle /></div>
                            <div className=""><p>Industry-specific e-commerce SEO plans to drive maximum potential buyers to your online store</p></div>
                        </div>

                        <div className="d-flex flex-row mb-3">
                            <div className="icon-color"><FaCheckCircle /></div>
                            <div className=""><p>Relevant SEO services to make your online store easily searchable on the web</p></div>
                        </div>

                        <div className="d-flex flex-row mb-3">
                            <div className="icon-color"><FaCheckCircle /></div>
                            <div className=""><p>Product optimization and content optimization to make your online store SEO-friendly</p></div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
                        <img src="webdads/images/e-commerce-seo-service/woo-commece-seo.png" alt="woo-commece-seo" loading='lazy' className='img-fluid' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ecommerceseoadvantage;