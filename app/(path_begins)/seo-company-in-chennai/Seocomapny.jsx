// "use client"
// import React from 'react'
// import SeoHero from './SeoHero'
// import './Seoservice.scss'
// import Seotab from './Seotab'
// import Lookingbest from './Lookingbest'
// import SeoFaq from './SeoFaq';
// const Seocomapny = () => {
//   return (
//     <>
//        <SeoHero/>
//   <Seotab/>
//   <Lookingbest/>
//   <SeoFaq/>
//     </>
//   )
// }

// export default Seocomapny

<<<<<<< HEAD

"use client";
=======
'use client';
>>>>>>> 6010d3c (Add new features and updates)
import React from 'react';
import dynamic from 'next/dynamic';
import './Seoservice.scss';

// Dynamically import each component with SSR set to false
<<<<<<< HEAD
=======
const ServiceWeProvide = dynamic(() => import('./ServiceWeProvide'), { ssr: false });
>>>>>>> 6010d3c (Add new features and updates)
const SeoHero = dynamic(() => import('./SeoHero'), { ssr: false });
const Seotab = dynamic(() => import('./Seotab'), { ssr: false });
const Lookingbest = dynamic(() => import('./Lookingbest'), { ssr: false });
const SeoFaq = dynamic(() => import('./SeoFaq'), { ssr: false });
<<<<<<< HEAD

const Seocomapny = () => {
  return (
    <>
      <SeoHero />
      <Seotab />
      <Lookingbest />
      <SeoFaq />
    </>
  );
}
=======
// const SliderimagebrandingdesignStreaming = dynamic(() => import('../../../components/'), { ssr: false });
const Seocomapny = () => {
    return (
        <>
            <SeoHero />
            <Seotab />
            <ServiceWeProvide />
            <Lookingbest />
            <SeoFaq />
        </>
    );
};
>>>>>>> 6010d3c (Add new features and updates)

export default Seocomapny;
