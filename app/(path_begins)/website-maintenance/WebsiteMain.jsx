"use client"
import React from 'react'
import './Fq-website-maintenance.css'
import Fqwebsitemaintenance from './Fq-website-maintenance'
import Lookingwebsitemaintenance from './Looking-Website-Maintenance'
import Benefitsselecting from './Benefits-Selecting'
import SocialMedia from '../../../components/common/SocialMedia'
import Webmaintenanceservices from './Web-Maintenance-Services'
import Websitemaintenancecompany from './website-maintenance-company'
import Websitemaintenancebanner from './website-maintenancebanner'
import Benefitsselectingcard from './Benefitsselecting-card'

const WebsiteMain = () => {
  return (
    <div>
      < Websitemaintenancebanner/>
      <Websitemaintenancecompany />
      <Webmaintenanceservices />
      <SocialMedia />
      <Benefitsselecting />
      <Benefitsselectingcard/>
      <Lookingwebsitemaintenance/>
      <Fqwebsitemaintenance/>
    </div>
  )
}

export default WebsiteMain
