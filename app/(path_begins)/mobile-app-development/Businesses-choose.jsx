import React from 'react'
import { FaDotCircle } from "react-icons/fa";

function Businesseschoose() {
    return (
        <section className='businesseschoose-main'>
            <div className="container">
                <div className="row businesseschoose">
                    <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
                        <h1>Why do Businesses choose us
                            for Mobile App Development ?</h1>
                        <div className="d-flex flex-column mb-3 businesseschoose-item">
                            <div className="p-2 item"> <FaDotCircle className='item-icon' /> Serve across Industries</div>
                            <div className="p-2 item"> <FaDotCircle className='item-icon' /> App for Different iOS</div>
                            <div className="p-2 item"> <FaDotCircle className='item-icon' /> Agile Development Process</div>
                            <div className="p-2 item"> <FaDotCircle className='item-icon' /> Flexible Engagement Models</div>
                            <div className="p-2 item"> <FaDotCircle className='item-icon' /> Dedicated App Development Teams</div>
                            <div className="p-2 item"> <FaDotCircle className='item-icon' /> Affordable Pricing</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <img src="webdads/images/mobile-app-development/banner.png" alt="banner" className='img-fluid'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Businesseschoose