"use client"
import React from 'react'
import './ppc-service.css'
import Ppcservicebanner from './ppc-service-banner'
import Fqppcservice from './Fq-ppc-service'
import PPCservicesindia from './PPC Services-India'
import SocialMedia from '../../../components/common/SocialMedia'
import Payperclick from './Pay-Per-Click'
import Promotewebdads2uppc from './Promote-webdads2u-PPC'
import WhatarePPCServices from './What-are-PPC-Services'
import Ppcgoogle from './PPC-Google'

const PccMain = () => {
  return (
    <div>
      <Ppcservicebanner />
      <WhatarePPCServices />
      <Ppcgoogle />
      <Promotewebdads2uppc />
      <Payperclick />
      <SocialMedia />
      <PPCservicesindia />
      <Fqppcservice />
    </div>
  )
}

export default PccMain