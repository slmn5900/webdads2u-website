import React from 'react'

function Htmlbanner() {
    return (
        <section className='htmlbanner-main'>
            <div className="container">
                <div className="row htmlbanner">
                    <div className="col-7 col-sm-6 col-md-6 col-lg-6 align-self-center">
                        <h1>Are You Looking For <br className='d-none d-sm-block'/>
                         HTML Web Design </h1>
                        <p>With our best html5 web development services, Webdads2u
                            is able to take on any size web development project or
                            challenge and get it delivered in HTML5.</p>
                        <a href="/contact-us"><button className='d-none d-sm-block'>Contact us</button></a>
                    </div>
                    <div className="col-5 col-sm-6 col-md-6 col-lg-6 align-self-center">
                        <img src="webdads/images/HTML5/html-banner-avatar.png" alt="html-banner-avatar" loading='lazy' className='img-fluid' />

                        <div>
                        <img src="webdads/images/HTML5/html-slider-bootstrap-icon.png" alt="html-banner-avatar" loading='lazy' className='img-fluid bootstrap' />
                        <img src="webdads/images/HTML5/html-slider-css-icon.png" alt="html-banner-avatar" loading='lazy' className='img-fluid css' />
                        <img src="webdads/images/HTML5/html-slider-html-icon.png" alt="html-banner-avatar" loading='lazy' className='img-fluid html' />
                        <img src="webdads/images/HTML5/html-slider-javascript-icon.png" alt="html-banner-avatar" loading='lazy' className='img-fluid js' />
                        <img src="webdads/images/HTML5/html-slider-php-icon.png" alt="html-banner-avatar" loading='lazy' className='img-fluid php' />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Htmlbanner;