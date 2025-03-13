"use client"
import React from 'react'
import './local-seo-service.css'
import FQlocalseoservice from './FQ-local-seo-service'
import LookingEcommerceSEO from './Looking-E-commerce-SEO'
import LocalSEOcompany from './Local-SEO-Company'
import SocialMedia from '../../../components/common/SocialMedia'
import Whyseo from './why-seo'
import SEOservicesindia from './SEO-Services-India'
import Localseoservicesinclude from './Local-Seo-services-Include'
import Localseoservicebanner from './local-seo-service-banner'

const LocalMain = () => {
  return (
    <div>
      <Localseoservicebanner />
      <SEOservicesindia />
      <Whyseo />
      <Localseoservicesinclude />
      <SocialMedia />
      <LocalSEOcompany />
      <LookingEcommerceSEO />
      <FQlocalseoservice />
    </div>
  )
}

export default LocalMain;
