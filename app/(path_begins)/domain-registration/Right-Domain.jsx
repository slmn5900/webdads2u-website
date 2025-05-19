import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

function Rightdomain() {
    return (
        <section className="rightdomain-main">
            <div className="container">
                <div className="row rightdomain">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <img src="webdads/images/domain-registration/choose-domain.png" alt="choose-domain" loading="lazy" className="img-fluid" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
                        <h5>How To Choose The Right Domain</h5>
                        <p>Our experts put together these helpful tips for picking the perfect domain.</p>
                        <ul className="p-0">
                            <li>
                                {' '}
                                <FaCheckCircle className="item-icon" /> Keep your name easy to remember
                            </li>
                            <li>
                                {' '}
                                <FaCheckCircle className="item-icon" /> Choose a name that fits your brand
                            </li>
                            <li>
                                {' '}
                                <FaCheckCircle className="item-icon" /> Register alternative TLDs for brand protection
                            </li>
                            <li>
                                {' '}
                                <FaCheckCircle className="item-icon" /> Register common domain misspellings
                            </li>
                        </ul>
                        <a href="contact-us" style={{ textDecoration: 'none' }}>
                            <button>Contact us</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Rightdomain;
