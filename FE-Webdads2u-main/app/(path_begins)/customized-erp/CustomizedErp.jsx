// "use client"
// import React from 'react'
// import CustomerpHero from '../customized-erp/CustomerpHero'

// import "./customeerp.scss"
// import CustomerpFaq from './CustomerpFaq'
// const CustomizedErp = () => {
//   return (
//     <>
    
//     <CustomerpHero />
//     <CustomerpFaq />
//     </>
//   )
// }

// export default CustomizedErp


"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import "./customeerp.scss";

// Dynamically import components with SSR set to false
const CustomerpHero = dynamic(() => import('../customized-erp/CustomerpHero'), { ssr: false });
const CustomerpFaq = dynamic(() => import('./CustomerpFaq'), { ssr: false });

const CustomizedErp = () => {
  return (
    <>
      <CustomerpHero />
      <CustomerpFaq />
    </>
  );
}

export default CustomizedErp;

