"use client"
import React from 'react'
import './custom-web-design.css'
import Customwebdesignbanner from './custom-web-design-banner'
import Whywebdads2u from './Why-Webdads2u'
import Customwebdesignservices from './Custom-Web-Design-Services'
import SocialMedia from '../../../components/common/SocialMedia'
import Whychoosewedads2u from './Why-Choose-Wedads2u'
import Lookingforcustomwebdesign from './Looking-for-Custom-Web-Design'
import FQcustomwebdesign from './FQcustom-web-design'
import Loader from '../../../components/Loader'
import CustomTabPanel from "../../../components/CustomTabPanel"

const page = () => {
  return (
    <div>
      <Customwebdesignbanner />
      <Whywebdads2u />
      <Customwebdesignservices />
      <SocialMedia />
      <Whychoosewedads2u />
      <Lookingforcustomwebdesign />
      {/* < Loader/> */}
      <CustomTabPanel />
      <FQcustomwebdesign />
    </div>
  )
}

export default page
