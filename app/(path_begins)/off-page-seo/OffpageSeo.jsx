
// "use client"
// import React from 'react'
// import OffpageseoHero from './OffpageseoHero'
// import "./offpageseo.scss"
// const OffpageSeo = () => {
//   return (
//     <>
//        <OffpageseoHero/>
//     </>
//   )
// }

// export default OffpageSeo

"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import "./offpageseo.scss";

// Dynamically import the OffpageseoHero component with SSR set to false
const OffpageseoHero = dynamic(() => import('./OffpageseoHero'), { ssr: false });

const OffpageSeo = () => {
  return (
    <>
      <OffpageseoHero />
    </>
  );
}

export default OffpageSeo;
