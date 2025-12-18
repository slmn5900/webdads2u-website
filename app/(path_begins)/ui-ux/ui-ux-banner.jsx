import React from 'react'
import Slider from '../../../components/common/Slider-image'


function Uiuxbanner() {
    return (
      <>
        <section className='uiuxbanner-main'>
            <div className="container">
                <div className="row uiuxbanner">
                    <div className="col-7 col-sm-6 col-md-6 col-lg-6 align-self-lg-center">
                        <h1>UI/UX Development</h1>
                        <p>Elevate your online presence with our professional UI/UX design
                            services. Engage users, increase conversions, and stand out from the
                            competition!</p>
                        <a href="/contact-us"><button className=''>Contact us</button></a>
                    </div>
                    <div className="col-5 col-sm-6 col-md-6 col-lg-6 align-self-center">
                        <img src="webdads/images/ui-ux/banner.png" alt="banner" loading='lazy' className='img-fluid' />
                    </div>
                </div>
            </div>
        </section>
        <Slider />
        </>

    )
}

export default Uiuxbanner;
