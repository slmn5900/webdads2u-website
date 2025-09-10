// "use client"
// import React from 'react'
// import BrochuredesignHero from './BrochuredesignHero'
// import "./brochuredesign.scss"
// const BrochureDesign = () => {
//   return (
//     <>
//      <BrochuredesignHero/>
//     </>
//   )
// }

// export default BrochureDesign

"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import "./brochuredesign.scss";

// Dynamically import the BrochuredesignHero component with SSR set to false
const BrochuredesignHero = dynamic(() => import('./BrochuredesignHero'), {
  ssr: false
});

const BrochureDesign = () => {

  
  return (
    <>
      <BrochuredesignHero />
    </>
  );
}

export default BrochureDesign;
