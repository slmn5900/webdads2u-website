"use client"
import React from 'react'
import './link-building-service.css'
import Fqlinkbuildingservice from './Fq-link-building-service'
import Lookinglinkbuilding from './Looking-Link-Building'
import Webdadlinkbuilding from './Webdad-Link-Building'
import SocialMedia from '../../../components/common/SocialMedia'
import Domainauthorityimprovements from './Domain-authority-improvements'
import Improvedkeywordrankings from './Improved-keyword-rankings'
import Increasedwebsitetraffic from './Increased-website-traffic'
import Powerfulwhitehat from './Powerful-Whitehat'
import Buildingimportant from './Building-Important'
import Linkbuildingservicebanner from './link-building-service-banner'

const LinkMain = () => {
  return (
    <div>
      <Linkbuildingservicebanner/> 
      <Powerfulwhitehat/> 
      <Buildingimportant/> 
      <Increasedwebsitetraffic/> 
      <Improvedkeywordrankings/> 
      <Domainauthorityimprovements/>
      <SocialMedia/>
      <Webdadlinkbuilding/>
      <Lookinglinkbuilding/>
      <Fqlinkbuildingservice/>
    </div>
  )
}

export default LinkMain
