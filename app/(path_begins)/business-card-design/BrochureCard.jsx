// "use client"
// import React from 'react'
// import BusinesscardHero from './BusinesscardHero'
// import "./businesscard.scss"
// import BusinessFaq from './BusinessFaq'
// const BrochureCard = () => {
//   return (
//     <>
//     <BusinesscardHero />
//     <BusinessFaq />
//     </>
//   )
// }

// export default BrochureCard

"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import "./businesscard.scss";

// Dynamically import the components with SSR set to false
const BusinesscardHero = dynamic(() => import('./BusinesscardHero'), {
  ssr: false
});

const BusinessFaq = dynamic(() => import('./BusinessFaq'), {
  ssr: false
});

const BrochureCard = () => {
  return (
    <>
      <BusinesscardHero />
      <BusinessFaq />
    </>
  );
}

export default BrochureCard;

