"use client"
import React from 'react'
import FlyerHero from './FlyerHero'
import "./flyerdesign.scss"
import Flyergallery from './Flyergallery'
import FlyerFaq from './FlyerFaq'
const FlyerDesign = () => {
  return (
    <>
        <FlyerHero />
   <Flyergallery/>
   <FlyerFaq />
    </>
  )
}

export default FlyerDesign
