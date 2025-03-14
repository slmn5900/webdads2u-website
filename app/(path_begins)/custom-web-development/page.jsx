"use client"
import React from 'react'
import './Customwebdevelopment.css'
import Customwebdevelopmentbanner from './custom-web-development-banner'
import Customwebsite from './Custom-Website'
import Createinteractive from './Create-interactive'
import Customwebsitedevelopment from './Custom-Website-Development'
import Scalableweb from './Scalable-Web'
import Customwebdevelopmentservices from './Custom Web-Development-Services'
import Lookingforcustomwebsite from './Looking-for-Custom-Website'
import Frequentlyaskedquestionscustomwebsite from './Frequently-Asked-Questions-Custom-Website'
import SocialMedia from '../../../components/common/SocialMedia'

const page = () => {
  return (
    <section>
      <Customwebdevelopmentbanner />
      <Customwebsite />
      <Createinteractive />
      <Customwebsitedevelopment />
      <Scalableweb />
      <SocialMedia />
      <Customwebdevelopmentservices />
      <Lookingforcustomwebsite />
      <Frequentlyaskedquestionscustomwebsite />
    </section>
  )
}

export default page
