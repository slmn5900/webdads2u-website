// "use client"
// import React from 'react'
// import MobileuiuxHero from './MobileuiuxHero'
// import "./mobileuiux.scss"
// import MobileuiuxFaq from './MobileuiuxFaq'
// const MobileappUiux = () => {
//   return (
//     <>
//      <MobileuiuxHero />
//      <MobileuiuxFaq />  
//     </>
//   )
// }

// export default MobileappUiux


"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import "./mobileuiux.scss";
<<<<<<< HEAD

=======
import SocialMedia from '../../../components/common/SocialMedia';
>>>>>>> 6010d3c (Add new features and updates)
// Dynamically import components with SSR set to false
const MobileuiuxHero = dynamic(() => import('./MobileuiuxHero'), { ssr: false });
const MobileuiuxFaq = dynamic(() => import('./MobileuiuxFaq'), { ssr: false });

const MobileappUiux = () => {
  return (
    <>
      <MobileuiuxHero />
      <MobileuiuxFaq />
<<<<<<< HEAD
=======
       <SocialMedia />
>>>>>>> 6010d3c (Add new features and updates)
    </>
  );
}

export default MobileappUiux;
