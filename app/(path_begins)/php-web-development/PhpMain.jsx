"use client"
import React from 'react'
import './php-web-development.css'
import PhpWebDevelopmentBanner from './php-web-development-banner'
import Developmentcompanyinchennai from './Development-company-in-Chennai'
import Phpcardhover from './php-card-hover'
import Optforphp from './Opt-For-PHP'
import BenefitsofPHP from './Benefits-of-PHP'
import Newtechnologies from "./New-Technologies"
import Phpframeworks from './Php-Frameworks'
import Phpframeworkscard from './Php-Frameworks-card'
import Frequentlyphp from './Frequently-php'

const PhpMain = () => {
  return (
    <section>
      <PhpWebDevelopmentBanner />
      <Developmentcompanyinchennai />
      <Phpcardhover />
      <Optforphp />
      <BenefitsofPHP />
      {/* < /> */}
      <Newtechnologies />
      <Phpframeworks />
      <Phpframeworkscard />
      <Frequentlyphp />


    </section>
  )
}

export default PhpMain
