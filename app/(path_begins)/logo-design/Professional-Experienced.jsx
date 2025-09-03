import React from 'react';
import { HiLightBulb } from 'react-icons/hi'; 
import { IoDiamondOutline } from "react-icons/io5";
import { RiTeamLine } from "react-icons/ri";

function ProfessionalExperienced() {
    return (
        <section className='professionalexperienced-main'>
            <div className="container">
                <div className="row professionalexperienced">
                    <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
                        <img 
                            src="webdads/images/logo-design/Professional.png" 
                            alt="Professional" 
                            loading='lazy' 
                            className='img-fluid' 
                        />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <h4>Professional, Experienced and Affordable</h4>
                        <p>WebDads2U offers professional, experienced, and affordable logo design services tailored to your brand’s unique identity. Our skilled designers craft compelling logos that resonate with your audience, ensuring your business stands out.</p>
                        
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <HiLightBulb className='pe-icons'/>
                                <h2>Creative</h2>
                                <p>Elevate your brand with our innovative logo design solutions, crafted to captivate your audience and leave a lasting impression.</p>
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-6">
                            <IoDiamondOutline className='pe-icons'/>
                                <h2>Prestigious</h2>
                                <p>Experience the epitome of elegance and professionalism with our bespoke logo designs, tailored to reflect your brand&apos;s prestigious identity and values.</p>
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-6">
                            <RiTeamLine className='pe-icons'/>
                                <h2>Communicative</h2>
                                <p>Crafting impactful visuals to resonate your brand&apos;s message and identity with precision and creativity.</p>
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <HiLightBulb className='pe-icons'/>
                                <h2>Support</h2>
                                <p>Support Your Business with Stunning Logo Design from WebDads2U. Elevate Your Brand Identity Today with Our Expert Creations.</p>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProfessionalExperienced;
