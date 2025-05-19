// "use client"
// import React from 'react'
// import WebportalHero from './WebportalHero'
// import "./webportal.scss"
// const WebportalDevelopment = () => {
//   return (
//     <>
//      <WebportalHero /> 
//     </>
//   )
// }

// export default WebportalDevelopment

"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import './webportal.scss';

// Dynamically import WebportalHero with SSR set to false
const WebportalHero = dynamic(() => import('./WebportalHero'), { ssr: false });

const WebportalDevelopment = () => {
  return (
    <>
      <WebportalHero />
    </>
  );
}

export default WebportalDevelopment;
