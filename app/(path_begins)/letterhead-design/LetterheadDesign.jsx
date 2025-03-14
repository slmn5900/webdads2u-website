// "use client"
// import React from 'react'
// import LetterheadHero from './LetterheadHero'
// import "./letterhead.scss"
// import LetterheadFaq from './LetterheadFaq'
// const LetterheadDesign = () => {
//   return (
//     <>
//        <LetterheadHero/>
//        <LetterheadFaq />
//     </>
//   )
// }

// export default LetterheadDesign


"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import './letterhead.scss';

// Dynamically import each component with SSR set to false
const LetterheadHero = dynamic(() => import('./LetterheadHero'), { ssr: false });
const LetterheadFaq = dynamic(() => import('./LetterheadFaq'), { ssr: false });

const LetterheadDesign = () => {
  return (
    <>
      <LetterheadHero />
      <LetterheadFaq />
    </>
  );
}

export default LetterheadDesign;
