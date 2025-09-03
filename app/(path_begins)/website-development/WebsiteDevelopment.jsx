// "use client"
// import React from 'react'
// import WebsitedevHero from './WebsitedevHero'
// import WebdevService from './webdevService'
// import Websitetab from './Websitetab'
// import SocialMedia from '../../../components/common/SocialMedia'
// import "./websitedeveloment.scss"
// const WebsiteDevelopment = () => {
//   return (
//     <>
//        <WebsitedevHero />
//     <WebdevService />
//     <Websitetab />
//     <SocialMedia />
//     </>
//   )
// }

// export default WebsiteDevelopment












"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import "./websitedeveloment.scss";

// Dynamically import the components with SSR disabled
const WebsitedevHero = dynamic(() => import('./WebsitedevHero'), { ssr: false });
const WebdevService = dynamic(() => import('./WebdevService'), { ssr: false });
const Websitetab = dynamic(() => import('./Websitetab'), { ssr: false });
const SocialMedia = dynamic(() => import('../../../components/common/SocialMedia'), { ssr: false });

const WebsiteDevelopment = () => {
  return (
    <>
      <WebsitedevHero />
      <WebdevService />
      <Websitetab />
      <SocialMedia />
    </>
  );
};

export default WebsiteDevelopment;
