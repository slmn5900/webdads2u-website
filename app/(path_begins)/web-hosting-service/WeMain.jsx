"use client"
import React from 'react'
import'./web-hosting-service.css'
import Webhostingservice from './web-hosting-service'
import Webhosting from './Web-Hosting'
import Webhostingplatform from './Web-Hosting-Platform'
import SocialMedia from '../../../components/common/SocialMedia'
import Ourplatform from './Our-platform'
import Lookingforwebhostingservices from './Looking-for-Web-Hosting-Services'
import FQhosting from './FQ-hosting'

const WebMain = () => {
  return (
    <div>
      <Webhostingservice />
      <Webhosting />
      <Webhostingplatform />
      <SocialMedia />
      <Ourplatform />
      <Lookingforwebhostingservices />
      <FQhosting />


    </div>
  )
}

export default WebMain
