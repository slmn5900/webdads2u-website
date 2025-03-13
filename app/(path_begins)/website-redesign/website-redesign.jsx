import React from 'react'
import Slider from '../../../components/common/Slider-image'

function Websiteredesignbanner() {
    return (
        <>
        <section className='websiteredesign-main'>
            <div className="container">
                <div className="row websiteredesign">
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 align-self-lg-center">
                        <h1> &quot;Get ready for a modern, responsive website.&quot;</h1>
                        <p>Enhancing customer engagement with perfect web design</p>
                        <a href="/contact-us"><button className='d-none d-sm-block'>Contact Us</button></a>
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 align-self-center">
                        <img src="webdads/images/website-redesign/banner.png" alt="banner" loading='lazy' className='img-fluid' />
                    </div>
                </div>
            </div>
        </section>
        <Slider/>
        </>
    )
}

export default Websiteredesignbanner;