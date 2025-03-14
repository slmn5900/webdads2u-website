// "use client"
// import React from 'react'
// import'./HTML5.css'
// import Htmlbanner from './Html-banner'
// import AdvantagesofHTML from './Advantages-of-HTML'
// import BenefitsofUsingHTML5 from './Benefits-of-Using-HTML5'
// import Technicalstack from './Technical-Stack'
// import SocialMedia from './../../../components/common/SocialMedia'
// import Html5webdevelopment from './html5-web-development'
// import Webmobile from './Web-&-Mobile'
// const HtmlMain = () => {
//   return (
//     <>
//     <Htmlbanner />
//       <AdvantagesofHTML />
//       <BenefitsofUsingHTML5 />
//       <Technicalstack />
//       <SocialMedia />
//       <Html5webdevelopment />
//       <Webmobile />
//     </>
//   )
// }

// export default HtmlMain

"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import './HTML5.css';

// Dynamically import each component with SSR set to false
const Htmlbanner = dynamic(() => import('./Html-banner'), { ssr: false });
const AdvantagesofHTML = dynamic(() => import('./Advantages-of-HTML'), { ssr: false });
const BenefitsofUsingHTML5 = dynamic(() => import('./Benefits-of-Using-HTML5'), { ssr: false });
const Technicalstack = dynamic(() => import('./Technical-Stack'), { ssr: false });
const SocialMedia = dynamic(() => import('./../../../components/common/SocialMedia'), { ssr: false });
const Html5webdevelopment = dynamic(() => import('./html5-web-development'), { ssr: false });
const Webmobile = dynamic(() => import('./Web-&-Mobile'), { ssr: false });

const HtmlMain = () => {
  return (
    <>
      <Htmlbanner />
      <AdvantagesofHTML />
      <BenefitsofUsingHTML5 />
      <Technicalstack />
      <SocialMedia />
      <Html5webdevelopment />
      <Webmobile />
    </>
  );
}

export default HtmlMain;
