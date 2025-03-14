// "use client"
// import React from 'react'
// import ReactnativeHero from './ReactnativeHero'
// import "./reactnative.scss"
// import ReactnativeFaq from './ReactnativeFaq'
// const ReactnativeApp = () => {
//   return (
//     <>
//       <ReactnativeHero />
//       <ReactnativeFaq />
//     </>
//   )
// }

// export default ReactnativeApp


"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import "./reactnative.scss";

// Dynamically import components with SSR set to false
const ReactnativeHero = dynamic(() => import('./ReactnativeHero'), { ssr: false });
const ReactnativeFaq = dynamic(() => import('./ReactnativeFaq'), { ssr: false });

const ReactnativeApp = () => {
  return (
    <>
      <ReactnativeHero />
      <ReactnativeFaq />
    </>
  );
}

export default ReactnativeApp;
