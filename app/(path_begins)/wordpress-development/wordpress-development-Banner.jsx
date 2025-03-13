import React from 'react'

function WordpressDevelopmentBanner() {
  return (
    <section className='wordpressdevelopment-main'>
        <div className="container">
            <div className="row align-items-center wordpressdevelopment">
                <div className="col-7 col-sm-6 col-lg-7 align-self-lg-center">
                    <h1 className='text-start'>WordPress Development</h1>
                    <p>Building unique, industry-specific, custom-made web portals for
                    outstanding customer experience</p>
                    <a href="/contact-us"><button className='d-none d-sm-block'>Contact us</button></a>
                </div>
                <div className="col-5 col-sm-6 col-lg-5 align-self-center element-word-press">
                    {/* <img src="webdads/images/wordpress-development/W-Background.png" alt="W-Background" className='img-fluid' loading='lazy' /> */}
                    <img src="webdads/images/wordpress-development/Wordpress-logo.png" alt="Wordpress-logo" className='img-fluid img-wordpress-tow' loading='lazy' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default WordpressDevelopmentBanner