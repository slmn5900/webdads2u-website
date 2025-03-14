
// "use client"
// import React from 'react'
// import "./contentwriting.scss"
// import ContentwritingHero from './ContentwritingHero'
// const ContenetWriting = () => {
//   return (
//    <>
//     <ContentwritingHero/>
//    </>
//   )
// }

// export default ContenetWriting

"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import "./contentwriting.scss";

// Dynamically import the ContentwritingHero component with SSR set to false
const ContentwritingHero = dynamic(() => import('./ContentwritingHero'), {
  ssr: false
});

const ContenetWriting = () => {
  return (
    <>
      <ContentwritingHero />
    </>
  );
}

export default ContenetWriting;

