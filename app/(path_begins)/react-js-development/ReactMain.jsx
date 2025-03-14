// "use client"
// import React from 'react'
// import './react-js-development.css'
// import ReactjsDevelopmentBanner from './react-js-development-banner'
// import BestReactJS from './Best-React-JS'
// import AngularJS from './Angular-JS'
// import FrequentlyAskedQuestions from './Frequently-Asked-Questions'
// import LookingforReact from './Looking-for-React'
// import Libraries from './Libraries'
// import ReactjsFeatures from './Reactjs-Features'
// import BenefitsofReactjs from './Benefits-of-Reactjs'
// import SocialMedia from '../../../components/common/SocialMedia'
// const ReactMain = () => {
//   return (
//     <div>
//       <ReactjsDevelopmentBanner />
//       <BestReactJS />
//       <AngularJS />
//       <BenefitsofReactjs />
//       <ReactjsFeatures/>
//       <SocialMedia />
//       <Libraries/>
//       <LookingforReact/>
//       <FrequentlyAskedQuestions/>
//     </div>
//   )
// }

// export default ReactMain


"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import './react-js-development.css';

// Dynamically import each component with SSR set to false
const ReactjsDevelopmentBanner = dynamic(() => import('./react-js-development-banner'), { ssr: false });
const BestReactJS = dynamic(() => import('./Best-React-JS'), { ssr: false });
const AngularJS = dynamic(() => import('./Angular-JS'), { ssr: false });
const FrequentlyAskedQuestions = dynamic(() => import('./Frequently-Asked-Questions'), { ssr: false });
const LookingforReact = dynamic(() => import('./Looking-for-React'), { ssr: false });
const Libraries = dynamic(() => import('./Libraries'), { ssr: false });
const ReactjsFeatures = dynamic(() => import('./Reactjs-Features'), { ssr: false });
const BenefitsofReactjs = dynamic(() => import('./Benefits-of-Reactjs'), { ssr: false });
const SocialMedia = dynamic(() => import('../../../components/common/SocialMedia'), { ssr: false });

const ReactMain = () => {
  return (
    <div>
      <ReactjsDevelopmentBanner />
      <BestReactJS />
      <AngularJS />
      <BenefitsofReactjs />
      <ReactjsFeatures />
      <SocialMedia />
      <Libraries />
      <LookingforReact />
      <FrequentlyAskedQuestions />
    </div>
  );
}

export default ReactMain;
