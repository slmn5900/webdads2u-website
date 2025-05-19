// "use client"
// import React from 'react'
// import './ui-ux.css'
// import Uiuxbanner from './ui-ux-banner'
// import Webdevelopmentservices from './Web-Development-Services'
// import UXdesign from './UX-Design'
// import UXcesigncompany from './UX-Design-Company'
// import KeyelementUI from './Key-Elements-UI'
// import Fquiux from './FQ-ui-ux'
// import UXwebdesigndevelopment from './UX-Web-Design-Development'
// import WebsiteUXUIdesigningservices from './Website-UX-UI-Designing-Services'
// import SocialMedia from '../../../components/common/SocialMedia'
// import Uxdesign from './Best-UI/UX-Design'
// import Ux from './UX'
// import Uiuxsliser from './Ui-ux-sliser'
// import CircleTabs from './ui-ux-Interactive-Circle-tab'


// const page = () => {
//   return (
//     <div>
//       <Uiuxbanner />
//       <Webdevelopmentservices />
//       <UXdesign />
//       <UXcesigncompany />
//       <KeyelementUI />
//       <CircleTabs />
//       <Uiuxsliser />
//       <Ux />
//       <Uxdesign />
//       <SocialMedia />
//       <WebsiteUXUIdesigningservices />
//       <UXwebdesigndevelopment />
//       <Fquiux />
//     </div>
//   )
// }

// export default page


"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import './ui-ux.css';

// Dynamically import components with SSR set to false
const Uiuxbanner = dynamic(() => import('./ui-ux-banner'), { ssr: false });
const Webdevelopmentservices = dynamic(() => import('./Web-Development-Services'), { ssr: false });
const UXdesign = dynamic(() => import('./UX-Design'), { ssr: false });
const UXcesigncompany = dynamic(() => import('./UX-Design-Company'), { ssr: false });
const KeyelementUI = dynamic(() => import('./Key-Elements-UI'), { ssr: false });
const Fquiux = dynamic(() => import('./FQ-ui-ux'), { ssr: false });
const UXwebdesigndevelopment = dynamic(() => import('./UX-Web-Design-Development'), { ssr: false });
const WebsiteUXUIdesigningservices = dynamic(() => import('./Website-UX-UI-Designing-Services'), { ssr: false });
const SocialMedia = dynamic(() => import('../../../components/common/SocialMedia'), { ssr: false });
const Uxdesign = dynamic(() => import('./Best-UI/UX-Design'), { ssr: false });
const Ux = dynamic(() => import('./UX'), { ssr: false });
const Uiuxsliser = dynamic(() => import('./Ui-ux-sliser'), { ssr: false });
const CircleTabs = dynamic(() => import('./ui-ux-Interactive-Circle-tab'), { ssr: false });

const Page = () => {
  return (
    <div>
      <Uiuxbanner />
      <Webdevelopmentservices />
      <UXdesign />
      <UXcesigncompany />
      <KeyelementUI />
      <CircleTabs />
      <Uiuxsliser />
      <Ux />
      <Uxdesign />
<<<<<<< HEAD
      <SocialMedia />
      <WebsiteUXUIdesigningservices />
      <UXwebdesigndevelopment />
      <Fquiux />
=======
      <WebsiteUXUIdesigningservices />
      <UXwebdesigndevelopment />
      <Fquiux />
      <SocialMedia />
>>>>>>> 6010d3c (Add new features and updates)
    </div>
  );
}

export default Page;
