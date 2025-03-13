"use client"
import React from 'react'
import './react-js-development.css'
import ReactjsDevelopmentBanner from './react-js-development-banner'
import BestReactJS from './Best-React-JS'
import AngularJS from './Angular-JS'
import FrequentlyAskedQuestions from './Frequently-Asked-Questions'
import LookingforReact from './Looking-for-React'
import Libraries from './Libraries'
import ReactjsFeatures from './Reactjs-Features'
import BenefitsofReactjs from './Benefits-of-Reactjs'
import SocialMedia from '../../../components/common/SocialMedia'
const ReactMain = () => {
  return (
    <div>
      <ReactjsDevelopmentBanner />
      <BestReactJS />
      <AngularJS />
      <BenefitsofReactjs />
      <ReactjsFeatures/>
      <SocialMedia />
      <Libraries/>
      <LookingforReact/>
      <FrequentlyAskedQuestions/>
    </div>
  )
}

export default ReactMain
  