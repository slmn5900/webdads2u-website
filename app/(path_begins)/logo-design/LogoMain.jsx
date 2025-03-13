"use client"
import React from 'react'
import './logo-design.css'
import Fqlogodesign from './FQ-logo-design'
import SocialMedia from '../../../components/common/SocialMedia'
import TypesLogo from './Types-Logo'
import Logotimeline from './logo-time-line'
import Graphiclogodesign from './Graphic-Logo-Design'
import Professionalexperienced from './Professional-Experienced'
import Companybigbrand from './Company-Big-Brand'
import Logodesigncard from './logo-design-card'
import Designcompanybrand from './Design-Company-Brand'
import Logodesignbanner from './logo-design-banner'
import Logodesignslider from './logo-design-slider'

const LogoMain = () => {
  return (
    <div>
      <Logodesignbanner/>
      <Designcompanybrand/>
      <Logodesigncard/>
      <Companybigbrand/>
      <Logodesignslider/>
      <Professionalexperienced/>
      <Graphiclogodesign/>
      <Logotimeline/>
      <TypesLogo/>
      <SocialMedia/>
      <Fqlogodesign/>
    </div>
  )
}

export default LogoMain
