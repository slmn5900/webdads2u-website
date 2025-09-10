import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";

function UXdesign() {
    return (
        <section className='uxdesign-d-main'>
            <div className="container">
                <div className="row uxdesign-d">
                    <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
                        <h3>Essence of our UI/UX Design</h3>
                        <p className='text-justify mb-sm-1 mb-md-2 mb-lg-3'>Webdads2u, a leading UI/UX development company, focuses on creating a powerful business identity for clients through exceptional UI/UX design services. Our goal is to analyze the client’s business persona and align their objectives through robust UI/UX design and development.</p>
                        <p className='text-justify mb-sm-1 mb-md-2 mb-lg-3'>By incorporating bespoke UI/UX design into our product development process and ensuring superior code quality, we tailor design elements to meet the client’s business requirements while minimizing risks. Our top-notch designs are aimed at maximizing user engagement and driving business conversions.</p>
                        <ul className='p-0'>
                            <li> <FaCircleCheck className='icon-ui' /> Information Architecture</li>
                            <li> <FaCircleCheck className='icon-ui' /> User Experience (UX) Development</li>
                            <li> <FaCircleCheck className='icon-ui' /> User Interface (UI) Development</li>
                            <li> <FaCircleCheck className='icon-ui' /> Unique Design App Solutions</li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <img src="webdads/images/ui-ux/ipad.png" alt="ipad" loading='lazy' className='img-fluid' />
                        <img src="webdads/images/ui-ux/about_s4_bubble.png" alt="about_s4_bubble" loading='lazy' className='img-fluid img-2' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UXdesign;