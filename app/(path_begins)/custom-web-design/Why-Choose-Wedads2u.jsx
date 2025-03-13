import React from 'react'
import { LuCheckCircle } from "react-icons/lu";

function Whychoosewedads2u() {
  return (
    <section className='whychoosewedads2u-main'>
        <div className="container">
            <div className="row whychoosewedads2u">
                <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
                    <img src="webdads/images/custom-web-design/Why-Choose-Wedads2u-for-Custom-Web-Design-Services.png" alt="Why-Choose-Wedads2u-for-Custom-Web-Design-Services" loading='lazy' className='img-fluid'/>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 align-self-lg-center">
                    <h4 className='mb-2'>Why Choose Wedads2u for Custom Web Design Services?</h4>
                    <p className='mb-sm-1 mb-md-2 mb-lg-3'>Our web designers at Webdads work tirelessly to ensure that our clients’ expectations are met, using a team of highly professional and experienced web designers.</p>
                    <ul className='p-0'>
                        <li><LuCheckCircle className='checkbox-icon' />Experienced and skilled team.</li>
                        <li><LuCheckCircle className='checkbox-icon' />Seamless transparent communication.</li>
                        <li><LuCheckCircle className='checkbox-icon' />Client-centric approach.</li>
                        <li><LuCheckCircle className='checkbox-icon' />Flexible hiring models.</li>
                        <li><LuCheckCircle className='checkbox-icon' />Quality results at affordable prices.</li>
                        <li><LuCheckCircle className='checkbox-icon' />Data security with signed NDA.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Whychoosewedads2u;