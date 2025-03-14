// "use client"
// import React from 'react'
// import CustomizedCrmhero from './CustomizedCrmhero'
// import "./customecrm.scss"
// import CustomizedcrmFaq from './CustomizedcrmFaq'
// const CustomizedCrm = () => {
//   return (
//     <>
//        <CustomizedCrmhero />
//        <CustomizedcrmFaq />
//     </>
//   )
// }

// export default CustomizedCrm

"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import "./customecrm.scss";

// Dynamically import the components with SSR set to false
const CustomizedCrmhero = dynamic(() => import('./CustomizedCrmhero'), { ssr: false });
const CustomizedcrmFaq = dynamic(() => import('./CustomizedcrmFaq'), { ssr: false });

const CustomizedCrm = () => {
  return (
    <>
      <CustomizedCrmhero />
      <CustomizedcrmFaq />
    </>
  );
}

export default CustomizedCrm;
