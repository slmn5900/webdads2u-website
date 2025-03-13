"use client"
import React from 'react'
import './digital-marketing-agency.css'
import Fqdigitalmarketingagency from './FQdigital-marketing-agency'
import SocialMedia from '../../../components/common/SocialMedia'
import Socialmediamarketing from './Social-Media-Marketing'
import Socialmediamarketingtwo from './Social-Media-Marketing-two'
import Inorganicdigitalmarketing from './Inorganic-Digital-Marketing'
import Digitalmarketingactivities from './Digital-Marketing-Activities'
import Digitalmarketingstrategy from './Digital-Marketing-Strategy'
import Digitalmarketingagencybanner from './digital-marketing-agency-banner'
import Advantagesgoogleanalytics from './Advantages-Google-Analytics'
import Digitalmarketingagencycounter from './digital-marketing-agency-counter'

const page = () => {
  return (
    <div>
      <Digitalmarketingagencybanner/>
      <Digitalmarketingagencycounter/>
      <Digitalmarketingstrategy/>
      <Digitalmarketingactivities/>
      <Inorganicdigitalmarketing/>
      <Socialmediamarketingtwo/>
      <Advantagesgoogleanalytics/>
      <Socialmediamarketing/>
      <SocialMedia/>
      <Fqdigitalmarketingagency/>
    </div>
  )
}

export default page
