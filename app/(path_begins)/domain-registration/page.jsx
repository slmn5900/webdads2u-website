"use client"
import React from 'react'
import './domainregistration.css'
import Domainregistrationbanner from './domain-registration-banner'
import Amplifyingyouronline from './Amplifying-Your-Online'
import Domainname from './Domain-Name'
import Comprehensivedigital from './Comprehensive-Digital'
import SocialMedia from '../../../components/common/SocialMedia'
import Rightdomain from './Right-Domain'
import Lookingdomain from './Looking-Domain'
import Fqdomainregistration from './Fq-domain-registration'

const page = () => {
  return (
    <div>
      <Domainregistrationbanner />
      <Amplifyingyouronline />
      <Domainname />
      <Comprehensivedigital />
      <SocialMedia />
      <Rightdomain />
      <Lookingdomain />
      <Fqdomainregistration />
    </div>
  )
}

export default page
