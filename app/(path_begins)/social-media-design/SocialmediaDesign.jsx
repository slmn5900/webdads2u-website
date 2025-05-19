// "use client"
// import React from 'react'
// import SocialmediaHero from './SocialmediaHero'
// import "./socialmediadesign.scss"
// import SocialmediaGallery from './SocialmediaGallery'
// import SocialMedia from '../../../components/common/SocialMedia';
// import SocialmediaFaq from './SocialmediaFaq'


// const SocialmediaDesign = () => {
//   return (
//     <>
//        <SocialmediaHero/>
//     <SocialmediaGallery />
//     <SocialMedia />
//     <SocialmediaFaq/>
//     </>
//   )
// }

// export default SocialmediaDesign


"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import "./socialmediadesign.scss";

// Dynamically import components with SSR set to false
const SocialmediaHero = dynamic(() => import('./SocialmediaHero'), { ssr: false });
const SocialmediaGallery = dynamic(() => import('./SocialmediaGallery'), { ssr: false });
const SocialMedia = dynamic(() => import('../../../components/common/SocialMedia'), { ssr: false });
const SocialmediaFaq = dynamic(() => import('./SocialmediaFaq'), { ssr: false });

const SocialmediaDesign = () => {
  return (
    <>
      <SocialmediaHero />
      <SocialmediaGallery />
      <SocialmediaFaq />
      <SocialMedia />
    </>
  );
}

export default SocialmediaDesign;
