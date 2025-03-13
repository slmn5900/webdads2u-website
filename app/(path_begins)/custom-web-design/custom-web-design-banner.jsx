import React from 'react'
import Slider from '../../../components/common/Slider-image'
function Customwebdesignbanner() {
    return (
        <>
        <section className='customwebdesignbanner-main'>
            <div className="container">
            <img src="webdads/images/custom-web-design/Circle.png" alt="Circle" loading='lazy' className='img-fluid element-circle d-none d-lg-block'/>
                <div className="row justify-content-center customwebdesignbanner">
                    <div className="col-7 col-sm-6 col-md-6 col-lg-7 align-content-center">
                        <h1>Custom web designing
                            services in Chennai</h1>
                        <p>Our custom web design services at Webdads2u offer tailored solutions to elevate
                            your online presence. With a keen focus on client needs, we craft bespoke websites
                            that reflect your brand identity and meet your unique requirements.</p>
                        <a href="/contact-us"><button className='d-none d-sm-block' >Contact us</button></a>
                    </div>
                    <div className="col-5 col-sm-6 col-md-6 col-lg-5 align-self-center custom-banner-image">
                        <img src="webdads/images/custom-web-design/img.png" alt="custom-web-design" loading='lazy' className='img-fluid' />
                    </div>
                </div>
            </div>
        </section>
        <Slider/>
        </>
    )
}

export default Customwebdesignbanner;