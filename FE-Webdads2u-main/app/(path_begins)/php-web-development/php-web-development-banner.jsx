import React from 'react'

function PhpWebDevelopmentBanner() {
  return (
    <section className='php-web-development-banner'>
        <div className="container">
            <div className="row php-banner">
                <div className="col-6 col-sm-6 col-md-6 col-lg-6 align-self-lg-center p-2">
                    <h1>Php Development</h1>
                    <p className='mb-0'>Webdads2u Technologies is best PHP web development company in Chennai, India. PHP is one of the most widely used general purpose 
                    </p>
                    <p className='p-0'>open-source scripting language which can be embedded into HTML and is especially suited to web development. </p>
                    <a href="/contact-us"><button className='d-none d-sm-block'>Contact us</button></a>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-6 align-self-center">
                    <img src="webdads/images/php-web-development/php.png" alt="pnp" loading='lazy' className='img-fluid' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default PhpWebDevelopmentBanner;