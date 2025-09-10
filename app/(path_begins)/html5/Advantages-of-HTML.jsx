import React from 'react'
import { IoIosCheckbox } from "react-icons/io";

function AdvantagesofHTML() {
    return (
        <section className='advantagesofHTML-main'>
            <div className="container">
                <div className="row text-center advantagesofHTML-header">
                    <div className="col-sm-12 col-md-12 col-lg-12 advantagesofHTML-header">
                        <h2>Advantages of HTML 5 Web Design</h2>
                        <p>HTML5 was created to meet the internet’s needs, despite not being fully adopted yet. Below are the benefits and reasons for including it.</p>
                    </div>
                </div>
                <div className="row text-center advantagesofHTML">
                    <div className="col-sm-12 col-md-4 col-lg-4 align-self-center">
                        <ul>
                            <li> <IoIosCheckbox className='react-icon-item' />
                                Clean and neat coding</li>
                            <li> <IoIosCheckbox className='react-icon-item'/>
                                Elegant form fields and GEO location API possibilities</li>
                            <li> <IoIosCheckbox className='react-icon-item'/>
                                Easy to learn and implement</li>
                            <li> <IoIosCheckbox className='react-icon-item'/>
                                Consistency in layout and easy understanding</li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <img src="webdads/images/HTML5/Mob.png" alt="img" loading='lazy' className='img-fluid' />
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 align-self-center">
                        <ul>
                            <li> <IoIosCheckbox className='react-icon-item'/>
                                Clean and neat coding</li>
                            <li> <IoIosCheckbox className='react-icon-item'/>
                                Elegant form fields and GEO location API possibilities</li>
                            <li> <IoIosCheckbox className='react-icon-item'/>
                                Easy to learn and implement</li>
                            <li> <IoIosCheckbox className='react-icon-item'/>
                                Consistency in layout and easy understanding</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdvantagesofHTML