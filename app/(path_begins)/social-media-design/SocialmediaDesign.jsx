"use client"
import React from 'react'
import SocialmediaHero from './SocialmediaHero'
import "./socialmediadesign.scss"
import SocialmediaGallery from './SocialmediaGallery'
import SocialMedia from '../../../components/common/SocialMedia';
import SocialmediaFaq from './SocialmediaFaq'


const SocialmediaDesign = () => {
  return (
    <>
       <SocialmediaHero/>
    <SocialmediaGallery />
    <SocialMedia />
    <SocialmediaFaq/>
    </>
  )
}

export default SocialmediaDesign
