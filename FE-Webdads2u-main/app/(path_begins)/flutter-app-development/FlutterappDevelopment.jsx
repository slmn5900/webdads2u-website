// "use client"

// import React from 'react'
// import FlutterappHero from './FlutterappHero'
// import "./flutterapp.scss"
// import FlutterFaq from './FlutterFaq'
// const FlutterappDevelopment = () => {
//   return (
//     <>
//          <FlutterappHero />
//          <FlutterFaq />
//     </>
//   )
// }

// export default FlutterappDevelopment


"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import "./flutterapp.scss";

// Dynamically import the components with SSR set to false
const FlutterappHero = dynamic(() => import('./FlutterappHero'), { ssr: false });
const FlutterFaq = dynamic(() => import('./FlutterFaq'), { ssr: false });

const FlutterappDevelopment = () => {
  return (
    <>
      <FlutterappHero />
      <FlutterFaq />
    </>
  );
}

export default FlutterappDevelopment;
