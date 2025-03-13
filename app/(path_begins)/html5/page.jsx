"use client"
import React from 'react'
import'./HTML5.css'
import Htmlbanner from './Html-banner'
import AdvantagesofHTML from './Advantages-of-HTML'
import BenefitsofUsingHTML5 from './Benefits-of-Using-HTML5'
import Technicalstack from './Technical-Stack'
import SocialMedia from './../../../components/common/SocialMedia'
import Html5webdevelopment from './html5-web-development'
import Webmobile from './Web-&-Mobile'

const page = () => {
  return (
    <div>
      <Htmlbanner />
      <AdvantagesofHTML />
      <BenefitsofUsingHTML5 />
      <Technicalstack />
      <SocialMedia />
      <Html5webdevelopment />
      <Webmobile />
    </div>
  )
}

export default page;
