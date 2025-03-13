/* eslint-disable react/no-unescaped-entities */
import React from 'react'

function Webhostingplatform() {
  return (
    <section className='webhostingplatform-main'>
        <div className="container">
            <div className="row text-center webhostingplatform">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <h3>Web Hosting Platform</h3>
                </div>
            </div>
            <div className="row text-center webhostingplatform">
                <div className="col-sm-12 col-md-4 col-lg-4 p-2">
                    <div className="webhostingplatform-img">
                        <img src="webdads/images/web-hosting-service/999-Uptime-Guarantee.png" alt="999-Uptime-Guarantee" loading='lazy' className='img-fluid' />
                    </div>
                    <div className="text-area">
                        <h4>99.9% Uptime Guarantee</h4>
                        <p>Reliable web hosting with a 99.9% uptime guarantee ensures uninterrupted access for your audience.</p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 p-2">
                    <div className="webhostingplatform-img">
                        <img src="webdads/images/web-hosting-service/Safe-and-Secured.png" alt="Safe-and-Secured" loading='lazy' className='img-fluid' />
                    </div>
                    <div className="text-area">
                        <h4>Safe and Secured</h4>
                        <p>Protect your online presence with our robust security measures, keeping your data and customers' information safe and secure</p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 p-2">
                    <div className="webhostingplatform-img">
                        <img src="webdads/images/web-hosting-service/Our-Dedicated-Support.png" alt="Our-Dedicated-Support" loading='lazy' className='img-fluid' />
                    </div>
                    <div className="text-area">
                        <h4>Our Dedicated Support</h4>
                        <p>Enjoy personalized and round-the-clock support from our team, ensuring seamless web hosting experience.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Webhostingplatform;