import React from 'react'
import Slider from '../../../components/common/Slider-image'

function Webhostingservice() {
  return (
    <>
    <section className='webhostingservice-banner'>
        <div className="container">
            <div className="row justify-content-between webhostingservice">
                <div className="col-6 col-sm-6 col-md-6 col-lg-5 pt-5 align-self-lg-center">
                    <h1>Web Hosting <br />
                    Development</h1>
                    <p>At Webdads2u, we are offering open-source CRM as well as
                    cloud-based CRM and CRM apps for every business.</p>
                    <a href="/contact-us"><button className='d-none d-sm-block'>Contact us</button></a>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-6 align-self-center">
                    <img src="webdads/images/web-hosting-service/Img.png" alt="Img" loading='lazy' className='img-fluid' />
                </div>
            </div>
        </div>
    </section>
    <Slider />
    </>
  )
}

export default Webhostingservice;