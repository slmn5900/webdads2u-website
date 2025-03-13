import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import '../../style/common/socialmedia.scss'

function SocialMedia() {
    return (
        <section className='SocialMedia-banner bg-black bg-opacity-25'>
            <div className="container">
                <div className="row content SocialMedia-header">
                    <div className="col-sm-12 col-md-12 col-lg-12 text-center">
                        <h1>Connect with Us on Social Media</h1>
                        <p>Stay in the loop with the latest trends and updates from WebDads2U. Follow our social media channels for insightful content, tips, and exciting announcements</p>
                    </div>
                </div>
                <div className="row SocialMedia-icons-items">
                    <div className="col-xs-12 col-md-4 col-lg-4 align-self-center text-end">
                    <img src="/webdads/images/common/social-arrow.svg" alt="svgviewer-png-output" loading='lazy'  className='img-fluid ' /> 
                    </div>
                    <div className="col-xs-12 col-md-4 col-lg-4 d-flex justify-content-center">
                        <li><a href="/"><FaFacebookF className='icon-social-media' /></a></li>
                        <li><a href="/"><FaTwitter className='icon-social-media' /></a></li>
                        <li><a href="/"><FaYoutube className='icon-social-media' /></a></li>
                        <li><a href="/"><IoLogoInstagram className='icon-social-media' /></a></li>
                    </div>
                    <div className="col-xs-12 col-md-4 col-lg-4 align-self-center">
                    <img src="/webdads/images/common/social-arrow.svg" alt="svgviewer-png-output" loading='lazy'  className='img-fluid'/>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default SocialMedia