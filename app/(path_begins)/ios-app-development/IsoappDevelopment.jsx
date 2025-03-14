// "use client"
// import React from 'react'
// import IsoappHero from './IsoappHero'
// import "./isoapp.scss"
// import IsoappFaq from './IsoappFaq'
// function IsoappDevelopment() {
//     return (
//      <>
//       <IsoappHero />
//       <IsoappFaq />
//      </>   
//     )
// }

// export default IsoappDevelopment


"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import './isoapp.scss';

// Dynamically import the components with SSR set to false
const IsoappHero = dynamic(() => import('./IsoappHero'), { ssr: false });
const IsoappFaq = dynamic(() => import('./IsoappFaq'), { ssr: false });

function IsoappDevelopment() {
    return (
     <>
      <IsoappHero />
      <IsoappFaq />
     </>   
    );
}

export default IsoappDevelopment;
