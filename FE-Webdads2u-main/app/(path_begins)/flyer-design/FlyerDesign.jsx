// "use client"
// import React from 'react'
// import FlyerHero from './FlyerHero'
// import "./flyerdesign.scss"
// import Flyergallery from './Flyergallery'
// import FlyerFaq from './FlyerFaq'
// const FlyerDesign = () => {
//   return (
//     <>
//         <FlyerHero />
//    <Flyergallery/>
//    <FlyerFaq />
//     </>
//   )
// }

// export default FlyerDesign


"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import './flyerdesign.scss';

// Dynamically import each component with SSR set to false
const FlyerHero = dynamic(() => import('./FlyerHero'), { ssr: false });
const Flyergallery = dynamic(() => import('./Flyergallery'), { ssr: false });
const FlyerFaq = dynamic(() => import('./FlyerFaq'), { ssr: false });

const FlyerDesign = () => {
  return (
    <>
      <FlyerHero />
      <Flyergallery />
      <FlyerFaq />
    </>
  );
}

export default FlyerDesign;
