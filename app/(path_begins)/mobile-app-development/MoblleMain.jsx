// "use client"
// import React from 'react'
// import './mobile-app-development.css'
// import OurStreams from './Our-Streams'
// import OurStreamscard from './OurStreams-card'
// import SearchingBestobile from './Searching-Best-obile'
// import OffshoreMobileApp from './Offshore-Mobile-App'
// import AppDesignProcess from './App-Design-Process'
// import Industries from './Industries'
// import Businesseschoose from './Businesses-choose'
// import AppDevelopmentServices from './AppDevelopmentServices'
// import SocialMedia from '../../../components/common/SocialMedia'
// import Mobileappdevelopmentbanner from './mobile-app-development-banner'

// const MoblleMain = () => {
//   return (
//     <div>
//       <Mobileappdevelopmentbanner />
//       <OurStreams />
//       <OurStreamscard />
//       <SearchingBestobile />      
//       <OffshoreMobileApp />      
//       <AppDesignProcess />      
//       <Industries />      
//       <Businesseschoose />     
//       <SocialMedia />     
//       <AppDevelopmentServices />      
//     </div>
//   )
// }

// export default MoblleMain


"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import './mobile-app-development.css';

// Dynamically import each component with SSR set to false
const OurStreams = dynamic(() => import('./Our-Streams'), { ssr: false });
const OurStreamscard = dynamic(() => import('./OurStreams-card'), { ssr: false });
const SearchingBestobile = dynamic(() => import('./Searching-Best-obile'), { ssr: false });
const OffshoreMobileApp = dynamic(() => import('./Offshore-Mobile-App'), { ssr: false });
const AppDesignProcess = dynamic(() => import('./App-Design-Process'), { ssr: false });
const Industries = dynamic(() => import('./Industries'), { ssr: false });
const Businesseschoose = dynamic(() => import('./Businesses-choose'), { ssr: false });
const AppDevelopmentServices = dynamic(() => import('./AppDevelopmentServices'), { ssr: false });
const SocialMedia = dynamic(() => import('../../../components/common/SocialMedia'), { ssr: false });
const Mobileappdevelopmentbanner = dynamic(() => import('./mobile-app-development-banner'), { ssr: false });

const MoblleMain = () => {
  return (
    <div>
      <Mobileappdevelopmentbanner />
      <OurStreams />
      <OurStreamscard />
      <SearchingBestobile />      
      <OffshoreMobileApp />      
      <AppDesignProcess />      
      <Industries />      
      <Businesseschoose />     
      <SocialMedia />     
      <AppDevelopmentServices />      
    </div>
  );
};

export default MoblleMain;
