import React from 'react'


function Customwebdevelopmentbanner() {
  return (
    <section className='customwebdevelopmentbanner-main'>
        <div className="container">
            <div className="row customwebdevelopmentbanner align-items-start">
                <div className="col-8 col-sm-6 col-md-7 col-lg-6 ">
                    <h1>Custom Web Development</h1>
                    <p>Your digital potential with our custom web development solutions. Tailored to your unique needs, our expert team will craft a stunning website that drives results and exceeds expectations!</p>
                    <a href="/contact-us"><button className='d-none d-sm-block'>Contact us</button></a>
                </div>
                <div className="col-4 col-sm-5 col-md-5 col-lg-6 align-self-center"> 
                    <img src="webdads/images/custom-web-development/Web-Portal-Development.png" alt="Web-Portal-Development" loading='lazy' className='img-fluid' />
                </div>
            </div>    
        </div>    
    </section>
  )
}

export default Customwebdevelopmentbanner;