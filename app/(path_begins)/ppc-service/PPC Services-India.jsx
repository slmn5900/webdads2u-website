import React from 'react'
import { MdFindInPage } from "react-icons/md";
import { FaHeadSideVirus } from "react-icons/fa6";
import { TfiBarChart } from "react-icons/tfi";

function PPCservicesindia() {
    return (
        <section className='ppcservicesindia-main'>
            <div className="container">
                <div className="row ppcservicesindia align-items-start">
                    <div className="col-sm-12 col-md-6 3col-lg-6 ">
                        <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757490338/webdads2u/ppc-service/webdads2u-for-ppc-services.png" alt="webdads2u for ppc services" loading='lazy' className='img-fluid' />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className='header'>Looking for the Best SEO results?</div>
                        <h6>Why Choose Webdads2u For PPC Services in India</h6>
                        <p className='mb-3'>Choose Webdads2u for PPC services in India for expert management of Google Ads campaigns, strategic optimization, and a proven track record of delivering results-driven performance.</p>
                        <div className="d-flex flex-row mb-3 pp-item">
                            <div className="p-2 col-sm-1 col-md-1 col-lg-1 text-center align-self-center pps-item">
                            <TfiBarChart className='pps-icon'/>
                            </div>
                            <div className="p-2 col-sm-11 col-md-11 col-lg-11">
                                <h5>Unmatched Portfolio</h5>
                                <p>Slow pages, too-large CSS or HTML</p>
                            </div>
                        </div>

                        <div className="d-flex flex-row mb-3 pp-item">
                            <div className="p-2 col-sm-1 col-md-1 col-lg-1 text-center align-self-center pps-item">
                            <FaHeadSideVirus className='pps-icon'/>
                            </div>
                            <div className="p-2 col-sm-11 col-md-11 col-lg-11">
                                <h5>Proven Expertise</h5>
                                <p>All issues with hrefiang, language</p>
                            </div>
                        </div>

                        <div className="d-flex flex-row mb-3 pp-item">
                            <div className="p-2 col-sm-1 col-md-1 col-lg-1 text-center align-self-center pps-item">
                            <MdFindInPage className='pps-icon'/>
                            </div>
                            <div className="p-2 col-sm-11 col-md-11 col-lg-11">
                                <h5>Content Quality</h5>
                                <p>Unconsolidated duplicate page</p>
                            </div>
                        </div>

                        <a href="/contact-us"><button>Conatct us</button></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PPCservicesindia;