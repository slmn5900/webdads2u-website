import React from 'react'
import Slider from '../../../components/common/Slider-image'

function Ecommerceseoservicebanner() {
  return (
    <>
    <section className='ecommerceseoservicebanner-main'>
      <div className="container">
        <div className="row ecommerceseoservicebanner">
          <div className="col-6 col-sm-6 col-md-6 col-lg-6 align-self-lg-center">
            <h1>E-Commerce SEO
              Services</h1>
            <p>We are an award winning e-commerce SEO specialized platform,
              popular choice amongst the e-commerce giants to drive sales
              by organic searches .</p>
            <button className='d-none d-sm-block'>Contact us</button>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-6 align-selg-center">
            <img src="webdads/images/e-commerce-seo-service/Banner-img.png" alt="Banner-img" loading='lazy' className='img-fluid' />
          </div>
        </div>
      </div>
    </section>
    <Slider />
    </>
  )
}

export default Ecommerceseoservicebanner;